"use client";

import * as React from "react";
import Image from "next/image";
import { svHotspots, svColors } from "@/lib/svPassenger";
import { Reveal } from "@/components/ui/Reveal";

export function SVInteractive() {
  const [active, setActive] = React.useState<string>("seats");

  return (
    <section id="experience" aria-label="Explore the SV Passenger" className="bg-mist-50 py-section">
      <div className="container-fluid">
        <Reveal>
          <span className="eyebrow text-blue">Interactive</span>
          <h2 className="mt-5 max-w-2xl text-h2">Explore the SV Passenger</h2>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-ink-soft">
            Point to a highlight on the vehicle, or choose a feature below, to see what makes the SV
            Passenger purpose-built.
          </p>
        </Reveal>

        {/* Stage */}
        <Reveal index={1}>
          <div className="relative mt-10 overflow-hidden rounded-lg bg-starry-900">
            <div className="relative aspect-[2/1]">
              <Image
                src="/sv-passenger/vehicle.png"
                alt="Farizon SV Passenger — side profile"
                fill
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-cover"
              />
              {svHotspots.map((h) => {
                const on = active === h.id;
                // Edge-aware card placement so large cards never clip the stage.
                const alignH = h.x < 26 ? "left" : h.x > 74 ? "right" : "center";
                const openDown = h.y < 34;
                const cardPos = [
                  openDown ? "top-full mt-3" : "bottom-full mb-3",
                  alignH === "center"
                    ? "left-1/2 -translate-x-1/2"
                    : alignH === "left"
                      ? "left-0"
                      : "right-0",
                ].join(" ");
                return (
                  <button
                    key={h.id}
                    onClick={() => setActive(h.id)}
                    onMouseEnter={() => setActive(h.id)}
                    aria-pressed={on}
                    aria-label={h.name}
                    className={`group absolute grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full focus:outline-none ${
                      on ? "z-20" : "z-10 hover:z-20 focus:z-20"
                    }`}
                    style={{ left: `${h.x}%`, top: `${h.y}%` }}
                  >
                    {/* pulse */}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-0 rounded-full transition-opacity ${
                        on ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                      style={{ boxShadow: "0 0 0 7px rgba(0,15,215,0.20)" }}
                    />
                    {/* dot — Evolution Blue */}
                    <span
                      aria-hidden="true"
                      className={`h-5 w-5 rounded-full bg-blue ring-[3px] ring-white transition-transform duration-base group-hover:scale-110 group-focus-visible:scale-110 ${
                        on ? "scale-110" : ""
                      }`}
                      style={{ boxShadow: "0 2px 10px rgba(0,15,215,0.45)" }}
                    />
                    {/* large info card */}
                    <span
                      className={`pointer-events-none absolute w-64 rounded-lg bg-white p-5 text-left shadow-[0_18px_44px_rgba(20,20,28,0.24)] transition-opacity duration-base ${cardPos} ${
                        on
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                      }`}
                    >
                      <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue">
                        Highlight
                      </span>
                      <span className="mt-1.5 block text-[18px] font-bold leading-snug text-starry">
                        {h.name}
                      </span>
                      {h.id === "colors" && (
                        <span className="mt-3 flex flex-wrap gap-x-3 gap-y-2">
                          {svColors.map((c) => (
                            <span key={c.name} className="flex items-center gap-1.5">
                              <span
                                className="h-4 w-4 rounded-full ring-1 ring-inset ring-black/10"
                                style={{ background: c.hex }}
                              />
                              <span className="text-[11px] font-semibold text-ink-soft">{c.name}</span>
                            </span>
                          ))}
                        </span>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
