/**
 *
 * Ustawienie wszystkich elementów na liście jako niezaznaczone PATCH
 *
 */

import { NextResponse, NextRequest } from "next/server"
// import { auth } from "@clerk/nextjs"
import prisma from "@/lib/prismaClient"
import { IApiContext } from "@/types/types"

export async function PATCH(request: Request, context: IApiContext) {
    // const { userId } = auth()
    const userId = "123"

    try {
        if (!userId)
            return NextResponse.json(
                { message: "Brak użytkownika" },
                { status: 401 }
            )

        const listId = context.params.id

        const disableAll = await prisma.listItem.updateMany({
            where: {
                listId: listId,
                status: true,
            },
            data: {
                status: false,
            },
        })

        return NextResponse.json({ body: disableAll }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 200 }
        )
    }
}
