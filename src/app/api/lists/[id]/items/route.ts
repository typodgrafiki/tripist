/**
 *
 * Pobieranie elementow na liscie GET
 * //Tworzenie elementu w liście POST
 *
 */

import { NextResponse, NextRequest } from "next/server"
import { useAuth } from "@/lib/auth"
import prisma from "@/lib/prismaClient"
import { IApiContext } from "@/types/types"

export async function POST(request: Request, context: IApiContext) {
    const { userId } = await useAuth()
    const { name } = await request.json()

    try {
        if (!userId)
            return NextResponse.json(
                { message: "Brak użytkownika" },
                { status: 401 }
            )

        const listId = context.params.id

        if (!listId)
            return NextResponse.json(
                { message: "Brak ID listy" },
                { status: 402 }
            )

        const newItem = await prisma.listItem.create({
            data: {
                name: name,
                listId: listId,
            },
        })

        return NextResponse.json({ body: newItem }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        )
    }
}
