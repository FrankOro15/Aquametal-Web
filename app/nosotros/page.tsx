import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Factory,
  Globe2,
  Handshake,
  Layers3,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const qualityPrinciples = [
  {
    title: "Calidad y cumplimiento",
    description:
      "Buscamos cumplir los requisitos de nuestros clientes y las disposiciones legales aplicables.",
    icon: ShieldCheck,
  },
  {
    title: "Mejora continua",
    description:
      "Impulsamos la mejora de nuestros procesos para responder a las necesidades de la industria.",
    icon: TrendingUp,
  },
  {
    title: "Compromiso con las personas",
    description:
      "Promovemos el desarrollo de competencias, la seguridad y la integridad de nuestros colaboradores.",
    icon: Handshake,
  },
  {
    title: "Innovación",
    description:
      "Procuramos utilizar estrategias y tecnologías innovadoras para fortalecer nuestras operaciones.",
    icon: Layers3,
  },
];

const companyFacts = [
  { number: "+25", label: "Años de experiencia" },
  { number: "1,000", suffix: "m²", label: "De infraestructura" },
  { number: "+30", label: "Máquinas especializadas" },
];

export default function NosotrosPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0F172A] pt-20 text-white md:pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#0F172A] to-[#14264A]" />

        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#2563FF]/10 to-transparent" />

        <div className="relative mx-auto grid min-h-[540px] max-w-7xl items-center gap-8 px-6 py-8 md:min-h-[580px] md:px-10 md:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-12">
          {/* IMAGEN DE FONDO EN MÓVIL */}
          <div className="absolute inset-0 z-0 lg:hidden">
            <Image
              src="/images/nosotros/nosotros-hero.jpg"
              alt="Instalaciones industriales de Aquametal"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />

            {/* Oscurecimiento para mantener legible el texto */}
            <div className="absolute inset-0 bg-[#0F172A]/70" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 via-transparent to-[#0F172A]/30" />
          </div>

          {/* TEXTO */}
          <div className="relative z-10 min-w-0 py-8">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#2563FF]" />
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-blue-300 sm:text-sm">
                Conoce AquaMetal
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
              Ingeniería mexicana que
              <span className="mt-2 block text-[#4D91FF]">
                potencia a las empresas
              </span>
            </h1>

            <p className="mt-7 max-w-md text-base leading-8 text-slate-300 md:text-lg">
              Somos especialistas en manufactura y ensamble de componentes
              metálicos, comprometidos con ofrecer soluciones que respondan
              a las necesidades reales de cada cliente.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/servicios"
                className="group inline-flex min-h-12 items-center justify-center gap-3 bg-[#2563FF] px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-500"
              >
                Conoce nuestras capacidades
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contacto"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/5"
              >
                Contáctanos
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-white/15 pt-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-300 sm:text-xs">
              <span>Manufactura metalmecánica</span>
              <span className="h-1 w-1 rounded-full bg-[#4D91FF]" />
              <span>Mejora continua</span>
            </div>
          </div>

          {/* IMAGEN ORIGINAL DE ESCRITORIO: SE CONSERVA */}
          <div className="relative z-10 mx-auto w-full max-w-2xl -translate-y-3 lg:mx-0 lg:z-0">
            <div className="absolute -right-3 -top-3 h-24 w-24 border-r-2 border-t-2 border-[#2563FF] sm:-right-4 sm:-top-4" />

            <div className="relative min-h-[350px] overflow-hidden bg-slate-800 sm:min-h-[470px] lg:min-h-[540px]">
              <Image
                src="/images/nosotros/nosotros-hero.jpg"
                alt="Instalaciones industriales de Aqua-Metal"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-[#0F172A]/10" />

              <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">
                  Aqua-Metal
                </span>
                <p className="mt-2 max-w-sm text-xl font-bold text-white sm:text-2xl">
                  Experiencia y capacidad al servicio de la industria.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-3 -left-3 h-20 w-20 border-b-2 border-l-2 border-[#2563FF] sm:-bottom-4 sm:-left-4" />
          </div>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section
        id="quienes-somos"
        className="scroll-mt-24 bg-white px-6 py-20 md:px-10 md:py-28 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div
              className="relative min-h-[360px] overflow-hidden bg-[#111827] bg-cover bg-center sm:min-h-[490px]"
              style={{
                backgroundImage: "url('/images/nosotros/nosotros-planta.jpg')",
              }}
              role="img"
              aria-label="Área de producción de Aqua-Metal"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">
                  Nuestra esencia
                </span>
                <p className="mt-3 max-w-sm text-2xl font-bold leading-snug text-white sm:text-3xl">
                  Soluciones de manufactura para la industria.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 -z-0 h-28 w-28 border-b-4 border-r-4 border-[#2563FF]" />
          </div>

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#2563FF]" />
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#2563FF]">
                Quiénes somos
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
              Un socio estratégico para la industria nacional.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
              <p>
                Aqua-Metal, S.A. de C.V., es una empresa mexicana especializada
                en la manufactura de componentes metálicos para atender las
                necesidades de fabricación y ensamble de diferentes sectores
                industriales.
              </p>

              <p>
                Trabajamos con materiales como acero, aluminio, bronce, latón
                y cobre, de acuerdo con los requerimientos de cada proyecto.
                Nuestra capacidad productiva y experiencia nos permiten
                participar en procesos de fabricación de piezas metálicas.
              </p>

              <p>
                Además de atender las necesidades de nuestros clientes,
                buscamos contribuir al fortalecimiento de la industria
                nacional mediante alternativas que favorezcan la sustitución
                de importaciones.
              </p>
            </div>

            <div className="mt-9 border-l-[3px] border-[#2563FF] pl-5">
              <p className="text-lg font-semibold leading-relaxed text-[#0F172A]">
                Nuestro objetivo es construir relaciones de largo plazo y ser
                un aliado confiable para cada cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INFRAESTRUCTURA */}
      <section className="bg-[#0F172A] px-6 py-20 text-white md:px-10 md:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#2563FF]" />
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">
                  Nuestra infraestructura
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Capacidad instalada para responder a la industria.
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                Nuestra planta integra espacios y maquinaria especializada
                para atender los procesos de fabricación de componentes
                metálicos. Desde Santa Ana Jilotzingo, Estado de México,
                trabajamos para responder a las necesidades productivas de
                nuestros clientes.
              </p>

              <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/15 pt-7">
                {companyFacts.map((fact) => (
                  <div key={fact.label}>
                    <div className="text-2xl font-bold tracking-tight text-[#70A7FF] sm:text-3xl">
                      {fact.number}
                      {fact.suffix && (
                        <span className="ml-1 text-base">{fact.suffix}</span>
                      )}
                    </div>
                    <p className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm">
                      {fact.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="relative mt-8 aspect-[4/5] overflow-hidden bg-slate-800">
                  <Image
                    src="/images/nosotros/nosotros-plantaaa.jpg"
                    alt="Instalaciones industriales de Aqua-Metal"
                    fill
                    sizes="(max-width: 640px) 45vw, 25vw"
                    className="object-cover object-[30%_center] transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/50 to-transparent" />
                </div>

                <div className="relative aspect-[4/5] overflow-hidden bg-slate-800">
                  <Image
                    src="/images/nosotros/nosotrosp1.jpg"
                    alt="Maquinaria y área de producción de Aqua-Metal"
                    fill
                    sizes="(max-width: 640px) 45vw, 25vw"
                    className="object-cover object-[30%_center] transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/50 to-transparent" />
                </div>
              </div>

              <div className="absolute -bottom-5 -left-3 hidden h-24 w-24 border-b-4 border-l-4 border-[#2563FF] sm:block" />

              <div className="mt-5 flex items-center gap-3 border border-white/10 bg-white/[0.04] p-4 sm:p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#2563FF]/15 text-blue-300">
                  <Factory size={23} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">
                    Planta industrial
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Santa Ana Jilotzingo, Estado de México
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POLÍTICA DE CALIDAD */}
      <section className="bg-white px-6 py-20 md:px-10 md:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="relative h-full">
              <div className="absolute -right-3 -top-3 z-10 h-24 w-24 border-r-2 border-t-2 border-[#2563FF] sm:-right-4 sm:-top-4" />

              <div className="group relative h-full min-h-[400px] overflow-hidden bg-[#0F172A] sm:min-h-[500px]">
                <Image
                  src="/images/nosotros/nosotros-calidad-v2.jpg"
                  alt="Compromiso de Aqua-Metal con la calidad y la mejora continua"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute left-5 top-5 max-w-[calc(100%-2.5rem)] sm:left-7 sm:top-7 sm:max-w-sm">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-[2px] w-10 bg-[#2563FF]" />
                    <span className="text-xs font-bold uppercase tracking-[0.24em] text-blue-200 [text-shadow:0_1px_4px_rgba(0,0,0,0.9)]">
                      Nuestro compromiso
                    </span>
                  </div>

                  <h3 className="max-w-sm text-2xl font-bold leading-tight text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.9)] sm:text-3xl">
                    Calidad que impulsa cada proyecto.
                  </h3>
                </div>
              </div>

              <div className="absolute -bottom-3 -left-3 z-10 h-20 w-20 border-b-2 border-l-2 border-[#2563FF] sm:-bottom-4 sm:-left-4" />
            </div>

            <div className="relative border-t-2 border-[#2563FF] bg-[#F3F5F9] p-7 sm:p-10">
              <div className="mb-6 flex items-center gap-3">
                <ShieldCheck className="shrink-0 text-[#2563FF]" size={25} />
                <h3 className="text-xl font-bold text-[#0F172A]">
                  Política de calidad
                </h3>
              </div>

              <div className="space-y-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                <p>
                  Aqua-Metal, S.A. de C.V., es una empresa 100 % mexicana
                  dedicada a la manufactura de partes de aluminio, latón y
                  otros metales. Proveemos productos de alta calidad, entregas
                  puntuales, precios competitivos y servicios especializados.
                </p>

                <p>
                  Estamos comprometidos con la mejora continua, el cumplimiento
                  de los requisitos del cliente y de otras partes interesadas,
                  así como de las disposiciones legales aplicables, mediante
                  procesos innovadores, confiables y consistentes.
                </p>

                <p>
                  Estos procesos están enfocados en el desarrollo de
                  competencias, la seguridad y la integridad de nuestros
                  colaboradores. Asimismo, procuramos el uso de estrategias y
                  tecnologías innovadoras.
                </p>
              </div>

              <div className="mt-8 border-t border-slate-300 pt-6">
                <p className="font-bold text-[#0F172A]">
                  Franz Schopper C.
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Dirección General
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISIÓN, VISIÓN Y VALORES */}
      <section className="bg-[#F1F4F7] px-6 py-14 md:px-10 md:py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#2563FF]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2563FF]">
                Nuestra dirección
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Misión y Visión
            </h2>

            <p className="mt-2 text-sm text-slate-500 sm:text-base">
              Lo que nos impulsa, hacia dónde vamos y los principios que nos definen.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <article className="border border-slate-200 border-l-4 border-l-[#2563FF] bg-white p-6 sm:p-7">
              <div className="mb-4 flex items-center gap-3">
                <Target size={22} className="shrink-0 text-[#2563FF]" />
                <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#2563FF]">
                  Misión
                </h3>
              </div>

              <p className="text-base font-semibold leading-7 text-[#0F172A] sm:text-lg">
                Resolver los desafíos de la industria automotriz mediante
                soluciones innovadoras y sostenibles en manufactura metálica,
                creando valor para nuestros clientes, colaboradores y la sociedad.
              </p>
            </article>

            <article className="border border-slate-200 border-l-4 border-l-[#0F172A] bg-white p-6 sm:p-7">
              <div className="mb-4 flex items-center gap-3">
                <Globe2 size={22} className="shrink-0 text-[#2563FF]" />
                <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#0F172A]">
                  Visión
                </h3>
                <span className="text-3xl font-bold tracking-tight text-[#2563FF]">
                  2030
                </span>
              </div>

              <p className="text-base font-semibold leading-7 text-[#0F172A] sm:text-lg">
                Ser un referente nacional en manufactura metálica, reconocido
                por transformar desafíos industriales en oportunidades
                sostenibles que impulsen el sector automotriz.
              </p>
            </article>
          </div>

          <div className="mt-4 border border-slate-200 border-l-4 border-l-[#2563FF] bg-white p-6 sm:p-7">
            <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <h3 className="text-lg font-bold text-[#0F172A] sm:text-xl">
                Nuestros valores
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-3 lg:grid-cols-6">
              {[
                {
                  titulo: "Calidad",
                  descripcion:
                    "Cuidamos nuestros procesos y productos para cumplir con los requisitos de nuestros clientes.",
                  icono: ShieldCheck,
                },
                {
                  titulo: "Compromiso",
                  descripcion:
                    "Respondemos a las necesidades de cada proyecto con un servicio confiable y entregas oportunas.",
                  icono: Handshake,
                },
                {
                  titulo: "Mejora continua",
                  descripcion:
                    "Perfeccionamos nuestros procesos y capacidades para responder a los retos de la industria.",
                  icono: TrendingUp,
                },
                {
                  titulo: "Innovación",
                  descripcion:
                    "Impulsamos ideas y tecnologías que fortalecen nuestros procesos de manufactura.",
                  icono: Layers3,
                },
                {
                  titulo: "Desarrollo del talento",
                  descripcion:
                    "Promovemos las competencias, la seguridad y el desarrollo de nuestros colaboradores.",
                  icono: Factory,
                },
                {
                  titulo: "Integridad",
                  descripcion:
                    "Actuamos con responsabilidad y respeto, cumpliendo nuestros compromisos.",
                  icono: ShieldCheck,
                },
              ].map((valor, index) => {
                const Icon = valor.icono;

                return (
                  <article
                    key={valor.titulo}
                    className={`${
                      index % 2 !== 0
                        ? "border-l border-slate-200 pl-4 sm:border-l-0 sm:pl-0"
                        : ""
                    } sm:border-l sm:border-slate-200 sm:pl-4 ${
                      index === 0 ? "sm:border-l-0 sm:pl-0" : ""
                    }`}
                  >
                    <Icon
                      size={23}
                      strokeWidth={1.7}
                      className="mb-3 text-[#2563FF]"
                    />

                    <h4 className="text-sm font-bold leading-5 text-[#0F172A]">
                      {valor.titulo}
                    </h4>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {valor.descripcion}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section className="bg-white px-6 py-20 md:px-10 md:py-24 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden bg-[#0F172A] px-7 py-12 text-white sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div className="absolute inset-y-0 right-0 w-2/3 bg-gradient-to-l from-[#2563FF]/20 to-transparent" />

          <div className="absolute -right-10 -top-12 hidden text-white/[0.05] sm:block">
            <Factory size={240} strokeWidth={0.7} />
          </div>

          <div className="relative max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-300">
              Trabajemos juntos
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Tu próximo proyecto comienza con una buena alianza.
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-slate-300">
              Conoce las capacidades de AquaMetal y conversemos sobre los
              requerimientos de fabricación de tu proyecto industrial.
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
                Explorar capacidades
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}