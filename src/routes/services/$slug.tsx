import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { PageHero, Section } from "@/components/site/Section";
import { getService, services } from "@/data/services";
import { clinic } from "@/data/clinic";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} Treatment in Naihati | SKN Diabetes & Endocrine Centre` },
          { name: "description", content: `${loaderData.tagline}. ${loaderData.intro.slice(0, 110)}` },
          { property: "og:title", content: `${loaderData.title} | SKN Diabetes & Endocrine Centre` },
          { property: "og:description", content: loaderData.tagline },
        ]
      : [],
  }),
  component: ServicePage,
});

const blocks = [
  ["Symptoms", "symptoms"],
  ["Causes", "causes"],
  ["Diagnosis", "diagnosis"],
  ["Treatment", "treatment"],
  ["Benefits of Treatment", "benefits"],
] as const;

function ServicePage() {
  const service = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow={service.group} title={service.title} subtitle={service.tagline} />
      <Section>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> All services
        </Link>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {service.intro}
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {blocks.map(([label, key]) => (
            <div key={key} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <h2 className="text-lg font-semibold">{label}</h2>
              <ul className="mt-4 space-y-2">
                {service[key].map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
          <div className="mt-5 space-y-3">
            {service.faqs.map((f) => (
              <details key={f.q} className="rounded-3xl border border-border bg-surface p-5">
                <summary className="cursor-pointer list-none font-semibold marker:hidden">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] gradient-royal p-8 text-primary-foreground shadow-lift sm:p-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Discuss your {service.title.toLowerCase()} with a specialist
          </h2>
          <p className="mt-3 max-w-2xl opacity-95">
            Consultation ₹1000 plus a one-time ₹500 registration valid for a year. Booking by phone
            or in person only — Thursday 11 AM–6 PM, Friday 11 AM–3 PM.
          </p>
          <a
            href={`tel:${clinic.phoneRaw}`}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-card px-6 py-3.5 text-sm font-semibold text-primary shadow-lift"
          >
            <Phone className="h-4 w-4" /> {clinic.phone}
          </a>
        </div>

        <div className="mt-14">
          <h2 className="text-xl font-semibold">Related services</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group rounded-3xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-1"
              >
                <h3 className="font-semibold group-hover:text-primary">{s.title}</h3>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Read <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}