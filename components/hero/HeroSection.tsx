"use client";

import * as React from "react";
import { gsap } from "gsap";
import { Icon } from "@/components/ui/Icon";
import { useSiteChrome } from "@/components/providers/SiteChrome";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function HeroSection() {
  const { openTransform, openTestDrive } = useSiteChrome();
  const root = React.useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  React.useEffect(() => {
    if (reduced) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to("[data-hero='eyebrow']", { opacity: 1, y: 0, duration: 0.7, delay: 0.15 })
        .to("[data-hero='line']", { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 }, "-=0.4")
        .to("[data-hero='sub']", { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .to("[data-hero='cta']", { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .to("[data-hero='scroll']", { opacity: 1, duration: 0.6 }, "-=0.3");
      // Subtle ambient drift on the video.
      gsap.to("[data-hero='video']", {
        scale: 1.08,
        duration: 16,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });
    }, root);
    return () => ctx.revert();
  }, [reduced]);

  const initial = reduced ? "" : "opacity-0 translate-y-6";

  return (
    <section
      ref={root}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-starry-900"
      aria-label="Farizon Egypt"
    >
      {/* Full-bleed video */}
      <video
        data-hero="video"
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/posters/hero.jpg"
        preload="auto"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Controlled overlays for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

      <div className="container-fluid relative flex h-full flex-col justify-end pb-[14vh] pt-[var(--header-h)]">
        <div className="max-w-3xl">
          <span
            data-hero="eyebrow"
            className={`eyebrow text-white ${initial}`}
          >
            Farizon Egypt · Brought to you by National Motors
          </span>

          <h1 className="mt-6 text-white text-display-l">
            <span data-hero="line" className={`block ${initial}`}>
              Leading the{" "}
              <span className="text-gradient">Green Commercial</span>
            </span>
            <span data-hero="line" className={`block ${initial}`}>
              <span className="text-gradient">Revolution</span> through Innovation
            </span>
            <span data-hero="line" className={`block ${initial}`}>
              and Intelligent Connectivity
            </span>
          </h1>

          <p
            data-hero="sub"
            className={`mt-6 max-w-xl text-[17px] leading-relaxed text-white/85 ${initial}`}
          >
            Purpose-built electric commercial vehicles for business. Lower costs, zero emissions and
            the range your operations demand.
          </p>

          <div data-hero="cta" className={`mt-9 flex flex-col gap-3 sm:flex-row ${initial}`}>
            <button onClick={openTransform} className="btn btn-on-dark">
              Request a fleet quote
              <Icon name="arrow-right" size={18} />
            </button>
            <button onClick={() => openTestDrive("V6E")} className="btn btn-ghost-on-dark">
              Book a test drive
            </button>
          </div>
        </div>

        {/* Scroll cue */}
        <div
          data-hero="scroll"
          className={`absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/70 md:flex ${
            reduced ? "" : "opacity-0"
          }`}
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">Scroll</span>
          <span className="h-9 w-[1px] bg-gradient-to-b from-white/70 to-transparent" />
        </div>
      </div>
    </section>
  );
}
