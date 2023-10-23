import { NextResponse, NextRequest } from "next/server"
import { auth } from "@clerk/nextjs"
import prisma from "@/lib/prismaClient"

interface IContext {
    params: IContextId
}

interface IContextId {
    id: string
}

export async function DELETE(request: Request, context: IContext) {
    const { userId } = auth()

    try {
        if (!userId) {
            return NextResponse.json(
                { message: "Brak użytkownika" },
                { status: 401 }
            )
        }

        const elementId = parseInt(context.params.id, 10)

        await prisma.listItem.delete({
            where: {
                id: elementId,
            },
        })

        return NextResponse.json(
            { message: "Lista została usunięta" },
            { status: 200 }
        )
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        )
    }
}

export async function PUT(request: Request, context: IContext) {
    const { userId } = auth()

    try {
        if (!userId) {
            return NextResponse.json(
                { message: "Brak użytkownika" },
                { status: 401 }
            )
        }

        const query = context.params.id

        const elementsId = query.split(",").map(Number)

        for (const elementId of elementsId) {
            const listItem = await prisma.listItem.findUnique({
                where: { id: elementId },
            })

            if (!listItem) {
                console.error(
                    `Nie znaleziono elementu o podanym ID: ${elementId}`
                )
                continue // Kontynuuj pętlę, pomijając ten element
            }

            await prisma.listItem.update({
                where: { id: elementId },
                data: {
                    status: false,
                },
            })

            console.log(
                `Zaktualizowano stan elementu o ID ${elementId} na false`
            )
        }

        return NextResponse.json(
            { message: "Lista została usunięta" },
            { status: 200 }
        )
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        )
    }
}
