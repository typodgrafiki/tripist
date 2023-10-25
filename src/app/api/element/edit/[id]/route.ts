import { NextResponse, NextRequest } from "next/server"
import { auth } from "@clerk/nextjs"
import prisma from "@/lib/prismaClient"

interface IContext {
    params: IContextId
}

interface IContextId {
    id: string
}

interface IEditElement {
    name?: string
    changeStatus?: boolean
    categories?: ICat[]
}

interface ICat {
    id: number
    name: string
    userId: string
}

export async function PUT(request: NextRequest, context: IContext) {
    const { userId } = auth()

    // context powinien przyjmowac:
    // id
    // name?
    // status?
    // categories?

    const data = await request.json()

    const id = parseInt(context.params.id, 10)
    const { name, changeStatus, categories } = data

    try {
        if (!userId) {
            return NextResponse.json(
                { message: "Brak użytkownika" },
                { status: 401 }
            )
        }

        if (!id) {
            return NextResponse.json(
                { message: "Błąd w przesłanym zapytaniu." },
                { status: 401 }
            )
        }

        const listItem = await prisma.listItem.findUnique({
            where: { id: id },
        })

        if (!listItem) {
            console.error(
                "Nie znaleziono elementu o podanym ID w bazie danych."
            )
            return
        }

        if (changeStatus) {
            await prisma.listItem.update({
                where: { id: id },
                data: {
                    status: !listItem.status,
                },
            })
            console.log(
                `Zaktualizowano stan elementu o ID ${id} na ${!listItem.status}`
            )
        } else if (name && categories) {
            const categoriesArrayIds = categories?.map((item: ICat) => ({
                id: item.id,
            }))

            await prisma.listItem.update({
                where: { id: id },
                data: {
                    name: name,
                    categories: {
                        connect: categoriesArrayIds,
                    },
                },
            })
            console.log(
                `Zaktualizowano nazwe elementu o ID ${id} na ${name} i cat`
            )
        } else if (name) {
            await prisma.listItem.update({
                where: { id: id },
                data: {
                    name: name,
                },
            })
            console.log(`Zaktualizowano nazwe elementu o ID ${id} na ${name}`)
        }

        return NextResponse.json(
            {
                message: "Edycja pozycji powiodła się",
                idChange: id,
                nameChange: name,
                categoriesChange: categories,
            },
            { status: 200 }
        )
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        )
    }
}
