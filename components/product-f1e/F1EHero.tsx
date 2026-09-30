"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GradientLine } from "@/components/ui/GradientLine";
import { Icon } from "@/components/ui/Icon";
import { useSiteChrome } from "@/components/providers/SiteChrome";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function F1EHero() {
  const { openTransform, openTestDrive } = useSiteChrome();
  const reduced = useReducedMotion();
  const rise = (d: number) =>
    reduced
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.3, delay: d } }
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.85, ease: [0.2, 0.65, 0.3, 1], delay: d },
        };

  return (
    <section
      aria-label="Farizon F1E"
      className="relative flex min-h-[90svh] items-end overflow-hidden bg-starry-900"
    >
      <Image src="/f1e/hero.png" alt="Farizon F1E" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,20,28,0.4)_0%,rgba(20,20,28,0)_30%,rgba(20,20,28,0)_58%,rgba(20,20,28,0.8)_100%)]" />

      <div className="container-fluid relative w-full pb-[10vh] pt-[16vh]">
        <motion.div {...rise(0)}>
          <span className="eyebrow text-white/85">Farizon · Mini Truck</span>
        </motion.div>
        <motion.h1 {...rise(0.1)} className="mt-6 text-white text-display-xl">
          <span className="block">Farizon F1E</span>
          <span className="block">Electric Mini Truck</span>
        </motion.h1>
        <motion.div {...rise(0.2)}>
          <GradientLine className="mt-7" width={104} />
        </motion.div>
        <motion.div {...rise(0.32)} className="mt-9 flex flex-col gap-3 sm:flex-row">
          <button onClick={() => openTestDrive("F1E")} className="btn btn-on-dark">
            Book a test drive <Icon name="arrow-right" size={18} />
          </button>
          <button onClick={openTransform} className="btn btn-ghost-on-dark">
            Request a fleet quote
          </button>
        </motion.div>
      </div>
    </section>
  );
}
