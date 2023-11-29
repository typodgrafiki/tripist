import { NextResponse } from "next/server"
import prisma from "@/lib/prismaClient"
import { sendEmailSignPass } from "@/email/sendEmailPass"
import { ICreateRemindPassUser } from "@/types/types"

export async function POST(request: Request) {
    const data = await request.json()
    const { email } = data

    await email.trim()

    try {
        if (!email) {
            return NextResponse.json(
                { message: "Nie uzupełniono email" },
                { status: 400 }
            )
        }

        // check if email already exist
        const user = await prisma.user.findUnique({
            where: { email: email },
        })

        if (!user) {
            return NextResponse.json(
                { message: "Taki email nie istnieje" },
                { status: 401 }
            )
        }

        // Usuwanie istniejących tokenów
        const codeForUser = await prisma.userRemindPassword.findMany({
            where: { userId: user.id },
        })
        const deleteResult = await prisma.userRemindPassword.deleteMany({
            where: {
                id: {
                    in: codeForUser.map((code) => code.id),
                },
            },
        })

        // Generowanie tokena
        const expiryDate = new Date()
        expiryDate.setHours(expiryDate.getHours() + 1)

        const token = await prisma.userRemindPassword.create({
            data: {
                expiresAt: expiryDate,
                userId: user.id,
            },
        })

        if (!token) {
            return NextResponse.json(
                { message: "Nie utworzono tokena" },
                { status: 402 }
            )
        }

        const sendEmail = await sendEmailSignPass(
            token.id.toString(),
            email.toString(),
            user.id.toString()
        )

        return NextResponse.json(
            { message: "Wysłano maila z przypomnieniem hasła" },
            { status: 200 }
        )
    } catch (e) {
        console.log(e)
        return NextResponse.json(
            { message: "Nie udało się dodać użytkownika" },
            { status: 500 }
        )
    }
}

export async function PATCH(request: Request) {
    const data = await request.json()
    const { email, token, password } = data as ICreateRemindPassUser
    email.trim().toString()
    password.trim().toString()

    try {
        if (!email || !token || !password) {
            return NextResponse.json(
                { message: "Nie uzupełniono danych" },
                { status: 400 }
            )
        }

        const user = await prisma.user.findUnique({
            where: { email: email },
        })

        // TODO co tu zrobic - moze byc wiele tokenow z tym samym userId
        if (!user) {
            return NextResponse.json(
                { message: "Nie ma takiego użytkownika" },
                { status: 401 }
            )
        }

        const currentDate = new Date()
        const dbToken = await prisma.userRemindPassword.findFirst({
            where: { userId: user.id },
        })

        // ---------------------------------------
        // if token wygasł
        // if uzytkownik nie istnieje
        // if token not mach

        // delete token

        // ok

        // generate hash pass
        // update pass

        // ok
        // -----------------------------------

        // check if email already exist
        // const user = await prisma.user.findUnique({
        //     where: { email: email },
        // })

        // if (!user) {
        //     return NextResponse.json(
        //         { message: "Taki email nie istnieje" },
        //         { status: 401 }
        //     )
        // }

        // // Usuwanie istniejących tokenów
        // const codeForUser = await prisma.userRemindPassword.findMany({
        //     where: { userId: user.id },
        // })
        // const deleteResult = await prisma.userRemindPassword.deleteMany({
        //     where: {
        //         id: {
        //             in: codeForUser.map((code) => code.id),
        //         },
        //     },
        // })

        // // Generowanie tokena
        // const expiryDate = new Date()
        // expiryDate.setHours(expiryDate.getHours() + 1)

        // const token = await prisma.userRemindPassword.create({
        //     data: {
        //         expiresAt: expiryDate,
        //         userId: user.id,
        //     },
        // })

        // if (!token) {
        //     return NextResponse.json(
        //         { message: "Nie utworzono tokena" },
        //         { status: 402 }
        //     )
        // }

        // const sendEmail = await sendEmailSignPass(
        //     token.id.toString(),
        //     email.toString(),
        //     user.id.toString()
        // )

        return NextResponse.json(
            { message: "Zaktualizowano hasło" },
            { status: 200 }
        )
    } catch (e) {
        console.log(e)
        return NextResponse.json(
            { message: "Nie udało się dodać użytkownika" },
            { status: 500 }
        )
    }
}
