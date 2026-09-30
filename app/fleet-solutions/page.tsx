import type { Metadata } from "next";
import { SiteChrome } from "@/components/providers/SiteChrome";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/footer/Footer";
import { FleetHero } from "@/components/fleet/FleetHero";
import { FleetContext } from "@/components/fleet/FleetContext";
import { CalculatorSection } from "@/components/fleet/CalculatorSection";
import { FleetDisclaimer } from "@/components/fleet/FleetDisclaimer";
import { FleetCTA } from "@/components/fleet/FleetCTA";

export const metadata: Metadata = {
  title: "Fleet Solutions",
  description:
    "Farizon Fleet Economics toolkit — share your fleet information and the Farizon Egypt team will prepare a total cost of ownership, energy, five-year or carbon assessment for your commercial fleet.",
};

export default function FleetSolutionsPage() {
  return (
    <SiteChrome>
      <Header transparentOnTop={false} />
      <main id="main">
        <FleetHero />
        <FleetContext />
        <CalculatorSection />
        <FleetDisclaimer />
        <FleetCTA />
      </main>
      <Footer />
    </SiteChrome>
  );
}
