/**
 *
 * Usuwanie elementu DELETE
 * // Zmiana statusu elementu PATCH
 * Edycja elementu na liście PUT
 *
 */

import { NextResponse, NextRequest } from "next/server"
import { auth } from "@clerk/nextjs"
import prisma from "@/lib/prismaClient"
import { IApiContext } from "@/types/types"

export async function PATCH(request: Request, context: IApiContext) {
    const { userId } = auth()
    const { status } = await request.json()

    try {
        if (!userId)
            return NextResponse.json(
                { message: "Brak użytkownika" },
                { status: 401 }
            )

        const elementId = parseInt(context.params.id, 10)

        const updatedElement = await prisma.listItem.update({
            where: {
                id: elementId,
            },
            data: {
                status: status,
            },
        })

        return NextResponse.json({ body: updatedElement }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        )
    }
}
