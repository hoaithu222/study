// Next Request
// Next Response

import { headers } from "next/headers";
import { NextResponse } from "next/server";


export const middleware = (request) => {
    const isAuthenticated = true;

    const pathname = request.nextUrl.pathname;
    if (pathname.startsWith('/products') && !isAuthenticated) {
        return NextResponse.redirect(new URL("/auth/login", request.url))

    }
    if (pathname === "/lien-he") {
        return NextResponse.rewrite(new URL('/contact', request.url))
    }
    if (pathname === "/contact") {
        return NextResponse.redirect(new URL('/lien-he', request.url))
    }
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-api-key", "ahhi")

    const response = NextResponse.next(
        {
            request: {
                headers: requestHeaders,
            }
        }
    );
    const name = request.cookies.get("name");
    console.log(name);
    response.cookies.set("age", 32, {
        path: "/",
        maxAge: 600,
        httpOnly: true
    })
    // response.headers.set("x-abc", "ok");
    // response.headers.set('Set-Cookie', "name=An;email = hoangan@gmail.com;max-age=600;path=/;httpOnly")
    // response.headers.set('Set-Cookie', "name=Hoang an;email = hoangan@gmail.com;max-age=600;path=/;httpOnly")
    return response;

}
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
        // "/products/:path*"
    ],
}