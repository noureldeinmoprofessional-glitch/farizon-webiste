import type { Metadata } from "next";
import { SiteChrome } from "@/components/providers/SiteChrome";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/footer/Footer";
import { V6EHero } from "@/components/product-v6e/V6EHero";
import { V6EAtAGlance } from "@/components/product-v6e/V6EAtAGlance";
import { V6EInteractive } from "@/components/product-v6e/V6EInteractive";
import { V6EBusiness } from "@/components/product-v6e/V6EBusiness";
import { V6ECargo } from "@/components/product-v6e/V6ECargo";
import { V6ECargoHighlights } from "@/components/product-v6e/V6ECargoHighlights";
import { V6EPerformance } from "@/components/product-v6e/V6EPerformance";
import { V6EDurability } from "@/components/product-v6e/V6EDurability";
import { V6EExtraSpace } from "@/components/product-v6e/V6EExtraSpace";
import { V6ELoadCapacity } from "@/components/product-v6e/V6ELoadCapacity";
import { V6EInterior } from "@/components/product-v6e/V6EInterior";
import { V6EModularity } from "@/components/product-v6e/V6EModularity";
import { V6EGallery } from "@/components/product-v6e/V6EGallery";
import { V6ECTA } from "@/components/product-v6e/V6ECTA";
import { ProductBottomCTA } from "@/components/product/ProductBottomCTA";

export const metadata: Metadata = {
  title: "V6E",
  description:
    "Farizon V6E Electric Cargo Van — a purpose-built electric cargo van for delivery, distribution and fleet operations. Up to 300 km CLTC range, 1,150 kg payload and 5.9 m³ cargo capacity.",
};

export default function V6EPage() {
  return (
    <SiteChrome>
      <Header transparentOnTop />
      <main id="main">
        <V6EHero />
        <V6EAtAGlance />
        <V6EInteractive />
        <V6EBusiness />
        <V6ECargo />
        <V6ECargoHighlights />
        <V6EPerformance />
        <V6EDurability />
        <V6EExtraSpace />
        <V6ELoadCapacity />
        <V6EInterior />
        <V6EModularity />
        <V6EGallery />
        <V6ECTA />
        <ProductBottomCTA />
      </main>
      <Footer />
    </SiteChrome>
  );
}
