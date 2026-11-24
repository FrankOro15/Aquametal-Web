import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Galería",
  description:
    "Explora imágenes de la planta, maquinaria y procesos de fabricación de componentes metálicos de Aquametal.",
};

export default function GaleriaLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
