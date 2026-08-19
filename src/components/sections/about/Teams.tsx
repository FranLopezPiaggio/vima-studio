import { getAssetPath } from "@/src/lib/configPaths";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  pantoneCode: string;
  image: string;
  bio: string;
  accentColor: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Victoria",
    role: "Founder & Graphic Designer",
    image: "/avatar-placeholder.jpg",
    pantoneCode: "14-4121 TCX",
    bio: "Creador de identidades dinámicas, ilustración vectorial y microinteracciones de marca.",
    accentColor: "bg-brand-sky text-brand-antracita",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Fatima",
    role: "Social & Paid Media",
    image: "/avatar-placeholder.jpg",
    pantoneCode: "19-3911 TCX",
    bio: "Creo estrategias orgánicas y con pauta para hacer crecer comunidades y marcas",
    accentColor: "bg-brand-antracita text-brand-cream",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "Franco",
    role: "Full-Stack Engineer",
    image: "/avatar-placeholder.jpg",
    pantoneCode: "19-4052 TCX",
    bio: "Desarrollador full stack con más de 4 años de experiencia en proyectos reales, escalables y modernos.",
    accentColor: "bg-brand-coral text-white",
    socials: { linkedin: "#", twitter: "#" },
  },
];

export function Team() {
  return (
    <section id="Equipo" className="w-full bg-brand-cream py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* ENCABEZADO DE LA SECCIÓN */}
        <div className="space-y-4">
          <span className="text-xs font-display font-semibold tracking-widest text-brand-coral uppercase">
            El Equipo
          </span>

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

        {/* GRILLA DE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <div key={index} className="group h-[480px] [perspective:1000px]">
              <div className="relative h-full w-full border-4 border-brand-antracita bg-white shadow-xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* 1. CARA FRONTAL */}
                <div className="absolute inset-0 h-full w-full bg-white flex flex-col justify-between p-3 [backface-visibility:hidden]">
                  
                  <div className="relative w-full h-[72%] bg-brand-antracita overflow-hidden border border-brand-antracita/10">
                    <Image
                      src={getAssetPath(member.image)}
                      alt={member.name}
                      fill
                      className="object-cover object-center grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  
                  <div className="px-2 pb-2 pt-3 flex flex-col justify-end space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-black text-2xl sm:text-3xl tracking-tighter text-black uppercase">
                        PANTONE<span className="text-xs align-top font-normal font-sans">®</span>
                      </span>
                      <span className="text-[10px] font-mono font-bold text-brand-coral uppercase tracking-widest">
                        Hover ↵
                      </span>
                    </div>

                    <p className="font-mono text-sm font-semibold text-neutral-800 tracking-wide pt-1">
                      {member.pantoneCode}
                    </p>

                    <p className="font-display font-bold text-base text-neutral-900 truncate">
                      {member.name}
                    </p>
                  </div>
                </div>

                {/* 2. CARA POSTERIOR */}
                <div className={`absolute inset-0 h-full w-full p-8 flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden] ${member.accentColor}`}>
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
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}