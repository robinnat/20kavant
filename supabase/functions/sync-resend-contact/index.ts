// Edge Function : ajoute chaque inscription confirmée à l'Audience Resend.
// Déclenchée par un trigger AFTER INSERT sur public.contest_signups.
// Secrets attendus (Supabase → Edge Functions → Secrets) :
//   RESEND_API_KEY      : clé Resend "Full access" (accès Contacts/Audiences)
//   RESEND_AUDIENCE_ID  : ID de l'audience "20Kavant"
//   SYNC_SECRET         : secret partagé, doit matcher le header x-sync-secret du trigger
import "jsr:@supabase/functions-js/edge-runtime.d.ts";

Deno.serve(async (req: Request) => {
  const SYNC_SECRET = Deno.env.get("SYNC_SECRET");
  if (!SYNC_SECRET || req.headers.get("x-sync-secret") !== SYNC_SECRET) {
    return new Response("unauthorized", { status: 401 });
  }

  const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
  const AUDIENCE_ID = Deno.env.get("RESEND_AUDIENCE_ID");
  if (!RESEND_API_KEY || !AUDIENCE_ID) {
    return new Response("missing RESEND_API_KEY / RESEND_AUDIENCE_ID", { status: 500 });
  }

  let payload: any;
  try {
    payload = await req.json();
  } catch {
    return new Response("bad json", { status: 400 });
  }

  // Webhook Supabase : { type, table, record, old_record, schema }
  const record = payload?.record ?? payload;
  const email = record?.email;
  const prenom = record?.prenom ?? "";
  if (!email) return new Response("no email in payload", { status: 400 });

  const res = await fetch(`https://api.resend.com/audiences/${AUDIENCE_ID}/contacts`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, first_name: prenom, unsubscribed: false }),
  });

  const body = await res.text();
  // 409/422 = contact déjà présent → on considère que c'est bon.
  if (!res.ok && res.status !== 409 && res.status !== 422) {
    console.error("Resend error", res.status, body);
    return new Response(`resend error ${res.status}`, { status: 502 });
  }

  return new Response(JSON.stringify({ ok: true, email }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
});
