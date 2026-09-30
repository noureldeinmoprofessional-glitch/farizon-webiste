import * as React from "react";
import { GradientLine } from "@/components/ui/GradientLine";

export function FleetDisclaimer() {
  return (
    <section aria-label="Important information about the calculators" className="bg-white py-section">
      <div className="container-fluid">
        <div className="mx-auto max-w-[860px]">
          <span className="eyebrow text-blue">Important information</span>
          <h2 className="mt-5 text-h3 text-starry">About the calculators</h2>
          <GradientLine className="mt-6" width={72} />
          <p className="mt-6 text-[16px] leading-relaxed text-ink-soft">
            Calculator estimates are indicative. The information you share is reviewed by the Farizon
            Egypt team, who prepare and discuss any assessment or comparison with you directly.
          </p>

          <details className="group mt-6 border-t border-mist-200 pt-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[14px] font-bold uppercase tracking-[0.1em] text-starry">
              View terms &amp; limitations
              <span
                aria-hidden="true"
                className="grid h-8 w-8 shrink-0 place-items-center rounded-sm border border-mist-300 text-starry transition-transform duration-base group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <div className="mt-6 space-y-4 text-[14.5px] leading-relaxed text-ink-soft">
              <p>
                All calculator outputs are indicative estimates provided for general informational and
                comparative purposes only. Results depend on user-entered information, selected
                assumptions, publicly available prices, emission factors and other data that may change
                or may not apply to every vehicle, customer, tariff, charging provider or operating
                environment.
              </p>
              <p>
                The calculators do not constitute a quotation, contractual commitment, guarantee of
                savings, certified emissions report, complete financial assessment or financial, legal,
                tax, technical, accounting or investment advice.
              </p>
              <p>
                Users must independently verify all inputs, prices, assumptions, emission factors and
                results before making any purchasing, budgeting, reporting, investment or
                fleet-management decision. Full terms, calculation boundaries, sources and applicable
                limitations are provided with every assessment prepared by the Farizon Egypt team.
              </p>
            </div>
          </details>

          <p className="mt-8 text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
            All copyrights reserved to National Motors
          </p>
        </div>
      </div>
    </section>
  );
}
