import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs"
import prisma from "@/lib/prismaClient"
import { generateUniqueURL } from "@/lib/normalizeUrl"

interface IContext {
    params: IContextId
}

interface IContextId {
    id: string
}

export async function GET(request: Request) {
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

export async function POST(request: Request, context: IContext) {
    const { userId } = auth()

    try {
        if (!userId)
            return NextResponse.json(
                { message: "Brak użytkownika" },
                { status: 401 }
            )

        const requestBody = await request.json()
        const name = requestBody.name
        const url = await generateUniqueURL(prisma, name)

        if (!url || !name)
            return NextResponse.json(
                { message: "Brakujące pola" },
                { status: 401 }
            )

        const newElement = await prisma.list.create({
            data: {
                name: requestBody.name,
                url: url,
                userId: userId,
            },
        })

        return NextResponse.json({ body: url }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        )
    }
}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}
