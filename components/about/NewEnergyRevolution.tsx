import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

const PANELS = [
  {
    n: "01",
    title: "Pure Electric",
    body: "Farizon used the technological accumulation in the electric passenger vehicles manufactured by Geely to fully integrate it in the commercial vehicles and maximize its application in the field all over the world. The EIC System developed by Farizon perfectly suits the commercial vehicle scenarios, forming 2 core technologies: the cloud control and chip integration. The advantages of this system are high efficiency, light-weight, low cost, and warranty.",
    image: "/about/pure-electric.png",
  },
  {
    n: "02",
    title: "Methanol",
    body: "Farizon’s solutions are based on the methanol internal combustion engine and methanol hybrid system to form power configuration. The brand pioneered achieving carbon reduction with the use of synthetic fuels in China. This achievement positioned Farizon as an international leader.",
    image: "/about/methanol.png",
  },
];

export function NewEnergyRevolution() {
  return (
    <section id="new-energy" className="bg-starry-900 py-section text-white">
      <div className="container-fluid">
        {/* Header */}
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow text-white/85">Core technology</span>
            <h2 className="mt-4 text-white text-h2">New Energy Revolution</h2>
            <GradientLine className="my-6" width={80} />
            <p className="text-[16.5px] leading-relaxed text-mist">
              Farizon has established a green mobility pathway centered on two core technology
              directions: Methanol and Pure Electric. This dual-energy strategy forms the foundation
              of the brand’s innovation in next-generation commercial vehicle powertrains,
              purpose-built to meet the evolving demands of sustainable logistics and transportation.
            </p>
          </Reveal>
        </div>

        {/* Alternating panels */}
        <div className="mt-16 space-y-16 lg:mt-20 lg:space-y-24">
          {PANELS.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <div key={p.n} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                <Reveal className={`relative aspect-[3/2] overflow-hidden rounded-lg ${flip ? "lg:order-2" : ""}`}>
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 1024px) 90vw, 45vw"
                    className="object-cover"
                  />
                </Reveal>
                <Reveal index={1} className={flip ? "lg:order-1" : ""}>
                  <span className="text-[13px] font-bold uppercase tracking-[0.18em] text-white/45">
                    {p.n}
                  </span>
                  <h3 className="mt-3 text-white text-h3">{p.title}</h3>
                  <p className="mt-5 max-w-prose text-[15.5px] leading-relaxed text-mist">{p.body}</p>
                  <Link href="/technology" className="link-arrow mt-7 text-white">
                    Explore technology <Icon name="arrow-right" size={16} />
                  </Link>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
