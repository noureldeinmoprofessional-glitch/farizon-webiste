import * as React from "react";
import Image from "next/image";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";
import { v6eHero, v6eSpecsPrimary, v6eSpecsSecondary } from "@/lib/v6e";

export function V6EAtAGlance() {
  return (
    <section aria-label="V6E at a glance" className="bg-white py-section">
      <div className="container-fluid">
        <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[0.85fr_1.15fr] lg:[grid-template-rows:auto_auto]">
          {/* Intro copy — left, row 1 */}
          <Reveal className="lg:col-start-1 lg:row-start-1">
            <span className="eyebrow text-blue">Farizon V6E</span>
            <div className="mt-6 space-y-5">
              <p className="max-w-prose text-[16.5px] leading-relaxed text-ink-soft">{v6eHero.body}</p>
              <p className="max-w-prose text-[16.5px] leading-relaxed text-ink-soft">{v6eHero.body2}</p>
            </div>
          </Reveal>

          {/* Vehicle — right, spans both rows, no card/background */}
          <Reveal
            index={1}
            className="flex items-center justify-center lg:col-start-2 lg:row-span-2 lg:row-start-1"
          >
            <Image
              src="/v6e/side.png"
              alt="Farizon V6E side view"
              width={1224}
              height={816}
              sizes="(max-width: 1024px) 90vw, 55vw"
              className="h-auto w-full max-w-[720px] object-contain drop-shadow-2xl"
            />
          </Reveal>

          {/* Specifications — left, row 2, secondary to the introduction */}
          <Reveal className="lg:col-start-1 lg:row-start-2">
            <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-ink-muted">
              Key V6E Specifications
            </span>
            <GradientLine className="mt-4" width={56} />

            {/* Primary four */}
            <div className="mt-7 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {v6eSpecsPrimary.map((s) => (
                <p key={s} className="text-[18px] font-bold leading-snug text-starry">
                  {s}
                </p>
              ))}
            </div>

            {/* Secondary rail */}
            <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
              {v6eSpecsSecondary.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-3 border-t border-mist-200 py-3 text-[14.5px] text-ink-soft"
                >
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-starry" />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
