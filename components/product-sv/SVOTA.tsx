import * as React from "react";
import Image from "next/image";
import { svOtaAreas } from "@/lib/svPassenger";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";

export function SVOTA() {
  return (
    <section aria-label="OTA upgrade" className="bg-mist-50 py-section">
      <div className="container-fluid">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal className="relative aspect-[3/2] overflow-hidden rounded-lg">
            <Image
              src="/sv-passenger/ota.png"
              alt="Farizon SV Passenger over-the-air upgrade"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>

          <Reveal index={1}>
            <h2 className="text-h2">OTA Upgrade</h2>
            <GradientLine className="mt-6" width={72} />
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-ink-soft">
              The (Over-the-Air) upgrade is a wireless method of delivering software updates, bug
              fixes, and new features to connected devices, eliminating the need for physical
              connections. Farizon utilizes the OTA technology to continuously enhance the software,
              the intelligent driving features, and infotainment systems of its commercial vehicles.
              The technology allows the vehicles to evolve after purchase, improving its safety and
              performance along with user experience without the need of a physical visit.
            </p>
            <p className="mt-4 text-[13px] font-bold uppercase tracking-[0.14em] text-ink-muted">
              Upgradable features:
            </p>

            {/* Continuous-improvement list */}
            <ol className="mt-8 space-y-0">
              {svOtaAreas.map((a, i) => (
                <li key={a} className="relative flex items-center gap-4 pb-6 pl-1 last:pb-0">
                  {i < svOtaAreas.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-[6px] top-4 h-full w-[2px]"
                      style={{ background: "linear-gradient(180deg,#FFC832,#FF6432)" }}
                    />
                  )}
                  <span
                    aria-hidden="true"
                    className="relative z-10 h-3 w-3 shrink-0 rounded-full"
                    style={{ background: "linear-gradient(135deg,#FFC832,#FF6432)" }}
                  />
                  <span className="text-[16px] font-semibold text-starry">{a}</span>
                </li>
              ))}
            </ol>

            <div className="mt-9 flex flex-wrap gap-3">
              {["Reduced downtime", "Long-Term value"].map((b) => (
                <span
                  key={b}
                  className="border border-mist-300 px-4 py-2 text-[13px] font-bold uppercase tracking-[0.08em] text-starry"
                >
                  {b}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
