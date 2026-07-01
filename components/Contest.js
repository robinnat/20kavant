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
          Gratuit, sans obligation d&apos;achat. Inscris-toi, confirme via l&apos;email qu&apos;on
          t&apos;envoie, et tu es dans <span className="hl">tous les tirages au sort</span> jusqu&apos;au
          palier final.
        </p>
      </div>
      <SignupCount />
      <SignupForm />
    </section>
  );
}
