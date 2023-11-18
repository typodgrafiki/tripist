import { NextResponse } from "next/server"
import prisma from "@/lib/prismaClient"
import { hash } from "bcrypt"
import { createSession } from "@/utils/session"
import { cookies } from "next/headers"
import { useAuth } from "@/lib/auth"

export async function POST(request: Request) {
    // TODO dodac zabezpiecenie autoryzacje
    // To jest to samo co register - połączyc to

    const { userId } = await useAuth()

    const data = await request.json()
    const { name, surname, email, password } = data

    email.trim()
    password.trim()

    try {
        if (!email || !userId) {
            return NextResponse.json(
                { message: "Nie uzupełniono danych" },
                { status: 400 }
            )
        }

        const dataToUpdate: Record<string, any> = {
            name: name,
            surname: surname,
            email: email,
        }

        if (password && password.trim() !== "") {
            const hashPassword = await hash(password, 10)
            dataToUpdate.password = hashPassword
        }

        const updatedUser = await prisma.user.update({
            where: {
                id: userId,
            },
            data: dataToUpdate,
        })

        const { password: newPasswordHash, ...newUserBody } = updatedUser

        return NextResponse.json(newUserBody, { status: 200 })
    } catch (e) {
        return NextResponse.json(
            { message: "Nie udało się dodać użytkownika" },
            { status: 500 }
        )
    }
}
