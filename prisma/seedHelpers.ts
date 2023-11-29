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
export async function getTemplateType(nameType: string) {
    let templateType = await prisma.templateType.findFirst({
        where: { name: nameType },
    })

    if (!templateType) {
        // Obsłuż brak typu "Business" w bazie danych
        return 0
    }

    return templateType.id
}
