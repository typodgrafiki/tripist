import { NextResponse } from "next/server"
import prisma from "@/lib/prismaClient"
import { hash } from "bcrypt"
import { createSession } from "@/utils/session"
import { cookies } from "next/headers"
import { v4 as uuidv4 } from "uuid"

export async function POST(request: Request) {
    // TODO dodac zabezpiecenie autoryzacje

    const data = await request.json()
    const { name, surname, email, password } = data
    const userId = `user_${uuidv4()}`

    await email.trim()
    await password.trim()

    try {
        if (!name || !email || !password) {
            return NextResponse.json(
                { message: "Nie uzupełniono danych" },
                { status: 400 }
            )
        }

        // check if email already exist
        const checkEmailExist = await prisma.user.findUnique({
            where: { email: email },
        })

        if (checkEmailExist) {
            return NextResponse.json(
                { message: "Użytkownik o takim email już istnieje" },
                { status: 400 }
            )
        }

        const hashPassword = await hash(password, 10)
        const newUser = await prisma.user.create({
            data: {
                id: userId,
                name: name,
                surname: surname,
                email: email,
                password: hashPassword,
            },
        })

        const { password: newPasswordHash, ...newUserBody } = newUser

        const newSession = await createSession(newUser.id)

        if ("id" in newSession) {
            cookies().set({
                name: "tripist_auth",
                value: newSession.id,
                httpOnly: true,
                path: "/",
            })
        }

        return NextResponse.json(newUserBody, { status: 200 })
    } catch (e) {
        return NextResponse.json(
            { message: "Nie udało się dodać użytkownika" },
            { status: 500 }
        )
    }
}
