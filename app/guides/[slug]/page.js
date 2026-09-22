import { notFound } from "next/navigation";
import { Marked } from "marked";
import { listerSlugs, lireGuide } from "../../../lib/guides";

// Identifiant d'ancre d'un titre : « Créer tes recettes » → creer-tes-recettes.
// Les accents sont retirés pour que les liens restent simples à écrire et à
// partager (guides.20kavant.fr/mon-guide#les-recettes).
function ancre(texte) {
  return texte
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z0-9#]+;/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// marked ne pose plus d'id sur les titres depuis sa version 8 (l'option
// headerIds a disparu) : sans ça, aucun lien interne ni partage vers une
// section précise ne fonctionne. Instance locale, pour ne pas modifier le
// marked global.
const md = new Marked({
  renderer: {
    heading({ tokens, depth }) {
      const contenu = this.parser.parseInline(tokens);
      return `<h${depth} id="${ancre(contenu)}">${contenu}</h${depth}>\n`;
    },
  },
});

// Les guides sont générés au build à partir des fichiers Markdown.
export function generateStaticParams() {
  return listerSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const guide = lireGuide(slug);
  if (!guide) return {};
  return {
    title: `${guide.title} · Guides 20Kavant`,
    description: guide.description,
    // accessible par lien seulement : on ne veut pas le voir dans Google
    robots: { index: false, follow: false },
  };
}

export default async function GuidePage({ params }) {
  const { slug } = await params;
  const guide = lireGuide(slug);
  if (!guide) notFound();

  const html = md.parse(guide.corps);
  const dateLisible = guide.date
    ? new Date(guide.date).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <>
      {/* en-tête réduit : la navigation du site n'a pas sa place sur le
          sous-domaine des guides */}
      <header className="guide-nav">
        <a className="brand" href="https://20kavant.fr/robinnat">
          <b>20Kavant</b>
          <small>.fr</small>
        </a>
        <span className="guide-nav-tag">Guide</span>
      </header>

      <section className="defi">
        <div className="defi-inner guide-head-inner">
          <h1 className="defi-title">{guide.title}</h1>
          {guide.description && <p className="defi-sub">{guide.description}</p>}
          {dateLisible && <p className="guide-date">Mis à jour le {dateLisible}</p>}
        </div>
      </section>

      <section className="guide-body">
        <article className="prose" dangerouslySetInnerHTML={{ __html: html }} />
        <p className="guide-private">
          Guide privé, partagé par lien. Merci de ne pas le rediffuser.
        </p>
      </section>

      <footer className="guide-foot">
        <a href="https://20kavant.fr/robinnat">20kavant.fr</a>
      </footer>
    </>
  );
}
