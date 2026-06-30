export default function Footer() {
  return (
    <footer>
      <div className="footer-banner">
        <img src="/gta-hero-banner.png" alt="Vice City" />
      </div>
      <div className="foot-inner">
        <p className="foot-rule">
          Jeu-concours gratuit, sans obligation d&apos;achat. Tirages au sort parmi les abonnés au
          moment de chaque palier. Règlement complet disponible sur demande. TikTok, Instagram et
          YouTube ne sont ni organisateurs ni parrains de ce concours.
        </p>
        <div className="foot-links">
          <a href="#about">Moi</a>
          <a href="#revenus">Compteur</a>
          <a href="#projets">Projets</a>
          <a href="#lots">Concours</a>
          <a href="#participer">Participer</a>
        </div>
      </div>
    </footer>
  );
}
