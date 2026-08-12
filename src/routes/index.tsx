import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  CalendarClock,
  CalendarHeart,
  CheckCircle2,
  Clock,
  Compass,
  FlaskConical,
  MapPin,
  Phone,
  Quote,
  Salad,
  ShieldCheck,
  Star,
  Stethoscope,
  Target,
} from "lucide-react";
import { Reveal, Section, SectionHeading } from "@/components/site/Section";
import { RevealImage } from "@/components/site/RevealImage";
import { CredentialHighlight } from "@/components/site/CredentialHighlight";
import { sectionAlt, sectionImages } from "@/data/sectionImages";
import { CountUp } from "@/components/site/CountUp";
import {
  clinic,
  complimentaryTests,
  doctorInfo,
  faqs,
  fees,
  images,
  mission,
  patientJourney,
  stats,
  testimonials,
  testsNote,
  timingNote,
  timings,
  vision,
  whyChooseUs,
} from "@/data/clinic";
import { pillars } from "@/data/pillars";
import { articles } from "@/data/articles";
import { heroAlt, heroImages } from "@/data/heroImages";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";

const homePillarIcon = {
  treatment: Stethoscope,
  assessments: FlaskConical,
  nutrition: Salad,
  camps: CalendarHeart,
} as const;

const homePillarImage = {
  treatment: sectionImages.treatment,
  assessments: sectionImages.assessments,
  nutrition: sectionImages.nutrition,
  camps: sectionImages.camps,
} as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SKN Diabetes & Endocrine Centre | Naihati, Kolkata" },
      {
        name: "description",
        content:
          "Diabetes, thyroid, PCOS, obesity and hormone care in Naihati by Dr. Supratik Bhattacharya — MRCP (UK), FRCP (Edin), FACP & FACE (USA). Call +91 9830585954.",
      },
      { property: "og:title", content: "SKN Diabetes & Endocrine Centre | Naihati, Kolkata" },
      {
        property: "og:description",
        content:
          "Specialised diabetes and endocrinology care with 11 complimentary health assessments. Thursday & Friday clinic.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <QuickFacts />
      <DoctorStrip />
      <CredentialHighlight />
      <WhyUs />
      <MissionVision />
      <ServicesPreview />
      <Tests />
      <Journey />
      <Stats />
      <Testimonials />
      <FaqPreview />
      <LatestArticles />
      <FinalCta />
    </>
  );
}

