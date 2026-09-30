"use client";

import * as React from "react";
import Link from "next/link";
import { FarizonLogo, NationalMotorsLogo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";
import { GradientLine } from "@/components/ui/GradientLine";

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "Vehicles", href: "/vehicles" },
      { label: "Why Farizon", href: "/why-farizon" },
      { label: "Fleet Solutions", href: "/fleet-solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Articles", href: "/articles" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Vehicles",
    links: [
      { label: "Farizon V6E", href: "/vehicles/v6e" },
      { label: "Farizon SV Passenger", href: "/vehicles/sv-passenger" },
      { label: "Farizon F1E", href: "/vehicles/f1e" },
      { label: "Farizon H8E", href: "/vehicles/h8e" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-starry-900 text-mist">
      <div className="container-fluid">
        {/* Brand + sitemap */}
        <div className="grid gap-12 py-16 lg:grid-cols-[1.1fr_2fr] lg:gap-16">
          <div>
            <FarizonLogo variant="white" height={30} />
            <GradientLine className="my-6" width={72} />
            <p className="max-w-md text-[15px] leading-relaxed text-mist/90">
              Leading the Green Commercial Revolution through Innovation and Intelligent
              Connectivity.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="mb-4 text-[12px] font-bold uppercase tracking-[0.16em] text-white">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[14px] text-mist/80 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="mb-4 text-[12px] font-bold uppercase tracking-[0.16em] text-white">
              Connect
            </h3>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/farizon.egypt/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Farizon Egypt on Instagram"
                className="grid h-11 w-11 place-items-center rounded-sm border border-white/15 text-mist transition-colors hover:border-white hover:text-white"
              >
                <Icon name="instagram" size={20} />
              </a>
              <a
                href="https://www.facebook.com/farizonegypt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Farizon Egypt on Facebook"
                className="grid h-11 w-11 place-items-center rounded-sm border border-white/15 text-mist transition-colors hover:border-white hover:text-white"
              >
                <Icon name="facebook" size={20} />
              </a>
            </div>
            <p className="mt-4 text-[13px] text-mist/70">@farizon.egypt</p>
          </div>
          </div>
        </div>

        {/* Bottom — National Motors + legal */}
        <div className="flex flex-col gap-6 border-t border-white/10 py-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <span className="text-[13px] text-mist/70">Brought to you by</span>
            <NationalMotorsLogo variant="white" height={34} />
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-mist/70">
            <Link href="/legal" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/legal#cookies" className="transition-colors hover:text-white">
              Cookie Settings
            </Link>
            <Link href="/legal" className="transition-colors hover:text-white">
              Legal & Policies
            </Link>
          </div>
        </div>
        <p className="pb-8 text-[12px] text-mist/50">
          © {new Date().getFullYear()} National Motors. Farizon and all vehicle names are trademarks
          of their respective owners. Fleet calculator outputs are indicative estimates and do not
          constitute a quotation or financial advice.
        </p>
      </div>
    </footer>
  );
}
