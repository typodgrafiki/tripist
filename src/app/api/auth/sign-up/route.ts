import { NextResponse } from "next/server"
import prisma from "@/lib/prismaClient"
import { hash } from "bcrypt"
import { createSession } from "@/utils/session"
import { cookies } from "next/headers"
import { v4 as uuidv4 } from "uuid"

export async function POST(request: Request) {
    // TODO dodac zabezpiecenie autoryzacje

    const data = await request.json()
    const { name, surname, email, password } = data
    const userId = `user_${uuidv4()}`

    await email.trim()
    await password.trim()

    try {
        if (!name || !email || !password) {
            return NextResponse.json(
                { message: "Nie uzupełniono danych" },
                { status: 400 }
            )
        }

        // check if email already exist
        const checkEmailExist = await prisma.user.findUnique({
            where: { email: email },
        })

        if (checkEmailExist) {
            return NextResponse.json(
                { message: "Użytkownik o takim email już istnieje" },
                { status: 401 }
            )
        }

        const hashPassword = await hash(password, 10)
        const newUser = await prisma.user.create({
            data: {
                id: userId,
                name: name,
                surname: surname,
                email: email,
                password: hashPassword,
            },
        })

        if (!newUser) {
            return NextResponse.json(
                { message: "Nie udało się dodać użytkownika" },
                { status: 402 }
            )
        }

        // Tworzenie przykładowych list
        const sampleData = await copyPredefinedListsToUser(newUser.id, [1, 2])

        //Tworzenie sesji
        const { password: newPasswordHash, ...newUserBody } = newUser
        const newSession = await createSession(newUser.id)
        if ("id" in newSession) {
            cookies().set({
                name: "tripist_auth",
                value: newSession.id,
                httpOnly: true,
                path: "/",
            })
        }

        return NextResponse.json(newUserBody, { status: 200 })
    } catch (e) {
        return NextResponse.json(
            { message: "Nie udało się dodać użytkownika" },
            { status: 500 }
        )
    }
}

async function copyPredefinedListsToUser(
    userId: string,
    predefinedListIds: number[]
) {
    // Iterowanie przez każde ID w tablicy predefinedListIds
    for (const predefinedListId of predefinedListIds) {
        // Pobieranie przykładowej listy wraz z elementami i kategoriami
        const predefinedList = await prisma.predefinedList.findUnique({
            where: { id: predefinedListId },
            include: {
                elements: {
                    include: {
                        categories: true,
                    },
                },
            },
        })

        // Sprawdzanie, czy przykładowa lista istnieje
        if (!predefinedList) {
            // Przechodzenie do następnego ID w tablicy
            continue
        }

        // Tworzenie nowej listy dla użytkownika
        const newList = await prisma.list.create({
            data: {
                name: predefinedList.name,
                settingColor: predefinedList.settingColor,
                userId: userId,
                predefined: false,
            },
        })

        // Kopiowanie elementów listy i kategorii do nowej listy
        for (const item of predefinedList.elements) {
            // Tworzenie nowego elementu listy
            const newListItem = await prisma.listItem.create({
                data: {
                    name: item.name,
                    status: item.status,
                    listId: newList.id,
                },
            })

            // Tworzenie kategorii dla elementu listy
            for (const category of item.categories) {
                await prisma.category.create({
                    data: {
                        name: category.name,
                        userId: userId,
                        items: {
                            connect: { id: newListItem.id },
                        },
                    },
                })
            }
        }
    }
}
