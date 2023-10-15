import { NextResponse, NextRequest } from "next/server"
import { auth } from "@clerk/nextjs"
import prisma from "@/lib/prismaClient"

interface IContext {
    params: IContextId
}

interface IContextId {
    id: string
}

export async function GET(request: Request, context: IContext) {
    const { userId } = auth()

    try {
        if (!userId)
            return NextResponse.json(
                { message: "Brak użytkownika" },
                { status: 401 }
            )

        const listId = context.params.id

        const list = await prisma.listItem.findMany({
            // where: {
            //     listId: listId,
            // },
        })

        const list2 = await prisma.list.findUnique({
            where: {
                id: listId,
            },
            include: {
                elements: {
                    include: {
                        categories: true, // Włączamy informacje o kategoriach
                    },
                },
            },
        })

        console.log(list2)

        return NextResponse.json({ body: list2 }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 200 }
        )
    }
}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}
