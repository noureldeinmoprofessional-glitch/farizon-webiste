import * as React from "react";
import Image from "next/image";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";

/** Green development (PPTX slide 14, exact wording). */
export function GreenDevelopment() {
  return (
    <section id="green-development" className="bg-starry-900 py-section text-white">
      <div className="container-fluid">
        {/* Intro */}
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow text-white/85">Sustainability</span>
            <h2 className="mt-4 text-white text-h2">Green development</h2>
            <GradientLine className="my-6" width={80} />
            <p className="text-[16.5px] leading-relaxed text-mist">
              Farizon is driving industry development, therefore, it is fully aware that it’s
              responsible and is addressing climate change. The brand believes that addressing climate
              opportunities and challenges is crucial for achieving sustainable development. Farizon’s
              mission is "leading the green commercial revolution through innovation and intelligent
              connectivity”, and is committed to be an industry’s benchmark in green transformation
            </p>
          </Reveal>
        </div>

        {/* Green Methanol + Green Electricity */}
        <div className="mt-16 grid items-center gap-8 lg:mt-20 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h3 className="text-white text-h3">Green Methanol + Green Electricity</h3>
            <GradientLine className="my-5" width={64} />
            <p className="max-w-prose text-[15.5px] leading-relaxed text-mist">
              Farizon New Energy Commercial Group is in the background of global acceleration of energy
              transformation
            </p>
          </Reveal>
          <Reveal index={1} className="relative aspect-[16/10] overflow-hidden rounded-lg">
            <Image
              src="/about/green-methanol-electricity.png"
              alt="Green Methanol + Green Electricity"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        {/* Lifecycle Carbon Management */}
        <div className="mt-16 border-t border-white/12 pt-10 lg:mt-20">
          <Reveal>
            <h3 className="text-white text-h3">Lifecycle Carbon Management</h3>
          </Reveal>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 sm:max-w-xl">
            {[
              { v: "2", l: "technology roadmaps" },
              { v: "6", l: "implementation measures" },
            ].map((s, i) => (
              <Reveal key={s.l} index={i} className="border-l border-white/15 pl-6">
                <div className="spec-value text-white text-[64px] leading-none">{s.v}</div>
                <p className="mt-2 text-[13px] font-bold uppercase tracking-[0.14em] text-mist/70">
                  {s.l}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-12 max-w-4xl text-[20px] font-semibold leading-snug text-white sm:text-[24px]">
              Farizon launched the ambitious goal of realizing operational carbon neutrality in 2030
              and lifecycle carbon neutrality in 2045 and announced that by 2025, all its brands of new
              energy clean energy vehicles will account for 100%.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
