import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("user")?.value; // Ambil cookie "user"

  // Jika belum login dan mencoba akses halaman selain "/login", redirect ke login
  if (!token && req.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Jika sudah login dan mencoba akses "/login", redirect ke halaman utama "/"
  if (token && req.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

// Terapkan middleware hanya untuk halaman tertentu
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"] // Middleware hanya berjalan untuk halaman Next.js
};
