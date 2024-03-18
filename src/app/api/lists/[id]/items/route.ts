/**
 *
 * Pobieranie elementow na liscie GET
 * //Tworzenie elementu w liście POST
 *
 */

import { NextResponse, NextRequest } from "next/server"
import { useAuth } from "@/hooks/useAuth"
import prisma from "@/lib/prismaClient"
import { IApiContext } from "@/types/types"

export async function POST(request: Request, context: IApiContext) {
    const { userId } = await useAuth()
    const { name, nameCategory } = await request.json()

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

        const item = await prisma.listItem.findFirst({
            where: {
                name: name,
                listId: listId,
            },
        })

        if (item)
            return NextResponse.json(
                { message: "Taki element już istnieje" },
                { status: 403 }
            )

        let newItem
        let category

        if (nameCategory) {
            // Sprawdzanie, czy istnieje kategoria o podanej nazwie
            category = await prisma.category.findFirst({
                where: {
                    name: nameCategory,
                },
            })

            if (!category) {
                category = await prisma.category.create({
                    data: {
                        name: nameCategory,
                        userId: userId,
                    },
                })
            }

            newItem = await prisma.listItem.create({
                data: {
                    name: name,
                    listId: listId,
                    categories: {
                        connect: [{ id: category.id }],
                    },
                },
            })
        } else {
            newItem = await prisma.listItem.create({
                data: {
                    name: name,
                    listId: listId,
                },
            })
        }

        return NextResponse.json({ body: newItem }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        )
    }
}
