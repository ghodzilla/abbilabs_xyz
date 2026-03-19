import { NextResponse } from 'next/server';

const DASHBOARD_SECRET = process.env.DASHBOARD_SECRET || '6b86523c96074acda4a9b1afe02837bc';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/dashboard')) {
    const cookie = request.cookies.get('dashboard_auth');
    if (cookie?.value === DASHBOARD_SECRET) return NextResponse.next();

    // Check Basic Auth header
    const auth = request.headers.get('authorization');
    if (auth) {
      const [, b64] = auth.split(' ');
      const [, pass] = Buffer.from(b64, 'base64').toString().split(':');
      if (pass === DASHBOARD_SECRET) {
        const res = NextResponse.next();
        res.cookies.set('dashboard_auth', DASHBOARD_SECRET, { httpOnly: true, maxAge: 86400 * 30 });
        return res;
      }
    }

    // Return 401 with Basic Auth challenge
    return new NextResponse('Unauthorised', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Dashboard"' },
    });
  }

  return NextResponse.next();
}

export const config = { matcher: ['/dashboard/:path*'] };
