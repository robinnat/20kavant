-- Suppression du système d'emails (lien magique Supabase + synchronisation
-- Resend). L'inscription au concours se fait désormais en un clic, sans
-- vérification d'email et sans création de compte auth.
--
-- Appliquée le 31/07/2026 sur le projet Supabase "20kavant"
-- (merwefytafnmlsmhkmhs). Conservée ici pour l'historique.

-- 1. Plus de synchronisation vers Resend à chaque inscription.
drop trigger if exists on_contest_signup_created on public.contest_signups;
drop function if exists public.on_signup_sync_resend();

-- 2. Plus de compte auth créé : user_id devient facultatif.
--    (Les inscriptions historiques gardent le leur.)
alter table public.contest_signups alter column user_id drop not null;

-- 3. L'inscription est insérée directement depuis le site (rôle anon).
--    with check : interdit de s'attribuer le user_id d'un tiers, et impose
--    un email de forme valide pour limiter les insertions parasites.
--    Note : aucune policy SELECT pour anon — les inscriptions ne sont donc
--    pas lisibles publiquement, et `insert` ne doit pas utiliser RETURNING
--    (le client Supabase envoie `return=minimal` par défaut : OK).
drop policy if exists insert_own_signup on public.contest_signups;
create policy insert_signup_public on public.contest_signups
  for insert to anon, authenticated
  with check (
    user_id is null
    and email ~* '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$'
    and length(email) <= 254
  );

-- 4. Le compteur public suivait auth.users (créés par le lien magique).
--    Sans lien magique il resterait figé : il compte les inscriptions.
create or replace function public.get_signup_count()
returns bigint
language sql
stable
security definer
set search_path to 'public'
as $function$
  select count(*) from public.contest_signups;
$function$;

comment on table public.contest_signups is
  'Inscriptions au concours 20Kavant (sans vérification email). reseaux = purement informatif.';
