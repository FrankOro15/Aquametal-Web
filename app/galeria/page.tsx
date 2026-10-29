"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Eye, X } from "lucide-react";

interface WpMedia {
  id: number;
  source_url: string;
  slug: string;
  title: { rendered: string };
  alt_text: string;
  media_type: string;
  toLocalPath?: string;
}

const curatedImages: WpMedia[] = [
  { id: 1, source_url: "/images/Fondoprincipal1.jpeg", slug: "imagen-principal", title: { rendered: "Instalaciones AquaMetal" }, alt_text: "Vista de las instalaciones de AquaMetal", media_type: "image", toLocalPath: "/images/Fondoprincipal1.jpeg" },
  { id: 2, source_url: "/images/CNC.jpg", slug: "maquinaria-cnc", title: { rendered: "Maquinaria CNC" }, alt_text: "Maquinaria CNC de AquaMetal", media_type: "image", toLocalPath: "/images/CNC.jpg" },
  { id: 3, source_url: "/images/contacto-hero.jpeg", slug: "planta-industrial", title: { rendered: "Planta industrial" }, alt_text: "Área industrial de AquaMetal", media_type: "image", toLocalPath: "/images/contacto-hero.jpeg" },
  { id: 4, source_url: "/images/contacto-info.jpg", slug: "informacion-planta", title: { rendered: "Información de planta" }, alt_text: "Imagen informativa de la planta", media_type: "image", toLocalPath: "/images/contacto-info.jpg" },
  { id: 5, source_url: "/images/nosotros/nosotros-hero.jpg", slug: "equipo-aquametal", title: { rendered: "AquaMetal" }, alt_text: "Instalaciones industriales de AquaMetal", media_type: "image", toLocalPath: "/images/nosotros/nosotros-hero.jpg" },
  { id: 6, source_url: "/images/nosotros/nosotrosp1.jpg", slug: "produccion", title: { rendered: "Producción" }, alt_text: "Área de producción", media_type: "image", toLocalPath: "/images/nosotros/nosotrosp1.jpg" },
  { id: 7, source_url: "/images/nosotros/nosotros-planta.jpg", slug: "instalaciones-planta", title: { rendered: "Instalaciones de planta" }, alt_text: "Instalaciones de la planta de AquaMetal", media_type: "image", toLocalPath: "/images/nosotros/nosotros-planta.jpg" },
  { id: 8, source_url: "/images/nosotros/nosotros-plantaaa.jpg", slug: "maquinaria-planta", title: { rendered: "Maquinaria de planta" }, alt_text: "Maquinaria dentro de la planta", media_type: "image", toLocalPath: "/images/nosotros/nosotros-plantaaa.jpg" },
  { id: 9, source_url: "/images/nosotros/nosotros-calidad.jpg", slug: "calidad", title: { rendered: "Calidad" }, alt_text: "Proceso de calidad de AquaMetal", media_type: "image", toLocalPath: "/images/nosotros/nosotros-calidad.jpg" },
  { id: 10, source_url: "/images/nosotros/nosotros-calidad-v2.jpg", slug: "control-de-calidad", title: { rendered: "Control de calidad" }, alt_text: "Control de calidad en AquaMetal", media_type: "image", toLocalPath: "/images/nosotros/nosotros-calidad-v2.jpg" },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<WpMedia | null>(null);

  return (
    <main className="min-h-screen bg-[#000814] text-white pt-44 sm:pt-44 md:pt-32 selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* Encabezado Industrial */}
      <section className="bg-slate-950 border-b border-slate-800 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-xs font-mono font-bold text-blue-500 uppercase tracking-widest block mb-2">
            EVIDENCIA VISUAL
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Galería de Manufactura CNC
          </h1>
          <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-normal">
            Nuestra calidad habla a través de nuestros resultados.
          </p>
        </div>
      </section>

      {/* Grid de Puras Imágenes sin descripciones extrañas */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {curatedImages.map((item) => {
            const imageUrl = item.toLocalPath || item.source_url;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group cursor-pointer relative h-72 w-full bg-slate-950 border border-slate-800 rounded-none overflow-hidden hover:border-blue-600 transition duration-300 shadow-md"
              >
                <Image
                  src={imageUrl}
                  alt={item.alt_text}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 rounded-none"
                />
                
                {/* Overlay limpio solo con botón de Ampliar */}
                <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-blue-600 text-white text-xs font-mono font-bold px-4 py-2 flex items-center gap-2 rounded-none shadow-md">
                    <Eye className="w-4 h-4" /> Ampliar Imagen
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Lightbox para ver la imagen en grande */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-slate-900 border border-slate-800 rounded-none overflow-hidden shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Cerrar */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-slate-800 text-white p-2.5 hover:bg-blue-600 transition rounded-none border border-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Imagen Limpia en Grande */}
            <div className="relative h-[500px] sm:h-[650px] w-full bg-black">
              <Image
                src={selectedImage.toLocalPath || selectedImage.source_url}
                alt={selectedImage.alt_text}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}