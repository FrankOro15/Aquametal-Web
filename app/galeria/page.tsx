
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

const curatedImages = [
  "/images/contacto-hero.jpeg",
  "/images/galeria/Gemini_Generated_Image_1p1sga1p1sga1p1s.jpg",
  "/images/galeria/Gemini_Generated_Image_3a01uz3a01uz3a01.jpg",
  "/images/galeria/Gemini_Generated_Image_5lljr15lljr15llj.jpg",
  "/images/galeria/Gemini_Generated_Image_7lf7nz7lf7nz7lf7.jpg",
  "/images/galeria/Gemini_Generated_Image_8hm8mj8hm8mj8hm8.jpg",
  "/images/galeria/Gemini_Generated_Image_azhgvvazhgvvazhg.jpg",
  "/images/galeria/Gemini_Generated_Image_bsmq6bbsmq6bbsmq.jpg",
  "/images/galeria/Gemini_Generated_Image_ghxngbghxngbghxn.jpg",
  "/images/galeria/Gemini_Generated_Image_hptnylhptnylhptn.jpg",
  "/images/galeria/Gemini_Generated_Image_i7gdwoi7gdwoi7gd.jpg",
  "/images/galeria/Gemini_Generated_Image_ioeby2ioeby2ioeb.jpg",
  "/images/galeria/Gemini_Generated_Image_jpncw4jpncw4jpnc.jpg",
  "/images/galeria/Gemini_Generated_Image_n51wgbn51wgbn51w.jpg",
  "/images/galeria/Gemini_Generated_Image_pzfklmpzfklmpzfk.jpg",
  "/images/galeria/Gemini_Generated_Image_ugntaougntaougnt.jpg",
  "/images/galeria/Gemini_Generated_Image_wiwy2lwiwy2lwiwy.jpg",
  "/images/galeria/Gemini_Generated_Image_wpexw0wpexw0wpex.jpg",
  "/images/galeria/Gemini_Generated_Image_wux9h9wux9h9wux9.jpg",
   "/images/galeria/IMG_0009.JPG",
  "/images/galeria/2d.jpeg",
  "/images/galeria/3d.jpeg",
];


