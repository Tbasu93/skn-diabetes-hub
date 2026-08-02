import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { PageHero, Section } from "@/components/site/Section";
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

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-3xl border border-border bg-card p-5 shadow-soft">
              <summary className="cursor-pointer list-none font-semibold marker:hidden">{f.q}</summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-border bg-surface p-6 text-center">
          <p className="text-sm text-muted-foreground">Still have a question?</p>
          <a
            href={`tel:${clinic.phoneRaw}`}
            className="mt-3 inline-flex items-center gap-2 rounded-full gradient-royal px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft"
          >
            <Phone className="h-4 w-4" /> Call {clinic.phone}
          </a>
        </div>
      </Section>
    </>
  );
}