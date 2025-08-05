/* eslint-disable @typescript-eslint/no-explicit-any */
// src/middleware.ts
import auth from '@/auth';
import { NextResponse } from 'next/server';

export default auth((req: any) => {
  const isAdminRoute = req.nextUrl.pathname.startsWith('/admin');
  
  if (isAdminRoute && req.auth?.user?.role !== 'admin') {
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
});

export const config = {
  matcher: ['/admin/:path*']
};