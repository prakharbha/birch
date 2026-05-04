import { NextResponse } from 'next/server'

export function middleware(request) {
  const host = request.headers.get('host') || ''
  const isPillars =
    host === 'pillarshotel.com' ||
    host === 'www.pillarshotel.com' ||
    host.endsWith('.pillarshotel.com')

  const response = NextResponse.next()

  if (isPillars) {
    // Mark this visitor as coming from Pillars Hotel.
    // The cookie is session-scoped (no maxAge) so it clears when the browser tab closes.
    // sameSite=lax so it survives the cross-domain redirect.
    response.cookies.set('from_pillars', '1', {
      path: '/',
      sameSite: 'lax',
      secure: true,
    })
  }

  return response
}

export const config = {
  // Run on all routes except Next.js internals and static assets
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
