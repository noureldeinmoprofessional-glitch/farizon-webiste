import * as React from "react";
import Image from "next/image";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { f1eFeature04, f1eSpecs } from "@/lib/f1e";

export function F1ESpecs() {
  return (
    <section aria-label="Specifications" className="bg-starry-900 py-section text-white">
      <div className="container-fluid">
        <Reveal>
          <span className="eyebrow text-white/85">Specifications</span>
        </Reveal>

        {/* Feature 04 + specification visual */}
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <span className="text-[13px] font-bold text-white/45">{f1eFeature04.n}</span>
            <h2 className="mt-3 text-white text-h3">{f1eFeature04.title}</h2>
            <GradientLine className="my-6" width={72} />
            <p className="max-w-prose text-[16.5px] font-light leading-relaxed text-mist">
              {f1eFeature04.body}
            </p>
          </Reveal>
          <Reveal index={1} className="relative aspect-[16/11] overflow-hidden rounded-lg">
            <Image
              src="/f1e/specs.png"
              alt="Farizon F1E"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        {/* Specification rail */}
        <Reveal className="mt-14 grid gap-y-8 border-t border-white/12 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {f1eSpecs.map((s, i) => (
            <div key={s.label} className={`lg:px-8 ${i > 0 ? "lg:border-l lg:border-white/12" : ""}`}>
              <span
                aria-hidden="true"
                className="block h-[3px] w-9 rounded-full"
                style={{ background: "linear-gradient(90deg,#FFC832,#FF6432)" }}
              />
              <p className="mt-5 text-[24px] font-bold leading-tight text-white"><CountUp value={s.value} /></p>
              <p className="mt-2 text-[12px] font-bold uppercase tracking-[0.14em] text-mist/70">
                {s.label}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
