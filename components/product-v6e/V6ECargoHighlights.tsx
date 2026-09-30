import * as React from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { v6eCargoHighlightsFigures, v6eCargoHighlightsDetails } from "@/lib/v6e";

export function V6ECargoHighlights() {
  return (
    <section aria-label="Cargo Highlights" className="bg-white py-section">
      <div className="container-fluid">
        <Reveal>
          <span className="eyebrow text-blue">Cargo Highlights</span>
          <h2 className="mt-5 text-h2">Cargo Highlights</h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal className="relative aspect-[16/10] overflow-hidden rounded-lg">
            <Image
              src="/v6e/cargo-highlights.png"
              alt="Farizon V6E cargo highlights"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </Reveal>

          <div>
            {/* Figures */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-8">
              {v6eCargoHighlightsFigures.map((f, i) => (
                <Reveal key={f} index={i} className="border-t border-mist-200 pt-4">
                  <p className="text-[17px] font-bold leading-snug text-starry">{f}</p>
                </Reveal>
              ))}
            </div>
            {/* Details */}
            <ul className="mt-10 space-y-px">
              {v6eCargoHighlightsDetails.map((d) => (
                <li
                  key={d}
                  className="flex items-center gap-3 border-t border-mist-200 py-3.5 text-[15px] text-ink-soft last:border-b"
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: "linear-gradient(135deg,#FFC832,#FF6432)" }}
                  />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
