import { createClient } from "@supabase/supabase-js";

// Clés PUBLIQUES du projet Supabase "20kavant" (protégées par RLS — sûres à
// exposer côté client). Surchargeables via variables d'env si besoin.
const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://merwefytafnmlsmhkmhs.supabase.co";
const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_TCROIdcqSjhezKg77NFyXg_E6b5JYFh";

// Client navigateur. Le site n'utilise plus l'authentification (l'inscription
// au concours est une simple insertion en base) : on désactive tout ce qui
// touche aux sessions pour ne rien stocker chez le visiteur.
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
});
