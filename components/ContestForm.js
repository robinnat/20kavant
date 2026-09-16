"use client";

import { useEffect, useState } from "react";

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwtIgtRGYz7c11rl2YQR3u928V7UvCYO2t0KWGM-Fi-AuDcBbnQHhyBdk8oF5T-rULUHg/exec";
const LS_EMAIL = "20kavant_concours_email";
const LS_NETS = "20kavant_concours_networks";
const LS_TICKETS = "20kavant_concours_tickets";

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
  const [followed, setFollowed] = useState({}); // { YouTube: true, ... }
  const [pending, setPending] = useState({}); // réseaux en cours de vérif (5s)
  const [status, setStatus] = useState("idle"); // idle | sending | error
  const [tickets, setTickets] = useState(0);
  const [registered, setRegistered] = useState(false);

  // Au retour sur le site : on restaure email + réseaux + tickets.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const savedEmail = localStorage.getItem(LS_EMAIL);
    if (savedEmail) {
      setEmail(savedEmail);
      try {
        const nets = JSON.parse(localStorage.getItem(LS_NETS) || "[]");
        setFollowed(Object.fromEntries(nets.map((n) => [n, true])));
      } catch {}
      setTickets(parseInt(localStorage.getItem(LS_TICKETS) || "0", 10));
      setRegistered(true);
    }
  }, []);

  const followedList = SOCIALS.filter((s) => followed[s.name]).map((s) => s.name);
  const canSubmit = followedList.length >= 1 && email.trim() !== "" && status !== "sending";

  async function postEntry(mail, pseudo, networks) {
    // mode no-cors : l'envoi part (le Sheet s'écrit) mais on ne peut pas lire
    // la réponse (opaque). On renvoie donc un succès local.
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ email: mail, handle: pseudo, networks }),
      });
    } catch {}
    return { ok: true };
  }

  function saveLocal(mail, nets, tk) {
    try {
      localStorage.setItem(LS_EMAIL, mail);
      localStorage.setItem(LS_NETS, JSON.stringify(nets));
      localStorage.setItem(LS_TICKETS, String(tk));
    } catch {}
  }

  function onFollow(s) {
    if (followed[s.name] || pending[s.name]) return;
    setPending((p) => ({ ...p, [s.name]: true }));
    setTimeout(() => {
      setPending((p) => {
        const n = { ...p };
        delete n[s.name];
        return n;
      });
      // coche optimiste : on marque suivi tout de suite, sans attendre le réseau
      setFollowed((f) => ({ ...f, [s.name]: true }));
      if (registered && email) {
        const newCount = followedList.length + 1;
        setTickets(newCount);
        let nets = [];
        try {
          nets = JSON.parse(localStorage.getItem(LS_NETS) || "[]");
        } catch {}
        if (!nets.includes(s.name)) nets.push(s.name);
        saveLocal(email, nets, newCount);
        // écriture côté Sheet en arrière-plan (ne bloque pas l'UI)
        postEntry(email, "", [s.name]).catch(() => {});
      }
    }, 5000);
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!canSubmit) return;
    setStatus("sending");
    try {
      const data = await postEntry(email, handle, followedList);
      if (data.ok) {
        setTickets(followedList.length);
        setRegistered(true);
        setStatus("idle");
        saveLocal(email, followedList, followedList.length);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  function renderFollowButtons() {
    return (
      <div className="social-row">
        {SOCIALS.map((s) => {
          const isFollowed = !!followed[s.name];
          const isPending = !!pending[s.name];
          return (
            <a
              key={s.name}
              className={`follow-btn${isFollowed ? " followed" : ""}${isPending ? " pending" : ""}`}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (!isFollowed && !isPending) onFollow(s);
              }}
            >
              <div className="social-icon" style={{ background: `${s.color}1f` }}>
                {s.icon}
              </div>
              <div className="social-name">
                {isFollowed ? "Suivi" : isPending ? "Vérification…" : s.name}
              </div>
            </a>
          );
        })}
      </div>
    );
  }

  // MODE « déjà inscrit » : on montre les réseaux manquants à valider.
  if (registered) {
    return (
      <div className="contest-form">
        <div className="done-check">✓</div>
        <h3 className="done-title">T&apos;es dans le tirage !</h3>
        <p className="done-sub">
          {tickets} ticket{tickets > 1 ? "s" : ""} enregistré{tickets > 1 ? "s" : ""}.
        </p>
        <p className="form-hint">Inscrit avec : {email}</p>
        <div className="form-fields">
          <div className="form-step-label">Envie de plus de chances ?</div>
          {renderFollowButtons()}
          <p className="form-hint">Chaque réseau en plus = 1 ticket de plus.</p>
        </div>
      </div>
    );
  }

  // MODE inscription.
  return (
    <form className="contest-form" onSubmit={onSubmit}>
      <div className="form-follow">
        <div className="form-step-label">1 · Suis-moi sur les réseaux</div>
        {renderFollowButtons()}
        <p className="form-hint">Chaque réseau suivi = 1 ticket.</p>
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
            : `Participer (${followedList.length} ticket${followedList.length > 1 ? "s" : ""})`}
        </button>
      </div>

      {status === "error" && <p className="form-note err">Oups, une erreur. Réessaie.</p>}
    </form>
  );
}
