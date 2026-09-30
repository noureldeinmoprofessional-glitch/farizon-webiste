/* eslint-disable @next/next/no-img-element */
import * as React from "react";

/**
 * Renders the official Farizon / National Motors logo assets.
 * The logos are never recreated, recolored arbitrarily, stretched or distorted —
 * only the VI-approved standard (black) and reverse (white) files are swapped
 * based on the surrounding surface. Aspect ratio is preserved via height + auto width.
 */

const FARIZON_RATIO = 116.34 / 27.39; // ≈ 4.25
const NM_RATIO = 714.12 / 165.09; // ≈ 4.33

export function FarizonLogo({
  variant = "black",
  height = 26,
  className,
}: {
  variant?: "black" | "white";
  height?: number;
  className?: string;
}) {
  return (
    <img
      src={`/logos/farizon-${variant}.svg`}
      alt="Farizon"
      width={Math.round(height * FARIZON_RATIO)}
      height={height}
      style={{ height, width: "auto" }}
      className={className}
      draggable={false}
    />
  );
}

export function NationalMotorsLogo({
  variant = "black",
  height = 40,
  className,
}: {
  variant?: "black" | "white";
  height?: number;
  className?: string;
}) {
  return (
    <img
      src={`/logos/national-motors-${variant}.svg`}
      alt="National Motors"
      width={Math.round(height * NM_RATIO)}
      height={height}
      style={{ height, width: "auto" }}
      className={className}
      draggable={false}
    />
  );
}
