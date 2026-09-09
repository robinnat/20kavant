import { notFound } from "next/navigation";
import { marked } from "marked";
import { listerSlugs, lireGuide } from "../../../lib/guides";

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

  const html = marked.parse(guide.corps, { mangle: false, headerIds: true });
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
