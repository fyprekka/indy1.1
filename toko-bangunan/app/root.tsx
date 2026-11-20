import { Links, Meta, Outlet, Scripts, ScrollRestoration, isRouteErrorResponse, Link } from "react-router";
import type { Route } from "./+types/root";
import "./app.css";
import { SiteHeader } from "~/components/site-header";
import { SiteFooter } from "~/components/site-footer";
import { WhatsAppFab } from "~/components/whatsapp-fab";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <SiteHeader />
      <main><Outlet /></main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const notFound = isRouteErrorResponse(error) && error.status === 404;
  return (
    <main className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-4xl font-bold text-navy">{notFound ? "Halaman tidak ditemukan" : "Terjadi kesalahan"}</h1>
      <p className="mt-3 text-muted-foreground">Coba kembali ke beranda atau lihat daftar produk kami.</p>
      <Link to="/" className="mt-6 inline-block font-medium text-primary underline">Kembali ke beranda</Link>
    </main>
  );
}
