
import { NextResponse } from "next/server";
import { createSupabaseServer } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const next = requestUrl.searchParams.get("next") ?? "/";

  if (code) {
    const supabase = await createSupabaseServer();

    try {
      // Exchange the code for a session and persist cookies
      await supabase.auth.exchangeCodeForSession(code);
    } catch (err) {
      console.error("Supabase callback error:", err);
      return NextResponse.redirect(new URL("/signin?error=callback", requestUrl.origin));
    }
  }

  return NextResponse.redirect(new URL(next, requestUrl.origin));
}
