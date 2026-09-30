import * as React from "react";
import { GradientLine } from "@/components/ui/GradientLine";

/**
 * Branded visual placeholder for assets that are not ready yet.
 * Matches the intended final aspect ratio so real imagery can be dropped in
 * later without changing the surrounding layout. Deliberately looks
 * art-directed — never like an unfinished developer box.
 */
export function VisualPlaceholder({
  label,
  aspectRatio = "16/9",
  tone = "dark",
  className = "",
}: {
  label: string;
  aspectRatio?: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      role="img"
      aria-label={`${label} — visual placeholder`}
      style={{ aspectRatio }}
      className={`relative w-full overflow-hidden rounded-lg ${
        dark
          ? "bg-starry-800 text-white/70 ring-1 ring-inset ring-white/10"
          : "bg-mist-100 text-ink-muted ring-1 ring-inset ring-[rgba(51,51,58,0.10)]"
      } ${className}`}
    >
      {/* Technical diagonal hatch */}
      <span
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: `repeating-linear-gradient(115deg, transparent 0 26px, ${
            dark ? "rgba(255,255,255,0.035)" : "rgba(51,51,58,0.045)"
          } 26px 27px)`,
        }}
      />
      {/* Soft corner glow */}
      <span
        aria-hidden="true"
        className="absolute -right-16 -top-16 h-48 w-48 rounded-full"
        style={{
          background: dark
            ? "radial-gradient(circle,rgba(255,255,255,0.06),transparent 70%)"
            : "radial-gradient(circle,rgba(81,81,106,0.08),transparent 70%)",
        }}
      />
      {/* Corner ticks */}
      {[
        "left-4 top-4 border-l border-t",
        "right-4 top-4 border-r border-t",
        "left-4 bottom-4 border-l border-b",
        "right-4 bottom-4 border-r border-b",
      ].map((pos) => (
        <span
          key={pos}
          aria-hidden="true"
          className={`absolute h-5 w-5 ${pos} ${dark ? "border-white/20" : "border-[rgba(51,51,58,0.18)]"}`}
        />
      ))}

      {/* Center label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <GradientLine width={56} />
        <span
          className={`text-[13px] font-bold uppercase tracking-[0.16em] ${
            dark ? "text-white" : "text-starry"
          }`}
        >
          {label}
        </span>
        <span className="text-[10.5px] font-semibold uppercase tracking-[0.2em] opacity-60">
          Visual placeholder
        </span>
      </div>
    </div>
  );
}
