import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  HeartPulse,
  Lightbulb,
  Microscope,
  Quote,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Trophy,
  Users,
} from "lucide-react";
import { PageHero, Reveal, Section, SectionHeading } from "@/components/site/Section";
import {
  clinic,
  coreValues,
  doctorInfo,
  images,
  whyChooseUs,
} from "@/data/clinic";

const valueIcons: Record<string, { icon: typeof HeartPulse; note: string }> = {
  Integrity: { icon: ShieldCheck, note: "Honest advice, always." },
  Compassion: { icon: HeartPulse, note: "Patience before prescription." },
  Innovation: { icon: Lightbulb, note: "Modern tools, modern protocols." },
  Excellence: { icon: Trophy, note: "International clinical standards." },
  "Evidence-Based Medicine": { icon: Microscope, note: "Guideline-led decisions." },
  "Patient First": { icon: Users, note: "Your goals shape the plan." },
  "Continuous Learning": { icon: BookOpen, note: "Updated with global research." },
};

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Supratik Bhattacharya | SKN Diabetes & Endocrine Centre" },
      {
        name: "description",
        content:
          "Dr. Supratik Bhattacharya — MD, MRCP (UK), FACP (USA), FRCP (Edinburgh), FACE (USA), MS Endocrinology & Diabetes (London). Director of SKN Diabetes & Endocrine Centre, Naihati.",
      },
      { property: "og:title", content: "About Dr. Supratik Bhattacharya | SKN Diabetes & Endocrine Centre" },
      {
        property: "og:description",
        content: "Clinical philosophy, qualifications, mission, vision and core values of SKN Diabetes & Endocrine Centre.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Global endocrine standards, delivered in Naihati"
        subtitle={`${clinic.name} was founded to give patients in and around Naihati access to specialist diabetes and hormone care that meets international benchmarks.`}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <img
              src={images.doctor}
              alt={doctorInfo.name}
              className="w-full rounded-[2rem] object-cover shadow-lift"
              loading="lazy"
            />
          </div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="About the Doctor"
              title={`Meet ${doctorInfo.name}`}
              subtitle={doctorInfo.role}
            />
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                {doctorInfo.name} is a consultant endocrinologist and diabetologist whose training
                spans India, the United Kingdom and postgraduate accreditation in the United States.
                He holds an MD, membership of the Royal College of Physicians (UK), fellowship of
                the Royal College of Physicians of Edinburgh, and fellowships of the American
                College of Physicians and the American College of Endocrinology, alongside a
                master's degree in Endocrinology and Diabetes from London.
              </p>
              <p>
                His clinical work focuses on the full endocrine spectrum — type 1 and type 2
                diabetes, gestational diabetes, thyroid disease, PCOS, obesity, osteoporosis,
                pituitary and adrenal disorders, and paediatric growth problems. He is a strong
                advocate of measurement-led care: objective data from HbA1c, CGM, body composition,
                FibroScan and bone density testing guide every therapeutic decision.
              </p>
              <p>
                Patients consistently describe an unhurried consultation in which the condition, the
                reason for each medicine and the plan ahead are explained clearly. That clarity is
                deliberate — understanding is what sustains long-term control.
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                {
                  icon: HeartPulse,
                  title: "Clinical Philosophy",
                  text: "Treat the person, not the report. Plans are matched to age, work, family, diet and budget — never copied from a template.",
                },
                {
                  icon: Microscope,
                  title: "Our Approach",
                  text: "Diagnose precisely, measure objectively, prescribe by evidence, review on schedule and educate at every visit.",
                },
                {
                  icon: Sparkles,
                  title: "Modern Equipment",
                  text: "FibroScan, InBody composition analysis, BMD, hand grip assessment and neuropathy testing available in-house.",
                },
                {
                  icon: HeartPulse,
                  title: "Patient First",
                  text: "Complimentary assessments, transparent fees and teleconsultation follow-up keep quality care accessible.",
                },
              ].map((c) => (
                <div key={c.title} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                  <c.icon className="h-6 w-6 text-accent" />
                  <h3 className="mt-3 font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="relative overflow-hidden rounded-[2.5rem] gradient-royal p-8 text-primary-foreground shadow-lift sm:p-12">
          <span className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <span className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold tracking-[0.18em] uppercase">
              <Stethoscope className="h-3.5 w-3.5" /> Director's Desk
            </span>
            <h2 className="mt-5 text-[2rem] leading-[1.12] font-bold text-balance sm:text-[2.75rem]">
              From the Director's Desk
            </h2>
            <span className="mt-5 block h-1 w-20 rounded-full bg-white/60" />
            <Quote className="mt-8 h-9 w-9 opacity-70" />
            <div className="mt-4 max-w-4xl space-y-4 text-lg leading-relaxed opacity-95">
              <p>
                Diabetes and hormonal disorders are lifelong companions — they are not cured in a
                single visit, they are managed well over years. My aim at {clinic.shortName} is
                simple: give every patient the same standard of endocrine care that I trained under
                in the United Kingdom and the United States, right here in Naihati, and explain it
                in language that makes sense at home.
              </p>
              <p>
                We measure before we prescribe, we review on schedule, and we never rush a
                consultation. If you understand your condition, you will manage it better than any
                medicine alone can. That belief is the foundation of this centre.
              </p>
            </div>
            <p className="mt-8 text-base font-semibold">— {doctorInfo.name}</p>
            <p className="text-sm opacity-85">{doctorInfo.role}</p>
          </div>
        </div>

        <div className="mt-16">
          <SectionHeading eyebrow="Core Values" title="What guides every consultation" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((v, i) => {
              const meta = valueIcons[v] ?? { icon: BrainCircuit, note: "" };
              const Icon = meta.icon;
              return (
                <Reveal
                  key={v}
                  delay={i * 70}
                  className="group flex items-start gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl gradient-royal text-primary-foreground transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-lg font-semibold">{v}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                      {meta.note}
                    </span>
                  </span>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      <div className="bg-surface">
        <Section>
          <SectionHeading eyebrow="Why Choose SKN" title="Reasons patients keep coming back" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((w) => (
              <div key={w.title} className="glass-card rounded-3xl p-6">
                <h3 className="font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full gradient-royal px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift"
            >
              Visit the clinic <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Section>
      </div>
    </>
  );
}