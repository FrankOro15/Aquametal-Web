"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  Award,
  CheckCircle2,
  Cog,
  ChevronDown,
  Factory,
  Gauge,
  Play,
  Pause,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const materials = [
  {
    name: "Acero",
    image: "/images/acero.jpg",
    description: "Material ferroso utilizado en una amplia variedad de componentes industriales.",
  },
  {
    name: "Aluminio",
    image: "/images/aluminio.jpg",
    description: "Material ligero para componentes que requieren reducir su peso.",
  },
  {
    name: "Bronce",
    image: "/images/bronce.jpg",
    description: "Aleación de cobre empleada en componentes de distintas aplicaciones industriales.",
  },
  {
    name: "Latón",
    image: "/images/laton.jpg",
    description: "Aleación de cobre y zinc considerada para piezas y componentes metálicos.",
  },
  {
    name: "Cobre",
    image: "/images/cobre.jpg",
    description: "Metal utilizado en componentes de acuerdo con los requisitos de cada proyecto.",
  },
];

export default function Home() {
  const [activeBackground, setActiveBackground] = useState<1 | 2 | 3>(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [manualVideo, setManualVideo] = useState(false);
  const [activeMaterial, setActiveMaterial] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const hasShownVideo = useRef(false);

  useEffect(() => {
    if (!isPlaying || activeBackground === 2) return;

    const timer = window.setTimeout(
      () => {
        if (activeBackground === 1) {
          hasShownVideo.current = true;
          setManualVideo(false);
          setActiveBackground(2);
        } else {
          setActiveBackground(1);
        }
      },
      activeBackground === 3 || hasShownVideo.current ? 4000 : 3000
    );

    return () => window.clearTimeout(timer);
  }, [isPlaying, activeBackground]);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (activeBackground === 2 && (isPlaying || manualVideo)) {
      video.play().catch(() => { });
    } else {
      video.pause();
    }
  }, [activeBackground, isPlaying, manualVideo]);

  const handleVideoEnded = () => {
    setManualVideo(false);
    setActiveBackground(3);
  };

  const togglePlayback = () => {
    if (isPlaying) {
      setIsPlaying(false);
      setManualVideo(false);
      videoRef.current?.pause();
      return;
    }

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    hasShownVideo.current = false;
    setActiveBackground(1);
    setManualVideo(false);
    setIsPlaying(true);
  };

  const selectBackground = (background: 1 | 2 | 3) => {
    setIsPlaying(false);
    setActiveBackground(background);

    if (background === 2) {
      hasShownVideo.current = true;
      setManualVideo(true);

      if (videoRef.current) {
        videoRef.current.currentTime = 0;
      }
    } else {
      setManualVideo(false);
      videoRef.current?.pause();
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      <Navbar />

      {/* HERO PRINCIPAL */}
      <section className="relative isolate overflow-hidden bg-[#0F172A] text-white">
        {/* IMAGEN Y VIDEO DE FONDO */}
        <div
          className="pointer-events-none absolute inset-0 z-0 lg:inset-y-0 lg:left-auto lg:right-0 lg:w-[53%]"
          aria-hidden="true"
        >
          <div
            className={`absolute inset-0 transition-opacity duration-1000 ${activeBackground === 1 ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src="/images/CNC.jpg"
              alt=""
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 53vw"
              className="object-cover object-center"
              style={{
                filter: "grayscale(25%) contrast(1.05)",
              }}
            />
          </div>

          <div
            className={`absolute inset-0 transition-opacity duration-1000 ${activeBackground === 3 ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src="/images/nosotros/nosotros-plantaaa.jpg"
              alt=""
              fill
              sizes="(max-width: 1023px) 100vw, 53vw"
              className="object-cover object-center"
            />
          </div>

          <video
            ref={videoRef}
            muted
            playsInline
            preload="metadata"
            onEnded={handleVideoEnded}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${activeBackground === 2 ? "opacity-100" : "opacity-0"
              }`}
          >
            <source src="/videos/videotornos.mp4" type="video/mp4" />
          </video>

          {/* OSCURECIMIENTO EXCLUSIVO PARA MÓVIL */}
          <div className="absolute inset-0 bg-[#0F172A]/55 lg:hidden" />

          {/* DEGRADADOS ORIGINALES DE PC */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-[#0F172A]/20" />
        </div>

        {/* CONTENIDO */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-8 md:px-10 lg:px-12 lg:pt-28 lg:pb-0">
          <div className="grid items-center gap-8 lg:min-h-[590px] lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
            {/* TEXTO Y BOTONES */}
            <div className="relative z-20 py-2 sm:py-4 lg:py-8">
              <div className="mb-5 inline-flex max-w-full items-center gap-2 border border-white/20 bg-[#0F172A]/70 px-4 py-2 backdrop-blur-sm">
                <Award size={16} className="shrink-0 text-[#70A7FF]" />
                <span className="text-xs font-semibold text-slate-100 sm:text-sm">
                  Más de 25 años de experiencia
                </span>
              </div>

              <h1 className="max-w-[620px] text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl xl:text-6xl">
                Torneado de Alto Volumen.
                <span className="mt-2 block text-[#70A7FF]">
                  Suministro Programado y Maquinado CNC
                </span>
              </h1>

              <p className="mt-5 max-w-md text-base leading-7 text-slate-200 sm:mt-6 sm:text-lg sm:leading-8">
                Tu aliado estratégico en contratos de fabricación en serie.
                Procesamos componentes metálicos en acero, aluminio, bronce,
                latón y cobre para respaldar líneas de producción e industrias
                exigentes.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap">
                <Link
                  href="/servicios"
                  className="group inline-flex min-h-14 items-center justify-center gap-3 bg-[#2563FF] px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-500"
                >
                  Explorar capacidades
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/contacto"
                  className="inline-flex min-h-14 items-center justify-center gap-3 border border-white/35 bg-[#0F172A]/75 px-6 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white hover:bg-white/10"
                >
                  Hablemos de tu proyecto
                  <ArrowDown size={17} />
                </Link>
              </div>
            </div>

            {/* CONTROLES DE IMAGEN Y VIDEO */}
            <div className="relative z-20 flex items-center justify-between gap-4 border-t border-white/15 py-4 lg:static lg:col-start-2 lg:row-start-1 lg:self-end lg:justify-self-end lg:border-0 lg:py-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80 sm:text-xs sm:tracking-[0.2em]">
                Aqua-Metal · Manufactura industrial
              </p>

              <div
                className="flex shrink-0 items-center gap-1 border border-white/20 bg-[#0F172A]/85 p-1 backdrop-blur-md"
                role="group"
                aria-label="Controles del fondo"
              >
                <button
                  type="button"
                  onClick={() => selectBackground(1)}
                  aria-label="Mostrar imagen estática"
                  aria-pressed={activeBackground === 1}
                  className={`flex h-9 w-9 items-center justify-center text-sm font-bold transition ${activeBackground === 1
                    ? "bg-[#2563FF] text-white"
                    : "text-slate-300 hover:bg-white/10"
                    }`}
                >
                  1
                </button>

                <button
                  type="button"
                  onClick={() => selectBackground(2)}
                  aria-label="Mostrar video de tornos"
                  aria-pressed={activeBackground === 2}
                  className={`flex h-9 w-9 items-center justify-center text-sm font-bold transition ${activeBackground === 2
                    ? "bg-[#2563FF] text-white"
                    : "text-slate-300 hover:bg-white/10"
                    }`}
                >
                  2
                </button>

                <button
                  type="button"
                  onClick={() => selectBackground(3)}
                  aria-label="Mostrar imagen de maquinaria CNC"
                  aria-pressed={activeBackground === 3}
                  className={`flex h-9 w-9 items-center justify-center text-sm font-bold transition ${activeBackground === 3
                    ? "bg-[#2563FF] text-white"
                    : "text-slate-300 hover:bg-white/10"
                    }`}
                >
                  3
                </button>

                <span className="mx-1 h-6 w-px bg-white/20" />

                <button
                  type="button"
                  onClick={togglePlayback}
                  aria-label={isPlaying ? "Pausar secuencia" : "Reproducir secuencia"}
                  title={isPlaying ? "Pausar secuencia" : "Reproducir secuencia"}
                  className="flex h-9 w-9 items-center justify-center text-white transition hover:bg-white/10"
                >
                  {isPlaying ? (
                    <Pause size={17} />
                  ) : (
                    <Play size={17} className="ml-0.5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* INDICADORES DE CAPACIDAD */}
          <div className="relative z-10 mt-8 grid gap-6 border-t border-white/20 pt-7 sm:grid-cols-2 lg:mt-8 lg:grid-cols-4 lg:gap-5 lg:pb-8">
            <div className="border-l-2 border-[#2563FF] pl-4">
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                +5,000
              </p>
              <p className="mt-2 text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-slate-300">
                Piezas por lote semanal
              </p>
            </div>

            <div className="border-l-2 border-white/25 pl-4">
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                1–60 mm
              </p>
              <p className="mt-2 text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-slate-300">
                Rango de maquinado
              </p>
            </div>

            <div className="border-l-2 border-white/25 pl-4">
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                +30
              </p>
              <p className="mt-2 text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-slate-300">
                Máquinas especializadas
              </p>
            </div>

            <div className="border-l-2 border-white/25 pl-4">
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                ISO 9001
              </p>
              <p className="mt-2 text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-slate-300">
                Sistema de gestión de calidad
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="w-full bg-[#EAF0F8] py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8">

          {/* Franja de identidad */}
          <div className="mb-5 flex flex-col gap-4 border border-[#C5D5EA] bg-[#DCE8F7] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2563FF]">
                Experiencia y capacidad industrial
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Fabricación de componentes metálicos para distintos sectores industriales.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {[
                "Producción en serie",
                "Trabajo con diversos metales",
                "Calidad y mejora continua",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-slate-700"
                >
                  <CheckCircle2 size={17} className="text-[#2563FF]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Presentación principal */}
          <div className="overflow-hidden border border-[#C5D5EA] bg-[#F1F5FB] shadow-sm">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">

              {/* Texto */}
              <div className="flex flex-col justify-center px-6 py-8 sm:px-9 lg:px-10 lg:py-10">
                <span className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#2563FF]">
                  Infraestructura y experiencia
                </span>

                <h2 className="max-w-xl text-3xl font-bold leading-tight text-[#1E293B] sm:text-4xl">
                  Capacidad productiva respaldada por experiencia y tecnología.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                  Contamos con instalaciones, maquinaria especializada y
                  personal con experiencia en la fabricación de componentes
                  metálicos. Nuestra infraestructura nos permite atender
                  diferentes procesos y volúmenes de producción, de acuerdo con
                  las especificaciones de cada cliente.
                </p>

                <div className="mt-7 flex items-center gap-3 border-t border-[#D5E0EF] pt-5">
                  <CheckCircle2
                    size={21}
                    className="shrink-0 text-[#2563FF]"
                  />
                  <p className="text-sm font-semibold text-slate-700">
                    Compromiso con la calidad en cada proceso de fabricación.
                  </p>
                </div>
              </div>

              {/* Imagen principal */}
              <div className="relative h-[240px] sm:h-[320px] lg:h-[390px] xl:h-[430px]">
                <img
                  src="/images/inicio_capacidades.jpg"
                  alt="Infraestructura y capacidad productiva de Aquametal"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 p-5 sm:p-7">
                  <p className="text-lg font-bold text-white sm:text-xl">
                    Precisión industrial
                  </p>
                  <p className="mt-1 text-sm text-slate-200">
                    Tecnología y experiencia en cada pieza
                  </p>
                </div>
              </div>
            </div>

            {/* Separador */}
            <div className="h-px bg-[#C5D5EA]" />

            {/* Capacidades */}
            <div className="bg-[#E7EBF0] px-4 py-12 sm:px-6 sm:py-14 lg:px-8">

              {/* Encabezado */}
              <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#2563EB]">
                  Nuestra infraestructura
                </span>

                <h3 className="mt-3 text-3xl font-bold leading-tight text-[#1E293B] sm:text-4xl">
                  Una capacidad que marca la diferencia
                </h3>

                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#475569] sm:text-base">
                  Recursos, tecnología y experiencia para respaldar las necesidades
                  de producción de nuestros clientes.
                </p>

                <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#2563EB]" />
              </div>

              {/* Elementos de capacidad */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:gap-x-10 sm:gap-y-14 lg:grid-cols-6">

                {[
                  {
                    image: "/images/inicio_l1.png",
                    value: "Dos turnos",
                    title: "Producción continua",
                    description:
                      "Organización operativa para responder a los requerimientos de fabricación.",
                  },
                  {
                    image: "/images/inicio_l2.png",
                    value: "1,000 m²",
                    title: "Superficie de planta",
                    description:
                      "Espacio destinado a las operaciones y los procesos de fabricación.",
                  },
                  {
                    image: "/images/inicio_l3.png",
                    value: "+30",
                    title: "Máquinas",
                    description:
                      "Equipamiento para atender diferentes necesidades de mecanizado.",
                  },
                  {
                    image: "/images/inicio_l4.png",
                    value: "+100",
                    title: "Clientes atendidos",
                    description:
                      "Soluciones de fabricación enfocadas en las necesidades de cada cliente.",
                  },
                  {
                    image: "/images/inicio_l5.png",
                    value: "Exportación",
                    title: "Capacidad internacional",
                    description:
                      "Capacidad para atender proyectos con requerimientos de exportación.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className={`group col-span-1 flex flex-col items-center text-center ${index === 3
                      ? "lg:col-span-2 lg:col-start-2"
                      : "lg:col-span-2"
                      }`}
                  >
                    {/* Imagen */}
                    <div className="mb-5 flex h-44 w-full items-center justify-center sm:h-52 lg:h-56 xl:h-60">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full max-w-[250px] object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                      />
                    </div>

                    {/* Información */}
                    <div className="mx-auto max-w-sm">
                      <p className="text-2xl font-bold text-[#2563EB] transition-colors duration-300 group-hover:text-[#1D4ED8] sm:text-3xl">
                        {item.value}
                      </p>

                      <h4 className="mt-2 text-lg font-bold text-[#1E293B]">
                        {item.title}
                      </h4>

                      <p className="mt-3 text-sm leading-6 text-[#475569] sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INICIO BLOQUE MATERIALES ===== */}
      {/* MATERIALES */}
      <section className="bg-[#0F172A] px-6 py-16 md:px-10 md:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">

          {/* Encabezado */}
          <div className="mb-10 mx-auto max-w-2xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-[#70A7FF]" />
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#70A7FF]">
                Materiales
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              Distintos metales.
              <span className="block text-[#70A7FF]">
                Requerimientos específicos.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-8 text-slate-300">
              Trabajamos con materiales ferrosos y no ferrosos de acuerdo con
              las necesidades de cada proyecto y sus especificaciones de fabricación.
            </p>
          </div>

          {/* Cuadrícula de materiales */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">

            {materials.map((material, index) => {
              const isActive = activeMaterial === material.name;

              return (
                <button
                  key={material.name}
                  type="button"
                  onClick={() =>
                    setActiveMaterial(isActive ? null : material.name)
                  }
                  aria-expanded={isActive}
                  className={`group relative min-h-[250px] overflow-hidden border text-left transition-all duration-300 sm:min-h-[270px] lg:col-span-2 ${index === 3 ? "lg:col-start-2" : ""
                    } ${index === 4 ? "lg:col-start-4" : ""} ${isActive
                    ? "border-[#70A7FF]"
                    : "border-white/10 hover:border-white/40"
                    }`}
                >
                  {/* Imagen de fondo */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${material.image})`,
                    }}
                  />

                  {/* Oscurecimiento */}
                  <div
                    className={`absolute inset-0 transition-all duration-300 ${isActive
                      ? "bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/40 to-[#0F172A]/20"
                      : "bg-gradient-to-t from-[#0F172A]/85 via-[#0F172A]/50 to-[#0F172A]/30 group-hover:from-[#0F172A]/75"
                      }`}
                  />

                  {/* Contenido */}
                  <div className="relative z-10 flex min-h-[250px] flex-col justify-between p-5 sm:min-h-[270px] md:p-6">

                    {/* Parte superior */}
                    <div className="flex items-center justify-end">
                      <span
                        className={`flex h-9 w-9 items-center justify-center border border-white/40 text-white transition-all duration-300 ${isActive
                          ? "rotate-180 border-[#2563FF] bg-[#2563FF]"
                          : "group-hover:border-[#70A7FF] group-hover:bg-[#2563FF]"
                          }`}
                      >
                        <ChevronDown size={18} />
                      </span>
                    </div>

                    {/* Parte inferior */}
                    <div>
                      <h3 className="text-2xl font-bold text-white md:text-3xl">
                        {material.name}
                      </h3>

                      {/* Descripción desplegable */}
                      <div
                        className={`grid transition-all duration-300 ${isActive
                          ? "mt-4 grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                          }`}
                      >
                        <div className="overflow-hidden">
                          <p className="max-w-md border-t border-white/30 pt-4 text-sm leading-7 text-slate-200">
                            {material.description}
                          </p>
                        </div>
                      </div>

                      {/* Indicador */}
                      {!isActive && (
                        <p className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-300">
                          Ver material
                        </p>
                      )}
                    </div>

                  </div>
                </button>
              );
            })}

          </div>
        </div>
      </section>
      {/* ===== FIN BLOQUE MATERIALES ===== */}

      {/* SERVICIOS */}
      <section className="bg-[#F3F5F9] pt-20 pb-8">
        <div className="mx-auto max-w-7xl px-6">

          {/* Encabezado */}
          <div className="mb-12">
            <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
              Lo que hacemos
            </span>

            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
              Servicios
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              Soluciones de manufactura y soporte técnico para atender las
              necesidades de cada proyecto.
            </p>
          </div>

          {/* Servicios */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {/* Diseño */}
            <div className="group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/diseño.jpeg"
                  alt="Diseño de piezas y soluciones de manufactura"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover saturate-[1.2] grayscale-[8%] sepia-[8%] transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-5 border-t-2 border-[#2563EB] pt-4">
                <h3 className="text-xl font-bold text-[#0F172A]">
                  Diseño
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Soluciones personalizadas para cada proyecto.
                </p>
              </div>
            </div>

            {/* Fabricación */}
            <div className="group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/fabricacion.jpg"
                  alt="Fabricación de componentes industriales"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover saturate-[1.2] grayscale-[8%] sepia-[8%] transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-5 border-t-2 border-[#2563EB] pt-4">
                <h3 className="text-xl font-bold text-[#0F172A]">
                  Fabricación
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Manufactura de componentes con máxima precisión.
                </p>
              </div>
            </div>

            {/* Maquila de piezas */}
            <div className="group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/maquila.jpg"
                  alt="Maquila de piezas mediante procesos especializados"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover saturate-[1.2] grayscale-[8%] sepia-[8%] transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-5 border-t-2 border-[#2563EB] pt-4">
                <h3 className="text-xl font-bold text-[#0F172A]">
                  Maquila de piezas
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Procesos especializados de maquinado.
                </p>
              </div>
            </div>

            {/* Asistencia técnica */}
            <div className="group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/asistencia.jpg"
                  alt="Asistencia técnica en procesos de manufactura"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover saturate-[1.2] grayscale-[8%] sepia-[8%] transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-5 border-t-2 border-[#2563EB] pt-4">
                <h3 className="text-xl font-bold text-[#0F172A]">
                  Asistencia técnica
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Soporte integral durante el proceso productivo.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
      {/* ===== FIN BLOQUE SERVICIOS ===== */}


      {/* LLAMADO A LA ACCIÓN */}
      <section className="bg-[#F3F5F9] px-6 pt-8 pb-16 md:px-10 md:pt-12 md:pb-24 lg:px-12">
  <div className="mx-auto grid max-w-7xl overflow-hidden bg-[#0F172A] text-white lg:grid-cols-[1.15fr_0.85fr]">

    {/* Contenido */}
    <div className="relative flex flex-col justify-center px-7 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
      <div className="absolute -right-10 -top-10 text-white/[0.04]">
        <Factory size={220} strokeWidth={0.7} />
      </div>

      <div className="relative z-10">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-[2px] w-10 bg-[#2563FF]" />
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">
            Hablemos de tu proyecto
          </span>
        </div>

        <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          ¿Buscas un proveedor para la fabricación de tus componentes?
        </h2>

        <p className="mt-6 max-w-xl leading-8 text-slate-300">
          Conoce nuestros procesos de manufactura y compártenos los
          requerimientos de tu proyecto. Estamos listos para conocer tus
          necesidades de producción y trabajar contigo.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contacto"
            className="group inline-flex min-h-14 items-center justify-center gap-3 bg-[#2563FF] px-7 py-4 text-sm font-bold text-white transition hover:bg-blue-500"
          >
            Contactar a Aquametal
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="/servicios"
            className="inline-flex min-h-14 items-center justify-center border border-white/25 px-7 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            Explorar servicios
          </Link>
        </div>
      </div>
    </div>

    {/* Imagen */}
    <div className="relative min-h-[280px] sm:min-h-[380px] lg:min-h-full">
      <Image
        src="/images/cta.jpg"
        alt="Maquinaria CNC durante un proceso de fabricación"
        fill
        sizes="(max-width: 1024px) 100vw, 42vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 to-transparent lg:bg-gradient-to-r lg:from-[#0F172A]/20 lg:to-transparent" />
    </div>

  </div>
</section>

      <Footer />
    </main>
  );
}