/**
 *
 * Tworzenie nowej kategorii POST
 * // Pobieranie listy kategorii GET
 *
 */

import { NextResponse } from "next/server"
// import { auth } from "@clerk/nextjs"
import prisma from "@/lib/prismaClient"

export async function GET() {
    // const { userId } = auth()
    const userId = "123"

    try {
        if (!userId)
            return NextResponse.json(
                { message: "Brak użytkownika" },
                { status: 401 }
            )

        const categories = await prisma.category.findMany({
            where: {
                userId: userId,
            },
        })

        return NextResponse.json({ body: categories }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 200 }
        )
    }
}