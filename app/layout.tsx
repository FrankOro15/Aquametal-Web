
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import WhatsAppBubble from "@/components/WhatsAppBubble";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aqua-metal.com"),

  title: {
    default: "Aquametal | Maquinado CNC y Producción de Alto Volumen",
    template: "%s | Aquametal",
  },

  description:
    "Con más de 25 años de experiencia, en Aquametal fabricamos componentes metálicos de alta precisión mediante maquinado CNC, torneado automático y producción en serie. Trabajamos acero, aluminio, bronce, latón y cobre, con suministro programado desde Santa Ana Jilotzingo, Estado de México.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://aqua-metal.com",
    siteName: "Aquametal",
    title: "Aquametal | Maquinado CNC y Producción de Alto Volumen",
    description:
      "Más de 25 años de experiencia en maquinado CNC, torneado automático y fabricación de componentes metálicos de alta precisión. Producción en serie y suministro programado.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${jakarta.className} antialiased bg-slate-50 text-slate-800`}
      >
        {children}
        <WhatsAppBubble />
      </body>
    </html>
  );
}
