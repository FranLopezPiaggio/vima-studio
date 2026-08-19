import Link from "next/link";
import { 
  Share2, 
  Palette, 
  Code, 
  Video, 
  Sparkles, 
  ArrowUpRight 
} from "lucide-react";

export function Services() {
  return (
    <section id="servicios" className="w-full bg-brand-cream py-24">
      <div className="mx-auto space-y-12">
        
        {/* ENCABEZADO DE LA SECCIÓN */}
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-xs font-display font-semibold tracking-widest text-brand-coral uppercase">
            Nuestros Servicios
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-antracita tracking-tight">
            Soluciones para marcas que buscan destacar.
          </h2>
        </div>

        {/* BENTO GRID ESTILO MONDRIAN (Sin gap, bordes rectos y divisiones marcadas) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-0 auto-rows-[280px] border-4 border-brand-antracita shadow-2xl">
          
          {/* 1. ANTRACITA (Ocupa el 50% izquierdo) */}
          <div className="lg:col-span-6 lg:row-span-2 bg-brand-antracita text-brand-cream p-8 md:p-12 border-b-4 lg:border-b-0 lg:border-r-4 border-brand-antracita flex flex-col justify-between group relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 bg-white/10 flex items-center justify-center text-brand-coral">
                <Code className="w-6 h-6" />
              </div>
              <span className="inline-block text-xs font-display tracking-wider text-brand-coral uppercase">
                Servicio Principal
              </span>
              <h3 className="font-display text-3xl font-bold text-brand-cream">
                Diseño y Desarrollo Web
              </h3>
              <p className="font-sans text-brand-cream/80 text-base leading-relaxed max-w-md">
                Plataformas digitales de alto rendimiento, optimizadas para conversión, 
                arquitectura moderna y diseño enfocado en la experiencia de usuario.
              </p>
            </div>

            <div className="pt-6 relative z-10 flex items-center justify-between border-t border-white/20">
              <span className="font-sans text-xs text-brand-cream/60">
                Next.js / Tailwind CSS / Supabase
              </span>
              <ArrowUpRight className="w-6 h-6 text-brand-coral group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>

          {/* 2. CORAL RED (Bloque superior centro-derecho) */}
          <div className="lg:col-span-4 lg:row-span-1 bg-brand-coral text-white p-8 border-b-4 lg:border-r-4 border-brand-antracita flex flex-col justify-between group">
            <div className="flex items-center justify-between">
              <Palette className="w-8 h-8 text-white/90" />
              <ArrowUpRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Branding e Identidad
              </h3>
              <p className="font-sans text-sm text-white/90 line-clamp-2">
                Sistemas visuales únicos, manuales de marca y estrategia conceptual.
              </p>
            </div>
          </div>

          {/* 3. SOFT SKY / PERIWINKLE (Franja vertical derecha) */}
          <div className="lg:col-span-2 lg:row-span-2 bg-brand-sky text-brand-antracita p-8 border-b-4 lg:border-b-0 border-brand-antracita flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-brand-antracita/10 flex items-center justify-center text-brand-antracita">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-brand-antracita leading-snug">
                Ilustración Personalizada
              </h3>
              <p className="font-sans text-xs text-brand-antracita/80 leading-relaxed">
                Arte conceptual, activos gráficos exclusivos e iconografía a medida.
              </p>
            </div>

            <div className="pt-4 border-t border-brand-antracita/20 flex items-center justify-between">
              <span className="font-display text-xs font-semibold">Exclusivo</span>
              <ArrowUpRight className="w-4 h-4 text-brand-antracita group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>

          {/* 4. CREMA WARM (Bloque inferior centro-derecho) */}
          <div className="lg:col-span-4 lg:row-span-1 bg-brand-cream text-brand-antracita p-8 border-b-4 lg:border-b-0 lg:border-r-4 border-brand-antracita flex flex-col justify-between group">
            <div className="flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <div className="p-2 bg-brand-coral/10 text-brand-coral">
                  <Share2 className="w-5 h-5" />
                </div>
                <div className="p-2 bg-brand-sky/30 text-brand-antracita">
                  <Video className="w-5 h-5" />
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-brand-antracita/60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-display font-bold text-base text-brand-antracita">
                  Gestión & Estrategia
                </h4>
                <p className="font-sans text-xs text-brand-antracita/70">
                  Redes Sociales
                </p>
              </div>
              <div>
                <h4 className="font-display font-bold text-base text-brand-antracita">
                  Social Media
                </h4>
                <p className="font-sans text-xs text-brand-antracita/70">
                  Content Creation
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}