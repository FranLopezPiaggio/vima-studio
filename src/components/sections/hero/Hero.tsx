import Link from "next/link";
import Image from "next/image";
import { getAssetPath } from "@/src/lib/configPaths";

export function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center bg-brand-cream overflow-hidden">
      
      {/* 1. IMAGEN DE FONDO A LA DERECHA CON DEGRADADO SUAVE HACIA LA IZQUIERDA */}
      <div className="absolute inset-0 z-0 flex justify-end pointer-events-none">
        <div className="relative w-full lg:w-3/5 h-full">
          <Image
            src={getAssetPath("/vima-studio-design-resources/bg-vmstudio.png")} // Reemplaza por la ruta de tu imagen
            alt="Vima Studio Hero Background"
            fill
            priority
            className="object-cover object-center"
          />
          
          {/* MÁSCARA / DEGRADADO: Se funde desde Crema Warm (izquierda) hacia transparente (derecha) */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-cream via-brand-cream/80 to-transparent lg:via-brand-cream/40" />
          
          {/* Sombra de apoyo inferior/superior opcional para integración orgánica */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-cream via-transparent to-transparent opacity-60" />
        </div>
      </div>

      {/* 2. CONTENIDO PRINCIPAL (Ocupa aprox. el 40-50% en pantallas grandes) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full flex flex-rows">
        <div className="max-w-xl lg:max-w-[45vw] space-y-6">
          
          {/* Eyebrow / Tag superior opcional */}
          <span className="inline-block text-xs font-display font-semibold tracking-widest text-brand-coral uppercase">
            Estudio de Diseño & Agencia Creativa
          </span>

          {/* H1 / H2 Principal - Tipografía de Impacto */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-antracita tracking-tight leading-[1.1]">
            Tomamos ideas complejas y las traducimos en identidades impecables, funcionales y memorables.
          </h1>

          {/* Párrafo Secundario - Lectura Continua
          <p className="font-sans text-base sm:text-lg text-brand-antracita/80 leading-relaxed max-w-md">
            Diseño neogrotesco contemporáneo y desarrollo de software a medida.
            Construimos marcas e interfaces con criterio estético y rendimiento excepcional.
          </p> */}

          {/* Botón CTA + Acción Secundarias */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center bg-brand-coral hover:bg-brand-coral/90 text-white font-display font-medium text-base px-8 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              Iniciar un Proyecto
            </Link>

            <Link
              href="#proyectos"
              className="inline-flex items-center justify-center border border-brand-antracita/20 hover:border-brand-antracita text-brand-antracita font-display font-medium text-base px-6 py-3.5 rounded-full transition-all hover:bg-brand-sky/20"
            >
              Ver Trabajos
            </Link>
          </div>

        </div>
      </div>

    </section>
  );
}