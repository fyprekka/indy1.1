import { Link } from "react-router";
import { BadgeCheck, BrickWall, Droplets, Hammer, PaintBucket, Truck, Wallet, Wrench, Zap, ArrowRight, MessageCircle } from "lucide-react";
import type { Route } from "./+types/home";
import { Button } from "~/components/ui/button";
import { ProductCard } from "~/components/product-card";
import { categories, products } from "~/data/products";
import { site } from "~/lib/site";
import { waLink } from "~/lib/whatsapp";

export function meta({}: Route.MetaArgs) {
  return [
    { title: `${site.name} | Toko Bangunan Lengkap & Terpercaya` },
    { name: "description", content: site.description },
    { property: "og:title", content: site.name },
    { property: "og:description", content: site.description },
    {
      "script:ld+json": {
        "@context": "https://schema.org", "@type": "HardwareStore",
        name: site.name, url: site.url, telephone: site.phone, address: site.address, openingHours: "Mo-Sa 07:30-17:00",
      },
    },
  ];
}

const icons = { "semen-pasir": BrickWall, "besi-baja": Hammer, cat: PaintBucket, "pipa-air": Droplets, listrik: Zap, perkakas: Wrench };

const reasons = [
  { icon: BadgeCheck, title: "Barang asli, bergaransi", text: "Kami hanya menjual merek yang sudah dikenal tukang dan kontraktor." },
  { icon: Wallet, title: "Harga jelas", text: "Tanya lewat WhatsApp, dapat penawaran yang sama dengan yang tertulis." },
  { icon: Truck, title: "Antar ke lokasi", text: "Pengiriman ke rumah atau proyek, jadwal bisa diatur." },
];

export default function Home() {
  const featured = products.filter((p) => p.featured);
  return (
    <>
      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-14 sm:px-6 md:grid-cols-5 md:pt-20">
          <div className="md:col-span-3">
            <h1 className="text-4xl font-bold leading-[1.05] text-navy sm:text-5xl lg:text-6xl">
              Semua bahan untuk membangun, dalam satu toko.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              {site.name} melayani kebutuhan rumah dan proyek: dari semen dan besi sampai cat dan perkakas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-sun text-navy hover:bg-sun/90">
                <a href={waLink("Halo, saya ingin minta penawaran bahan bangunan.")} target="_blank" rel="noreferrer"><MessageCircle /> Minta penawaran</a>
              </Button>
              <Button asChild size="lg" variant="outline"><Link to="/produk">Lihat produk</Link></Button>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-3 md:col-span-2" aria-label="Kategori utama">
            {categories.slice(0, 4).map((c) => {
              const Icon = icons[c.id];
              return (
                <li key={c.id}>
                  <Link to={`/produk?kategori=${c.id}`} className="flex h-full flex-col gap-3 rounded-lg border bg-card p-4 transition-colors hover:border-primary">
                    <Icon className="size-6 text-primary" aria-hidden />
                    <span className="text-sm font-semibold">{c.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="tape" role="presentation" />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-3xl font-bold text-navy">Kategori produk</h2>
        <div className="mt-8 grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => {
            const Icon = icons[c.id];
            return (
              <Link key={c.id} to={`/produk?kategori=${c.id}`} className="group flex items-start gap-4 bg-card p-6 transition-colors hover:bg-accent">
                <Icon className="mt-1 size-6 shrink-0 text-primary" aria-hidden />
                <div>
                  <h3 className="text-lg font-semibold">{c.label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.note}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl font-bold text-navy">Produk yang sering dicari</h2>
            <Link to="/produk" className="hidden items-center gap-1 text-sm font-medium text-primary sm:flex">Semua produk <ArrowRight className="size-4" /></Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-3xl font-bold text-navy">Kenapa belanja di sini</h2>
        <ul className="mt-10 grid gap-10 md:grid-cols-3">
          {reasons.map(({ icon: Icon, title, text }) => (
            <li key={title}>
              <Icon className="size-7 text-primary" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-navy">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl text-3xl font-bold text-white">Punya daftar kebutuhan? Kirim saja, kami hitungkan.</h2>
          <Button asChild size="lg" className="bg-sun text-navy hover:bg-sun/90">
            <a href={waLink("Halo, ini daftar kebutuhan bahan bangunan saya:")} target="_blank" rel="noreferrer"><MessageCircle /> Kirim via WhatsApp</a>
          </Button>
        </div>
      </section>
    </>
  );
}
