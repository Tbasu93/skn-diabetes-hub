import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Activity,
  ArrowRight,
  Baby,
  Bone,
  ChevronDown,
  Droplets,
  FlaskConical,
  HeartPulse,
  Scale,
  Stethoscope,
} from "lucide-react";
import { PageHero, Section } from "@/components/site/Section";
import { serviceGroups, services } from "@/data/services";

const groupIcon = (group: string) => {
  const g = group.toLowerCase();
  if (g.includes("diabet")) return Droplets;
  if (g.includes("thyroid")) return Activity;
  if (g.includes("bone")) return Bone;
  if (g.includes("obes") || g.includes("weight") || g.includes("metabol")) return Scale;
  if (g.includes("growth") || g.includes("child") || g.includes("paediat")) return Baby;
  if (g.includes("adrenal") || g.includes("pituitary")) return FlaskConical;
  if (g.includes("hormon") || g.includes("reproduct")) return HeartPulse;
  return Stethoscope;
};

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
  const [open, setOpen] = useState<string | null>(serviceGroups[0] ?? null);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Specialist care across the full endocrine spectrum"
        subtitle="Each service below has its own dedicated page covering symptoms, causes, diagnosis, treatment and frequently asked questions."
      />
      <Section>
        <div className="space-y-5">
          {serviceGroups.map((group) => {
            const Icon = groupIcon(group);
            const items = services.filter((s) => s.group === group);
            const isOpen = open === group;
            return (
              <div
                key={group}
                className={`relative overflow-hidden rounded-[2rem] border shadow-soft transition-all duration-300 ${
                  isOpen ? "border-primary/40 bg-surface shadow-lift" : "border-border bg-card"
                }`}
              >
                <span
                  className={`pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-accent/15 blur-3xl transition-opacity duration-500 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : group)}
                  aria-expanded={isOpen}
                  className="relative flex w-full items-center gap-4 p-6 text-left"
                >
                  <span
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl transition-transform duration-300 ${
                      isOpen
                        ? "gradient-royal text-primary-foreground scale-105"
                        : "bg-secondary text-primary"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-xl font-bold sm:text-2xl">{group}</span>
                    <span className="mt-0.5 block text-sm text-muted-foreground">
                      {items.length} {items.length === 1 ? "service" : "services"}
                    </span>
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-5 px-6 pb-6 sm:grid-cols-2 lg:grid-cols-3">
                      {items.map((s) => (
                        <Link
                          key={s.slug}
                          to="/services/$slug"
                          params={{ slug: s.slug }}
                          className="group rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift"
                        >
                          <h3 className="text-lg font-semibold group-hover:text-primary">
                            {s.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {s.tagline}
                          </p>
                          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                            Read more{" "}
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
}