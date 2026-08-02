import { Sparkles } from "lucide-react";
import { tips } from "@/data/clinic";

export function TipsTicker() {
  const row = [...tips, ...tips];
  return (
    <div className="relative overflow-hidden gradient-royal py-2.5 text-primary-foreground">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex items-center gap-2 bg-primary/90 px-4 text-xs font-semibold tracking-wide uppercase backdrop-blur-sm">
        <Sparkles className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Tip of the Day</span>
      </div>
      <div className="flex w-max animate-marquee gap-10 pl-40 text-sm">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-3 whitespace-nowrap opacity-95">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground/70" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}