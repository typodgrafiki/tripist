import prisma from "@/lib/prismaClient"
import * as crypto from "crypto"

export const generateKeySession = () => {
    const length = 300
    // const specialCharacters = "!%_+!%!%()_!%!%_+!%!%()_!%"
    const specialCharacters = "__________"

    const key = crypto
        .randomBytes(Math.ceil(length / 2))
        .toString("hex")
        .slice(0, length - specialCharacters.length)

    const combinedString = key + specialCharacters

    const result = combinedString
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("")

    return result
}

export const createSession = async (userId: string) => {
    const key = generateKeySession()

    try {
        if (!userId) {
            throw new Error("Nie uzupełniono danych")
        }

        const newSession = await prisma.session.create({
            data: {
                id: key,
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
