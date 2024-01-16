import { NextResponse } from "next/server"
import prisma from "@/lib/prismaClient"
import { hash } from "bcrypt"
import { createSession } from "@/utils/session"
import { cookies } from "next/headers"
import { v4 as uuidv4 } from "uuid"
import { sendEmailSignCode } from "@/email/sendEmailCode"

function generateCode4() {
    const signUpCode = Math.floor(Math.random() * 9000) + 1000
    const expiryDate = new Date()
    expiryDate.setMinutes(expiryDate.getMinutes() + 15) // Ustawienie czasu wygaśnięcia na 15 minut od teraz

    return {
        signUpCode: signUpCode,
        expiryDate: expiryDate,
    }
}

export async function POST(request: Request) {
    const data = await request.json()
    const { name, surname, email, password, gender } = data
    const userId = `user_${uuidv4()}`

    email.trim()
    password.trim()
    gender.trim()

    const correctGender = ["MALE", "FEMALE", "OTHER", null].includes(gender)

    try {
        if (!name || !email || !password || !correctGender) {
            return NextResponse.json(
                { message: "Nie uzupełniono danych" },
                { status: 422 }
            )
        }
        

        // check if email already exist
        const checkEmailExist = await prisma.user.findUnique({
            where: { email: email },
        })

        if (checkEmailExist) {
            return NextResponse.json(
                { message: "Użytkownik o takim email już istnieje" },
                { status: 409 }
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
                gender: gender,
            },
        })

        if (!newUser) {
            return NextResponse.json(
                { message: "Nie udało się dodać użytkownika" },
                { status: 500 }
            )
        }

        const { signUpCode, expiryDate } = generateCode4()

        const newSignUpCode = await prisma.signUpCodes.create({
            data: {
                code: signUpCode,
                expiresAt: expiryDate,
                userId: newUser.id,
            },
        })

        const sendEmail = await sendEmailSignCode(
            signUpCode.toString(),
            email.toString()
        )

        if (!sendEmail) {
            return NextResponse.json(
                { message: "Nie wysłano kodu" },
                { status: 500 }
            )
        }

        const result = {
            userId: userId,
            email: newUser.email,
        }

        return NextResponse.json(result, { status: 200 })
    } catch (e) {
        return NextResponse.json(
            { message: "Nie udało się dodać użytkownika" },
            { status: 500 }
        )
    }
}

export async function PATCH(request: Request) {
    const data = await request.json()
    const { code, userId } = data
    const codeNumber = parseInt(code, 10)

    try {
        const user = await prisma.user.findUnique({
            where: { id: userId },
        })

        const signUpCode = await prisma.signUpCodes.findFirst({
            where: { userId: userId },
        })

        // Sprawdź, czy kod się zgadza i użytkownik istnieje
        if (signUpCode && signUpCode.code === codeNumber && user) {
            if (new Date(signUpCode.expiresAt) < new Date()) {
                return NextResponse.json(
                    { message: "Kod stracił ważność" },
                    { status: 401 }
                )
            }

            await prisma.user.update({
                where: { id: userId },
                data: { confirmed: true },
            })

            await prisma.signUpCodes.deleteMany({
                where: { userId: userId },
            })

            // Tworzenie przykładowych list
            const sampleData = await copyPredefinedListsToUser(user.id)

            //Tworzenie sesji
            const newSession = await createSession(user.id)
            if ("id" in newSession) {
                cookies().set({
                    name: "tripist_auth",
                    value: newSession.id,
                    httpOnly: true,
                    path: "/",
                })
            }

            return NextResponse.json(
                { message: "Potwierdzono użytkownika" },
                { status: 200 }
            )
        } else {
            return NextResponse.json(
                { message: "Niepoprawky kod" },
                { status: 400 }
            )
        }
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        )
    }
}

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