const additionalImageLayouts = [
  "col-span-2 aspect-[2/1] lg:col-span-5 lg:aspect-[1.6/1]",
  "col-span-1 aspect-square lg:col-span-3 lg:aspect-[1/1]",
  "col-span-1 aspect-square lg:col-span-4 lg:aspect-[1.25/1]",
  "col-span-1 aspect-[1/1.15] lg:col-span-3 lg:aspect-[1/1]",
  "col-span-1 aspect-[1/1.15] lg:col-span-4 lg:aspect-[1.25/1]",
  "col-span-2 aspect-[2/1] lg:col-span-5 lg:aspect-[1.6/1]",
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedImage =
    selectedIndex !== null ? curatedImages[selectedIndex] : null;

  const closeModal = () => setSelectedIndex(null);

  const showPrevious = () => {
    setSelectedIndex((current) => {
      if (current === null) return null;
      return current === 0 ? curatedImages.length - 1 : current - 1;
    });
  };

  const showNext = () => {
    setSelectedIndex((current) => {
      if (current === null) return null;
      return current === curatedImages.length - 1 ? 0 : current + 1;
    });
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <>
      <Navbar />

      <main className="bg-[#0B1220] text-white pt-44 sm:pt-44 md:pt-32">

        {/* HERO */}

        <section className="relative isolate min-h-[590px] overflow-hidden bg-[#0F172A] md:min-h-[650px]">

          <Image
            src="/images/galeria/1d.jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-[#07101F]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07101F]/95 via-[#07101F]/70 to-[#07101F]/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-[#0B1220]/20" />

          <div className="absolute -right-40 top-0 h-[550px] w-[550px] rounded-full border border-white/[0.06]" />
          <div className="absolute -right-20 top-20 h-[400px] w-[400px] rounded-full border border-white/[0.06]" />

          <div className="relative mx-auto flex min-h-[590px] max-w-7xl items-center px-6 py-20 md:min-h-[650px] sm:px-10 lg:px-12">

            <div className="max-w-4xl">

              <div className="mb-8 flex items-center gap-4">
                <span className="h-[2px] w-12 bg-[#4D91FF]" />
                <span className="text-xs font-bold uppercase tracking-[0.32em] text-[#8DB8FF]">
                  Aquametal / Galería
                </span>
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
                Precisión que
                <br />
                <span className="text-[#70A7FF]">se puede ver.</span>
              </h1>

              <p className="mt-8 max-w-xl border-l-2 border-[#2563FF] pl-5 text-base leading-8 text-slate-300 sm:text-lg">
                Cada pieza refleja experiencia, tecnología y atención al detalle.
                Descubre una muestra de lo que hacemos en Aquametal.
              </p>

              <button
                type="button"
                onClick={() =>
                  document.getElementById("galeria")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="group mt-10 inline-flex items-center gap-4 border border-white/20 px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-[#2563FF] hover:bg-[#2563FF]"
              >
                Ver galería
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#2563FF] via-[#4D91FF] to-transparent" />
        </section>



        {/* GALERÍA */}
       <section
  id="galeria"
  className="relative overflow-hidden bg-[#0B1220] py-24 md:py-32"
>
  <div className="pointer-events-none absolute -left-64 top-40 h-[600px] w-[600px] rounded-full bg-[#2563FF]/[0.06] blur-[120px]" />
  <div className="pointer-events-none absolute -right-64 bottom-0 h-[600px] w-[600px] rounded-full bg-[#2563FF]/[0.05] blur-[120px]" />

  <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

    {/* ENCABEZADO */}
    <div className="mb-16 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">

      <div>
        <div className="mb-5 flex items-center gap-3">
          <span className="h-[2px] w-10 bg-[#2563FF]" />
          <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#70A7FF]">
            Galería de manufactura
          </span>
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Cada pieza tiene
          <span className="text-[#70A7FF]"> su precisión.</span>
        </h2>

        <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
          Descubre algunos de nuestros trabajos de maquinado y conoce
          de cerca la precisión que aplicamos en cada pieza.
        </p>
      </div>

      <div className="hidden border-l border-white/10 pb-2 pl-8 md:block">
        <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Nuestro enfoque
        </span>
        <span className="mt-2 block text-2xl font-bold text-white">
          Precisión en cada pieza.
        </span>
      </div>

    </div>

    {/* MOSAICO EDITORIAL */}
    <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-12 lg:gap-6">

      {/* IMAGEN 1 - PRINCIPAL */}
      <button
        type="button"
        onClick={() => setSelectedIndex(0)}
        aria-label="Ampliar imagen 1"
        className="group relative col-span-2 aspect-[1.55/1] overflow-hidden bg-[#172238] text-left outline-none focus-visible:ring-2 focus-visible:ring-[#2563FF] lg:col-span-7 lg:row-span-2 lg:aspect-auto lg:min-h-[600px]"
      >
        <Image
          src={curatedImages[0]}
          alt="Instalaciones de Aquametal"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-[#020617]/10" />

        <div className="absolute bottom-0 left-0 p-6 sm:p-9">
          <span className="mb-3 block text-xs font-bold uppercase tracking-[0.25em] text-[#8DB8FF]">
            Maquinado de precisión
          </span>
          <span className="block text-2xl font-bold text-white sm:text-3xl">
            Del proceso a la pieza terminada
          </span>
        </div>

        <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center border border-white/30 bg-[#0B1220]/30 text-white backdrop-blur-sm transition-all duration-300 group-hover:border-[#2563FF] group-hover:bg-[#2563FF]">
          <ArrowUpRight size={22} />
        </div>
      </button>

      {/* IMAGEN 2 */}
      <button
        type="button"
        onClick={() => setSelectedIndex(1)}
        aria-label="Ampliar imagen 2"
        className="group relative col-span-1 aspect-square overflow-hidden bg-[#172238] text-left outline-none focus-visible:ring-2 focus-visible:ring-[#2563FF] lg:col-span-5 lg:aspect-[1.8/1]"
      >
        <Image
          src={curatedImages[1]}
          alt="Maquinaria CNC de Aquametal"
          fill
          sizes="(max-width: 1024px) 50vw, 42vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
        <ImageIndicator />
      </button>

      {/* IMAGEN 3 */}
      <button
        type="button"
        onClick={() => setSelectedIndex(2)}
        aria-label="Ampliar imagen 3"
        className="group relative col-span-1 aspect-square overflow-hidden bg-[#172238] text-left outline-none focus-visible:ring-2 focus-visible:ring-[#2563FF] lg:col-span-5 lg:aspect-[1.8/1]"
      >
        <Image
          src={curatedImages[2]}
          alt="Fotografía de Aquametal"
          fill
          sizes="(max-width: 1024px) 50vw, 42vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
        <ImageIndicator />
      </button>

      {/* IMAGEN 4 */}
      <button
        type="button"
        onClick={() => setSelectedIndex(3)}
        aria-label="Ampliar imagen 4"
        className="group relative col-span-2 aspect-[2/1] overflow-hidden bg-[#172238] text-left outline-none focus-visible:ring-2 focus-visible:ring-[#2563FF] lg:col-span-4 lg:aspect-[1.2/1]"
      >
        <Image
          src={curatedImages[3]}
          alt="Detalles de Aquametal"
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
        <ImageIndicator />
      </button>

      {/* IMAGEN 5 */}
      <button
        type="button"
        onClick={() => setSelectedIndex(4)}
        aria-label="Ampliar imagen 5"
        className="group relative col-span-1 aspect-square overflow-hidden bg-[#172238] text-left outline-none focus-visible:ring-2 focus-visible:ring-[#2563FF] lg:col-span-4 lg:aspect-[1.2/1]"
      >
        <Image
          src={curatedImages[4]}
          alt="Instalaciones de Aquametal"
          fill
          sizes="(max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
        <ImageIndicator />
      </button>

      {/* IMAGEN 6 */}
      <button
        type="button"
        onClick={() => setSelectedIndex(5)}
        aria-label="Ampliar imagen 6"
        className="group relative col-span-1 aspect-square overflow-hidden bg-[#172238] text-left outline-none focus-visible:ring-2 focus-visible:ring-[#2563FF] lg:col-span-4 lg:aspect-[1.2/1]"
      >
        <Image
          src={curatedImages[5]}
          alt="Trabajo de manufactura de Aquametal"
          fill
          sizes="(max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
        <ImageIndicator />
      </button>

      {/* IMAGEN 7 */}
      <button
        type="button"
        onClick={() => setSelectedIndex(6)}
        aria-label="Ampliar imagen 7"
        className="group relative col-span-1 aspect-[1/1.15] overflow-hidden bg-[#172238] text-left outline-none focus-visible:ring-2 focus-visible:ring-[#2563FF] lg:col-span-3 lg:aspect-[0.9/1]"
      >
        <Image
          src={curatedImages[6]}
          alt="Planta de Aquametal"
          fill
          sizes="(max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
        <ImageIndicator />
      </button>

      {/* IMAGEN 8 */}
      <button
        type="button"
        onClick={() => setSelectedIndex(7)}
        aria-label="Ampliar imagen 8"
        className="group relative col-span-1 aspect-[1/1.15] overflow-hidden bg-[#172238] text-left outline-none focus-visible:ring-2 focus-visible:ring-[#2563FF] lg:col-span-3 lg:aspect-[0.9/1]"
      >
        <Image
          src={curatedImages[7]}
          alt="Instalaciones de producción"
          fill
          sizes="(max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
        <ImageIndicator />
      </button>

      {/* IMAGEN 9 */}
      <button
        type="button"
        onClick={() => setSelectedIndex(8)}
        aria-label="Ampliar imagen 9"
        className="group relative col-span-2 aspect-[2/1] overflow-hidden bg-[#172238] text-left outline-none focus-visible:ring-2 focus-visible:ring-[#2563FF] lg:col-span-3 lg:aspect-[0.9/1]"
      >
        <Image
          src={curatedImages[8]}
          alt="Calidad de manufactura Aquametal"
          fill
          sizes="(max-width: 1024px) 100vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
        <ImageIndicator />
      </button>

      {/* IMAGEN 10 */}
      <button
        type="button"
        onClick={() => setSelectedIndex(9)}
        aria-label="Ampliar imagen 10"
        className="group relative col-span-2 aspect-[2/1] overflow-hidden bg-[#172238] text-left outline-none focus-visible:ring-2 focus-visible:ring-[#2563FF] lg:col-span-3 lg:aspect-[0.9/1]"
      >
        <Image
          src={curatedImages[9]}
          alt="Calidad y procesos de Aquametal"
          fill
          sizes="(max-width: 1024px) 100vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
        <ImageIndicator />
      </button>

      {curatedImages.slice(10).map((image, index) => {
        const imageIndex = index + 10;

        return (
          <button
            key={image}
            type="button"
            onClick={() => setSelectedIndex(imageIndex)}
            aria-label={`Ampliar imagen ${imageIndex + 1}`}
            className={`group relative overflow-hidden bg-[#172238] text-left outline-none focus-visible:ring-2 focus-visible:ring-[#2563FF] ${additionalImageLayouts[index % additionalImageLayouts.length]}`}
          >
            <Image
              src={image}
              alt="Fotografía de procesos e instalaciones de Aquametal"
              fill
              sizes="(max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
            <ImageIndicator />
          </button>
        );
      })}

    </div>

  </div>
</section>

{/* CIERRE */}
<section className="relative isolate overflow-hidden border-t border-white/[0.07] bg-[#111E33]">

  {/* IMAGEN DE FONDO */}
  <div className="absolute inset-0 -z-10">
    <Image
      src="/images/maqfondo.jpg"
      alt=""
      fill
      sizes="100vw"
      priority
      className="object-cover object-center"
    />

    <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/80 to-[#14264A]/70" />
  </div>

  {/* ILUMINACIÓN DECORATIVA */}
  <div className="pointer-events-none absolute -right-32 -top-40 h-[450px] w-[450px] rounded-full bg-[#2563FF]/10 blur-[100px]" />

  {/* CONTENIDO */}
  <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-10 px-6 py-20 sm:px-10 md:flex-row md:items-center lg:px-12">

    <div className="max-w-2xl">

      <div className="mb-5 flex items-center gap-3">
        <span className="h-[2px] w-10 bg-[#4D91FF]" />

        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#70A7FF]">
          Maquinado de precisión
        </span>
      </div>

      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
        ¿Necesitas fabricar
        <span className="block text-[#70A7FF]">
          piezas de precisión?
        </span>
      </h2>

      <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
        En Aquametal contamos con experiencia en maquinado para
        desarrollar piezas de acuerdo con los requerimientos de tu proyecto.
      </p>

    </div>

    <Link
      href="/servicios"
      className="group inline-flex shrink-0 items-center gap-4 border border-[#4D91FF]/50 bg-[#2563FF] px-7 py-5 text-sm font-bold text-white transition-all duration-300 hover:border-[#70A7FF] hover:bg-[#1D4ED8]"
    >
      Conoce nuestros servicios

      <ArrowRight
        size={19}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>

  </div>

  {/* LÍNEA INFERIOR */}
  <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#2563FF] to-transparent" />

</section>

        {/* MODAL */}
        {selectedImage && selectedIndex !== null && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020617]/[0.97] p-3 backdrop-blur-xl sm:p-8"
            onClick={closeModal}
          >

            <div
              className="relative flex h-full max-h-[950px] w-full max-w-[1500px] flex-col"
              onClick={(event) => event.stopPropagation()}
            >

              {/* BARRA SUPERIOR */}
              <div className="flex items-center justify-between border-b border-white/10 pb-5">

                <div className="flex items-center gap-4">
                  <span className="h-7 w-[3px] bg-[#2563FF]" />
                  <div>
                    <span className="block text-sm font-bold tracking-wide text-white">
                      AQUAMETAL
                    </span>
                    <span className="mt-1 block text-[10px] uppercase tracking-[0.22em] text-slate-500">
                      Galería de proyectos
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-5">

                  <span className="text-sm tabular-nums text-slate-400">
                    {String(selectedIndex + 1).padStart(2, "0")}
                    <span className="mx-2 text-slate-600">/</span>
                    {String(curatedImages.length).padStart(2, "0")}
                  </span>

                  <button
                    type="button"
                    onClick={closeModal}
                    aria-label="Cerrar galería"
                    className="flex h-11 w-11 items-center justify-center border border-white/15 text-white transition-all duration-300 hover:border-[#2563FF] hover:bg-[#2563FF]"
                  >
                    <X size={21} />
                  </button>

                </div>
              </div>


              {/* FOTOGRAFÍA */}
              <div className="relative min-h-0 flex-1 py-5">

                <Image
                  key={selectedImage}
                  src={selectedImage}
                  alt="Fotografía ampliada de Aquametal"
                  fill
                  priority
                  sizes="100vw"
                  className="object-contain"
                />

              </div>


              {/* NAVEGACIÓN */}
              <div className="flex items-center justify-between border-t border-white/10 pt-5">

                <button
                  type="button"
                  onClick={showPrevious}
                  className="group flex items-center gap-3 border border-white/15 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-[#2563FF] hover:bg-[#2563FF] sm:px-6"
                >
                  <ChevronLeft
                    size={19}
                    className="transition-transform group-hover:-translate-x-1"
                  />
                  <span className="hidden sm:inline">Anterior</span>
                </button>

                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-600 sm:text-xs">
                  Precisión industrial
                </span>

                <button
                  type="button"
                  onClick={showNext}
                  className="group flex items-center gap-3 border border-white/15 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-[#2563FF] hover:bg-[#2563FF] sm:px-6"
                >
                  <span className="hidden sm:inline">Siguiente</span>
                  <ChevronRight
                    size={19}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

              </div>

            </div>
          </div>
        )}

      </main>

      <Footer />
    </>
  );
}


/* INDICADOR REUTILIZABLE */
function ImageIndicator() {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <span className="flex h-12 w-12 items-center justify-center border border-white/30 bg-[#2563FF] text-white shadow-xl">
        <Eye size={21} />
      </span>
    </div>
  );
}
