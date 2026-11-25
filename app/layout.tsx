
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import WhatsAppBubble from "@/components/WhatsAppBubble";
import { LocaleProvider } from "@/components/LocaleProvider";
import {
  getCurrentPath,
  getLocale,
  localizedAlternates,
  localizedPath,
} from "@/lib/i18n";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const path = await getCurrentPath();
  const title =
    locale === "en"
      ? "Aquametal | CNC Machining and High-Volume Production"
      : "Aquametal | Maquinado CNC y Producción de Alto Volumen";
  const description =
    locale === "en"
      ? "With over 25 years of experience, Aquametal manufactures high-precision metal components through CNC machining, automatic turning, and production runs. Serving customers from Santa Ana Jilotzingo, State of Mexico."
      : "Con más de 25 años de experiencia, en Aquametal fabricamos componentes metálicos de alta precisión mediante maquinado CNC, torneado automático y producción en serie. Trabajamos acero, aluminio, bronce, latón y cobre, con suministro programado desde Santa Ana Jilotzingo, Estado de México.";

  return {
    metadataBase: new URL("https://aqua-metal.com"),
    title,
    description,
    alternates: localizedAlternates(path, locale),
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_US" : "es_MX",
      url: `https://aqua-metal.com${localizedPath(path, locale)}`,
      siteName: "Aquametal",
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body
        className={`${jakarta.className} antialiased bg-slate-50 text-slate-800`}
      >
        <LocaleProvider locale={locale}>
          {children}
          <WhatsAppBubble />
        </LocaleProvider>
      </body>
    </html>
  );
}
