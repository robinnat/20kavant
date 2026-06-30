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
          <a href="#defi">Le défi</a>
          <a href="#lots">Règlement</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}
