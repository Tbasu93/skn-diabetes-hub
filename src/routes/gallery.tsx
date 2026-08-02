import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { PageHero, Section } from "@/components/site/Section";
import { clinic, doctorInfo, images } from "@/data/clinic";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | SKN Diabetes & Endocrine Centre, Naihati" },
      {
        name: "description",
        content:
          "Photographs of the SKN Diabetes & Endocrine Centre chamber in Naihati, Dr. Supratik Bhattacharya, health camps and patient awareness programmes.",
      },
      { property: "og:title", content: "Gallery | SKN Diabetes & Endocrine Centre" },
      { property: "og:description", content: "Inside our Naihati chamber, camps and awareness events." },
    ],
  }),
  component: Gallery;
});

type Item = { src: string; alt: string; category: string };

const items: Item[] = [
  { src: images.clinic, alt: `${clinic.name} chamber entrance in Naihati`, category: "Clinic" },
  { src: images.doctor, alt: doctorInfo.name, category: "Doctor" },
  { src: images.clinic, alt: "Reception and waiting area of the centre", category: "Clinic" },
  { src: images.doctor, alt: "Consultation with the endocrinologist", category: "Doctor" },
  { src: images.clinic, alt: "Inauguration day of the centre", category: "Events" },
  { src: images.clinic, alt: "Community diabetes screening camp", category: "Health Camps" },
  { src: images.doctor, alt: "Patient awareness session on diabetes", category: "Awareness" },
  { src: images.clinic, alt: "World Diabetes Day programme", category: "Events" },
];

const categories = ["All", ...Array.from(new Set(items.map((i) => i.category)))];

function Gallery() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<Item | null>(null);
  const shown = filter === "All" ? items : items.filter((i) => i.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Inside the centre"
        subtitle="Our chamber, our consultant, and the camps and awareness programmes we run for the community."
      />
      <Section>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                filter === c
                  ? "gradient-royal text-primary-foreground shadow-soft"
                  : "border border-border bg-card text-muted-foreground hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((item, i) => (
            <button
              key={`${item.alt}-${i}`}
              onClick={() => setActive(item)}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <p className="p-4 text-left text-sm font-medium">{item.alt}</p>
            </button>
          ))}
        </div>
      </Section>

      {active && (
        <div
          className="fixed inset-0 z-60 grid place-items-center bg-foreground/80 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <button
            aria-label="Close"
            className="absolute top-5 right-5 rounded-full bg-card p-2 text-foreground"
            onClick={() => setActive(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-w-3xl">
            <img src={active.src} alt={active.alt} className="w-full rounded-3xl object-contain" />
            <figcaption className="mt-3 text-center text-sm text-background">{active.alt}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}