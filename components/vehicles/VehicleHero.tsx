import * as React from "react";
import Image from "next/image";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Vehicles page hero — safety/brand statement over the supplied lineup asset.
 * Copy is taken verbatim from the Farizon website content (V02).
 */
export function VehicleHero() {
  return (
    <section aria-label="Vehicles" className="bg-starry-900 pt-[var(--header-h)]">
      <div className="relative h-[clamp(440px,66vh,720px)] w-full overflow-hidden">
        <Image
          src="/images/vehicles-hero.png"
          alt="The Farizon electric commercial vehicle lineup — mini truck, passenger van, light truck and cargo van at a charging station"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Left-weighted dark gradient for text legibility — vehicles stay visible */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,18,26,0.9)_0%,rgba(18,18,26,0.62)_40%,rgba(18,18,26,0.12)_74%,rgba(18,18,26,0)_100%)]" />
        {/* Soft dark pool behind the copy for guaranteed body-text contrast */}
        <div className="absolute inset-0 bg-[radial-gradient(115%_95%_at_0%_62%,rgba(18,18,26,0.6)_0%,transparent_52%)]" />
        {/* Extra bottom veil on small screens where text sits lower */}
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/60 to-transparent sm:hidden" />

        <div className="container-fluid absolute inset-0 flex items-center">
          <div className="max-w-xl py-12">
            <Reveal as="span" className="block">
              <span className="eyebrow text-white/85">Vehicles</span>
            </Reveal>
            <Reveal index={1}>
              <h1 className="mt-5 text-balance text-white text-display-l">
                Safer by Design for You and Everyone Around You.
              </h1>
            </Reveal>
            <Reveal index={2}>
              <GradientLine className="mt-6" width={88} />
            </Reveal>
            <Reveal index={3}>
              <p className="mt-6 max-w-lg text-[16.5px] leading-relaxed text-white/85">
                Farizon vehicles are designed around an aluminum-steel structure that’s strong yet
                light. It’s an award-winning brand to the European standards, and it’s packed full of
                intelligent active and passive safety features.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
