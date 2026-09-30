"use client";

import * as React from "react";
import { faqCategories, faqIndex } from "@/lib/faq";
import { Icon } from "@/components/ui/Icon";
import { useSiteChrome } from "@/components/providers/SiteChrome";
import { useReducedMotion } from "@/lib/useReducedMotion";

const norm = (s: string) => s.toLowerCase().replace(/\s+/g, " ").trim();

/** Highlight query tokens inside a plain string. */
function Highlight({ text, query }: { text: string; query: string }) {
  const q = norm(query);
  if (!q) return <>{text}</>;
  const tokens = q.split(" ").filter((t) => t.length > 1);
  if (tokens.length === 0) return <>{text}</>;
  const re = new RegExp(`(${tokens.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
  const parts = text.split(re);
  return (
    <>
      {parts.map((p, i) =>
        re.test(p) ? (
          <mark key={i} className="bg-transparent font-bold text-blue">
            {p}
          </mark>
        ) : (
          <React.Fragment key={i}>{p}</React.Fragment>
        )
      )}
    </>
  );
}

const SUGGESTIONS = ["charging", "range", "fleet", "test drive"];

export function FAQExplorer() {
  const { openConsultation } = useSiteChrome();
  const reduced = useReducedMotion();
  const [query, setQuery] = React.useState("");
  const [open, setOpen] = React.useState<Set<string>>(new Set());
  const [activeCat, setActiveCat] = React.useState(faqCategories[0].id);
  const sectionRefs = React.useRef<Record<string, HTMLElement | null>>({});
  const searchRef = React.useRef<HTMLInputElement>(null);

  const q = norm(query);
  const tokens = q.split(" ").filter(Boolean);

  const matches = React.useCallback(
    (haystack: string) => {
      if (tokens.length === 0) return true;
      const h = norm(haystack);
      return tokens.every((t) => h.includes(t));
    },
    [tokens]
  );

  // Visible items per category given the query.
  const visible = React.useMemo(() => {
    return faqCategories.map((c) => ({
      ...c,
      items: c.items.filter((it) => matches(`${it.question} ${it.answer} ${c.title}`)),
    }));
  }, [matches]);

  const totalMatches = visible.reduce((n, c) => n + c.items.length, 0);
  const searching = q.length > 0;

  const scrollToId = React.useCallback(
    (el: HTMLElement | null) => {
      if (!el) return;
      const headerH =
        parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 72;
      const offset = headerH + 68;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: reduced ? "auto" : "smooth" });
    },
    [reduced]
  );

  const openAndScroll = React.useCallback(
    (id: string) => {
      setQuery("");
      setOpen((prev) => new Set(prev).add(id));
      // wait for the (possibly re-rendered) item to exist
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => scrollToId(document.getElementById(`faq-${id}`)));
      });
    },
    [scrollToId]
  );

  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  // Scroll-spy for the category nav.
  React.useEffect(() => {
    if (searching) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setActiveCat((vis[0].target as HTMLElement).dataset.cat!);
      },
      { rootMargin: "-140px 0px -55% 0px", threshold: 0 }
    );
    faqCategories.forEach((c) => {
      const el = sectionRefs.current[c.id];
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [searching]);

  // Deep links: /faq#<categoryId> or /faq#<itemId>
  React.useEffect(() => {
    const hash = decodeURIComponent(window.location.hash.replace(/^#/, ""));
    if (!hash) return;
    if (faqCategories.some((c) => c.id === hash)) {
      requestAnimationFrame(() => scrollToId(sectionRefs.current[hash]));
    } else if (faqIndex.some((it) => it.id === hash)) {
      openAndScroll(hash);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Sticky category navigation */}
      <nav
        aria-label="FAQ categories"
        className="sticky top-[var(--header-h)] z-30 border-y border-mist-200 bg-white/95 backdrop-blur-md"
      >
        <div className="container-fluid">
          <ul className="-mb-px flex gap-x-8 overflow-x-auto whitespace-nowrap py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {faqCategories.map((c) => {
              const disabled = searching && visible.find((v) => v.id === c.id)!.items.length === 0;
              const active = !searching && activeCat === c.id;
              return (
                <li key={c.id}>
                  <button
                    onClick={() => {
                      setQuery("");
                      requestAnimationFrame(() => scrollToId(sectionRefs.current[c.id]));
                    }}
                    aria-current={active ? "true" : undefined}
                    disabled={disabled}
                    className={`relative py-4 text-[13px] font-bold uppercase tracking-[0.1em] transition-colors ${
                      disabled
                        ? "cursor-default text-ink-muted/40"
                        : active
                          ? "text-starry"
                          : "text-ink-muted hover:text-ink"
                    }`}
                  >
                    {c.title}
                    {active && (
                      <span
                        className="absolute inset-x-0 bottom-0 h-[3px] rounded-full"
                        style={{ background: "linear-gradient(90deg,#FFC832,#FF6432)" }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Search */}
      <section aria-label="Search questions" className="bg-white pt-14">
        <div className="container-fluid">
          <label htmlFor="faq-search" className="eyebrow text-blue">
            What are you looking for?
          </label>
          <div className="relative mt-5 max-w-3xl">
            <input
              id="faq-search"
              ref={searchRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions..."
              className="h-14 w-full border-b-2 border-mist-300 bg-transparent pr-24 text-[18px] text-ink outline-none transition-colors placeholder:text-ink-muted focus:border-starry"
            />
            <div className="absolute right-0 top-0 flex h-14 items-center gap-1">
              {query && (
                <button
                  onClick={() => {
                    setQuery("");
                    searchRef.current?.focus();
                  }}
                  aria-label="Clear search"
                  className="grid h-9 w-9 place-items-center rounded-full text-ink-muted transition-colors hover:bg-mist-100 hover:text-ink"
                >
                  <Icon name="close" size={18} />
                </button>
              )}
              <span className="grid h-9 w-9 place-items-center text-starry" aria-hidden="true">
                <Icon name="search" size={20} />
              </span>
            </div>
          </div>
          {searching && (
            <p className="mt-3 text-[13px] text-ink-muted" role="status" aria-live="polite">
              {totalMatches} {totalMatches === 1 ? "result" : "results"}
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <section aria-label="Questions and answers" className="bg-white py-14">
        <div className="container-fluid">
          {searching && totalMatches === 0 ? (
            <EmptyState onSuggest={setQuery} onConsult={openConsultation} />
          ) : (
            <div className="space-y-16 lg:space-y-24">
              {visible.map((cat) =>
                cat.items.length === 0 ? null : (
                  <section
                    key={cat.id}
                    id={cat.id}
                    data-cat={cat.id}
                    ref={(el) => {
                      sectionRefs.current[cat.id] = el;
                    }}
                    aria-labelledby={`cat-${cat.id}`}
                    className="scroll-mt-40"
                  >
                    <div className="grid gap-x-8 gap-y-6 lg:grid-cols-12">
                      <div className="lg:col-span-3">
                        <h2
                          id={`cat-${cat.id}`}
                          className="text-[13px] font-bold uppercase tracking-[0.16em] text-starry"
                        >
                          {cat.title}
                        </h2>
                        <span className="mt-2 block text-[12px] text-ink-muted">
                          {cat.items.length} {cat.items.length === 1 ? "question" : "questions"}
                        </span>
                      </div>

                      <ul className="lg:col-span-8 lg:col-start-4">
                        {cat.items.map((it, i) => {
                          const isOpen = open.has(it.id);
                          return (
                            <li
                              key={it.id}
                              id={`faq-${it.id}`}
                              className="border-t border-mist-200 scroll-mt-40 last:border-b"
                            >
                              <h3>
                                <button
                                  onClick={() => toggle(it.id)}
                                  aria-expanded={isOpen}
                                  aria-controls={`panel-${it.id}`}
                                  id={`btn-${it.id}`}
                                  className="group flex w-full items-start gap-4 py-6 text-left sm:gap-6"
                                >
                                  <span className="mt-1 w-7 shrink-0 text-[13px] font-bold text-ink-muted">
                                    {String(i + 1).padStart(2, "0")}
                                  </span>
                                  <span className="flex-1 text-[17px] font-bold leading-snug text-starry sm:text-[19px]">
                                    <Highlight text={it.question} query={query} />
                                  </span>
                                  <span
                                    aria-hidden="true"
                                    className={`mt-1 shrink-0 text-starry transition-transform duration-300 ${
                                      isOpen ? "rotate-45" : ""
                                    } motion-reduce:transition-none`}
                                  >
                                    <Icon name="plus" size={22} />
                                  </span>
                                </button>
                              </h3>

                              <div
                                id={`panel-${it.id}`}
                                role="region"
                                aria-labelledby={`btn-${it.id}`}
                                aria-hidden={!isOpen}
                                ref={(el) => {
                                  if (el) (el as HTMLElement & { inert: boolean }).inert = !isOpen;
                                }}
                                className="grid motion-reduce:!transition-none"
                                style={{
                                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                                  transition: reduced
                                    ? "none"
                                    : "grid-template-rows 300ms cubic-bezier(0.2,0.65,0.3,1)",
                                }}
                              >
                                <div className="overflow-hidden">
                                  <div className="pb-8 sm:pl-[52px]">
                                    <p className="max-w-2xl text-[15.5px] font-light leading-[1.7] text-ink-soft">
                                      {it.answer}
                                    </p>
                                    {it.related && it.related.length > 0 && (
                                      <RelatedQuestions ids={it.related} onOpen={openAndScroll} />
                                    )}
                                  </div>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </section>
                )
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function RelatedQuestions({ ids, onOpen }: { ids: string[]; onOpen: (id: string) => void }) {
  const items = ids
    .map((id) => faqIndex.find((it) => it.id === id))
    .filter(Boolean) as (typeof faqIndex)[number][];
  if (items.length === 0) return null;
  return (
    <div className="mt-7 border-t border-mist-200 pt-5">
      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink-muted">
        Related questions
      </span>
      <ul className="mt-3 space-y-2">
        {items.map((it) => (
          <li key={it.id}>
            <button onClick={() => onOpen(it.id)} className="link-arrow text-left text-blue">
              {it.question} <Icon name="arrow-right" size={15} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function EmptyState({
  onSuggest,
  onConsult,
}: {
  onSuggest: (q: string) => void;
  onConsult: () => void;
}) {
  return (
    <div className="mx-auto max-w-xl py-8 text-center">
      <h2 className="text-h3 text-starry">No matching questions</h2>
      <p className="mt-4 text-[14px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
        Try searching for
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-3">
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            onClick={() => onSuggest(s)}
            className="border border-mist-300 px-4 py-2 text-[14px] font-semibold text-ink-soft transition-colors hover:border-starry hover:text-starry"
          >
            {s}
          </button>
        ))}
      </div>
      <div className="mt-10 border-t border-mist-200 pt-8">
        <p className="text-[15px] text-ink-soft">Can’t find what you’re looking for?</p>
        <button onClick={onConsult} className="link-arrow mx-auto mt-3 text-blue">
          Ask for a consultation <Icon name="arrow-right" size={16} />
        </button>
      </div>
    </div>
  );
}
