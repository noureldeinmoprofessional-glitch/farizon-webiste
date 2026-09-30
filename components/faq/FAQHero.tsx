"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { GradientLine } from "@/components/ui/GradientLine";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function FAQHero() {
  const reduced = useReducedMotion();
  const rise = (d: number) =>
    reduced
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.3, delay: d } }
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease: [0.2, 0.65, 0.3, 1], delay: d },
        };

  return (
    <section
      aria-label="Frequently Asked Questions"
      className="flex min-h-[62vh] items-center bg-white pt-[calc(var(--header-h)+clamp(24px,5vh,56px))] pb-16"
    >
      <div className="container-fluid w-full">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          {/* Copy */}
          <div>
            <motion.span {...rise(0)} className="block">
              <span className="eyebrow text-blue">FAQ</span>
            </motion.span>
            <motion.h1 {...rise(0.08)} className="mt-5 text-h1">
              Frequently Asked Questions
            </motion.h1>
            <motion.div {...rise(0.16)}>
              <GradientLine className="mt-6" width={96} />
            </motion.div>
            <motion.p {...rise(0.24)} className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-ink-soft">
              Find practical answers about Farizon electric commercial vehicles, charging, daily
              operation and fleet planning.
            </motion.p>
          </div>

          {/* Branded technical composition */}
          <motion.div
            aria-hidden="true"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0.3 : 0.9, ease: [0.2, 0.65, 0.3, 1], delay: 0.1 }}
            className="relative hidden aspect-[4/3] overflow-hidden rounded-lg bg-mist-50 ring-1 ring-inset ring-[rgba(51,51,58,0.10)] lg:block"
          >
            {/* technical grid */}
            <span
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(rgba(81,81,106,0.05) 1px, transparent 1px) 0 0 / 100% 44px, linear-gradient(90deg, rgba(81,81,106,0.05) 1px, transparent 1px) 0 0 / 44px 100%",
              }}
            />
            {/* corner labels */}
            <span className="absolute left-6 top-6 text-[10.5px] font-bold uppercase tracking-[0.2em] text-ink-muted">
              Farizon Egypt
            </span>
            <span className="absolute right-6 top-6 text-[10.5px] font-bold uppercase tracking-[0.2em] text-ink-muted">
              Reference
            </span>
            {/* ghost FAQ */}
            <span
              className="absolute inset-0 flex items-center justify-center font-bold leading-none text-starry/10"
              style={{ fontSize: "clamp(120px,20vw,240px)", letterSpacing: "-0.04em" }}
            >
              FAQ
            </span>
            {/* gradient line accent */}
            <span
              className="absolute bottom-8 left-6 h-[3px] w-28 rounded-full"
              style={{ background: "linear-gradient(90deg,#FFC832,#FF6432)" }}
            />
            <span className="absolute bottom-6 right-6 text-[10.5px] font-bold uppercase tracking-[0.2em] text-ink-muted">
              Precision · Clarity
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
