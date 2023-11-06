import { NextResponse, NextRequest } from "next/server"
import { auth } from "@clerk/nextjs"
import prisma from "@/lib/prismaClient"

interface IContext {
    params: IContextId
}

interface IContextId {
    id: string
}

interface ListItemUncheckedCreateInput {
    id: number
    name: string
    listId: string
    status: boolean
    createAt: Date
}

export async function DELETE(request: Request, context: IContext) {
    const { userId } = auth()

    try {
        if (!userId) {
            return NextResponse.json(
                { message: "Brak użytkownika" },
                { status: 401 }
            )
        }

        const elementId = await parseInt(context.params.id, 10)

        const listItem = await prisma.listItem.findUnique({
            where: { id: elementId },
        })

        // Zapisuję zmianę w ChangeLog
        const changeLog = await prisma.changeLog.create({
            data: {
                userId: userId,
                action: "DELETE",
                entityType: "LISTITEM",
                entityId: elementId,
                previousData: JSON.stringify(listItem),
            },
        })

        // Usuwanie elementu
        await prisma.listItem.delete({
            where: {
                id: elementId,
            },
        })

        // setTimeout(() => {
        //     undoLastChange(userId, elementId)
        // }, 4000)

        return NextResponse.json(
            { message: "Lista została usunięta" },
            { status: 200 }
        )
    } catch (error) {
        console.error(error)
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        )
    }
}

// async function undoLastChange(userId: string, elementId: number) {
//     const lastChange = await prisma.changeLog.findFirst({
//         where: { userId: userId },
//         orderBy: { createdAt: "desc" },
//     })

//     if (!lastChange) {
//         throw new Error("No changes to undo.")
//     }

//     const delatedItem: ListItemUncheckedCreateInput =
//         lastChange && lastChange.previousData
//             ? JSON.parse(lastChange.previousData.toString())
//             : {}

//     switch (lastChange.entityType) {
//         case "LISTITEM":
//             if (lastChange.action === "DELETE") {
//                 // Przywróć usunięty ListItem
//                 await prisma.listItem.create({
//                     data: delatedItem,
//                 })
//             }
//             // Możesz dodać obsługę dla innych akcji, np. "UPDATE"
//             break

//         // Podobne przypadki dla "LIST" i "CATEGORY"

//         default:
//             throw new Error("Unknown entity type.")
//     }

//     // Usuń wpis z ChangeLog po przywróceniu zmiany
//     await prisma.changeLog.delete({ where: { id: lastChange.id } })
// }

export async function PUT(request: Request, context: IContext) {
    const { userId } = auth()

    try {
        if (!userId) {
            return NextResponse.json(
                { message: "Brak użytkownika" },
                { status: 401 }
            )
        }

        const query = context.params.id

        const elementsId = query.split(",").map(Number)

        for (const elementId of elementsId) {
            const listItem = await prisma.listItem.findUnique({
                where: { id: elementId },
            })

            if (!listItem) {
                console.error(
                    `Nie znaleziono elementu o podanym ID: ${elementId}`
                )
                continue // Kontynuuj pętlę, pomijając ten element
            }

            await prisma.listItem.update({
                where: { id: elementId },
                data: {
                    status: false,
                },
            })

            console.log(
                `Zaktualizowano stan elementu o ID ${elementId} na false`
            )
        }

        return NextResponse.json(
            { message: "Lista wyczyszczona: " + query, elementsId: elementsId },
            { status: 200 }
        )
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        )
    }
}
