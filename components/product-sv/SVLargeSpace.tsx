import * as React from "react";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";

/** Exact slide-25 bullet lists (wording unchanged). */
function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3.5 text-[16px] leading-relaxed text-mist">
          <span aria-hidden="true" className="mt-2.5 h-[2px] w-5 shrink-0 bg-brand-gradient" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function SVLargeSpace() {
  return (
    <section aria-label="Large space" className="bg-starry-900 py-section text-white">
      <div className="container-fluid">
        <Reveal>
          <span className="eyebrow text-white/85">Farizon SV</span>
        </Reveal>

        {/* Large space — lead pillar with video */}
        <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="text-white text-h2">Large space</h2>
            <GradientLine className="my-6" width={72} />
            <BulletList items={["Largest van space of the LCVs lineup", "Hassle-free loading options"]} />
          </Reveal>

          <Reveal index={1} className="overflow-hidden rounded-lg">
            <video
              className="aspect-video h-auto w-full object-cover"
              src="/sv-passenger/large-space.mp4"
              poster="/sv-passenger/large-space-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </Reveal>
        </div>

        {/* Intelligent Design + Electric Platform */}
        <div className="mt-14 grid gap-10 border-t border-white/12 pt-10 md:grid-cols-2 md:gap-16">
          <Reveal>
            <h3 className="text-white text-h4">Intelligent Design</h3>
            <BulletList items={["No B-pillar giving extra large space", "Modular design"]} />
          </Reveal>

          <Reveal index={1}>
            <h3 className="text-white text-h4">Electric Platform</h3>
            <BulletList items={["World-class efficiency", "Zero carbon emissions"]} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
