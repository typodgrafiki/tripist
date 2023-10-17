import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs"
import prisma from "@/lib/prismaClient"

export const removeElement = async (id: string) => {
    // const { userId } = auth()
    // try {
    //     if (!userId) {
    //         return NextResponse.json(
    //             { message: "Brak użytkownika" },
    //             { status: 401 }
    //         )
    //     }
    //     await prisma.listItem.deleteMany({
    //         where: {
    //             listId: listId,
    //         },
    //     })
    //     await prisma.list.delete({
    //         where: {
    //             id: listId,
    //         },
    //     })
    //     return NextResponse.json(
    //         { message: "Lista została usunięta" },
    //         { status: 200 }
    //     )
    // } catch (error) {
    //     return NextResponse.json(
    //         { error: "Internal Server Error" },
    //         { status: 500 }
    //     )
    // }
    try {
        return "response"
    } catch (e) {
        return "error"
    }
}
