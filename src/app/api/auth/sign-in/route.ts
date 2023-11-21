import { createSession } from "@/utils/session"
import { NextResponse } from "next/server"
import prisma from "@/lib/prismaClient"
import { compare } from "bcrypt"
import { cookies } from "next/headers"

export async function POST(request: Request) {
    // TODO dodac zabezpiecenie autoryzacje

    const data = await request.json()
    const { email, password } = data

    email.trim()
    password.trim()

    try {
        if (!email || !password) {
            return NextResponse.json(
                { message: "Nie uzupełniono danych" },
                { status: 400 }
            )
        }

        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        })

        if (!user) {
            return NextResponse.json(
                { message: "Użytkownik o podanym emailu nie istnieje" },
                { status: 401 }
            )
        }

        const isPasswordMatch = await compare(password, user.password)
        if (!isPasswordMatch) {
            return NextResponse.json(
                { message: "Nieprawidłowe hasło" },
                { status: 402 }
            )
        }

        const { password: passwordHash, ...userBody } = user

        const newSession = await createSession(user.id)

        if ("id" in newSession) {
            cookies().set({
                name: "tripist_auth",
                value: newSession.id,
                httpOnly: true,
                path: "/",
            })
        }

        return NextResponse.json(userBody, { status: 200 })
    } catch (e) {
        console.log(e)
        return NextResponse.json(
            { message: "Nie udało się zalogować" },
            { status: 500 }
        )
    }
}