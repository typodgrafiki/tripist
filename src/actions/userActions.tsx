"use server"

import prisma from "@/lib/prismaClient"
import { hash } from "bcrypt"
import { ICreateUser } from "@/types/types"
import * as crypto from "crypto"

export const createUser = async (data: ICreateUser) => {
    const { name, surname, email, password } = data

    email.trim()
    password.trim()

    try {
        if (!name || !email || !password) {
            throw new Error("Nie uzupełniono danych")
        }

        // check if email already exist
        const checkEmailExist = await prisma.user.findUnique({
            where: { email: email },
        })

        if (checkEmailExist) {
            throw new Error("Użytkownik o takim email już istnieje")
        }

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

        const newSession = await createSession(newUser.id)

        console.log(newSession)

        return {
            message: "Użytkownik dodany pomyślnie",
            status: 200,
            data: newUserBody,
        }
    } catch (e) {
        const message =
            e instanceof Error ? e.message : "Nie udało się dodać użytkownika"
        return {
            message: message,
            status: 500,
        }
    }
}

export const createSession = async (userId: string) => {
    // const key = generateKeySession()

    try {
        if (!userId) {
            throw new Error("Nie uzupełniono danych")
        }

        const newSession = await prisma.session.create({
            data: {
                userId: userId,
                expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24), // 24 hours
            },
        })

        return newSession
    } catch (e) {
        const message =
            e instanceof Error ? e.message : "Nie udało się stworzyć sesji"
        return {
            message: message,
            status: 500,
        }
    }
}

// const generateKeySession = () => {
//     const length = 300
//     const specialCharacters = "!@#%()_+!%!@#%()_+!%"

//     const key = crypto
//         .randomBytes(Math.ceil(length / 2))
//         .toString("hex")
//         .slice(0, length - specialCharacters.length)

//     const combinedString = key + specialCharacters

//     const result = combinedString
//         .split("")
//         .sort(() => Math.random() - 0.5)
//         .join("")

//     return result
// }
