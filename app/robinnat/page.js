import SiteNav from "../../components/SiteNav";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Revenue from "../../components/Revenue";
import Contest from "../../components/Contest";
import Follow from "../../components/Follow";
import Footer from "../../components/Footer";
import Interactions from "../../components/Interactions";
import { getTrustMrrData } from "../../lib/trustmrr";

// Revalide la donnée TrustMRR au plus toutes les heures.
export const revalidate = 3600;

export default async function Page() {
  const data = await getTrustMrrData();

  return (
    <>
      <SiteNav />
      <Hero />
      <About />
      <Revenue demo={data.demo} />
      <Contest />
      <Follow />
      <Footer />
      <Interactions data={data} />
    </>
  );
}
