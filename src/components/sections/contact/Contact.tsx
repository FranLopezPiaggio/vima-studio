"use client";

import { useState } from "react";
import Image from "next/image";
import { Send, CheckCircle2, User, Phone, Mail, MessageSquare, AtSign } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulación de envío de formulario
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contacto" className="w-full bg-brand-cream py-24 px-6 border-t-4 border-brand-antracita">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* ENCABEZADO DE LA SECCIÓN */}
        <div className="space-y-4">
          <span className="text-xs font-display font-semibold tracking-widest text-brand-coral uppercase">
            Iniciemos un Proyecto
          </span>

          <div className="flex flex-row items-center gap-4 flex-wrap sm:flex-nowrap">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-antracita tracking-tight whitespace-nowrap">
              Hablemos de tu idea en
            </h2>

            <Image
              src="/img/isotipo-white-removebg-preview.png"
              alt="Vima Studio Isotipo"
              width={200}
              height={200}
              priority
              className="shrink-0 h-20 sm:h-24 lg:h-32 w-auto object-contain mix-blend-multiply ml-[-65px]"
            />
          </div>
          <p className="text-sm font-sans text-neutral-700 max-w-xl">
            ¿Tienes un proyecto en mente o buscas elevar la presencia de tu marca? Completa el formulario y nos pondremos en contacto a la brevedad.
          </p>
        </div>

        {/* CONTENEDOR PRINCIPAL: GRILLA MONDRIAN (INFO Y FORMULARIO) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-4 border-brand-antracita bg-brand-antracita shadow-2xl">
          
          {/* PANEL IZQUIERDO: INFORMACIÓN DE CONTACTO / BRIEF (4 cols) */}
          <div className="lg:col-span-4 bg-brand-antracita text-brand-cream p-8 sm:p-10 flex flex-col justify-between border-b-4 lg:border-b-0 lg:border-r-4 border-brand-antracita">
            <div className="space-y-8">
              <span className="inline-block font-mono text-xs font-bold uppercase tracking-widest text-brand-coral">
                // Brief & Consulta
              </span>
              <h3 className="font-display text-3xl font-bold tracking-tight text-white leading-snug">
                Construyamos algo extraordinario juntos.
              </h3>
              <p className="font-sans text-sm text-neutral-300 leading-relaxed">
                Nos apasiona colaborar con marcas y equipos ambiciosos. Cuéntanos los detalles de tu visión y diseñemos la estrategia adecuada.
              </p>
            </div>

            {/* Datos Directos */}
            <div className="pt-8 space-y-4 border-t border-neutral-700 font-mono text-xs text-neutral-300">
              <div>
                <p className="text-neutral-400 uppercase tracking-wider mb-1">Email directo</p>
                <a href="mailto:hola@vimastudio.com" className="text-white hover:text-brand-coral font-bold transition-colors">
                  hola@vimastudio.com
                </a>
              </div>
              <div>
                <p className="text-neutral-400 uppercase tracking-wider mb-1">Ubicación</p>
                <p className="text-white font-semibold">Remoto / Global</p>
              </div>
            </div>
          </div>

          {/* PANEL DERECHO: FORMULARIO (8 cols) */}
          <div className="lg:col-span-8 bg-white p-8 sm:p-12">
            {submitted ? (
              <div className="h-full min-h-[380px] flex flex-col items-center justify-center text-center space-y-4 py-12">
                <CheckCircle2 className="w-16 h-16 text-brand-coral animate-bounce" />
                <h3 className="font-display text-3xl font-bold text-brand-antracita">
                  ¡Mensaje Enviado!
                </h3>
                <p className="font-sans text-sm text-neutral-600 max-w-md">
                  Gracias por comunicarte con Vima Studio. Revisaremos tu propuesta y te responderemos dentro de las próximas 24 horas.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-3 bg-brand-antracita text-white font-mono text-xs uppercase tracking-wider hover:bg-brand-coral transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Nombre */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block font-mono text-xs font-bold uppercase tracking-wider text-brand-antracita flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-brand-coral" />
                      Nombre completo <span className="text-brand-coral">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Ej. Alex Vance"
                      className="w-full bg-neutral-50 border-2 border-brand-antracita p-3.5 font-sans text-sm text-brand-antracita placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-coral focus:bg-white transition-all"
                    />
                  </div>

                  {/* Teléfono */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block font-mono text-xs font-bold uppercase tracking-wider text-brand-antracita flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-brand-coral" />
                      Teléfono / WhatsApp <span className="text-brand-coral">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="+54 9 11 1234-5678"
                      className="w-full bg-neutral-50 border-2 border-brand-antracita p-3.5 font-sans text-sm text-brand-antracita placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-coral focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block font-mono text-xs font-bold uppercase tracking-wider text-brand-antracita flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-brand-coral" />
                      Email <span className="text-brand-coral">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="tu@empresa.com"
                      className="w-full bg-neutral-50 border-2 border-brand-antracita p-3.5 font-sans text-sm text-brand-antracita placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-coral focus:bg-white transition-all"
                    />
                  </div>

                  {/* Redes Sociales (Opcional) */}
                  <div className="space-y-2">
                    <label htmlFor="socials" className="block font-mono text-xs font-bold uppercase tracking-wider text-brand-antracita flex items-center gap-1.5">
                      <AtSign className="w-3.5 h-3.5 text-neutral-400" />
                      Redes / Web <span className="text-neutral-400 font-normal lowercase">(opcional)</span>
                    </label>
                    <input
                      type="text"
                      id="socials"
                      placeholder="@usuario o tuweb.com"
                      className="w-full bg-neutral-50 border-2 border-brand-antracita p-3.5 font-sans text-sm text-brand-antracita placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-coral focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Comentario / Nota */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block font-mono text-xs font-bold uppercase tracking-wider text-brand-antracita flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-brand-coral" />
                    Detalles del Proyecto / Mensaje <span className="text-brand-coral">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Cuéntanos sobre tu marca, objetivos, tiempos estimados..."
                    className="w-full bg-neutral-50 border-2 border-brand-antracita p-3.5 font-sans text-sm text-brand-antracita placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-coral focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Botón de Envío */}
                <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
                  <span className="font-mono text-[11px] text-neutral-500">
                    * Campos obligatorios
                  </span>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-brand-antracita text-white font-mono text-xs uppercase font-bold tracking-widest hover:bg-brand-coral transition-colors duration-300 border-2 border-brand-antracita cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Enviando...</span>
                    ) : (
                      <>
                        <span>Enviar Mensaje</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}