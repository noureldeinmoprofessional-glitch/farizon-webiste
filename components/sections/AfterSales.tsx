"use client";

import * as React from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { GradientLine } from "@/components/ui/GradientLine";
import { NationalMotorsLogo } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";

const POINTS: { n: string; icon: IconName; title: string; body: string }[] = [
  {
    n: "01",
    icon: "parts",
    title: "Spare parts",
    body: "Dedicated warehousing facilities maintain a comprehensive spare-parts inventory, helping ensure faster availability and shorter service waiting times.",
  },
  {
    n: "02",
    icon: "wrench",
    title: "Mobile maintenance",
    body: "Mobile maintenance provides on-site support when needed, so servicing can come to your operation.",
  },
  {
    n: "03",
    icon: "shield",
    title: "Technical expertise",
    body: "Commercial-vehicle expertise currently supporting three electric vehicle brands across more than seven models — a strong understanding of modern electric-fleet requirements.",
  },
  {
    n: "04",
    icon: "gauge",
    title: "Service innovation",
    body: "Continuous investment in technical training, process improvement and service innovation — with one goal: minimize downtime and keep your fleet operating efficiently.",
  },
];

export function AfterSales() {
  return (
    <section id="after-sales" className="bg-white py-section">
      <div className="container-fluid">
        <div className="grid gap-x-16 gap-y-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-ink-muted">
                Brought to you by
              </span>
              <NationalMotorsLogo variant="black" height={26} />
            </div>
            <h2 className="text-h2">After-sales excellence</h2>
            <p className="mt-3 text-[19px] font-semibold text-starry">
              Support that keeps your fleet moving
            </p>
            <GradientLine className="my-6" width={72} />
          </div>
          <div className="max-w-prose space-y-5 text-[15.5px] leading-relaxed text-ink-soft">
            <p>
              For National Motors, after-sales service is a core part of the ownership experience.
              Through continuous investment in technical training, process improvement and service
              innovation, our goal is simple: minimize downtime and keep your fleet operating
              efficiently.
            </p>
            <p className="text-[17px] font-semibold text-starry">
              With Farizon Egypt, you gain more than a vehicle — you gain a partner committed to
              keeping your business moving.
            </p>
          </div>
        </div>

        {/* Service points — dynamic, non-uniform grid */}
        <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((p, i) => (
            <Reveal key={p.n} index={i} className="border-t border-mist-300 pt-6">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-sm bg-mist-50 text-starry">
                    <Icon name={p.icon} size={26} />
                  </span>
                  <span className="text-[13px] font-bold tracking-[0.12em] text-mist-300">
                    {p.n}
                  </span>
                </div>
                <h3 className="mt-5 text-[19px] font-bold text-starry">{p.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-ink-soft">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
