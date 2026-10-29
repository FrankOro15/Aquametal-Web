"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Wrench, Factory, Cog, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function Servicios() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans pt-44 sm:pt-44 md:pt-32">
      <Navbar />

      <section className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Capacidades Industriales</span>
          <h1 className="text-4xl font-extrabold mt-2">Servicios y Procesos de Maquinado</h1>
          <p className="text-slate-400 text-sm mt-3 max-w-2xl mx-auto">
            Soluciones integrales de manufactura metálica con especialización en producciones en serie mayores a 5,000 piezas.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white border border-slate-200 p-8 rounded-none shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-none flex items-center justify-center text-blue-800 mb-4">
              <Cog className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Maquinado CNC de Alta Precisión</h2>
            <p className="text-slate-600 text-xs mt-2 leading-relaxed">
              Tornos CNC con tecnología de doble husillo y centros de maquinado preparados para tolerancias milimétricas en un rango de <strong className="text-slate-800">1 mm a 60 mm</strong>.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-8 rounded-none shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-none flex items-center justify-center text-blue-800 mb-4">
              <Factory className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Producción en Serie (&gt;5,000 Piezas)</h2>
            <p className="text-slate-600 text-xs mt-2 leading-relaxed">
              Capacidad instalada para cubrir requerimientos masivos en tornos automáticos de levas, forja en frío y roscadoras de alta eficiencia.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-8 rounded-none shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-none flex items-center justify-center text-blue-800 mb-4">
              <Wrench className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Diseño y Maquila de Componentes</h2>
            <p className="text-slate-600 text-xs mt-2 leading-relaxed">
              Desarrollo de piezas personalizadas a partir de planos CAD/DWG, optimizando el aprovechamiento de material ferrosos y no ferrosos.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-8 rounded-none shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-none flex items-center justify-center text-blue-800 mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Asistencia Técnica y Control FAI/PPAP</h2>
            <p className="text-slate-600 text-xs mt-2 leading-relaxed">
              Soporte de ingeniería en el diseño de ensamble e inspección rigurosa de primera pieza antes de la liberación de lote.
            </p>
          </div>

        </div>

        <div className="mt-12 text-center">
          <Link href="/contacto" className="inline-flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white font-bold px-8 py-3.5 rounded-none shadow-md transition">
            Solicitar Cotización de Proceso <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}