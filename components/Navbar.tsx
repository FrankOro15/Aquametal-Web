"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import UpdateBanner from "@/components/UpdateBanner";
import { 
  Phone, Mail, Globe, 
  Home as HomeIcon, Users, Wrench, Image as ImageIcon, FileText, MessageSquare
} from "lucide-react";

export default function Navbar() {
  const [lang, setLang] = useState<"ES" | "EN">("ES");

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const toggleLanguage = () => {
    setLang((prev) => (prev === "ES" ? "EN" : "ES"));
  };

  const navLinks = [
  { name: lang === "ES" ? "Inicio" : "Home", href: "/", icon: HomeIcon },
  { name: lang === "ES" ? "Nosotros" : "About Us", href: "/nosotros", icon: Users },
  { name: lang === "ES" ? "Capacidades" : "Capabilities", href: "/servicios", icon: Wrench },
  { name: lang === "ES" ? "Galería" : "Gallery", href: "/galeria", icon: ImageIcon },
  { name: lang === "ES" ? "Blog" : "Blog", href: "/blog", icon: FileText },
  { name: lang === "ES" ? "Contacto" : "Contact", href: "/contacto", icon: MessageSquare },
    ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-md font-sans">
      <UpdateBanner />

      {/* Barra superior con identidad, contacto, redes e idioma */}
      <div className="bg-slate-900 text-white text-xs py-2 px-6 border-b border-slate-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-4">
            <span className="hidden font-bold tracking-wide text-slate-300 uppercase text-[11px] sm:inline">
              {lang === "ES" ? "Torneado de alto volumen y CNC" : "High-Volume Turning and CNC"}
            </span>
            <div className="flex items-center gap-3 sm:gap-4 text-slate-300">
              <a href="tel:5550846281" aria-label="Llamar al 55 5084 6281" className="inline-flex items-center gap-1.5 hover:text-white transition">
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span>55 5084 6281</span>
              </a>
              <a href="mailto:ventas@aqua-metal.com.mx" aria-label="Enviar correo a ventas@aqua-metal.com.mx" className="hidden lg:inline-flex items-center gap-1.5 hover:text-white transition">
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span>ventas@aqua-metal.com.mx</span>
              </a>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-4">
            <div className="flex items-center gap-3 text-slate-300">
              {/* Facebook SVG */}
              <a href="https://www.facebook.com/profile.php?id=61582794822630" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition" aria-label="Facebook">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* Instagram SVG */}
              <a href="https://www.instagram.com/aquam_metal/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition" aria-label="Instagram">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              {/* LinkedIn SVG */}
              <a href="https://www.linkedin.com/company/aqua-metal-sa-de-cv/home/" className="hover:text-blue-400 transition"  target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              {/* YouTube SVG */}
              <a href="https://www.youtube.com/@aquametalventas8121" className="hover:text-blue-400 transition"  target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            {/* Conmutador de Idioma */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 px-2.5 py-0.5 rounded-none text-[11px] font-bold transition text-white cursor-pointer shadow-sm"
            >
              <Globe className="w-3 h-3 text-white" /> {lang === "ES" ? "EN" : "ES"}
            </button>
          </div>
        </div>
      </div>

      {/* Navegación principal: logo y menú */}
      <div className="bg-white border-b border-slate-200 px-6 py-3 sm:py-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-2 sm:gap-3 md:flex-row md:justify-between md:gap-8">
          <Link
            href="/"
            onClick={scrollToTop}
            aria-label="AquaMetal - Inicio"
            className="flex shrink-0 items-center"
          >
            <Image
              src="/images/logo.png"
              alt="AquaMetal"
              width={180}
              height={180}
              priority
              className="h-12 w-32 object-cover object-center sm:h-14 sm:w-36"
            />
          </Link>
          <nav aria-label={lang === "ES" ? "Navegación principal" : "Main navigation"} className="w-full md:w-auto">
            <div className="grid grid-cols-3 gap-x-2 gap-y-1 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-5 sm:gap-y-2 md:justify-end md:gap-x-6">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={scrollToTop}
                    className="group inline-flex items-center justify-center gap-1.5 rounded-sm px-2 py-2 text-[11px] font-bold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700 sm:justify-start sm:px-1 sm:text-xs"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-slate-500 transition group-hover:text-blue-600" />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}