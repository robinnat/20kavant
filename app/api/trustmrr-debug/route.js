// Route de diagnostic : renvoie la réponse brute de l'API TrustMRR pour
// chaque startup, sans cache. À ouvrir avec ?key=debug20k :
//   https://20kavant.fr/api/trustmrr-debug?key=debug20k
// Les chiffres sont déjà publics sur trustmrr.com ; le paramètre évite
// juste l'indexation/le fuzzing. Supprimer la route une fois le souci réglé.

const SLUGS = ["ninou", "magicon", "coddo"];

export const dynamic = "force-dynamic";

export async function GET(req) {
  const url = new URL(req.url);
  if (url.searchParams.get("key") !== "debug20k") {
    return new Response("Not found", { status: 404 });
  }

  const apiKey = process.env.TRUSTMRR_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "TRUSTMRR_API_KEY absente de l'environnement Vercel" });
  }

  const out = { keyPrefix: `${apiKey.slice(0, 8)}…` };
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
