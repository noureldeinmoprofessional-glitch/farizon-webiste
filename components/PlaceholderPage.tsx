"use client";

import * as React from "react";
import Link from "next/link";
import { SiteChrome, useSiteChrome } from "@/components/providers/SiteChrome";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/footer/Footer";
import { Icon } from "@/components/ui/Icon";
import { GradientLine } from "@/components/ui/GradientLine";

function Body({ title, breadcrumb }: { title: string; breadcrumb: string[] }) {
  const { openTransform } = useSiteChrome();
  return (
    <main id="main" className="relative flex min-h-[78svh] items-center overflow-hidden bg-white pt-[var(--header-h)]">
      {/* directional gradient accent */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(0,15,215,0.06),transparent_70%)]" />
      <div className="container-fluid relative">
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[13px] text-ink-muted">
          <Link href="/" className="hover:text-blue">
            Home
          </Link>
          {breadcrumb.map((b) => (
            <React.Fragment key={b}>
              <Icon name="chevron-right" size={13} />
              <span className="font-semibold text-ink">{b}</span>
            </React.Fragment>
          ))}
        </nav>

        <span className="eyebrow text-blue">In development</span>
        <h1 className="mt-5 max-w-3xl text-h1">{title}</h1>
        <GradientLine className="my-6" width={80} />
        <p className="max-w-prose text-[17px] leading-relaxed text-ink-soft">
          This page is part of the Farizon Egypt experience and is being built out next. The homepage
          demonstrates the full design system, navigation, vehicle explorer and conversion flows.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn btn-primary">
            <span className="rotate-180">
              <Icon name="arrow-right" size={18} />
            </span>
            Back to homepage
          </Link>
          <button onClick={openTransform} className="btn btn-ghost">
            Request a fleet quote
          </button>
        </div>
      </div>
    </main>
  );
}

export function PlaceholderPage({ title, breadcrumb }: { title: string; breadcrumb: string[] }) {
  return (
    <SiteChrome>
      <Header transparentOnTop={false} />
      <Body title={title} breadcrumb={breadcrumb} />
      <Footer />
    </SiteChrome>
  );
}
