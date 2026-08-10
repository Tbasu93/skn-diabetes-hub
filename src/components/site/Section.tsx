import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-bold tracking-[0.18em] text-primary uppercase shadow-soft">
          <span className="h-1.5 w-1.5 rounded-full gradient-royal" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-5 text-[2rem] leading-[1.1] font-bold text-balance sm:text-[2.75rem] lg:text-5xl">
        {title}
      </h2>
      <span
        className={`mt-5 block h-1 w-20 rounded-full gradient-royal ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 ${className}`}>
      {children}
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <div className="gradient-soft border-b border-border">
      <div
        className={`mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 ${
          image ? "lg:grid-cols-[1.05fr_0.95fr]" : ""
        }`}
      >
        <div className="animate-rise">
        <span className="inline-block rounded-full bg-card px-3 py-1 text-xs font-semibold tracking-widest text-primary uppercase shadow-soft">
          {eyebrow}
        </span>
      <h1 className="mt-5 max-w-4xl text-[2.4rem] leading-[1.06] font-bold text-balance sm:text-6xl">
        {title}
      </h1>
      <span className="mt-6 block h-1 w-24 rounded-full gradient-royal" />
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{subtitle}</p>
        </div>
        {image && (
          <RevealImage
            src={image}
            alt={imageAlt ?? title}
            eager
            className="aspect-16/10 w-full"
          />
        )}
      </div>
    </div>
  );
}