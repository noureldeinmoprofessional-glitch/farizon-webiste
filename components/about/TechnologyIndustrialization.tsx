import * as React from "react";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";

/** Technology industrialization (PPTX slide 13, exact wording). */
const ITEMS = [
  {
    n: "01",
    title: "Platform Integration Structure",
    rest: "the CTC structure is integrated with the frame and battery box, improving stiffness and strength of the vehicle while reducing the weight of the structure’s parts by more than 25%",
  },
  {
    n: "02",
    title: "Extruded Aluminum Frame",
    rest: "developed using high-strength, toughness of aluminum alloy and frame load matching technology. The weight of load-bearing structure is reduced by more than 30%",
  },
  {
    n: "03",
    title: "EMB Wire Braking System",
    rest: "EMB is the brake-by-wire technology for the vehicles and is deployed in advance",
  },
  {
    n: "04",
    title: "Aluminum Ceramic Brake Disc",
    rest: "which does not need to be replaced, bringing a better driving experience",
  },
];

export function TechnologyIndustrialization() {
  return (
    <section id="technology-industrialization" className="bg-mist-50 py-section">
      <div className="container-fluid">
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow text-blue">Technology industrialization</span>
            <h2 className="mt-4 text-h2">Promote cutting-edge technological innovation in various fields</h2>
            <GradientLine className="mt-6" width={80} />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {ITEMS.map((it, i) => (
            <Reveal key={it.n} index={i % 2} className="border-t border-mist-300 pt-6">
              <div className="flex items-baseline gap-4">
                <span className="text-[13px] font-bold text-ink-muted">{it.n}</span>
                <h3 className="text-h4 text-starry">{it.title}</h3>
              </div>
              <p className="mt-4 max-w-prose text-[15.5px] leading-relaxed text-ink-soft">{it.rest}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
