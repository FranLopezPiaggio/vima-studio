import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { WhatsAppButton } from "@/src/components/ui/whatsapp-button";
// import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "../components/layout/navbar/Navbar";
import { Footer } from "@/src/components/layout/footer/Footer"


const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


// // 2. Configurar Neue Montreal (Principal - Titulares)
// // const neueMontreal = localFont({
//   src: [
//     {
//       path: "../../public/fonts/NeueMontreal-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/NeueMontreal-Medium.woff2",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/NeueMontreal-Bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-neue-montreal",
//   display: "swap",
// // });

export const metadata: Metadata = {
  title: "Vima Studio",
  description: "Agencia Creativa, Diseño Grafico, Web, Branding y mucho mas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={cn("h-full", "antialiased", geistSans.variable,geistMono.variable,inter.variable,"font-sans")}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        {/* Lee automáticamente process.env.NEXT_PUBLIC_WHATSAPP_NUMBER o process.env.WPNumber */}
        <WhatsAppButton />
      <Footer/>
      </body>
    </html>
  );
}
