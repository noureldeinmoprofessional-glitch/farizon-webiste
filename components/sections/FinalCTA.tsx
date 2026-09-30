"use client";

import * as React from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@/components/ui/Icon";
import { GradientLine } from "@/components/ui/GradientLine";
import { useSiteChrome } from "@/components/providers/SiteChrome";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function FinalCTA() {
  const { openConsultation, openTransform } = useSiteChrome();
  const root = React.useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  React.useEffect(() => {
    if (reduced) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Gentle parallax on the image.
      gsap.fromTo(
        ".cta-img",
        { yPercent: -8, scale: 1.08 },
        {
          yPercent: 8,
          scale: 1.12,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: 0.6 },
        }
      );
      // Content reveal.
      gsap.from(".cta-reveal", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 62%" },
      });
    }, root);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={root}
      className="relative flex min-h-[84svh] items-end overflow-hidden bg-starry-900"
      aria-label="Let's get started"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/lets-get-started.jpg"
          alt="Farizon electric commercial vehicles"
          fill
          sizes="100vw"
          className="cta-img object-cover"
          priority={false}
        />
      </div>

      {/* Controlled dark gradient from the bottom upward — image stays visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/5" />

      <div className="container-fluid relative w-full pb-[9vh] pt-[18vh]">
        <div className="max-w-2xl">
          <span className="eyebrow cta-reveal text-white/85">Farizon Egypt</span>
          <h2 className="cta-reveal mt-5 text-white text-display-xl">Let’s get started</h2>
          <GradientLine className="cta-reveal mt-6" width={88} />
          <p className="cta-reveal mt-6 max-w-lg text-[17px] leading-relaxed text-white/85">
            Talk to the Farizon Egypt team about the vehicles, the economics and the transition to an
            electric fleet.
          </p>
          <div className="cta-reveal mt-9 flex flex-col gap-3 sm:flex-row">
            <button onClick={openConsultation} className="btn btn-on-dark">
              Ask for a consultation
            </button>
            <button onClick={openTransform} className="btn btn-ghost-on-dark">
              Ready to transform <Icon name="arrow-right" size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
