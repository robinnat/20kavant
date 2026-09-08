// Guides / tutos mis en avant sur la page.
//
// Pour en ajouter un : une entrée de plus dans GUIDES.
//   tag   : catégorie affichée au-dessus du titre
//   title : titre du guide
//   desc  : une phrase, ce que le lecteur y apprend
//   url   : lien externe (ouvert dans un nouvel onglet)
//
// ⚠️ La première entrée est l'exemple que tu m'as donné, à remplacer par tes
// propres guides.
const GUIDES = [
  {
    tag: "Création de contenu",
    title: "MiniMax H3 — le modèle vidéo gratuit",
    desc: "Générer des vidéos avec un modèle gratuit, de l'installation aux premiers rendus.",
    url: "https://guides.0xloucash.xyz/Création+de+Contenu/Guides+DM/MiniMax+H3+-+le+modele+video+gratuit",
  },
];

export default function Guides() {
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
