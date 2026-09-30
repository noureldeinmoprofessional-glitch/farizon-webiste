"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { f1eConfigs } from "@/lib/f1e";
import { Reveal } from "@/components/ui/Reveal";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function F1EConfigurator() {
  const reduced = useReducedMotion();
  const [configId, setConfigId] = React.useState(f1eConfigs[0].id);
  const [imgIndex, setImgIndex] = React.useState(0);

  const config = f1eConfigs.find((c) => c.id === configId)!;
  const primary = config.images[imgIndex];

  const selectConfig = (id: string) => {
    setConfigId(id);
    setImgIndex(0);
  };

  return (
    <section id="configurations" aria-label="Configurations" className="bg-white py-section">
      <div className="container-fluid">
        <Reveal>
          <span className="eyebrow text-blue">Configurations</span>
          <h2 className="mt-5 max-w-2xl text-h2">Box, Fridge or Stake.</h2>
        </Reveal>

        {/* Selector */}
        <div
          role="tablist"
          aria-label="Choose a configuration"
          className="mt-10 flex gap-x-8 border-b border-mist-200"
        >
          {f1eConfigs.map((c) => {
            const on = c.id === configId;
            return (
              <button
                key={c.id}
                role="tab"
                aria-selected={on}
                aria-controls="config-panel"
                onClick={() => selectConfig(c.id)}
                className={`relative -mb-px py-4 text-[15px] font-bold uppercase tracking-[0.1em] transition-colors ${
                  on ? "text-starry" : "text-ink-muted hover:text-ink"
                }`}
              >
                {c.name}
                {on && (
                  <span
                    className="absolute inset-x-0 bottom-0 h-[3px] rounded-full"
                    style={{ background: "linear-gradient(90deg,#FFC832,#FF6432)" }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Primary image */}
        <div
          id="config-panel"
          role="tabpanel"
          aria-label={`${config.name} configuration`}
          className="relative mt-8 aspect-[16/10] overflow-hidden rounded-lg bg-mist-50"
        >
          <motion.div
            key={primary}
            initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 1.01 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reduced ? 0.2 : 0.45, ease: [0.2, 0.65, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={primary}
              alt={`Farizon F1E — ${config.name}`}
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Thumbnails */}
        <div className="mt-4 flex gap-4">
          {config.images.map((src, i) => {
            const on = i === imgIndex;
            return (
              <button
                key={src}
                onClick={() => setImgIndex(i)}
                aria-pressed={on}
                aria-label={`${config.name} — view ${i + 1}`}
                className={`relative aspect-[16/10] w-28 shrink-0 overflow-hidden rounded-md transition-all sm:w-36 ${
                  on ? "ring-2 ring-blue" : "opacity-70 ring-1 ring-mist-300 hover:opacity-100"
                }`}
              >
                <Image
                  src={src}
                  alt={`Farizon F1E — ${config.name} view ${i + 1}`}
                  fill
                  sizes="150px"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
