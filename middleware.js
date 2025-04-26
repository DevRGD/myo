import { auth } from '@/utils/auth';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  try {
    const session = await auth();
    const { pathname } = req.nextUrl;
    const role = session?.user?.role;

    // If there is no session, redirect to login page
    if (!session) return NextResponse.redirect(new URL('/login', req.url));

    // If the role is CEO, allow access to all routes
    if (role === 'ceo') return NextResponse.next();

    // Define the routes for each role
    const employeeRoutes = ['/employee'];
    const managerRoutes = ['/employee', '/manager'];

    // Employee role: can access only /employee routes
    if (role === 'employee' && !employeeRoutes.some((route) => pathname.startsWith(route))) {
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    }

    // Manager role: can access /employee and /manager routes
    if (role === 'manager' && !managerRoutes.some((route) => pathname.startsWith(route))) {
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    }

    // Default: redirect all roles to unauthorized
    return NextResponse.redirect(new URL('/unauthorized', req.url));
  } catch (error) {
    console.error('Middleware error:', error);
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = { matcher: ['/employee/:path*', '/manager/:path*', '/ceo/:path*'] };
