"use client";

import * as React from "react";
import { VideoPlayer } from "@/components/video/VideoPlayer";
import { Icon } from "@/components/ui/Icon";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";
import { useSiteChrome } from "@/components/providers/SiteChrome";

export function BornElectric() {
  const { openTransform } = useSiteChrome();

  return (
    <section className="bg-starry-900 text-white">
      {/* Cinematic statement over film */}
      <div className="relative h-[86svh] min-h-[560px] w-full overflow-hidden">
        <VideoPlayer
          src="/videos/born-electric.mp4"
          poster="/posters/born-electric.jpg"
          sound
          rounded={false}
          objectPosition="center"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-starry-900 via-black/40 to-black/30" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-fluid pb-[12vh]">
            <Reveal>
              <p className="max-w-3xl text-white text-h1">
                It’s not your business slowing down.{" "}
                <span className="text-gradient">It’s your engine.</span>
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Editorial content */}
      <div className="container-fluid py-section-lg">
        <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Reveal>
              <span className="eyebrow text-white/80">Purpose-built</span>
              <h2 className="mt-5 text-white text-display-l">
                Born
                <br />
                Electric
              </h2>
              <GradientLine className="mt-6" width={80} />
            </Reveal>
          </div>

          <div className="max-w-prose space-y-6 text-[16.5px] leading-relaxed text-mist">
            <Reveal index={1}>
              <p>
                Farizon is born electric. Without compromise and without adapting combustion
                platforms, every element of our vehicles is engineered from the ground up to
                maximize electric performance and efficiency.
              </p>
            </Reveal>
            <Reveal index={2}>
              <p>
                Our focus is simple: unlock the full potential of electric mobility for commercial
                transportation.
              </p>
            </Reveal>
            <Reveal index={3}>
              <p>
                Designed with the same ambition and energy that drive modern businesses, Farizon’s
                all-electric vans deliver the range, capability, and capacity your operations demand.
                Combined with best-in-class features and advanced technologies, they are
                purpose-built to support the evolving needs of logistics and urban mobility.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal index={1}>
          <div className="mt-16 flex flex-col gap-8 border-t border-white/10 pt-12 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-1">
              <p className="text-white text-h3">Built for smart business.</p>
              <p className="text-mist text-h4 font-normal">Now is the time to move forward.</p>
              <p className="text-h4">
                <span className="text-gradient font-bold">
                  Now is the time to go electric with Farizon.
                </span>
              </p>
            </div>
            <button onClick={openTransform} className="btn btn-on-dark shrink-0">
              Ready to transform <Icon name="arrow-right" size={18} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
