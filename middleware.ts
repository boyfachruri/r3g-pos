// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  // Path yang tidak butuh login
  const publicRoutes = ["/auth/login", "/auth/register", "/"];

  const isPublic = publicRoutes.includes(request.nextUrl.pathname);

  if (!isPublic && !token) {
    const loginUrl = new URL("/auth/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// ⬇️ Taruh ini di paling bawah middleware.ts
export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"], // match semua kecuali asset internal
};
