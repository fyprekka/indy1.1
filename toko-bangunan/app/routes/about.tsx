import type { Route } from "./+types/about";
import { site } from "~/lib/site";

export function meta({}: Route.MetaArgs) {
  return [{ title: `Tentang Kami | ${site.name}` }, { name: "description", content: `Kenali ${site.name}, toko bangunan yang melayani kebutuhan rumah dan proyek.` }];
}

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-4xl font-bold text-navy">Tentang {site.name}</h1>
      <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
        <p>[Ceritakan awal berdirinya toko: siapa pendirinya, kapan buka, dan kenapa.]</p>
        <p>[Jelaskan apa yang membedakan toko Anda: stok, harga, pelayanan, atau pengiriman.]</p>
      </div>
      <h2 className="mt-12 text-2xl font-bold text-navy">Yang kami pegang</h2>
      <dl className="mt-4 divide-y border-y">
        {[
          ["Jujur soal harga", "Harga dan stok disampaikan apa adanya."],
          ["Barang sesuai pesanan", "Kami cek ulang sebelum barang diantar."],
          ["Mudah dihubungi", "Balasan cepat lewat WhatsApp pada jam kerja."],
        ].map(([t, d]) => (
          <div key={t} className="grid gap-1 py-4 sm:grid-cols-3"><dt className="font-semibold">{t}</dt><dd className="text-muted-foreground sm:col-span-2">{d}</dd></div>
        ))}
      </dl>
    </div>
  );
}
