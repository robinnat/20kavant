"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";
import { supabase } from "../lib/supabase";

const NETWORKS = ["YouTube", "TikTok", "Instagram", "X"];
const PROFILS = ["Gamer", "Développeur", "Entrepreneur", "Créateur", "Autre"];

export default function SignupForm() {
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [profils, setProfils] = useState([]);
  const [reseaux, setReseaux] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");
  const [dejaInscrit, setDejaInscrit] = useState(false);

  function toggleReseau(n) {
    setReseaux((r) => (r.includes(n) ? r.filter((x) => x !== n) : [...r, n]));
  }
  function toggleProfil(p) {
    setProfils((r) => (r.includes(p) ? r.filter((x) => x !== p) : [...r, p]));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    const mail = email.trim().toLowerCase();
    if (!prenom.trim()) return setError("Indique ton prénom.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) return setError("Email invalide.");
    if (!profils.length) return setError("Dis-moi qui tu es.");

    setStatus("sending");
    // Inscription directe : pas de lien magique, pas d'email envoyé.
    const { error } = await supabase.from("contest_signups").insert({
      email: mail,
      prenom: prenom.trim(),
      profil: profils,
      reseaux,
    });
    // 23505 = email déjà présent → l'inscription existe, c'est un succès.
    if (error && error.code !== "23505") {
      setStatus("error");
      setError("Une erreur est survenue. Réessaie.");
      return;
    }
    setDejaInscrit(error?.code === "23505");
    track("signup_completed", {
      profils: profils.join(", "),
      reseaux: reseaux.join(", "),
    });
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="signup-card signup-sent">
        <div className="signup-check">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M4 12L9 17L20 6" stroke="#150B2E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h4>{prenom.trim() ? `C'est bon, ${prenom.trim()} !` : "C'est bon !"}</h4>
        <p>
          {dejaInscrit
            ? "Tu étais déjà inscrit avec cet email — ta participation est bien enregistrée."
            : "Tu es inscrit au concours. Tu participes à tous les tirages au sort jusqu'au 19/11/2026."}
        </p>
        <p className="signup-hint">Rien d&apos;autre à faire. Bonne chance !</p>
      </div>
    );
  }

  return (
    <form className="signup-card" onSubmit={onSubmit} noValidate>
      <div className="signup-field">
        <label htmlFor="su-prenom">Prénom</label>
        <input
          id="su-prenom"
          type="text"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          placeholder="Ton prénom"
          autoComplete="given-name"
        />
      </div>

      <div className="signup-field">
        <label htmlFor="su-email">Email</label>
        <input
          id="su-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="toi@email.com"
          autoComplete="email"
          inputMode="email"
        />
      </div>

      <div className="signup-field">
        <label>Tu es plutôt ? <span className="signup-opt">(plusieurs possibles)</span></label>
        <div className="signup-chips">
          {PROFILS.map((p) => (
            <button
              type="button"
              key={p}
              className={`signup-chip${profils.includes(p) ? " on" : ""}`}
              onClick={() => toggleProfil(p)}
              aria-pressed={profils.includes(p)}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="signup-field">
        <label>Tu me suis sur ? <span className="signup-opt">(facultatif)</span></label>
        <div className="signup-chips">
          {NETWORKS.map((n) => (
            <button
              type="button"
              key={n}
              className={`signup-chip${reseaux.includes(n) ? " on" : ""}`}
              onClick={() => toggleReseau(n)}
              aria-pressed={reseaux.includes(n)}
            >
              {n}
            </button>
          ))}
        </div>
      </div>

      {error && <div className="signup-error">{error}</div>}

      <button className="signup-submit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Envoi…" : "Je participe"}
      </button>
      <p className="signup-legal">
        Gratuit, sans obligation d&apos;achat. En t&apos;inscrivant, tu participes à tous les tirages
        au sort du concours jusqu&apos;au 19/11/2026.
      </p>
    </form>
  );
}
