import type { Metadata } from "next";
import { SiteChrome } from "@/components/providers/SiteChrome";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/footer/Footer";
import { SVHero } from "@/components/product-sv/SVHero";
import { SVSpecs } from "@/components/product-sv/SVSpecs";
import { SVInteractive } from "@/components/product-sv/SVInteractive";
import { SVSafety } from "@/components/product-sv/SVSafety";
import { SVComfortPerformance } from "@/components/product-sv/SVComfortPerformance";
import { SVFlexibleSpace } from "@/components/product-sv/SVFlexibleSpace";
import { SVTechnology } from "@/components/product-sv/SVTechnology";
import { SVInterior } from "@/components/product-sv/SVInterior";
import { SVOTA } from "@/components/product-sv/SVOTA";
import { SVGallery } from "@/components/product-sv/SVGallery";
import { FleetCTA } from "@/components/fleet/FleetCTA";
import { ProductBottomCTA } from "@/components/product/ProductBottomCTA";

export const metadata: Metadata = {
  title: "SV Passenger",
  description:
    "Farizon SV Passenger — a seven-seat electric passenger van engineered for people and business. Explore safety, comfort, performance, technology and interior.",
};

export default function SVPassengerPage() {
  return (
    <SiteChrome>
      <Header transparentOnTop />
      <main id="main">
        <SVHero />
        <SVSpecs />
        <SVInteractive />
        <SVSafety />
        <SVComfortPerformance />
        <SVFlexibleSpace />
        <SVTechnology />
        <SVInterior />
        <SVOTA />
        <SVGallery />
        <FleetCTA />
        <ProductBottomCTA />
      </main>
      <Footer />
    </SiteChrome>
  );
}
