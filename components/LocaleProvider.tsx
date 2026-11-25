"use client";

import { createContext, useContext, type ComponentProps, type ReactNode } from "react";
import Link from "next/link";
import { localizedPath, type Locale } from "@/lib/i18n-shared";

const LocaleContext = createContext<Locale>("es");

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}

type LocalizedLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

export function LocalizedLink({
  href,
  ...props
}: LocalizedLinkProps) {
  const locale = useLocale();

  return <Link href={localizedPath(href, locale)} {...props} />;
}
