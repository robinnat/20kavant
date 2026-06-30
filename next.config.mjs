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
};

export default nextConfig;
