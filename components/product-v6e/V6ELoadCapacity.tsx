import * as React from "react";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";
import { v6eLoadCapacity } from "@/lib/v6e";

export function V6ELoadCapacity() {
  return (
    <section aria-label="Increased Load Capacity" className="bg-starry-900 py-section text-white">
      <div className="container-fluid">
        <Reveal>
          <span className="eyebrow text-white/85">Load capacity</span>
          <h2 className="mt-5 text-white text-h2">Increased Load Capacity</h2>
          <GradientLine className="mt-7" width={80} />
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
          {v6eLoadCapacity.map((p, i) => (
            <Reveal key={i} index={i} className="border-t border-white/12 pt-7">
              <span className="text-[13px] font-bold text-white/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-[13px] font-bold uppercase tracking-[0.14em] text-white/70">
                Increased Load Capacity
              </h3>
              <p className="mt-4 whitespace-pre-wrap text-[16.5px] font-light leading-relaxed text-mist">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
