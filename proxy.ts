import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const locale = url.pathname.startsWith("/en/") || url.pathname === "/en"
    ? "en"
    : "es";
  const currentPath =
    locale === "en"
      ? url.pathname.replace(/^\/en(?=\/|$)/, "") || "/"
      : url.pathname;
  const requestHeaders = new Headers(request.headers);

  requestHeaders.set("x-locale", locale);
  requestHeaders.set("x-current-path", currentPath);

  if (locale === "en") {
    url.pathname = currentPath;
    return NextResponse.rewrite(url, {
      request: { headers: requestHeaders },
    });
  }

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
