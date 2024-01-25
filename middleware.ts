import { authOptions } from "@/server/auth"
import {withAuth, type NextRequestWithAuth} from "next-auth/middleware"
import { redirect } from "next/navigation"


export default withAuth(
  function middleware(req: NextRequestWithAuth) {
    console.log('--------------PATHNAME--------------',req.nextUrl.pathname)
    console.log('--------------TOKEN--------------',req.nextauth.token)
  },
  {
    jwt: { decode: authOptions.jwt?.decode },
    callbacks: {
      authorized: ({ token }) => !!token, //token?.role === 'admin'
    }
  }
)


export const config = {
  matcher: '/posts',
}