import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Phone } from "lucide-react";
import { PageHero, Section } from "@/components/site/Section";
import { getArticle, relatedArticles } from "@/data/articles";
import { clinic, doctorInfo } from "@/data/clinic";

export const Route = createFileRoute("/articles/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article, related: relatedArticles(article) };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.article.title} | SKN Diabetes & Endocrine Centre` },
          { name: "description", content: loaderData.article.excerpt },
          { property: "og:title", content: loaderData.article.title },
          { property: "og:description", content: loaderData.article.excerpt },
          { property: "og:type", content: "article" },
        ]
      : [],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  const { article, related } = Route.useLoaderData();

  return (
    <>
      <PageHero eyebrow={article.category} title={article.title} subtitle={article.excerpt} />
      <Section>
        <Link
          to="/articles"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> All articles
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">{doctorInfo.name}</span>
          <span>{article.date}</span>
          <span>{article.readMins} min read</span>
        </div>

        <article className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
          {article.body.map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))}
        </article>

        <div className="mt-8 flex flex-wrap gap-2">
          {article.tags.map((t: string) => (
            <span
              key={t}
              className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              #{t.trim()}
            </span>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] gradient-royal p-8 text-primary-foreground shadow-lift">
          <h2 className="text-2xl font-semibold">Need personal advice on this?</h2>
          <p className="mt-2 opacity-95">
            Book a consultation at {clinic.name}, Naihati — Thursday and Friday only.
          </p>
          <a
            href={`tel:${clinic.phoneRaw}`}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-card px-6 py-3 text-sm font-semibold text-primary"
          >
            <Phone className="h-4 w-4" /> {clinic.phone}
          </a>
        </div>

        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="text-xl font-semibold">Related articles</h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/articles/$slug"
                  params={{ slug: r.slug }}
                  className="rounded-3xl border border-border bg-card p-5 shadow-soft transition-transform hover:-translate-y-1"
                >
                  <h3 className="font-semibold">{r.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Section>
    </>
  );
}