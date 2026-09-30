"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GradientLine } from "@/components/ui/GradientLine";
import { Icon } from "@/components/ui/Icon";
import { useSiteChrome } from "@/components/providers/SiteChrome";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function SVHero() {
  const { openTransform } = useSiteChrome();
  const reduced = useReducedMotion();
  const rise = (d: number) =>
    reduced
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.3, delay: d } }
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 1], delay: d },
        };

  return (
    <section
      aria-label="Farizon SV Passenger"
      className="relative flex min-h-[88svh] items-end overflow-hidden bg-starry-900"
    >
      <Image
        src="/sv-passenger/hero.png"
        alt="Farizon SV Passenger"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,20,28,0.45)_0%,rgba(20,20,28,0)_28%,rgba(20,20,28,0.15)_60%,rgba(20,20,28,0.82)_100%)]" />

      <div className="container-fluid relative w-full pb-[9vh] pt-[16vh]">
        <motion.div {...rise(0)}>
          <span className="eyebrow text-white/85">Farizon · Passenger</span>
        </motion.div>
        <motion.h1 {...rise(0.08)} className="mt-5 text-white text-display-xl">
          SV Passenger
        </motion.h1>
        <motion.div {...rise(0.16)}>
          <GradientLine className="mt-6" width={100} />
        </motion.div>
        <motion.div {...rise(0.28)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button onClick={openTransform} className="btn btn-on-dark">
            Request a fleet quote <Icon name="arrow-right" size={18} />
          </button>
          <a href="#experience" className="btn btn-ghost-on-dark">
            Explore the SV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
