//  Chặn route nếu không có refresh_token
import { NextResponse, NextRequest } from "next/server";
export async function middleware(request: NextRequest) {
  const refreshToken = request.cookies.get("refresh_token");
  if (!refreshToken) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/profile/:path*"],
};
