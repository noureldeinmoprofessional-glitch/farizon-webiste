import * as React from "react";
import Image from "next/image";
import { svGallery } from "@/lib/svPassenger";
import { Reveal } from "@/components/ui/Reveal";

function GImg({ src, alt, sizes }: { src: string; alt: string; sizes: string }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-lg lg:aspect-auto lg:h-full">
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
    </div>
  );
}

export function SVGallery() {
  const g = svGallery;
  return (
    <section aria-label="Gallery" className="bg-white py-section">
      <div className="container-fluid">
        <Reveal>
          <h2 className="max-w-2xl text-h2">Gallery</h2>
        </Reveal>

        <div className="mt-12 space-y-4">
          <Reveal className="grid gap-4 lg:grid-cols-[2fr_1fr] lg:h-[58vh]">
            <GImg src={g[0].src} alt={g[0].alt} sizes="(max-width:1024px) 100vw, 66vw" />
            <GImg src={g[1].src} alt={g[1].alt} sizes="(max-width:1024px) 100vw, 33vw" />
          </Reveal>
          <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:h-[42vh]">
            <GImg src={g[2].src} alt={g[2].alt} sizes="(max-width:1024px) 100vw, 33vw" />
            <GImg src={g[3].src} alt={g[3].alt} sizes="(max-width:1024px) 100vw, 33vw" />
            <GImg src={g[4].src} alt={g[4].alt} sizes="(max-width:1024px) 100vw, 33vw" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
