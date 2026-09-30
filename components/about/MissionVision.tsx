import * as React from "react";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";

export function MissionVision() {
  return (
    <section id="mission-vision" className="bg-starry-900 py-section text-white">
      <div className="container-fluid">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-0">
          {/* Mission */}
          <Reveal className="lg:pr-16">
            <span className="text-[13px] font-bold uppercase tracking-[0.18em] text-white/45">
              01 — Mission
            </span>
            <h2 className="mt-5 text-white text-display-l">Mission</h2>
            <GradientLine className="my-7" width={80} />
            <p className="max-w-prose text-[16.5px] leading-relaxed text-mist">
              Farizon’s mission is to redefine commercial transportation through innovative,
              intelligent, and sustainable mobility solutions. By combining advanced technology with
              practical business applications, Farizon aims to reduce emissions, improve operational
              efficiency, and support the evolving needs of modern logistics and transport
              industries.
            </p>
            <p className="mt-4 max-w-prose text-[15.5px] leading-relaxed text-mist/85">
              Focused on real-world performance and long-term value, Farizon develops commercial
              vehicles that enable businesses to operate more efficiently while contributing to a
              cleaner and more sustainable future.
            </p>
          </Reveal>

          {/* Vision */}
          <Reveal index={1} className="lg:border-l lg:border-white/12 lg:pl-16">
            <span className="text-[13px] font-bold uppercase tracking-[0.18em] text-white/45">
              02 — Vision
            </span>
            <h2 className="mt-5 text-white text-display-l">Vision</h2>
            <GradientLine className="my-7" width={80} />
            <p className="max-w-prose text-[16.5px] leading-relaxed text-mist">
              Farizon’s vision is to become a global leader in zero-emission commercial mobility,
              reshaping the way goods and people move through more sustainable and intelligent
              transportation solutions. The brand envisions a future where transport systems are
              fully integrated, efficient, and environmentally responsible, supporting the evolving
              demands of modern cities and businesses.
            </p>
            <p className="mt-4 max-w-prose text-[15.5px] leading-relaxed text-mist/85">
              Through continuous innovation and a strong commitment to sustainable development,
              Farizon aims to set new industry standards and lead the transition toward the future of
              commercial transportation.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
