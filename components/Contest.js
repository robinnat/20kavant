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
        <div className="section-title">Le concours</div>
        <p className="section-desc">
          Chaque palier franchi débloque un tirage au sort parmi mes abonnés, jusqu&apos;au palier
          final le jour de la sortie de GTA 6. Gratuit, sans obligation d&apos;achat.
        </p>
      </div>

      <div className="paliers">
        {PALIERS.map((p) => (
          <div
            key={p.th}
            className={`palier${p.final ? " final" : ""}`}
            data-th={p.th}
          >
            <img src={p.img} alt="" />
            <div className="palier-amt">{p.amt}</div>
            <div className="palier-pz">{p.prize}</div>
            <div className="palier-draw">{p.draw}</div>
            <span className="palier-state">À venir</span>
          </div>
        ))}
      </div>

      <div className="section-head" id="participer" style={{ marginTop: "64px" }}>
        <div className="section-title">Comment participer</div>
        <p className="section-desc">
          Il suffit de me suivre : chaque réseau où tu t&apos;abonnes est une chance de gagner en
          plus.
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
        <a href="#suivre">Suis-moi sur les réseaux pour participer →</a>
      </p>
    </section>
  );
}
