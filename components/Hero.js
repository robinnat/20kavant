export default function Hero() {
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
        famille. Je filme tout, et je partage mes <strong>guides</strong> pour que tu puisses
        faire pareil.
      </p>

      <div className="hero-actions">
        <a className="hero-cta" href="#video">
          Voir mes vidéos
        </a>
        <a className="hero-cta ghost" href="#guides">
          Lire les guides
        </a>
      </div>

      {/* le challenge, en bandeau compact plutôt qu'en plein écran */}
      <div className="hero-goal">
        <div className="hero-goal-kick">Le défi en cours</div>
        <div className="hero-goal-line">
          <span className="accent2">20K</span> de <span className="accent">MRR</span> avant la
          sortie de
          <img className="gta-logo" src="/gta-vi-logo.png" alt="GTA 6" />
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
