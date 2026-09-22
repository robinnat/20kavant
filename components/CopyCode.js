"use client";

import { useEffect } from "react";

// Boutons « Copier » des blocs de code des guides. Les boutons sont rendus
// côté serveur avec le Markdown (app/guides/[slug]/page.js) ; ici, un seul
// écouteur sur le document gère tous les clics.
async function copier(texte) {
  // navigator.clipboard n'existe qu'en contexte sécurisé (https) : repli sur
  // l'ancienne méthode sinon, pour que le bouton marche partout.
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(texte);
    return;
  }
  const zone = document.createElement("textarea");
  zone.value = texte;
  zone.setAttribute("readonly", "");
  zone.style.position = "fixed";
  zone.style.opacity = "0";
  document.body.appendChild(zone);
  zone.select();
  document.execCommand("copy");
  zone.remove();
}

export default function CopyCode() {
  useEffect(() => {
    const minuteurs = new Map();

    async function onClick(e) {
      const bouton = e.target.closest(".copy-btn");
      if (!bouton) return;
      const code = bouton.parentElement?.querySelector("pre code");
      if (!code) return;

      try {
        await copier(code.textContent.replace(/\n$/, ""));
        bouton.textContent = "Copié ✓";
        bouton.classList.add("copied");
      } catch {
        bouton.textContent = "Échec";
      }
      clearTimeout(minuteurs.get(bouton));
      minuteurs.set(
        bouton,
        setTimeout(() => {
          bouton.textContent = "Copier";
          bouton.classList.remove("copied");
        }, 1600)
      );
    }

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      minuteurs.forEach(clearTimeout);
    };
  }, []);

  return null;
}
