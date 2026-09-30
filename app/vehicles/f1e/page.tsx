import type { Metadata } from "next";
import { SiteChrome } from "@/components/providers/SiteChrome";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/footer/Footer";
import { F1EHero } from "@/components/product-f1e/F1EHero";
import { F1EAtAGlance } from "@/components/product-f1e/F1EAtAGlance";
import { F1EFeatures } from "@/components/product-f1e/F1EFeatures";
import { F1ESpecs } from "@/components/product-f1e/F1ESpecs";
import { F1EConfigurator } from "@/components/product-f1e/F1EConfigurator";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ProductBottomCTA } from "@/components/product/ProductBottomCTA";

export const metadata: Metadata = {
  title: "F1E",
  description:
    "Farizon F1E — electric mini truck. Ultra-strong load-bearing body, GXA-M architecture with fast recharge, wide-body cabin and Box, Fridge and Stake configurations.",
};

export default function F1EPage() {
  return (
    <SiteChrome>
      <Header transparentOnTop />
      <main id="main">
        <F1EHero />
        <F1EAtAGlance />
        <F1EFeatures />
        <F1ESpecs />
        <F1EConfigurator />
        <FinalCTA />
        <ProductBottomCTA />
      </main>
      <Footer />
    </SiteChrome>
  );
}
