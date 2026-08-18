import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Tag } from "lucide-react";
import { getAssetPath } from "@/src/lib/configPaths";

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  gridSpan: string; // Controla la forma y tamaño Mondrian en la grilla
}

const PROJECTS: Project[] = [
  {
    title: "Rebranding & Identidad Visual",
    category: "Branding",
    description:
      "Rediseño conceptual y manual de marca integral para una firma de arquitectura contemporánea. Enfoque en tipografía de alto impacto y paleta austera.",
    tags: ["Brand Strategy", "Design System", "Typography"],
    image: "/vima-studio-design-resources/2.png", // Reemplaza por la imagen del proyecto
    link: "#",
    gridSpan: "lg:col-span-7 lg:row-span-1",
  },
  {
    title: "Plataforma E-commerce High-End",
    category: "Desarrollo Web",
    description:
      "Desarrollo de tienda online a medida optimizada para conversión rápida, experiencia fluida e integración completa de pasarelas de pago.",
    tags: ["Next.js", "Tailwind CSS", "Shopify Headless"],
    image: "/vima-studio-design-resources/2.png",
    link: "#",
    gridSpan: "lg:col-span-5 lg:row-span-1",
  },
  {
    title: "Estrategia & Social Media Growth",
    category: "Manejo de Redes",
    description:
      "Gestión de contenido visual, dirección de fotografía y producción audiovisual para campaña de posicionamiento orgánico en Instagram y TikTok.",
    tags: ["Content Creation", "Art Direction", "Social Strategy"],
    image: "/vima-studio-design-resources/2.png",
    link: "#",
    gridSpan: "lg:col-span-5 lg:row-span-1",
  },
  {
    title: "Diseño Integral de Nueva Marca",
    category: "Branding & Web",
    description:
      "Lanzamiento desde cero de una startup de alimentos funcionales: desde el naming y packaging hasta la plataforma digital y assets de marketing.",
    tags: ["Naming", "Packaging", "Web Design", "Ui/Ux"],
    image: "/vima-studio-design-resources/2.png",
    link: "#",
    gridSpan: "lg:col-span-7 lg:row-span-1",
  },
];

export function Projects() {
  return (
    <section id="proyectos" className="relative w-full py-24 px-6 overflow-hidden border-t-4 border-brand-antracita">
      
      {/* 1. IMAGEN DE FONDO NEGRA CON BLUR */}
      <div className="absolute inset-0 z-0">
        <Image
          src={getAssetPath("/vima-studio-design-resources/logotipo-black.jpg")} // Tu imagen de fondo desde public
          alt="Proyectos Background"
          fill
          priority
          className="object-cover object-center grayscale contrast-150"
        />
        {/* Dark Overlay & Gaussian Blur */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        
        {/* ENCABEZADO DE LA SECCIÓN (Texto e Isotipo en Blanco) */}
        <div className="space-y-4">
          <span className="text-xs font-display font-semibold tracking-widest text-brand-coral uppercase">
            Portafolio
          </span>

          <div className="flex flex-row items-center gap-4 flex-wrap sm:flex-nowrap">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-cream tracking-tight brand-creamspace-nowrap">
              Proyectos seleccionados de
            </h2>

            <Image
              src={getAssetPath("/isotipo-black-removebg-preview (1).png")}
              alt="Vima Studio Isotipo"
              width={200}
              height={200}
              priority
              className="shrink-0 h-20 sm:h-24 lg:h-32 w-auto object-contain ml-[-65px] brightness-200"
            />
          </div>
          <p className="text-sm font-sans text-neutral-300 max-w-xl">
            Explora algunos de nuestros trabajos recientes en estrategia, diseño de marca y desarrollo de software.
          </p>
        </div>

        {/* GRILLA MONDRIAN DE CARDS (Fondo Blanco, Texto Antracita/Negro) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-4 border-black bg-black shadow-2xl">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className={`${project.gridSpan} bg-brand-cream border-2 border-black p-8 sm:p-10 flex flex-col justify-between group hover:bg-neutral-50 transition-colors duration-300 relative overflow-hidden`}
            >
              {/* Parte Superior: Categoría e Ícono CTA */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-antracita text-brand-cream text-[11px] font-mono font-semibold uppercase tracking-wider">
                    <Tag className="w-3 h-3 text-brand-coral" />
                    {project.category}
                  </span>

                  <Link
                    href={project.link}
                    className="p-2 bg-black text-brand-cream hover:bg-brand-coral transition-colors"
                    aria-label={`Ver proyecto ${project.title}`}
                  >
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>

                {/* Título y Descripción */}
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-black tracking-tight mb-3 group-hover:text-brand-coral transition-colors">
                  {project.title}
                </h3>
                <p className="font-sans text-sm text-neutral-700 leading-relaxed mb-8 max-w-2xl">
                  {project.description}
                </p>
              </div>

              {/* Parte Inferior: Tags de tecnología/concepto */}
              <div className="pt-6 border-t border-neutral-200 flex flex-wrap gap-2 items-center">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs font-mono font-medium text-neutral-600 bg-neutral-100 px-2.5 py-1 border border-neutral-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}