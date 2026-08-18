// src/components/navbar/scroll-navbar.tsx
"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollNavbarProps {
  children: React.ReactNode;
  className?: string;
}

export function ScrollNavbar({ children, className }: ScrollNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      data-scrolled={isScrolled}
      className={cn(
        "group sticky top-0 z-50 w-full transition-all duration-300",
        className
      )}
    >
      {children}
    </header>
  );
}