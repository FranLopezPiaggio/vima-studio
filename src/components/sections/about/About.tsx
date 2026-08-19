import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAssetPath } from "@/src/lib/configPaths";

export function About() {
  return (
    <section id="nosotros" className="relative w-full min-h-[600px] flex items-center overflow-hidden py-16 md:py-24 px-6 bg-brand-cream">
      
      {/* 1. IMAGEN DE FONDO DE TODA LA SECCIÓN */}
      <div className="absolute inset-0 z-0">
        <Image
          src={getAssetPath("/vima-studio-design-resources/2.png")}
          alt="Vima Studio Background"
          fill
          priority
          className="object-cover object-center opacity-80"
        />
        {/* Capa de contraste opcional sobre la imagen si el texto necesita más legibilidad */}
        <div className="absolute inset-0 bg-brand-cream/30 backdrop-blur-[2px]" />
      </div>

      {/* 2. CONTENEDOR PRINCIPAL */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* CONTENIDO UBICADO EN LA MITAD DERECHA (Columna 7 a 12) */}
        <div className="lg:col-start-7 lg:col-span-6 space-y-6 bg-brand-cream/90 p-8 md:p-10 border-4 border-brand-antracita/10 shadow-xl">
          
          <div className="space-y-3">
            <span className="block text-xs font-display font-semibold tracking-widest text-brand-coral uppercase">
              Sobre Nosotros
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-antracita tracking-tight leading-tight">
              Diseño, branding y estrategia digital
            </h2>
          </div>

          <div className="space-y-4 font-sans text-base text-brand-antracita/90 leading-relaxed">
            <p>
              Vima Studio es un estudio de diseño y agencia creativa enfocada en branding,
              comunicación estratégica y gestión de contenidos digitales. 
            </p>
            <p>
              Nace de la unión
              entre la precisión técnica y la soltura creativa, acompañando a marcas y
              profesionales en la construcción de identidades visuales auténticas,
              contemporáneas y con un posicionamiento claro en el mercado.
            </p>
          </div>

          {/* Bloque destacado con paleta de soporte (Soft Sky / Periwinkle) */}
          <div className="p-6 bg-brand-cream border-l-4 border-brand-cream space-y-2">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-brand-coral">
              Nuestros Valores
            </h4>
            <p className="font-bold text-xs text-brand-sky/120 leading-relaxed">
              CREATIVIDAD, CERCANIA, PERSONALIZACION
            </p>
          </div>

          {/* CTA de la sección */}
          <div className="pt-2">
            <Link
              href="#contacto"
              className="inline-flex items-center gap-3 text-brand-antracita font-display font-bold text-base hover:text-brand-coral transition-colors group"
            >
              <span>Conoce a nuestro equipo e historia</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform text-brand-coral" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}