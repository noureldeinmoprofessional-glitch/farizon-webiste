"use client";

import * as React from "react";
import { svTech } from "@/lib/svPassenger";
import { Reveal } from "@/components/ui/Reveal";

export function SVTechnology() {
  return (
    <section aria-label="Driving technology" className="bg-white py-section">
      <div className="container-fluid">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-[calc(var(--header-h)+40px)] lg:h-fit">
            <span className="eyebrow text-blue">Driving technology</span>
            <h2 className="mt-5 text-h1">Engineered to move differently.</h2>
            <p className="mt-5 max-w-sm text-[16px] leading-relaxed text-ink-soft">
              Passenger-car engineering, adapted for commercial work — from the suspension to the way
              the vehicle responds and charges.
            </p>
          </Reveal>

          <ul>
            {svTech.map((t, i) => (
              <Reveal key={t.key} index={i}>
                <li className="group border-t border-mist-200 last:border-b">
                  <div className="flex items-start gap-6 py-8">
                    <img
                      src={t.icon}
                      alt=""
                      aria-hidden="true"
                      className="h-12 w-12 shrink-0 transition-transform duration-base group-hover:-translate-y-0.5"
                    />
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3">
                        <span className="text-[12px] font-bold text-ink-muted">{t.n}</span>
                        <h3 className="text-h4 text-starry">{t.title}</h3>
                      </div>
                      <span
                        aria-hidden="true"
                        className="mt-4 block h-[2px] w-10 rounded-full transition-all duration-slow ease-standard group-hover:w-24"
                        style={{ background: "linear-gradient(90deg,#FFC832,#FF6432)" }}
                      />
                      <p className="mt-4 max-w-lg text-[15.5px] leading-relaxed text-ink-soft">
                        {t.body}
                      </p>
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
