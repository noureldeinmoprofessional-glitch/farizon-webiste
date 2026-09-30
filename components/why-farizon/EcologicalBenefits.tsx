import * as React from "react";
import Image from "next/image";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";

export function EcologicalBenefits() {
  return (
    <section id="ecological" className="bg-mist-50 py-section">
      <div className="container-fluid">
        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          {/* Media — dominant */}
          <Reveal className="relative order-2 aspect-[3/2] overflow-hidden rounded-lg lg:order-1">
            <Image
              src="/about/ecological-benefits.png"
              alt="Farizon electric commercial vehicle in an urban environment"
              fill
              sizes="(max-width: 1024px) 90vw, 58vw"
              className="object-cover"
            />
          </Reveal>

          {/* Copy */}
          <Reveal index={1} className="order-1 lg:order-2">
            <span className="eyebrow text-blue">Ecological Benefits</span>
            <h2 className="mt-4 text-h2">Cleaner, more efficient city environments.</h2>
            <GradientLine className="my-6" width={72} />
            <p className="max-w-prose text-[16.5px] leading-relaxed text-ink-soft">
              Farizon electric commercial vehicles are designed to address the growing challenges of
              urban logistics and last-mile delivery. By eliminating tailpipe emissions and
              significantly reducing noise levels, they contribute to cleaner, more efficient city
              environments. Built for modern transport needs, Farizon vehicles support businesses in
              operating more sustainably while improving overall urban mobility and quality of life.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
