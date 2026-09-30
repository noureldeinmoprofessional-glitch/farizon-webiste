import type { Metadata } from "next";
import { SiteChrome } from "@/components/providers/SiteChrome";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/footer/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapPlaceholder } from "@/components/contact/MapPlaceholder";
import { ContactInfo } from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Farizon Egypt team. Send us a message about Farizon electric commercial vehicles and fleet solutions, or reach us by email, phone or WhatsApp.",
};

export default function ContactPage() {
  return (
    <SiteChrome>
      <Header transparentOnTop={false} />
      <main id="main">
        <ContactHero />

        {/* Main contact section — form + map */}
        <section aria-label="Contact form and location" className="bg-white pb-section">
          <div className="container-fluid">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch lg:gap-14">
              <ContactForm />
              <MapPlaceholder />
            </div>
          </div>
        </section>

        <ContactInfo />
      </main>
      <Footer />
    </SiteChrome>
  );
}
