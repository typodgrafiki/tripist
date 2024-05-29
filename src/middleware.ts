import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const baseUrl = process.env.BASE_URL

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    const sessionCookie = request.cookies.get("auth")?.value || null

    if (path === "/sign-in" || path === "/sign-up") {
        if (sessionCookie) {
            const isValid = await checkSession(sessionCookie)
            if (isValid) {
                return NextResponse.redirect(`${baseUrl}/dashboard`)
            }
        }
        return NextResponse.next()
    }

    // Jesli nie ma ciasteczka to login
    if (!sessionCookie) {
        return NextResponse.redirect(`${baseUrl}/sign-in`)
    }

    // jesli jest ciasteczko to sprawdzamy
    const isValid = await checkSession(sessionCookie)

    if (!isValid) {
        return NextResponse.redirect(`${baseUrl}/sign-in`)
    }

    return NextResponse.next()
}

async function checkSession(sessionCookie: string | null): Promise<boolean> {
    if (!sessionCookie) {
        return false
    }

    const headers = {
        "Content-Type": "application/json",
        Authorization: sessionCookie,
    }

    const response = await fetch(`${baseUrl}/api/auth`, {
        method: "GET",
        headers: headers,
    })

    const result = await response.json()

    return result
}

export const config = {
    matcher: ["/dashboard/:path*", "/sign-in", "/sign-up"],
}
