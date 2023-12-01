import { NextResponse } from "next/server"
import prisma from "@/lib/prismaClient"
import { sendEmailSignCode } from "@/email/sendEmailCode"

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
        const checkEmailExist = await prisma.user.findUnique({
            where: { email: email },
        })

        if (!checkEmailExist) {
            return NextResponse.json(
                { message: "Użytkownik o takim email już istnieje" },
                { status: 401 }
            )
        }

        // Szukam i usuwam istniejący kod uzytkownika
        const codeForUser = await prisma.signUpCodes.findMany({
            where: { userId: checkEmailExist.id },
        })
        const deleteResult = await prisma.signUpCodes.deleteMany({
            where: {
                id: {
                    in: codeForUser.map((code) => code.id),
                },
            },
        })

        const { signUpCode, expiryDate } = generateCode4()

        const newSignUpCode = await prisma.signUpCodes.create({
            data: {
                code: signUpCode,
                expiresAt: expiryDate,
                userId: checkEmailExist.id, // Powiązanie kodu z nowo utworzonym użytkownikiem
            },
        })

        const sendEmail = await sendEmailSignCode(
            signUpCode.toString(),
            email.toString()
        )

        if (!sendEmail) {
            return NextResponse.json(
                { message: "Email nie wysłany" },
                { status: 402 }
            )
        }

        return NextResponse.json(checkEmailExist.id, { status: 200 })
    } catch (e) {
        return NextResponse.json(
            { message: "Nie udało się dodać użytkownika" },
            { status: 500 }
        )
    }
}

function generateCode4() {
    const signUpCode = Math.floor(Math.random() * 9000) + 1000
    const expiryDate = new Date()
    expiryDate.setHours(expiryDate.getHours() + 24) // Ustawienie czasu wygaśnięcia na 24 godziny od teraz

    return {
        signUpCode: signUpCode,
        expiryDate: expiryDate,
    }
}
