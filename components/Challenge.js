import Link from "next/link";
import Counter from "./Counter";

// Le défi sur la page d'accueil : compte à rebours et progression vers les
// 20K. Le concours lui-même est expliqué sur /robinnat/concours.
export default function Challenge({ total = 0, goal = 20000 }) {
  return (
    <section id="defi">
      <div className="section-head">
        <div className="section-title">Le défi</div>
        <p className="section-desc">
          Atteindre 20K de revenus avec mes projets avant la sortie de GTA 6, le 19 novembre
          2026.
        </p>
      </div>

      <div className="defi-card">
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
        <div className="target-date">
          Jusqu&apos;au <strong>19/11/2026</strong>, jour de sortie de GTA 6
        </div>

        <div className="defi-sep"></div>

        <Counter total={total} goal={goal} />
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
