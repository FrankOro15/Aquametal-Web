import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a Aquametal para solicitar cotizaciones y consultar sobre la fabricación de componentes metálicos.",
};

export default function ContactoLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
