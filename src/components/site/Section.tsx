import type { ReactNode } from "react";

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
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold tracking-widest text-primary uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-semibold text-balance sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-base leading-relaxed text-muted-foreground">{subtitle}</p>}
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
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="gradient-soft border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <span className="inline-block rounded-full bg-card px-3 py-1 text-xs font-semibold tracking-widest text-primary uppercase shadow-soft">
          {eyebrow}
        </span>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold text-balance sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  );
}