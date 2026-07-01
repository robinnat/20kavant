"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

const NETWORKS = ["YouTube", "TikTok", "Instagram", "X"];

export default function SignupForm() {
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [reseaux, setReseaux] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  function toggleReseau(n) {
    setReseaux((r) => (r.includes(n) ? r.filter((x) => x !== n) : [...r, n]));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    const mail = email.trim().toLowerCase();
    if (!prenom.trim()) return setError("Indique ton prénom.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) return setError("Email invalide.");

    setStatus("sending");
    const { error } = await supabase.auth.signInWithOtp({
      email: mail,
      options: {
        shouldCreateUser: true,
        emailRedirectTo: `${window.location.origin}/robinnat/inscription/confirmee`,
        data: { prenom: prenom.trim(), reseaux },
      },
    });
    if (error) {
      setStatus("error");
      setError(
        error.message?.includes("rate")
          ? "Trop de tentatives, réessaie dans quelques minutes."
          : "Une erreur est survenue. Réessaie."
      );
      return;
    }
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
        <h4>Vérifie ta boîte mail</h4>
        <p>
          On vient d&apos;envoyer un lien de confirmation à <strong>{email.trim().toLowerCase()}</strong>.
          Clique dessus pour valider ton inscription au concours.
        </p>
        <p className="signup-hint">Pense à regarder tes spams. Le lien est valable un moment.</p>
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
        Gratuit, sans obligation d&apos;achat. Un email de confirmation te sera envoyé pour valider
        ta participation.
      </p>
    </form>
  );
}
