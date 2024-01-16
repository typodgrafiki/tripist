/**
 *
 * //Dodawanie listy POST
 * //Pobieranie list GET
 *
 */

import { NextResponse } from "next/server"
import { useAuth } from "@/lib/auth"
import prisma from "@/lib/prismaClient"

export async function GET() {
    const { userId } = await useAuth()

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

export async function POST(request: Request) {
    const { userId } = await useAuth()
    const data = await request.json()
    const { name, duplicateId, color, customData, listNameFrom } = data
    const newItems = []

    try {
        if (!userId)
            return NextResponse.json(
                { message: "Brak użytkownika" },
                { status: 401 }
            )

        //Tworzy nową pustą listę
        const newList = await prisma.list.create({
            data: {
                name: name,
                userId: userId,
                settingColor: color,
                fromTemplate: listNameFrom ? listNameFrom : "",
            },
        })

        // Jeśli duplikat lub nowy szablon z template (po id) / lub customList (zmieniony template)
        if (duplicateId || customData) {
            let originalItems

            // Sprawdzanie, czy duplicateId jest liczbą (jest Template) lub czy jest customList
            if (customData) {
                originalItems = customData
            } else if (typeof duplicateId === "number") {
                originalItems = await prisma.templateItem.findMany({
                    where: {
                        templateId: duplicateId,
                    },
                    include: {
                        categories: true,
                    },
                })
            } else {
                originalItems = await prisma.listItem.findMany({
                    where: {
                        listId: duplicateId,
                    },
                    include: {
                        categories: true,
                    },
                })
            }

            // Tworzymy duplikaty tych elementów dla nowej listy
            for (const item of originalItems) {
                // Sprawdzenie, czy użytkownik posiada już kategorię o tej samej nazwie
                let categoryConnections = []
                for (const category of item.categories) {
                    let userCategory = await prisma.category.findFirst({
                        where: {
                            userId: userId, // załóżmy, że userId jest dostępny w tym kontekście
                            name: category.name,
                        },
                    })

                    // Jeśli kategoria nie istnieje, stwórz ją
                    if (!userCategory) {
                        userCategory = await prisma.category.create({
                            data: {
                                name: category.name,
                                userId: userId,
                            },
                        })
                    }

                    categoryConnections.push({ id: userCategory.id })
                }

                // Tworzenie nowego elementu listy z odpowiednimi kategoriami
                const newItem = await prisma.listItem.create({
                    data: {
                        name: item.name,
                        status: false,
                        listId: newList.id,
                        categories: {
                            connect: categoryConnections,
                        },
                    },
                    include: {
                        categories: true,
                    },
                })

                newItems.push(newItem)
            }
        }

        const result = await {
            list: newList,
            items: newItems,
        }

        return NextResponse.json({ body: result }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        )
    }
}
