"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../../../../lib/supabase";

export default function ConfirmeePage() {
  const [state, setState] = useState("loading"); // loading | success | error
  const [prenom, setPrenom] = useState("");

  useEffect(() => {
    let done = false;

    async function register(session) {
      if (done || !session) return;
      done = true;
      const user = session.user;
      const md = user.user_metadata || {};
      setPrenom(md.prenom || "");
      const { error } = await supabase.from("contest_signups").insert({
        user_id: user.id,
        email: user.email,
        prenom: md.prenom ?? null,
        profil: md.profil ?? null,
        reseaux: Array.isArray(md.reseaux) ? md.reseaux : [],
      });
      // 23505 = déjà inscrit → on considère que c'est bon
      if (error && error.code !== "23505") {
        setState("error");
        return;
      }
      setState("success");
    }

    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (session) register(session);
    });
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) register(data.session);
    });
    // filet : lien invalide / expiré si aucune session n'arrive
    const t = setTimeout(() => {
      if (!done) setState("error");
    }, 7000);

    return () => {
      sub.subscription.unsubscribe();
      clearTimeout(t);
    };
  }, []);

  return (
    <main className="confirm-wrap">
      <div className="confirm-card">
        {state === "loading" && (
          <>
            <div className="confirm-spinner" />
            <h1>Confirmation en cours…</h1>
            <p>On valide ton inscription au concours.</p>
          </>
        )}

        {state === "success" && (
          <>
            <div className="confirm-check">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M4 12L9 17L20 6" stroke="#150B2E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h1>{prenom ? `C'est validé, ${prenom} !` : "C'est validé !"}</h1>
            <p>
              Ton inscription au concours est confirmée. Tu es dans tous les tirages au sort, jusqu&apos;au
              palier final le 19/11/2026. Bonne chance !
            </p>
            <Link href="/robinnat" className="confirm-cta">Retour au défi →</Link>
          </>
        )}

        {state === "error" && (
          <>
            <div className="confirm-cross">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M6 6L18 18M18 6L6 18" stroke="#150B2E" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <h1>Lien expiré ou invalide</h1>
            <p>Ce lien de confirmation n&apos;est plus valable. Recommence l&apos;inscription depuis la page du défi.</p>
            <Link href="/robinnat#participer" className="confirm-cta">Refaire l&apos;inscription →</Link>
          </>
        )}
      </div>
    </main>
  );
}
