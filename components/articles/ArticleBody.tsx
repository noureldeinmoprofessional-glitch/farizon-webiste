import * as React from "react";
import type { ArticleSection } from "@/lib/articles";

export function ArticleBody({ content }: { content: ArticleSection[] }) {
  return (
    <div className="space-y-6">
      {content.map((s, i) => {
        switch (s.type) {
          case "heading":
            return s.level === 3 ? (
              <h3 key={i} className="pt-4 text-h4 text-starry">
                {s.text}
              </h3>
            ) : (
              <h2 key={i} className="pt-6 text-h3 text-starry">
                {s.text}
              </h2>
            );
          case "list":
            return (
              <ul key={i} className="space-y-2 pl-1">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-3 text-[16.5px] font-light leading-[1.75] text-ink-soft">
                    <span
                      aria-hidden="true"
                      className="mt-[11px] h-[6px] w-[6px] shrink-0 rounded-full bg-starry"
                    />
                    {it}
                  </li>
                ))}
              </ul>
            );
          case "callout":
            return (
              <aside
                key={i}
                className="my-4 border-l-2 border-transparent bg-mist-50 p-7 sm:p-9"
                style={{ borderImage: "linear-gradient(180deg,#FFC832,#FF6432) 1" }}
              >
                <h2 className="text-[13px] font-bold uppercase tracking-[0.16em] text-starry">
                  {s.title}
                </h2>
                <dl className="mt-6 space-y-5">
                  {s.items.map((it) => (
                    <div key={it.n} className="flex gap-4">
                      <dt className="w-7 shrink-0 pt-0.5 text-[13px] font-bold text-blue">{it.n}</dt>
                      <dd>
                        <span className="text-[15px] font-bold uppercase tracking-[0.08em] text-starry">
                          {it.label}
                        </span>
                        <p className="mt-1 text-[15.5px] font-light leading-[1.7] text-ink-soft">
                          {it.text}
                        </p>
                      </dd>
                    </div>
                  ))}
                </dl>
              </aside>
            );
          default:
            return (
              <p key={i} className="text-[16.5px] font-light leading-[1.8] text-ink-soft">
                {s.text}
              </p>
            );
        }
      })}
    </div>
  );
}
