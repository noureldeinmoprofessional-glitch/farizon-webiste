"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { searchIndex } from "@/lib/nav";
import { Icon } from "@/components/ui/Icon";

const SUGGESTED = ["V6E", "Fleet Economics", "Test drive", "Charging", "After-Sales"];

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (open) {
      const t = window.setTimeout(() => inputRef.current?.focus(), 60);
      document.body.classList.add("no-scroll");
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
      document.addEventListener("keydown", onKey);
      return () => {
        window.clearTimeout(t);
        document.removeEventListener("keydown", onKey);
        document.body.classList.remove("no-scroll");
      };
    } else {
      setQ("");
    }
  }, [open, onClose]);

  const results = React.useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return [];
    return searchIndex
      .filter(
        (r) =>
          r.title.toLowerCase().includes(term) ||
          r.category.toLowerCase().includes(term) ||
          r.keywords.toLowerCase().includes(term)
      )
      .slice(0, 7);
  }, [q]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24 }}
          role="dialog"
          aria-modal="true"
          aria-label="Search"
        >
          <div className="absolute inset-0 bg-starry-900/60 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -16, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.65, 0.3, 1] }}
            className="relative mx-auto mt-[12vh] w-[min(720px,92vw)] overflow-hidden rounded-lg bg-white shadow-l"
          >
            <div className="flex items-center gap-4 border-b border-mist-200 px-6">
              <Icon name="search" size={22} className="text-ink-muted" />
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search vehicles, technology, fleet tools…"
                aria-label="Search the site"
                className="h-16 flex-1 bg-transparent text-[18px] text-ink outline-none placeholder:text-ink-muted/60"
              />
              <button
                onClick={onClose}
                aria-label="Close search"
                className="grid h-9 w-9 place-items-center rounded-sm text-ink-muted transition-colors hover:bg-mist-100"
              >
                <Icon name="close" size={20} />
              </button>
            </div>

            <div className="max-h-[52vh] overflow-y-auto p-3">
              {!q.trim() && (
                <div className="px-3 py-4">
                  <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.16em] text-ink-muted">
                    Suggested
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTED.map((s) => (
                      <button
                        key={s}
                        onClick={() => setQ(s)}
                        className="rounded-full border border-mist-200 px-4 py-2 text-[13px] font-semibold text-ink-soft transition-colors hover:border-blue hover:text-blue"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {q.trim() && results.length === 0 && (
                <div className="px-4 py-10 text-center">
                  <p className="text-[15px] font-semibold text-starry">No results for “{q}”</p>
                  <p className="mt-1 text-[13.5px] text-ink-muted">
                    Try a model name, a technology, or a fleet tool.
                  </p>
                </div>
              )}

              {results.map((r) => (
                <Link
                  key={r.href + r.title}
                  href={r.href}
                  onClick={onClose}
                  className="group flex items-center justify-between gap-4 rounded-md px-4 py-3 transition-colors hover:bg-mist-50"
                >
                  <span>
                    <span className="block text-[15.5px] font-semibold text-starry group-hover:text-blue">
                      {r.title}
                    </span>
                    <span className="block text-[12.5px] text-ink-muted">{r.category}</span>
                  </span>
                  <Icon
                    name="arrow-up-right"
                    size={18}
                    className="text-ink-muted transition-colors group-hover:text-blue"
                  />
                </Link>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-mist-200 px-6 py-3 text-[12px] text-ink-muted">
              <span>Press Esc to close</span>
              <span>Demo search · homepage content</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
