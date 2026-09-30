import type { Metadata } from "next";
import { SiteChrome } from "@/components/providers/SiteChrome";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/footer/Footer";
import { FAQHero } from "@/components/faq/FAQHero";
import { FAQExplorer } from "@/components/faq/FAQExplorer";
import { FAQCTA } from "@/components/faq/FAQCTA";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Practical answers about Farizon electric commercial vehicles — range, charging, daily operation, drivers, troubleshooting and buying in Egypt.",
};

export default function FAQPage() {
  return (
    <SiteChrome>
      <Header transparentOnTop={false} />
      <main id="main">
        <FAQHero />
        <FAQExplorer />
        <FAQCTA />
      </main>
      <Footer />
    </SiteChrome>
  );
}
