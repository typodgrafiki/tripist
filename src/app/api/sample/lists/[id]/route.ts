/**
 *
 * Pobieranie one sample list GET
 *
 */

import { NextResponse } from "next/server"
import { useAuth } from "@/lib/auth"
import prisma from "@/lib/prismaClient"
import { IApiContext } from "@/types/types"

export async function GET(request: Request, context: IApiContext) {
    const { userId } = await useAuth()

    try {
        if (!userId)
            return NextResponse.json(
                { message: "Brak użytkownika" },
                { status: 401 }
            )

        const listId = parseInt(context.params.id, 10)

        const list = await prisma.template.findFirst({
            where: {
                id: listId,
            },
            select: {
                elements: {
                    select: {
                        name: true,
                        categories: {
                            select: {
                                name: true,
                            },
                        },
                    },
                },
            },
        })

        if (!list)
            return NextResponse.json({ message: "Brak listy" }, { status: 401 })

        return NextResponse.json({ body: list.elements }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 200 }
        )
    }
}
