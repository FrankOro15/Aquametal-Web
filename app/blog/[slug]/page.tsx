import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  ShieldCheck,
  Wrench,
  Factory,
  ChevronRight,
  FileText,
  Share2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortableTextRenderer from "@/components/PortableTextRenderer";
import FaqAccordion from "@/components/FaqAccordion";
import { sanityFetch, SanityPost } from "@/lib/sanity";

interface Props {
  params: Promise<{ slug: string }>;
}

const SINGLE_POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  category,
  publishedAt,
  "imageUrl": mainImage.asset->url,
  "imageAlt": mainImage.alt,
  body,
  seoTitle,
  seoDescription,
  author,
  authorRole,
  faqs[]{
    _key,
    question,
    answer
  }
}`;

const OTHER_POSTS_QUERY = `*[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...2]{
  _id,
  title,
  "slug": slug.current,
  category,
  excerpt,
  "imageUrl": mainImage.asset->url
}`;

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await sanityFetch<Array<{ slug: string }>>(
    `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`
  );
  if (!posts) return [];
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await sanityFetch<SanityPost>(SINGLE_POST_QUERY, { slug });

  if (!post) {
    return {
      title: "Artículo técnico",
      description: "Artículo técnico sobre maquinado CNC y manufactura industrial.",
    };
  }

  const title = (post.seoTitle || post.title).replace(
    /\s*(?:\||—)\s*(?:Aqua Metal(?: Blog)?|Aquametal)$/i,
    ""
  );
  const description = post.seoDescription || post.excerpt || "Guía técnica sobre maquinado CNC.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.aqua-metal.com/blog/${slug}`,
      ...(post.imageUrl ? { images: [{ url: post.imageUrl, alt: post.imageAlt || post.title }] } : {}),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await sanityFetch<SanityPost>(SINGLE_POST_QUERY, { slug });

  if (!post) {
    notFound();
  }

  const otherPosts = await sanityFetch<SanityPost[]>(OTHER_POSTS_QUERY, { slug });

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("es-MX", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "21 de febrero, 2026";

  const faqSchema =
    post.faqs && post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : null;

  return (
    <main className="min-h-screen bg-[#07101F] text-slate-100 font-sans selection:bg-[#2563FF] selection:text-white">
      <Navbar />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* HEADER EDITORIAL DEL ARTÍCULO */}
      <header className="relative pt-36 pb-16 sm:pt-40 sm:pb-20 border-b border-white/[0.08] bg-gradient-to-b from-[#0F172A] via-[#0B1220] to-[#07101F] overflow-hidden">
        {/* Glow de ambientación superior */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-full max-w-7xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2563FF]/20 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          {/* Breadcrumb de navegación */}
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">
              Inicio
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-600" />
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-600" />
            <span className="text-[#70A7FF]">{post.category || "Procesos"}</span>
          </nav>

          {/* Categoría y Tiempo de Lectura */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2563FF]/15 border border-[#2563FF]/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#70A7FF] font-mono">
              <Tag className="h-3 w-3" />
              {post.category || "Procesos"}
            </span>
            <span className="text-slate-600">·</span>
            <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-400">
              <Clock className="h-3 w-3 text-[#2563FF]" />
              {post.readTime || "7 min de lectura técnica"}
            </span>
            <span className="text-slate-600">·</span>
            <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-400">
              <Calendar className="h-3 w-3 text-slate-500" />
              {formattedDate}
            </span>
          </div>

          {/* Título Principal */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-display text-white leading-[1.12] tracking-tight mb-8">
            {post.title}
          </h1>

          {/* Resumen / Lead Paragraph destacado */}
          {post.excerpt && (
            <div className="rounded-2xl border-l-4 border-[#2563FF] bg-white/[0.02] p-6 sm:p-7 backdrop-blur-sm border-t border-r border-b border-white/[0.06]">
              <p className="text-slate-200 text-lg sm:text-xl leading-relaxed font-normal">
                {post.excerpt}
              </p>
            </div>
          )}

          {/* Ficha de Autoría y Trazabilidad */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/[0.06]">
            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#2563FF] to-[#14264A] text-white font-display font-bold text-sm shadow-md shadow-blue-900/40 border border-white/10">
                AM
              </div>
              <div>
                <p className="text-sm font-bold text-white font-display">
                  {post.author || "Equipo de Ingeniería Aqua Metal"}
                </p>
                <p className="text-xs text-slate-400 font-mono">
                  {post.authorRole || "Planta de Manufactura · Estado de México"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-mono text-emerald-400">
                <ShieldCheck className="h-3.5 w-3.5" />
                Validado en Planta
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-slate-50 text-slate-900">
      {/* CONTENEDOR DE LA IMAGEN PRINCIPAL */}
      <section className="container mx-auto px-6 max-w-5xl -mt-6 sm:-mt-8 relative z-20">
        {post.imageUrl ? (
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.12] bg-[#0F172A] shadow-2xl shadow-blue-950/40">
            <div className="relative aspect-video sm:aspect-[21/9] w-full max-h-[500px]">
              <Image
                src={post.imageUrl}
                alt={post.imageAlt || post.title}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1100px"
                className="object-cover"
              />
            </div>
            {post.imageAlt && (
              <div className="bg-[#07101F]/90 px-6 py-3 text-xs font-mono text-slate-400 border-t border-white/10">
                {post.imageAlt}
              </div>
            )}
          </div>
        ) : (
          /* Placeholder estético industrial cuando el artículo no tiene foto cargada aún */
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#0F172A] via-[#101D35] to-[#07101F] p-8 sm:p-12 shadow-2xl">
            <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-[#2563FF]/10 blur-3xl pointer-events-none" />
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8DB8FF]">
                  Guía de Manufactura de Precisión
                </span>
                <p className="text-xl sm:text-2xl font-bold font-display text-white">
                  {post.title}
                </p>
              </div>
              <Wrench className="h-12 w-12 text-[#2563FF]/40 shrink-0 hidden sm:block" />
            </div>
          </div>
        )}
      </section>

      {/* CUERPO PRINCIPAL DEL ARTÍCULO: 2 COLUMNAS (CONTENIDO + SIDEBAR) */}
      <div className="container mx-auto px-6 py-16 sm:py-20 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Columna de Lectura */}
          <article className="lg:col-span-8 min-w-0">
            {post.body && (
              <div className="prose-content">
                <PortableTextRenderer value={post.body} />
              </div>
            )}

            {/* SECCIÓN DE PREGUNTAS FRECUENTES INTERACTIVAS */}
            {post.faqs && post.faqs.length > 0 && (
              <section className="mt-16 pt-12 border-t border-slate-200" aria-label="Preguntas Frecuentes">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="h-5 w-1.5 rounded-full bg-[#2563FF]" />
                    <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                      Preguntas Frecuentes
                    </h2>
                  </div>
                  <p className="text-slate-600 text-sm">
                    Respuestas directas desde la experiencia en planta sobre este proceso.
                  </p>
                </div>

                <FaqAccordion key={post._id} faqs={post.faqs} />
              </section>
            )}

            {/* Botón de volver */}
            <div className="mt-14 pt-8 border-t border-slate-200 flex items-center justify-between">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900 transition-colors font-mono"
              >
                <ArrowLeft className="h-4 w-4" />
                Volver a todos los artículos
              </Link>
            </div>
          </article>

          {/* Columna Lateral (Sidebar Técnico) */}
          <aside className="lg:col-span-4 space-y-8 sticky top-28">
            {/* Tarjeta de Acción Rápida: Cotización DFM */}
            <div className="rounded-3xl border border-blue-200 bg-white p-7 shadow-xl shadow-slate-200/70">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2563FF] text-white shadow-md shadow-blue-600/40">
                  <Factory className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-bold font-display text-slate-900 text-base">
                    Asesoría en Planta
                  </h3>
                  <p className="text-xs text-blue-700 font-mono">
                    Revisión DFM en 24h
                  </p>
                </div>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                ¿Tienes un plano o requerimiento relacionado con este artículo? Analizamos la geometría de tu pieza para recomendarte la ruta más económica.
              </p>

              <Link
                href="/contacto"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2563FF] to-[#4D91FF] py-3 px-4 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-600/30 transition hover:brightness-110"
              >
                Enviar mis Planos
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Ficha de Capacidad de Planta */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-blue-700">
                Capacidad Industrial
              </h4>
              <ul className="space-y-3 text-xs text-slate-700 font-mono">
                <li className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-500">Tolerancia Fina:</span>
                  <span className="text-slate-900 font-bold">±0.5 mm</span>
                </li>
                <li className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-500">Capacidad por Lote:</span>
                  <span className="text-slate-900 font-bold">+5,000 pzas</span>
                </li>
                <li className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-500">Maquinaria:</span>
                  <span className="text-slate-900 font-bold">+30 unidades</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-slate-500">Certificación:</span>
                  <span className="text-emerald-700 font-bold">ISO 9001</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
      </div>

      {/* SECCIÓN FINAL: ARTÍCULOS RELACIONADOS */}
      {otherPosts && otherPosts.length > 0 && (
        <section className="border-t border-white/[0.08] bg-[#0F172A]/40 py-20">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="mb-10 flex items-center justify-between">
              <h2 className="text-2xl font-bold font-display text-white">
                Otras publicaciones recomendadas
              </h2>
              <Link
                href="/blog"
                className="text-xs font-mono uppercase tracking-wider text-[#70A7FF] hover:text-white transition-colors"
              >
                Ver todo el blog →
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {otherPosts.map((other) => (
                <Link
                  key={other._id}
                  href={`/blog/${other.slug}`}
                  className="group block rounded-2xl border border-white/[0.08] bg-[#0F172A] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563FF]/50 hover:shadow-xl"
                >
                  <span className="mb-2 block text-xs font-mono uppercase tracking-wider text-[#8DB8FF]">
                    {other.category || "Procesos"}
                  </span>
                  <h3 className="text-lg font-bold font-display text-white transition-colors group-hover:text-[#70A7FF] mb-2 line-clamp-2">
                    {other.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {other.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BANNER CTA INFERIOR */}
      <section className="container mx-auto px-6 pb-24 max-w-5xl">
        <div className="grid overflow-hidden rounded-3xl bg-[#0F172A] lg:grid-cols-2 border border-white/[0.08] shadow-2xl">

          {/* Contenido */}
          <div className="relative flex flex-col justify-center overflow-hidden px-7 py-12 text-white sm:px-12 sm:py-16 lg:px-14 lg:py-20">
            <div className="absolute inset-y-0 right-0 w-2/3 bg-gradient-to-l from-[#2563FF]/20 to-transparent" />
            <div className="absolute -right-10 -top-12 hidden text-white/[0.05] sm:block">
              <Factory size={240} strokeWidth={0.7} />
            </div>

            <div className="relative max-w-xl">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-300">
                Trabajemos juntos
              </span>

              <h2 className="mt-5 text-2xl sm:text-3xl font-bold leading-tight tracking-tight lg:text-4xl">
                ¿Requieres cotizar componentes maquinados?
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-slate-300">
                Envía tus especificaciones o modelos CAD. Te respondemos con un análisis de fabricabilidad y propuesta económica en 24 horas.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contacto"
                  className="group inline-flex min-h-14 items-center justify-center gap-3 bg-[#2563FF] px-7 py-4 text-sm font-bold text-white transition hover:bg-blue-500"
                >
                  Solicitar Cotización sin Compromiso
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative min-h-[280px] sm:min-h-[380px] lg:min-h-full">
            <Image
              src="/images/cta.jpg"
              alt="Maquinaria CNC durante un proceso de fabricación"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
