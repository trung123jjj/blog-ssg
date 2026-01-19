import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Chỉ bảo vệ /api/secret
  if (request.nextUrl.pathname.startsWith("/api/secret")) {
    const apiKey = request.headers.get("x-api-key");
    const validKey = process.env.API_SECRET_KEY;

    if (!apiKey || apiKey !== validKey) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/secret"],
};
