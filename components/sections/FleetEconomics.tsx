"use client";

import * as React from "react";
import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/Icon";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";

interface Tool {
  n: string;
  icon: IconName;
  title: string;
  desc: string;
  href: string;
  /** Drop the real asset at this path in /public and it appears with no code change. */
  image: string;
  checklist?: string[];
}

const TOOLS: Tool[] = [
  {
    n: "01",
    icon: "calculator",
    title: "Fleet Total Cost of Ownership",
    desc: "Compare total ownership costs over time.",
    href: "/fleet-solutions#tco",
    image: "/fleet-solutions/tco.webp",
    checklist: ["Acquisition", "Energy", "Maintenance", "Emissions"],
  },
  {
    n: "02",
    icon: "bolt",
    title: "Diesel vs EV Cost Calculator",
    desc: "Compare operating costs side by side.",
    href: "/fleet-solutions#diesel-ev",
    image: "/fleet-solutions/diesel-ev.webp",
  },
  {
    n: "03",
    icon: "gauge",
    title: "5-Year Cost Comparison",
    desc: "Project costs across a five-year horizon.",
    href: "/fleet-solutions#five-year",
    image: "/fleet-solutions/five-year.jpg",
  },
  {
    n: "04",
    icon: "leaf",
    title: "Carbon Footprint Calculator",
    desc: "Estimate and compare emissions impact.",
    href: "/fleet-solutions#carbon",
    image: "/fleet-solutions/carbon.webp",
  },
];

function ToolCard({ tool, featured = false }: { tool: Tool; featured?: boolean }) {
  return (
    <Link
      href={tool.href}
      className={[
        "group relative flex h-full flex-col overflow-hidden rounded-lg border border-white/12 bg-starry-800 p-6 md:p-7",
        "transition-colors duration-base hover:border-white/35",
        featured ? "min-h-[360px]" : "min-h-[220px]",
      ].join(" ")}
    >
      {/* Background image (drop-in). Falls back to the branded dark surface if absent. */}
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center transition-transform duration-slow group-hover:scale-[1.04]"
        style={{ backgroundImage: `url(${tool.image})` }}
      />
      {/* Legibility overlay */}
      <span
        aria-hidden="true"
        className={
          featured
            ? "absolute inset-0 bg-[linear-gradient(105deg,rgba(43,43,58,0.95)_0%,rgba(43,43,58,0.78)_38%,rgba(43,43,58,0.3)_100%)]"
            : "absolute inset-0 bg-[linear-gradient(160deg,rgba(43,43,58,0.92)_0%,rgba(43,43,58,0.68)_55%,rgba(43,43,58,0.32)_100%)]"
        }
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between">
          <span className="grid h-11 w-11 place-items-center rounded-md bg-white text-starry">
            <Icon name={tool.icon} size={22} />
          </span>
          <Icon
            name="arrow-up-right"
            size={20}
            className="text-white/45 transition-colors group-hover:text-white"
          />
        </div>

        <div className="mt-auto pt-8">
          <h3 className="max-w-[15ch] text-white text-h4">{tool.title}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-mist">{tool.desc}</p>

          {tool.checklist && (
            <ul className="mt-6 space-y-2.5">
              {tool.checklist.map((c) => (
                <li key={c} className="flex items-center gap-2.5 text-[15px] text-white/90">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue text-white">
                    <Icon name="check" size={12} strokeWidth={2.4} />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Link>
  );
}

export function FleetEconomics() {
  return (
    <section id="fleet-economics" className="relative overflow-hidden bg-starry-900 py-section text-white">
      <div className="container-fluid relative">
        <div className="grid items-start gap-12 lg:grid-cols-[0.82fr_1.6fr] lg:gap-16">
          {/* Narrative */}
          <div>
            <span className="eyebrow text-white/85">Decision support</span>
            <h2 className="mt-5 text-white text-h1">Farizon Fleet Economics toolkit</h2>
            <p className="mt-4 text-[19px] font-semibold text-white">
              Make better fleet decisions with practical calculators.
            </p>
            <GradientLine className="my-6" width={72} />
            <p className="max-w-prose text-[15.5px] leading-relaxed text-mist">
              Moving from diesel to electric commercial vehicles involves more than comparing vehicle
              specifications. Fleet operators need to understand how acquisition costs, energy
              consumption, maintenance requirements and emissions may affect their operations over
              time.
            </p>
            <Link href="/fleet-solutions" className="btn btn-blue mt-8">
              Explore Fleet Economics <Icon name="arrow-right" size={18} />
            </Link>

            <p className="mt-8 flex max-w-prose gap-3 border-t border-white/12 pt-6 text-[12px] leading-relaxed text-mist/70">
              <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full border border-white/25 text-[10px] font-bold">
                i
              </span>
              <span>
                Calculator outputs are indicative estimates for general informational and comparative
                purposes only. They do not constitute a quotation, contractual commitment, guarantee
                of savings, certified emissions report, or financial advice. © National Motors.
              </span>
            </p>

            <span className="mt-10 hidden items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/45 lg:inline-flex">
              <span className="h-[3px] w-7 rounded-full bg-brand-gradient" />
              National Motors
            </span>
          </div>

          {/* Bento of tools */}
          <div>
            <div className="mb-4 hidden justify-end text-right sm:flex">
              <span className="text-[11px] font-bold uppercase leading-relaxed tracking-[0.18em] text-white/40">
                Fleet economics
                <br />
                decision tools
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:h-[496px] lg:grid-cols-3 lg:grid-rows-2">
              {TOOLS.map((t, i) => (
                <Reveal
                  key={t.title}
                  index={i}
                  className={`h-full ${i === 0 ? "lg:row-span-2" : i === 1 ? "lg:col-span-2" : ""}`}
                >
                  <ToolCard tool={t} featured={i === 0} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
