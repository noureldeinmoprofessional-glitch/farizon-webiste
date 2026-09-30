import * as React from "react";
import Image from "next/image";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";
import { v6eInterior } from "@/lib/v6e";

export function V6EInterior() {
  return (
    <section aria-label="Ergonomic Interior design" className="bg-white py-section">
      <div className="container-fluid">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow text-blue">Interior</span>
            <h2 className="mt-5 text-h2">Ergonomic Interior design</h2>
            <GradientLine className="mt-6" width={72} />
            <p className="mt-6 text-[16.5px] leading-relaxed text-ink-soft">{v6eInterior}</p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-[1.4fr_1fr]">
          <Reveal className="relative aspect-[3/2] overflow-hidden rounded-lg">
            <Image
              src="/v6e/steering.jpg"
              alt="Heated multi-function steering wheel"
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal index={1} className="relative aspect-[3/2] overflow-hidden rounded-lg md:aspect-auto">
            <Image
              src="/v6e/touchscreen.png"
              alt="Floating touchscreen"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
