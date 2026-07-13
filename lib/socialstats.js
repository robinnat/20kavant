// Cumul des abonnés sur les réseaux, récupéré côté serveur.
// Chaque source est en "best effort" : si un réseau bloque la requête,
// on retombe sur la valeur FALLBACK correspondante (mettre à jour de
// temps en temps). X n'a pas d'endpoint public gratuit → fallback only.
const FALLBACK = {
  youtube: null,
  tiktok: null,
  instagram: null,
  x: null,
};

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36";

async function fetchText(url, headers = {}) {
  const res = await fetch(url, {
    headers: { "user-agent": UA, "accept-language": "fr-FR,fr;q=0.9,en;q=0.8", ...headers },
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`${url} → ${res.status}`);
  return res.text();
}

// "12 400", "1,2 k", "1.2M"… → nombre entier
function parseCompact(raw) {
  if (!raw) return null;
  const s = String(raw).replace(/ | |\s/g, "").toLowerCase();
  const m = s.match(/^([\d.,]+)([km])?$/);
  if (!m) return null;
  const n = parseFloat(m[1].replace(",", "."));
  if (Number.isNaN(n)) return null;
  const mult = m[2] === "m" ? 1_000_000 : m[2] === "k" ? 1_000 : 1;
  return Math.round(n * mult);
}

async function getYouTube() {
  // Fiable si une clé API est fournie (YOUTUBE_API_KEY sur Vercel).
  if (process.env.YOUTUBE_API_KEY) {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&forHandle=robinnat20&key=${process.env.YOUTUBE_API_KEY}`,
      { next: { revalidate: 3600 } }
    );
    if (res.ok) {
      const data = await res.json();
      const count = Number(data?.items?.[0]?.statistics?.subscriberCount);
      if (count >= 0) return count;
    }
  }
  // Cookies de consentement : sans eux, YouTube renvoie une page RGPD
  // sans les stats quand la requête vient de certaines régions.
  const html = await fetchText("https://www.youtube.com/@robinnat20/about", {
    cookie: "CONSENT=YES+cb; SOCS=CAI",
  });
  const m =
    html.match(/([\d.,   ]+[km]?)\s*(?:abonnés|subscribers)/i) ||
    html.match(/"subscriberCount"\s*:\s*"?(\d+)"?/);
  return parseCompact(m?.[1]);
}

async function getTikTok() {
  const html = await fetchText("https://www.tiktok.com/@robinnat");
  const m = html.match(/"followerCount"\s*:\s*(\d+)/);
  return m ? Number(m[1]) : null;
}

async function getInstagram() {
  const res = await fetch(
    "https://i.instagram.com/api/v1/users/web_profile_info/?username=robinnat",
    {
      headers: { "user-agent": UA, "x-ig-app-id": "936619743392459" },
      next: { revalidate: 3600 },
    }
  );
  if (!res.ok) throw new Error(`instagram → ${res.status}`);
  const data = await res.json();
  const count = Number(data?.data?.user?.edge_followed_by?.count);
  return Number.isFinite(count) ? count : null;
}

async function safe(fn, fallback) {
  try {
    const v = await fn();
    return v ?? fallback;
  } catch {
    return fallback;
  }
}

export async function getSocialFollowers() {
  const [youtube, tiktok, instagram] = await Promise.all([
    safe(getYouTube, FALLBACK.youtube),
    safe(getTikTok, FALLBACK.tiktok),
    safe(getInstagram, FALLBACK.instagram),
  ]);
  const parts = { youtube, tiktok, instagram, x: FALLBACK.x };
  const total = Object.values(parts).reduce((sum, v) => sum + (v || 0), 0);
  return { total, parts };
}
