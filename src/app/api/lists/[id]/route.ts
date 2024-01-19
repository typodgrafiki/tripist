import { NextResponse, NextRequest } from "next/server"
import { useAuth } from "@/hooks/useAuth"
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

        const listId = context.params.id

        const list = await prisma.list.findUnique({
            where: {
                id: listId,
                userId: userId,
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

        return NextResponse.json({ body: list }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 200 }
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

        if (!context.params.id) {
            return NextResponse.json(
                { message: "Brak ID listy" },
                { status: 402 }
            )
        }

        const listId = context.params.id

        await prisma.listItem.deleteMany({
            where: {
                listId: listId,
            },
        })

        const delatedList = await prisma.list.delete({
            where: {
                id: listId,
                userId: userId,
            },
        })

        return NextResponse.json({ body: delatedList }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        )
    }
}

export async function PATCH(request: Request, context: IApiContext) {
    const { userId } = await useAuth()

    const data = await request.json()
    const { name: newName, color } = data

    try {
        if (!userId) {
            return NextResponse.json(
                { message: "Brak użytkownika" },
                { status: 401 }
            )
        }

        if (!context.params.id) {
            return NextResponse.json(
                { message: "Brak ID listy" },
                { status: 402 }
            )
        }

        const listId = context.params.id

        const updatedList = await prisma.list.update({
            where: {
                id: listId,
                userId: userId,
            },
            data: {
                name: newName.toString(),
                lastChangeAt: new Date(),
                settingColor: color,
            },
            select: {
                id: true,
                name: true,
                settingColor: true,
            },
        })

        const result = {
            list: updatedList,
        }

        return NextResponse.json({ body: result }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        )
    }
}
