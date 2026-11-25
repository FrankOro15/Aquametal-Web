import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getLocale } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const isEnglish = (await getLocale()) === "en";
  return {
    title: isEnglish ? "Services and Capabilities" : "Servicios y Capacidades",
    description: isEnglish
      ? "Explore Aquametal's engineering, CNC machining, and metal component manufacturing services."
      : "Conoce los servicios de ingeniería, maquinado CNC y fabricación de componentes metálicos de Aquametal.",
  };
}

export default function ServiciosLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
