// usuwanie ciasteczka w przegl
// usuwanie ciasteczka w db
// przekierowanie na strone glowna

import { NextResponse } from "next/server"
import prisma from "@/lib/prismaClient"
import { cookies } from "next/headers"

export async function POST(request: Request) {
    const cookiesString = request.headers.get("cookie")

    if (!cookiesString)
        return NextResponse.json(
            { message: "Brak ciasteczka" },
            { status: 400 }
        )

    cookies().delete({
        name: "tripist_auth",
    })

    try {
        const cookieId = sessionTokenFromHeader(cookiesString)

        if (!cookieId) {
            return NextResponse.json(
                { message: "Brak ciasteczka" },
                { status: 400 }
            )
        }

        const session = await prisma.session.delete({
            where: {
                id: cookieId,
            },
        })

        return NextResponse.json({ message: "Wylogowano" }, { status: 200 })
    } catch (e) {
        console.log(e)
        return NextResponse.json(
            { message: "Nie udało się zalogować" },
            { status: 500 }
        )
    }
}

const sessionTokenFromHeader = (cookiesString: string) => {
    const cookieName = "tripist_auth"

    const cookies = cookiesString.split("; ")
    const cookie = cookies.find((cookie) => cookie.startsWith(`${cookieName}=`))

    if (!cookie) {
        return null
    }

    return cookie.split("=")[1]
}