function Hero() {
  return (
    <div className="relative isolate overflow-hidden gradient-soft">
      <HeroBackdrop image={heroImages.home} alt={heroAlt.home} />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-xs font-semibold tracking-widest text-primary uppercase shadow-soft">
            <ShieldCheck className="h-3.5 w-3.5" /> Internationally Qualified Endocrinologist
          </span>
          <h1 className="mt-6 text-4xl leading-[1.08] font-semibold text-balance sm:text-5xl lg:text-6xl">
            Precision care for <span className="text-gradient">diabetes, thyroid</span> and hormonal
            health
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {clinic.name} in Naihati brings global endocrine expertise, modern diagnostics and
            eleven complimentary health assessments to every patient — under the direction of{" "}
            {doctorInfo.name}.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${clinic.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-full gradient-royal px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:scale-[1.03]"
            >
              <CalendarClock className="h-4 w-4" /> Book Appointment
            </a>
            <a
              href={`tel:${clinic.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground shadow-soft transition-colors hover:border-primary hover:text-primary"
            >
              <Phone className="h-4 w-4" /> {clinic.phone}
            </a>
            <a
              href={clinic.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground shadow-soft transition-colors hover:border-primary hover:text-primary"
            >
              <MapPin className="h-4 w-4" /> Google Map
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
            {timings.map((t) => (
              <div key={t.day} className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" />
                <span className="font-semibold text-foreground">{t.day}</span> {t.hours}
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-rise">
          <div className="glass-card overflow-hidden rounded-[2rem] p-3">
            <img
              src={images.clinic}
              alt={`${clinic.name} chamber entrance in Naihati`}
              className="aspect-4/5 w-full rounded-3xl object-cover"
              loading="eager"
            />
          </div>
          <div className="glass-card animate-float absolute -bottom-6 -left-4 w-56 rounded-3xl p-4 sm:w-64">
            <img
              src={images.doctor}
              alt={`${doctorInfo.name}, Consultant Endocrinologist and Diabetologist`}
              className="h-28 w-full rounded-2xl object-cover object-top"
              loading="lazy"
            />
            <p className="mt-2 text-xs font-medium text-muted-foreground">
              {doctorInfo.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuickFacts() {
  const facts = [
    { icon: Stethoscope, label: "Specialty", value: "Diabetes & Endocrinology" },
    { icon: CalendarClock, label: "Clinic Days", value: "Thursday & Friday" },
    { icon: Activity, label: "Complimentary Tests", value: "11 Assessments" },
    { icon: MapPin, label: "Location", value: "Naihati, Kolkata" },
  ];
  return (
    <Section className="!py-10">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((f, i) => (
          <Reveal
            key={f.label}
            delay={i * 80}
            className="group rounded-3xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift"
          >
            <f.icon className="h-6 w-6 text-accent transition-transform group-hover:scale-110" />
            <p className="mt-3 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              {f.label}
            </p>
            <p className="mt-1 font-semibold">{f.value}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function DoctorStrip() {
  return (
    <Section>
      <div className="grid items-center gap-10 rounded-[2.5rem] border border-border bg-surface p-6 shadow-soft sm:p-10 lg:grid-cols-[0.8fr_1.2fr]">
        <img
          src={images.doctor}
          alt={doctorInfo.name}
          className="aspect-square w-full rounded-[2rem] object-cover shadow-lift"
          loading="lazy"
        />
        <div>
          <SectionHeading
            align="left"
            eyebrow="About the Director"
            title={doctorInfo.name}
            subtitle={doctorInfo.role}
          />
          <div className="mt-6 flex flex-wrap gap-2">
            {doctorInfo.qualifications.map((q) => (
              <span
                key={q}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-primary shadow-soft"
              >
                {q}
              </span>
            ))}
          </div>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Trained and accredited across the United Kingdom, Edinburgh and the United States,{" "}
            {doctorInfo.name} combines international clinical standards with an unhurried,
            explanation-first consultation style. Every plan is built on evidence, measured with
            objective testing, and adapted to the patient's real life.
          </p>
          <Link
            to="/about"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            Read full profile <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Section>
  );
}

function WhyUs() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Why Choose SKN"
        title="A centre built around one specialty, done exceptionally well"
        subtitle="Everything here exists to make endocrine care more accurate, more measurable and easier to follow."
      />
      <RevealImage
        src={sectionImages.whyUs}
        alt={sectionAlt.whyUs}
        className="mt-10 aspect-21/9 w-full"
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {whyChooseUs.map((w, i) => (
          <Reveal
            key={w.title}
            delay={i * 70}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lift"
          >
            <span className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-accent/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
            <div className="grid h-11 w-11 place-items-center rounded-2xl gradient-royal text-primary-foreground transition-transform group-hover:scale-110">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{w.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function MissionVision() {
  return (
    <Section>
      <div className="grid items-stretch gap-5 lg:grid-cols-[1fr_1fr]">
        <RevealImage
          src={sectionImages.treatment}
          alt={sectionAlt.treatment}
          className="min-h-72 w-full lg:row-span-2"
        />
        {[
          { icon: Target, title: "Our Mission", text: mission },
          { icon: Compass, title: "Our Vision", text: vision },
        ].map((m) => (
          <div key={m.title} className="rounded-[2rem] gradient-royal p-8 text-primary-foreground shadow-lift">
            <m.icon className="h-8 w-8 opacity-90" />
            <h3 className="mt-4 text-2xl font-semibold">{m.title}</h3>
            <p className="mt-3 leading-relaxed opacity-95">{m.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ServicesPreview() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Our Services"
        title="Four ways SKN cares for you"
        subtitle="Specialist treatment, free health assessments, expert nutrition counselling and free community health camps."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, i) => {
          const Icon = homePillarIcon[p.id];
          return (
            <Reveal key={p.id} delay={i * 90} className="h-full">
              <Link
                to="/services"
                search={{ p: p.id }}
                className="group shadow-soft hover:shadow-lift relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40"
              >
                <span className="pointer-events-none absolute -top-16 -right-12 h-44 w-44 rounded-full bg-accent/20 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
                <span className="relative -mx-6 -mt-6 mb-5 block overflow-hidden">
                  <img
                    src={homePillarImage[p.id]}
                    alt={p.title}
                    loading="lazy"
                    className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </span>
                <span className="bg-secondary text-primary relative grid h-14 w-14 place-items-center rounded-2xl transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="relative mt-5 text-lg font-bold group-hover:text-primary">
                  {p.label}
                </h3>
                <p className="relative mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.tagline}
                </p>
                <span className="relative mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  View details
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>
      <div className="mt-8 text-center">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold shadow-soft transition-colors hover:border-primary hover:text-primary"
        >
          Explore all services <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}

function Tests() {
  return (
    <div className="bg-surface">
      <Section>
        <SectionHeading
          eyebrow="Complimentary"
          title="Eleven health assessments, free of cost"
          subtitle={testsNote}
        />
        <RevealImage
          src={sectionImages.assessments}
          alt={sectionAlt.assessments}
          className="mt-10 aspect-21/9 w-full"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {complimentaryTests.map((t) => (
            <div
              key={t.name}
              className="glass-card rounded-3xl p-5 transition-transform hover:-translate-y-1"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-primary">
                <Activity className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold">{t.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

function Journey() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Patient Journey"
        title="What happens from your first call"
        subtitle={timingNote}
      />
      <RevealImage
        src={sectionImages.journey}
        alt={sectionAlt.journey}
        className="mt-10 aspect-21/9 w-full"
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {patientJourney.map((p, i) => (
          <Reveal
            key={p.step}
            delay={i * 70}
            className="relative rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
          >
            <span className="text-5xl font-bold text-gradient">{p.step}</span>
            <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
          </Reveal>
        ))}
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
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
    </Section>
  );
}

function Stats() {
  return (
    <div className="gradient-royal text-primary-foreground">
      <Section className="!py-14">
        <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-semibold sm:text-5xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm tracking-wide opacity-90">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

function Testimonials() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Patient Voices"
        title="Trusted by families across Naihati and beyond"
      />
      <RevealImage
        src={sectionImages.patients}
        alt={sectionAlt.patients}
        className="mt-10 aspect-21/9 w-full"
      />
      <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="w-[85vw] shrink-0 snap-start rounded-3xl border border-border bg-card p-6 shadow-soft sm:w-96"
          >
            <Quote className="h-7 w-7 text-secondary" />
            <div className="mt-3 flex gap-0.5">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">
              “{t.review}”
            </blockquote>
            <figcaption className="mt-4 text-sm font-semibold">
              {t.name}
              <span className="ml-2 font-normal text-muted-foreground">{t.date}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

function FaqPreview() {
  return (
    <div className="bg-surface">
      <Section>
        <SectionHeading eyebrow="FAQ" title="Questions patients ask us most" />
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <RevealImage
            src={sectionImages.faq}
            alt={sectionAlt.faq}
            className="aspect-4/3 w-full lg:sticky lg:top-28"
          />
          <div className="space-y-3">
          {faqs.slice(0, 6).map((f) => (
            <details
              key={f.q}
              className="group rounded-3xl border border-border bg-card p-5 shadow-soft"
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
        <div className="mt-8 text-center">
          <Link to="/faq" className="text-sm font-semibold text-primary hover:underline">
            See all frequently asked questions →
          </Link>
        </div>
      </Section>
    </div>
  );
}

function LatestArticles() {
  return (
    <Section>
      <SectionHeading eyebrow="Health Library" title="Latest articles from the centre" />
      <RevealImage
        src={sectionImages.articles}
        alt={sectionAlt.articles}
        className="mt-10 aspect-21/9 w-full"
      />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {articles.slice(0, 3).map((a) => (
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
            <p className="mt-4 text-xs text-muted-foreground">{a.readMins} min read</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function FinalCta() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-[2.5rem] gradient-royal p-10 text-center text-primary-foreground shadow-lift sm:p-16">
        <img
          src={sectionImages.cta}
          alt={sectionAlt.cta}
          loading="lazy"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-luminosity animate-float"
        />
        <div className="absolute -top-20 -right-10 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
        <h2 className="relative text-3xl font-semibold text-balance sm:text-4xl">
          Take control of your diabetes and hormone health
        </h2>
        <p className="relative mx-auto mt-4 max-w-2xl opacity-95">
          Appointments are booked by phone or in person only. Call today to reserve your Thursday or
          Friday slot.
        </p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`tel:${clinic.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-full bg-card px-6 py-3.5 text-sm font-semibold text-primary shadow-lift transition-transform hover:scale-[1.03]"
          >
            <Phone className="h-4 w-4" /> {clinic.phone}
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
          >
            Contact & Directions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
