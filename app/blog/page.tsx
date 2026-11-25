import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Wrench, ShieldCheck, Factory } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogList, { BlogPostItem } from "@/components/BlogList";
import { sanityFetch, SanityPost } from "@/lib/sanity";
import { getLocale } from "@/lib/i18n";
import { LocalizedLink } from "@/components/LocaleProvider";

export async function generateMetadata(): Promise<Metadata> {
  const isEnglish = (await getLocale()) === "en";
  return {
    title: "Blog",
    description: isEnglish
      ? "Technical guides from our facility in Mexico on CNC machining, ISO tolerances, material selection, and design for manufacturing."
      : "Guías técnicas desde nuestra planta en México: procesos de maquinado CNC, tolerancias ISO, selección de materiales y diseño para manufactura.",
  };
}

const SANITY_POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  excerpt,
  category,
  publishedAt,
  "imageUrl": mainImage.asset->url,
  "imageAlt": mainImage.alt
}`;

// Artículos base
const fallbackPosts: BlogPostItem[] = [
  {
    slug: "torneado-vs-fresado-cnc",
    category: "Procesos",
    readTime: "6 min",
    title: "Torneado CNC vs Fresado CNC: ¿Cuál Necesitas?",
    excerpt:
      "Descubre las diferencias fundamentales entre ambos procesos, geometrías ideales y cómo decidimos en planta la ruta más eficiente para tu pieza.",
  },
  {
    slug: "que-es-maquinado-cnc",
    category: "Fundamentos",
    readTime: "8 min",
    title: "¿Qué es el Maquinado CNC y Cómo Funciona?",
    excerpt:
      "Conoce cómo opera el control numérico computarizado, sus ventajas en repetibilidad y tolerancias estrechas para la industria moderna.",
  },
  {
    slug: "tolerancias-maquinado-cnc",
    category: "Calidad",
    readTime: "7 min",
    title: "Tolerancias de Maquinado CNC: Tabla de Referencia ISO",
    excerpt:
      "Una guía práctica para interpretar tolerancias dimensionales según la norma ISO 2768 y cómo especificarlas sin encarecer piezas innecesariamente.",
  },
  {
    slug: "costo-maquinado-cnc-mexico",
    category: "Industria",
    readTime: "9 min",
    title: "¿Cuánto Cuesta el Maquinado CNC en México?",
    excerpt:
      "Conoce los factores que mueven el precio real de una pieza: volumen, complejidad, selección de material, tolerancias y acabados.",
  },
];

const fallbackPostsEnglish: BlogPostItem[] = [
  {
    slug: "torneado-vs-fresado-cnc",
    category: "Processes",
    readTime: "6 min",
    title: "CNC Turning vs. CNC Milling: Which Do You Need?",
    excerpt:
      "Learn the key differences between these processes, the geometries each is suited for, and how we choose the most efficient manufacturing route for your part.",
  },
  {
    slug: "que-es-maquinado-cnc",
    category: "Fundamentals",
    readTime: "8 min",
    title: "What Is CNC Machining and How Does It Work?",
    excerpt:
      "Find out how computer numerical control works and how it delivers repeatability and tight tolerances for modern industry.",
  },
  {
    slug: "tolerancias-maquinado-cnc",
    category: "Quality",
    readTime: "7 min",
    title: "CNC Machining Tolerances: ISO Reference Table",
    excerpt:
      "A practical guide to interpreting dimensional tolerances under ISO 2768 and specifying them without unnecessarily increasing part costs.",
  },
  {
    slug: "costo-maquinado-cnc-mexico",
    category: "Industry",
    readTime: "9 min",
    title: "How Much Does CNC Machining Cost in Mexico?",
    excerpt:
      "Explore the factors that determine a part's cost: volume, complexity, material selection, tolerances, and finishes.",
  },
];

export default async function BlogPage() {
  const isEnglish = (await getLocale()) === "en";
  // Consultar Sanity de forma dinámica
  const sanityPosts = await sanityFetch<SanityPost[]>(SANITY_POSTS_QUERY);

  // Unificar artículos: los de Sanity van de primeros y conservan prioridad
  const postList: BlogPostItem[] = (() => {
    if (!sanityPosts || sanityPosts.length === 0) {
      return isEnglish ? fallbackPostsEnglish : fallbackPosts;
    }

    const sanitySlugs = new Set(sanityPosts.map((p) => p.slug));
    const remainingFallbacks = (isEnglish ? fallbackPostsEnglish : fallbackPosts)
      .filter((fb) => !sanitySlugs.has(fb.slug));

    return [
      ...sanityPosts.map((p) => ({
        slug: p.slug,
        category: p.category || "Procesos",
        readTime: "6 min",
        title: p.title,
        excerpt: p.excerpt || "",
        imageUrl: p.imageUrl,
      })),
      ...remainingFallbacks,
    ];
  })();

  return (
    <main className="min-h-screen bg-[#07101F] text-slate-100 font-sans selection:bg-[#2563FF] selection:text-white">
      <Navbar />

      {/* HERO SECTION DE ALTO IMPACTO */}
      <section className="relative overflow-hidden bg-[#07101F] px-5 pt-36 pb-12 text-white md:px-10 md:pt-44 md:pb-16 border-b border-white/[0.08]">
        {/* Imagen de fondo con overlay cinematográfico */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/blogh.jpg"
            alt={
              isEnglish
                ? "Aqua Metal precision CNC machining center"
                : "Centro de maquinado CNC de precisión Aqua Metal"
            }
            fill
            priority
            sizes="100vw"
            quality={95}
            className="object-cover object-center"
          />
          {/* Overlay suave para que la máquina y las chispas se vean claras sin perder legibilidad */}
          <div className="absolute inset-0 bg-[#07101F]/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07101F] via-transparent to-[#07101F]/60" />
          {/* Trama de cuadrícula técnica sutil */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_50%,transparent_100%)] pointer-events-none" />
        </div>

        {/* Resplandor ambiental */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-blue-500/15 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(37,99,255,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A5C8FF] font-mono">
              {isEnglish
                ? "Aqua Metal · Knowledge Center"
                : "Aqua Metal · Centro de Conocimiento"}
            </span>
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-display drop-shadow-[0_3px_20px_rgba(0,0,0,0.75)]">
            {isEnglish ? "From metal" : "Del metal"}{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#B9D6FF] via-[#8DB8FF] to-[#60A5FA]">
              {isEnglish ? "to knowledge." : "al conocimiento."}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-slate-200/90 font-normal">
            {isEnglish
              ? "Technical guides from our facility in Mexico: CNC machining processes, ISO tolerances, material selection, and design for manufacturing."
              : "Guías técnicas desde nuestra planta en México: procesos de maquinado CNC, tolerancias ISO, selección de materiales y diseño para manufactura."}
          </p>

          {/* Micro stats técnicos estilo glassmorphism */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-mono uppercase tracking-wider text-slate-300 max-w-3xl mx-auto">
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 backdrop-blur-md shadow-lg transition hover:border-blue-400/40 hover:bg-white/[0.07]">
              <Wrench className="h-4 w-4 text-[#70A7FF]" />
              <span>{isEnglish ? "CNC Turning & Milling" : "Torneado & Fresado CNC"}</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 backdrop-blur-md shadow-lg transition hover:border-blue-400/40 hover:bg-white/[0.07]">
              <ShieldCheck className="h-4 w-4 text-[#70A7FF]" />
              <span>{isEnglish ? "ISO 9001 Certified" : "Certificación ISO 9001"}</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 backdrop-blur-md shadow-lg transition hover:border-blue-400/40 hover:bg-white/[0.07]">
              <Factory className="h-4 w-4 text-[#70A7FF]" />
              <span>{isEnglish ? "Facility in Mexico" : "Planta en México"}</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      </section>

      {/* SECCIÓN PRINCIPAL: FILTROS + DESTACADO + GRID */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
        <BlogList posts={postList} />
      </section>

      {/* BANNER CTA: COTIZACIÓN Y ANÁLISIS DFM */}
      <section className="mx-auto mb-28 max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-[#0F172A] lg:grid-cols-2 border border-white/[0.08] shadow-2xl">

          {/* Contenido */}
          <div className="relative flex flex-col justify-center overflow-hidden px-7 py-12 text-white sm:px-12 sm:py-16 lg:px-14 lg:py-20">
            <div className="absolute inset-y-0 right-0 w-2/3 bg-gradient-to-l from-[#2563FF]/20 to-transparent" />
            <div className="absolute -right-10 -top-12 hidden text-white/[0.05] sm:block">
              <Factory size={240} strokeWidth={0.7} />
            </div>

            <div className="relative max-w-xl">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-300">
                {isEnglish
                  ? "Complimentary DFM consultation"
                  : "Asesoría DFM sin costo"}
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                {isEnglish
                  ? "Have a drawing and questions about the right process?"
                  : "¿Tienes un plano y dudas sobre el proceso ideal?"}
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-slate-300">
                {isEnglish
                  ? "Send us your technical specifications. Our engineers will review your component geometry and tolerances and recommend the most cost-effective production route within 24 hours."
                  : "Envíanos tus especificaciones técnicas. Nuestros ingenieros revisan la geometría de tu componente, tolerancias y te sugieren la ruta de producción más económica en menos de 24 horas."}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <LocalizedLink
                  href="/contacto"
                  className="group inline-flex min-h-14 items-center justify-center gap-3 bg-[#2563FF] px-7 py-4 text-sm font-bold text-white transition hover:bg-blue-500"
                >
                  {isEnglish ? "Send Drawings for a Quote" : "Enviar mis Planos para Cotizar"}
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </LocalizedLink>

                <LocalizedLink
                  href="/servicios"
                  className="inline-flex min-h-14 items-center justify-center border border-white/25 px-7 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
                >
                  {isEnglish ? "Explore services" : "Explorar servicios"}
                </LocalizedLink>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative min-h-[280px] sm:min-h-[380px] lg:min-h-full">
            <Image
              src="/images/cta.jpg"
              alt={
                isEnglish
                  ? "CNC machinery during manufacturing"
                  : "Maquinaria CNC durante un proceso de fabricación"
              }
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
