// prisma/prismaHelper.ts

import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

// Funkcja do tworzenia lub uzyskiwania dostępu do kategorii
export async function createOrGetCategory(name: string) {
    let category = await prisma.templateCategory.findFirst({
        where: { name: name },
    })

    if (!category) {
        category = await prisma.templateCategory.create({
            data: { name: name },
        })
    }

    return category
}

// Funkcja do wyszukiwania typu "Business"
export async function createOrGetType(nameType: string, fullName: string) {
    let templateType = await prisma.listType.findFirst({
        where: { name: nameType },
    })

    if (!templateType) {
        // Obsłuż brak typu "Business" w bazie danych
        templateType = await prisma.listType.create({
            data: {
                name: nameType,
                fullName: fullName,
            },
        })
    }

    return templateType
}
