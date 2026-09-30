import type { Metadata } from "next";
import { SiteChrome } from "@/components/providers/SiteChrome";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/footer/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { FarizonStory } from "@/components/about/FarizonStory";
import { MissionVision } from "@/components/about/MissionVision";
import { CoreValues } from "@/components/about/CoreValues";
import { NewEnergyRevolution } from "@/components/about/NewEnergyRevolution";
import { DesignLightweight } from "@/components/about/DesignLightweight";
import { TechnologyIndustrialization } from "@/components/about/TechnologyIndustrialization";
import { GreenDevelopment } from "@/components/about/GreenDevelopment";
import { EgyptPartnership } from "@/components/about/EgyptPartnership";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Farizon is Geely Holding Group’s new-energy commercial vehicle brand, founded in 2014 and introduced to Egypt by National Motors in 2026.",
};

export default function AboutPage() {
  return (
    <SiteChrome>
      <Header transparentOnTop={false} />
      <main id="main">
        <AboutHero />
        <FarizonStory />
        <MissionVision />
        <CoreValues />
        <NewEnergyRevolution />
        <DesignLightweight />
        <TechnologyIndustrialization />
        <GreenDevelopment />
        <EgyptPartnership />
        <FinalCTA />
      </main>
      <Footer />
    </SiteChrome>
  );
}
