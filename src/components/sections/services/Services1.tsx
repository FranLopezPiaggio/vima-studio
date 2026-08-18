import Link from "next/link";
import Image from "next/image";
import { getAssetPath } from "@/src/lib/configPaths";

export function Services() {
  return (
    <section className="relative w-full min-h-[calc(100vh)] flex items-center bg-brand-cream overflow-hidden">
      
      {/* 1. IMAGEN DE FONDO A LA DERECHA CON DEGRADADO SUAVE HACIA LA IZQUIERDA */}
      <div className="absolute inset-0 z-0 flex justify-end pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src={getAssetPath("/vima-studio-design-resources/bg-vima-colors.jpg")} // Reemplaza por la ruta de tu imagen
            alt="Vima Studio Hero Background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}