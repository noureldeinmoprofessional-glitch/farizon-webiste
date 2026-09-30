import type { Metadata } from "next";
import { SiteChrome } from "@/components/providers/SiteChrome";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/footer/Footer";
import { ArticleHero } from "@/components/articles/ArticleHero";
import { FeaturedArticle } from "@/components/articles/FeaturedArticle";
import { ArticlesExplorer } from "@/components/articles/ArticlesExplorer";
import { ArticleCTA } from "@/components/articles/ArticleCTA";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Farizon Insights — educational articles on commercial mobility, electric vehicles, fleet operations, sustainability and business transformation.",
};

export default function ArticlesPage() {
  return (
    <SiteChrome>
      <Header transparentOnTop={false} />
      <main id="main">
        <ArticleHero />
        <FeaturedArticle />
        <ArticlesExplorer />
        <ArticleCTA />
      </main>
      <Footer />
    </SiteChrome>
  );
}
