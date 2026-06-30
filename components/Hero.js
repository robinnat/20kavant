export default function Hero() {
  return (
    <header className="hero">
      <img className="hero-avatar" src="/gta-avatar.png" alt="Robin" />
      <div className="eyebrow">
        <span className="blip"></span> Build in public · Solo, taf, famille
      </div>
      <div className="hero-kick">Objectif</div>
      <h1 className="headline">
        <span className="accent2">20K</span> DE <span className="accent">MRR</span>
        <br />
        AVANT LA SORTIE DE
      </h1>
      <img className="gta-logo" src="/gta-vi-logo.png" alt="Grand Theft Auto VI" />
      <p className="sub">
        Un objectif, une deadline fixe : le <strong>19 novembre 2026</strong>, jour de sortie de
        GTA VI. Construit le soir, le week-end, entre un job et une famille. Tout est documenté,
        chaque semaine.
      </p>

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
        Compte à rebours jusqu&apos;au <strong>19/11/2026</strong>, sortie de GTA VI
      </div>
    </header>
  );
}
