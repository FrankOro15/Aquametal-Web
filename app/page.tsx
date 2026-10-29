
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
  Play,
  Pause,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      video.play().catch(() => {});
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
        {/* FONDO RESPONSIVO: IMÁGENES Y VIDEO */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          aria-hidden="true"
        >
          {/* Fondo 1: imagen CNC */}
          <div
            className={`absolute inset-0 transition-opacity duration-1000 ${
              activeBackground === 1 ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src="/images/CNC.jpg"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 53vw, 100vw"
              className="object-cover object-center lg:object-right"
              style={{
                filter: "grayscale(25%) contrast(1.05)",
              }}
            />
          </div>

          {/* Fondo 2: video de tornos */}
          <video
            ref={videoRef}
            muted
            playsInline
            preload="metadata"
            onEnded={handleVideoEnded}
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${
              activeBackground === 2 ? "opacity-100" : "opacity-0"
            }`}
          >
            <source src="/videos/videotornos.mp4" type="video/mp4" />
          </video>

          {/* Fondo 3: imagen industrial */}
          <div
            className={`absolute inset-0 transition-opacity duration-1000 ${
              activeBackground === 3 ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src="/images/Fondoprincipal1.jpeg"
              alt=""
              fill
              sizes="(min-width: 1024px) 53vw, 100vw"
              className="object-cover object-center lg:object-right"
            />
          </div>

          {/* Oscurecimiento general en móvil y degradado en escritorio */}
          <div className="absolute inset-0 bg-[#0F172A]/65 lg:bg-gradient-to-r lg:from-[#0F172A] lg:via-[#0F172A]/45 lg:to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/95 via-[#0F172A]/35 to-[#0F172A]/55 lg:from-[#0F172A] lg:via-transparent lg:to-[#0F172A]/20" />
        </div>

        {/* CONTENIDO PRINCIPAL */}
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

              <p className="mt-5 max-w-md text-base leading-7 text-slate-100 sm:mt-6 sm:text-lg sm:leading-8">
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
            <div className="relative z-20 flex items-center justify-between gap-3 border-t border-white/20 py-4 lg:static lg:col-start-2 lg:row-start-1 lg:self-end lg:justify-self-end lg:border-0 lg:py-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white sm:text-xs sm:tracking-[0.2em]">
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
                  className={`flex h-9 w-9 items-center justify-center text-sm font-bold transition ${
                    activeBackground === 1
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
                  className={`flex h-9 w-9 items-center justify-center text-sm font-bold transition ${
                    activeBackground === 2
                      ? "bg-[#2563FF] text-white"
                      : "text-slate-300 hover:bg-white/10"
                  }`}
                >
                  2
                </button>

                <button
                  type="button"
                  onClick={() => selectBackground(3)}
                  aria-label="Mostrar imagen industrial"
                  aria-pressed={activeBackground === 3}
                  className={`flex h-9 w-9 items-center justify-center text-sm font-bold transition ${
                    activeBackground === 3
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
                  aria-label={
                    isPlaying ? "Pausar secuencia" : "Reproducir secuencia"
                  }
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
              <p className="mt-2 text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-slate-200">
                Piezas por lote semanal
              </p>
            </div>

            <div className="border-l-2 border-white/25 pl-4">
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                1–60 mm
              </p>
              <p className="mt-2 text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-slate-200">
                Rango de maquinado
              </p>
            </div>

            <div className="border-l-2 border-white/25 pl-4">
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                +30
              </p>
              <p className="mt-2 text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-slate-200">
                Máquinas especializadas
              </p>
            </div>

            <div className="border-l-2 border-white/25 pl-4">
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                ISO 9001
              </p>
              <p className="mt-2 text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-slate-200">
                Sistema de gestión de calidad
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CINTA DE IDENTIDAD */}
      <section className="border-b border-slate-200 bg-[#F3F5F9]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
          <div className="flex items-center gap-3">
            <span className="h-8 w-1 bg-[#2563FF]" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0F172A]">
                Experiencia que se transforma en capacidad
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Soluciones para necesidades reales de fabricación.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-slate-600 sm:gap-x-6">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-[#2563FF]" />
              Producción en serie
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-[#2563FF]" />
              Diversos metales
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-[#2563FF]" />
              Mejora continua
            </span>
          </div>
        </div>
      </section>

      {/* CAPACIDAD PRODUCTIVA */}
      <section className="bg-white px-6 py-16 md:px-10 md:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#2563FF]" />
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#2563FF]">
                  Nuestra capacidad
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
                Infraestructura preparada para producir.
              </h2>
            </div>

            <p className="max-w-2xl leading-8 text-slate-600 lg:pb-1">
              Combinamos experiencia, maquinaria especializada y organización
              productiva para atender requerimientos de manufactura de
              componentes metálicos.
            </p>
          </div>

          <div className="grid overflow-hidden border border-slate-200 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="relative flex min-h-[300px] flex-col justify-between overflow-hidden bg-[#0F172A] p-7 text-white sm:p-10 lg:min-h-[440px]">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/[0.08]" />
              <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full border border-white/[0.08]" />

              <div className="relative">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                  Capacidad productiva
                </span>

                <h3 className="mt-5 max-w-sm text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                  Recursos para responder a las exigencias industriales.
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
                  Procesos orientados a la continuidad de producción, la
                  atención a especificaciones y el cumplimiento de los
                  requerimientos de cada proyecto.
                </p>
              </div>

              <div className="relative mt-10 flex items-center gap-3 border-t border-white/15 pt-5">
                <span className="h-9 w-1 bg-[#2563FF]" />
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                  Experiencia en manufactura metálica
                </p>
              </div>
            </div>

            <div className="grid bg-[#F3F5F9] sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Producción en dos turnos",
                  description:
                    "Organización operativa para atender las necesidades de fabricación.",
                  icon: (
                    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                      <circle cx="32" cy="32" r="21" />
                      <path d="M32 19v14l9 5" />
                      <path d="M12 15l6 1-1 6M52 49l-6-1 1-6" />
                    </svg>
                  ),
                },
                {
                  number: "02",
                  title: "Planta de 1,000 m²",
                  description:
                    "Espacio destinado a las operaciones y procesos de manufactura.",
                  icon: (
                    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                      <path d="M9 53V30l14 8V27l14 9V16l18-7v44H9Z" />
                      <path d="M17 45h5m6 0h5m8-17h5m-5 10h5" />
                      <path d="M5 53h54" />
                    </svg>
                  ),
                },
                {
                  number: "03",
                  title: "Más de 30 máquinas",
                  description:
                    "Equipos especializados para diferentes procesos de fabricación.",
                  icon: (
                    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                      <rect x="10" y="12" width="44" height="34" rx="2" />
                      <path d="M18 20h12v10H18zM30 25h12M36 25v10M16 46v6m32-6v6M10 53h44" />
                      <circle cx="45" cy="20" r="2" />
                    </svg>
                  ),
                },
                {
                  number: "04",
                  title: "Atención a clientes industriales",
                  description:
                    "Fabricación de componentes conforme a las necesidades de cada cliente.",
                  icon: (
                    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                      <circle cx="24" cy="21" r="7" />
                      <circle cx="43" cy="24" r="5" />
                      <path d="M10 45c0-8 6-13 14-13s14 5 14 13v4H10z" />
                      <path d="M40 34c7-1 13 4 13 11v4H41" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="group flex min-h-[220px] flex-col border-b border-slate-200 p-6 transition-colors duration-300 hover:bg-white sm:p-8 [&:nth-child(odd)]:sm:border-r"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center bg-white text-[#2563FF] ring-1 ring-slate-200 transition-colors group-hover:bg-[#2563FF] group-hover:text-white group-hover:ring-[#2563FF]">
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold tracking-widest text-slate-400">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold tracking-tight text-[#0F172A]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                  <span className="mt-auto w-8 pt-5">
                    <span className="block h-[2px] w-full bg-[#2563FF] transition-all duration-300 group-hover:w-14" />
                  </span>
                </article>
              ))}
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
                alt="Proceso de torneado CNC en Aquametal"
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
                className={`flex min-h-24 items-center gap-3 border p-4 transition-colors hover:border-[#2563FF] ${
                  index === 0
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
              Conoce las capacidades de Aquametal y conversemos sobre los
              requerimientos de fabricación de tu próximo proyecto industrial.
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
      </section>

      <Footer />
    </main>
  );
}