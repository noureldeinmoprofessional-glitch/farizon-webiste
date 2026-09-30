"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { categories, vehicles, vehiclesByCategory, type VehicleCategoryId } from "@/lib/vehicles";
import { Icon } from "@/components/ui/Icon";
import { CountUp } from "@/components/ui/CountUp";
import { useSiteChrome } from "@/components/providers/SiteChrome";

/** Lineup-specific vehicle renders (with baked shadows) for the dark stage. */
const lineupImage: Record<string, string> = {
  v6e: "/vehicles/lineup/v6e.png",
  "sv-passenger": "/vehicles/lineup/sv-passenger.png",
  f1e: "/vehicles/lineup/f1e.png",
  h8e: "/vehicles/lineup/h8e.png",
};

/** Per-model stage width so each render sits naturally on the floor. */
const stageWidth: Record<string, string> = {
  v6e: "w-[152%]",
  "sv-passenger": "w-[120%]",
  f1e: "w-[126%]",
  h8e: "w-[130%]",
};

export function VehicleExplorer() {
  const { openTestDrive } = useSiteChrome();
  const [categoryId, setCategoryId] = React.useState<VehicleCategoryId>("lcv");
  const modelsInCategory = vehiclesByCategory(categoryId);
  const [modelId, setModelId] = React.useState(modelsInCategory[0].id);

  const active = vehicles.find((v) => v.id === modelId) ?? modelsInCategory[0];
  const activeIndex = modelsInCategory.findIndex((m) => m.id === active.id);

  const selectCategory = (id: VehicleCategoryId) => {
    setCategoryId(id);
    setModelId(vehiclesByCategory(id)[0].id);
  };

  const ease = [0.2, 0.65, 0.3, 1] as const;

  return (
    <section id="vehicles" className="relative isolate overflow-hidden bg-[#0d1420] text-white">
      {/* Background scene */}
      <Image
        src="/vehicles/lineup/base.png"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Legibility overlays — keep the left copy readable, fade toward the vehicle */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,12,20,0.88)_0%,rgba(8,12,20,0.55)_36%,rgba(8,12,20,0.12)_62%,rgba(8,12,20,0)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,20,0.55)_0%,rgba(8,12,20,0)_20%,rgba(8,12,20,0)_66%,rgba(8,12,20,0.55)_100%)]"
      />

      <div className="container-fluid relative z-10 flex flex-col py-[clamp(60px,5vh,92px)] lg:min-h-[100svh]">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow text-white/80">The lineup</span>
            <h2 className="mt-4 text-white text-h2">Explore our vehicles</h2>
            <p className="mt-3 max-w-md text-[16px] leading-relaxed text-white/70">
              A purpose-built electric range for commercial work — from light commercial vans to
              light trucks.
            </p>
          </div>
          <Link href="/vehicles" className="link-arrow shrink-0 text-white">
            All vehicles <Icon name="arrow-right" size={16} />
          </Link>
        </div>

        {/* Category tabs */}
        <div
          role="tablist"
          aria-label="Vehicle categories"
          className="mt-9 flex flex-wrap gap-x-8 gap-y-2 border-b border-white/15"
        >
          {categories.map((cat) => {
            const selected = cat.id === categoryId;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={selected}
                onClick={() => selectCategory(cat.id)}
                className={`relative -mb-px pb-4 text-[16px] font-bold transition-colors ${
                  selected ? "text-white" : "text-white/50 hover:text-white/80"
                }`}
              >
                {cat.label}
                {selected && (
                  <motion.span
                    layoutId="lineup-tab-underline"
                    className="absolute inset-x-0 bottom-0 h-[3px] rounded-full bg-brand-gradient"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Main composition */}
        <div className="relative grid flex-1 gap-8 pt-8 lg:grid-cols-2 lg:gap-6">
          {/* Text column */}
          <motion.div
            key={active.id + "-text"}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease }}
            className="relative z-10 flex max-w-xl flex-col justify-center"
          >
            <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-white/60">
              {active.categoryLabel}
            </span>
            <h3 className="mt-3 text-white text-display-l">{active.name}</h3>
            <p className="mt-2 text-[20px] font-light text-white/90">{active.tagline}</p>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/70">{active.blurb}</p>

            {active.specs.length > 0 ? (
              <dl className="mt-8 grid max-w-md grid-cols-2 gap-x-10 gap-y-6">
                {active.specs.map((s) => (
                  <div key={s.label}>
                    <dd>
                      <CountUp
                        value={s.value}
                        className="spec-value block text-white text-[34px] leading-none"
                      />
                    </dd>
                    <dt className="mt-2 text-[12px] font-bold uppercase tracking-[0.1em] text-white/55">
                      {s.label}
                    </dt>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="mt-6 max-w-md rounded-md border border-white/15 bg-white/5 px-4 py-3 text-[13.5px] text-white/70">
                {active.note}
              </p>
            )}

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={`/vehicles/${active.id}`} className="btn btn-on-dark">
                View model <Icon name="arrow-right" size={18} />
              </Link>
              <button
                onClick={() => openTestDrive(active.name.replace("Farizon ", ""))}
                className="btn btn-ghost-on-dark"
              >
                Book a test drive
              </button>
            </div>
          </motion.div>

          {/* Stage (desktop) — absolute, so vehicle dimensions never change the section height */}
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block">
            <motion.div
              key={active.id + "-img"}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease }}
              className={`absolute bottom-0 right-0 z-10 -mr-[6%] ${stageWidth[active.id] ?? "w-[110%]"}`}
            >
              <Image
                src={lineupImage[active.id]}
                alt={`${active.name} — ${active.categoryLabel}`}
                width={1200}
                height={640}
                priority={active.id === "v6e"}
                sizes="55vw"
                className="h-auto w-full object-contain"
              />
            </motion.div>
          </div>
        </div>

        {/* Stage (mobile) — fixed-height box keeps the layout steady across models */}
        <motion.div
          key={active.id + "-img-m"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="relative mt-6 h-[220px] lg:hidden"
        >
          <Image
            src={lineupImage[active.id]}
            alt={`${active.name} — ${active.categoryLabel}`}
            fill
            sizes="90vw"
            className="object-contain object-bottom"
          />
        </motion.div>

        {/* Bottom — pagination + model switcher */}
        <div className="mt-8 flex flex-col-reverse items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="flex items-center gap-4 text-white/60">
            <span aria-hidden="true" className="h-px w-14 bg-white/25" />
            <span className="text-[12px] font-bold tracking-[0.2em]">
              {String(activeIndex + 1).padStart(2, "0")}
              <span className="text-white/35"> / {String(modelsInCategory.length).padStart(2, "0")}</span>
            </span>
          </div>

          <div className="flex gap-3" role="group" aria-label={`${active.categoryLabel} models`}>
            {modelsInCategory.map((m) => {
              const selected = m.id === active.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setModelId(m.id)}
                  aria-pressed={selected}
                  className={`group relative w-[118px] overflow-hidden rounded-lg border px-3 pb-2 pt-1.5 text-left backdrop-blur-sm transition-colors sm:w-[136px] ${
                    selected
                      ? "border-white/60 bg-white/10"
                      : "border-white/15 bg-white/5 hover:border-white/40"
                  }`}
                >
                  <span className="relative block h-11">
                    <Image
                      src={lineupImage[m.id]}
                      alt=""
                      aria-hidden="true"
                      fill
                      sizes="136px"
                      className="object-contain"
                    />
                  </span>
                  <span
                    className={`mt-1 block text-[12px] font-bold transition-colors ${
                      selected ? "text-white" : "text-white/55 group-hover:text-white/80"
                    }`}
                  >
                    {m.name.replace("Farizon ", "")}
                  </span>
                  {selected && (
                    <motion.span
                      layoutId="lineup-thumb-underline"
                      className="absolute inset-x-0 bottom-0 h-[2px] bg-brand-gradient"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
