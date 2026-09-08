import RevenueChart from "./RevenueChart";

// Graphique de progression masqué pour l'instant — repasse à true pour le réafficher.
const SHOW_CHART = false;

export default function Revenue({ demo = true, total = 0, history = [] }) {
  return (
    <section id="revenus">
      <div className="section-head">
        <div className="demo-ribbon">
          {demo
            ? "● Mode démo · connexion TrustMRR à venir"
            : "● En direct · revenus vérifiés via TrustMRR"}
        </div>
        <div className="section-title">Le défi, en direct</div>
        <p className="section-desc">
          20K de revenus avant la sortie de GTA 6. Pas de chiffres déclarés : ils viennent de
          Stripe et RevenueCat, vérifiés via TrustMRR.
        </p>
      </div>

      {/* compte à rebours jusqu'à la sortie de GTA 6 (déplacé depuis le hero) */}
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
        <div className="trustmrr-badge">
          <span className="tick">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M4 12L9 17L20 6"
                stroke="#150B2E"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          Vérifié sur{" "}
          <a href="https://trustmrr.com" target="_blank" rel="noopener" className="link-arrow">
            TrustMRR{" "}
            <svg className="ico-arrow" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 17L17 7M17 7H9M17 7V15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* progression sur l'année */}
      {SHOW_CHART && <RevenueChart total={total} history={history} />}

      {/* d'où viennent les revenus */}
      <div className="sub-head" id="projets">
        <h3 className="sub-title">D&apos;où viennent les revenus</h3>
        <p className="sub-desc">Le détail, projet par projet.</p>
      </div>
      <div className="pf">
        <div className="pf-list" id="pfList"></div>
      </div>
    </section>
  );
}
