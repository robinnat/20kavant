// Rafraîchissement à la demande des chiffres TrustMRR.
//
//   https://20kavant.fr/api/refresh
//
// Vide le cache de la page /robinnat : le prochain chargement affichera les
// montants à jour, sans attendre la régénération automatique (30 min) ni
// redéployer. La réponse renvoie aussi les montants lus à l'instant, pour
// vérifier d'un coup d'œil que TrustMRR a bien pris en compte un paiement.
//
// Pas de secret à configurer : l'appel ne fait que rafraîchir des chiffres
// déjà publics. Un intervalle minimum évite qu'un appel répété ne déclenche
// une rafale de requêtes vers l'API TrustMRR (limite : 20 req/min).

import { revalidatePath } from "next/cache";
import { getTrustMrrData } from "../../../lib/trustmrr";

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

  revalidatePath("/robinnat");

  // Lecture directe (non cachée) : ce que TrustMRR renvoie à cet instant.
  let chiffres;
  try {
    const data = await getTrustMrrData();
    chiffres = {
      demo: data.demo,
      total: data.total,
      projets: data.projects.map((p) => ({ nom: p.name, montant: p.mrr })),
    };
  } catch (err) {
    chiffres = { erreur: String(err) };
  }

  return Response.json({
    ok: true,
    rafraichi: true,
    message: "Cache vidé. Recharge la page du site pour voir les montants ci-dessous.",
    chiffres,
    a: new Date().toISOString(),
  });
}
