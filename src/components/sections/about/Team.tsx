import { getAssetPath } from "@/src/lib/configPaths";
import Image from "next/image";
// import { Linkedin, Instagram, Github } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  accentColor: string; // Color de la paleta Mondrian para la cara posterior
  socials?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Alex Vance",
    role: "Lead Director & Design System",
    image: "/img/team/member-1.jpg", // Reemplaza con tus rutas de imagen
    bio: "Especialista en dirección de arte, tipografía contemporánea y arquitecturas visuales escalables.",
    accentColor: "bg-brand-coral text-white",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Sofía Martínez",
    role: "Senior Full-Stack Engineer",
    image: "/img/team/member-2.jpg",
    bio: "Enfocada en Next.js, rendimiento web extremo y arquitectura de software orientada a producto.",
    accentColor: "bg-brand-antracita text-brand-cream",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "Mateo Rossi",
    role: "Brand & Motion Designer",
    image: "/img/team/member-3.jpg",
    bio: "Creador de identidades dinámicas, ilustración vectorial y microinteracciones de marca.",
    accentColor: "bg-brand-sky text-brand-antracita",
    socials: { linkedin: "#", twitter: "#" },
  },
];

export function Team() {
  return (
    <section id="equipo" className="w-full bg-brand-cream py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* ENCABEZADO DE LA SECCIÓN */}
<div className="space-y-4">
  <span className="text-xs font-display font-semibold tracking-widest text-brand-coral uppercase">
    El Equipo
  </span>

  {/* CONTENEDOR HORIZONTAL STRICTO */}
  <div className="flex flex-row items-center gap-4 flex-wrap sm:flex-nowrap">
    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-antracita tracking-tight whitespace-nowrap">
      Mentes creativas detrás de
    </h2>

    <Image
      src={getAssetPath("/img/isotipo-white-removebg-preview.png")}
      alt="Vima Studio Isotipo"
      width={200}
      height={200}
      priority
      className="shrink-0 h-20 sm:h-24 lg:h-32 w-auto object-contain mix-blend-multiply ml-[-65px]"
    />
  </div>
</div>

        {/* GRILLA DE CARDS CON FLIP EFFECT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={index}
              className="group h-[420px] [perspective:1000px]"
            >
              {/* Contenedor relativo 3D */}
              <div className="relative h-full w-full border-4 border-brand-antracita shadow-xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* 1. CARA FRONTAL (Foto + Banner con Nombre) */}
                <div className="absolute inset-0 h-full w-full bg-brand-antracita [backface-visibility:hidden]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
                  />
                  
                  {/* Etiqueta flotante frontal estilo Mondrian */}
                  <div className="absolute bottom-0 left-0 right-0 bg-brand-cream/95 backdrop-blur-sm border-t-4 border-brand-antracita p-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-display font-bold text-lg text-brand-antracita">
                        {member.name}
                      </h3>
                      <p className="font-sans text-xs text-brand-antracita/70 font-medium">
                        {member.role}
                      </p>
                    </div>
                    <span className="font-display text-xs font-bold text-brand-coral uppercase tracking-wider">
                      Hover ↵
                    </span>
                  </div>
                </div>

                {/* 2. CARA POSTERIOR (Información + Redes) */}
                <div
                  className={`absolute inset-0 h-full w-full p-8 flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden] ${member.accentColor}`}
                >
                  <div className="space-y-4">
                    <span className="inline-block font-display text-xs font-bold uppercase tracking-widest opacity-80">
                      // Rol & Perfil
                    </span>
                    <h3 className="font-display text-2xl font-bold tracking-tight">
                      {member.name}
                    </h3>
                    <p className="font-sans text-sm font-medium opacity-90">
                      {member.role}
                    </p>
                    <hr className="border-current opacity-30 my-4" />
                    <p className="font-sans text-sm leading-relaxed opacity-90">
                      {member.bio}
                    </p>
                  </div>

                  {/* Redes sociales */}
                  <div className="pt-4 flex items-center gap-4 border-t border-current/20">
                    {member.socials?.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        className="hover:scale-110 transition-transform opacity-80 hover:opacity-100"
                        aria-label="LinkedIn"
                      >
                        {/* <Linkedin className="w-5 h-5" /> */}
                      </a>
                    )}
                    {member.socials?.twitter && (
                      <a
                        href={member.socials.twitter}
                        className="hover:scale-110 transition-transform opacity-80 hover:opacity-100"
                        aria-label="Twitter"
                      >
                        {/* <Twitter className="w-5 h-5" /> */}
                      </a>
                    )}
                    {member.socials?.github && (
                      <a
                        href={member.socials.github}
                        className="hover:scale-110 transition-transform opacity-80 hover:opacity-100"
                        aria-label="GitHub"
                      >
                        {/* <Github className="w-5 h-5" /> */}
                      </a>
                    )}
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}