import * as React from "react";
import Image from "next/image";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";
import { v6eBusiness } from "@/lib/v6e";

export function V6EBusiness() {
  return (
    <section aria-label={v6eBusiness.heading} className="bg-white py-section">
      <div className="container-fluid">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <span className="eyebrow text-blue">Business advantage</span>
            <h2 className="mt-6 text-h2">{v6eBusiness.heading}</h2>
            <GradientLine className="mt-7" width={80} />
            <div className="mt-7 space-y-5">
              {v6eBusiness.body.map((p) => (
                <p key={p} className="max-w-prose text-[16px] leading-relaxed text-ink-soft">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal index={1} className="relative order-first aspect-[4/3] overflow-hidden rounded-lg lg:order-last">
            <Image
              src="/v6e/business.png"
              alt="Farizon V6E business electric advantage"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
