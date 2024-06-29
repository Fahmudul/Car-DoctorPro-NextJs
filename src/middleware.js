// import { cookies } from "next/headers";
// import { NextResponse } from "next/server";

// export const middleware = async (request) => {
//   console.log(request);
//   const token = cookies(request).get("next-auth.session-token");
//   if(!token) return NextResponse.redirect(new URL("/login", request.url));
//   return NextResponse.next()
// };

// export const config = {
//   matcher:[
//     "/my-bookings/*"
//   ]
// };
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const middleware = async (request) => {
  console.log(request.url);
  const token = cookies(request).get("next-auth.session-token");
  const pathname = request.nextUrl.pathname
  console.log(pathname)
  if(pathname.includes('api')) {
      return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url));
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/my-bookings/:path*", "/services/:path*",],
};