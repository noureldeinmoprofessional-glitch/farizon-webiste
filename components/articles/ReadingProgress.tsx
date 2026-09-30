"use client";

import * as React from "react";

/** Subtle Farizon gradient reading-progress bar, pinned under the header. */
export function ReadingProgress({ targetId }: { targetId: string }) {
  const [pct, setPct] = React.useState(0);

  React.useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 0));
      setPct(total > 0 ? (scrolled / total) * 100 : 0);
    };
    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [targetId]);

  return (
    <div
      className="fixed inset-x-0 top-[var(--header-h)] z-40 h-[3px] bg-transparent"
      role="progressbar"
      aria-label="Article reading progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pct)}
    >
      <div
        className="h-full origin-left"
        style={{
          transform: `scaleX(${pct / 100})`,
          background: "linear-gradient(90deg,#FFC832,#FF6432)",
        }}
      />
    </div>
  );
}
