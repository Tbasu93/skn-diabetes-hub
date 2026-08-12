import { heroAlt, heroImages } from "@/data/heroImages";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AlertTriangle, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";
import { PageHero, Section } from "@/components/site/Section";
import { RevealImage } from "@/components/site/RevealImage";
import { sectionAlt, sectionImages } from "@/data/sectionImages";
import { clinic, fees, timingNote, timings } from "@/data/clinic";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Appointment | SKN Diabetes & Endocrine Centre, Naihati" },
      {
        name: "description",
        content:
          "Visit 18 George Road, Naihati, Kolkata 743165 (landmark SBI). Call +91 9830585954 to book. Thursday 11 AM–6 PM, Friday 11 AM–3 PM. Teleconsultation available.",
      },
      { property: "og:title", content: "Contact & Appointment | SKN Diabetes & Endocrine Centre" },
      {
        property: "og:description",
        content: "Address, map, phone, WhatsApp and clinic timings for our Naihati chamber.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Visit or call the centre"
        subtitle="Appointments are confirmed only over phone or in person. Send us a message and we will call you back."
        image={sectionImages.contact}
        imageAlt={sectionAlt.contact}
        backdrop={heroImages.contact}
        backdropAlt={heroAlt.contact}
      />

      <Section>
        <RevealImage
          src={sectionImages.journey}
          alt={sectionAlt.journey}
          className="mb-10 aspect-21/9 w-full"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            {[
              { icon: MapPin, label: "Address", value: `${clinic.address} — ${clinic.landmark}`, href: clinic.mapLink },
              { icon: Phone, label: "Phone", value: clinic.phone, href: `tel:${clinic.phoneRaw}` },
              { icon: MessageCircle, label: "WhatsApp", value: clinic.phone, href: `https://wa.me/${clinic.whatsapp}` },
              { icon: Mail, label: "Email", value: clinic.email, href: `mailto:${clinic.email}` },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-3xl border border-border bg-card p-5 shadow-soft transition-colors hover:border-primary/40"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl gradient-royal text-primary-foreground">
                  <c.icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                    {c.label}
                  </span>
                  <span className="mt-1 block font-medium">{c.value}</span>
                </span>
              </a>
            ))}

            <div className="rounded-3xl border border-border bg-surface p-6">
              <h2 className="font-semibold">Consultation Timing</h2>
              <RevealImage
                src={sectionImages.whyUs}
                alt={sectionAlt.whyUs}
                className="mt-4 aspect-16/9 w-full"
              />
              <ul className="mt-3 space-y-2 text-sm">
                {timings.map((t) => (
                  <li key={t.day} className="flex justify-between">
                    <span className="font-medium">{t.day}</span>
                    <span className="text-muted-foreground">{t.hours}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{timingNote}</p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {fees.map((f) => (
                  <div key={f.label} className="rounded-2xl bg-card p-3 text-sm">
                    <p className="font-medium">{f.label}</p>
                    <p className="text-primary">
                      {f.amount} <span className="text-xs text-muted-foreground">· {f.note}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-3xl border border-destructive/30 bg-destructive/5 p-5">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">Emergency information:</span> this
                clinic does not provide 24-hour emergency cover. For severe hypoglycaemia, chest
                pain, breathlessness or diabetic ketoacidosis, go to the nearest emergency
                department immediately.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
              <iframe
                title={`Map to ${clinic.name}`}
                src={clinic.mapEmbed}
                className="h-72 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                toast.success("Message noted — please call +91 9830585954 to confirm your slot.");
              }}
              className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
            >
              <img
                src={sectionImages.patients}
                alt={sectionAlt.patients}
                loading="lazy"
                className="h-44 w-full object-cover"
              />
              <div className="p-6">
              <h2 className="text-xl font-semibold">Appointment enquiry</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                This form is an enquiry only — no online booking is available. We will call you back.
              </p>
              <div className="mt-5 grid gap-4">
                <input required placeholder="Full name" className="rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
                <input required type="tel" placeholder="Phone number" className="rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
                <input type="email" placeholder="Email (optional)" className="rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
                <textarea required rows={4} placeholder="Briefly describe your concern" className="rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
                <button
                  type="submit"
                  className="rounded-full gradient-royal px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
                >
                  {sent ? "Enquiry sent" : "Send enquiry"}
                </button>
              </div>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}