import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getLocale } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const isEnglish = (await getLocale()) === "en";
  return {
    title: isEnglish ? "Contact" : "Contacto",
    description: isEnglish
      ? "Contact Aquametal for quotes and information about metal component manufacturing."
      : "Contacta a Aquametal para solicitar cotizaciones y consultar sobre la fabricación de componentes metálicos.",
  };
}

export default function ContactoLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
