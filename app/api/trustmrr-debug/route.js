// Route de diagnostic temporaire : renvoie la réponse brute de l'API TrustMRR
// pour chaque startup, sans cache.
//   https://20kavant.fr/api/trustmrr-debug
// Les montants sont déjà publics sur trustmrr.com. Aucune clé n'est exposée
// (seulement un booléen indiquant sa présence). À supprimer une fois réglé.

const SLUGS = ["ninou", "magicon", "coddo"];

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const apiKey = process.env.TRUSTMRR_API_KEY;
  const out = {
    ok: true,
    hasKey: Boolean(apiKey),
    keyLength: apiKey ? apiKey.length : 0,
    now: new Date().toISOString(),
  };

  if (!apiKey) {
    out.error = "TRUSTMRR_API_KEY absente de l'environnement Vercel";
    return Response.json(out);
  }

  for (const slug of SLUGS) {
    try {
      const res = await fetch(`https://trustmrr.com/api/v1/startups/${slug}`, {
        headers: { Authorization: `Bearer ${apiKey}` },
        cache: "no-store",
      });
      const text = await res.text();
      let body;
      try {
        body = JSON.parse(text);
      } catch {
        body = text.slice(0, 800);
      }
      out[slug] = { status: res.status, body };
    } catch (err) {
      out[slug] = { fetchError: String(err) };
    }
  }
  return Response.json(out);
}
