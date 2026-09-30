import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteChrome } from "@/components/providers/SiteChrome";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/footer/Footer";
import { ArticleCover } from "@/components/articles/ArticleCover";
import { ArticleMeta } from "@/components/articles/ArticleMeta";
import { ArticleBody } from "@/components/articles/ArticleBody";
import { RelatedArticles } from "@/components/articles/RelatedArticles";
import { ArticleCTA } from "@/components/articles/ArticleCTA";
import { ReadingProgress } from "@/components/articles/ReadingProgress";
import { Icon } from "@/components/ui/Icon";
import { GradientLine } from "@/components/ui/GradientLine";
import { articles, getArticle } from "@/lib/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return { title: "Article" };
  return { title: a.title, description: a.excerpt };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  return (
    <SiteChrome>
      <Header transparentOnTop={false} />
      <ReadingProgress targetId="article-root" />
      <main id="main">
        <article id="article-root">
          {/* Header */}
          <header className="bg-white pt-[calc(var(--header-h)+clamp(28px,5vh,56px))]">
            <div className="container-fluid">
              <Link href="/articles" className="link-arrow text-ink-muted hover:text-starry">
                <Icon name="arrow-right" size={15} className="rotate-180" /> Articles
              </Link>

              <div className="mt-8 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
                <div className="lg:pt-6">
                  <ArticleMeta article={a} />
                  <h1 className="mt-5 text-balance text-h1">{a.title}</h1>
                  <GradientLine className="mt-6" width={80} />
                  <p className="mt-6 max-w-prose text-[17px] leading-relaxed text-ink-soft">
                    {a.excerpt}
                  </p>
                </div>

                {/* Hero image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <ArticleCover article={a} sizes="(max-width: 1024px) 92vw, 46vw" priority />
                </div>
              </div>
            </div>
          </header>

          {/* Reading area */}
          <div className="bg-white py-section">
            <div className="container-fluid">
              <div className="mx-auto max-w-[760px]">
                <ArticleBody content={a.content} />
              </div>
            </div>
          </div>

          {/* Key takeaways */}
          {a.keyTakeaways.length > 0 && (
            <section aria-label="Key takeaways" className="bg-mist-50 py-section">
              <div className="container-fluid">
                <div className="mx-auto max-w-[860px]">
                  <span className="eyebrow text-blue">Key takeaways</span>
                  <ol className="mt-10 space-y-8">
                    {a.keyTakeaways.map((t, i) => (
                      <li key={i} className="flex items-start gap-6 border-t border-mist-200 pt-8">
                        <span className="spec-value shrink-0 text-[28px] leading-none">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-[20px] font-semibold leading-snug text-starry sm:text-[24px]">
                          {t}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </section>
          )}
        </article>

        <RelatedArticles slug={a.slug} />
        <ArticleCTA />
      </main>
      <Footer />
    </SiteChrome>
  );
}
