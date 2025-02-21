import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("user")?.value; // Ambil cookie "user"
  const { pathname } = req.nextUrl; // Ambil path URL

  // const isPublicPage = pathname === "/";
  const isAdminPage = pathname.startsWith("/admin");
  const isLoginPage = pathname === "/login";

  // 1️⃣ Jika user belum login dan mencoba akses halaman admin, redirect ke /login
  if (!token && isAdminPage) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // 2️⃣ Jika user sudah login dan mencoba akses /login, redirect ke halaman utama "/"
  if (token && isLoginPage) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // 3️⃣ Halaman publik ("/") boleh diakses tanpa token
  return NextResponse.next();
}

// Terapkan middleware hanya untuk halaman tertentu
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)" // Middleware hanya berjalan untuk halaman Next.js
  ]
};
