import Link from "next/link";
import Image from "next/image";
import { MobileMenu } from "./mobile-menu";
import { ScrollNavbar } from "./scroll-navbar";

const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#Equipo", label: "Nuestro Equipo" },
];

export function Navbar() {
  return (
    <ScrollNavbar className="bg-brand-cream/100 backdrop-blur-md border-b border-border group-data-[scrolled=true]:bg-brand-cream group-data-[scrolled=true]:shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO CON CAMBIO SUAVE EN SCROLL */}
        <Link href="/" className="relative flex items-center h-12 w-40">
          
          {/* Logo 1: Logotipo completo (Visible al inicio, se oculta en scroll) */}
          <Image
            src="/img/logotipo-white-removebg-preview.png"
            alt="Vima Studio Logotipo"
            width={160}
            height={48}
            priority
            className="object-contain mix-blend-multiply transition-opacity duration-300 group-data-[scrolled=true]:opacity-0"
          />

          {/* Logo 2: Isotipo (Oculto al inicio, aparece al hacer scroll) */}
          <Image
            src="/img/isotipo-white-removebg-preview.png"
            alt="Vima Studio Isotipo"
            width={100}
            height={100}
            priority
            className="absolute inset-0 object-contain mix-blend-multiply transition-opacity duration-300 opacity-0 group-data-[scrolled=true]:opacity-100 left-10"
          />
        </Link>

        {/* NAVEGACIÓN DESKTOP */}
        <nav className="hidden md:flex items-center space-x-8 font-display">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-antracita hover:text-brand-coral transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA DESKTOP */}
        {/* <div className="hidden md:block">
          {/* <Link
            href="#contacto"
            className="inline-flex items-center justify-center bg-brand-coral hover:bg-brand-coral/90 text-white font-display font-medium rounded-full px-6 py-2 transition-all shadow-sm"
          >
            Contactar
          </Link> */}
        {/* </div>  */}

        {/* MENÚ MÓVIL */}
        <MobileMenu links={NAV_LINKS} />

      </div>
    </ScrollNavbar>
  );
}