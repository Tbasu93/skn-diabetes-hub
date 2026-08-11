import { Award, ExternalLink } from "lucide-react";
import { Reveal, Section } from "@/components/site/Section";

const AACE_PROFILE_URL =
  "https://www.aace.com/find-an-endo/NAIHATI/Supratik-Bhattacharyya/0010b00002U5D0SAAV";

export function CredentialHighlight() {
  return (
    <Section>
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] gradient-royal p-8 text-primary-foreground shadow-lift sm:p-12">
          <span className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <span className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative flex flex-col gap-8 sm:flex-row sm:items-start">
            <div className="grid h-20 w-20 shrink-0 place-items-center rounded-3xl border border-white/20 bg-white/15 shadow-lg">
              <Award className="h-9 w-9" />
            </div>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold tracking-[0.18em] uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                AACE Verified Credential
              </span>
              <h3 className="mt-4 text-[1.65rem] leading-tight font-bold text-balance sm:text-3xl">
                Fellow of the American Association of Clinical Endocrinology (FACE)
              </h3>
              <p className="mt-3 max-w-3xl text-base leading-relaxed opacity-95">
                Dr. Supratik Bhattacharya is recognized as a Fellow of the American Association of
                Clinical Endocrinology, reflecting professional achievement in clinical endocrinology.
              </p>
              <a
                href={AACE_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white/20"
              >
                View AACE Profile <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
