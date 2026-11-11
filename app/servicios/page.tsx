
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Plus,
  Minus,
} from "lucide-react";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Maquinaria from "@/components/Maquinaria";

const servicios = [
  {
    numero: "01",
    titulo: "Ingeniería y diseño",
    resumen: "Desarrollo técnico para proyectos de manufactura.",
    descripcion:
      "Desarrollamos soluciones de manufactura a partir de planos, muestras y requerimientos técnicos. Analizamos las características de cada componente para definir las consideraciones necesarias para su fabricación, buscando que el diseño responda a las necesidades funcionales y productivas de cada proyecto.",
    imagen: "/images/diseño.jpeg",
    alt: "Diseño y desarrollo de componentes industriales",
  },
  {
    numero: "02",
    titulo: "Fabricación de componentes",
    resumen: "Transformación de materiales en piezas industriales.",
    descripcion:
      "Transformamos materias primas metálicas en componentes destinados a diferentes aplicaciones industriales. Mediante procesos de torneado y mecanizado especializado, fabricamos piezas con geometrías, dimensiones y acabados definidos, atendiendo los requerimientos particulares de cada producción.",
    imagen: "/images/fabricacion.jpg",
    alt: "Fabricación de componentes metálicos",
  },
  {
    numero: "03",
    titulo: "Maquila industrial",
    resumen: "Soluciones de fabricación para empresas.",
    descripcion:
      "Ofrecemos servicios de maquila para empresas que requieren fabricar componentes metálicos sin incorporar estos procesos directamente a sus instalaciones. Trabajamos a partir de planos, muestras o especificaciones proporcionadas por el cliente, adaptando los procesos de producción a las características y necesidades de cada pedido.",
    imagen: "/images/maquila.jpg",
    alt: "Maquila de piezas metálicas",
  },
  {
    numero: "04",
    titulo: "Tecnología CNC",
    resumen: "Mecanizado mediante control numérico computarizado.",
    descripcion:
      "Utilizamos tecnología de control numérico computarizado para realizar operaciones de torneado y mecanizado mediante programas previamente establecidos. Estos procesos permiten trabajar geometrías específicas, controlar los movimientos de las herramientas y mantener condiciones de fabricación consistentes durante la producción de cada lote.",
    imagen: "/images/servicios.jpeg",
    alt: "Procesos de maquinado CNC",
  },
  {
    numero: "05",
    titulo: "Control de calidad",
    resumen: "Verificación y seguimiento de los procesos.",
    descripcion:
      "La calidad forma parte de las distintas etapas de nuestro proceso de fabricación. Realizamos verificaciones dimensionales y revisiones de los componentes para evaluar su correspondencia con los requisitos establecidos. Trabajamos bajo un sistema de gestión de calidad basado en ISO 9001, orientado al seguimiento y mejora de nuestros procesos.",
    imagen: "/images/calidad.jpg",
    alt: "Inspección y control de calidad industrial",
  },
  {
    numero: "06",
    titulo: "Producción de alto volumen",
    resumen: "Capacidad para atender grandes lotes de producción.",
    descripcion:
      "Contamos con infraestructura y capacidad operativa para atender proyectos que requieren fabricación en grandes cantidades. Nuestra planta dispone de más de 30 máquinas y capacidad de producción superior a 5,000 piezas por lote, lo que permite organizar procesos de fabricación continua y atender esquemas de suministro programado.",
    imagen: "/images/altovolumen.jpeg",
    alt: "Producción industrial de alto volumen",
  },
];

export default function Servicios() {
  const [servicioActivo, setServicioActivo] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 pt-44 sm:pt-10 md:pt-19">
      <Navbar />

      {/* HERO SECUNDARIO */}
      <section className="relative overflow-hidden bg-[#0F172A] px-5 py-20 text-white md:px-10 md:py-24">

        {/* FONDO */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#101D35] to-[#14264A]" />

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* ENCABEZADO */}
          <div className="mx-auto max-w-3xl text-center">

            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-[#2563FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.28em] text-blue-300">
                Nuestra capacidad
              </span>

              <span className="h-[2px] w-10 bg-[#2563FF]" />
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Ingeniería, precisión y
              <span className="block text-[#4D91FF]">
                capacidad de manufactura.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              Desarrollamos componentes metálicos de alta precisión mediante
              procesos de maquinado CNC, manufactura especializada y maquilado
              de alto volumen.
            </p>

          </div>

          {/* GALERÍA DE SERVICIOS */}
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {servicios.map((servicio, index) => {
              const activo = servicioActivo === index;

              return (
                <article
                  key={servicio.numero}
                  className="group min-w-0"
                >

                  {/* TARJETA CON IMAGEN */}
                  <button
                    type="button"
                    onClick={() =>
                      setServicioActivo(activo ? null : index)
                    }
                    aria-expanded={activo}
                    aria-controls={`servicio-${servicio.numero}`}
                    className="relative block h-[280px] w-full cursor-pointer overflow-hidden bg-[#0F172A] text-left md:h-[320px]"
                  >

                    <Image
                      src={servicio.imagen}
                      alt={servicio.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* DEGRADADO */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/35 to-transparent" />

                    {/* CONTENIDO */}
                    <div className="absolute inset-x-0 bottom-0 p-6">

                      <span className="mb-3 block h-[2px] w-9 bg-[#4D91FF] transition-all duration-300 group-hover:w-14" />

                      <h2 className="text-xl font-bold text-white md:text-2xl">
                        {servicio.titulo}
                      </h2>

                      <p className="mt-2 max-w-xs text-sm leading-6 text-slate-300">
                        {servicio.resumen}
                      </p>

                      {/* INDICADOR */}
                      <div className="mt-4 flex items-center justify-between border-t border-white/20 pt-4">

                        <span className="text-xs font-semibold uppercase tracking-wider text-blue-200">
                          {activo ? "Ver menos" : "Conocer servicio"}
                        </span>

                        <span className="flex h-8 w-8 items-center justify-center border border-white/40 text-white transition-colors group-hover:border-[#2563FF] group-hover:bg-[#2563FF]">
                          {activo ? (
                            <Minus size={16} />
                          ) : (
                            <Plus size={16} />
                          )}
                        </span>

                      </div>

                    </div>

                  </button>

                  {/* TARJETA BLANCA DESPLEGABLE */}
                  <div
                    id={`servicio-${servicio.numero}`}
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                      activo
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                    aria-hidden={!activo}
                  >

                    <div className="overflow-hidden">

                      <div className="border-x border-b border-slate-200 bg-white p-6 shadow-sm">

                        <p className="text-sm leading-7 text-slate-600">
                          {servicio.descripcion}
                        </p>

                        {/* ENLACE A CONTACTO */}
                        <Link
                          href="/contacto"
                          tabIndex={activo ? 0 : -1}
                          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800"
                        >
                          Consultar servicio
                          <ArrowUpRight size={16} />
                        </Link>

                      </div>

                    </div>

                  </div>

                </article>
              );
            })}

          </div>

        </div>
      </section>

      {/* SECCIÓN DE MAQUINARIA */}
      <Maquinaria />

      {/* FOOTER */}
      <Footer />

    </main>
  );
}
