import * as React from "react";
import Image from "next/image";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";
import { v6eModular } from "@/lib/v6e";

export function V6EModularity() {
  return (
    <section aria-label="Modular Construction" className="bg-mist-50 py-section">
      <div className="container-fluid">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/v6e/modularity.jpg"
              alt="Farizon V6E modularity and commercial applications"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal index={1}>
            <span className="eyebrow text-blue">Modularity</span>
            <h2 className="mt-5 text-h2">Modular Construction</h2>
            <GradientLine className="mt-6" width={72} />
            <p className="mt-6 max-w-prose whitespace-pre-wrap text-[16.5px] leading-relaxed text-ink-soft">
              {v6eModular}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
