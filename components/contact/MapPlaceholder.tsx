import * as React from "react";
import { Icon } from "@/components/ui/Icon";

/**
 * Polished map/location placeholder.
 * No real map, coordinates or third-party embed yet — replace the inner content
 * with the real map embed when the client provides it. The outer wrapper
 * (aspect ratio, rounding, framing) can be kept as-is.
 */
export function MapPlaceholder() {
  return (
    <div
      role="img"
      aria-label="Map placeholder — a location map will be added here"
      className="relative h-full min-h-[360px] w-full overflow-hidden rounded-lg border border-mist-200 bg-mist-50"
    >
      {/* Subtle map-like grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(81,81,106,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(81,81,106,0.08) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />
      {/* Abstract "roads" */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(115deg, transparent 47.5%, rgba(81,81,106,0.14) 47.5%, rgba(81,81,106,0.14) 49%, transparent 49%), linear-gradient(200deg, transparent 62%, rgba(81,81,106,0.10) 62%, rgba(81,81,106,0.10) 63.2%, transparent 63.2%)",
        }}
      />

      {/* Centered label + pin */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-white text-blue shadow-[0_10px_30px_rgba(20,20,28,0.12)]">
          <Icon name="map-pin" size={26} />
        </span>
        <span className="mt-5 text-[12px] font-bold uppercase tracking-[0.16em] text-ink-muted">
          Map / Location
        </span>
        <p className="mt-2 text-[14px] text-ink-soft">Location map will be added here.</p>
      </div>
    </div>
  );
}
