// Rafraîchissement à la demande des chiffres TrustMRR.
//
//   https://20kavant.fr/api/refresh
//
// Vide le cache des pages /robinnat et /robinnat/concours (et celui des
// appels TrustMRR) : le prochain chargement affichera les
// montants à jour, sans attendre la régénération automatique (30 min) ni
// redéployer. La réponse renvoie aussi les montants lus à l'instant, pour
// vérifier d'un coup d'œil que TrustMRR a bien pris en compte un paiement.
//
// Pas de secret à configurer : l'appel ne fait que rafraîchir des chiffres
// déjà publics. Un intervalle minimum évite qu'un appel répété ne déclenche
// une rafale de requêtes vers l'API TrustMRR (limite : 20 req/min).

import { revalidatePath, revalidateTag } from "next/cache";
import { getTrustMrrData, TAG_TRUSTMRR } from "../../../lib/trustmrr";

export const dynamic = "force-dynamic";

const INTERVALLE_MIN_MS = 30_000;
let dernierAppel = 0;

export async function GET() {
  const maintenant = Date.now();
  const depuisDernier = maintenant - dernierAppel;

  if (dernierAppel && depuisDernier < INTERVALLE_MIN_MS) {
    return Response.json({
      ok: true,
      rafraichi: false,
      message: `Déjà rafraîchi il y a ${Math.round(depuisDernier / 1000)}s. Recharge simplement la page.`,
    });
  }
  dernierAppel = maintenant;

  // 1. Lecture directe (non cachée) : ce que TrustMRR renvoie à cet instant.
  let data;
  try {
    data = await getTrustMrrData({ frais: true });
  } catch (err) {
    // TrustMRR incomplet : on ne vide RIEN. Une régénération demandée ici
    // serait bloquante (pas de page servie en attendant) et finirait en
    // page 500 ; la page en cache reste en ligne jusqu'au retour de l'API.
    return Response.json({
      ok: false,
      rafraichi: false,
      message: "TrustMRR ne répond pas pour toutes les apps : pages gardées telles quelles. Réessaie plus tard.",
      chiffres: { erreur: String(err) },
      a: new Date().toISOString(),
    });
  }

  // 2. Lecture complète : on vide le cache des appels TrustMRR (tag
  // "trustmrr", 30 min) AVANT celui des pages, sinon la page régénérée
  // relirait les montants en cache.
  revalidateTag(TAG_TRUSTMRR);
  revalidatePath("/robinnat");
  revalidatePath("/robinnat/concours");

  return Response.json({
    ok: true,
    rafraichi: true,
    message: "Cache vidé. Recharge la page du site pour voir les montants ci-dessous.",
    chiffres: {
      demo: data.demo,
      total: data.total,
      projets: data.projects.map((p) => ({ nom: p.name, montant: p.mrr })),
    },
    a: new Date().toISOString(),
  });
}
