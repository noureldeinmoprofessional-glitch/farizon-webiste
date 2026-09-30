import * as React from "react";
import Image from "next/image";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";
import { VisualPlaceholder } from "@/components/ui/VisualPlaceholder";

export function EgyptPartnership() {
  return (
    <section id="egypt" className="bg-white py-section">
      <div className="container-fluid">
        <Reveal>
          <span className="eyebrow text-blue">Farizon in Egypt</span>
          <h2 className="mt-4 text-h2">Farizon × National Motors</h2>
        </Reveal>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <Reveal>
            <p className="max-w-prose text-[17px] leading-relaxed text-ink-soft">
              In 2026, National Motors introduced Farizon to Egypt, combining Farizon’s technology
              with National Motors’ automotive experience since 1978 to support smarter, more
              sustainable commercial transportation.
            </p>

            {/* Milestones */}
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-mist-200 pt-8">
              <div className="border-l border-mist-300 pl-5">
                <div className="spec-value text-[44px]">1978</div>
                <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.1em] text-ink-muted">
                  National Motors automotive experience
                </p>
              </div>
              <div className="border-l border-mist-300 pl-5">
                <div className="spec-value text-[44px]">2026</div>
                <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.1em] text-ink-muted">
                  Farizon introduced to Egypt
                </p>
              </div>
            </div>

            {/* Logo lockup */}
            <div className="mt-10 flex items-center gap-6">
              <Image
                src="/logos/farizon-black.svg"
                alt="Farizon"
                width={116}
                height={27}
                className="h-6 w-auto"
              />
              <span aria-hidden="true" className="text-[18px] font-light text-ink-muted">
                ×
              </span>
              <Image
                src="/logos/national-motors-black.svg"
                alt="National Motors"
                width={150}
                height={35}
                className="h-9 w-auto"
              />
            </div>
          </Reveal>

          {/* Partnership visual placeholder */}
          <Reveal index={1}>
            <VisualPlaceholder label="Farizon × National Motors" aspectRatio="4/3" tone="light" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
