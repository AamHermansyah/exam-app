import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authRoutes, publicRoutes } from "./routes";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const token = (await cookies()).get("token");
  const isLoggedIn = !!token?.value;

  const isAuthRoute = authRoutes.includes(url.pathname);
  const isPublicRoute = publicRoutes.some((path) => path === url.pathname);

  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return;
  }

  if (!isLoggedIn && !isPublicRoute) {
    let callbackUrl = url.pathname;
    if (url.search) {
      callbackUrl += url.search;
    }

    const encodedCallbackUrl = encodeURIComponent(callbackUrl);

    return NextResponse.redirect(
      new URL(`/login?callbackUrl=${encodedCallbackUrl}`, request.url)
    );
  }

  if (isLoggedIn && !isPublicRoute) {
    return NextResponse.next();
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
