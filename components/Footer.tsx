
"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, FileText } from "lucide-react";

export default function Footer() {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="border-t border-slate-700/60 font-sans text-xs text-slate-300"
      style={{ backgroundColor: "#1E293B" }}
    >
      {/* Sección principal */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-7 px-6 py-6 md:grid-cols-3">

        {/* Columna 1: Empresa */}
        <div className="w-fit space-y-2.5">
          {/* Logo + Sello ISO */}
          <div className="flex items-center gap-14">
            <Link
              href="/"
              onClick={scrollToTop}
              className="flex items-center gap-0 text-xl font-black tracking-tight text-white transition-colors hover:text-blue-400"
            >
              AQUA<span className="text-blue-400">METAL</span>
            </Link>

            {/* Sello ISO */}
            <svg
              viewBox="0 0 500 500"
              className="h-14 w-14 shrink-0 text-slate-300"
              role="img"
              aria-labelledby="iso-seal-title"
            >
              <title id="iso-seal-title">
                ISO 9001 Certified Company
              </title>

              <defs>
                <path
                  id="iso-arc-top"
                  d="M60 250a190 190 0 0 1 380 0"
                  fill="none"
                />
                <path
                  id="iso-arc-bottom"
                  d="M60 250a190 190 0 0 0 380 0"
                  fill="none"
                />
                <clipPath id="iso-globe-clip">
                  <circle cx="250" cy="250" r="138" />
                </clipPath>
                <g id="iso-star">
                  <polygon
                    points="0,-10 2.9,-3 9.5,-3 4.2,1 6.2,7.6 0,3.5 -6.2,7.6 -4.2,1 -9.5,-3 -2.9,-3"
                    fill="currentColor"
                  />
                </g>
              </defs>

              <circle
                cx="250"
                cy="250"
                r="236"
                fill="none"
                stroke="currentColor"
                strokeWidth="14"
              />
              <circle
                cx="250"
                cy="250"
                r="222"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              />
              <circle
                cx="250"
                cy="250"
                r="148"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              />
              <circle cx="250" cy="250" r="138" fill="#0f172a" />

              <text
                fill="currentColor"
                fontFamily="Arial, Helvetica, sans-serif"
                fontSize="44"
                fontWeight="bold"
                letterSpacing="4"
              >
                <textPath
                  href="#iso-arc-top"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  CERTIFIED
                </textPath>
              </text>

              <text
                fill="currentColor"
                fontFamily="Arial, Helvetica, sans-serif"
                fontSize="44"
                fontWeight="bold"
                letterSpacing="4"
              >
                <textPath
                  href="#iso-arc-bottom"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  COMPANY
                </textPath>
              </text>

              <use href="#iso-star" transform="translate(68 250)" />
              <use href="#iso-star" transform="translate(73 212)" />
              <use href="#iso-star" transform="translate(87 176)" />
              <use href="#iso-star" transform="translate(73 288)" />
              <use href="#iso-star" transform="translate(87 324)" />
              <use href="#iso-star" transform="translate(432 250)" />
              <use href="#iso-star" transform="translate(427 212)" />
              <use href="#iso-star" transform="translate(413 176)" />
              <use href="#iso-star" transform="translate(427 288)" />
              <use href="#iso-star" transform="translate(413 324)" />

              <g
                clipPath="url(#iso-globe-clip)"
                fill="none"
                stroke="#64748b"
                strokeWidth="1.8"
                opacity="0.6"
              >
                <line x1="250" y1="100" x2="250" y2="400" />
                <line x1="100" y1="250" x2="400" y2="250" />
                <ellipse cx="250" cy="250" rx="138" ry="40" />
                <ellipse cx="250" cy="250" rx="138" ry="80" />
                <ellipse cx="250" cy="250" rx="138" ry="115" />
                <ellipse cx="250" cy="250" rx="40" ry="138" />
                <ellipse cx="250" cy="250" rx="80" ry="138" />
                <ellipse cx="250" cy="250" rx="115" ry="138" />
              </g>

              <circle
                cx="250"
                cy="250"
                r="138"
                fill="none"
                stroke="#64748b"
                strokeWidth="2"
              />

              <text
                x="250"
                y="235"
                fill="#ffffff"
                fontFamily="Arial Black, Arial, sans-serif"
                fontSize="80"
                fontWeight="900"
                textAnchor="middle"
              >
                ISO
              </text>
              <text
                x="250"
                y="312"
                fill="#ffffff"
                fontFamily="Arial Black, Arial, sans-serif"
                fontSize="90"
                fontWeight="900"
                textAnchor="middle"
              >
                9001
              </text>
            </svg>
          </div>

          {/* Descripción: desde el inicio del logo hasta el final del sello */}
          <p className="w-full max-w-[250px] text-xs leading-relaxed text-slate-400">
            Manufactura de componentes metálicos de precisión para el sector
            industrial, con tecnología, experiencia y compromiso con la calidad.
          </p>
        </div>

        {/* Columna 2: Navegación */}
        <div>
          <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-100">
            Navegación
          </h3>

          <ul className="space-y-1.5 text-xs font-medium">
            <li>
              <Link
                href="/"
                onClick={scrollToTop}
                className="transition-colors hover:text-blue-400"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/nosotros"
                onClick={scrollToTop}
                className="transition-colors hover:text-blue-400"
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                href="/servicios"
                onClick={scrollToTop}
                className="transition-colors hover:text-blue-400"
              >
                Servicios y Capacidades
              </Link>
            </li>
            <li>
              <Link
                href="/contacto"
                onClick={scrollToTop}
                className="transition-colors hover:text-blue-400"
              >
                Contacto
              </Link>
            </li>
            <li>
              <Link
                href="/privacidad"
                onClick={scrollToTop}
                className="flex items-center gap-1.5 transition-colors hover:text-blue-400"
              >
                <FileText className="h-3.5 w-3.5 text-blue-400" />
                Aviso de Privacidad
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div>
          <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-100">
            Contacto Directo
          </h3>

          <ul className="space-y-2 text-xs">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-400" />
              <span>
                Santa Ana Jilotzingo, Estado de México, México
              </span>
            </li>

            <li className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 shrink-0 text-blue-400" />
              <a
                href="tel:+525550846281"
                className="font-medium transition-colors hover:text-blue-400"
              >
                55 5084 6281
              </a>
            </li>

            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-400" />
              <a
                href="mailto:ventas@aqua-metal.com.mx"
                className="break-all font-medium transition-colors hover:text-blue-400"
              >
                ventas@aqua-metal.com.mx
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Subfooter */}
      <div className="border-t border-slate-700/80 bg-slate-900/40 py-3 text-xs text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 sm:flex-row">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Aquametal. Todos los derechos
            reservados.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <span>
              Desarrollado por{" "}
              <strong className="font-semibold text-slate-200">
                  Francisco Orozco
              </strong>
            </span>

            <span className="text-slate-600">•</span>

            <a
              href="https://github.com/FrankOro15"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Francisco Orozco"
              className="flex items-center gap-1.5 font-medium transition-colors hover:text-blue-400"
            >
              <svg
                className="h-3.5 w-3.5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
