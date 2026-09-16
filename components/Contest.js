import Counter from "./Counter";
import PaliersState from "./PaliersState";
import ContestForm from "./ContestForm";

// Un palier tous les 1 000 $ de revenus : GTA 6 à chaque palier franchi, et
// une PS5 avec le jeu au palier final. Les 19 premiers sont affichés en
// pastilles compactes, avec la jaquette du jeu pour qu'on voie le lot d'un
// coup d'oeil ; le palier final a sa propre carte.
// La jaquette des pastilles est une version réduite (160 px, 18 Ko) : servir
// l'originale de 745 Ko pour une vignette de 56 px serait du gâchis.
const PAS = 1000;
const OBJECTIF = 20000;
const PALIERS = Array.from({ length: OBJECTIF / PAS - 1 }, (_, i) => ({
  th: (i + 1) * PAS,
  amt: `${i + 1}K`,
  n: i + 1,
}));

// Page dédiée au concours. `total` sert à marquer les paliers déjà franchis.
export default function Contest({ total = 0 }) {
  return (
    <>
      {/* même bande que le défi sur l'accueil, ici en en-tête de page */}
      <section className="defi">
        <div className="defi-inner">
          <div className="defi-head">
            <div className="defi-eyebrow">Le concours</div>
            <h1 className="defi-title">
              Tente de gagner une <span className="accent">PS5 + GTA 6</span>
            </h1>
            <p className="defi-sub">
              Je vise 20K de revenus avant la sortie du jeu. Tous les 1 000 $ franchis, je tire au
              sort un abonné et je lui offre GTA 6. Au palier final, c&apos;est une PS5 avec le
              jeu. Gratuit, sans obligation d&apos;achat.
            </p>
          </div>

          <Counter total={total} goal={20000} />
        </div>
      </section>

      <section id="lots">
        <div className="section-head">
          <div className="section-title">Les paliers</div>
          <p className="section-desc">
            Un tirage au sort tous les 1 000 $ de revenus, jusqu&apos;au 19/11. Chaque palier
            franchi offre le jeu GTA 6, et le vingtième une PS5 avec le jeu. Vingt paliers, donc
            vingt gagnants.
          </p>
        </div>
        <div className="paliers">
          {PALIERS.map((p) => (
            <div key={p.th} className="palier" data-th={p.th}>
              <img src="/gift-gtavi-sm.png" alt="" />
              <span className="palier-amt">{p.amt}</span>
              <span className="palier-draw">Tirage n°{p.n}</span>
            </div>
          ))}
        </div>

        <div className="palier final" data-th={OBJECTIF}>
          {/* les deux lots côte à côte : le libellé dit « PS5 + GTA 6 », on le
              montre plutôt que de l'écrire seulement */}
          <div className="final-lots">
            <img src="/gift-ps5-sm.png" alt="" />
            <img className="final-jaquette" src="/gift-gtavi-sm.png" alt="" />
          </div>
          <div>
            <div className="palier-amt">20K</div>
            <div className="palier-pz">PS5 + GTA 6</div>
            <div className="palier-draw">Le 19/11, jour de sortie du jeu</div>
            <span className="palier-state" data-done="Tirage fait">
              Palier final
            </span>
          </div>
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
              YouTube, TikTok, Instagram.{" "}
              <span className="hl">Chaque abonnement = une chance de gagner</span>, suis les
              trois pour tripler tes chances.
            </p>
          </div>
          <div className="step">
            <div className="num">2</div>
            <h4>Un palier tombe</h4>
            <p>
              Tous les 1 000 $ de revenus franchis, un{" "}
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

        {/* ancre stable pour pointer directement sur le formulaire depuis
            l'extérieur : /robinnat/concours#inscription */}
        <div id="inscription">
          <ContestForm />
        </div>
        <p className="challenge-note">
          Tirages au sort parmi les abonnés au moment de chaque palier. TikTok, Instagram et
          YouTube ne sont ni organisateurs ni parrains de ce concours.
        </p>
      </section>

      <PaliersState total={total} />
    </>
  );
}
