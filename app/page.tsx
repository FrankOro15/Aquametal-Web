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
  Factory,
  Gauge,
  Layers3,
  Play,
  Pause,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const capacityCards = [
  {
    number: "01",
    label: "Torneado CNC",
    description: "Precisión y productividad para componentes metálicos.",
    tag: "Doble husillo",
  },
  {
    number: "02",
    label: "Tornos automáticos",
    description: "Procesos orientados a la fabricación en serie.",
    tag: "Index / Traub",
  },
  {
    number: "03",
    label: "Centros de maquinado",
    description: "Soluciones de manufactura para distintas geometrías.",
    tag: "Serie y especial",
  },
  {
    number: "04",
    label: "Producción de alto volumen",
    description: "Capacidad para responder a requerimientos continuos.",
    tag: "+5,000 pzas.",
  },
  {
    number: "05",
    label: "Diseño y DFM",
    description: "Ingeniería orientada a los requerimientos de fabricación.",
    tag: "Ingeniería",
  },
  {
    number: "06",
    label: "Inspección de calidad",
    description: "Atención a especificaciones y requisitos del cliente.",
    tag: "ISO 9001",
  },
];

const materials = ["Acero", "Aluminio", "Bronce", "Latón", "Cobre"];

export default function Home() {
  const [activeBackground, setActiveBackground] = useState<1 | 2 | 3>(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [manualVideo, setManualVideo] = useState(false);

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
              src="/images/Fondoprincipal1.jpeg"
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


      {/* BLOQUE DE IDENTIDAD Y CAPACIDAD PRODUCTIVA */}
      <section className="w-full bg-[#EAF0F8] py-8 sm:py-10 lg:py-12">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">

          {/* CINTA DE IDENTIDAD */}
          <div className="flex flex-col gap-5 border-b border-slate-300/80 pb-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <span className="h-10 w-1 shrink-0 bg-[#2563FF]" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0F172A] sm:text-sm">
                  Experiencia que se transforma en capacidad
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Soluciones para necesidades reales de fabricación.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-3 text-xs font-semibold text-slate-600 sm:gap-x-6">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="shrink-0 text-[#2563FF]" />
                Producción en serie
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="shrink-0 text-[#2563FF]" />
                Diversos metales
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="shrink-0 text-[#2563FF]" />
                Mejora continua
              </span>
            </div>
          </div>

          {/* CAPACIDAD PRODUCTIVA */}
          <div className="mt-6 grid w-full grid-cols-1 overflow-hidden border-y border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] lg:mt-8 lg:grid-cols-[0.85fr_1.15fr]">

            {/* PANEL IZQUIERDO */}
            <div className="relative flex min-w-0 flex-col overflow-hidden bg-[#0F172A] px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10" />

              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#70A7FF]">
                  <span className="h-1.5 w-1.5 bg-[#70A7FF]" />
                  Infraestructura y tecnología
                </span>

                <h2 className="mt-5 max-w-lg text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                  Capacidad productiva
                  <span className="text-[#70A7FF]"> para responder a tus necesidades.</span>
                </h2>

                <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
                  Contamos con infraestructura, maquinaria y experiencia para fabricar
                  componentes metálicos de precisión, adaptándonos a los requerimientos
                  de cada proyecto.
                </p>
              </div>

              {/* IMAGEN PRINCIPAL */}
              <div className="relative mt-8 min-h-[230px] flex-1 overflow-hidden border border-white/10 sm:min-h-[280px] lg:min-h-[320px]">
                <img
                  src="/images/inicio_capacidades.jpg"
                  alt="Infraestructura y capacidad productiva de Aquametal"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent p-5 sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#93B9FF]">
                    Precisión industrial
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white sm:text-xl">
                    Tecnología y experiencia en cada pieza
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-6 flex items-center gap-3 border-t border-white/15 pt-5">
                <CheckCircle2 size={19} className="shrink-0 text-[#70A7FF]" />
                <p className="text-xs leading-5 text-slate-300 sm:text-sm">
                  Compromiso con la calidad y la mejora continua.
                </p>
              </div>
            </div>

            {/* PANEL DERECHO */}
            <div className="min-w-0 bg-[#F5F8FD] p-5 sm:p-8 lg:p-10 xl:p-12">
              <div className="mb-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2563FF]">
                  Nuestra infraestructura
                </p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
                  Una capacidad que marca la diferencia
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                  Recursos y experiencia para respaldar las necesidades de producción
                  de nuestros clientes.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">

                {/* TARJETA 1 */}
                <article className="flex min-w-0 flex-col border border-slate-200 bg-white transition-colors duration-300 hover:border-[#2563FF]/50 lg:col-span-2">
                  <div className="flex h-60 items-center justify-center bg-white p-2 sm:h-56 lg:h-60">
                    <img
                      src="/images/inicio_l1.png"
                      alt="Producción en dos turnos"
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col border-t border-slate-100 p-5">
                    <p className="text-2xl font-bold tracking-tight text-[#2563FF]">
                      Dos turnos
                    </p>
                    <h4 className="mt-2 text-sm font-bold text-[#0F172A]">
                      Producción continua
                    </h4>
                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      Organización operativa para responder a los requerimientos de fabricación.
                    </p>
                  </div>
                </article>

                {/* TARJETA 2 */}
                <article className="flex min-w-0 flex-col border border-slate-200 bg-white transition-colors duration-300 hover:border-[#2563FF]/50 lg:col-span-2">
                   <div className="flex h-60 items-center justify-center bg-white p-2 sm:h-56 lg:h-60">
                    <img
                      src="/images/inicio_l2.png"
                      alt="Superficie de la planta industrial"
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col border-t border-slate-100 p-5">
                    <p className="text-2xl font-bold tracking-tight text-[#2563FF]">
                      1,000 m²
                    </p>
                    <h4 className="mt-2 text-sm font-bold text-[#0F172A]">
                      Superficie de planta
                    </h4>
                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      Espacio destinado a las operaciones y los procesos de fabricación.
                    </p>
                  </div>
                </article>

                {/* TARJETA 3 */}
                <article className="flex min-w-0 flex-col border border-slate-200 bg-white transition-colors duration-300 hover:border-[#2563FF]/50 lg:col-span-2">
                   <div className="flex h-60 items-center justify-center bg-white p-2 sm:h-56 lg:h-60">
                    <img
                      src="/images/inicio_l3.png"
                      alt="Maquinaria para fabricación de piezas metálicas"
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col border-t border-slate-100 p-5">
                    <p className="text-2xl font-bold tracking-tight text-[#2563FF]">
                      +30
                    </p>
                    <h4 className="mt-2 text-sm font-bold text-[#0F172A]">
                      Máquinas
                    </h4>
                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      Equipamiento para atender diferentes necesidades de mecanizado.
                    </p>
                  </div>
                </article>

                {/* TARJETA 4 */}
                <article className="flex min-w-0 flex-col border border-slate-200 bg-white transition-colors duration-300 hover:border-[#2563FF]/50 lg:col-span-2 lg:col-start-2">
                   <div className="flex h-60 items-center justify-center bg-white p-2 sm:h-56 lg:h-60">
                    <img
                      src="/images/inicio_l4.png"
                      alt="Piezas metálicas de precisión para clientes"
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
          
                  <div className="flex flex-1 flex-col border-t border-slate-100 p-5">
                    <p className="text-2xl font-bold tracking-tight text-[#2563FF]">
                      +100
                    </p>
                    <h4 className="mt-2 text-sm font-bold text-[#0F172A]">
                      Clientes atendidos
                    </h4>
                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      Soluciones de fabricación enfocadas en las necesidades de cada cliente.
                    </p>
                  </div>
                </article>

                {/* TARJETA 5 */}
                <article className="flex min-w-0 flex-col border border-slate-200 bg-white transition-colors duration-300 hover:border-[#2563FF]/50 lg:col-span-2">
                  <div className="flex h-60 items-center justify-center bg-white p-2 sm:h-56 lg:h-60">
                    <img
                      src="/images/inicio_l5.png"
                      alt="Capacidad de exportación internacional"
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col border-t border-slate-100 p-5">
                    <p className="text-2xl font-bold tracking-tight text-[#2563FF]">
                      Exportación
                    </p>
                    <h4 className="mt-2 text-sm font-bold text-[#0F172A]">
                      Capacidad internacional
                    </h4>
                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      Capacidad para atender proyectos con requerimientos de exportación.
                    </p>
                  </div>
                </article>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESOS DE MANUFACTURA */}
      <section className="bg-[#F3F5F9] px-6 py-20 md:px-10 md:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#2563FF]" />
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#2563FF]">
                  Procesos de manufactura
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
                Tecnología y experiencia en cada componente.
              </h2>
            </div>

            <p className="max-w-2xl leading-8 text-slate-600">
              Trabajamos con diferentes configuraciones de maquinaria para
              fabricar piezas de acuerdo con las características y
              especificaciones de cada proyecto.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="group relative min-h-[430px] overflow-hidden bg-[#0F172A]">
              <Image
                src="/images/CNC.jpg"
                alt="Proceso de torneado CNC en Aqua-Metal"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#080F1E] via-[#080F1E]/60 to-[#080F1E]/10" />
              <div className="absolute left-0 top-0 h-1 w-24 bg-[#2563FF] transition-all duration-300 group-hover:w-40" />

              <div className="relative flex min-h-[430px] flex-col justify-end p-7 sm:p-9">
                <div className="mb-5 flex h-12 w-12 items-center justify-center border border-white/25 bg-white/10 text-blue-300 backdrop-blur-sm">
                  <Gauge size={25} />
                </div>

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                  Precisión y rendimiento
                </span>

                <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  Torneado CNC
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-7 text-slate-200">
                  Procesos de torneado de alta velocidad y doble husillo para
                  componentes metálicos que requieren atender geometrías y
                  especificaciones de fabricación.
                </p>

                <div className="mt-6 flex flex-wrap gap-3 border-t border-white/20 pt-5">
                  <span className="border border-white/20 bg-white/[0.06] px-3 py-2 text-xs font-semibold text-white">
                    Rango: 1–60 mm
                  </span>
                  <span className="border border-white/20 bg-white/[0.06] px-3 py-2 text-xs font-semibold text-white">
                    Producción en serie
                  </span>
                </div>
              </div>
            </article>

            <article className="group relative min-h-[430px] overflow-hidden bg-[#0F172A]">
              <Image
                src="/images/Fondoprincipal1.jpeg"
                alt="Tornos automáticos en el área de producción"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#080F1E] via-[#080F1E]/60 to-[#080F1E]/10" />
              <div className="absolute left-0 top-0 h-1 w-24 bg-[#2563FF] transition-all duration-300 group-hover:w-40" />

              <div className="relative flex min-h-[430px] flex-col justify-end p-7 sm:p-9">
                <div className="mb-5 flex h-12 w-12 items-center justify-center border border-white/25 bg-white/10 text-blue-300 backdrop-blur-sm">
                  <Cog size={25} />
                </div>

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                  Productividad industrial
                </span>

                <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  Tornos automáticos
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-7 text-slate-200">
                  Fabricación de componentes mediante equipos automáticos y
                  procesos orientados a responder a necesidades de volumen,
                  repetibilidad y continuidad productiva.
                </p>

                <div className="mt-6 flex flex-wrap gap-3 border-t border-white/20 pt-5">
                  <span className="border border-white/20 bg-white/[0.06] px-3 py-2 text-xs font-semibold text-white">
                    Index / Traub
                  </span>
                  <span className="border border-white/20 bg-white/[0.06] px-3 py-2 text-xs font-semibold text-white">
                    Alto volumen
                  </span>
                </div>
              </div>
            </article>
          </div>

          <div className="mt-8 flex flex-col justify-between gap-5 border-l-2 border-[#2563FF] bg-white px-6 py-6 sm:flex-row sm:items-center sm:px-8">
            <div>
              <h3 className="font-bold text-[#0F172A]">
                ¿Buscas un proceso para tu proyecto?
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                Conoce nuestras capacidades y revisa las opciones de
                manufactura disponibles.
              </p>
            </div>

            <Link
              href="/servicios"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#2563FF] transition hover:text-blue-700"
            >
              Ver servicios
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* MATERIALES */}
      <section className="bg-white px-6 py-16 md:px-10 md:py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#2563FF]" />
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#2563FF]">
                Materiales
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">
              Distintos metales. Requerimientos específicos.
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-slate-600">
              Trabajamos con materiales ferrosos y no ferrosos de acuerdo con
              las necesidades de cada proyecto y sus especificaciones de
              fabricación.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {materials.map((material, index) => (
              <div
                key={material}
                className={`flex min-h-24 items-center gap-3 border p-4 transition-colors hover:border-[#2563FF] ${index === 0
                    ? "border-[#2563FF] bg-blue-50"
                    : "border-slate-200 bg-white"
                  }`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#0F172A] text-xs font-bold text-white">
                  0{index + 1}
                </span>
                <span className="text-sm font-bold text-[#0F172A]">
                  {material}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LLAMADO A LA ACCIÓN */}
      <section className="bg-[#F3F5F9] px-6 py-16 md:px-10 md:py-24 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden bg-[#0F172A] px-7 py-12 text-white sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div className="absolute inset-y-0 right-0 w-2/3 bg-gradient-to-l from-[#2563FF]/20 to-transparent" />

          <div className="absolute -right-8 -top-8 hidden text-white/[0.05] sm:block">
            <Factory size={250} strokeWidth={0.7} />
          </div>

          <div className="relative max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#2563FF]" />
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">
                Hablemos de tu proyecto
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Busquemos la solución de fabricación que necesitas.
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-slate-300">
              Conoce las capacidades de Aqua-Metal y conversemos sobre los
              requerimientos de fabricación de tu próximo proyecto industrial.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contacto"
                className="group inline-flex min-h-14 items-center justify-center gap-3 bg-[#2563FF] px-7 py-4 text-sm font-bold text-white transition hover:bg-blue-500"
              >
                Contactar a AquaMetal
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
      </section>

      <Footer />
    </main>
  );
}