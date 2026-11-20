import { Link } from "react-router";
import { Clock, MapPin, Phone } from "lucide-react";
import { nav, site } from "~/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold text-white">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">{site.description}</p>
        </div>
        <ul className="space-y-3 text-sm">
          <li className="flex gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-sun" />{site.address}</li>
          <li className="flex gap-3"><Clock className="mt-0.5 size-4 shrink-0 text-sun" />{site.hours}</li>
          <li className="flex gap-3"><Phone className="mt-0.5 size-4 shrink-0 text-sun" />{site.phone}</li>
        </ul>
        <nav className="flex flex-col gap-2 text-sm" aria-label="Footer">
          {nav.map((n) => <Link key={n.to} to={n.to} className="hover:text-sun">{n.label}</Link>)}
        </nav>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {site.name}. Seluruh hak cipta dilindungi.
      </div>
    </footer>
  );
}
