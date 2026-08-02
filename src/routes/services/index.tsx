import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, Section } from "@/components/site/Section";
import { serviceGroups, services } from "@/data/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services | Diabetes, Thyroid, PCOS & Hormone Care in Naihati" },
      {
        name: "description",
        content:
          "Twenty specialist services including diabetes management, thyroid disorders, PCOS, obesity, osteoporosis, insulin therapy and CGM at SKN Diabetes & Endocrine Centre, Naihati.",
      },
      { property: "og:title", content: "Services | SKN Diabetes & Endocrine Centre" },
      {
        property: "og:description",
        content: "Specialist endocrine and diabetes services with detailed treatment pathways.",
      },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Specialist care across the full endocrine spectrum"
        subtitle="Each service below has its own dedicated page covering symptoms, causes, diagnosis, treatment and frequently asked questions."
      />
      <Section>
        {serviceGroups.map((group) => (
          <div key={group} className="mb-14 last:mb-0">
            <h2 className="text-sm font-semibold tracking-widest text-accent uppercase">{group}</h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services
                .filter((s) => s.group === group)
                .map((s) => (
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="group rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift"
                  >
                    <h3 className="text-lg font-semibold group-hover:text-primary">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Read more{" "}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </Section>
    </>
  );
}