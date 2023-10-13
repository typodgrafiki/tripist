import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs"

export async function GET(request: Request) {
    const { userId } = auth()
    const id = request.headers.get("ListId")

    try {
        if (!userId)
            return NextResponse.json(
                { message: "Brak użytkownika" },
                { status: 401 }
            )

        if (id == null)
            return NextResponse.json(
                { message: "Brak odniesienia do listy" },
                { status: 401 }
            )

        // const list = await prisma.listItem.findMany({
        //     where: {
        //         listId: id,
        //     },
        // })

        // const result = {
        //     id: id,
        //     name: "N",
        //     url: "url",
        //     elements: list,
        // }

        // return NextResponse.json({ body: list }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 200 }
        )
    }
}
