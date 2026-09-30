import * as React from "react";
import Image from "next/image";
import type { Article } from "@/lib/articles";

/**
 * Article cover. Renders the real image when `coverImage` is set; otherwise a
 * branded, intentional editorial placeholder. Always fills a relative parent
 * that controls the aspect ratio, so real assets drop in with no layout change.
 */
export function ArticleCover({
  article,
  sizes,
  priority = false,
  className = "",
}: {
  article: Pick<Article, "coverImage" | "alt" | "category">;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  if (article.coverImage) {
    return (
      <Image
        src={article.coverImage}
        alt={article.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${className}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={article.alt}
      className={`absolute inset-0 overflow-hidden bg-starry-800 ${className}`}
    >
      {/* technical grid */}
      <span
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px) 0 0 / 100% 46px, linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px) 0 0 / 46px 100%",
        }}
      />
      <span
        aria-hidden="true"
        className="absolute -right-20 -top-20 h-56 w-56 rounded-full"
        style={{ background: "radial-gradient(circle,rgba(255,255,255,0.07),transparent 70%)" }}
      />
      <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/55">
          {article.category}
        </span>
        <div>
          <span
            className="block h-[3px] w-16 rounded-full"
            style={{ background: "linear-gradient(90deg,#FFC832,#FF6432)" }}
          />
          <span className="mt-3 block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
            Editorial visual
          </span>
        </div>
      </div>
    </div>
  );
}
