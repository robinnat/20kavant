import SiteNav from "../../components/SiteNav";
import Hero from "../../components/Hero";
import PresentationVideo from "../../components/PresentationVideo";
import About from "../../components/About";
import Revenue from "../../components/Revenue";
import Contest from "../../components/Contest";
import Follow from "../../components/Follow";
import Footer from "../../components/Footer";
import Interactions from "../../components/Interactions";
import { getTrustMrrData } from "../../lib/trustmrr";

// La page se régénère toute seule toutes les 30 min : un nouveau paiement
// visible sur TrustMRR remonte sans redéploiement ni intervention.
// Next.js exige ici une valeur littérale (analyse statique) — garder la même
// valeur que REVALIDATE_SECONDS dans lib/trustmrr.js.
export const revalidate = 1800;

export default async function Page() {
  const data = await getTrustMrrData();

  return (
    <>
      <SiteNav />
      <Hero />
      <PresentationVideo />
      <Revenue demo={data.demo} total={data.total} history={data.history ?? []} />
      <Contest />
      <About />
      <Follow />
      <Footer />
      <Interactions data={data} />
    </>
  );
}
