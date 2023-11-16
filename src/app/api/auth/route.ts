import { NextResponse } from "next/server"
import prisma from "@/lib/prismaClient"

export async function GET(request: Request) {
    const sessionId = request.headers.get("custom-header")

    if (!sessionId) {
        return NextResponse.json(
            { error: "Brak identyfikatora sesji" },
            { status: 400 }
        )
    }

    try {
        const checkSession = await prisma.session.findUnique({
            where: {
                id: sessionId,
            },
        })

        if (!checkSession) {
            return NextResponse.json({ error: "Brak sesji" }, { status: 401 })
        }

        return NextResponse.json({ body: checkSession }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        )
    }
}
