import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog de Maquinado CNC | Aqua Metal",
  description:
    "Guías y artículos técnicos sobre maquinado CNC, torneado, tolerancias y manufactura industrial.",
};

const blogPosts = [
  {
    slug: "que-es-maquinado-cnc",
    category: "Fundamentos",
    readTime: "8 min",
    title: "¿Qué es el Maquinado CNC y Cómo Funciona?",
    excerpt:
      "Conoce cómo funciona el control numérico computarizado, sus procesos y por qué permite fabricar piezas metálicas con precisión.",
  },
  {
    slug: "torneado-vs-fresado-cnc",
    category: "Procesos",
    readTime: "6 min",
    title: "Torneado CNC vs Fresado CNC: ¿Cuál Necesitas?",
    excerpt:
      "Descubre las diferencias entre ambos procesos, sus aplicaciones ideales y cómo elegir el adecuado para tu pieza.",
  },
  {
    slug: "tolerancias-maquinado-cnc",
    category: "Calidad",
    readTime: "7 min",
    title: "Tolerancias de Maquinado CNC: Tabla de Referencia ISO",
    excerpt:
      "Una guía práctica para entender las tolerancias dimensionales y especificarlas sin encarecer innecesariamente una pieza.",
  },
  {
    slug: "costo-maquinado-cnc-mexico",
    category: "Industria",
    readTime: "9 min",
    title: "¿Cuánto Cuesta el Maquinado CNC en México?",
    excerpt:
      "Conoce cómo influyen el material, la complejidad, el volumen y las tolerancias en el costo de una pieza maquinada.",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Navbar />

      <section className="bg-slate-900 px-6 pb-16 pt-44 text-white sm:pt-44 md:pt-40">
        <div className="mx-auto max-w-6xl text-center">
          <span className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400">
            <FileText className="h-4 w-4" />
            Centro de conocimiento
          </span>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Blog y recursos técnicos
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
            Artículos prácticos sobre maquinado CNC, calidad y manufactura
            industrial.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="group flex flex-col border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-800">
                {post.category}
              </span>
              <span className="text-xs text-slate-500">
                {post.readTime} de lectura
              </span>
            </div>
            <h2 className="text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-blue-800">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
              {post.excerpt}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-800"
            >
              Leer artículo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </article>
        ))}
      </section>

      <section className="mx-auto mb-16 max-w-6xl px-6">
        <div className="bg-blue-50 px-6 py-10 text-center sm:px-10">
          <h2 className="text-2xl font-bold text-slate-900">
            ¿Tienes un proyecto de maquinado?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600">
            Comparte tus planos o especificaciones con nuestro equipo para
            solicitar una cotización.
          </p>
          <Link
            href="/contacto"
            className="mt-6 inline-flex items-center gap-2 bg-blue-800 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-900"
          >
            Solicitar cotización
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
