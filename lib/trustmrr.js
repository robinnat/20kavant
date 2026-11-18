// ============================================================================
// Couche de données TrustMRR (server-side uniquement).
//
// Récupère le revenu réel de tes startups via l'API TrustMRR :
//   GET https://trustmrr.com/api/v1/startups/{slug}   (auth: Bearer tmrr_...)
//
// La clé est lue dans process.env.TRUSTMRR_API_KEY (à définir dans Vercel →
// Settings → Environment Variables).
//
// Règle (18/11/2026) : JAMAIS de chiffre de démonstration ni de total partiel
// en production. Le site est public : un chiffre faux est un chiffre inventé.
//   - Chaque startup est réessayée (3 essais) ; un échec isolé reprend la
//     dernière valeur réelle lue par cette instance (moins de 24 h).
//   - S'il manque encore une startup : en production, on LÈVE une erreur.
//     Next.js garde alors la dernière page générée avec succès (ISR) et
//     réessaie à la requête suivante. Pendant le build (aucune page en cache),
//     on renvoie un état neutre : compteur masqué, aucun montant.
//   - Les données de démo ne servent qu'en développement local.
// ============================================================================

// Fraîcheur des chiffres (corrigé le 18/11/2026). Les appels TrustMRR sont
// mis en cache 30 min (`next.revalidate`) avec le tag "trustmrr". C'est
// indispensable : un `fetch` en `no-store` rend la page DYNAMIQUE dans Next.js
// (recalculée à chaque visite, `Cache-Control: no-store`), ce qui annule l'ISR
// de app/robinnat/page.js, fait 3 appels TrustMRR par visite (limite 20/min)
// et transforme une erreur levée par `repli()` en page 500.
// Le délai est le même que celui des pages (1800 s). Pire cas : un chiffre
// vieux d'environ 1 h (cache de données régénéré juste avant la page). Pour
// tout rafraîchir d'un coup : /api/refresh (revalidateTag + revalidatePath).
// Seules les réponses HTTP 200 sont mises en cache par Next.js : une erreur
// (429, 5xx) n'est jamais gardée.
export const TAG_TRUSTMRR = "trustmrr";
export const FRAICHEUR_S = 1800;

// Adresse de l'API. Surchargeable UNIQUEMENT pour les essais locaux (faux
// serveur TrustMRR) ; jamais définie sur Vercel.
const API_BASE = process.env.TRUSTMRR_API_BASE || "https://trustmrr.com/api/v1";

// Objectif de MRR affiché par le site.
const GOAL = 20000;

// Tes startups listées sur TrustMRR. Ajoute simplement un objet par projet.
// L'ordre ici n'a pas d'importance : la liste affichée est triée par revenu
// décroissant (voir getTrustMrrData).
//   slug  : identifiant dans l'URL trustmrr.com/startup/<slug>
//   src   : libellé de la source affiché (Stripe, RevenueCat, …)
//   color : couleur d'accent du projet dans la liste
//   site  : site du produit (bouton "Visiter" dans la liste)
const STARTUPS = [
  { slug: "ninou", src: "RevenueCat", color: "#B79BE6", site: "https://getninou.app" },
  { slug: "magicon", src: "Stripe", color: "#E8589E", site: "https://magicon.io" },
  { slug: "flash", src: "RevenueCat", color: "#6FC6D6", site: "https://withflash.app" },
];

// Projets sans revenus suivis par TrustMRR : affichés dans la liste, mais
// sans montant ni pourcentage (mrr = null). Ajoute simplement une entrée.
//   icon : le logo est servi par un service d'icônes à partir du domaine ;
//          si l'image ne charge pas, l'initiale du nom prend le relais.
//          Pour un vrai logo, dépose le fichier dans public/ et mets son
//          chemin ici (ex. "/logos/deployapp.png").
const AUTRES_PROJETS = [
  { name: "DeployApp", site: "https://deployapp.io", color: "#7A4FBF" },
  { name: "Citatur", site: "https://citatur.com", color: "#D42D7D" },
  { name: "DispoSpot", site: "https://dispospot.com", color: "#B85520" },
  { name: "Domainium", site: "https://domainium.io", color: "#2A7F8C" },
];

