/**
 *
 * //Usuwanie elementu DELETE
 * // Zmiana statusu elementu PATCH
 * Edycja elementu na liście PUT
 *
 */

import { NextResponse, NextRequest } from "next/server"
import { useAuth } from "@/hooks/useAuth"
import prisma from "@/lib/prismaClient"
import { IApiContext, ICategories, TListItemUpdate } from "@/types/types"

export async function PATCH(request: Request, context: IApiContext) {
    const { userId } = await useAuth()
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

export async function PUT(request: Request, context: IApiContext) {
    const { userId } = await useAuth()
    const {
        name,
        categories: { categoriesIdsToConnect, categoriesIdsToDisconnect },
    } = (await request.json()) as TListItemUpdate

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
                name: name,
                categories: {
                    disconnect: categoriesIdsToDisconnect.map((id) => ({ id })),
                    connect: categoriesIdsToConnect.map((id) => ({ id })),
                },
            },
            include: {
                categories: true,
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

export async function DELETE(request: Request, context: IApiContext) {
    const { userId } = await useAuth()

    try {
        if (!userId) {
            return NextResponse.json(
                { message: "Brak użytkownika" },
                { status: 401 }
            )
        }

        const elementId = await parseInt(context.params.id, 10)

        const listItem = await prisma.listItem.findUnique({
            where: { id: elementId },
        })

        // Zapisuję zmianę w ChangeLog
        const changeLog = await prisma.changeLog.create({
            data: {
                userId: userId,
                action: "DELETE",
                entityType: "LISTITEM",
                entityId: elementId,
                previousData: JSON.stringify(listItem),
            },
        })

        // Usuwanie elementu
        const deletedItem = await prisma.listItem.delete({
            where: {
                id: elementId,
            },
        })

        return NextResponse.json({ body: deletedItem }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        )
    }
}
