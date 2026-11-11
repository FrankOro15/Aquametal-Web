
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Play, Ruler, Factory } from "lucide-react";

const maquinas = [
  {
    nombre: "INDEX 42",
    modelo: "Torno automático de levas",
    categoria: "Torneado automático de precisión",
    descripcion:
      "Torno automático de levas diseñado para la fabricación de componentes metálicos de pequeñas dimensiones en grandes volúmenes. Su sistema de alimentación y mecanizado automatizado permite producir piezas repetitivas con precisión y uniformidad, ideal para procesos de producción continua.",
    imagen: "/images/indexon.jpeg",
    video: "/videos/indexon.mp4",
    capacidad: "42 mm",
    cantidad: 2,
  },
  {
    nombre: "INDEX ON",
    modelo: "Torno automático de levas",
    categoria: "Torneado de precisión",
    descripcion:
      "Torno automático utilizado para fabricar componentes metálicos mediante operaciones de corte y mecanizado secuencial. Su automatización permite mantener ciclos de producción constantes y obtener piezas con características dimensionales uniformes.",
    imagen: "/images/index42.jpeg",
    capacidad: "12 mm",
    cantidad: 3,
  },

  {
    nombre: "TRAUB A25",
    modelo: "Torno automático de levas",
    categoria: "Manufactura de componentes",
    descripcion:
      "Equipo automático de torneado destinado a la fabricación de componentes metálicos mediante ciclos de mecanizado repetitivos. Está orientado a procesos de producción en serie donde la precisión dimensional y la consistencia entre piezas son fundamentales.",
    imagen: "/images/traub-a25.jpeg",
    video: "/videos/traub-a25.mp4",
    capacidad: "42 mm",
    cantidad: 10,
  },
  {
    nombre: "TRAUB A20",
    modelo: "Torno automático de levas",
    categoria: "Producción automatizada",
    descripcion:
      "Torno automático especializado en la fabricación de piezas torneadas de precisión. Su configuración permite realizar diferentes operaciones de mecanizado de forma secuencial, favoreciendo la producción de componentes pequeños con geometrías definidas y acabados uniformes.",
    imagen: "/images/ta20.jpeg",
    video: "",
    capacidad: "42 mm",
    cantidad: 1,
  },
  {
    nombre: "MOUTIER SUISSE PETERMANN",
    modelo: "Torno automático de precisión",
    categoria: "Torneado automático",
    descripcion:
      "Torno automático utilizado para la fabricación de componentes metálicos mediante operaciones de torneado repetitivas. Está orientado a la producción de piezas de precisión, manteniendo uniformidad dimensional durante los procesos de fabricación.",
    imagen: "/images/msp.jpeg",
    video: "/videos/msp.mp4",
    capacidad: "4 mm",
    cantidad: 2,
  },
   {
    nombre: "FADAL",
    modelo: "Centro de maquinado CNC de 40 x 20 pulgadas",
    categoria: "Maquinado CNC",
    descripcion:
      "Centro de maquinado CNC diseñado para realizar operaciones de fresado, barrenado y mecanizado de componentes metálicos. Su área de trabajo permite procesar piezas de diferentes dimensiones mediante trayectorias programadas y operaciones de precisión.",
    imagen: "/images/CNC.jpg",
    video: "/videos/fadal.mp4",
    capacidad: "40 x 20 pulgadas",
    cantidad: 1,
  },
  {
    nombre: "GUSS & ROCH",
    modelo: "Torno CNC estándar",
    categoria: "Torneado CNC",
    descripcion:
      "Equipo de control numérico computarizado que permite fabricar componentes mediante instrucciones programadas. Su sistema CNC ofrece control sobre los movimientos de mecanizado, facilitando la elaboración de geometrías precisas y la repetición de procesos de fabricación.",
    imagen: "/images/GREstandar.jpeg",
    video: "/videos/GREstandar.mp4",
    capacidad: "42 mm",
    cantidad: 1,
  },
  {
    nombre: "GUSS & ROCH",
    modelo: "Torno CNC de doble husillo",
    categoria: "Mecanizado CNC",
    descripcion:
      "Torno CNC equipado con doble husillo, una configuración que permite trabajar con dos posiciones de mecanizado y realizar operaciones coordinadas sobre una pieza. Esta característica puede reducir tiempos de ciclo y facilitar la fabricación de componentes que requieren varias etapas de torneado.",
    imagen: "/images/GRdoble.jpg",
    video: "",
    capacidad: "60 mm",
    cantidad: 2,
  },
  {
    nombre: "HEADMAN",
    modelo: "Torno paralelo CNC",
    categoria: "Mecanizado de precisión",
    descripcion:
      "Torno paralelo con control numérico utilizado para mecanizar piezas cilíndricas mediante operaciones como cilindrado, refrentado y ranurado. Su programación permite controlar las trayectorias de corte y mantener dimensiones uniformes durante la fabricación de componentes.",
    imagen: "/images/headman.jpg",
    video: "",
    capacidad: "250 mm",
    cantidad: 1,
  },
  {
    nombre: "DAEWOO",
    modelo: "Centro de maquinado CNC de doble mesa",
    categoria: "Maquinado CNC",
    descripcion:
      "Centro de maquinado diseñado para realizar operaciones como fresado, barrenado y otras tareas de mecanizado. Su configuración de doble mesa permite preparar una pieza mientras otra se encuentra en proceso, ayudando a optimizar los tiempos de operación y mejorar la continuidad de producción.",
    imagen: "/images/daewoo.jpg",
    video: "",
    capacidad: "400 x 400 mm",
    cantidad: 1,
  },
  {
    nombre: "HUARUI",
    modelo: "Torno CNC para segundas operaciones",
    categoria: "Torneado CNC",
    descripcion:
      "Equipo de torneado CNC utilizado para realizar operaciones secundarias sobre componentes previamente fabricados. Permite trabajar detalles dimensionales, ajustes y acabados mediante procesos programados que favorecen la precisión y repetibilidad.",
    imagen: "/images/t2op.jpeg",
    video: "/videos/t2op.mp4",
    capacidad: "25 mm",
    cantidad: 1,
  },

  {
    nombre: "HUARUI",
    modelo: "Roscadora automática",
    categoria: "Roscado de componentes",
    descripcion:
      "Equipo automático destinado a la fabricación de roscas en componentes metálicos. Permite realizar operaciones repetitivas de roscado, favoreciendo la uniformidad de los perfiles y la continuidad en procesos de producción en serie.",
    imagen: "/images/rosca.jpeg",
    video: "",
    capacidad: "10 mm",
    cantidad: 2,
  },
  {
    nombre: "HUARUI",
    modelo: "Moleteadora de 3 ejes",
    categoria: "Moleteado de precisión",
    descripcion:
      "Equipo especializado en el moleteado de superficies metálicas para generar patrones que mejoran el agarre y las características funcionales de los componentes. Su configuración de tres ejes permite trabajar distintas geometrías según los requerimientos de fabricación.",
    imagen: "/images/m3ej.jpg",
    video: "",
    capacidad: "13 mm",
    cantidad: 1,
  },
  {
    nombre: "HUARUI",
    modelo: "Roladora de cuerdas por peines",
    categoria: "Formado de roscas",
    descripcion:
      "Equipo diseñado para formar roscas mediante el proceso de laminado con peines. Este método permite generar perfiles roscados por deformación del material, sin retirar viruta, favoreciendo la resistencia y uniformidad de los componentes.",
    imagen: "/images/rcpp.jpg",
    video: "",
    capacidad: "13 mm",
    cantidad: 1,
  },
  {
    nombre: "HUARUI",
    modelo: "Forjadora de tuercas de 6 golpes",
    categoria: "Forjado en frío",
    descripcion:
      "Equipo de conformado metálico diseñado para fabricar tuercas mediante un proceso de forjado por etapas. Su sistema de seis golpes permite transformar el material progresivamente hasta obtener la geometría requerida para la fabricación de componentes de fijación.",
    imagen: "/images/ft3g.jpg",
    video: "",
    capacidad: "13 mm",
    cantidad: 1,
  },
  {
    nombre: "HUARUI",
    modelo: "Forjadora de tornillos de 4 golpes",
    categoria: "Forjado en frío",
    descripcion:
      "Equipo especializado en la fabricación de tornillos mediante un proceso de conformado por golpes sucesivos. Permite dar forma al material progresivamente para obtener componentes de fijación con geometrías uniformes y adecuados para producción en serie.",
    imagen: "/images/ft4g.jpg",
    video: "",
    capacidad: "4 mm",
    cantidad: 1,
  },
];

