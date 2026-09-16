"use client";

import { useState } from "react";

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwtIgtRGYz7c11rl2YQR3u928V7UvCYO2t0KWGM-Fi-AuDcBbnQHhyBdk8oF5T-rULUHg/exec";

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

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" style={{ width: 24, height: 24 }}>
      <path
        d="M5 13l4 4L19 7"
        stroke="#127A4B"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContestForm() {
  const [email, setEmail] = useState("");
  const [handle, setHandle] = useState("");
  const [followed, setFollowed] = useState({}); // { YouTube: true, ... }
  const [pending, setPending] = useState({}); // réseaux en cours de vérif (5s)
  const [status, setStatus] = useState("idle"); // idle | sending | ok | dup | error
  const [tickets, setTickets] = useState(0);

  const followedCount = SOCIALS.filter((s) => followed[s.name]).length;
  const canSubmit =
    followedCount >= 1 && email.trim() !== "" && status !== "sending" && status !== "ok";

  function onFollow(s) {
    if (followed[s.name] || pending[s.name]) return;
    setPending((p) => ({ ...p, [s.name]: true }));
    setTimeout(() => {
      setPending((p) => {
        const n = { ...p };
        delete n[s.name];
        return n;
      });
      setFollowed((f) => ({ ...f, [s.name]: true }));
    }, 5000);
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!canSubmit) return;
    setStatus("sending");
    try {
      const res = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          email,
          handle,
          networks: SOCIALS.filter((s) => followed[s.name]).map((s) => s.name),
        }),
      });
      const data = await res.json();
      if (data.ok) {
        setTickets(data.tickets || followedCount);
        setStatus("ok");
        setEmail("");
        setHandle("");
        setFollowed({});
      } else if (data.error === "email_exists") {
        setStatus("dup");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contest-form" onSubmit={onSubmit}>
      <div className="form-follow">
        <div className="form-step-label">1 · Suis-moi sur les réseaux</div>
        <div className="social-row">
          {SOCIALS.map((s) => {
            const isFollowed = !!followed[s.name];
            const isPending = !!pending[s.name];
            return (
              <a
                key={s.name}
                className={`follow-btn${isFollowed ? " followed" : ""}${isPending ? " pending" : ""}`}
                href={isFollowed || isPending ? undefined : s.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onFollow(s)}
                aria-disabled={isFollowed || isPending}
              >
                <div className="social-icon" style={{ background: `${s.color}1f` }}>
                  {isFollowed ? <Check /> : s.icon}
                </div>
                <div className="social-name">
                  {isFollowed ? "Suivi · 1 ticket" : isPending ? "Vérification…" : s.name}
                </div>
              </a>
            );
          })}
        </div>
        <p className="form-hint">
          Chaque réseau suivi = 1 ticket. La coche apparaît après 5 secondes.
        </p>
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
          placeholder="@pseudo"
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
        />
        <small className="field-hint">
          Optionnel · ton @pseudo nous aide à te retrouver si tu gagnes
        </small>
        <button type="submit" className="btn" disabled={!canSubmit}>
          {status === "sending"
            ? "Envoi…"
            : status === "ok"
              ? "Inscrit ✓"
              : `Participer (${followedCount} ticket${followedCount > 1 ? "s" : ""})`}
        </button>
      </div>

      {status === "ok" && (
        <p className="form-note">
          T&apos;es dans le tirage avec {tickets} ticket{tickets > 1 ? "s" : ""}. Bonne chance 🤞
        </p>
      )}
      {status === "dup" && <p className="form-note err">Cet email est déjà inscrit.</p>}
      {status === "error" && <p className="form-note err">Oups, une erreur. Réessaie.</p>}
    </form>
  );
}
