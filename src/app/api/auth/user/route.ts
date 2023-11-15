import prisma from "@/lib/prismaClient"
import { NextResponse } from "next/server"
import { hash } from "bcrypt"
import * as z from "zod"

// TODO Dodać walidację danych zod

// const userSchema = z.object({
//     email: z.string().min(1, "Email jest wymagany").email("Email niepoprawny"),
//     name: z.string().max(100),
//     surname: z.string().max(100),
//     password: z
//         .string()
//         .min(1, "Hasło jest wymagane")
//         .min(6, "Hasło musi mieć minimum 6 znaków"),
// })

export async function POST(request: Request) {
    console.log("test")
    try {
        const body = await request.json()
        const { name, surname, email, password } = body

        // check if email already exist
        const checkEmailExist = await prisma.user.findUnique({
            where: { email: email },
        })

        if (checkEmailExist)
            NextResponse.json(
                { message: "Użytkownik o takim elail już istnieje." },
                { status: 401 }
            )

        const hashPassword = await hash(password, 10)
        const newUser = await prisma.user.create({
            data: {
                name: name,
                surname: surname,
                email: email,
                password: hashPassword,
            },
        })

        const { password: newPasswordHash, ...newUserBody } = newUser

        return NextResponse.json(
            { user: newUserBody, message: "Użytkownik dodany pomyślnie" },
            { status: 200 }
        )
    } catch (e) {
        // console.error(e)
        return NextResponse.json(
            { message: "Nie udało się dodać użytkownika" },
            { status: 500 }
        )
    }
}
