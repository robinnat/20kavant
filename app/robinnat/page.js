import SiteNav from "../../components/SiteNav";
import Hero from "../../components/Hero";
import Videos from "../../components/Videos";
import Guides from "../../components/Guides";
import About from "../../components/About";
import Revenue from "../../components/Revenue";
import Contest from "../../components/Contest";
import Follow from "../../components/Follow";
import Footer from "../../components/Footer";
import Interactions from "../../components/Interactions";
import { getTrustMrrData } from "../../lib/trustmrr";

// La page se régénère toute seule toutes les 30 min : un nouveau paiement
// visible sur TrustMRR remonte sans redéploiement ni intervention. C'est le
// seul cache de la chaîne (les appels TrustMRR sont en `no-store`, cf.
// lib/trustmrr.js). Next.js exige ici une valeur littérale.
export const revalidate = 1800;

export default async function Page() {
  const data = await getTrustMrrData();

  return (
    <>
      <SiteNav />
      <Hero total={data.total} goal={data.goal} />
      <Videos />
      <Guides />
      {/* compteur, projets et concours regroupés dans un seul bloc */}
      <Revenue demo={data.demo} total={data.total} history={data.history ?? []}>
        <Contest />
      </Revenue>
      <About />
      <Follow />
      <Footer />
      <Interactions data={data} />
    </>
  );
}
