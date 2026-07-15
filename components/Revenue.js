export default function Revenue({ demo = true }) {
  return (
    <section id="revenus">
      <div className="section-head">
        <div className="demo-ribbon">
          {demo
            ? "● Mode démo · connexion TrustMRR à venir"
            : "● En direct · MRR vérifié via TrustMRR"}
        </div>
        <div className="section-title">Le compteur, en direct</div>
        <p className="section-desc">
          Pas de chiffres déclarés : les revenus viennent de Stripe et RevenueCat, vérifiés via
          TrustMRR.
        </p>
      </div>

      <div className="total-mrr">
        <div className="mrr-head">
          <div className="big">
            <span className="cur">$</span>
            <span id="mrrFig">0</span>
            <span className="unit">/mois</span>
          </div>
          <div className="pct" id="mrrPct">0%</div>
          <div className="of">objectif $20,000</div>
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
          <span>$0</span>
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

      {/* d'où vient le MRR */}
      <div className="section-head" id="projets" style={{ marginTop: "74px" }}>
        <div className="section-title">D&apos;où viennent les revenus</div>
        <p className="section-desc">Le détail, projet par projet.</p>
      </div>
      {/* TODO: brancher les vraies valeurs / URLs / logos dans le script (objet PROJECTS) */}
      <div className="pf">
        <div className="pf-list" id="pfList"></div>
      </div>
    </section>
  );
}
