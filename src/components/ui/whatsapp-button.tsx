import Link from "next/link";
import Image from "next/image";
import { getAssetPath } from "@/src/lib/configPaths";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export function WhatsAppButton({
  phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || process.env.WPNumber,
  message = "¡Hola! Quisiera realizar una consulta.",
}: WhatsAppButtonProps) {
  // Si no hay número configurado en .env, no renderizamos el botón para evitar un link roto
  if (!phoneNumber) {
    return null;
  }

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-3 hover:scale-135 active:scale-95 transition-all duration-200 group"
    >
      <Image
        src={getAssetPath("/img/svg/whatsapp-svgrepo-com.svg")}
        alt="WhatsApp Icon"
        width={32}
        height={32}
        className="w-8 h-8 object-contain"
        priority
      />
    </Link>
  );
}