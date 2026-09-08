// Formatage fait à la main plutôt qu'avec toLocaleString : le rendu est
// identique côté serveur et navigateur, donc pas d'écart d'hydratation.
const fmtUsd = (n) => Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const fmtPct = (n) => n.toFixed(1).replace(".", ",");

export default function Hero({ total = 0, goal = 20000 }) {
  return (
    <header className="hero">
      <img className="hero-avatar" src="/gta-avatar.png" alt="Robin" />
      <div className="eyebrow">
        <span className="blip"></span> Solo founder · Build in public
      </div>
      <h1 className="headline">
        Moi c&apos;est <span className="accent">Robin</span>
      </h1>
      <p className="sub">
        Je construis mes produits le soir et le week-end, entre un job à plein temps et une
        famille. Je filme tout : les vrais chiffres, les bons jours comme les mauvais.
      </p>

      <div className="hero-actions">
        <a className="hero-cta" href="#video">
          Voir mes vidéos
        </a>
        {/* quand les guides seront publics : href="#guides" et libellé « Lire les guides »
            (voir components/Guides.js) */}
        <a className="hero-cta ghost" href="#revenus">
          Voir le compteur
        </a>
      </div>

      {/* le challenge, en bandeau compact plutôt qu'en plein écran */}
      <div className="hero-goal">
        <div className="hero-goal-kick">Le défi en cours</div>
        <div className="hero-goal-line">
          <span className="accent2">20K</span> de <span className="accent">revenus</span> avant la
          sortie de
          <img className="gta-logo" src="/gta-vi-logo.png" alt="GTA 6" />
        </div>

        {/* où on en est, tout de suite visible */}
        <div className="hero-progress">
          <div className="hero-progress-bar">
            <span style={{ width: `${Math.min((total / goal) * 100, 100)}%` }} />
          </div>
          <div className="hero-progress-txt">
            <strong>${fmtUsd(total)}</strong> générés ·{" "}
            <span className="hero-progress-pct">{fmtPct((total / goal) * 100)}%</span> de
            l&apos;objectif
          </div>
        </div>

        <div className="countdown" id="countdown">
          <div className="cd-block">
            <div className="cd-num" id="cd-days">000</div>
            <div className="cd-label">Jours</div>
          </div>
          <div className="cd-sep">:</div>
          <div className="cd-block">
            <div className="cd-num" id="cd-hours">00</div>
            <div className="cd-label">Heures</div>
          </div>
          <div className="cd-sep">:</div>
          <div className="cd-block">
            <div className="cd-num" id="cd-min">00</div>
            <div className="cd-label">Min</div>
          </div>
          <div className="cd-sep">:</div>
          <div className="cd-block">
            <div className="cd-num" id="cd-sec">00</div>
            <div className="cd-label">Sec</div>
          </div>
        </div>
        <div className="target-date">
          Jusqu&apos;au <strong>19/11/2026</strong> ·{" "}
          <a href="#revenus">voir le compteur en direct →</a>
        </div>
      </div>
    </header>
  );
}
