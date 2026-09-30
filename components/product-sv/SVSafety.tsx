"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { svSafety } from "@/lib/svPassenger";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function SVSafety() {
  const [active, setActive] = React.useState(0);
  const reduced = useReducedMotion();
  const item = svSafety[active];

  return (
    <section aria-label="Safety" className="bg-starry-900 py-section text-white">
      <div className="container-fluid">
        <Reveal>
          <h2 className="max-w-2xl text-white text-h2">Safety</h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Visual anchor */}
          <Reveal className="relative aspect-[16/10] overflow-hidden rounded-lg">
            <Image
              src="/sv-passenger/safety.png"
              alt="Farizon SV Passenger"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </Reveal>

          {/* Feature viewer */}
          <div>
            <div className="min-h-[150px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={reduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.2, 0.65, 0.3, 1] }}
                >
                  <span className="text-[13px] font-bold text-white/45">{item.n}</span>
                  <h3 className="mt-2 text-white text-h3">{item.title}</h3>
                  <p className="mt-4 max-w-md text-[16px] font-light leading-relaxed text-mist">
                    {item.body}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <GradientLine className="my-7" width={64} />

            <ul className="space-y-px">
              {svSafety.map((s, i) => {
                const on = i === active;
                return (
                  <li key={s.n}>
                    <button
                      onClick={() => setActive(i)}
                      aria-current={on ? "true" : undefined}
                      className={`flex w-full items-center gap-4 border-t border-white/10 py-3.5 text-left transition-colors ${
                        on ? "text-white" : "text-white/55 hover:text-white/80"
                      }`}
                    >
                      <span className="text-[12px] font-bold tabular-nums opacity-60">{s.n}</span>
                      <span className="text-[15px] font-semibold">{s.title}</span>
                      {on && (
                        <span
                          className="ml-auto h-[2px] w-8 rounded-full"
                          style={{ background: "linear-gradient(90deg,#FFC832,#FF6432)" }}
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
