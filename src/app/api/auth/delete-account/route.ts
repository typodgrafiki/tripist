import { NextResponse } from "next/server"
import prisma from "@/lib/prismaClient"
import { useAuth } from "@/hooks/useAuth"
import { cookies } from "next/headers"

export async function DELETE(request: Request) {
    const { userId } = await useAuth()

    if (!userId) {
        return NextResponse.json(
            { message: "Użytkownik niezalogowany" },
            { status: 400 }
        )
    }

    try {
        // category
        await prisma.category.deleteMany({
            where: {
                userId: userId,
            },
        })

        // delete changelog
        await prisma.changeLog.deleteMany({
            where: {
                userId: userId,
            },
        })

        // pobierz listy uzytkownika
        const userLists = await prisma.list.findMany({
            where: {
                userId: userId,
            },
        })

        // delete items
        for (const list of userLists) {
            await prisma.listItem.deleteMany({
                where: {
                    listId: list.id,
                },
            })
        }

        // delete lists
        await prisma.list.deleteMany({
            where: {
                userId: userId,
            },
        })

        // delete userSign
        await prisma.userRemindPassword.deleteMany({
            where: {
                userId: userId,
            },
        })

        // delete sessions
        await prisma.session.deleteMany({
            where: {
                userId: userId,
            },
        })

        // usuniecie ciasteczka z przegladarki
        cookies().delete({
            name: "auth",
        })

        // delete signUpCodes
        await prisma.signUpCodes.deleteMany({
            where: {
                userId: userId,
            },
        })

        // delete users
        await prisma.user.deleteMany({
            where: {
                id: userId,
            },
        })

        return NextResponse.json(
            { message: "Usunięto użytkownika" },
            { status: 200 }
        )
    } catch (e) {
        return NextResponse.json(
            { message: "Nie udało się usunąć użytkownika" },
            { status: 500 }
        )
    }
}
