import { notFound } from "next/navigation";
import { marked } from "marked";
import SiteNav from "../../../components/SiteNav";
import Footer from "../../../components/Footer";
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
    title: `${guide.title} · 20Kavant.fr`,
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
      <SiteNav />

      <section className="defi">
        <div className="defi-inner guide-head-inner">
          <div className="defi-eyebrow">Guide</div>
          <h1 className="defi-title">{guide.title}</h1>
          {guide.description && <p className="defi-sub">{guide.description}</p>}
          {dateLisible && <p className="guide-date">Mis à jour le {dateLisible}</p>}
        </div>
      </section>

      <section className="guide-body">
        <article className="prose" dangerouslySetInnerHTML={{ __html: html }} />
        <p className="guide-private">
          Ce guide est privé : il n&apos;est listé nulle part et n&apos;apparaît pas dans les
          moteurs de recherche. Partage-le avec son lien.
        </p>
      </section>

      <Footer />
    </>
  );
}
