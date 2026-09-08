"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function SiteNav() {
  const nav = useRef(null);

  useEffect(() => {
    const el = nav.current;
    if (!el) return;

    // La photo n'apparaît dans la barre qu'une fois celle de la présentation
    // dépassée. Sur les pages sans présentation (concours), on se rabat sur un
    // simple seuil de défilement.
    const photo = document.querySelector(".about-photo");
    const montrer = (oui) => el.classList.toggle("with-avatar", oui);

    if (photo && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        ([e]) => montrer(!e.isIntersecting && e.boundingClientRect.top < 0),
        { threshold: 0 }
      );
      io.observe(photo);
      return () => io.disconnect();
    }

    const auScroll = () => montrer(window.scrollY > 90);
    auScroll();
    window.addEventListener("scroll", auScroll, { passive: true });
    return () => window.removeEventListener("scroll", auScroll);
  }, []);

  return (
    <nav className="site-nav" ref={nav}>
      <Link href="/robinnat" className="brand">
        <img className="brand-avatar" src="/gta-avatar.png" alt="" aria-hidden="true" />
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
