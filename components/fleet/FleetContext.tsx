import * as React from "react";
import Image from "next/image";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";

export function FleetContext() {
  return (
    <section aria-label="Fleet economics context" className="bg-mist-50 py-section">
      <div className="container-fluid">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <Reveal>
            <span className="eyebrow text-blue">Fleet economics</span>
            <h2 className="mt-6 text-h1 leading-[1.02]">
              Look beyond the vehicle.
              <br />
              <span className="text-ink-muted">Understand the fleet.</span>
            </h2>
            <GradientLine className="mt-7" width={80} />
            <p className="mt-7 max-w-prose text-[16px] leading-relaxed text-ink-soft">
              Farizon Egypt’s fleet calculators help businesses explore these factors using estimated
              operational data. No vehicle registration numbers, employee information, customer records
              or confidential route details are required.
            </p>
            <p className="mt-4 max-w-prose text-[16px] leading-relaxed text-ink-soft">
              Each calculator provides an indicative result that can support initial fleet planning,
              internal discussions and conversations with the Farizon fleet team.
            </p>
          </Reveal>

          <Reveal index={1} className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/fleet/fleet-economics.png"
              alt="Farizon fleet economics"
              fill
              sizes="(max-width: 1024px) 90vw, 46vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
