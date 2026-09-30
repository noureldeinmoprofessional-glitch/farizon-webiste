"use client";

import * as React from "react";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { useSiteChrome } from "@/components/providers/SiteChrome";

export function V6ECTA() {
  const { openTransform, openTestDrive } = useSiteChrome();
  return (
    <section aria-label="Let's get started" className="bg-starry-900 py-section text-white">
      <div className="container-fluid">
        <Reveal>
          <span className="eyebrow text-white/85">Farizon V6E</span>
          <h2 className="mt-5 max-w-3xl text-white text-h1">Let’s get started</h2>
          <GradientLine className="mt-7" width={96} />
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button onClick={() => openTestDrive("V6E")} className="btn btn-on-dark">
              Book a test drive <Icon name="arrow-right" size={18} />
            </button>
            <button onClick={openTransform} className="btn btn-ghost-on-dark">
              Request a fleet quote
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
