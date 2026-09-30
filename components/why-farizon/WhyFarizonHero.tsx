"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GradientLine } from "@/components/ui/GradientLine";
import { Icon } from "@/components/ui/Icon";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function WhyFarizonHero() {
  const reduced = useReducedMotion();
  const rise = (d: number) =>
    reduced
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.3, delay: d } }
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease: [0.2, 0.65, 0.3, 1], delay: d },
        };

  return (
    <section
      aria-label="Why Farizon"
      className="relative flex min-h-[68svh] items-center overflow-hidden bg-starry-900 md:min-h-0 md:aspect-[21/9]"
    >
      <Image
        src="/images/why-farizon-hero.png"
        alt="Farizon electric commercial vehicle lineup"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Darker gradient on the left for text contrast */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,15,22,0.82)_0%,rgba(15,15,22,0.58)_28%,rgba(15,15,22,0.2)_52%,rgba(15,15,22,0)_72%)]" />

      <div className="container-fluid relative w-full pt-[var(--header-h)]">
        <div className="max-w-xl">
          <motion.span {...rise(0)} className="block">
            <span className="eyebrow text-white/85">Why Farizon</span>
          </motion.span>
          <motion.h1 {...rise(0.08)} className="mt-5 text-balance text-white text-h1">
            Everything you need to know about Farizon.
          </motion.h1>
          <motion.div {...rise(0.16)}>
            <GradientLine className="mt-7" width={96} />
          </motion.div>
          <motion.div {...rise(0.24)}>
            <a href="#ecological" className="link-arrow mt-8 text-white">
              Learn more <Icon name="arrow-right" size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
