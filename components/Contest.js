const PALIERS = [
  { th: 5000, amt: "5K", prize: "Jeu GTA 6", img: "/gift-gtavi.png", draw: "Tirage n°1" },
  { th: 10000, amt: "10K", prize: "Jeu GTA 6", img: "/gift-gtavi.png", draw: "Tirage n°2" },
  { th: 15000, amt: "15K", prize: "Jeu GTA 6", img: "/gift-gtavi.png", draw: "Tirage n°3" },
  { th: 20000, amt: "20K", prize: "PS5 + GTA 6", img: "/gift-ps5-sm.png", draw: "Le 19/11", final: true },
];

export default function Contest() {
  return (
    <section id="lots">
      <div className="section-head">
        <div className="section-title">Le défi</div>
        <p className="section-desc">
          Atteindre 20K de revenus avec mes projets avant la sortie de GTA 6. Chaque palier
          franchi débloque un tirage au sort parmi mes abonnés.
        </p>
      </div>

      {/* compte à rebours jusqu'à la sortie de GTA 6 */}
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

      {/* où en sont les revenus face à l'objectif */}
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

      <div className="sub-head">
        <h3 className="sub-title">Les paliers</h3>
        <p className="sub-desc">Un tirage au sort à chaque palier franchi, jusqu&apos;au 19/11.</p>
      </div>
      <div className="paliers">
        {PALIERS.map((p) => (
          <div key={p.th} className={`palier${p.final ? " final" : ""}`} data-th={p.th}>
            <img src={p.img} alt="" />
            <div className="palier-amt">{p.amt}</div>
            <div className="palier-pz">{p.prize}</div>
            <div className="palier-draw">{p.draw}</div>
            <span className="palier-state">À venir</span>
          </div>
        ))}
      </div>

      <div className="sub-head" id="participer">
        <h3 className="sub-title">Comment participer</h3>
        <p className="sub-desc">
          Gratuit, sans obligation d&apos;achat. Il suffit de me suivre : chaque réseau où tu
          t&apos;abonnes est une chance de gagner en plus.
        </p>
      </div>
      <div className="steps">
        <div className="step">
          <div className="num">1</div>
          <h4>Abonne-toi</h4>
          <p>
            YouTube, TikTok, Instagram, X.{" "}
            <span className="hl">Chaque abonnement = une chance de gagner</span>, suis les quatre
            pour quadrupler tes chances.
          </p>
        </div>
        <div className="step">
          <div className="num">2</div>
          <h4>Un palier tombe</h4>
          <p>
            À chaque palier franchi (5K, 10K, 15K, 20K), un <span className="hl">tirage au sort</span>{" "}
            parmi tous les abonnés.
          </p>
        </div>
        <div className="step">
          <div className="num">3</div>
          <h4>Tu gagnes GTA 6</h4>
          <p>
            Le gagnant repart avec <span className="hl">le jeu GTA 6</span>, et une{" "}
            <span className="hl">PS5 + GTA 6</span> au palier final.
          </p>
        </div>
      </div>
      <p className="steps-cta">
        <a className="btn ghost" href="#suivre">
          Suis-moi sur les réseaux pour participer
        </a>
      </p>
    </section>
  );
}
