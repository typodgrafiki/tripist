import { NextResponse } from "next/server"
import prisma from "@/lib/prismaClient"
import { hash } from "bcrypt"
import { useAuth } from "@/hooks/useAuth"

export async function POST(request: Request) {
    // TODO dodac zabezpiecenie autoryzacje
    // TODO To jest to samo co register - połączyc to

    const { userId } = await useAuth()

    const data = await request.json()
    const { name, surname, email, password, gender } = data

    await email.trim()
    await password.trim()

    try {
        if (!email || !userId) {
            return NextResponse.json(
                { message: "Nie uzupełniono danych" },
                { status: 400 }
            )
        }

        const dataToUpdate: Record<string, any> = {
            name: name,
            email: email,
            gender: gender,
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

export async function GET(request: Request) {
    const { userId } = await useAuth()

    try {
        if (!userId) {
            return NextResponse.json(
                { message: "Nie znaleziono użytkownika" },
                { status: 400 }
            )
        }

        const newUser = await prisma.user.findFirst({
            where: {
                id: userId,
            },
            select: {
                isNewUser: true,
            },
        })

        return NextResponse.json(newUser, { status: 200 })
    } catch (e) {
        return NextResponse.json(
            { message: "Nie udało się znaleźć użytkownika" },
            { status: 500 }
        )
    }
}
