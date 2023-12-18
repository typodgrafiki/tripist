/**
 *
 * Pobieranie sample lists GET
 *
 */

import { NextResponse } from "next/server"
import { useAuth } from "@/lib/auth"
import prisma from "@/lib/prismaClient"
import List from "@/app/(application)/(app)/dashboard/[id]/page"

export async function GET() {
    const { userId } = await useAuth()

    try {
        if (!userId)
            return NextResponse.json(
                { message: "Brak użytkownika" },
                { status: 401 }
            )

        const lists = await prisma.listType.findMany({
            where: {
                templates: {
                    some: {},
                },
            },
            include: {
                templates: {
                    where: {
                        start: false,
                    },
                },
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
