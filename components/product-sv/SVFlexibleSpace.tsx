import * as React from "react";
import Image from "next/image";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";

export function SVFlexibleSpace() {
  return (
    <section aria-label="Flexible space" className="bg-mist-50 py-section">
      <div className="container-fluid">
        <Reveal>
          <h2 className="max-w-2xl text-h2">Flexible space</h2>
        </Reveal>

        {/* Luxury cabin — hero of the section */}
        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <Reveal className="order-2 lg:order-1">
            <h3 className="text-h3 text-starry">Luxury Cabin</h3>
            <GradientLine className="my-5" width={64} />
            <p className="max-w-md text-[16.5px] leading-relaxed text-ink-soft">
              Spacious and high-quality interior, with 4-way adjustable seats offering ventilation and
              heating.
            </p>
          </Reveal>
          <Reveal index={1} className="relative order-1 aspect-[3/2] overflow-hidden rounded-lg lg:order-2">
            <Image
              src="/sv-passenger/luxury-cabin.jpg"
              alt="Farizon SV Passenger luxury cabin"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        {/* Flexible layout + smart storage */}
        <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-6 lg:mt-14">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/sv-passenger/flexible-layout.jpg"
                alt="Farizon SV Passenger flexible layout"
                fill
                sizes="(max-width: 768px) 100vw, 46vw"
                className="object-cover"
              />
            </div>
            <h3 className="mt-6 text-h4 text-starry">Flexible Layout</h3>
            <p className="mt-3 max-w-sm text-[15.5px] leading-relaxed text-ink-soft">
              The seating arrangement can be easily customized.
            </p>
          </Reveal>

          <Reveal index={1} className="md:mt-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/sv-passenger/smart-storage.jpg"
                alt="Farizon SV Passenger smart storage"
                fill
                sizes="(max-width: 768px) 100vw, 46vw"
                className="object-cover"
              />
            </div>
            <h3 className="mt-6 text-h4 text-starry">Smart Storage</h3>
            <p className="mt-3 max-w-sm text-[15.5px] leading-relaxed text-ink-soft">
              The Farizon SuperVAN ensures proper luggage storage.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
