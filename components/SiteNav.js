import Link from "next/link";

export default function SiteNav() {
  return (
    <nav className="site-nav">
      <Link href="/robinnat" className="brand">
        <b>20Kavant</b>
        <small>.fr</small>
      </Link>
      <div className="nav-links">
        <a href="/robinnat#about">Moi</a>
        <a href="/robinnat#projets">Projets</a>
        {/* guides masqués pour l'instant — voir components/Guides.js */}
        <a href="/robinnat#defi">Le défi</a>
        <Link href="/robinnat/concours">Concours</Link>
        <a href="/robinnat#suivre">Réseaux</a>
      </div>
    </nav>
  );
}
