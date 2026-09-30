import * as React from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { LeadText } from "./LeadText";
import { v6eExtraSpace } from "@/lib/v6e";

export function V6EExtraSpace() {
  return (
    <section aria-label="Extra Space" className="bg-white py-section">
      <div className="container-fluid">
        <Reveal>
          <span className="eyebrow text-blue">Structure</span>
          <h2 className="mt-5 text-h2">Extra Space</h2>
        </Reveal>

        <Reveal index={1} className="relative mt-10 aspect-[16/9] overflow-hidden rounded-lg">
          <Image
            src="/v6e/durability-2.jpg"
            alt="Farizon V6E cargo structure"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </Reveal>

        <div className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-3">
          {v6eExtraSpace.map((p, i) => (
            <Reveal key={i} index={i} className="border-t border-mist-200 pt-6">
              <span className="text-[13px] font-bold text-ink-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <LeadText text={p} className="mt-3 text-[15.5px] leading-relaxed text-ink-soft" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
