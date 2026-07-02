import SignupForm from "./SignupForm";
import SignupCount from "./SignupCount";

export default function Contest() {
  return (
    <section id="lots">
      <div className="section-head">
        <div className="demo-ribbon">● Concours · gratuit, sans obligation d&apos;achat</div>
        <div className="section-title">Le concours</div>
        <p className="section-desc">
          Chaque palier de MRR débloque un tirage au sort parmi les abonnés, jusqu&apos;au palier
          final, le jour de la sortie de GTA VI.
        </p>
      </div>

      {/* la route des paliers · carte GPS Vice City */}
      <div className="route-block">
        <div className="gps-map">
          <img className="bg" src="/vice-city-map.png" alt="Carte Vice City" />
          <div className="shade"></div>
          <svg className="route" id="gpsSvg" viewBox="0 0 1696 954" preserveAspectRatio="none" fill="none">
            <defs>
              <linearGradient id="gpsGrad" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0" stopColor="#F4936B" />
                <stop offset="1" stopColor="#E8589E" />
              </linearGradient>
            </defs>
            <path
              className="road-glow"
              id="gpsRoad"
              d="M300 880 C270 790 250 760 270 690 S330 560 380 520 S470 470 520 460 S660 435 720 430 S880 440 940 440 S1050 500 1080 520 S1150 430 1160 400 S1270 330 1300 300 S1410 240 1440 220"
            />
            <path
              className="road-base"
              d="M300 880 C270 790 250 760 270 690 S330 560 380 520 S470 470 520 460 S660 435 720 430 S880 440 940 440 S1050 500 1080 520 S1150 430 1160 400 S1270 330 1300 300 S1410 240 1440 220"
            />
            <path
              className="road-prog"
              id="gpsProg"
              pathLength="1"
              d="M300 880 C270 790 250 760 270 690 S330 560 380 520 S470 470 520 460 S660 435 720 430 S880 440 940 440 S1050 500 1080 520 S1150 430 1160 400 S1270 330 1300 300 S1410 240 1440 220"
            />
          </svg>
          <div className="gps-stop start" data-frac="0" id="gpsStart"></div>
          <div className="gps-stop" data-th="5000" data-frac="0.25">
            <div className="dot"></div>
            <div className="tag">
              <div className="amt">5K</div>
              <div className="pz">Jeu GTA VI</div>
              <img className="gift" src="/gift-gtavi.png" alt="" />
            </div>
          </div>
          <div className="gps-stop" data-th="10000" data-frac="0.5">
            <div className="dot"></div>
            <div className="tag">
              <div className="amt">10K</div>
              <div className="pz">Jeu GTA VI</div>
              <img className="gift" src="/gift-gtavi.png" alt="" />
            </div>
          </div>
          <div className="gps-stop" data-th="15000" data-frac="0.75">
            <div className="dot"></div>
            <div className="tag">
              <div className="amt">15K</div>
              <div className="pz">Jeu GTA VI</div>
              <img className="gift" src="/gift-gtavi.png" alt="" />
            </div>
          </div>
          <div className="gps-stop final" data-th="20000" data-frac="1">
            <div className="dot"></div>
            <div className="tag">
              <div className="amt">20K</div>
              <div className="pz">PS5 + GTA VI · 19/11</div>
              <img className="gift" src="/gift-ps5-sm.png" alt="" />
            </div>
          </div>
          <div className="gps-car" id="gpsCar">
            <div className="bub">
              <small>MRR actuel</small>
              <span id="gpsCarVal">$0</span>
            </div>
            <div className="pin"></div>
          </div>
        </div>
        {/* version mobile : liste verticale des paliers */}
        <div className="paliers-m">
          <div className="palier-m" data-th="5000">
            <img src="/gift-gtavi.png" alt="" />
            <div className="pm-meta">
              <div className="pm-amt">5K</div>
              <div className="pm-pz">Jeu GTA VI · Tirage n°1</div>
            </div>
            <span className="pm-state">À venir</span>
          </div>
          <div className="palier-m" data-th="10000">
            <img src="/gift-gtavi.png" alt="" />
            <div className="pm-meta">
              <div className="pm-amt">10K</div>
              <div className="pm-pz">Jeu GTA VI · Tirage n°2</div>
            </div>
            <span className="pm-state">À venir</span>
          </div>
          <div className="palier-m" data-th="15000">
            <img src="/gift-gtavi.png" alt="" />
            <div className="pm-meta">
              <div className="pm-amt">15K</div>
              <div className="pm-pz">Jeu GTA VI · Tirage n°3</div>
            </div>
            <span className="pm-state">À venir</span>
          </div>
          <div className="palier-m final" data-th="20000">
            <img src="/gift-ps5-sm.png" alt="" />
            <div className="pm-meta">
              <div className="pm-amt">20K</div>
              <div className="pm-pz">PS5 + GTA VI · 19/11</div>
            </div>
            <span className="pm-state">À venir</span>
          </div>
        </div>
        <p className="route-cap">
          Survole un palier pour voir le lot. La voiture, c&apos;est où en est le MRR sur la
          route.
        </p>
      </div>

      {/* comment participer */}
      <div className="section-head" id="participer" style={{ marginTop: "74px" }}>
        <div className="section-title">Participer au concours</div>
        <p className="section-desc">
          Gratuit, sans achat. Inscris-toi avec le formulaire, puis suis-moi sur les réseaux :
          chaque suivi est une chance en plus, de quoi{" "}
          <span className="hl">multiplier tes chances par 5</span>.
        </p>
      </div>
      <div className="steps">
        <div className="step">
          <div className="num">1</div>
          <h4>Inscris-toi</h4>
          <p>
            Remplis le formulaire ci-dessous : c&apos;est <span className="hl">ta première chance</span> à
            chaque tirage, et tu reçois la <span className="hl">newsletter</span> du défi.
          </p>
        </div>
        <div className="step">
          <div className="num">2</div>
          <h4>Suis le défi</h4>
          <p>
            YouTube, TikTok, Instagram, X. <span className="hl">Chaque suivi = une chance en plus</span>,
            suis les quatre pour multiplier tes chances par 5.
          </p>
        </div>
        <div className="step">
          <div className="num">3</div>
          <h4>Tu peux gagner</h4>
          <p>
            À chaque palier franchi (5K, 10K, 15K, 20K), un <span className="hl">tirage au sort</span> :
            un jeu GTA VI, et une <span className="hl">PS5 + GTA VI</span> au palier final.
          </p>
        </div>
      </div>
      <SignupCount />
      <SignupForm />
    </section>
  );
}
