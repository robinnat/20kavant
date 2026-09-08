import { getSocialFollowers } from "../lib/socialstats";

export default async function About() {
  const { total } = await getSocialFollowers();
  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-photo">
          <img src="/gta-avatar.png" alt="Robin" />
        </div>
        <div>
          <div className="about-kick">Qui suis-je</div>
          <h2>Moi c&apos;est Robin</h2>
          <p>
            Je viens de la tech et je travaille sur l&apos;IA au quotidien. Je développe des
            logiciels et des applications, et j&apos;accompagne des entreprises sur leurs projets :
            automatiser ce qui peut l&apos;être, intégrer l&apos;IA là où elle sert vraiment,
            construire les outils qui manquent.
          </p>
          <p>
            En dehors de mon travail, je construis mes propres produits — le soir, le week-end,
            entre un job à plein temps et une vie de famille. Tout ce qu&apos;ils rapportent est
            public et vérifié.
          </p>
          <div className="about-social">
            <a href="https://youtube.com/@robinnat20" target="_blank" rel="noopener" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M9 8L17 12L9 16V8Z" fill="#D42D7D" />
                <rect x="3" y="5" width="18" height="14" rx="3" stroke="#D42D7D" strokeWidth="1.6" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@robinnat" target="_blank" rel="noopener" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 4V15.5C12 17.43 10.43 19 8.5 19C6.57 19 5 17.43 5 15.5C5 13.57 6.57 12 8.5 12"
                  stroke="#7A4FBF"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M12 4C12 6.5 14 8.3 16.5 8.3"
                  stroke="#7A4FBF"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </a>
            <a href="https://www.instagram.com/robinnat" target="_blank" rel="noopener" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="4" y="4" width="16" height="16" rx="5" stroke="#B85520" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="3.4" stroke="#B85520" strokeWidth="1.6" />
                <circle cx="16.6" cy="7.4" r="1" fill="#B85520" />
              </svg>
            </a>
            <a href="https://x.com/robinnat20" target="_blank" rel="noopener" aria-label="X">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M17.53 3h2.94l-6.42 7.34L21.5 21h-5.9l-4.62-6.04L5.7 21H2.76l6.87-7.85L2.5 3h6.05l4.18 5.52L17.53 3zm-1.03 16.2h1.63L7.6 4.7H5.85L16.5 19.2z"
                  fill="#1E1330"
                />
              </svg>
            </a>
          </div>
          {total > 0 && (
            <div className="about-followers">
              <span className="dot"></span>
              <strong>{total.toLocaleString("fr-FR")}</strong>&nbsp;abonnés
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
