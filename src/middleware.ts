import { authMiddleware } from "@clerk/nextjs"

const publicRoutes = [
    "/",
    "/blog",
    "/dokumentacja",
    "/faq",
    "/kontakt",
    "/o-nas",
    "/api/webhooks/user",
    "/api/auth/user",
]

export default authMiddleware({
    publicRoutes,
})

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
