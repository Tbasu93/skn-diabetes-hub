/**
 * Premium, calm hero backdrop.
 * Layers: photographic/abstract medical visual -> soft white gradient breathing zone
 * -> gentle light blooms -> fine scientific grid. Text always stays the focal point.
 */
export function HeroBackdrop({
  image,
  alt,
  align = "right",
}: {
  image: string;
  alt?: string | undefined;
  align?: "right" | "center";
}) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden={!alt}>
      <img
        src={image}
        alt={alt ?? ""}
        className={`animate-hero-pan absolute inset-0 h-full w-full object-cover ${
          align === "right" ? "object-right sm:object-center" : "object-center"
        }`}
      />

      {/* Breathing zone behind the text — stronger on mobile where the visual sits under it */}
      <div className="absolute inset-0 bg-background/70 sm:hidden" />
      <div className="absolute inset-0 hidden bg-linear-to-r from-background via-background/85 to-background/25 sm:block" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background to-transparent" />

      {/* Soft light blooms */}
      <div className="animate-hero-drift absolute -top-24 right-[8%] h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
      <div className="animate-hero-shimmer absolute bottom-[-6rem] left-[12%] h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      {/* Fine scientific grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          color: "var(--primary)",
          maskImage: "radial-gradient(ellipse at 70% 40%, black, transparent 72%)",
        }}
      />
    </div>
  );
}