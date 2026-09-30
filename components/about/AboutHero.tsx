import * as React from "react";
import Image from "next/image";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";

/**
 * About hero — brand/company story. Copy (mission statement) is verbatim from
 * the Farizon website content (V02), slide 9.
 */
export function AboutHero() {
  return (
    <section aria-label="About Farizon" className="bg-starry-900 pt-[var(--header-h)]">
      <div className="relative h-[clamp(520px,80vh,860px)] w-full overflow-hidden">
        <Image
          src="/images/about-hero.png"
          alt="The Farizon electric commercial vehicle range outside a modern facility"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Cinematic bottom-up veil for the lower-anchored copy */}
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(16,16,24,0.92)_0%,rgba(16,16,24,0.6)_30%,rgba(16,16,24,0.18)_56%,rgba(16,16,24,0)_82%)]" />
        {/* Bottom-left pool for guaranteed headline contrast */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_95%_at_0%_100%,rgba(16,16,24,0.7)_0%,transparent_58%)]" />

        <div className="container-fluid absolute inset-x-0 bottom-0">
          <div className="max-w-3xl pb-[clamp(40px,7vh,88px)]">
            <Reveal as="span" className="block">
              <span className="eyebrow text-white/85">About Farizon</span>
            </Reveal>
            <Reveal index={1}>
              <h1 className="mt-5 max-w-2xl text-balance text-white text-h1">
                Redefining commercial transport.
              </h1>
            </Reveal>
            <Reveal index={2}>
              <GradientLine className="mt-6" width={96} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
