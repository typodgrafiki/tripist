/**
 *
 * Edycja kategorii PUT
 * // Usuwanie kategorii DELETE
 *
 */

import { NextResponse } from "next/server"
import { useAuth } from "@/lib/auth"
import prisma from "@/lib/prismaClient"
import { IApiContext } from "@/types/types"

export async function PUT() {}

export async function DELETE(request: Request, context: IApiContext) {
    const { userId } = await useAuth()
    const categoryId = parseInt(context.params.id, 10)

    try {
        if (!userId) {
            return NextResponse.json(
                { message: "Brak użytkownika" },
                { status: 401 }
            )
        }

        if (!categoryId) {
            return NextResponse.json(
                { message: "Brak ID kategorii" },
                { status: 402 }
            )
        }

        const deletedCategory = await prisma.category.deleteMany({
            where: {
                id: categoryId,
                userId: userId,
            },
        })

        if (!deletedCategory) {
            return NextResponse.json(
                { message: "Nie udało się usunąć kategorii" },
                { status: 402 }
            )
        }

        return NextResponse.json({ body: deletedCategory }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        )
    }
}
