"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, X } from "lucide-react";

export interface WpMedia {
  id: number;
  source_url: string;
  slug: string;
  title: { rendered: string };
  alt_text: string;
  media_type: string;
  media_details?: {
    width: number;
    height: number;
    sizes?: { full?: { source_url: string } };
  };
  toLocalPath?: string;
}

interface GalleryLightboxProps {
  items?: WpMedia[];
}

export default function GalleryLightbox({ items = [] }: GalleryLightboxProps) {
  const [selectedImage, setSelectedImage] = useState<WpMedia | null>(null);

  // Validación extra por si items llega vacío o indefinido
  if (!items || items.length === 0) {
    return <div className="text-center text-slate-500 py-10 font-mono text-xs">No hay imágenes disponibles.</div>;
  }

  return (
    <>
      {/* Grid de Imágenes - Esquinas rectangulares / 0px de radio */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => {
          const imageUrl = item.toLocalPath || item.source_url;
          const title = item.title?.rendered || "Imagen Industrial";

          return (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group cursor-pointer bg-slate-900 border border-slate-800 rounded-none overflow-hidden hover:border-blue-600 transition duration-300 shadow-md flex flex-col justify-between"
            >
              <div className="relative h-64 w-full bg-slate-950 overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 rounded-none"
                />
                
                {/* Overlay limpio solo con botón de Ampliar */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-blue-600 text-white text-xs font-mono font-bold px-3 py-1.5 flex items-center gap-1.5 rounded-none shadow-md">
                    <Eye className="w-4 h-4" /> Ampliar Imagen
                  </span>
                </div>
              </div>

              {/* Pie de tarjeta con solo el título limpio */}
              <div className="p-4 border-t border-slate-800 bg-slate-900/90 text-white flex items-center justify-between">
                <h3 className="font-bold text-xs font-mono tracking-tight text-slate-200 group-hover:text-blue-400 transition">
                  {title}
                </h3>
                <span className="text-[10px] font-mono text-slate-500">
                  ID-{item.id?.toString().padStart(2, "0") || "00"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal Lightbox al hacer clic */}
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

            {/* Imagen en Grande */}
            <div className="relative h-[500px] sm:h-[650px] w-full bg-black">
              <Image
                src={selectedImage.toLocalPath || selectedImage.source_url}
                alt={selectedImage.title?.rendered || "Imagen"}
                fill
                className="object-contain"
              />
            </div>

            {/* Pie del Modal */}
            <div className="p-5 bg-slate-900 border-t border-slate-800 text-white flex items-center justify-between">
              <h2 className="text-sm font-bold tracking-tight text-white font-mono uppercase">
                {selectedImage.title?.rendered}
              </h2>
              <span className="text-[10px] font-mono text-blue-400 bg-slate-800 px-3 py-1 border border-slate-700 rounded-none">
                AquaMetal · ISO 9001
              </span>
            </div>

          </div>
        </div>
      )}
    </>
  );
}