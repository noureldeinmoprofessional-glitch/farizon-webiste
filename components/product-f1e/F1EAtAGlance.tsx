import * as React from "react";
import Image from "next/image";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Visual-led product introduction. The PPTX supplies no F1E intro paragraph,
 * so the vehicle carries the section — no filler copy is invented.
 */
export function F1EAtAGlance() {
  return (
    <section aria-label="F1E at a glance" className="bg-white py-section">
      <div className="container-fluid">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <span className="eyebrow text-blue">Farizon F1E</span>
            <h2 className="mt-6 text-h1 leading-[1.05]">
              Electric Mini Truck
            </h2>
            <GradientLine className="mt-7" width={80} />
          </Reveal>

          <Reveal index={1} className="flex items-center justify-center">
            <Image
              src="/f1e/glance.png"
              alt="Farizon F1E"
              width={1701}
              height={925}
              sizes="(max-width: 1024px) 92vw, 60vw"
              className="h-auto w-full object-contain drop-shadow-2xl"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
