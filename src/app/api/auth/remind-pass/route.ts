import { NextResponse } from "next/server"
import prisma from "@/lib/prismaClient"
import { createSession } from "@/utils/session"
import { cookies } from "next/headers"
import { sendEmailSignPass } from "@/email/sendEmailPass"
import { ICreateRemindPassUser } from "@/types/types"
import { hash } from "bcrypt"

export async function POST(request: Request) {
    const data = await request.json()
    const { email } = data

    await email.trim()

    try {
        if (!email) {
            return NextResponse.json(
                { message: "Nie uzupełniono email" },
                { status: 400 }
            )
        }

        // check if email already exist
        const user = await prisma.user.findUnique({
            where: { email: email },
        })

        if (!user) {
            return NextResponse.json(
                { message: "Taki email nie istnieje" },
                { status: 401 }
            )
        }

        // Usuwanie istniejących tokenów
        const codeForUser = await prisma.userRemindPassword.findMany({
            where: { userId: user.id },
        })
        const deleteResult = await prisma.userRemindPassword.deleteMany({
            where: {
                id: {
                    in: codeForUser.map((code) => code.id),
                },
            },
        })

        // Generowanie tokena
        const expiryDate = new Date()
        expiryDate.setHours(expiryDate.getHours() + 24)

        const token = await prisma.userRemindPassword.create({
            data: {
                expiresAt: expiryDate,
                userId: user.id,
            },
        })

        if (!token) {
            return NextResponse.json(
                { message: "Nie utworzono tokena" },
                { status: 402 }
            )
        }

        const sendEmail = await sendEmailSignPass(
            token.id.toString(),
            email.toString()
        )

        if (!sendEmail) {
            return NextResponse.json(
                { message: "Email nie wysłany" },
                { status: 403 }
            )
        }

        return NextResponse.json(
            { message: "Wysłano maila z przypomnieniem hasła" },
            { status: 200 }
        )
    } catch (e) {
        return NextResponse.json(
            { message: "Nie udało się dodać użytkownika" },
            { status: 500 }
        )
    }
}

export async function PUT(request: Request) {
    const data = await request.json()
    const { email, token, password } = data as ICreateRemindPassUser
    email.trim().toString()
    password.trim().toString()

    try {
        if (!email || !token || !password) {
            return NextResponse.json(
                { message: "Nie uzupełniono danych" },
                { status: 400 }
            )
        }

        const user = await prisma.user.findUnique({
            where: { email: email },
        })

        if (!user) {
            return NextResponse.json(
                { message: "Nie ma takiego użytkownika" },
                { status: 401 }
            )
        }

        const currentDate = new Date()
        const dbToken = await prisma.userRemindPassword.findFirst({
            where: { userId: user.id },
        })

        if (!dbToken) {
            return NextResponse.json(
                { message: "Nie znaleziono tokena" },
                { status: 402 }
            )
        }

        if (dbToken.id !== token) {
            await prisma.userRemindPassword.delete({
                where: { id: dbToken.id },
            })

            return NextResponse.json(
                { message: "Nie znaleziono tokena" },
                { status: 402 }
            )
        }

        if (dbToken.expiresAt < currentDate) {
            return NextResponse.json(
                { message: "Token wygasł" },
                { status: 403 }
            )
        }

        // if match
        if (dbToken.id !== token) {
            return NextResponse.json(
                { message: "Token nie jest prawidłowy" },
                { status: 405 }
            )
        }

        const deleteToken = await prisma.userRemindPassword.delete({
            where: { id: dbToken.id },
        })

        const hashPassword = await hash(password, 10)
        const userUpdated = await prisma.user.update({
            where: { id: user.id },
            data: { password: hashPassword },
        })

        if (!userUpdated) {
            return NextResponse.json(
                { message: "Nie udało się zapisać hasła" },
                { status: 406 }
            )
        }

        const newSession = await createSession(user.id)

        if ("id" in newSession) {
            cookies().set({
                name: "tripist_auth",
                value: newSession.id,
                httpOnly: true,
                path: "/",
                maxAge: 365 * 24 * 60 * 60, // 1 rok w sekundach
                secure: true,
            })
        }

        return NextResponse.json(
            { message: "Zaktualizowano hasło" },
            { status: 200 }
        )
    } catch (e) {
        return NextResponse.json(
            { message: "Nie udało się dodać użytkownika" },
            { status: 500 }
        )
    }
}
