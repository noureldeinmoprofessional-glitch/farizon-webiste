import * as React from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { LeadText } from "./LeadText";
import { v6ePerformance } from "@/lib/v6e";

export function V6EPerformance() {
  return (
    <section aria-label="High Performance" className="bg-white py-section">
      <div className="container-fluid">
        <Reveal>
          <span className="eyebrow text-blue">Performance &amp; efficiency</span>
          <h2 className="mt-5 text-h2">High Performance</h2>
        </Reveal>

        <Reveal index={1} className="relative mt-10 aspect-[16/9] overflow-hidden rounded-lg">
          <Image
            src="/v6e/performance.png"
            alt="Farizon V6E performance and efficiency"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </Reveal>

        <div className="mt-12 grid gap-x-16 gap-y-8 md:grid-cols-2">
          {v6ePerformance.map((p, i) => (
            <Reveal key={i} index={i % 2} className="border-t border-mist-200 pt-6">
              <span className="text-[13px] font-bold text-ink-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <LeadText
                text={p}
                className="mt-3 text-[15.5px] leading-relaxed text-ink-soft"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
