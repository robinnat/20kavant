import SiteNav from "../../../components/SiteNav";
import Contest from "../../../components/Contest";
import Footer from "../../../components/Footer";
import { getTrustMrrData } from "../../../lib/trustmrr";

// Même fraîcheur que la page d'accueil : les paliers franchis dépendent du
// total de revenus (cf. lib/trustmrr.js).
export const revalidate = 1800;

export const metadata = {
  title: "Tente de gagner une PS5 + GTA 6 · 20Kavant.fr",
  description:
    "Concours gratuit : à chaque palier de revenus franchi, un tirage au sort parmi mes abonnés pour gagner GTA 6, et une PS5 + GTA 6 au palier final.",
};

export default async function ConcoursPage() {
  const data = await getTrustMrrData();

  return (
    <>
      <SiteNav />
      <Contest total={data.total} />
      <Footer />
    </>
  );
}
