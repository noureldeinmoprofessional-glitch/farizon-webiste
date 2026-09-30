import * as React from "react";
import Link from "next/link";
import type { Article } from "@/lib/articles";
import { ArticleCover } from "./ArticleCover";
import { ArticleMeta } from "./ArticleMeta";
import { Icon } from "@/components/ui/Icon";

export function ArticleListItem({
  article,
  index,
  flip = false,
}: {
  article: Article;
  index: number;
  flip?: boolean;
}) {
  return (
    <article className="border-t border-mist-200 pt-10">
      <Link
        href={`/articles/${article.slug}`}
        className="group grid items-center gap-6 md:grid-cols-2 md:gap-12"
      >
        {/* Image */}
        <div className={`relative aspect-[16/10] overflow-hidden rounded-lg ${flip ? "md:order-2" : ""}`}>
          <div className="absolute inset-0 transition-transform duration-slow ease-standard group-hover:scale-[1.03] motion-reduce:transform-none">
            <ArticleCover article={article} sizes="(max-width: 768px) 92vw, 46vw" />
          </div>
        </div>

        {/* Content */}
        <div className={flip ? "md:order-1" : ""}>
          <div className="flex items-start gap-5">
            <span className="mt-1 text-[13px] font-bold text-ink-muted">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <ArticleMeta article={article} />
              <h3 className="mt-3 text-h3 transition-transform duration-base ease-standard group-hover:-translate-y-0.5 motion-reduce:transform-none">
                {article.title}
              </h3>
              <p className="mt-4 max-w-prose text-[15.5px] leading-relaxed text-ink-soft">
                {article.excerpt}
              </p>
              <span className="link-arrow mt-6 text-blue">
                Read article <Icon name="arrow-right" size={16} />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
