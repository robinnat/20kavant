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
        <a href="#revenus">Compteur</a>
        <a href="#projets">Projets</a>
        <a href="#lots">Concours</a>
        <a href="#participer">Participer</a>
      </div>
    </nav>
  );
}
