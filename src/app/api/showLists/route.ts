import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs"

export async function GET(request: Request) {
    const { userId } = auth()

    try {
        if (!userId)
            return NextResponse.json(
                { message: "Brak użytkownika" },
                { status: 401 }
            )

        // const user = await prisma.user.create({
        //     data: {
        //         email: "elsa@prisma.io",
        //         name: "Elsa Prisma",
        //         preferences: [],
        //     },
        // })

        const user = {}

        return NextResponse.json({ body: user }, { status: 200 })
    } catch (error) {
        console.log("no")
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        )
    }
}
