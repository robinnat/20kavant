/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // La racine du domaine renvoie vers la page principale /robinnat.
      // permanent:false (307) pour ne pas figer la redirection dans le cache
      // des navigateurs si tu veux changer la home plus tard.
      {
        source: "/",
        destination: "/robinnat",
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        // cache long + immuable pour les polices : plus de re-téléchargement
        // (ni flash) à chaque rafraîchissement. Renomme le fichier si tu le
        // changes un jour.
        source: "/fonts/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
