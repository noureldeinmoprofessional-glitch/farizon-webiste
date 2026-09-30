"use client";

import * as React from "react";
import { useInView, animate } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

interface Parsed {
  prefix: string;
  suffix: string;
  target: number;
  decimals: number;
  hasComma: boolean;
}

/** Split a spec string into its first number plus surrounding text. */
function parseValue(value: string): Parsed | null {
  const match = value.match(/-?\d[\d,]*\.?\d*/);
  if (!match || match.index === undefined) return null;
  const raw = match[0];
  const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
  return {
    prefix: value.slice(0, match.index),
    suffix: value.slice(match.index + raw.length),
    target: parseFloat(raw.replace(/,/g, "")),
    decimals,
    hasComma: raw.includes(","),
  };
}

function formatNumber(n: number, p: Parsed): string {
  if (p.hasComma) {
    return n.toLocaleString("en-US", {
      minimumFractionDigits: p.decimals,
      maximumFractionDigits: p.decimals,
    });
  }
  return n.toFixed(p.decimals);
}

/**
 * Animates the first number found in `value` from 0 up to its target when the
 * element scrolls into view. Any surrounding text (e.g. "CATL ", " kWh", "+")
 * is preserved; values without a number render statically. Respects
 * prefers-reduced-motion.
 */
export function CountUp({
  value,
  className,
  duration = 1.6,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const parsed = React.useMemo(() => parseValue(value), [value]);
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });
  const reduced = useReducedMotion();
  const [display, setDisplay] = React.useState(() =>
    parsed ? parsed.prefix + formatNumber(0, parsed) + parsed.suffix : value
  );

  React.useEffect(() => {
    if (!parsed) return;
    if (reduced) {
      setDisplay(value);
      return;
    }
    if (!inView) return;
    const controls = animate(0, parsed.target, {
      duration,
      ease: [0.2, 0.65, 0.3, 1],
      onUpdate: (v) => setDisplay(parsed.prefix + formatNumber(v, parsed) + parsed.suffix),
      onComplete: () => setDisplay(value),
    });
    return () => controls.stop();
  }, [inView, parsed, reduced, value, duration]);

  if (!parsed) return <span className={className}>{value}</span>;

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
