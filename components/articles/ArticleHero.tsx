import * as React from "react";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";
import { articles, ARTICLE_CATEGORIES } from "@/lib/articles";

export function ArticleHero() {
  return (
    <section
      aria-label="Farizon Insights"
      className="bg-white pt-[calc(var(--header-h)+clamp(32px,6vh,72px))] pb-14"
    >
      <div className="container-fluid">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-16">
          <Reveal>
            <span className="eyebrow text-blue">Farizon Insights</span>
            <h1 className="mt-5 max-w-2xl text-balance text-display-l">
              Knowledge Built for the Road Ahead
            </h1>
            <GradientLine className="mt-7" width={96} />
            <p className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-ink-soft">
              Explore informative and educational articles covering commercial mobility, electric
              vehicles, fleet operations, sustainability, business transformation and more.
            </p>
          </Reveal>

          {/* Editorial index */}
          <Reveal index={1} className="hidden lg:block">
            <div className="border-t border-mist-200 pt-5">
              <div className="flex items-baseline justify-between">
                <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-ink-muted">
                  In this library
                </span>
                <span className="spec-value text-[28px]">{articles.length}</span>
              </div>
              <ul className="mt-4 space-y-1.5">
                {ARTICLE_CATEGORIES.map((c) => (
                  <li
                    key={c}
                    className="text-[13.5px] font-semibold text-ink-soft"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
