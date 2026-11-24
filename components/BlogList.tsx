"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Tag, Search, Sparkles, BookOpen } from "lucide-react";

export interface BlogPostItem {
  slug: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  imageUrl?: string;
  publishedAt?: string;
  isFeatured?: boolean;
}

interface BlogListProps {
  posts: BlogPostItem[];
}

export default function BlogList({ posts }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Obtener categorías únicas
  const categories = useMemo(() => {
    const cats = new Set(posts.map((p) => p.category));
    return ["Todos", ...Array.from(cats)];
  }, [posts]);

  // Filtrar artículos por categoría y búsqueda
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "Todos" ||
        post.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  // El primer artículo puede ser destacado si no hay búsqueda activa
  const featuredPost = filteredPosts.length > 0 && selectedCategory === "Todos" && searchQuery === "" 
    ? filteredPosts[0] 
    : null;

  const regularPosts = featuredPost 
    ? filteredPosts.slice(1) 
    : filteredPosts;

  return (
    <div className="space-y-16">
      {/* Barra de Filtros y Búsqueda */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-white/[0.08] pb-8">
        {/* Pills de categorías */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isActive = selectedCategory.toLowerCase() === cat.toLowerCase();
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#2563FF] text-white shadow-lg shadow-blue-600/30 font-mono"
                    : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white border border-white/[0.06] font-mono"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Buscador */}
        <div className="relative min-w-[260px] md:max-w-xs w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por tema o pieza..."
            className="w-full rounded-full border border-white/10 bg-white/[0.03] py-2 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:border-[#2563FF] focus:bg-[#0F172A] focus:outline-none focus:ring-1 focus:ring-[#2563FF] transition-all"
          />
        </div>
      </div>

      {/* Artículo Destacado (Hero Card) */}
      {featuredPost && (
        <section aria-label="Artículo destacado">
          <article className="group relative overflow-hidden border border-white/[0.12] bg-gradient-to-br from-[#0F172A]/90 via-[#101D35]/70 to-[#07101F] shadow-2xl transition-all duration-500 hover:border-[#2563FF]/60 hover:shadow-blue-900/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
              {/* Imagen del destacado */}
              <div className="relative h-[280px] sm:h-[360px] lg:h-[440px] lg:col-span-7 overflow-hidden">
                {featuredPost.imageUrl ? (
                  <Image
                    src={featuredPost.imageUrl}
                    alt={featuredPost.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-[#101D35] via-[#0F172A] to-[#07101F] flex items-center justify-center p-8 text-center relative overflow-hidden">
                    <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#2563FF]/15 blur-2xl pointer-events-none" />
                    <div className="relative z-10 space-y-2">
                      <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8DB8FF] block">
                        Ingeniería & Manufactura CNC
                      </span>
                      <p className="text-xl sm:text-2xl font-bold font-display text-white max-w-sm mx-auto">
                        {featuredPost.title}
                      </p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07101F] via-[#07101F]/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#07101F]/90" />
                
                {/* Badge de destacado */}
                <div className="absolute top-5 left-5 inline-flex items-center gap-1.5 rounded-full bg-[#2563FF] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-900/50">
                  <Sparkles className="h-3 w-3" />
                  Destacado
                </div>
              </div>

              {/* Contenido del destacado */}
              <div className="p-8 sm:p-10 lg:col-span-5 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="mb-4 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#8DB8FF]">
                    <span className="rounded-full bg-[#2563FF]/15 border border-[#2563FF]/30 px-3 py-1 text-[#70A7FF]">
                      {featuredPost.category}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <Clock className="h-3 w-3" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white leading-tight group-hover:text-[#70A7FF] transition-colors mb-4">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed line-clamp-4 mb-8">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#2563FF] to-[#4D91FF] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition hover:shadow-blue-600/50 hover:brightness-110"
                  >
                    Leer artículo completo
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </section>
      )}

      {/* Grid de Artículos Secundarios */}
      {regularPosts.length > 0 ? (
        <section aria-label="Lista de artículos">
          {featuredPost && (
            <div className="mb-8 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#2563FF]" />
              <h3 className="text-xl font-bold font-display text-white">
                {selectedCategory === "Todos" ? "Más publicaciones técnicas" : `Artículos en ${selectedCategory}`}
              </h3>
            </div>
          )}

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col justify-between overflow-hidden border border-white/[0.08] bg-[#0F172A]/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2563FF]/50 hover:shadow-2xl hover:shadow-blue-950/40"
              >
                <div>
                  {/* Imagen de la tarjeta */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                    {post.imageUrl ? (
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-[#101D35] to-[#07101F] flex flex-col items-center justify-center p-6 text-center border-b border-white/[0.04]">
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8DB8FF]/70 mb-1">
                          Aqua Metal · {post.category}
                        </span>
                        <p className="text-sm font-bold font-display text-white line-clamp-2">
                          {post.title}
                        </p>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-black/20" />

                    {/* Badge de categoría */}
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-[#07101F]/80 backdrop-blur-md border border-white/10 px-3 py-1 text-xs font-mono uppercase tracking-wider text-[#8DB8FF]">
                        {post.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-4 flex items-center gap-1 text-xs font-mono text-slate-300 bg-black/50 backdrop-blur-sm px-2.5 py-0.5 rounded-full">
                      <Clock className="h-3 w-3 text-[#70A7FF]" />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Texto de la tarjeta */}
                  <div className="p-6">
                    <h4 className="text-lg sm:text-xl font-bold font-display leading-snug text-white transition-colors group-hover:text-[#70A7FF] line-clamp-2 mb-3">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h4>

                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-white/[0.04]">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#70A7FF] group-hover:text-white transition-colors"
                  >
                    Leer artículo
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : (
        /* Estado vacío cuando no hay resultados */
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-12 text-center my-12">
          <BookOpen className="mx-auto h-12 w-12 text-slate-600 mb-4" />
          <h3 className="text-lg font-bold font-display text-white mb-2">
            No se encontraron artículos
          </h3>
          <p className="text-slate-400 text-sm max-w-md mx-auto mb-6">
            No encontramos publicaciones que coincidan con &ldquo;{searchQuery}&rdquo; en la categoría &ldquo;{selectedCategory}&rdquo;.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("Todos");
              setSearchQuery("");
            }}
            className="rounded-full bg-[#2563FF] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-blue-600 transition-colors"
          >
            Ver todos los artículos
          </button>
        </div>
      )}
    </div>
  );
}
