import * as React from "react";
import Link from "next/link";
import { featuredArticle } from "@/lib/articles";
import { ArticleCover } from "./ArticleCover";
import { ArticleMeta } from "./ArticleMeta";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function FeaturedArticle() {
  const a = featuredArticle;
  return (
    <section aria-label="Featured article" className="bg-white pb-section">
      <div className="container-fluid">
        <Reveal>
          <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-ink-muted">
            Featured
          </span>
          <div className="mt-5 h-px w-full bg-mist-200" />
        </Reveal>

        <Reveal index={1}>
          <Link
            href={`/articles/${a.slug}`}
            className="group mt-8 grid items-center gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-14"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
              <div className="absolute inset-0 transition-transform duration-slow ease-standard group-hover:scale-[1.03] motion-reduce:transform-none">
                <ArticleCover
                  article={a}
                  sizes="(max-width: 1024px) 92vw, 58vw"
                  priority
                />
              </div>
            </div>

            <div>
              <ArticleMeta article={a} />
              <h2 className="mt-5 text-h2 transition-transform duration-base ease-standard group-hover:-translate-y-0.5 motion-reduce:transform-none">
                {a.title}
              </h2>
              <p className="mt-5 max-w-prose text-[16px] leading-relaxed text-ink-soft">
                {a.excerpt}
              </p>
              <span className="link-arrow mt-7 text-blue">
                Read article <Icon name="arrow-right" size={16} />
              </span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