export default function Maquinaria() {
  const [seleccionada, setSeleccionada] = useState(0);
  const [videoActivo, setVideoActivo] = useState(false);
  const [imagenVisible, setImagenVisible] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null);
  const nombreRef = useRef<HTMLHeadingElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const maquina = maquinas[seleccionada];

  // FINALIZAR VIDEO
  const finalizarVideo = () => {
    setVideoActivo(false);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  // REPRODUCIR VIDEO
  const reproducirVideo = async () => {
    if (!maquina.video || !videoRef.current) return;

    try {
      videoRef.current.currentTime = 0;
      await videoRef.current.play();
      setVideoActivo(true);
    } catch {
      finalizarVideo();
    }
  };

  // CAMBIAR MAQUINARIA
  const cambiarMaquina = (index: number) => {
    if (index === seleccionada) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setImagenVisible(false);
    finalizarVideo();

    timeoutRef.current = setTimeout(() => {
      setSeleccionada(index);
      setImagenVisible(true);
      timeoutRef.current = null;
    }, 150);
  };

  // ALINEAR EL NOMBRE DE LA MÁQUINA EN LA PANTALLA
  useEffect(() => {
    if (seleccionada === 0) return;

    const timeout = setTimeout(() => {
      const elemento = nombreRef.current;

      if (!elemento) return;

      const posicion =
        elemento.getBoundingClientRect().top +
        window.scrollY -
        210;

      window.scrollTo({
        top: posicion,
        behavior: "smooth",
      });
    }, 250);

    return () => clearTimeout(timeout);
  }, [seleccionada]);

  // DETENER VIDEO AL CAMBIAR DE MÁQUINA
  useEffect(() => {
    setVideoActivo(false);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [seleccionada]);

  // LIMPIAR TEMPORIZADORES
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* ENCABEZADO */}
        <div className="mb-12 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Nuestra infraestructura
          </span>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Maquinaria y tecnología
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Contamos con equipos especializados para la fabricación de
            componentes metálicos, combinando tecnología, precisión y capacidad
            de producción.
          </p>
        </div>

        {/* SELECTOR Y PANEL */}
        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.5fr] lg:gap-12">

          {/* SELECTOR DE EQUIPOS */}
          <div className="min-w-0">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
                Selecciona un equipo
              </p>

            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2">
              {maquinas.map((item, index) => (
                <button
                  key={`${item.nombre}-${item.modelo}`}
                  type="button"
                  onClick={() => cambiarMaquina(index)}
                  aria-pressed={seleccionada === index}
                  className={`border p-3 text-left transition-all duration-200 ${
                    seleccionada === index
                      ? "border-blue-600 bg-blue-50 shadow-sm"
                      : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50"
                  }`}
                >
                  <span
                    className={`block text-[10px] font-bold uppercase tracking-wider ${
                      seleccionada === index
                        ? "text-blue-600"
                        : "text-slate-400"
                    }`}
                  >
                  </span>

                  <span
                    className={`mt-1 block text-sm font-bold ${
                      seleccionada === index
                        ? "text-blue-700"
                        : "text-slate-800"
                    }`}
                  >
                    {item.nombre}
                  </span>

                  <span className="mt-1 block text-xs leading-snug text-slate-500">
                    {item.modelo}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* PANEL DE MAQUINARIA */}
          <div className="min-w-0 border border-slate-200 bg-slate-50 lg:grid lg:grid-cols-[1.15fr_0.85fr]">

            {/* IMAGEN Y VIDEO */}
            <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden bg-[#172B45] sm:min-h-[440px] lg:min-h-[600px]">

              {/* DEGRADADO CENTRAL */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.28)_0%,_rgba(30,64,110,0.12)_45%,_transparent_80%)]" />

              {/* CUADRÍCULA TÉCNICA */}
              <div
                className="absolute inset-0 opacity-[0.10]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(147,197,253,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(147,197,253,0.35) 1px, transparent 1px)",
                  backgroundSize: "35px 35px",
                }}
              />

              {/* CÍRCULOS DECORATIVOS */}
              <div className="absolute aspect-square h-[75%] rounded-full border border-blue-300/20" />

              <div className="absolute aspect-square h-[60%] rounded-full border border-blue-300/15" />

              {/* IMAGEN */}
              <div
                className={`absolute inset-0 transition-opacity duration-300 ${
                  imagenVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  key={maquina.imagen}
                  src={maquina.imagen}
                  alt={`${maquina.nombre} - ${maquina.modelo}`}
                  fill
                  priority={seleccionada === 0}
                  sizes="(max-width: 1023px) 100vw, 45vw"
                  className={`object-contain p-3 sm:p-5 lg:p-6 transition-opacity duration-300 ${
                    videoActivo ? "opacity-0" : "opacity-100"
                  }`}
                />

                {/* VIDEO */}
                {maquina.video && (
                  <>
                    <video
                      ref={videoRef}
                      src={maquina.video}
                      muted
                      playsInline
                      preload="none"
                      onEnded={finalizarVideo}
                      onError={finalizarVideo}
                      className={`absolute inset-0 h-full w-full object-contain p-3 sm:p-5 lg:p-6 transition-opacity duration-300 ${
                        videoActivo
                          ? "opacity-100"
                          : "pointer-events-none opacity-0"
                      }`}
                    />

                    {!videoActivo && (
                      <button
                        type="button"
                        onClick={reproducirVideo}
                        aria-label={`Reproducir video de ${maquina.nombre}`}
                        className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center bg-blue-600 text-white shadow-lg transition hover:bg-blue-700"
                      >
                        <Play size={21} fill="currentColor" />
                      </button>
                    )}
                  </>
                )}
              </div>

              {/* NOMBRE EN LA IMAGEN */}
              <span className="absolute bottom-4 left-5 z-10 text-xs font-bold uppercase tracking-widest text-blue-100/60">
                {maquina.nombre}
              </span>
            </div>

            {/* INFORMACIÓN DEL EQUIPO */}
            <div
              className={`flex flex-col justify-center p-6 transition-opacity duration-300 sm:p-8 lg:p-9 ${
                imagenVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* NOMBRE Y MODELO */}
              <div className="border-l-4 border-blue-600 pl-5">
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600 sm:text-sm">
                  {maquina.categoria}
                </span>

                <h3
                  ref={nombreRef}
                  className="mt-3 text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl"
                >
                  {maquina.nombre}
                </h3>

                <p className="mt-2 text-base font-medium text-slate-500 sm:text-lg">
                  {maquina.modelo}
                </p>
              </div>

              {/* DESCRIPCIÓN */}
              <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base">
                {maquina.descripcion}
              </p>

              {/* DATOS TÉCNICOS */}
              <div className="mt-7 grid grid-cols-2 gap-3">

                <div className="border border-slate-200 bg-white p-3 sm:p-4">
                  <div className="flex flex-wrap items-center gap-2 text-blue-600">
                    <Ruler size={17} />

                    <span className="text-[10px] font-bold uppercase tracking-wider sm:text-[11px]">
                      Capacidad
                    </span>
                  </div>

                  <p className="mt-3 text-lg font-bold text-slate-900">
                    {maquina.capacidad}
                  </p>
                </div>

                <div className="border border-slate-200 bg-white p-3 sm:p-4">
                  <div className="flex flex-wrap items-center gap-2 text-blue-600">
                    <Factory size={17} />

                    <span className="text-[10px] font-bold uppercase tracking-wider sm:text-[11px]">
                      Total máquinas
                    </span>
                  </div>

                  <p className="mt-3 text-lg font-bold text-slate-900">
                    {maquina.cantidad}
                  </p>
                </div>

              </div>

              {/* TEXTO INFERIOR */}
              <div className="mt-7 border-t border-slate-200 pt-5">
                <p className="text-sm leading-6 text-slate-500">
                  Nuestra infraestructura permite atender diferentes
                  requerimientos de fabricación, desde componentes de precisión
                  hasta procesos de producción en serie.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="mt-20 border-t border-slate-200 pt-14">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">

            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                ¿Te interesan nuestros servicios?
              </h3>

              <p className="mt-3 max-w-xl leading-relaxed text-slate-600">
                Contáctanos y conoce cómo podemos ayudarte con tus
                requerimientos de fabricación y maquinado.
              </p>
            </div>

            <Link
              href="/contacto"
              className="inline-flex shrink-0 items-center justify-center bg-blue-600 px-8 py-4 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              Solicitar cotización
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}
