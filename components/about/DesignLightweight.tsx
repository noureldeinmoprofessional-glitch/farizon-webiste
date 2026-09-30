import * as React from "react";
import Image from "next/image";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";

/** Vehicle technology — Design Lightweight (PPTX slide 12, exact wording). */
const FACETS = [
  {
    n: "01",
    icon: "/about/lw-materials.svg",
    title: "Lightweight materials",
    rest: "magnesium alloy, carbon fiber composite materials, ceramic materials, aluminum alloy, high-strength steel, ultra-high-strength steel",
  },
  {
    n: "02",
    icon: "/about/lw-structure.svg",
    title: "Lightweight structure",
    rest: "sectional structure, bonded structure, force path structure, functional integration, structural fusion",
  },
  {
    n: "03",
    icon: "/about/lw-craftsmanship.svg",
    title: "Lightweight craftsmanship",
    rest: "roll forming craftsmanship, hot stamping craftsmanship, internal high-pressure expansion, laser welding, friction welding, multi-material connection",
  },
];

export function DesignLightweight() {
  return (
    <section id="design-lightweight" className="bg-white py-section">
      <div className="container-fluid">
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow text-blue">Vehicle technology</span>
            <h2 className="mt-4 text-h2">Design Lightweight</h2>
            <GradientLine className="my-6" width={80} />
            <p className="text-[16.5px] leading-relaxed text-ink-soft">
              Lightweight is one of the 5 technical strategies significant for new energy vehicles by
              enabling energy conservation, reducing consumption, enhancing vehicle power, improving
              vehicle quality and heightening transportation efficiency. The product competitiveness
              involves 3 facets: lightweighting materials, lightweight structures and lightweight
              craftsmanship.
            </p>
          </Reveal>
        </div>

        {/* Hero visual */}
        <Reveal className="relative mt-12 aspect-[16/9] overflow-hidden rounded-lg bg-starry-900">
          <Image
            src="/about/design-lightweight.png"
            alt="Farizon lightweight vehicle platform"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </Reveal>

        {/* Three facets */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {FACETS.map((f, i) => (
            <Reveal key={f.n} index={i}>
              <div className="flex h-full flex-col border-t-2 border-mist-200 pt-6">
                <div className="flex items-center justify-between">
                  <img src={f.icon} alt="" aria-hidden="true" className="h-11 w-11" />
                  <span
                    aria-hidden="true"
                    className="h-[3px] w-9 rounded-full"
                    style={{ background: "linear-gradient(90deg,#FFC832,#FF6432)" }}
                  />
                </div>
                <h3 className="mt-5 text-h5 text-starry">{f.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{f.rest}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
