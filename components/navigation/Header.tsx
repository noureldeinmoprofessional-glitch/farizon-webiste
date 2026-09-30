"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { primaryNav } from "@/lib/nav";
import { Icon } from "@/components/ui/Icon";
import { FarizonLogo } from "@/components/ui/Logo";
import { MegaMenu } from "./MegaMenu";
import { SearchOverlay } from "./SearchOverlay";
import { MobileMenu } from "./MobileMenu";
import { useSiteChrome } from "@/components/providers/SiteChrome";

export function Header({ transparentOnTop = true }: { transparentOnTop?: boolean }) {
  const { openTransform } = useSiteChrome();
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState<string | null>(null);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const closeTimer = React.useRef<number | null>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !!active || !transparentOnTop;
  const activeItem = primaryNav.find((n) => n.label === active) ?? null;

  const openMenu = (label: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    const item = primaryNav.find((n) => n.label === label);
    setActive(item?.columns ? label : null);
  };
  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setActive(null), 140);
  };
  const cancelClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[80] transition-colors duration-300 ${
          solid
            ? "bg-white/60 backdrop-blur-xl backdrop-saturate-150 border-b border-white/40 shadow-[0_2px_24px_rgba(20,20,28,0.06)]"
            : "bg-transparent"
        }`}
        onMouseLeave={scheduleClose}
      >
        <div className="container-fluid">
          <div className="flex h-[var(--header-h)] items-center justify-between gap-6">
            {/* Left — logo */}
            <Link
              href="/"
              aria-label="Farizon home"
              className="shrink-0"
              onFocus={() => setActive(null)}
            >
              <FarizonLogo variant={solid ? "black" : "white"} height={26} />
            </Link>

            {/* Center — primary nav */}
            <nav className="hidden lg:block" aria-label="Primary">
              <ul className="flex items-center gap-1">
                {primaryNav.map((item) => {
                  const isActive = active === item.label;
                  return (
                    <li
                      key={item.label}
                      onMouseEnter={() => openMenu(item.label)}
                      onMouseLeave={scheduleClose}
                    >
                      {item.columns ? (
                        <button
                          aria-expanded={isActive}
                          aria-haspopup="true"
                          onClick={() => setActive(isActive ? null : item.label)}
                          onFocus={() => openMenu(item.label)}
                          className={`relative flex items-center gap-1.5 rounded-sm px-3.5 py-2 text-[14.5px] font-semibold transition-colors ${
                            solid ? "text-ink" : "text-white"
                          } ${isActive ? "!text-blue" : "hover:text-blue"}`}
                        >
                          {item.label}
                          <span
                            className={`transition-transform duration-base ${isActive ? "rotate-180" : ""}`}
                          >
                            <Icon name="chevron-down" size={15} />
                          </span>
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          onFocus={() => setActive(null)}
                          className={`rounded-sm px-3.5 py-2 text-[14.5px] font-semibold transition-colors ${
                            solid ? "text-ink hover:text-blue" : "text-white hover:text-white/80"
                          }`}
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Right — search + CTA */}
            <div className="flex items-center gap-1.5 sm:gap-3">
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Open search"
                className={`grid h-11 w-11 place-items-center rounded-sm transition-colors ${
                  solid ? "text-ink hover:bg-mist-100" : "text-white hover:bg-white/10"
                }`}
              >
                <Icon name="search" size={22} />
              </button>

              <button
                onClick={openTransform}
                className={`hidden h-11 items-center rounded-sm px-5 text-[13px] font-bold uppercase tracking-[0.02em] transition-colors sm:inline-flex ${
                  solid ? "bg-blue text-white hover:bg-[#0a1ae0]" : "bg-white text-starry hover:bg-mist-100"
                }`}
              >
                Request a fleet quote
              </button>

              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className={`grid h-11 w-11 place-items-center rounded-sm transition-colors lg:hidden ${
                  solid ? "text-ink hover:bg-mist-100" : "text-white hover:bg-white/10"
                }`}
              >
                <Icon name="menu" size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Mega menu panel */}
        <AnimatePresence>
          {activeItem && (
            <div
              className="absolute inset-x-0 top-full"
              onMouseEnter={cancelClose}
              onMouseLeave={scheduleClose}
            >
              <MegaMenu item={activeItem} onNavigate={() => setActive(null)} />
            </div>
          )}
        </AnimatePresence>
      </header>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onOpenSearch={() => setSearchOpen(true)}
        onQuote={openTransform}
      />
    </>
  );
}
