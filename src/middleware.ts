import { authMiddleware } from "@clerk/nextjs"

const publicRoutes = [
    "/",
    "/blog",
    "/api/webhooks/user",
    "/api/showLists",
    "/api/showListDetails",
]

export default authMiddleware({
    publicRoutes,
})

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
