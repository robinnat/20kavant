// ============================================================================
// Guides en Markdown, accessibles par lien uniquement.
//
// Un guide = un fichier .md dans content/guides/. Le nom du fichier donne
// l'URL : content/guides/mon-guide-a4f7c2.md  →  /guides/mon-guide-a4f7c2
//
// Ces pages ne sont listées nulle part sur le site et sont marquées
// « noindex » (voir app/robots.js et les métadonnées de la page), donc elles
// n'apparaissent pas dans les moteurs de recherche. Pour qu'un lien ne soit
// pas devinable, termine le nom du fichier par quelques caractères au hasard.
//
// En-tête attendu en haut du fichier (facultatif mais recommandé) :
//   ---
//   title: Le titre du guide
//   description: Une phrase de résumé
//   date: 2026-09-09
//   ---
// ============================================================================

import { readFileSync, readdirSync, existsSync } from "fs";
import { join } from "path";

const DOSSIER = join(process.cwd(), "content", "guides");

// Petit lecteur d'en-tête : une paire « clé: valeur » par ligne, entre deux
// lignes de tirets. Suffisant ici, et ça évite une dépendance de plus.
function separerEntete(brut) {
  const m = brut.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { meta: {}, corps: brut };
  const meta = {};
  for (const ligne of m[1].split(/\r?\n/)) {
    const i = ligne.indexOf(":");
    if (i === -1) continue;
    const cle = ligne.slice(0, i).trim();
    let valeur = ligne.slice(i + 1).trim();
    valeur = valeur.replace(/^["'](.*)["']$/, "$1");
    if (cle) meta[cle] = valeur;
  }
  return { meta, corps: brut.slice(m[0].length) };
}

export function listerSlugs() {
  if (!existsSync(DOSSIER)) return [];
  return readdirSync(DOSSIER)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function lireGuide(slug) {
  // On refuse tout ce qui n'est pas un slug simple : pas de remontée de
  // dossier via l'URL (../).
  if (!/^[a-z0-9-]+$/i.test(slug)) return null;
  const chemin = join(DOSSIER, `${slug}.md`);
  if (!existsSync(chemin)) return null;
  const { meta, corps } = separerEntete(readFileSync(chemin, "utf8"));
  return {
    slug,
    title: meta.title || slug,
    description: meta.description || "",
    date: meta.date || "",
    corps,
  };
}
