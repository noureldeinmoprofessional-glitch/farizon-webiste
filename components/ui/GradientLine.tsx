import * as React from "react";

/**
 * Farizon online auxiliary graphic — the mandatory yellow→orange gradient line.
 * A restrained, directional accent derived from the logo's line language.
 */
export function GradientLine({
  className = "",
  width = 56,
  height = 3,
  vertical = false,
}: {
  className?: string;
  width?: number;
  height?: number;
  vertical?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={`block rounded-full ${className}`}
      style={{
        width: vertical ? height : width,
        height: vertical ? width : height,
        background: vertical
          ? "linear-gradient(180deg, #FFC832 0%, #FF6432 100%)"
          : "var(--gradient-brand)",
      }}
    />
  );
}
