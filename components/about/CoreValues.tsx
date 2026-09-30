import * as React from "react";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";

const VALUES = [
  { n: "01", label: "User experience" },
  { n: "02", label: "Technological innovation" },
  { n: "03", label: "Sustainable development" },
  { n: "04", label: "Zero-carbon thinking" },
];

export function CoreValues() {
  return (
    <section id="core-values" className="bg-mist-50 py-section">
      <div className="container-fluid">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Header / statement */}
          <div className="lg:sticky lg:top-[calc(var(--header-h)+48px)] lg:h-fit">
            <Reveal>
              <span className="eyebrow text-blue">What we stand for</span>
              <h2 className="mt-4 text-h2">Core Values</h2>
              <GradientLine className="my-6" width={72} />
              <p className="max-w-prose text-[16.5px] leading-relaxed text-ink-soft">
                not only enhancing user experiences through technological innovation but also fostering
                environmentally friendly and sustainable development by integrating the zero-carbon
                concept into all aspects of corporate growth.
              </p>
            </Reveal>
          </div>

          {/* Concept progression */}
          <ol className="relative">
            {/* vertical gradient spine */}
            <span
              aria-hidden="true"
              className="absolute left-[7px] top-2 bottom-2 w-[2px] rounded-full"
              style={{ background: "linear-gradient(180deg,#FFC832,#FF6432)" }}
            />
            {VALUES.map((v, i) => (
              <Reveal as="li" key={v.n} index={i} className="relative pl-10">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-[14px] h-4 w-4 rounded-full border-2 border-white bg-starry ring-1 ring-mist-300"
                />
                <div className={i === 0 ? "" : "mt-10"}>
                  <span className="text-[12px] font-bold tracking-[0.14em] text-ink-muted">{v.n}</span>
                  <p className="mt-1 text-h3 text-starry">{v.label}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
