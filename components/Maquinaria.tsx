
"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const maquinas = [
  {
    nombre: "INDEX 42",
    modelo: "Torno automático de levas",
    categoria: "Torneado automático de precisión",
    descripcion:
      "Torno automático de levas diseñado para la fabricación de componentes metálicos de pequeñas dimensiones en grandes volúmenes. Su sistema de alimentación y mecanizado automatizado permite producir piezas repetitivas con precisión y uniformidad, ideal para procesos de producción continua.",
    imagen: "/images/maquinas/index42.jpg",
  },
  {
    nombre: "INDEX ON",
    modelo: "Torno automático de levas",
    categoria: "Torneado de precisión",
    descripcion:
      "Equipo de torneado automático utilizado para fabricar componentes metálicos mediante operaciones de corte y mecanizado secuencial. Su automatización permite mantener ciclos de producción constantes y obtener piezas con características dimensionales uniformes.",
    imagen: "/images/maquinas/indexon.jpg",
  },
  {
    nombre: "TRAUB A20",
    modelo: "Torno automático de levas",
    categoria: "Producción automatizada",
    descripcion:
      "Torno automático especializado en la fabricación de piezas torneadas de precisión. Su configuración permite realizar diferentes operaciones de mecanizado de forma secuencial, favoreciendo la producción de componentes pequeños con geometrías definidas y acabados uniformes.",
    imagen: "/images/maquinas/traub-a20.jpg",
  },
  {
    nombre: "TRAUB A25",
    modelo: "Torno automático de levas",
    categoria: "Manufactura de componentes",
    descripcion:
      "Equipo automático de torneado destinado a la fabricación de componentes metálicos mediante ciclos de mecanizado repetitivos. Está orientado a procesos de producción en serie donde la precisión dimensional y la consistencia entre piezas son fundamentales.",
    imagen: "/images/maquinas/traub-a25.jpg",
  },
  {
    nombre: "GUSS & ROCH",
    modelo: "Torno CNC de doble husillo",
    categoria: "Mecanizado CNC",
    descripcion:
      "Torno CNC equipado con doble husillo, una configuración que permite trabajar con dos posiciones de mecanizado y realizar operaciones coordinadas sobre una pieza. Esta característica puede reducir tiempos de ciclo y facilitar la fabricación de componentes que requieren varias etapas de torneado.",
    imagen: "/images/maquinas/guss-doble.jpg",
  },
  {
    nombre: "GUSS & ROCH",
    modelo: "Torno CNC estándar",
    categoria: "Torneado CNC",
    descripcion:
      "Equipo de control numérico computarizado que permite fabricar componentes mediante instrucciones programadas. Su sistema CNC ofrece control sobre los movimientos de mecanizado, facilitando la elaboración de geometrías precisas y la repetición de procesos de fabricación.",
    imagen: "/images/maquinas/guss-estandar.jpg",
  },
  {
    nombre: "HEADMAN",
    modelo: "Torno paralelo CNC",
    categoria: "Mecanizado de precisión",
    descripcion:
      "Torno paralelo con control numérico utilizado para mecanizar piezas cilíndricas mediante operaciones como cilindrado, refrentado y ranurado. Su programación permite controlar las trayectorias de corte y mantener dimensiones uniformes durante la fabricación de componentes.",
    imagen: "/images/maquinas/headman1.jpg",
  },
  {
    nombre: "DAEWOO",
    modelo: "Centro de maquinado de doble mesa",
    categoria: "Maquinado de alta producción",
    descripcion:
      "Centro de maquinado diseñado para realizar operaciones como fresado, barrenado y otras tareas de mecanizado. Su configuración de doble mesa permite preparar una pieza mientras otra se encuentra en proceso, ayudando a optimizar los tiempos de operación y mejorar la continuidad de producción.",
    imagen: "/images/maquinas/daewoo.jpg",
  },
  {
    nombre: "HEADMAN",
    modelo: "Torno paralelo CNC",
    categoria: "Torneado CNC",
    descripcion:
      "Equipo de torneado controlado por computadora, utilizado para fabricar componentes metálicos con superficies cilíndricas y diferentes características geométricas. Permite ejecutar operaciones programadas con repetibilidad y control dimensional.",
    imagen: "/images/maquinas/headman2.jpg",
  },
  {
    nombre: "HEADMAN",
    modelo: "Torno paralelo",
    categoria: "Maquinado convencional",
    descripcion:
      "Equipo de torneado paralelo utilizado para dar forma a piezas metálicas mediante el giro de la pieza de trabajo y el desplazamiento de herramientas de corte. Es adecuado para operaciones de cilindrado, refrentado y ajustes dimensionales en distintos componentes.",
    imagen: "/images/maquinas/headman3.jpg",
  },
];

