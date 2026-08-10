import { useEffect, useRef, useState } from "react";

export function RevealImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  delay = 0,
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  delay?: number;
  eager?: boolean;
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
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-[2rem] border border-border shadow-lift ${className}`}
      style={{
        clipPath: shown ? "inset(0 0 0% 0 round 2rem)" : "inset(0 0 100% 0 round 2rem)",
        transition: `clip-path 1s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        className={`h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06] ${
          shown ? "scale-100" : "scale-110"
        } ${imgClassName}`}
        style={{ transitionDelay: `${delay}ms` }}
      />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent" />
    </div>
  );
}