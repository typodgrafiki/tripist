// // Import potrzebnych bibliotek
// import { NextResponse } from "next/server"
// import type { NextRequest } from "next/server"

// // Funkcja pomocnicza do sprawdzenia sesji
// // Możesz dostosować tę funkcję do twojego mechanizmu autoryzacji
// const validateSession = async (req) => {
//     const sessionId = req.cookies.get("sessionId")
//     // Logika do sprawdzenia sesji na podstawie sessionId
//     // Zwróć true, jeśli sesja jest ważna, false w przeciwnym razie
//     return sessionId && isValidSession(sessionId)
// }

// export async function middleware(req) {
//     const isValid = await validateSession(req)

//     if (!isValid) {
//         // Jeśli sesja nie jest ważna, przekieruj użytkownika do strony logowania
//         return NextResponse.redirect("/login")
//     }

//     // Kontynuuj przetwarzanie żądania, jeśli sesja jest ważna
//     return NextResponse.next()
// }

// // Funkcja pomocnicza do sprawdzenia ważności sesji
// // Musisz zaimplementować logikę sprawdzania sesji tutaj
// async function isValidSession(sessionId) {
//     // Logika do sprawdzenia, czy sesja jest ważna
//     // Przykład: Sprawdź w bazie danych czy sesja o danym sessionId istnieje i jest ważna
//     return true // lub false, w zależności od wyniku sprawdzenia
// }

import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
    // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
    // Getting cookies from the request using the `RequestCookies` API
    // let cookie = request.cookies.get("nextjs")
    // console.log(cookie) // => { name: 'nextjs', value: 'fast', Path: '/' }
    // const allCookies = request.cookies.getAll()
    // console.log(allCookies) // => [{ name: 'nextjs', value: 'fast' }]

    // request.cookies.has("nextjs") // => true
    // request.cookies.delete("nextjs")
    // request.cookies.has("nextjs") // => false

    // Setting cookies on the response using the `ResponseCookies` API
    // const response = NextResponse.next()
    // response.cookies.set("vercel", "fast")
    // response.cookies.set({
    //     name: "vercel",
    //     value: "fast",
    //     path: "/",
    // })
    // cookie = response.cookies.get("vercel")
    // console.log(cookie) // => { name: 'vercel', value: 'fast', Path: '/' }
    // The outgoing response will have a `Set-Cookie:vercel=fast;path=/test` header.

    const response = NextResponse.next()
    // response.cookies.set("tripist_auth", "123", {
    //     httpOnly: true,
    // })

    const cookie = request.cookies.get("tripist_auth")

    // const session = NextResponse.next()
    // session.cookies.set("tripist_auth", keySession)

    // if (isValid) {
    //     console.log("cookie ok")
    // }

    // const aaa = isValidSession("123")

    try {
        const headers = {
            "Content-Type": "application/json",
            "Custom-Header": cookie ? cookie.value : "",
        }

        const data = await fetch(`${process.env.BASE_URL}/api/auth`, {
            method: "GET",
            headers: headers,
        })

        const { body: session } = await data.json()

        if (data.ok) {
            console.log(session)
        } else {
            console.log("brak sesji")
        }
    } catch (e) {}

    return response
}

export const config = {
    matcher: ["/dashboard/:path*"],
}
