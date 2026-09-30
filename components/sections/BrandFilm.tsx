"use client";

import * as React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { VideoPlayer } from "@/components/video/VideoPlayer";
import { GradientLine } from "@/components/ui/GradientLine";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function BrandFilm() {
  const root = React.useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  React.useEffect(() => {
    if (reduced) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=140%",
          scrub: 0.6,
          pin: ".bf-pin",
          anticipatePin: 1,
        },
      });

      // Media expands from a right-hand editorial panel to full-bleed.
      tl.to(".bf-media", {
        top: "0%",
        left: "0%",
        right: "0%",
        bottom: "0%",
        borderRadius: 0,
        ease: "power2.inOut",
      })
        .to(".bf-media-inner", { borderRadius: 0, ease: "power2.inOut" }, "<")
        .to(".bf-text", { opacity: 0, y: -30, ease: "power2.in" }, "<0.1")
        .to(".bf-caption", { opacity: 1, y: 0, ease: "power2.out" }, ">-0.2")
        .to(".bf-scrim", { opacity: 1, ease: "none" }, "<");
    }, root);
    return () => ctx.revert();
  }, [reduced]);

  if (reduced) {
    // Stacked editorial fallback — no pinning / scrub.
    return (
      <section className="bg-white py-section">
        <div className="container-fluid">
          <span className="eyebrow text-blue">The Farizon film</span>
          <h2 className="mt-4 max-w-2xl text-h2">
            Founded in 2014 — Geely’s new-energy commercial vehicle brand.
          </h2>
          <p className="mt-4 max-w-prose text-[17px] leading-relaxed text-ink-soft">
            Farizon develops intelligent and sustainable mobility solutions for modern logistics and
            transportation.
          </p>
          <div className="mt-10 aspect-video w-full">
            <VideoPlayer src="/videos/brand-film.mp4" poster="/posters/brand-film.jpg" sound />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={root} className="relative bg-white">
      <div className="bf-pin relative h-[100svh] min-h-[620px] w-full overflow-hidden">
        {/* Editorial text layer */}
        <div className="bf-text container-fluid relative z-10 flex h-full flex-col justify-center">
          <div className="max-w-xl">
            <span className="eyebrow text-blue">The Farizon film</span>
            <h2 className="mt-5 text-h1">
              Founded in 2014 — Geely’s new-energy commercial vehicle brand.
            </h2>
            <GradientLine className="my-6" width={72} />
            <p className="max-w-prose text-[17px] leading-relaxed text-ink-soft">
              Farizon develops intelligent and sustainable mobility solutions for modern logistics
              and transportation. Press play and keep scrolling.
            </p>
          </div>
        </div>

        {/* Media layer — begins as a right panel, expands to full-bleed */}
        <div
          className="bf-media absolute z-20 overflow-hidden"
          style={{ top: "16%", left: "48%", right: "3%", bottom: "18%", borderRadius: 12 }}
        >
          <div className="bf-media-inner relative h-full w-full overflow-hidden" style={{ borderRadius: 12 }}>
            <VideoPlayer
              src="/videos/brand-film.mp4"
              poster="/posters/brand-film.jpg"
              sound
              rounded={false}
            />
            {/* Scrim appears as the video fills the frame */}
            <div className="bf-scrim pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10 opacity-0" />
            <div className="bf-caption pointer-events-none absolute inset-x-0 bottom-0 z-10 translate-y-4 p-8 opacity-0 sm:p-14">
              <div className="container-fluid !px-0">
                <span className="eyebrow text-white/80">Farizon</span>
                <p className="mt-3 max-w-xl text-white text-h2">Built for smart business.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
