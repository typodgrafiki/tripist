/**
 *
 * //Usuwanie listy DELETE
 * Edycja listy PATCH
 *
 */

import { NextResponse, NextRequest } from "next/server"
import { auth } from "@clerk/nextjs"
import prisma from "@/lib/prismaClient"
import { IApiContext } from "@/types/types"

export async function GET(request: Request, context: IApiContext) {
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

        return NextResponse.json({ body: list }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 200 }
        )
    }
}

// export async function HEAD(request: Request) {}

// export async function POST(request: Request, context: IContext) {
//     const { userId } = auth()

//     try {
//         if (!userId)
//             return NextResponse.json(
//                 { message: "Brak użytkownika" },
//                 { status: 401 }
//             )

//         const requestBody = await request.json()
//         const { name, listId } = requestBody

//         if (!name)
//             return NextResponse.json(
//                 { message: "Brakujące pola" },
//                 { status: 401 }
//             )

//         const newElement = await prisma.listItem.create({
//             data: {
//                 name: name,
//                 status: false,
//                 listId: listId,
//             },
//         })

//         return NextResponse.json({ body: newElement }, { status: 200 })
//     } catch (error) {
//         return NextResponse.json(
//             { error: "Internal Server Error" },
//             { status: 500 }
//         )
//     }
// }

// export async function PUT(request: Request) {}

export async function DELETE(request: Request, context: IApiContext) {
    const { userId } = auth()

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
    const { userId } = auth()

    const data = await request.json()
    const { name: newName } = data

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
            },
            data: {
                name: newName.toString(),
                lastChangeAt: new Date(),
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
