import { useSearchParams } from "react-router";
import type { Route } from "./+types/products";
import { ProductCard } from "~/components/product-card";
import { categories, products } from "~/data/products";
import { site } from "~/lib/site";

export function meta({}: Route.MetaArgs) {
  return [
    { title: `Produk Bahan Bangunan | ${site.name}` },
    { name: "description", content: "Katalog semen, besi, cat, pipa, listrik, dan perkakas. Tanya harga dan stok langsung via WhatsApp." },
  ];
}

export default function Products() {
  const [params, setParams] = useSearchParams();
  const active = params.get("kategori");
  const list = active ? products.filter((p) => p.category === active) : products;
  const pill = (on: boolean) =>
    `rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${on ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:border-primary"}`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="text-4xl font-bold text-navy">Produk</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">Harga bisa berubah mengikuti pasar. Tanya langsung untuk harga dan stok terbaru.</p>

      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter kategori">
        <button className={pill(!active)} onClick={() => setParams({})}>Semua</button>
        {categories.map((c) => (
          <button key={c.id} className={pill(active === c.id)} onClick={() => setParams({ kategori: c.id })}>{c.label}</button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((p) => <ProductCard key={p.id} p={p} />)}
      </div>
      {list.length === 0 && <p className="mt-10 text-muted-foreground">Belum ada produk di kategori ini.</p>}
    </div>
  );
}
