// Data placeholder. Nanti bisa diganti ke CMS/JSON/Google Sheet tanpa mengubah komponen.
export type Category = "semen-pasir" | "besi-baja" | "cat" | "pipa-air" | "listrik" | "perkakas";

export const categories: { id: Category; label: string; note: string }[] = [
  { id: "semen-pasir", label: "Semen & Pasir", note: "Semen, pasir, batu, bata" },
  { id: "besi-baja", label: "Besi & Baja", note: "Besi beton, wiremesh, baja ringan" },
  { id: "cat", label: "Cat & Finishing", note: "Cat tembok, kayu, besi, plamir" },
  { id: "pipa-air", label: "Pipa & Air", note: "Pipa PVC, kran, tandon, fitting" },
  { id: "listrik", label: "Listrik", note: "Kabel, saklar, lampu, MCB" },
  { id: "perkakas", label: "Perkakas", note: "Palu, bor, gerinda, meteran" },
];

export type Product = {
  id: string; name: string; category: Category; unit: string; priceFrom?: number; desc: string; featured?: boolean;
};

export const products: Product[] = [
  { id: "semen-50kg", name: "Semen Portland 50 kg", category: "semen-pasir", unit: "sak", priceFrom: 65000, desc: "Untuk pondasi, plester, dan cor.", featured: true },
  { id: "pasir-pasang", name: "Pasir Pasang", category: "semen-pasir", unit: "m³", desc: "Pasir halus untuk pasangan bata dan plester." },
  { id: "besi-10", name: "Besi Beton Ø10 mm", category: "besi-baja", unit: "batang", priceFrom: 80000, desc: "Besi ulir panjang 12 m untuk kolom dan balok.", featured: true },
  { id: "baja-ringan", name: "Baja Ringan C75", category: "besi-baja", unit: "batang", desc: "Rangka atap ringan, tahan karat." },
  { id: "cat-tembok", name: "Cat Tembok Interior 20 kg", category: "cat", unit: "pail", desc: "Warna bisa dipesan sesuai contoh.", featured: true },
  { id: "plamir", name: "Plamir Tembok", category: "cat", unit: "kg", desc: "Meratakan permukaan sebelum dicat." },
  { id: "pipa-pvc", name: "Pipa PVC 3/4\"", category: "pipa-air", unit: "batang", desc: "Pipa air bersih panjang 4 m.", featured: true },
  { id: "kran", name: "Kran Air Kuningan", category: "pipa-air", unit: "pcs", desc: "Kuat dan awet untuk taman maupun kamar mandi." },
  { id: "kabel", name: "Kabel NYM 2x1,5 mm", category: "listrik", unit: "roll", desc: "Kabel instalasi rumah, 50 m." },
  { id: "mcb", name: "MCB 10A", category: "listrik", unit: "pcs", desc: "Pengaman arus untuk panel listrik." },
  { id: "bor", name: "Bor Listrik 13 mm", category: "perkakas", unit: "unit", desc: "Untuk kayu, besi, dan beton ringan." },
  { id: "meteran", name: "Meteran 5 m", category: "perkakas", unit: "pcs", desc: "Pita ukur dengan kunci." },
];

export const rupiah = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);

// Di dalam app/data/products.ts
export interface products {
  id: string;
  name: string;
  desc: string;
  priceFrom?: number; // Sesuaikan dengan tipe Anda
  unit?: string;
  badge?: "Terlaris" | "Baru"; // <-- Tambahkan baris ini
}