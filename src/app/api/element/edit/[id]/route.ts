import { NextResponse, NextRequest } from "next/server"
import { auth } from "@clerk/nextjs"
import prisma from "@/lib/prismaClient"

interface IContext {
    params: IContextId
}

interface IContextId {
    id: string
}

export async function PUT(request: Request, context: IContext) {
    const { userId } = auth()

    console.log(context)

    try {
        if (!userId) {
            return NextResponse.json(
                { message: "Brak użytkownika" },
                { status: 401 }
            )
        }

        // const queryString = context.params.id
        // const elementId = parseInt(queryString, 10)

        // const listItem = await prisma.listItem.findUnique({
        //     where: { id: elementId },
        // })

        // if (!listItem) {
        //     console.error("Nie znaleziono elementu o podanym ID.")
        //     return
        // }

        // // Odwróć stan (status)
        // await prisma.listItem.update({
        //     where: { id: elementId },
        //     data: {
        //         status: !listItem.status,
        //     },
        // })

        // console.log(
        //     `Zaktualizowano stan elementu o ID ${elementId} na ${!listItem.status}`
        // )

        // return NextResponse.json(
        //     { message: "Zmiana statusu id: " + elementId, idChange: elementId },
        //     { status: 200 }
        // )
        return NextResponse.json({ message: "lol" }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        )
    }
}
