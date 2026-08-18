import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function About() {
  return (
    <section id="nosotros" className="relative w-full min-h-[600px] flex items-center overflow-hidden py-16 md:py-24 px-6 bg-brand-cream">
      
      {/* 1. IMAGEN DE FONDO DE TODA LA SECCIÓN */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/vima-studio-design-resources/2.png"
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
              Diseño con intención, desarrollo con precisión.
            </h2>
          </div>

          <div className="space-y-4 font-sans text-base text-brand-antracita/90 leading-relaxed">
            <p>
              Nacimos con una premisa clara: fusionar la potencia de la ingeniería de software moderna con el rigor del diseño gráfico y editorial. En un mercado saturado de soluciones genéricas, apostamos por la identidad y la relevancia.
            </p>
            <p>
              Creemos en los sistemas visuales sólidos y en la arquitectura de código limpia. Cada proyecto que abordamos combina pensamiento estratégico, estética contemporánea y rendimiento técnico sin concesiones.
            </p>
          </div>

          {/* Bloque destacado con paleta de soporte (Soft Sky / Periwinkle) */}
          <div className="p-6 bg-brand-cream border-l-4 border-brand-cream space-y-2">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-brand-coral">
              Nuestra Filosofía
            </h4>
            <p className="font-sans text-xs text-brand-sky/120 leading-relaxed">
              No construimos solo sitios web o marcas; diseñamos activos digitales perdurables que conectan de forma auténtica con las personas.
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