function autresProjets() {
  return AUTRES_PROJETS.map((p) => {
    const domaine = p.site.replace(/^https?:\/\//, "").replace(/\/$/, "");
    return {
      name: p.name,
      src: domaine,
      mrr: null, // pas de revenu suivi → aucun montant affiché
      color: p.color,
      icon: p.icon ?? `https://icons.duckduckgo.com/ip3/${domaine}.ico`,
      url: p.site,
      site: p.site,
    };
  });
}

// Ordre d'affichage de la liste : du plus gros revenu au plus petit. Les
// projets sans revenu suivi (mrr null) ne sont pas comparables aux autres, ils
// ferment donc la liste au lieu d'être triés avec eux.
function parRevenu(projects) {
  const suivis = projects.filter((p) => p.mrr != null).sort((a, b) => b.mrr - a.mrr);
  const sansRevenu = projects.filter((p) => p.mrr == null);
  return [...suivis, ...sansRevenu];
}

// Palette de secours si un projet n'a pas de couleur définie.
const PALETTE = ["#E8589E", "#F4936B", "#B79BE6", "#6FC6D6", "#7FE0A6"];

// Données démo : développement local UNIQUEMENT (jamais en production).
const DEMO = {
  goal: GOAL,
  total: 7840,
  deltaMonth: 1240,
  demo: true,
  history: [],
  // L'ordre écrit ici n'a pas d'importance : parRevenu s'en charge.
  projects: parRevenu([
    { name: "LaunchKit", src: "Stripe", mrr: 1640, color: "#B79BE6", url: "#" },
    { name: "CelebDex", src: "RevenueCat", mrr: 900, color: "#6FC6D6", url: "#" },
    { name: "AdPilot", src: "Stripe", mrr: 3200, color: "#E8589E", url: "#" },
    { name: "Mondes", src: "Stripe", mrr: 2100, color: "#F4936B", url: "#" },
    ...autresProjets(),
  ]),
};

// "last_30_days", "last30Days", "LAST30DAYS" → "last30days"
const norm = (s) => String(s).toLowerCase().replace(/[^a-z0-9]/g, "");

// Cherche une valeur numérique par nom de champ, où qu'elle soit dans la
// réponse (parcours en largeur). Le nommage exact de l'API TrustMRR n'est pas
// documenté publiquement : plutôt que de deviner un chemin, on accepte
// plusieurs alias et on descend dans les objets imbriqués.
function findNumber(root, aliases) {
  const wanted = new Set(aliases.map(norm));
  const queue = [root];
  let depth = 0;
  while (queue.length && depth < 500) {
    const node = queue.shift();
    depth++;
    if (!node || typeof node !== "object") continue;
    for (const [k, v] of Object.entries(node)) {
      if (wanted.has(norm(k))) {
        const n = typeof v === "string" ? Number(v) : v;
        if (typeof n === "number" && Number.isFinite(n)) return n;
      }
      if (v && typeof v === "object" && !Array.isArray(v)) queue.push(v);
    }
  }
  return null;
}

// MRR d'une startup, en dollars (l'API TrustMRR renvoie des montants déjà
// en unité, pas en centimes — ex. 10.24 = $10.24).
function pickMrr(d) {
  return findNumber(d, ["mrr", "monthly_recurring_revenue", "mrr_cents", "current_mrr"]) ?? 0;
}

// Revenu total depuis le début, en dollars. On lit d'abord le chemin connu
// (`revenue.total`) : « total » est un nom trop générique pour le chercher à
// l'aveugle dans toute la réponse, on risquerait un autre champ.
function pickTotal(d) {
  const direct = d?.revenue?.total;
  if (typeof direct === "number" && Number.isFinite(direct)) return direct;
  return (
    findNumber(d, ["total_revenue", "revenue_total", "all_time_revenue", "lifetime_revenue"]) ?? 0
  );
}

// Revenu des 30 derniers jours, en dollars.
function pickRevenue30(d) {
  return (
    findNumber(d, [
      "last_30_days",
      "last30Days",
      "last_30d",
      "revenue_30d",
      "past_30_days",
      "thirty_days",
      "monthly_revenue",
    ]) ?? 0
  );
}

// Historique de revenus d'une startup, si l'API en renvoie un.
// Le nom et la forme du champ ne sont pas documentés publiquement, on essaie
// les emplacements plausibles ; sinon on log les clés disponibles (Vercel).
// Retourne { "2026-04": dollars, ... } ou null.
function extractHistory(d) {
  const candidates = [
    d?.revenueHistory,
    d?.revenue_history,
    d?.revenueChart,
    d?.revenue?.history,
    d?.revenue?.chart,
    d?.revenue?.monthly,
    d?.history,
    d?.chart,
    d?.timeseries,
    d?.timeSeries,
    d?.monthlyRevenue,
  ];
  const arr = candidates.find(Array.isArray);
  if (!arr) {
    console.log(
      "[TrustMRR] pas d'historique dans la réponse — clés:",
      Object.keys(d ?? {}),
      "| revenue:",
      Object.keys(d?.revenue ?? {})
    );
    return null;
  }
  const byMonth = {};
  for (const item of arr) {
    if (!item || typeof item !== "object") continue;
    const dateRaw = item.date ?? item.month ?? item.period ?? item.day ?? item.timestamp;
    const isLevel = typeof item.mrr === "number"; // série de niveau (MRR) vs encaissements
    const val = item.mrr ?? item.revenue ?? item.total ?? item.amount ?? item.value;
    if (dateRaw == null || typeof val !== "number") continue;
    const dt = new Date(dateRaw);
    if (Number.isNaN(+dt)) continue;
    const month = `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, "0")}`;
    // Niveau (MRR) → on garde la dernière valeur du mois ; encaissements → on somme.
    byMonth[month] = isLevel ? val : (byMonth[month] ?? 0) + val;
  }
  return Object.keys(byMonth).length ? byMonth : null;
}

// Normalise l'URL d'icône renvoyée par l'API (absolue, relative, ou vide).
function normalizeIcon(icon) {
  if (!icon || typeof icon !== "string") return null;
  if (/^https?:\/\//.test(icon)) return icon;
  return `https://trustmrr.com${icon.startsWith("/") ? "" : "/"}${icon}`;
}

const ESSAIS = 3;
const DELAI_MS = 8000; // durée max d'un appel

const pause = (ms) => new Promise((r) => setTimeout(r, ms));

// Un appel, réessayé en cas d'erreur réseau, de délai dépassé, de limite de
// débit (429) ou d'erreur serveur (5xx). Un autre 4xx (slug inconnu, clé
// refusée) ne se réessaie pas.
async function fetchStartup(slug, key, fetchImpl, frais) {
  let derniere;
  for (let essai = 1; essai <= ESSAIS; essai++) {
    let res;
    try {
      res = await fetchImpl(`${API_BASE}/startups/${slug}`, {
        headers: { Authorization: `Bearer ${key}` },
        // Cache de données de 30 min (voir FRAICHEUR_S) : garde la page
        // statique (ISR). `frais` : lecture directe pour /api/refresh.
        ...(frais
          ? { cache: "no-store" }
          : { next: { revalidate: FRAICHEUR_S, tags: [TAG_TRUSTMRR] } }),
        signal: AbortSignal.timeout(DELAI_MS),
      });
    } catch (err) {
      derniere = err; // réseau ou délai dépassé : on réessaie
      if (essai < ESSAIS) await pause(600 * essai);
      continue;
    }
    if (res.ok) {
      const json = await res.json();
      if (!json?.data) throw new Error(`TrustMRR ${slug} → réponse sans data`);
      return json.data;
    }
    derniere = new Error(`TrustMRR ${slug} → HTTP ${res.status}`);
    if (res.status !== 429 && res.status < 500) throw derniere;
    if (essai < ESSAIS) {
      // Retry-After (en secondes) respecté, borné à 5 s.
      const ra = Number(res.headers?.get?.("retry-after"));
      await pause(Number.isFinite(ra) && ra > 0 ? Math.min(ra, 5) * 1000 : 600 * essai);
    }
  }
  throw derniere;
}

// Dernière valeur réelle lue par cette instance, par startup. Comble un échec
// isolé sans retomber sur un total partiel.
const dernierConnu = new Map();
const VALIDITE_CONNU_MS = 24 * 60 * 60 * 1000;

// Le build (`next build`) n'a pas encore de page en cache à garder.
const enBuild = () => process.env.NEXT_PHASE === "phase-production-build";
const enProduction = () => process.env.NODE_ENV === "production";

// État neutre : aucun montant ; les composants masquent le compteur.
function indisponible() {
  return {
    goal: GOAL,
    total: null,
    deltaMonth: 0,
    projects: [
      ...STARTUPS.map((s, i) => ({
        name: s.slug.charAt(0).toUpperCase() + s.slug.slice(1),
        src: s.src ?? "Stripe",
        mrr: null,
        color: s.color ?? PALETTE[i % PALETTE.length],
        icon: null,
        url: `https://trustmrr.com/startup/${s.slug}`,
        site: s.site ?? null,
      })),
      ...autresProjets(),
    ],
    history: [],
    demo: false,
    indisponible: true,
  };
}

// Données incomplètes : la réponse dépend de l'environnement.
function repli(raison) {
  if (!enProduction()) {
    console.warn(`[TrustMRR] ${raison} : données démo (développement local seulement).`);
    return DEMO;
  }
  if (enBuild()) {
    console.error(`[TrustMRR] ${raison} : compteur masqué pour ce build.`);
    return indisponible();
  }
  // En production, à l'exécution : l'erreur fait garder par l'ISR la dernière
  // page réussie. Aucun chiffre faux n'est servi.
  throw new Error(`[TrustMRR] ${raison} : page précédente conservée.`);
}

// Réservé aux tests (scripts/test-trustmrr.mjs).
export function _oublierDernierConnu() {
  dernierConnu.clear();
}

// `frais: true` : lecture sans cache, réservée à /api/refresh (route
// dynamique). Les pages appellent getTrustMrrData() sans option.
export async function getTrustMrrData({ fetchImpl = fetch, frais = false } = {}) {
  const key = process.env.TRUSTMRR_API_KEY;
  if (!key) return repli("TRUSTMRR_API_KEY absente");

  const lus = [];
  const manquants = [];

  // Appels l'un après l'autre, pas en rafale : l'API limite le débit.
  for (const [i, s] of STARTUPS.entries()) {
    try {
      const d = await fetchStartup(s.slug, key, fetchImpl, frais);
      // Montant affiché = revenu TOTAL depuis le début (déjà en dollars côté
      // API). Le MRR et le revenu 30 jours restent lus pour les logs.
      const amount = pickTotal(d);
      console.log(
        `[TrustMRR] ${s.slug}: total=$${amount} (mrr=$${pickMrr(d)}, 30j=$${pickRevenue30(d)})`
      );
      const lu = {
        projet: {
          name: d?.name ?? s.slug,
          src: s.src ?? "Stripe",
          mrr: Math.round(amount),
          color: s.color ?? PALETTE[i % PALETTE.length],
          icon: normalizeIcon(d?.icon),
          url: `https://trustmrr.com/startup/${s.slug}`,
          site: s.site ?? null,
        },
        // Historique mensuel (si l'API le fournit) → agrégé tous projets.
        hist: extractHistory(d),
      };
      dernierConnu.set(s.slug, { ...lu, at: Date.now() });
      lus.push(lu);
    } catch (err) {
      const connu = dernierConnu.get(s.slug);
      if (connu && Date.now() - connu.at < VALIDITE_CONNU_MS) {
        console.warn(`[TrustMRR] ${s.slug} en échec, dernière valeur réelle reprise: ${err}`);
        lus.push(connu);
      } else {
        console.error(`[TrustMRR] ${s.slug} en échec: ${err}`);
        manquants.push(s.slug);
      }
    }
  }

  // Un total partiel serait un chiffre faux : tout ou rien.
  if (manquants.length) return repli(`startup(s) manquante(s) : ${manquants.join(", ")}`);

  const historyByMonth = {};
  for (const { hist } of lus) {
    for (const [month, amount] of Object.entries(hist ?? {})) {
      historyByMonth[month] = (historyByMonth[month] ?? 0) + amount;
    }
  }
  const projects = lus.map((l) => l.projet);
  const total = projects.reduce((sum, p) => sum + (p.mrr ?? 0), 0);

  const history = Object.entries(historyByMonth)
    .map(([month, amount]) => ({ month, value: Math.round(amount) }))
    .sort((a, b) => (a.month < b.month ? -1 : 1));

  return {
    goal: GOAL,
    total,
    deltaMonth: 0,
    projects: parRevenu([...projects, ...autresProjets()]),
    history,
    demo: false,
  };
}
