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

        const list = await prisma.list.findUnique({
            where: {
                id: listId,
            },
            include: {
                elements: {
                    include: {
                        categories: {
                            where: {
                                userId: userId,
                            },
                        },
                    },
                },
            },
        })

        const elements = list?.elements

        return NextResponse.json({ body: elements }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 200 }
        )
    }
}

export async function HEAD(request: Request) {}

export async function POST(request: Request, context: IContext) {
    const { userId } = auth()

    try {
        if (!userId)
            return NextResponse.json(
                { message: "Brak użytkownika" },
                { status: 401 }
            )

        const requestBody = await request.json()
        const { name, listId } = requestBody

        if (!name)
            return NextResponse.json(
                { message: "Brakujące pola" },
                { status: 401 }
            )

        const newElement = await prisma.listItem.create({
            data: {
                name: name,
                status: false,
                listId: listId,
            },
        })

        return NextResponse.json({ body: newElement }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        )
    }
}

export async function PUT(request: Request) {}

export async function DELETE(request: Request, context: IContext) {
    const { userId } = auth()

    try {
        if (!userId) {
            return NextResponse.json(
                { message: "Brak użytkownika" },
                { status: 401 }
            )
        }

        const listId = context.params.id

        await prisma.listItem.deleteMany({
            where: {
                listId: listId,
            },
        })

        await prisma.list.delete({
            where: {
                id: listId,
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

export async function PATCH(request: Request) {}
