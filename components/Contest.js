import Link from "next/link";
import PaliersState from "./PaliersState";

const PALIERS = [
  { th: 5000, amt: "5K", prize: "Jeu GTA 6", img: "/gift-gtavi.png", draw: "Tirage n°1" },
  { th: 10000, amt: "10K", prize: "Jeu GTA 6", img: "/gift-gtavi.png", draw: "Tirage n°2" },
  { th: 15000, amt: "15K", prize: "Jeu GTA 6", img: "/gift-gtavi.png", draw: "Tirage n°3" },
  { th: 20000, amt: "20K", prize: "PS5 + GTA 6", img: "/gift-ps5-sm.png", draw: "Le 19/11", final: true },
];

// Page dédiée au concours. `total` sert à marquer les paliers déjà franchis.
export default function Contest({ total = 0 }) {
  return (
    <>
      <section id="lots">
        <div className="section-head">
          <div className="section-title">Tente de gagner GTA 6</div>
          <p className="section-desc">
            Je vise 20K de revenus avant la sortie du jeu. À chaque palier franchi, je tire au
            sort un abonné et je lui offre GTA 6 — et une PS5 avec le jeu au palier final.
            Gratuit, sans obligation d&apos;achat.
          </p>
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
            Il suffit de me suivre : chaque réseau où tu t&apos;abonnes est une chance de gagner
            en plus.
          </p>
        </div>
        <div className="steps">
          <div className="step">
            <div className="num">1</div>
            <h4>Abonne-toi</h4>
            <p>
              YouTube, TikTok, Instagram, X.{" "}
              <span className="hl">Chaque abonnement = une chance de gagner</span>, suis les
              quatre pour quadrupler tes chances.
            </p>
          </div>
          <div className="step">
            <div className="num">2</div>
            <h4>Un palier tombe</h4>
            <p>
              À chaque palier franchi (5K, 10K, 15K, 20K), un{" "}
              <span className="hl">tirage au sort</span> parmi tous les abonnés.
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
          <Link className="btn" href="/robinnat#suivre">
            Suis-moi sur les réseaux pour participer
          </Link>
        </p>
        <p className="challenge-note">
          Tirages au sort parmi les abonnés au moment de chaque palier. TikTok, Instagram et
          YouTube ne sont ni organisateurs ni parrains de ce concours.
        </p>
      </section>

      <PaliersState total={total} />
    </>
  );
}
