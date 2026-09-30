"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { primaryNav } from "@/lib/nav";
import { Icon } from "@/components/ui/Icon";
import { FarizonLogo } from "@/components/ui/Logo";

export function MobileMenu({
  open,
  onClose,
  onOpenSearch,
  onQuote,
}: {
  open: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
  onQuote: () => void;
}) {
  const [expanded, setExpanded] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
      document.addEventListener("keydown", onKey);
      return () => {
        document.removeEventListener("keydown", onKey);
        document.body.classList.remove("no-scroll");
      };
    }
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[95] flex flex-col bg-white lg:hidden"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.28, ease: [0.2, 0.65, 0.3, 1] }}
        >
          <div className="flex h-[var(--header-h)] items-center justify-between border-b border-mist-200 px-5">
            <Link href="/" onClick={onClose} aria-label="Farizon home">
              <FarizonLogo variant="black" height={24} />
            </Link>
            <div className="flex items-center gap-1">
              <button
                onClick={() => {
                  onClose();
                  onOpenSearch();
                }}
                aria-label="Search"
                className="grid h-11 w-11 place-items-center rounded-sm text-ink"
              >
                <Icon name="search" size={22} />
              </button>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-sm text-ink"
              >
                <Icon name="close" size={24} />
              </button>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 py-4">
            <ul className="divide-y divide-mist-200">
              {primaryNav.map((item) => {
                const hasChildren = !!item.columns;
                const isOpen = expanded === item.label;
                return (
                  <li key={item.label} className="py-1">
                    {hasChildren ? (
                      <>
                        <button
                          onClick={() => setExpanded(isOpen ? null : item.label)}
                          aria-expanded={isOpen}
                          className="flex w-full items-center justify-between py-4 text-left"
                        >
                          <span className="text-[20px] font-bold text-starry">{item.label}</span>
                          <span
                            className={`text-ink-muted transition-transform duration-base ${
                              isOpen ? "rotate-45" : ""
                            }`}
                          >
                            <Icon name="plus" size={22} />
                          </span>
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.26, ease: [0.2, 0.65, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="pb-4 pl-1">
                                {item.columns!.map((col) => (
                                  <div key={col.title} className="mb-4">
                                    <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-ink-muted">
                                      {col.title}
                                    </p>
                                    {col.links.map((link) => (
                                      <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={onClose}
                                        className="flex items-center justify-between py-2.5 text-[16px] font-semibold text-ink-soft"
                                      >
                                        {link.label}
                                        <Icon name="chevron-right" size={16} className="text-mist-300" />
                                      </Link>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="flex items-center justify-between py-4 text-[20px] font-bold text-starry"
                      >
                        {item.label}
                        <Icon name="chevron-right" size={20} className="text-mist-300" />
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="border-t border-mist-200 p-5">
            <button
              onClick={() => {
                onClose();
                onQuote();
              }}
              className="btn btn-blue w-full"
            >
              Request a fleet quote
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
