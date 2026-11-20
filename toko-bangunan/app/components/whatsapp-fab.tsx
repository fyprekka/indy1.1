import { MessageCircle } from "lucide-react";
import { waLink } from "~/lib/whatsapp";

export function WhatsAppFab() {
  return (
    <a
      href={waLink("Halo, saya ingin bertanya tentang bahan bangunan.")}
      target="_blank" rel="noreferrer" aria-label="Chat via WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <MessageCircle className="size-7" />
    </a>
  );
}
