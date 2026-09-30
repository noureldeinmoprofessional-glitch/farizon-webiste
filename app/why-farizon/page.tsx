import type { Metadata } from "next";
import { SiteChrome } from "@/components/providers/SiteChrome";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/footer/Footer";
import { WhyFarizonHero } from "@/components/why-farizon/WhyFarizonHero";
import { EcologicalBenefits } from "@/components/why-farizon/EcologicalBenefits";
import { TechAdvancements } from "@/components/why-farizon/TechAdvancements";
import { FleetEconomics } from "@/components/sections/FleetEconomics";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Why Farizon",
  description:
    "Everything you need to know about Farizon — ecological benefits, technological advancements and practical fleet economics tools for commercial operators in Egypt.",
};

export default function WhyFarizonPage() {
  return (
    <SiteChrome>
      <Header transparentOnTop />
      <main id="main">
        <WhyFarizonHero />
        <EcologicalBenefits />
        <TechAdvancements />
        <FleetEconomics />
        <FinalCTA />
      </main>
      <Footer />
    </SiteChrome>
  );
}
