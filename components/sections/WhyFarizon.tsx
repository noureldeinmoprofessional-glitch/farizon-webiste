"use client";

import * as React from "react";
import Link from "next/link";
import { VideoPlayer } from "@/components/video/VideoPlayer";
import { Icon } from "@/components/ui/Icon";
import { GradientLine } from "@/components/ui/GradientLine";

export function WhyFarizon() {
  return (
    <section id="why-farizon" className="bg-white py-section">
      <div className="container-fluid">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Video */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/5] w-full sm:aspect-[16/11] lg:aspect-[4/3]">
              <VideoPlayer src="/videos/why-farizon.mp4" poster="/posters/why-farizon.jpg" sound />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="eyebrow text-blue">Why Farizon</span>
            <h2 className="mt-4 text-h2">Why Farizon?</h2>
            <p className="mt-3 text-[19px] font-semibold text-starry">
              Everything you need to know about Farizon.
            </p>
            <GradientLine className="my-6" width={72} />
            <p className="max-w-prose text-[16.5px] leading-relaxed text-ink-soft">
              Farizon electric fleets combine the dependable performance of traditional petrol and
              diesel vehicles with advanced battery technology that enables longer driving range and
              significantly lower operating costs. Rapid charging capability further reduces downtime,
              ensuring your operations remain efficient and uninterrupted.
            </p>
            <Link href="/why-farizon" className="btn btn-primary mt-8">
              Know more <Icon name="arrow-right" size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
