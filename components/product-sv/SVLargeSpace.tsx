import * as React from "react";
import { Reveal } from "@/components/ui/Reveal";

/** Exact slide-25 pillars (wording unchanged). */
const pillars = [
  { title: "Large space", items: ["Largest van space of the LCVs lineup", "Hassle-free loading options"] },
  { title: "Intelligent Design", items: ["No B-pillar giving extra large space", "Modular design"] },
  { title: "Electric Platform", items: ["World-class efficiency", "Zero carbon emissions"] },
];

export function SVLargeSpace() {
  return (
    <section aria-label="Large space" className="bg-starry-900 py-section text-white">
      <div className="container-fluid">
        <Reveal>
          <span className="eyebrow text-white/85">Farizon SV</span>
        </Reveal>

        {/* Large video — full width */}
        <Reveal index={1} className="mt-8 overflow-hidden rounded-lg">
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

        {/* Three feature columns beneath the video */}
        <div className="mt-12 grid gap-10 border-t border-white/12 pt-12 md:grid-cols-3 md:gap-10 lg:gap-16">
          {pillars.map((p, i) => (
            <Reveal key={p.title} index={i}>
              <h3 className="text-white text-h4">{p.title}</h3>
              <span aria-hidden="true" className="mt-5 block h-[3px] w-10 rounded-full bg-brand-gradient" />
              <ul className="mt-6 space-y-4">
                {p.items.map((item) => (
                  <li key={item} className="flex items-start gap-3.5 text-[16px] leading-relaxed text-mist">
                    <span aria-hidden="true" className="mt-2.5 h-[2px] w-4 shrink-0 bg-white/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
