import { NextResponse } from "next/server"
import prisma from "@/lib/prismaClient"

export async function GET(request: Request) {
    const sessionId = request.headers.get("Authorization")

    if (!sessionId) {
        return NextResponse.json(false, { status: 400 })
    }

    try {
        const checkSession = await prisma.session.findUnique({
            where: {
                id: sessionId,
            },
        })

        if (!checkSession) {
            return NextResponse.json(false, { status: 401 })
        }

        return NextResponse.json(true, { status: 200 })
    } catch (error) {
        return NextResponse.json(false, { status: 500 })
    }
}
