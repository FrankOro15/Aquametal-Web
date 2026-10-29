import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import WhatsAppBubble from "@/components/WhatsAppBubble";

// Cargamos la fuente con los pesos necesarios
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "AquaMetal ",
  description: "Especialistas en componentes metálicos de alta precisión y producción en serie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${jakarta.className} antialiased bg-slate-50 text-slate-800`}>
        {children}
        <WhatsAppBubble />
      </body>
    </html>
  );
}