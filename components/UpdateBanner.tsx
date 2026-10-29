
"use client";

import { useState } from "react";
import { Info, X } from "lucide-react";

export default function UpdateBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside
      role="status"
      className="fixed bottom-4 right-4 z-[60] max-w-[calc(100vw-2rem)] border border-blue-200 bg-blue-50 p-4 text-blue-900 shadow-lg sm:bottom-6 sm:right-6 sm:max-w-lg"
    >
      <div className="flex items-start gap-3 pr-7 text-sm">
        <Info
          size={17}
          className="mt-0.5 shrink-0 text-blue-700"
          aria-hidden="true"
        />

        <p className="leading-relaxed">
          <span className="font-semibold">
            Sitio web en actualización.
          </span>{" "}
          Las secciones de capacidades, galería, blog e inicio aún están en desarrollo.
          Algunos contenidos podrían no estar disponibles temporalmente.
          Agradecemos tu comprensión.
        </p>
      </div>
      <button
        type="button"
        onClick={() => setIsVisible(false)}
        aria-label="Cerrar aviso de actualización"
        className="absolute right-2 top-2 p-1 text-blue-800 transition hover:bg-blue-100 hover:text-blue-950"
      >
        <X size={18} />
      </button>
    </aside>
  );
}
