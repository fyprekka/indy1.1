import { Link, NavLink } from "react-router";
import { Hammer, Menu, MessageCircle } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "~/components/ui/sheet";
import { nav, site } from "~/lib/site";
import { waLink } from "~/lib/whatsapp";

const linkCls = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-medium transition-colors hover:text-primary ${isActive ? "text-primary" : "text-foreground/70"}`;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5">
          {/* Ganti dengan logo asli: <img src="/logo.svg" alt={site.name} className="h-9" /> */}
          <span className="grid size-9 place-items-center rounded-md bg-primary text-sun">
            <Hammer className="size-5" aria-hidden />
          </span>
          <span className="font-display text-base font-bold leading-tight text-navy sm:text-lg">{site.shortName}</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Utama">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === "/"} className={linkCls}>{n.label}</NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden bg-sun text-navy hover:bg-sun/90 sm:inline-flex">
            <a href={waLink("Halo, saya ingin bertanya tentang bahan bangunan.")} target="_blank" rel="noreferrer">
              <MessageCircle /> Chat WhatsApp
            </a>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Buka menu"><Menu /></Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <nav className="mt-10 flex flex-col gap-1 px-4" aria-label="Seluler">
                {nav.map((n) => (
                  <NavLink key={n.to} to={n.to} end={n.to === "/"} className={({ isActive }) =>
                    `rounded-md px-3 py-3 text-base font-medium ${isActive ? "bg-accent text-primary" : "text-foreground/80"}`}>
                    {n.label}
                  </NavLink>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
