import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { PageHero, Section } from "@/components/site/Section";
import { articleCategories, articles } from "@/data/articles";

export const Route = createFileRoute("/articles/")({
  head: () => ({
    meta: [
      { title: "Health Articles | Diabetes, Thyroid & Hormone Guides" },
      {
        name: "description",
        content:
          "Patient-friendly articles on diabetes, HbA1c, thyroid, PCOS, obesity, bone health and nutrition from SKN Diabetes & Endocrine Centre, Naihati.",
      },
      { property: "og:title", content: "Health Articles | SKN Diabetes & Endocrine Centre" },
      {
        property: "og:description",
        content: "Evidence-based endocrine and diabetes education written for patients.",
      },
    ],
  }),
  component: ArticlesIndex,
});

function ArticlesIndex() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  const list = useMemo(
    () =>
      articles.filter(
        (a) =>
          (cat === "All" || a.category === cat) &&
          (q.trim() === "" ||
            a.title.toLowerCase().includes(q.toLowerCase()) ||
            a.tags.join(" ").includes(q.toLowerCase())),
      ),
    [q, cat],
  );

  const featured = articles.filter((a) => a.featured);

  return (
    <>
      <PageHero
        eyebrow="Articles"
        title="Health library"
        subtitle="Clear, evidence-based writing on diabetes, thyroid, hormones and metabolic health."
      />

      <Section>
        <h2 className="text-sm font-semibold tracking-widest text-accent uppercase">Featured</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {featured.map((a) => (
            <Link
              key={a.slug}
              to="/articles/$slug"
              params={{ slug: a.slug }}
              className="group rounded-3xl gradient-royal p-6 text-primary-foreground shadow-lift transition-transform hover:-translate-y-1"
            >
              <span className="text-xs font-semibold tracking-widest uppercase opacity-80">
                {a.category}
              </span>
              <h3 className="mt-2 text-lg leading-snug font-semibold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed opacity-90">{a.excerpt}</p>
            </Link>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search articles, e.g. HbA1c, thyroid, PCOS"
              className="w-full rounded-full border border-border bg-card py-3 pr-4 pl-11 text-sm shadow-soft outline-none focus:border-primary"
            />
          </div>
          <select
            value={cat}
            onChange={(e) => setCat(e.target.value)}
            className="rounded-full border border-border bg-card px-5 py-3 text-sm font-medium shadow-soft outline-none focus:border-primary"
          >
            {["All", ...articleCategories].map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((a) => (
            <Link
              key={a.slug}
              to="/articles/$slug"
              params={{ slug: a.slug }}
              className="group rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="text-xs font-semibold tracking-widest text-accent uppercase">
                {a.category}
              </span>
              <h3 className="mt-2 text-lg leading-snug font-semibold group-hover:text-primary">
                {a.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
              <p className="mt-4 text-xs text-muted-foreground">
                {a.date} · {a.readMins} min read
              </p>
            </Link>
          ))}
        </div>
        {list.length === 0 && (
          <p className="mt-10 text-center text-muted-foreground">No articles match your search.</p>
        )}
      </Section>
    </>
  );
}