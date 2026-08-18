import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-brand-antracita text-brand-cream border-t-4 border-brand-antracita">
      
      {/* SECCIÓN SUPERIOR: NAVEGACIÓN Y MARCA */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-neutral-800">
        
        {/* Marca & Isotipo */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logotipo-black-removebg-preview.png"
              alt="Vima Studio Isotipo"
              width={100}
              height={100}
              className="w-auto object-contain brightness-200"
            />
            <span className="font-display font-bold text-xl tracking-tight text-white uppercase ml-[-30px]">
              Studio
            </span>
          </div>
          <p className="font-sans text-sm text-neutral-400 max-w-sm leading-relaxed">
            Estudio creativo independiente focalizado en desarrollo web de alto rendimiento, sistemas de diseño e identidades de marca digitales.
          </p>
        </div>

        {/* Navegación Principal */}
        <div className="md:col-span-3 space-y-3 font-mono text-xs">
          <p className="text-brand-coral uppercase tracking-widest font-bold mb-4">
            // Navegación
          </p>
          <ul className="space-y-2.5 text-neutral-300">
            <li>
              <a href="#proyectos" className="hover:text-white transition-colors">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#equipo" className="hover:text-white transition-colors">
                El Equipo
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-white transition-colors">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Legales & Corporativo */}
        <div className="md:col-span-4 space-y-3 font-mono text-xs">
          <p className="text-brand-coral uppercase tracking-widest font-bold mb-4">
            // Legales & Conformidad
          </p>
          <ul className="space-y-2.5 text-neutral-300">
            <li>
              <Link href="/privacidad" className="hover:text-white transition-colors">
                Política de Privacidad
              </Link>
            </li>
            <li>
              <Link href="/terminos" className="hover:text-white transition-colors">
                Términos y Condiciones de Servicio
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Preferencias de Cookies
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* SECCIÓN INFERIOR: COPYRIGHT & CRÉDITOS */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-neutral-400">
        
        <div>
          © {new Date().getFullYear()} Vima Studio. Todos los derechos reservados.
        </div>

        <div className="flex items-center gap-6">
          <span className="hidden sm:inline text-neutral-600">|</span>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 hover:text-brand-coral transition-colors"
            aria-label="Volver arriba"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

    </footer>
  );
}