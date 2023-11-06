/**
 *
 * Dodawanie listy POST
 * Pobieranie list GET
 *
 */

import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs"
import prisma from "@/lib/prismaClient"
import { ICategories } from "@/types/types"

export async function GET() {
    const { userId } = auth()

    try {
        if (!userId)
            return NextResponse.json(
                { message: "Brak użytkownika" },
                { status: 401 }
            )

        const lists = await prisma.list.findMany({
            where: {
                userId: userId,
            },
        })

        return NextResponse.json({ body: lists }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 200 }
        )
    }
}

export async function HEAD(request: Request) {}

// export async function POST(request: Request) {
//     const { userId } = auth()
//     const data = await request.json()
//     const { name, duplicate } = data
//     const newItems = []

//     try {
//         if (!userId)
//             return NextResponse.json(
//                 { message: "Brak użytkownika" },
//                 { status: 401 }
//             )

//         const newList = await prisma.list.create({
//             data: {
//                 name: name,
//                 userId: userId,
//             },
//         })

//         if (duplicate && Array.isArray(duplicate)) {
//             for (const item of duplicate) {
//                 const newItem = await prisma.listItem.create({
//                     data: {
//                         name: item.name,
//                         status: false,
//                         listId: newList.id,
//                         categories: {
//                             connect: item.categories.map(
//                                 (category: ICategories) => ({
//                                     id: category.id,
//                                 })
//                             ),
//                         },
//                     },
//                     include: {
//                         categories: true,
//                     },
//                 })

//                 newItems.push(newItem)
//             }
//         }

//         const result = await {
//             list: newList,
//             items: newItems,
//         }

//         return NextResponse.json({ body: result }, { status: 200 })
//     } catch (error) {
//         return NextResponse.json(
//             { error: "Internal Server Error" },
//             { status: 500 }
//         )
//     }
// }

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}
