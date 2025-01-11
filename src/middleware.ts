import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const subdomain = hostname.split('.')[0];

  const url = request.nextUrl.clone();

  console.log("subdomain", subdomain);
  console.log("url", url);

  if (subdomain === 'admin') {
    url.pathname = `/admin${url.pathname}`;
  } else if (subdomain === 'user') {
    url.pathname = `/user${url.pathname}`;
  } else {
    url.pathname = `/404`;
  }

  return NextResponse.rewrite(url);
}
