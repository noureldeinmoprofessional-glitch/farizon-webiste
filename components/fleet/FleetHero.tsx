import * as React from "react";
import Image from "next/image";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";

export function FleetHero() {
  return (
    <section
      aria-label="Farizon Fleet Solutions"
      className="bg-white pt-[calc(var(--header-h)+clamp(28px,5vh,64px))] pb-16"
    >
      <div className="container-fluid">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <Reveal>
            <span className="eyebrow text-blue">Farizon Fleet Solutions</span>
            <h1 className="mt-5 text-balance text-display-l">
              Make Better Fleet Decisions with Practical Calculators
            </h1>
            <GradientLine className="mt-7" width={96} />
            <p className="mt-6 max-w-2xl text-[16.5px] leading-relaxed text-ink-soft">
              Moving from diesel to electric commercial vehicles involves more than comparing vehicle
              specifications. Fleet operators need to understand how acquisition costs, energy
              consumption, maintenance requirements and emissions may affect their operations over
              time.
            </p>
            <a href="#calculators" className="link-arrow mt-8 text-blue">
              Choose a fleet question
              <span aria-hidden="true" className="ml-1 inline-block rotate-90">→</span>
            </a>
          </Reveal>

          <Reveal index={1} className="relative aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src="/fleet/hero.png"
              alt="Farizon electric commercial van in an urban environment"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 52vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
