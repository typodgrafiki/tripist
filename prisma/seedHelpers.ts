// prisma/prismaHelper.ts

import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export type NameCategory =
    | "Odzież"
    | "Akcesoria"
    | "Apteczka"
    | "Łazienka / Higiena"
    | "Kosmetyczka"
    | "Elektronika"
    | "Samochód"
    | "Inne"
    | "Jedzenie"
    | "Kuchnia"
    | "Camping"
    | "Jezioro"
    | "Plaża"
    | "Trekking"
    | "Dokumenty"
    | "Biznes"
    | "Sport"
    | "Sprzęt sportowy"
    | "Bieganie"
    | "Siłownia"
    | "Morsowanie"
    | "Basen"
    | "Joga"
    | "Ścianka wspinaczkowa"
    | "Crossfit"
    | "Kajak"
    | "Sztuki walki"

// Funkcja do tworzenia lub uzyskiwania dostępu do kategorii
export async function createOrGetCategory(name: NameCategory) {
    let category = await prisma.templateCategory.findFirst({
        where: { name: name },
    })

    if (!category) {
        category = await prisma.templateCategory.create({
            data: { name: name },
        })
    }

    return category.id
}

type NameType =
    | "training"
    | "summer"
    | "winter"
    | "active"
    | "other"

type FullNameType =
    | "Trening"
    | "Wakacje letnie"
    | "Wakacje zimowe"
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

    return templateType.id
}
