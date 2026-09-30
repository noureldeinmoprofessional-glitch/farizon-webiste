import * as React from "react";
import Link from "next/link";
import { relatedArticles } from "@/lib/articles";
import { ArticleCover } from "./ArticleCover";
import { Icon } from "@/components/ui/Icon";

export function RelatedArticles({ slug }: { slug: string }) {
  const items = relatedArticles(slug, 3);
  if (items.length === 0) return null;
  return (
    <section aria-label="You may also like" className="bg-white py-section">
      <div className="container-fluid">
        <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-ink-muted">
          You may also like
        </span>
        <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-6">
          {items.map((a) => (
            <Link key={a.id} href={`/articles/${a.slug}`} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                <div className="absolute inset-0 transition-transform duration-slow ease-standard group-hover:scale-[1.03] motion-reduce:transform-none">
                  <ArticleCover article={a} sizes="(max-width: 768px) 92vw, 31vw" />
                </div>
              </div>
              <span className="mt-4 block text-[12px] font-bold uppercase tracking-[0.12em] text-blue">
                {a.category}
              </span>
              <h3 className="mt-2 text-h5 leading-snug text-starry">{a.title}</h3>
              <span className="link-arrow mt-4 text-blue">
                Read article <Icon name="arrow-right" size={15} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
