import type { Metadata } from "next";
import { SiteChrome } from "@/components/providers/SiteChrome";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/footer/Footer";
import { VehicleHero } from "@/components/vehicles/VehicleHero";
import { VehicleDiscovery } from "@/components/vehicles/VehicleDiscovery";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Vehicles",
  description:
    "Explore the Farizon electric commercial vehicle lineup — LCVs, mini trucks and light trucks. Safer by design, purpose-built for business.",
};

export default function VehiclesPage() {
  return (
    <SiteChrome>
      <Header transparentOnTop={false} />
      <main id="main">
        <VehicleHero />
        <VehicleDiscovery />
        <FinalCTA />
      </main>
      <Footer />
    </SiteChrome>
  );
}
