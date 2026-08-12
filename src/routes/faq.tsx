import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { PageHero, Section } from "@/components/site/Section";
import { RevealImage } from "@/components/site/RevealImage";
import { sectionAlt, sectionImages } from "@/data/sectionImages";
import { clinic, faqs, fees } from "@/data/clinic";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Booking, Fees & Timings — SKN Diabetes & Endocrine Centre" },
      {
        name: "description",
        content:
          "Answers on appointments, consultation fee ₹1000, registration ₹500 valid one year, clinic timings, complimentary tests and teleconsultation at SKN Diabetes & Endocrine Centre.",
      },
      { property: "og:title", content: "Frequently Asked Questions | SKN Diabetes & Endocrine Centre" },
      {
        property: "og:description",
        content: "Everything patients ask about booking, fees, timings and treatment at our Naihati clinic.",
      },
    ],
  }),
  component: Faq,
});

function Faq() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        subtitle="Booking, fees, timings and treatment — answered clearly before your first visit."
        image={sectionImages.faq}
        imageAlt={sectionAlt.faq}
        backdrop={heroImages.faq}
        backdropAlt={heroAlt.faq}
      />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2">
          {fees.map((f) => (
            <div
              key={f.label}
              className="flex items-center justify-between rounded-3xl border border-border bg-surface p-6"
            >
              <div>
                <p className="font-semibold">{f.label}</p>
                <p className="text-sm text-muted-foreground">{f.note}</p>
              </div>
              <p className="text-3xl font-semibold text-primary">{f.amount}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <RevealImage
            src={sectionImages.journey}
            alt={sectionAlt.journey}
            className="aspect-4/3 w-full lg:sticky lg:top-28"
          />
          <div className="space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-3xl border border-border bg-card p-5 shadow-soft transition-colors open:border-primary/40 hover:border-primary/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold marker:hidden">
                <span>{f.q}</span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-secondary text-lg leading-none font-bold text-primary transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
          </div>
        </div>

        <div className="relative mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl border border-border bg-surface p-6 text-center">
          <img
            src={sectionImages.cta}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-15"
          />
          <div className="relative">
          <p className="text-sm text-muted-foreground">Still have a question?</p>
          <a
            href={`tel:${clinic.phoneRaw}`}
            className="mt-3 inline-flex items-center gap-2 rounded-full gradient-royal px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft"
          >
            <Phone className="h-4 w-4" /> Call {clinic.phone}
          </a>
          </div>
        </div>
      </Section>
    </>
  );
}