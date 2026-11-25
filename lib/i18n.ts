import { headers } from "next/headers";
import { localizedPath, type Locale } from "@/lib/i18n-shared";

export { locales, type Locale, localizedPath } from "@/lib/i18n-shared";

const siteUrl = "https://aqua-metal.com";

export async function getLocale(): Promise<Locale> {
  const locale = (await headers()).get("x-locale");
  return locale === "en" ? "en" : "es";
}

export async function getCurrentPath(): Promise<string> {
  return (await headers()).get("x-current-path") || "/";
}

export function localizedAlternates(path: string, locale: Locale) {
  const spanishPath = path.replace(/^\/en(?=\/|$)/, "") || "/";
  const englishPath = localizedPath(spanishPath, "en");

  return {
    canonical: `${siteUrl}${locale === "en" ? englishPath : spanishPath}`,
    languages: {
      es: `${siteUrl}${spanishPath}`,
      en: `${siteUrl}${englishPath}`,
      "x-default": `${siteUrl}${spanishPath}`,
    },
  };
}

export function localizedUrl(path: string): string {
  return `${siteUrl}${path}`;
}
