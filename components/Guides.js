// Section « Mes guides » — MASQUÉE pour l'instant.
//
// Pour l'afficher : passer AFFICHER à true et remplir GUIDES.
// La section réapparaîtra aussi dans la nav (components/SiteNav.js), le pied
// de page (components/Footer.js) et le second bouton du hero — les liens y
// sont commentés au même endroit.
const AFFICHER = false;

// Une entrée par guide :
//   tag   : catégorie affichée au-dessus du titre
//   title : titre du guide
//   desc  : une phrase, ce que le lecteur y apprend
//   url   : lien externe (Obsidian Publish, par exemple), ouvert dans un onglet
const GUIDES = [];

export default function Guides() {
  if (!AFFICHER || !GUIDES.length) return null;

  return (
    <section id="guides">
      <div className="section-head">
        <div className="section-title">Mes guides</div>
        <p className="section-desc">
          Les outils et les méthodes que j&apos;utilise vraiment pour construire, filmer et
          publier. Gratuit, sans détour.
        </p>
      </div>

      <div className="guide-grid">
        {GUIDES.map((g) => (
          <a
            key={g.url}
            className="guide-card"
            href={g.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="guide-tag">{g.tag}</div>
            <h3 className="guide-title">{g.title}</h3>
            <p className="guide-desc">{g.desc}</p>
            <span className="guide-more">
              Lire le guide
              <svg className="ico-arrow" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 17L17 7M17 7H9M17 7V15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
