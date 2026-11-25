import type { MetadataRoute } from "next";
import { localizedPath } from "@/lib/i18n-shared";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aqua-metal.com";
  const routes: Array<
    Pick<
      MetadataRoute.Sitemap[number],
      "lastModified" | "changeFrequency" | "priority"
    > & { path: string }
  > = [
    {
      path: "/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      path: "/nosotros",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      path: "/servicios",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      path: "/contacto",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      path: "/galeria",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "/privacidad",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      path: "/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...[
      "torneado-vs-fresado-cnc",
      "que-es-maquinado-cnc",
      "tolerancias-maquinado-cnc",
      "costo-maquinado-cnc-mexico",
    ].map((slug) => ({
      path: `/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return routes.flatMap(({ path, ...entry }) => {
    const spanishUrl = `${baseUrl}${path}`;
    const englishUrl = `${baseUrl}${localizedPath(path, "en")}`;
    const alternates = {
      languages: {
        es: spanishUrl,
        en: englishUrl,
        "x-default": spanishUrl,
      },
    };

    return [
      { url: spanishUrl, ...entry, alternates },
      { url: englishUrl, ...entry, alternates },
    ];
  });
}