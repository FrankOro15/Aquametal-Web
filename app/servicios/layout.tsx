import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Servicios y Capacidades",
  description:
    "Conoce los servicios de ingeniería, maquinado CNC y fabricación de componentes metálicos de Aquametal.",
};

export default function ServiciosLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
