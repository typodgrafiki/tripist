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

        if (isSessionExpired(checkSession.expiresAt)) {
            await prisma.session.delete({
                where: {
                    id: sessionId,
                },
            })
            return NextResponse.json(false, { status: 401 })
        }

        await prisma.session.update({
            where: { id: sessionId },
            data: {
                updatedAt: new Date(),
                expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5), // 5 days
            },
        })

        return NextResponse.json(true, { status: 200 })
    } catch (error) {
        return NextResponse.json(false, { status: 500 })
    }
}

const isSessionExpired = (expiresAt: Date): boolean => {
    return new Date() > new Date(expiresAt)
}
