import * as React from "react";
import Image from "next/image";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { v6eCargo } from "@/lib/v6e";

export function V6ECargo() {
  return (
    <section aria-label={v6eCargo.heading} className="bg-mist-50 py-section">
      <div className="container-fluid">
        <Reveal>
          <span className="eyebrow text-blue">Cargo</span>
          <h2 className="mt-5 max-w-2xl text-h1">{v6eCargo.heading}</h2>
        </Reveal>

        <Reveal index={1} className="relative mt-10 aspect-[16/9] overflow-hidden rounded-lg">
          <Image
            src="/v6e/cargo.png"
            alt="Farizon V6E cargo and loading"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="flex gap-10">
              <div>
                <CountUp value="5.9 m³" className="spec-value block text-[52px] leading-none" />
                <p className="mt-2 text-[12px] font-bold uppercase tracking-[0.12em] text-ink-muted">
                  Cargo capacity
                </p>
              </div>
              <div>
                <CountUp value="1,150 kg" className="spec-value block text-[52px] leading-none" />
                <p className="mt-2 text-[12px] font-bold uppercase tracking-[0.12em] text-ink-muted">
                  Payload
                </p>
              </div>
            </div>
            <GradientLine className="mt-8" width={72} />
          </Reveal>
          <Reveal index={1} className="space-y-5">
            {v6eCargo.body.map((p) => (
              <p key={p} className="max-w-prose text-[16px] leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
