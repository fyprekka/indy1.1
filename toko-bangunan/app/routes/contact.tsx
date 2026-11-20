import { useState } from "react";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import type { Route } from "./+types/contact";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { site } from "~/lib/site";
import { waLink } from "~/lib/whatsapp";

export function meta({}: Route.MetaArgs) {
  return [{ title: `Kontak & Lokasi | ${site.name}` }, { name: "description", content: `Alamat, jam buka, dan kontak ${site.name}.` }];
}

export default function Contact() {
  const [name, setName] = useState("");
  const [need, setNeed] = useState("");
  const href = waLink(`Halo ${site.name}, saya ${name || "[nama]"}.\nKebutuhan: ${need || "[tulis kebutuhan]"}`);

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 md:grid-cols-2">
      <div>
        <h1 className="text-4xl font-bold text-navy">Kontak & lokasi</h1>
        <ul className="mt-8 space-y-4">
          <li className="flex gap-3"><MapPin className="mt-1 size-5 shrink-0 text-primary" />{site.address}</li>
          <li className="flex gap-3"><Clock className="mt-1 size-5 shrink-0 text-primary" />{site.hours}</li>
          <li className="flex gap-3"><Phone className="mt-1 size-5 shrink-0 text-primary" />{site.phone}</li>
        </ul>
        {site.mapsEmbed ? (
          <iframe title="Lokasi toko" src={site.mapsEmbed} loading="lazy" className="mt-8 aspect-video w-full rounded-xl border" />
        ) : (
          <div className="mt-8 grid aspect-video place-items-center rounded-xl border bg-secondary text-sm text-muted-foreground">Peta Google Maps akan tampil di sini</div>
        )}
      </div>

      <div className="rounded-xl border bg-card p-6">
        <h2 className="text-xl font-bold text-navy">Kirim kebutuhan Anda</h2>
        <p className="mt-1 text-sm text-muted-foreground">Pesan akan terbuka di WhatsApp, siap Anda kirim.</p>
        <div className="mt-6 space-y-4">
          <div className="space-y-2"><Label htmlFor="name">Nama</Label><Input id="name" value={name} onChange={(e) => setName(e.target.value)} /></div>
          <div className="space-y-2"><Label htmlFor="need">Kebutuhan</Label><Textarea id="need" rows={5} placeholder="Contoh: semen 20 sak, besi 10 mm 30 batang, antar ke ..." value={need} onChange={(e) => setNeed(e.target.value)} /></div>
          <Button asChild size="lg" className="w-full bg-sun text-navy hover:bg-sun/90">
            <a href={href} target="_blank" rel="noreferrer"><MessageCircle /> Lanjut ke WhatsApp</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
