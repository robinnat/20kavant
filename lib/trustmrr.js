// ============================================================================
// Couche de données TrustMRR (server-side uniquement).
//
// Récupère le MRR réel de tes startups via l'API TrustMRR :
//   GET https://trustmrr.com/api/v1/startups/{slug}   (auth: Bearer tmrr_...)
//
// La clé est lue dans process.env.TRUSTMRR_API_KEY (à définir dans Vercel →
// Settings → Environment Variables). Si la clé est absente ou si l'appel
// échoue, on retombe sur les données démo pour que le site reste fonctionnel.
// ============================================================================

const API_BASE = "https://trustmrr.com/api/v1";

// Objectif de MRR affiché par le site.
const GOAL = 20000;

// Tes startups listées sur TrustMRR. Ajoute simplement un objet par projet.
// L'ordre ici est l'ordre d'affichage sur le site.
//   slug  : identifiant dans l'URL trustmrr.com/startup/<slug>
//   src   : libellé de la source affiché (Stripe, RevenueCat, …)
//   color : couleur d'accent du projet dans la liste
//   site  : site du produit (bouton "Visiter" dans la liste)
const STARTUPS = [
  { slug: "ninou", src: "RevenueCat", color: "#B79BE6", site: "https://getninou.app" },
  { slug: "magicon", src: "Stripe", color: "#E8589E", site: "https://magicon.io" },
  { slug: "flash", src: "RevenueCat", color: "#6FC6D6", site: "https://withflash.app" },
];

// Palette de secours si un projet n'a pas de couleur définie.
const PALETTE = ["#E8589E", "#F4936B", "#B79BE6", "#6FC6D6", "#7FE0A6"];

// Données démo — utilisées seulement si la clé API est absente ou en cas d'erreur.
const DEMO = {
  goal: GOAL,
  total: 7840,
  deltaMonth: 1240,
  demo: true,
  history: [],
  projects: [
    { name: "AdPilot", src: "Stripe", mrr: 3200, color: "#E8589E", url: "#" },
    { name: "Mondes", src: "Stripe", mrr: 2100, color: "#F4936B", url: "#" },
    { name: "LaunchKit", src: "Stripe", mrr: 1640, color: "#B79BE6", url: "#" },
    { name: "CelebDex", src: "RevenueCat", mrr: 900, color: "#6FC6D6", url: "#" },
  ],
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

async function fetchStartup(slug, key) {
  const res = await fetch(`${API_BASE}/startups/${slug}`, {
    headers: { Authorization: `Bearer ${key}` },
    // ISR : la donnée est recachée au plus toutes les heures.
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`TrustMRR ${slug} → HTTP ${res.status}`);
  const json = await res.json();
  return json.data;
}

export async function getTrustMrrData() {
  const key = process.env.TRUSTMRR_API_KEY;
  if (!key) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[TrustMRR] TRUSTMRR_API_KEY absente — données démo utilisées.");
    }
    return DEMO;
  }

  try {
    const historyByMonth = {};
    // Chaque startup est isolée : si l'une échoue (slug inconnu, clé sans
    // accès…), elle est ignorée et loggée au lieu de faire basculer tout le
    // site en données démo.
    const projects = (
      await Promise.all(
        STARTUPS.map(async (s, i) => {
          try {
            const d = await fetchStartup(s.slug, key);
            // Historique mensuel (si l'API le fournit) → agrégé tous projets.
            const hist = extractHistory(d);
            if (hist) {
              for (const [month, amount] of Object.entries(hist)) {
                historyByMonth[month] = (historyByMonth[month] ?? 0) + amount;
              }
            }
            // Montant affiché = MRR (déjà en dollars côté API). Le revenu des
            // 30 derniers jours n'est pas ajouté : pour un abonnement stable
            // c'est la même somme que le MRR (revenu récurrent), l'additionner
            // la compterait deux fois. On le garde seulement s'il dépasse le
            // MRR (ex. revenu ponctuel en plus de l'abonnement).
            const mrrUsd = pickMrr(d);
            const rev30Usd = pickRevenue30(d);
            const amount = Math.max(mrrUsd, rev30Usd);
            console.log(
              `[TrustMRR] ${s.slug}: mrr=$${mrrUsd}, 30j=$${rev30Usd} → $${Math.round(amount)}`
            );
            return {
              name: d?.name ?? s.slug,
              src: s.src ?? "Stripe",
              mrr: Math.round(amount),
              color: s.color ?? PALETTE[i % PALETTE.length],
              icon: normalizeIcon(d?.icon),
              url: `https://trustmrr.com/startup/${s.slug}`,
              site: s.site ?? null,
            };
          } catch (err) {
            console.error(`[TrustMRR] ${s.slug} en échec — projet ignoré:`, err);
            return null;
          }
        })
      )
    ).filter(Boolean);

    if (!projects.length) throw new Error("aucune startup récupérée");

    const total = projects.reduce((sum, p) => sum + p.mrr, 0);

    const history = Object.entries(historyByMonth)
      .map(([month, amount]) => ({ month, value: Math.round(amount) }))
      .sort((a, b) => (a.month < b.month ? -1 : 1));

    return { goal: GOAL, total, deltaMonth: 0, projects, history, demo: false };
  } catch (err) {
    console.error("[TrustMRR] échec de récupération, repli sur la démo:", err);
    return DEMO;
  }
}
