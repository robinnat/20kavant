// Mes projets : la liste est rendue par components/Interactions.js à partir
// des données TrustMRR (voir lib/trustmrr.js).
export default function Projects({ demo = true }) {
  return (
    <section id="projets">
      <div className="section-head">
        <div className="demo-ribbon">
          {demo
            ? "● Mode démo · connexion TrustMRR à venir"
            : "● En direct · revenus vérifiés via TrustMRR"}
        </div>
        <div className="section-title">Mes projets</div>
        <p className="section-desc">
          Les produits que je développe, et ce qu&apos;ils rapportent vraiment. Pas de chiffres
          déclarés : ils viennent de Stripe et RevenueCat, vérifiés via TrustMRR.
        </p>
      </div>

      <div className="pf">
        <div className="pf-list" id="pfList"></div>
      </div>

      <div className="pf-verified">
        <div className="trustmrr-badge">
          <span className="tick">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M4 12L9 17L20 6"
                stroke="#FFFFFF"
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
    </section>
  );
}
