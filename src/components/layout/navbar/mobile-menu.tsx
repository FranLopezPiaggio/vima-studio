"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  links: NavLink[];
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Botón de apertura/cierre */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-brand-antracita hover:text-brand-coral transition-colors"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Menú Desplegable */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-cream border-b border-border shadow-lg p-6 flex flex-col space-y-4 font-display">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-brand-antracita hover:text-brand-coral transition-colors"
            >
              {link.label}
            </Link>
          ))}
          {/* <Link
            href="#contacto"
            className="inline-flex items-center justify-center bg-brand-coral hover:bg-brand-coral/90 text-white font-display font-medium rounded-full px-6 py-2 transition-all shadow-sm"
          >
            Contactar
          </Link> */}
        </div>
      )}
    </div>
  );
}