import * as React from "react";
import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/Icon";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";

const SECONDARY: { n: string; icon: IconName; title: string; href: string }[] = [
  { n: "02", icon: "bolt", title: "Diesel vs EV Fleet Energy Cost", href: "/fleet-solutions#diesel-ev" },
  { n: "03", icon: "gauge", title: "Five-Year Diesel vs Farizon", href: "/fleet-solutions#five-year" },
  { n: "04", icon: "leaf", title: "Fleet Carbon Footprint", href: "/fleet-solutions#carbon" },
];

export function FleetToolkitPreview() {
  return (
    <section id="fleet-economics" className="bg-white py-section">
      <div className="container-fluid">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Narrative */}
          <div className="lg:sticky lg:top-[calc(var(--header-h)+40px)] lg:h-fit">
            <Reveal>
              <span className="eyebrow text-blue">Fleet Economics</span>
              <h2 className="mt-4 text-h2">Farizon Fleet Economics toolkit</h2>
              <p className="mt-4 text-[19px] font-semibold text-starry">
                Make Better Fleet Decisions with Practical Calculators
              </p>
              <GradientLine className="my-6" width={72} />
              <p className="max-w-prose text-[16px] leading-relaxed text-ink-soft">
                Moving from diesel to electric commercial vehicles involves more than comparing
                vehicle specifications. Fleet operators need to understand how acquisition costs,
                energy consumption, maintenance requirements and emissions may affect their
                operations over time.
              </p>
              <Link href="/fleet-solutions" className="btn btn-primary mt-8">
                Explore Fleet Economics <Icon name="arrow-right" size={18} />
              </Link>
              <p className="mt-8 max-w-prose border-t border-mist-200 pt-6 text-[12px] leading-relaxed text-ink-muted">
                Calculator outputs are indicative estimates for general informational and comparative
                purposes only. They do not constitute a quotation, contractual commitment, guarantee
                of savings, certified emissions report, or financial, legal, tax, technical,
                accounting or investment advice. © National Motors. All copyrights reserved.
              </p>
            </Reveal>
          </div>

          {/* Designed UI placeholder — the toolkit */}
          <Reveal index={1}>
            <div className="rounded-lg bg-starry-900 p-5 text-white ring-1 ring-white/10 sm:p-7">
              {/* Panel header */}
              <div className="mb-5 flex items-center justify-between">
                <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-white/70">
                  Fleet Economics · Toolkit
                </span>
                <span className="rounded-sm border border-white/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">
                  UI placeholder
                </span>
              </div>

              {/* Primary — TCO */}
              <Link
                href="/fleet-solutions#tco"
                className="group block rounded-md border border-white/12 bg-white/[0.03] p-6 transition-all duration-base hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/[0.06]"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-md bg-white text-starry">
                    <Icon name="calculator" size={22} />
                  </span>
                  <span className="text-[12px] font-bold tracking-[0.14em] text-white/40">01</span>
                </div>
                <h3 className="mt-5 text-[20px] font-bold">Fleet Total Cost of Ownership</h3>

                {/* Neutral input → result motif (no figures) */}
                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="rounded-sm border border-white/10 bg-white/[0.02] px-4 py-3">
                    <div className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/40">
                      Your data
                    </div>
                    <div className="mt-2 space-y-2">
                      <span className="block h-2 w-4/5 rounded-full bg-white/12" />
                      <span className="block h-2 w-3/5 rounded-full bg-white/12" />
                    </div>
                  </div>
                  <div className="rounded-sm border border-white/10 bg-white/[0.02] px-4 py-3">
                    <div className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/40">
                      Calculated result
                    </div>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-[26px] font-bold leading-none text-white/70">—</span>
                      <span
                        className="h-[3px] w-10 rounded-full"
                        style={{ background: "linear-gradient(90deg,#FFC832,#FF6432)" }}
                      />
                    </div>
                  </div>
                </div>

                <span className="link-arrow mt-5 text-white/70 transition-colors group-hover:text-white">
                  Start calculator <Icon name="arrow-right" size={16} />
                </span>
              </Link>

              {/* Secondary — three tools */}
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {SECONDARY.map((t) => (
                  <Link
                    key={t.n}
                    href={t.href}
                    className="group flex flex-col rounded-md border border-white/12 bg-white/[0.03] p-5 transition-all duration-base hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/[0.06]"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid h-10 w-10 place-items-center rounded-md bg-white/8 text-white transition-colors group-hover:bg-white group-hover:text-starry">
                        <Icon name={t.icon} size={20} />
                      </span>
                      <Icon
                        name="arrow-up-right"
                        size={18}
                        className="text-white/35 transition-colors group-hover:text-white"
                      />
                    </div>
                    <span className="mt-6 text-[11px] font-bold tracking-[0.14em] text-white/40">
                      {t.n}
                    </span>
                    <h4 className="mt-1 text-[15px] font-bold leading-snug">{t.title}</h4>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
