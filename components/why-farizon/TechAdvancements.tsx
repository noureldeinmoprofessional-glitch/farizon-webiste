import * as React from "react";
import Image from "next/image";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";

export function TechAdvancements() {
  return (
    <section id="technology" className="bg-starry-900 py-section text-white">
      <div className="container-fluid">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <Reveal>
            <span className="eyebrow text-white/85">Technological Advancements</span>
            <h2 className="mt-4 text-white text-h2">Continuously advancing vehicle intelligence.</h2>
            <GradientLine className="my-6" width={72} />
            <p className="max-w-prose text-[16.5px] leading-relaxed text-mist">
              Backed by Geely’s global R&amp;D capabilities, Farizon continuously advances its
              software and vehicle intelligence systems to meet the evolving demands of commercial
              mobility. Through Over-the-Air (OTA) updates, vehicles receive the latest software
              enhancements remotely, without the need for service center visits. This ensures
              continuous performance improvement, extends vehicle lifecycle, and enables a faster
              response to real-world operational feedback.
            </p>
          </Reveal>

          {/* Media */}
          <Reveal index={1} className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/about/technological-advancements.png"
              alt="Farizon connected commercial vehicle"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
