"use client";

import * as React from "react";
import { articles, ARTICLE_CATEGORIES, type ArticleCategory } from "@/lib/articles";
import { ArticleListItem } from "./ArticleListItem";
import { Icon } from "@/components/ui/Icon";

const norm = (s: string) => s.toLowerCase().replace(/\s+/g, " ").trim();
type Filter = "All" | ArticleCategory;

export function ArticlesExplorer() {
  const [filter, setFilter] = React.useState<Filter>("All");
  const [query, setQuery] = React.useState("");

  const q = norm(query);
  const tokens = q.split(" ").filter(Boolean);
  const isDefault = filter === "All" && tokens.length === 0;

  const results = React.useMemo(() => {
    let list = articles;
    if (filter !== "All") list = list.filter((a) => a.category === filter);
    if (tokens.length > 0) {
      list = list.filter((a) => {
        const hay = norm(`${a.title} ${a.excerpt} ${a.category} ${a.tags.join(" ")}`);
        return tokens.every((t) => hay.includes(t));
      });
    }
    // Default view omits the featured article (shown in the Featured section above).
    if (isDefault) list = list.filter((a) => !a.featured);
    return list;
  }, [filter, tokens, isDefault]);

  const clear = () => {
    setFilter("All");
    setQuery("");
  };

  return (
    <section id="discovery" aria-label="Browse articles" className="bg-white pb-section">
      <div className="container-fluid">
        {/* Discovery controls */}
        <div className="flex flex-col gap-6 border-t border-mist-200 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div
            role="tablist"
            aria-label="Filter by category"
            className="flex gap-x-7 overflow-x-auto whitespace-nowrap pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {(["All", ...ARTICLE_CATEGORIES] as Filter[]).map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(f)}
                  className={`relative py-2 text-[13px] font-bold uppercase tracking-[0.1em] transition-colors ${
                    active ? "text-starry" : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {f === "All" ? "All" : f}
                  {active && (
                    <span
                      className="absolute inset-x-0 bottom-0 h-[3px] rounded-full"
                      style={{ background: "linear-gradient(90deg,#FFC832,#FF6432)" }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="relative w-full shrink-0 lg:w-72">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search insights"
              aria-label="Search insights"
              className="h-11 w-full border-b border-mist-300 bg-transparent pr-8 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-muted focus:border-starry"
            />
            <span className="pointer-events-none absolute right-0 top-0 grid h-11 w-6 place-items-center text-ink-muted">
              <Icon name="search" size={18} />
            </span>
          </div>
        </div>

        {/* Result count */}
        <p className="mt-6 text-[12px] font-bold uppercase tracking-[0.16em] text-ink-muted" role="status" aria-live="polite">
          {results.length} {tokens.length > 0 ? (results.length === 1 ? "result" : "results") : results.length === 1 ? "insight" : "insights"}
        </p>

        {/* List */}
        {results.length === 0 ? (
          <div className="mx-auto max-w-md py-20 text-center">
            <h2 className="text-h3 text-starry">No articles found</h2>
            <p className="mt-3 text-[15px] text-ink-soft">Try another category or search term.</p>
            <button onClick={clear} className="link-arrow mx-auto mt-6 text-blue">
              Clear filters <Icon name="arrow-right" size={16} />
            </button>
          </div>
        ) : (
          <div className="mt-8 space-y-12 lg:space-y-16">
            {results.map((a, i) => (
              <ArticleListItem key={a.id} article={a} index={i} flip={i % 2 === 1} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
