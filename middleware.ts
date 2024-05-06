// OMKAR CODE IMP

import { NextResponse } from "next/server";

export function middleware(request: any) {
  const session = request.cookies.get(
    process.env.NEXT_PUBLIC_MIDDELWARE_SESSION_TOKEN_NAME
  )?.value;
  const path = request.nextUrl.pathname;

  if (!session && !["/"].includes(path)) {
    return NextResponse.redirect(new URL("/", request.url));
  } else if (session && path === "/") {
    return NextResponse.redirect(new URL("/test", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/test"],
};

// SPRING CODE

// import { NextResponse } from "next/server";
// import { jwtDecode } from "jwt-decode";

// export function middleware(request) {
//   let cookie = request.cookies.get("session-token");
//   const decoded = jwtDecode(cookie.value);
//   const { pathname } = request.nextUrl;

//   // redirect to login page if not logged in or cookie unavailable
//   if (
//     !cookie &&
//     pathname !== "/" &&
//     !pathname.includes("/_next/") &&
//     !pathname.includes("/images/")
//   ) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   // redirect to dashboard if incorrect role
//   if (
//     (cookie && pathname === "/entities") ||
//     pathname === "/regulators" ||
//     pathname === "/compliances"
//   ) {
//     if (decoded.role[0] === "USER") {
//       return NextResponse.redirect(new URL("/dashboard", request.url));
//     }
//   }

//   // redirect to dashboard if going to login page when logged in
//   if (cookie && pathname === "/") {
//     return NextResponse.redirect(new URL("/dashboard", request.url));
//   }
// }

// OMKAR CODE

// import { NextResponse } from "next/server";

// export function middleware(request: any) {
//   const session = request.cookies.get(
//     process.env.NEXT_PUBLIC_MIDDELWARE_SESSION_TOKEN_NAME
//   )?.value;
//   const path = request.nextUrl.pathname;

//   if (!session && !["/login", "/register", "/"].includes(path)) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   } else if (session && (path === "/login" || path === "/register")) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/login", "/register", "/products"],
// };
