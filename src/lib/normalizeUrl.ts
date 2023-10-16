import { PrismaClient } from "@prisma/client"

export const generateUniqueURL = async (prisma: PrismaClient, name: string) => {
    const baseURL = name.toLowerCase().replace(/[^a-z0-9]+/g, "-")

    let url = baseURL
    let counter = 1

    while (true) {
        const existingElement = await prisma.list.findFirst({
            where: { url },
        })

        if (!existingElement) {
            return url
        }

        url = `${baseURL}-${counter}`
        counter++
    }
}
