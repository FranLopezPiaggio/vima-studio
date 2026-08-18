import type { NextConfig } from "next";

const nextConfig: NextConfig = {
output: 'export',
  // Si la URL termina en /vima-studio/, agrega el basePath:
  basePath: process.env.NODE_ENV === 'production' ? '/vima-studio' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
