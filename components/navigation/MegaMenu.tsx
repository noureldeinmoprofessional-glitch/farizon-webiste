"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { NavItem } from "@/lib/nav";
import { Icon } from "@/components/ui/Icon";

export function MegaMenu({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  if (!item.columns) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22, ease: [0.2, 0.65, 0.3, 1] }}
      className="border-t border-[rgba(51,51,51,0.08)] bg-white"
    >
      <div className="container-fluid">
        <div className="grid gap-x-10 gap-y-8 py-10 lg:grid-cols-[1fr_auto]">
          <div
            className="grid gap-x-10 gap-y-8"
            style={{
              gridTemplateColumns: `repeat(${Math.min(item.columns.length, 4)}, minmax(0,1fr))`,
            }}
          >
            {item.columns.map((col) => (
              <div key={col.title}>
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-[2px] bg-[linear-gradient(135deg,#FFC832,#FF6432)]" />
                  <h3 className="text-[12px] font-bold uppercase tracking-[0.16em] text-ink-muted">
                    {col.title}
                  </h3>
                </div>
                <ul className="space-y-1">
                  {col.links.map((link) =>
                    link.image ? (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={onNavigate}
                          className="group flex items-center gap-3 rounded-md p-2 transition-colors hover:bg-mist-50"
                        >
                          <span className="grid h-12 w-[76px] shrink-0 place-items-center overflow-hidden rounded-sm bg-mist-50 transition-colors group-hover:bg-white">
                            <Image
                              src={link.image}
                              alt={link.label}
                              width={152}
                              height={96}
                              className="h-auto w-[88%] object-contain"
                            />
                          </span>
                          <span className="flex flex-1 flex-col">
                            <span className="text-[15px] font-semibold text-starry transition-colors group-hover:text-blue">
                              {link.label}
                            </span>
                            {link.hint && (
                              <span className="text-[12px] text-ink-muted">{link.hint}</span>
                            )}
                          </span>
                          <span className="translate-x-[-4px] text-blue opacity-0 transition-all duration-base group-hover:translate-x-0 group-hover:opacity-100">
                            <Icon name="arrow-right" size={16} />
                          </span>
                        </Link>
                      </li>
                    ) : (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={onNavigate}
                          className="group flex items-baseline justify-between gap-4 rounded-sm py-2 pr-2 transition-colors hover:text-blue"
                        >
                          <span className="flex flex-col">
                            <span className="text-[16px] font-semibold text-starry transition-colors group-hover:text-blue">
                              {link.label}
                            </span>
                            {link.hint && (
                              <span className="text-[12.5px] text-ink-muted">{link.hint}</span>
                            )}
                          </span>
                          <span className="translate-x-[-4px] text-blue opacity-0 transition-all duration-base group-hover:translate-x-0 group-hover:opacity-100">
                            <Icon name="arrow-right" size={16} />
                          </span>
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>

          {item.feature && (
            <Link
              href={item.feature.href}
              onClick={onNavigate}
              className="group relative flex w-full flex-col justify-between overflow-hidden rounded-lg bg-starry p-7 lg:w-[320px]"
            >
              <div className="relative z-10">
                <span className="eyebrow text-white/80">{item.feature.eyebrow}</span>
                <h4 className="mt-3 text-[22px] font-bold leading-tight text-white">
                  {item.feature.title}
                </h4>
                <p className="mt-2 max-w-[240px] text-[13.5px] leading-relaxed text-mist">
                  {item.feature.body}
                </p>
              </div>
              <span className="link-arrow relative z-10 mt-8 text-white">
                {item.feature.cta}
                <Icon name="arrow-right" size={16} />
              </span>
              {item.feature.image && (
                <div className="pointer-events-none absolute -bottom-3 -right-6 z-0 w-[240px] opacity-90 transition-transform duration-slow ease-standard group-hover:translate-x-[-6px]">
                  <Image
                    src={item.feature.image}
                    alt=""
                    width={480}
                    height={288}
                    className="h-auto w-full drop-shadow-2xl"
                  />
                </div>
              )}
              <span className="absolute inset-x-0 bottom-0 z-[5] h-1 bg-brand-gradient" />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
