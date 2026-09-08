import Link from "next/link";
import Counter from "./Counter";

// Le défi : bande sombre pleine largeur au milieu de la page claire. Les
// variables de couleur sont redéfinies sur la section (voir globals.css), donc
// tout ce qui est à l'intérieur — compteur, jauge, bouton — se re-thème seul.
export default function Challenge({ total = 0, goal = 20000 }) {
  return (
    <section id="defi" className="defi">
      <div className="defi-inner">
        <div className="defi-head">
          <div className="defi-eyebrow">Le défi</div>
          <h2 className="defi-title">
            <span className="accent2">20K</span> de revenus avant <span className="accent">GTA 6</span>
          </h2>
          <p className="defi-sub">
            Tout ce que rapportent mes projets, en public et vérifié. Objectif atteint ou non le
            19 novembre 2026, jour de sortie du jeu.
          </p>
        </div>

        <Counter total={total} goal={goal} />

        <div className="defi-deadline">
          <div className="defi-kick">Il reste</div>
          <div className="countdown" id="countdown">
            <div className="cd-block">
              <div className="cd-num" id="cd-days">000</div>
              <div className="cd-label">Jours</div>
            </div>
            <div className="cd-block">
              <div className="cd-num" id="cd-hours">00</div>
              <div className="cd-label">Heures</div>
            </div>
            <div className="cd-block">
              <div className="cd-num" id="cd-min">00</div>
              <div className="cd-label">Min</div>
            </div>
            <div className="cd-block">
              <div className="cd-num" id="cd-sec">00</div>
              <div className="cd-label">Sec</div>
            </div>
          </div>
        </div>

        <div className="defi-foot">
          <Link className="btn" href="/robinnat/concours">
            Tente de gagner une PS5 + GTA 6
          </Link>
          <p className="challenge-note">
            Chaque palier franchi débloque un tirage au sort parmi mes abonnés. Gratuit, sans
            obligation d&apos;achat.
          </p>
        </div>
      </div>
    </section>
  );
}
