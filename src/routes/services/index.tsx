import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  Activity,
  ArrowRight,
  Baby,
  Bone,
  CalendarHeart,
  Check,
  ChevronDown,
  Droplets,
  FlaskConical,
  HeartPulse,
  Phone,
  Salad,
  Scale,
  Stethoscope,
} from "lucide-react";
import { PageHero, Reveal, Section } from "@/components/site/Section";
import { serviceGroups, services } from "@/data/services";
import { pillars, type Pillar } from "@/data/pillars";
import { clinic, complimentaryTests, testsNote } from "@/data/clinic";

const pillarIcon = {
  treatment: Stethoscope,
  assessments: FlaskConical,
  nutrition: Salad,
  camps: CalendarHeart,
} as const;

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

type PillarId = Pillar["id"];
const isPillarId = (v: unknown): v is PillarId =>
  typeof v === "string" && pillars.some((p) => p.id === v);

export const Route = createFileRoute("/services/")({
  validateSearch: (search: Record<string, unknown>): { p?: PillarId } =>
    isPillarId(search['p']) ? { p: search['p'] as PillarId } : {},
  head: () => ({
    meta: [
      { title: "Services | Treatment, Free Tests, Nutrition & Camps in Naihati" },
      {
        name: "description",
        content:
          "SKN Diabetes & Endocrine Centre offers specialist treatment, eleven free health assessments, expert nutritional counselling and free quarterly health camps in Naihati.",
      },
      { property: "og:title", content: "Services | SKN Diabetes & Endocrine Centre" },
      {
        property: "og:description",
        content:
          "Treatment, complimentary assessments, nutrition counselling and free health camps under one roof.",
      },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  const { p } = Route.useSearch();
  const navigate = useNavigate({ from: "/services/" });
  const active = p ?? "treatment";
  const activePillar = pillars.find((x) => x.id === active)!;

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Four ways SKN cares for you"
        subtitle="Specialist treatment, complimentary health assessments, expert nutrition counselling and free community health camps — select any pillar to explore it in detail."
      />

      <Section>
        {/* Pillar selector */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => {
            const Icon = pillarIcon[pillar.id];
            const isActive = pillar.id === active;
            return (
              <Reveal key={pillar.id} delay={i * 90}>
                <button
                  type="button"
                  onClick={() =>
                    navigate({ search: { p: pillar.id }, replace: true, resetScroll: false })
                  }
                  aria-pressed={isActive}
                  className={`group relative h-full w-full overflow-hidden rounded-[1.75rem] border p-6 text-left transition-all duration-500 ${
                    isActive
                      ? "gradient-royal text-primary-foreground border-transparent shadow-lift -translate-y-1"
                      : "border-border bg-card shadow-soft hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift"
                  }`}
                >
                  <span
                    className={`pointer-events-none absolute -top-16 -right-12 h-48 w-48 rounded-full blur-3xl transition-opacity duration-700 ${
                      isActive ? "bg-primary-foreground/25 opacity-100" : "bg-accent/20 opacity-0 group-hover:opacity-100"
                    }`}
                  />
                  <span
                    className={`relative grid h-14 w-14 place-items-center rounded-2xl transition-transform duration-500 ${
                      isActive
                        ? "bg-primary-foreground/15 scale-110 animate-float"
                        : "bg-secondary text-primary group-hover:scale-110"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="relative mt-5 block text-lg font-bold sm:text-xl">
                    {pillar.label}
                  </span>
                  <span
                    className={`relative mt-2 block text-sm leading-relaxed ${
                      isActive ? "opacity-90" : "text-muted-foreground"
                    }`}
                  >
                    {pillar.tagline}
                  </span>
                  <span
                    className={`relative mt-4 block h-0.5 rounded-full transition-all duration-500 ${
                      isActive ? "w-16 bg-primary-foreground/70" : "w-8 bg-primary/40 group-hover:w-16"
                    }`}
                  />
                </button>
              </Reveal>
            );
          })}
        </div>

        {/* Active pillar detail */}
        <div key={active} className="animate-rise-in mt-14">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface p-8 shadow-soft sm:p-12">
            <span className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
            <span className="pointer-events-none absolute -right-24 -bottom-28 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-xs font-bold tracking-[0.18em] text-primary uppercase shadow-soft">
                <span className="gradient-royal h-1.5 w-1.5 rounded-full" />
                {activePillar.label}
              </span>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                {activePillar.title}
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                {activePillar.intro}
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {activePillar.highlights.map((h, i) => (
                  <Reveal key={h} delay={i * 70}>
                    <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft">
                      <span className="gradient-royal text-primary-foreground mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <p className="text-sm leading-relaxed">{h}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {active === "treatment" && <TreatmentDetail />}
          {active === "assessments" && <AssessmentsDetail />}
          {active === "nutrition" && <NutritionDetail />}
          {active === "camps" && <CampsDetail />}
        </div>

        <div className="gradient-royal text-primary-foreground shadow-lift mt-14 rounded-[2rem] p-8 sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Not sure which service you need?</h2>
          <p className="mt-3 max-w-2xl opacity-95">
            Call the chamber and the team will guide you. Consultation ₹1000 plus a one-time ₹500
            registration valid for a year. Thursday 11 AM–6 PM, Friday 11 AM–3 PM.
          </p>
          <a
            href={`tel:${clinic.phoneRaw}`}
            className="bg-card text-primary shadow-lift mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold"
          >
            <Phone className="h-4 w-4" /> {clinic.phone}
          </a>
        </div>
      </Section>
    </>
  );
}

function TreatmentDetail() {
  const [open, setOpen] = useState<string | null>(serviceGroups[0] ?? null);

  return (
    <div className="mt-10">
      <h3 className="text-2xl font-bold sm:text-3xl">Conditions we treat</h3>
      <p className="mt-2 text-muted-foreground">
        Twenty specialist services grouped by system. Every service has its own page covering
        symptoms, causes, diagnosis, treatment and FAQs.
      </p>
      <div className="mt-6 space-y-5">
        {serviceGroups.map((group) => {
          const Icon = groupIcon(group);
          const items = services.filter((s) => s.group === group);
          const isOpen = open === group;
          return (
            <div
              key={group}
              className={`relative overflow-hidden rounded-[2rem] border transition-all duration-300 ${
                isOpen ? "border-primary/40 bg-surface shadow-lift" : "border-border bg-card shadow-soft"
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
                    isOpen ? "gradient-royal text-primary-foreground scale-105" : "bg-secondary text-primary"
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
                        className="group bg-card shadow-soft hover:shadow-lift rounded-3xl border border-border p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
                      >
                        <h4 className="text-lg font-semibold group-hover:text-primary">{s.title}</h4>
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
    </div>
  );
}

function AssessmentsDetail() {
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-bold sm:text-3xl">The eleven complimentary assessments</h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {complimentaryTests.map((t, i) => (
          <Reveal key={t.name} delay={i * 50}>
            <div className="group bg-card shadow-soft hover:shadow-lift h-full rounded-3xl border border-border p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold group-hover:text-primary">{t.name}</h4>
                <span className="rounded-full bg-secondary px-3 py-1 text-[0.65rem] font-bold tracking-widest text-primary uppercase">
                  Free
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-5 text-sm text-muted-foreground">{testsNote}</p>
    </div>
  );
}

function NutritionDetail() {
  const steps = [
    { title: "Dietary recall", desc: "A detailed look at what you actually eat on a normal day." },
    { title: "Body composition", desc: "InBody analysis of fat, muscle and visceral fat." },
    { title: "Personal plan", desc: "Portion, protein and fibre targets using familiar foods." },
    { title: "Review & adjust", desc: "Plans re-tuned at follow-up as your numbers change." },
  ];
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-bold sm:text-3xl">How counselling works</h3>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 90}>
            <div className="bg-card shadow-soft relative h-full overflow-hidden rounded-3xl border border-border p-6">
              <span className="gradient-royal bg-clip-text text-5xl font-extrabold text-transparent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h4 className="mt-3 text-lg font-semibold">{s.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function CampsDetail() {
  const items = [
    {
      title: "Quarterly corporate health camps",
      desc: "Partner companies organise camps at the chamber every quarter. Attendees are examined absolutely free of cost, with screening, counselling and onward referral in one visit.",
    },
    {
      title: "World Diabetes Day units",
      desc: "Special health units run on World Diabetes Day spreading awareness and consciousness, with free tests conducted for anyone who comes and visits the clinic.",
    },
  ];
  return (
    <div className="mt-10 grid gap-5 lg:grid-cols-2">
      {items.map((it, i) => (
        <Reveal key={it.title} delay={i * 120}>
          <div className="bg-card shadow-soft hover:shadow-lift relative h-full overflow-hidden rounded-[2rem] border border-border p-8 transition-all hover:-translate-y-1">
            <span className="pointer-events-none absolute -top-20 -right-16 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
            <CalendarHeart className="relative h-8 w-8 text-primary" />
            <h4 className="relative mt-4 text-xl font-bold">{it.title}</h4>
            <p className="relative mt-3 leading-relaxed text-muted-foreground">{it.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
