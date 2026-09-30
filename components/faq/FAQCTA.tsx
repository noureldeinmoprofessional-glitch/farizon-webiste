"use client";

import * as React from "react";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { useSiteChrome } from "@/components/providers/SiteChrome";

export function FAQCTA() {
  const { openConsultation, openTransform } = useSiteChrome();
  return (
    <section aria-label="Still have questions" className="bg-starry-900 py-section text-white">
      <div className="container-fluid">
        <Reveal>
          <span className="eyebrow text-white/85">Still have questions?</span>
          <h2 className="mt-5 max-w-3xl text-white text-h1">Talk to the Farizon Egypt team.</h2>
          <GradientLine className="mt-7" width={96} />
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button onClick={openConsultation} className="btn btn-on-dark">
              Ask for a consultation
            </button>
            <button onClick={openTransform} className="btn btn-ghost-on-dark">
              Request a fleet quote <Icon name="arrow-right" size={18} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
