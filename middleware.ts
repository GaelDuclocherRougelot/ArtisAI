import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default function handler(req: Request) {
  try {
    return clerkMiddleware()(req);
  } catch (error) {
    console.error("Middleware error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