export default function Maquinaria() {
  const [seleccionada, setSeleccionada] = useState(0);

  const infoRef = useRef<HTMLDivElement>(null);
  const primeraCarga = useRef(true);

  const maquina = maquinas[seleccionada];

  // Desplazamiento automático al seleccionar un equipo en móvil
  useEffect(() => {
    if (primeraCarga.current) {
      primeraCarga.current = false;
      return;
    }

    if (window.innerWidth < 1024) {
      infoRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [seleccionada]);

  return (
    <section className="bg-white px-6 py-16 md:px-10 md:py-24">

      <div className="mx-auto max-w-7xl">

        {/* ENCABEZADO */}
        <div className="mb-10 max-w-2xl">

          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
            Tecnología y equipamiento
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
            Nuestra maquinaria
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Contamos con equipos especializados en torneado automático,
            mecanizado CNC y manufactura de precisión. Nuestra capacidad
            tecnológica nos permite desarrollar componentes metálicos
            con calidad, uniformidad y eficiencia para diferentes
            necesidades de producción.
          </p>

        </div>

        {/* SELECTOR DE MAQUINARIA */}
        <div className="mb-8">

          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
              Equipos disponibles
            </h3>

            <span className="text-xs font-medium text-slate-400">
              {String(seleccionada + 1).padStart(2, "0")} / 10
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">

            {maquinas.map((item, index) => {
              const activo = seleccionada === index;

              return (
                <button
                  key={`${item.nombre}-${item.modelo}-${index}`}
                  type="button"
                  onClick={() => setSeleccionada(index)}
                  aria-pressed={activo}
                  className={`group relative flex min-h-[105px] flex-col justify-center border p-4 text-left transition-all duration-300 ${
                    activo
                      ? "border-blue-600 bg-[#0F172A] text-white"
                      : "border-slate-200 bg-white text-slate-800 hover:border-blue-400 hover:bg-slate-50"
                  }`}
                >

                  <span
                    className={`text-[10px] font-bold tracking-widest ${
                      activo ? "text-blue-300" : "text-blue-600"
                    }`}
                  >
                    EQUIPO {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="mt-2 text-sm font-bold sm:text-base">
                    {item.nombre}
                  </span>

                  <span
                    className={`mt-1 line-clamp-2 text-[11px] leading-4 ${
                      activo ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {item.modelo}
                  </span>

                  <span
                    className={`absolute right-3 top-3 text-sm ${
                      activo ? "text-blue-300" : "text-slate-400"
                    }`}
                  >
                    {activo ? "−" : "+"}
                  </span>

                </button>
              );
            })}

          </div>
        </div>

        {/* INFORMACIÓN DEL EQUIPO SELECCIONADO */}
        <div
          ref={infoRef}
          className="scroll-mt-24 overflow-hidden border border-slate-200 bg-white"
        >

          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">

            {/* IMAGEN */}
            <div className="relative h-[250px] bg-slate-200 sm:h-[380px] lg:h-full lg:min-h-[420px]">

              <Image
                key={maquina.imagen}
                src={maquina.imagen}
                alt={`${maquina.nombre} - ${maquina.modelo}`}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent" />

              <span className="absolute bottom-6 left-6 right-6 text-sm font-bold uppercase tracking-widest text-white">
                {maquina.categoria}
              </span>

            </div>

            {/* DESCRIPCIÓN */}
            <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-10">

              <div className="flex items-center gap-3">

                <span className="h-[2px] w-8 bg-blue-600" />

                <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                  Equipo seleccionado
                </span>

              </div>

              <h3 className="mt-5 text-2xl font-bold text-slate-900 md:text-3xl">
                {maquina.nombre}
              </h3>

              <p className="mt-2 font-medium text-slate-500">
                {maquina.modelo}
              </p>

              <p className="mt-6 text-sm leading-7 text-slate-600 md:text-base md:leading-8">
                {maquina.descripcion}
              </p>

              <div className="mt-8 h-[2px] w-16 bg-blue-600" />

              <span className="mt-5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                AQUAMETAL · TECNOLOGÍA Y PRECISIÓN
              </span>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
