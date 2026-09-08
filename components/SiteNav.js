import Link from "next/link";

export default function SiteNav() {
  return (
    <nav className="site-nav">
      <Link href="/robinnat" className="brand">
        <b>20Kavant</b>
        <small>.fr</small>
      </Link>
      <div className="nav-links">
        <a href="#about">Moi</a>
        <a href="#projets">Projets</a>
        {/* guides masqués pour l'instant — voir components/Guides.js */}
        <a href="#lots">Le défi</a>
        <a href="#participer">Participer</a>
        <a href="#suivre">Réseaux</a>
      </div>
    </nav>
  );
}
