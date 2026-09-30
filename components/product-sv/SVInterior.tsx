import * as React from "react";
import Image from "next/image";
import { svInterior } from "@/lib/svPassenger";
import { Reveal } from "@/components/ui/Reveal";

function Figure({ item, priority = false }: { item: (typeof svInterior)[number]; priority?: boolean }) {
  return (
    <figure>
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={item.image}
          alt={item.body}
          fill
          sizes="(max-width: 768px) 100vw, 46vw"
          priority={priority}
          className="object-cover"
        />
      </div>
      <figcaption className="mt-5">
        <h3 className="text-h5 text-starry">{item.label}</h3>
        <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-ink-soft">{item.body}</p>
      </figcaption>
    </figure>
  );
}

export function SVInterior() {
  const [a, b, c, d] = svInterior;
  return (
    <section aria-label="Interior features" className="bg-white py-section">
      <div className="container-fluid">
        <Reveal>
          <h2 className="max-w-2xl text-h2">Features</h2>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-6">
          <div className="flex flex-col gap-14">
            <Reveal>
              <Figure item={a} priority />
            </Reveal>
            <Reveal>
              <Figure item={c} />
            </Reveal>
          </div>
          <div className="flex flex-col gap-14 md:mt-24">
            <Reveal index={1}>
              <Figure item={b} />
            </Reveal>
            <Reveal index={1}>
              <Figure item={d} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
