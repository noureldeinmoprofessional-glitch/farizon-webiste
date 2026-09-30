import * as React from "react";
import Image from "next/image";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";

const TIMELINE = [
  { year: "2014", label: "Founded", note: "Geely Holding Group’s new-energy commercial vehicle brand." },
  {
    year: "2024",
    label: "Market milestone",
    note: "Largest share of China’s new-energy commercial vehicle market, and the country’s first commercial vehicle brand with a fully new-energy lineup.",
  },
  {
    year: "2026",
    label: "Egypt",
    note: "National Motors introduced Farizon to Egypt, combining Farizon’s technology with National Motors’ automotive experience since 1978 to support smarter, more sustainable commercial transportation.",
  },
];

export function FarizonStory() {
  return (
    <section id="who-is-farizon" className="bg-white py-section">
      <div className="container-fluid">
        {/* Header */}
        <Reveal>
          <span className="eyebrow text-blue">About Farizon</span>
          <h2 className="mt-4 text-h2">Who is Farizon?</h2>
        </Reveal>

        {/* Intro: image + founding lead */}
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/images/who-is-farizon.png"
                alt="Farizon new-energy commercial vehicles"
                width={1536}
                height={1024}
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal index={1} className="order-1 lg:order-2">
            <div className="flex items-end gap-5">
              <span className="spec-value text-[72px] leading-[0.9] sm:text-[88px]">2014</span>
              <span className="pb-2 text-[12px] font-bold uppercase tracking-[0.16em] text-ink-muted">
                Founded
              </span>
            </div>
            <GradientLine className="my-6" width={72} />
            <p className="max-w-prose text-[17px] leading-relaxed text-ink-soft">
              Founded in 2014, Farizon is Geely Holding Group’s new-energy commercial vehicle brand,
              developing intelligent and sustainable mobility solutions for modern logistics and
              transportation.
            </p>
            <p className="mt-4 max-w-prose text-[16px] leading-relaxed text-ink-soft">
              Supported by Geely’s global technology ecosystem and China’s largest research institute
              dedicated to new-energy commercial vehicles, Farizon develops electric and methanol
              technologies specifically for commercial applications.
            </p>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="mt-16 border-t border-mist-200 pt-10 lg:mt-20">
          <div className="grid gap-8 md:grid-cols-3 md:gap-6">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} index={i}>
                <div className="relative">
                  <GradientLine width={40} />
                  <div className="mt-4 spec-value text-[40px]">{t.year}</div>
                  <div className="mt-1 text-[12px] font-bold uppercase tracking-[0.14em] text-blue">
                    {t.label}
                  </div>
                  <p className="mt-3 max-w-xs text-[14.5px] leading-relaxed text-ink-soft">{t.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Closing prose */}
        <div className="mt-16 grid gap-x-16 gap-y-6 border-t border-mist-200 pt-10 md:grid-cols-2">
          <Reveal>
            <p className="text-[16px] leading-relaxed text-ink-soft">
              In 2024, Farizon achieved the largest share of China’s new-energy commercial vehicle
              market and became the country’s first commercial vehicle brand with a fully new-energy
              product lineup.
            </p>
          </Reveal>
          <Reveal index={1}>
            <p className="text-[16px] leading-relaxed text-ink-soft">
              Its international expansion includes the all-electric Farizon SV, built on the advanced
              GXA-M architecture and designed to deliver efficient charging, extended range, strong
              load capability and practical cargo space.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
