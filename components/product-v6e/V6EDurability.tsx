import * as React from "react";
import Image from "next/image";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { LeadText } from "./LeadText";
import { v6eDurability } from "@/lib/v6e";

const STATS = [
  { v: "13", l: "Storage spaces" },
  { v: "5800+", l: "Test runs" },
  { v: "1M+", l: "Kilometres" },
];

export function V6EDurability() {
  return (
    <section aria-label="Durability" className="bg-mist-50 py-section">
      <div className="container-fluid">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/v6e/durability-1.jpg"
              alt="Farizon V6E durability and workability"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>

          <Reveal index={1}>
            <span className="eyebrow text-blue">Durability</span>
            <h2 className="mt-5 text-h2">Durability</h2>

            {/* Decorative stat hierarchy (numbers also appear in the copy below) */}
            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-6" aria-hidden="true">
              {STATS.map((s) => (
                <div key={s.l}>
                  <dd><CountUp value={s.v} className="spec-value block text-[40px] leading-none" /></dd>
                  <dt className="mt-2 text-[12px] font-bold uppercase tracking-[0.12em] text-ink-muted">
                    {s.l}
                  </dt>
                </div>
              ))}
            </dl>

            <GradientLine className="my-8" width={72} />

            <div className="space-y-5">
              {v6eDurability.map((p) => (
                <LeadText key={p} text={p} className="max-w-prose text-[16px] leading-relaxed text-ink-soft" />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
