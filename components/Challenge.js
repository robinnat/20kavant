import Link from "next/link";

// Le défi sur la page d'accueil : le compte à rebours et la progression vers
// les 20K. Le concours lui-même est expliqué sur /robinnat/concours.
export default function Challenge() {
  return (
    <section id="defi">
      <div className="section-head">
        <div className="section-title">Le défi</div>
        <p className="section-desc">
          Atteindre 20K de revenus avec mes projets avant la sortie de GTA 6, le 19 novembre
          2026.
        </p>
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
        Jusqu&apos;au <strong>19/11/2026</strong>, jour de sortie de GTA 6
      </div>

      <div className="total-mrr">
        <div className="mrr-head">
          <div className="big">
            <span className="cur">$</span>
            <span id="mrrFig">0</span>
            <span className="unit">au total</span>
          </div>
          <div className="pct" id="mrrPct">0%</div>
          <div className="of">objectif $20,000 de revenus</div>
        </div>
        <div className="hslider">
          <div className="htrack">
            <div className="hfill" id="hfill"></div>
          </div>
          <div className="hthumb" id="hthumb">
            <div className="knob"></div>
          </div>
        </div>
        <div className="hscale">
          {/* montant courant (rempli par Interactions.js) — plus un "$0" figé */}
          <span id="mrrScaleNow">$0</span>
          <span className="goal">Objectif 20K</span>
        </div>
        <div className="mrr-delta" id="mrrDelta">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M12 19V5M12 5l-6 6M12 5l6 6"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          +$0 ce mois-ci
        </div>
      </div>

      <p className="steps-cta">
        <Link className="btn" href="/robinnat/concours">
          Tente de gagner GTA 6
        </Link>
      </p>
      <p className="challenge-note">
        Chaque palier franchi débloque un tirage au sort. Gratuit, sans obligation d&apos;achat.
      </p>
    </section>
  );
}
