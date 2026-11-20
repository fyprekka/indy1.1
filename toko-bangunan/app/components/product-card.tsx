import { Button } from "~/components/ui/button";
import { rupiah, type Product } from "~/data/products";
import { site } from "~/lib/site";
import { waLink } from "~/lib/whatsapp";

export function ProductCard({ p }: { p: Product }) {
  const msg = `Halo ${site.name}, saya ingin menanyakan harga & stok: ${p.name}.`;
  
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-all hover:shadow-md">
      {/* Area Gambar / Gradient Placeholder */}
      <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-[#e2e8f0] via-[#f8fafc] to-[#fef3c7]">
        {/* Badge Terlaris / Baru */}
        {p.badge && (
          <div className="absolute left-4 top-4 rounded-full bg-[#f59e0b] px-3 py-1 text-xs font-semibold text-[#78350f] shadow-sm">
            {p.badge}
          </div>
        )}
        {/* Nanti jika ada gambar asli, bisa render <img> di sini */}
      </div>

      {/* Area Konten */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl font-bold text-[#0f172a]">
          {p.name}
        </h3>
        
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
          {p.desc}
        </p>

        {/* Footer: Harga & Tombol Pesan */}
        <div className="mt-6 flex items-center justify-between">
          {/* Harga */}
          <div className="text-lg font-bold text-[#1e3a8a]">
            {p.priceFrom ? (
              rupiah(p.priceFrom)
            ) : (
              <span className="text-sm font-medium text-slate-500">Tanya Harga</span>
            )}
          </div>

          {/* Tombol Pesan */}
          <Button 
            asChild 
            className="rounded-full bg-[#0a1a44] px-6 font-semibold text-white hover:bg-[#0a1a44]/90"
          >
            <a href={waLink(msg)} target="_blank" rel="noreferrer">
              Pesan
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}