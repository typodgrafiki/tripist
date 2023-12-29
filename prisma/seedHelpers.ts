// prisma/prismaHelper.ts

import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

type NameCategory =
    | "Odzież"
    | "Akcesoria"
    | "Higiena"
    | "Elektronika"
    | "Inne"
    | "Sprzęt kempingowy"
    | "Jedzenie"
    | "Spanie"
    | "Kuchnia"
    | "Łazienka"
    | "Campervan"
    | "Plaża i trekking"

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

type NameType =
    | "training"
    | "summer"
    | "winter"
    // | "camping"
    | "active"
    | "other"

type FullNameType =
    | "Trening"
    | "Wakacje letnie"
    | "Wakacje zimowe"
    // | "Camping"
    | "Wakacje aktywne"
    | "Inne"

// Funkcja tworzenia lub wyszukiwania typu
export async function createOrGetType(
    nameType: NameType,
    fullName: FullNameType
) {
    let templateType = await prisma.listType.findFirst({
        where: { name: nameType },
    })

    if (!templateType) {
        templateType = await prisma.listType.create({
            data: {
                name: nameType,
                fullName: fullName,
            },
        })
    }

    return templateType
}
