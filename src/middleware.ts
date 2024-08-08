import { withAuth } from "next-auth/middleware"

export default withAuth(
    // `withAuth` augments your `Request` with the user's token.
    function middleware(req: any) {
        
    },
    {
        callbacks: {
            authorized: ({ req, token }) => {

                if (req.url.startsWith("/profile")) {
                    if (!token) {
                        return false
                    }
                    return false
                }

                return true
            }
        },
        pages: {
            signIn: '/',
            
        }
    },
  )
 
export const config = { matcher: ["/profile"] }