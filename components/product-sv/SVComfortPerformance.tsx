import * as React from "react";
import Image from "next/image";
import { svComfort } from "@/lib/svPassenger";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";

export function SVComfortPerformance() {
  return (
    <section aria-label="Comfort and performance" className="bg-white py-section">
      <div className="container-fluid">
        <Reveal>
          <h2 className="max-w-2xl text-h2">Comfort &amp; Performance</h2>
        </Reveal>

        {/* Comfort visual */}
        <Reveal index={1} className="relative mt-12 aspect-[16/9] overflow-hidden rounded-lg">
          <Image
            src="/sv-passenger/comfort.png"
            alt="Farizon SV Passenger comfort"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </Reveal>

        {/* Comfort topics — divided rail, not cards */}
        <div className="mt-14 grid gap-y-10 md:grid-cols-3">
          {svComfort.map((c, i) => (
            <Reveal
              key={c.title}
              index={i}
              className={`md:px-8 ${i > 0 ? "md:border-l md:border-mist-200" : ""}`}
            >
              <div>
                <span className="text-[13px] font-bold text-ink-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-h5 text-starry">{c.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Performance moment */}
        <Reveal className="mt-16 overflow-hidden rounded-lg bg-starry-900 p-10 text-white md:p-14 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h3 className="text-white text-h2">Performance</h3>
              <GradientLine className="mt-6" width={72} />
              <p className="mt-6 max-w-md text-[16.5px] font-light leading-relaxed text-mist">
                Maximum performance, reduced charging frequency and no autonomy anxiety.
              </p>
              <p className="mt-3 max-w-md text-[16.5px] font-light leading-relaxed text-mist">
                Excellent acceleration and smooth performance even under full load.
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-x-8 gap-y-8">
              {[
                { v: "170", u: "kW", l: "231 PS" },
                { v: "336", u: "Nm", l: "Torque" },
                { v: "36", u: "min", l: "20–80% charge" },
                { v: "7", u: "", l: "Seats" },
              ].map((s) => (
                <div key={s.l} className="border-l border-white/15 pl-5">
                  <dd className="flex items-baseline gap-1">
                    <CountUp value={s.v} className="spec-value text-white text-[40px] leading-none" />
                    <span className="text-[15px] font-bold text-white/70">{s.u}</span>
                  </dd>
                  <dt className="mt-2 text-[12px] font-bold uppercase tracking-[0.12em] text-white/55">
                    {s.l}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
