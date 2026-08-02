import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { clinic, doctorInfo, images, timings } from "@/data/clinic";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={images.logo} alt={`${clinic.name} logo`} className="h-14 w-auto" />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {clinic.type} in Naihati, directed by {doctorInfo.name} — bringing internationally
            qualified endocrine care close to home.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide text-foreground uppercase">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              ["/about", "About the Doctor"],
              ["/services", "Services"],
              ["/gallery", "Gallery"],
              ["/articles", "Health Articles"],
              ["/faq", "FAQ"],
              ["/contact", "Contact & Appointment"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="transition-colors hover:text-primary">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide text-foreground uppercase">Clinic Hours</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {timings.map((t) => (
              <li key={t.day} className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" />
                <span className="font-medium text-foreground">{t.day}</span> {t.hours}
              </li>
            ))}
            <li className="pt-1 text-xs">Closed on all other days. Phone booking only.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide text-foreground uppercase">Reach Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>
                {clinic.address}
                <br />
                {clinic.landmark}
              </span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={`tel:${clinic.phoneRaw}`} className="hover:text-primary">
                {clinic.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${clinic.email}`} className="hover:text-primary">
                {clinic.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {clinic.name}. All rights reserved.</p>
          <p>Information on this site is educational and not a substitute for medical consultation.</p>
        </div>
      </div>
    </footer>
  );
}