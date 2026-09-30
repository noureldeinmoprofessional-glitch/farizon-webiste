import * as React from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

function G({ src, alt, sizes }: { src: string; alt: string; sizes: string }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-lg lg:aspect-auto lg:h-full">
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
    </div>
  );
}

export function V6EGallery() {
  return (
    <section aria-label="Gallery" className="bg-white py-section">
      <div className="container-fluid">
        <Reveal>
          <span className="eyebrow text-blue">Gallery</span>
          <h2 className="mt-5 max-w-2xl text-h2">The V6E, built for the working day.</h2>
        </Reveal>

        <div className="mt-12 space-y-4">
          <Reveal className="grid gap-4 lg:grid-cols-[2fr_1fr] lg:h-[58vh]">
            <G src="/v6e/cargo.png" alt="Farizon V6E cargo" sizes="(max-width:1024px) 100vw, 66vw" />
            <G src="/v6e/business.png" alt="Farizon V6E electric advantage" sizes="(max-width:1024px) 100vw, 33vw" />
          </Reveal>
          <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:h-[42vh]">
            <G src="/v6e/performance.png" alt="Farizon V6E performance" sizes="(max-width:1024px) 100vw, 33vw" />
            <G src="/v6e/durability-1.jpg" alt="Farizon V6E durability" sizes="(max-width:1024px) 100vw, 33vw" />
            <G src="/v6e/modularity.jpg" alt="Farizon V6E modularity" sizes="(max-width:1024px) 100vw, 33vw" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
