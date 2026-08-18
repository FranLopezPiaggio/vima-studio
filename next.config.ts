import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true, // Requerido porque GitHub Pages no soporta la optimización de imágenes en servidor de Next.js
  },
};

export default nextConfig;
