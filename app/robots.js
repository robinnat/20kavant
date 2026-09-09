// Les guides sont accessibles par lien uniquement : on demande aux moteurs de
// ne pas les parcourir. Les pages de guide portent aussi un « noindex » dans
// leurs métadonnées, ce qui est la protection réelle — robots.txt ne fait que
// décourager le passage des robots bien élevés.
export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: "/guides/" }],
  };
}
