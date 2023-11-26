/**
 *
 * // Tworzenie nowej kategorii POST
 * // Pobieranie listy kategorii GET
 *
 */

import { NextResponse } from "next/server"
import { useAuth } from "@/lib/auth"
import prisma from "@/lib/prismaClient"

export async function GET() {
    const { userId } = await useAuth()

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


export async function POST(request: Request) {
    const { userId } = await useAuth()
    const data = await request.json()
    const { name } = data

    try {
        if (!userId)
            return NextResponse.json(
                { message: "Brak użytkownika" },
                { status: 401 }
            )

        //Tworzy nową kategorie
        const newCategory = await prisma.category.create({
            data: {
                name: name,
                userId: userId,
            },
        })

        return NextResponse.json({ body: newCategory }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        )
    }
}
