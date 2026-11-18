import SiteNav from "../../components/SiteNav";
import Guides from "../../components/Guides";
import About from "../../components/About";
import Projects from "../../components/Projects";
import Challenge from "../../components/Challenge";
import Follow from "../../components/Follow";
import Footer from "../../components/Footer";
import Interactions from "../../components/Interactions";
import { getTrustMrrData } from "../../lib/trustmrr";

// La page se régénère toute seule toutes les 30 min : un nouveau paiement
// visible sur TrustMRR remonte sans redéploiement ni intervention. Les appels
// TrustMRR sont en cache pour la même durée (FRAICHEUR_S, lib/trustmrr.js) :
// jamais `no-store`, qui rendrait la page dynamique. Next.js exige ici une
// valeur littérale. Si une régénération échoue, la page précédente reste.
export const revalidate = 1800;

export default async function Page() {
  const data = await getTrustMrrData();

  return (
    <>
      <SiteNav />
      {/* pas de hero : la présentation ouvre directement la page */}
      <About />
      <Projects />
      <Guides />
      <Challenge total={data.total} goal={data.goal} />
      <Follow />
      <Footer />
      <Interactions data={data} />
    </>
  );
}
