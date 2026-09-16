"use client";

import { useState } from "react";

// URL du Google Apps Script (Web App) qui écrit dans le Google Sheet.
// À remplir une fois le script déployé (voir étapes fournies à Robin).
const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL || "";

const SOCIALS = [
  {
    name: "YouTube",
    url: "https://youtube.com/@robinnat20",
    color: "#D42D7D",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M9 8L17 12L9 16V8Z" fill="#D42D7D" />
        <rect x="3" y="5" width="18" height="14" rx="3" stroke="#D42D7D" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@robinnat",
    color: "#7A4FBF",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M12 4V15.5C12 17.43 10.43 19 8.5 19C6.57 19 5 17.43 5 15.5C5 13.57 6.57 12 8.5 12"
          stroke="#7A4FBF"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M12 4C12 6.5 14 8.3 16.5 8.3"
          stroke="#7A4FBF"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/robinnat",
    color: "#B85520",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="16" height="16" rx="5" stroke="#B85520" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="3.4" stroke="#B85520" strokeWidth="1.6" />
        <circle cx="16.6" cy="7.4" r="1" fill="#B85520" />
      </svg>
    ),
  },
];

export default function ContestForm() {
  const [email, setEmail] = useState("");
  const [handle, setHandle] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | ok | error

  async function onSubmit(e) {
    e.preventDefault();
    if (!email || !APPS_SCRIPT_URL) return;
    setStatus("sending");
    try {
      // mode no-cors + text/plain : évite le préflight CORS du Web App
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ email, handle }),
      });
      setStatus("ok");
      setEmail("");
      setHandle("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contest-form" onSubmit={onSubmit}>
      <div className="form-follow">
        <div className="form-step-label">1 · Suis-moi sur les réseaux</div>
        <div className="social-row">
          {SOCIALS.map((s) => (
            <a key={s.name} className="social-icon-link" href={s.url} target="_blank" rel="noopener">
              <div className="social-icon" style={{ background: `${s.color}1f` }}>
                {s.icon}
              </div>
              <div className="social-name">{s.name}</div>
            </a>
          ))}
        </div>
        <p className="form-hint">Chaque réseau suivi = une chance de gagner en plus.</p>
      </div>

      <div className="form-fields">
        <div className="form-step-label">2 · Ton email pour participer</div>
        <input
          type="email"
          required
          placeholder="ton@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="@pseudo (optionnel)"
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
        />
        <button
          type="submit"
          className="btn"
          disabled={status === "sending" || status === "ok" || !APPS_SCRIPT_URL}
        >
          {status === "sending" ? "Envoi…" : status === "ok" ? "Inscrit ✓" : "Participer"}
        </button>
      </div>

      {status === "ok" && <p className="form-note">T&apos;es dans le tirage. Bonne chance 🤞</p>}
      {status === "error" && <p className="form-note err">Oups, une erreur. Réessaie.</p>}
    </form>
  );
}
