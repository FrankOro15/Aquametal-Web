export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export function localizedPath(path: string, locale: Locale): string {
  if (
    !path.startsWith("/") ||
    path.startsWith("//") ||
    path.startsWith("/api/")
  ) {
    return path;
  }

  const pathWithoutLocale = path.replace(/^\/en(?=\/|$)/, "") || "/";
  return locale === "en"
    ? `/en${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`
    : pathWithoutLocale;
}
