import * as React from "react";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";

export function ContactHero() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="bg-white pt-[calc(var(--header-h)+clamp(28px,5vh,64px))] pb-12"
    >
      <div className="container-fluid">
        <Reveal>
          <span className="eyebrow text-blue">Contact Us</span>
          <h1 id="contact-heading" className="mt-5 text-display-l">
            Let&rsquo;s talk.
          </h1>
          <GradientLine className="mt-7" width={96} />
          <p className="mt-6 max-w-2xl text-[16.5px] leading-relaxed text-ink-soft">
            Have a question about Farizon vehicles or our solutions? Get in touch with our team and
            we&rsquo;ll be happy to help.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
