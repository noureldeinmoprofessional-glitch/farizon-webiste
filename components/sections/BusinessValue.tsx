"use client";

import * as React from "react";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";

const PHRASES = [
  { index: "01", label: "Operating economics", line: "Lower costs" },
  { index: "02", label: "Clean city operation", line: "Zero emissions" },
];

export function BusinessValue() {
  return (
    <section className="relative overflow-hidden bg-starry-900 py-section text-white">
      {/* ambient gradient accent */}
      <div className="pointer-events-none absolute -right-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,100,50,0.12),transparent_70%)]" />

      <div className="container-fluid relative">
        <Reveal>
          <span className="eyebrow text-white/80">The business case</span>
        </Reveal>

        <div className="mt-10 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {PHRASES.map((p, i) => (
            <Reveal key={p.index} index={i}>
              <div className={i === 1 ? "md:border-l md:border-white/10 md:pl-16" : ""}>
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-[13px] font-bold tracking-[0.12em] text-white/45">
                    {p.index}
                  </span>
                  <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-white/60">
                    {p.label}
                  </span>
                </div>
                <h2 className="text-white text-display-l">{p.line}</h2>
                <GradientLine className="mt-6" width={64} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
