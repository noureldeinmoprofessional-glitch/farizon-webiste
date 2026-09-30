import * as React from "react";
import Image from "next/image";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";
import { f1eFeatures } from "@/lib/f1e";

export function F1EFeatures() {
  return (
    <section aria-label="Core features" className="bg-mist-50 py-section">
      <div className="container-fluid">
        <Reveal>
          <span className="eyebrow text-blue">Core features</span>
          <h2 className="mt-5 max-w-2xl text-h2">Engineered for the load.</h2>
        </Reveal>

        <div className="mt-14 space-y-16 lg:space-y-24">
          {f1eFeatures.map((f, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={f.n}>
                <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                  <div className={`relative aspect-[16/10] overflow-hidden rounded-lg ${flip ? "lg:order-2" : ""}`}>
                    <Image
                      src={f.image}
                      alt={f.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className={flip ? "lg:order-1" : ""}>
                    <span className="text-[13px] font-bold text-ink-muted">{f.n}</span>
                    <h3 className="mt-3 text-h3 text-starry">{f.title}</h3>
                    <GradientLine className="my-6" width={64} />
                    <p className="max-w-prose text-[16.5px] leading-relaxed text-ink-soft">{f.body}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
