import * as React from "react";
import type { Article } from "@/lib/articles";

export function ArticleMeta({
  article,
  className = "",
  onDark = false,
}: {
  article: Pick<Article, "category" | "date" | "readTime">;
  className?: string;
  onDark?: boolean;
}) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] font-bold uppercase tracking-[0.12em] ${className}`}
    >
      <span className={onDark ? "text-white/80" : "text-blue"}>{article.category}</span>
      <span className={onDark ? "text-white/25" : "text-mist-300"} aria-hidden="true">
        /
      </span>
      <span className={onDark ? "text-white/55" : "text-ink-muted"}>{article.date}</span>
      <span className={onDark ? "text-white/25" : "text-mist-300"} aria-hidden="true">
        /
      </span>
      <span className={onDark ? "text-white/55" : "text-ink-muted"}>{article.readTime}</span>
    </div>
  );
}
