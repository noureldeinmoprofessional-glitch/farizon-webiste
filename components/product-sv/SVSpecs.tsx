import * as React from "react";
import { svSpecs } from "@/lib/svPassenger";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";

export function SVSpecs() {
  return (
    <section aria-label="Key specifications" className="bg-white py-section">
      <div className="container-fluid">
        <div className="grid gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {svSpecs.map((s, i) => (
            <Reveal
              key={s.label}
              index={i}
              className={`sm:px-8 lg:px-10 ${i > 0 ? "sm:border-l sm:border-mist-200" : ""} ${
                i === 2 ? "lg:border-l" : ""
              }`}
            >
              <div>
                <span
                  aria-hidden="true"
                  className="block h-[3px] w-9 rounded-full"
                  style={{ background: "linear-gradient(90deg,#FFC832,#FF6432)" }}
                />
                <div className="mt-6 flex items-baseline gap-1.5">
                  <CountUp value={s.value} className="spec-value text-[64px] leading-none sm:text-[72px]" />
                  {s.unit && (
                    <span className="text-[20px] font-bold text-ink-muted">{s.unit}</span>
                  )}
                </div>
                <p className="mt-3 text-[13px] font-bold uppercase tracking-[0.14em] text-ink-muted">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
