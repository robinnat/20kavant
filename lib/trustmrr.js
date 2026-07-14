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
  { slug: "coddo", src: "Stripe", color: "#F4936B", site: "https://coddo.ai" },
];

// Palette de secours si un projet n'a pas de couleur définie.
const PALETTE = ["#E8589E", "#F4936B", "#B79BE6", "#6FC6D6", "#7FE0A6"];

// Données démo — utilisées seulement si la clé API est absente ou en cas d'erreur.
const DEMO = {
  goal: GOAL,
  total: 7840,
  deltaMonth: 1240,
  demo: true,
  projects: [
    { name: "AdPilot", src: "Stripe", mrr: 3200, color: "#E8589E", url: "#" },
    { name: "Mondes", src: "Stripe", mrr: 2100, color: "#F4936B", url: "#" },
    { name: "LaunchKit", src: "Stripe", mrr: 1640, color: "#B79BE6", url: "#" },
    { name: "CelebDex", src: "RevenueCat", mrr: 900, color: "#6FC6D6", url: "#" },
  ],
};

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
    const projects = (
      await Promise.all(
        STARTUPS.map(async (s, i) => {
          const d = await fetchStartup(s.slug, key);
          // revenue.mrr est en cents (USD) → on ramène à l'unité.
          const cents = d?.revenue?.mrr ?? 0;
          return {
            name: d?.name ?? s.slug,
            src: s.src ?? "Stripe",
            mrr: Math.round(cents / 100),
            color: s.color ?? PALETTE[i % PALETTE.length],
            icon: normalizeIcon(d?.icon),
            url: `https://trustmrr.com/startup/${s.slug}`,
            site: s.site ?? null,
          };
        })
      )
    );

    const total = projects.reduce((sum, p) => sum + p.mrr, 0);

    return { goal: GOAL, total, deltaMonth: 0, projects, demo: false };
  } catch (err) {
    console.error("[TrustMRR] échec de récupération, repli sur la démo:", err);
    return DEMO;
  }
}
