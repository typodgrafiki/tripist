import { NextResponse } from "next/server"
import prisma from "@/lib/prismaClient"
import { hash } from "bcrypt"
import { createSession } from "@/utils/session"
import { cookies } from "next/headers"
import { v4 as uuidv4 } from "uuid"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_TOKEN)

export async function POST(request: Request) {
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

        // Kod potwierdzający
        const signUpCode = Math.floor(Math.random() * 9000) + 1000
        const expiryDate = new Date()
        expiryDate.setHours(expiryDate.getHours() + 24) // Ustawienie czasu wygaśnięcia na 24 godziny od teraz

        const newSignUpCode = await prisma.signUpCodes.create({
            data: {
                code: signUpCode,
                expiresAt: expiryDate,
                userId: newUser.id, // Powiązanie kodu z nowo utworzonym użytkownikiem
            },
        })

        // Wysylanie maila z kodem potwierdzającym
        resend.emails.send({
            from: "onboarding@resend.dev",
            to: newUser.email,
            subject: "Tripist - kod potwierdzajacy rejestrację",
            html: `<p>Super, twój kod to:</p><p><b>${signUpCode}</b></p>`,
        })

        // Tworzenie przykładowych list
        // const sampleData = await copyPredefinedListsToUser(newUser.id)

        //Tworzenie sesji
        // const { userId } = newUser
        // const newSession = await createSession(newUser.id)
        // if ("id" in newSession) {
        //     cookies().set({
        //         name: "tripist_auth",
        //         value: newSession.id,
        //         httpOnly: true,
        //         path: "/",
        //     })
        // }

        return NextResponse.json(userId, { status: 200 })
    } catch (e) {
        return NextResponse.json(
            { message: "Nie udało się dodać użytkownika" },
            { status: 500 }
        )
    }
}

// export async function PATCH(request: Request) {
//     // odbierz userid i kod

//     try {
//         // const elementId = parseInt(context.params.id, 10)

//         // const updatedElement = await prisma.listItem.update({
//         //     where: {
//         //         id: elementId,
//         //     },
//         //     data: {
//         //         status: status,
//         //     },
//         // })

//         return NextResponse.json({ body: updatedElement }, { status: 200 })
//     } catch (error) {
//         return NextResponse.json(
//             { error: "Internal Server Error" },
//             { status: 500 }
//         )
//     }
// }



async function copyPredefinedListsToUser(userId: string) {
    // Pobieranie list z właściwością start == true
    const predefinedLists = await prisma.template.findMany({
        where: { start: true },
        include: {
            elements: {
                include: {
                    categories: true,
                },
            },
        },
    })

    // Iterowanie przez każdą znalezioną listę
    for (const predefinedList of predefinedLists) {
        // Tworzenie nowej listy dla użytkownika
        const newList = await prisma.list.create({
            data: {
                name: predefinedList.name,
                settingColor: predefinedList.settingColor,
                userId: userId,
                fromTemplate: true,
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
                // Sprawdzanie, czy kategoria już istnieje
                const existingCategory = await prisma.category.findFirst({
                    where: {
                        name: category.name,
                        userId: userId,
                    },
                })

                if (existingCategory) {
                    // Jeśli kategoria istnieje, połącz ją z nowym elementem listy
                    await prisma.category.update({
                        where: {
                            id: existingCategory.id,
                        },
                        data: {
                            items: {
                                connect: { id: newListItem.id },
                            },
                        },
                    })
                } else {
                    // Jeśli kategoria nie istnieje, utwórz nową
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
}
