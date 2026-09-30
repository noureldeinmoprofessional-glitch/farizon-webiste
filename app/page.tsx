import { SiteChrome } from "@/components/providers/SiteChrome";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/footer/Footer";
import { HeroSection } from "@/components/hero/HeroSection";
import { BrandFilm } from "@/components/sections/BrandFilm";
import { BusinessValue } from "@/components/sections/BusinessValue";
import { VehicleExplorer } from "@/components/vehicles/VehicleExplorer";
import { WhyFarizon } from "@/components/sections/WhyFarizon";
import { BornElectric } from "@/components/sections/BornElectric";
import { AfterSales } from "@/components/sections/AfterSales";
import { FleetEconomics } from "@/components/sections/FleetEconomics";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <SiteChrome>
      <Header transparentOnTop />
      <main id="main">
        <HeroSection />
        <BrandFilm />
        <BusinessValue />
        <VehicleExplorer />
        <WhyFarizon />
        <BornElectric />
        <AfterSales />
        <FleetEconomics />
        <FinalCTA />
      </main>
      <Footer />
    </SiteChrome>
  );
}
