import { createClient } from "@supabase/supabase-js";

// Clés PUBLIQUES du projet Supabase "20kavant" (protégées par RLS — sûres à
// exposer côté client). Surchargeables via variables d'env si besoin.
const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://merwefytafnmlsmhkmhs.supabase.co";
const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_TCROIdcqSjhezKg77NFyXg_E6b5JYFh";

// Client navigateur : flux implicite (le lien magique renvoie les jetons dans
// l'URL, récupérés automatiquement au chargement de la page de confirmation).
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    flowType: "implicit",
    detectSessionInUrl: true,
    persistSession: true,
    autoRefreshToken: true,
  },
});
