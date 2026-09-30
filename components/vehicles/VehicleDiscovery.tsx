"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { useReducedMotion } from "@/lib/useReducedMotion";

/* -------------------------------------------------------------------------- */
/* Listing data — a curated subset of the approved specs in lib/vehicles.ts.  */
/* No figures are invented; H8E stays intentionally minimal.                  */
/* -------------------------------------------------------------------------- */

type Fact = { value: string; label: string };
interface Model {
  id: string;
  name: string;
  label: string;
  image: string;
  href: string;
  facts: Fact[];
}
interface Category {
  id: string;
  label: string;
  models: Model[];
}

const CATEGORIES: Category[] = [
  {
    id: "lcv",
    label: "LCV",
    models: [
      {
        id: "v6e",
        name: "V6E",
        label: "Electric Cargo Van",
        image: "/vehicles/v6e.png",
        href: "/vehicles/v6e",
        facts: [
          { value: "300 km", label: "CLTC Range" },
          { value: "1,150 kg", label: "Max Payload" },
          { value: "5.9 m³", label: "Cargo Space" },
        ],
      },
      {
        id: "sv-passenger",
        name: "SV Passenger",
        label: "SuperVan Passenger",
        image: "/vehicles/sv-passenger.png",
        href: "/vehicles/sv-passenger",
        facts: [{ value: "7", label: "Seats" }],
      },
    ],
  },
  {
    id: "mini-truck",
    label: "Mini Trucks",
    models: [
      {
        id: "f1e",
        name: "F1E",
        label: "Mini Truck",
        image: "/vehicles/f1e.png",
        href: "/vehicles/f1e",
        facts: [
          { value: "1,460 kg", label: "Payload" },
          { value: "41.86 kWh", label: "Battery" },
          { value: "90 km/h", label: "Max Speed" },
        ],
      },
    ],
  },
  {
    id: "light-truck",
    label: "Light Trucks",
    models: [
      {
        id: "h8e",
        name: "H8E",
        label: "Light Truck",
        image: "/vehicles/h8e.png",
        href: "/vehicles/h8e",
        facts: [],
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */

function ModelCard({ model, reduced }: { model: Model; reduced: boolean }) {
  const item: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 22 },
    show: { opacity: 1, y: 0, transition: { duration: reduced ? 0 : 0.55, ease: [0.2, 0.65, 0.3, 1] } },
    exit: { opacity: 0, y: reduced ? 0 : -12, transition: { duration: reduced ? 0 : 0.3 } },
  };

  return (
    <motion.article variants={item} className="group flex flex-col">
      {/* Vehicle stage */}
      <div className="relative flex aspect-[16/10] items-center justify-center">
        {/* Floor shadow */}
        <div className="absolute bottom-[16%] left-1/2 h-6 w-[62%] -translate-x-1/2 rounded-[100%] bg-black/12 blur-2xl" />
        <Image
          src={model.image}
          alt={`Farizon ${model.name} — side profile`}
          width={1200}
          height={680}
          sizes="(max-width: 1024px) 90vw, 46vw"
          className="relative z-10 h-auto w-[92%] object-contain drop-shadow-xl transition-transform duration-slow ease-standard group-hover:scale-[1.02]"
        />
      </div>

      {/* Info */}
      <div className="mt-2">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-h3 text-starry">{model.name}</h3>
        </div>
        <p className="mt-1 text-[12px] font-bold uppercase tracking-[0.14em] text-ink-muted">
          {model.label}
        </p>

        {model.facts.length > 0 && (
          <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-5 border-t border-mist-200 pt-6">
            {model.facts.map((f) => (
              <div key={f.label}>
                <dd className="spec-value text-[26px] sm:text-[30px]">{f.value}</dd>
                <dt className="mt-1 text-[11.5px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
                  {f.label}
                </dt>
              </div>
            ))}
          </dl>
        )}

        <Link
          href={model.href}
          className={`link-arrow text-blue ${model.facts.length > 0 ? "mt-7" : "mt-6 border-t border-mist-200 pt-6"}`}
        >
          Explore {model.name} <Icon name="arrow-right" size={16} />
        </Link>
      </div>
    </motion.article>
  );
}

export function VehicleDiscovery() {
  const reduced = useReducedMotion();
  const [index, setIndex] = React.useState(0);
  const tabsRef = React.useRef<(HTMLButtonElement | null)[]>([]);
  const active = CATEGORIES[index];

  // Roving keyboard navigation for the category tablist.
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft" && e.key !== "Home" && e.key !== "End") return;
    e.preventDefault();
    let next = index;
    if (e.key === "ArrowRight") next = (index + 1) % CATEGORIES.length;
    if (e.key === "ArrowLeft") next = (index - 1 + CATEGORIES.length) % CATEGORIES.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = CATEGORIES.length - 1;
    setIndex(next);
    tabsRef.current[next]?.focus();
  };

  const panel: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : 0.1, delayChildren: reduced ? 0 : 0.05 } },
    exit: { transition: { staggerChildren: 0 } },
  };

  const single = active.models.length === 1;

  return (
    <section id="vehicle-discovery" className="bg-white py-section">
      <div className="container-fluid">
        {/* Section header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow text-blue">Explore our vehicles</span>
            <h2 className="mt-4 max-w-[14ch] text-h2">Find the right vehicle for your business.</h2>
          </div>
          <p className="max-w-sm text-[15.5px] leading-relaxed text-ink-soft md:text-right">
            Three vehicle categories. Four models. Explore the Farizon lineup and find the fit for
            your operation.
          </p>
        </div>

        {/* Category tablist */}
        <div
          role="tablist"
          aria-label="Vehicle categories"
          onKeyDown={onKeyDown}
          className="mt-12 flex flex-wrap gap-x-8 gap-y-2 border-b border-mist-200"
        >
          {CATEGORIES.map((cat, i) => {
            const selected = i === index;
            return (
              <button
                key={cat.id}
                ref={(el) => {
                  tabsRef.current[i] = el;
                }}
                role="tab"
                id={`tab-${cat.id}`}
                aria-selected={selected}
                aria-controls="vehicle-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setIndex(i)}
                className={`relative -mb-px pb-4 pr-1 text-left transition-colors ${
                  selected ? "text-starry" : "text-ink-muted hover:text-ink"
                }`}
              >
                <span className="text-[18px] font-bold">{cat.label}</span>
                {selected && (
                  <motion.span
                    layoutId="veh-cat-underline"
                    className="absolute inset-x-0 bottom-0 h-[3px] rounded-full bg-brand-gradient"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Model count */}
        <p className="mt-6 text-[12px] font-bold uppercase tracking-[0.16em] text-ink-muted">
          {active.models.length} {active.models.length > 1 ? "Models" : "Model"}
        </p>

        {/* Showcase */}
        <div
          id="vehicle-panel"
          role="tabpanel"
          aria-labelledby={`tab-${active.id}`}
          className="mt-6"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              variants={panel}
              initial="hidden"
              animate="show"
              exit="exit"
              className={
                single
                  ? "mx-auto grid max-w-2xl grid-cols-1"
                  : "grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2"
              }
            >
              {active.models.map((m) => (
                <ModelCard key={m.id} model={m} reduced={reduced} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
