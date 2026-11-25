import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getLocale } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const isEnglish = (await getLocale()) === "en";
  return {
    title: isEnglish ? "Gallery" : "Galería",
    description: isEnglish
      ? "Explore Aquametal's facility, machinery, and metal component manufacturing processes."
      : "Explora imágenes de la planta, maquinaria y procesos de fabricación de componentes metálicos de Aquametal.",
  };
}

export default function GaleriaLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
