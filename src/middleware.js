import { NextResponse } from 'next/server';
import { decrypt } from '@/app/lib/session';
import { cookies } from 'next/headers';
import { logout } from './auth/lib';

// Define protected and public routes
const protectedRoutes = ['/', '/customers', '/finance', '/menu', '/build-qr', '/offers', '/orders', '/restaurant', '/tables', '/seller'];
const publicRoutes = ['/login'];

export default async function middleware(req) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const cookieStore = cookies()
  // Get session cookie
  const cookie = cookieStore.get('session')?.value;

  // Decrypt the session cookie
  const session = cookie ? await decrypt(cookie) : null;

  // Redirect to /login if user is not authenticated on a protected route
  if (isProtectedRoute && !session?.user) {
    return NextResponse.redirect(new URL(`/login?next=${path}`, req.nextUrl));
  }

  // Redirect to /dashboard if user is authenticated and on a public route
  if (isPublicRoute && session?.user) {
    return NextResponse.redirect(new URL('/', req.nextUrl));
  }

  return NextResponse.next();
}

// Config to exclude specific paths from middleware
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
