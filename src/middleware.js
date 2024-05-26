import { NextResponse } from "next/server";

export function middleware(request){
const user=' ';
if(!user)
  {
    return NextResponse.redirect(new URL('/',request.url));
  }
}
export const config = {
  matcher: ['/signin', '/signup'], // Match signin and signup routes
};
// import { NextResponse } from 'next/server';
// import { getSession } from './src/lib/lib'; // Assuming this fetches the session

// export async function middleware(request) {
//   // Fetch the session (modify if `getSession` doesn't handle errors)
//   const session = null

//   const pathname = request.nextUrl.pathname;

//   // Protect all routes except `/signin` and `/signup`
//   if (!session && pathname !== '/signin' && pathname !== '/signup') {
//     return NextResponse.redirect(new URL('/signin', request.url));
//   }

//   // Handle specific logic for `/signin` and `/signup` if needed
//   // (e.g., redirect logged-in users to a different page)
//   if (session && (pathname === '/signin' || pathname === '/signup')) {
//     // Optional: Redirect logged-in users to a different page
//     // return NextResponse.redirect(new URL('/dashboard', request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/signin', '/signup'], // Match all three routes
// };
