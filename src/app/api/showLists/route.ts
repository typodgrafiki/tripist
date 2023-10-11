import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs"
import prisma from "@/lib/db"

export async function GET(request: Request) {
    const { userId } = auth()

    // await prisma.$connect()

    try {
        if (!userId)
            return NextResponse.json(
                { message: "Brak użytkownika" },
                { status: 401 }
            )

        const user = await prisma.user.create({
            data: {
                email: "elsa@prisma.io",
                name: "Elsa Prisma",
                preferences: [],
            },
        })

        return NextResponse.json({ body: user }, { status: 200 })
    } catch (error) {
        console.log("no")
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        )
    }
}
