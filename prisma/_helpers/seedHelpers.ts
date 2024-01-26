import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export type NameCategory =
    | "Odzież"
    | "Obuwie"
    | "Akcesoria"
    | "Apteczka"
    | "Higiena"
    | "Kosmetyczka"
    | "Elektronika"
    | "Samochód"
    | "Inne"
    | "Jedzenie"
    | "Kuchnia"
    | "Campervan"
    | "Kemping"
    | "Jezioro"
    | "Plaża"
    | "Trekking"
    | "Dokumenty"
    | "Biznes"
    | "Sport"
    | "Sprzęt sportowy" //
    | "Bieganie"
    | "Siłownia"
    | "Morsowanie"
    | "Basen"
    | "Joga"
    | "Ścianka wspinaczkowa"
    | "Crossfit"
    | "Kajak"
    | "Sztuki walki"
    | "Miasto"
    | "Zima"
    | "Żeglarstwo"
    | "Survival"
    | "All Inclusive"
    | "Windsurfing"
    | "Tropikalna wyspa"
    | "Safari"
    | "Egipt"
    | "Nurkowanie"
    | "Rower"
    | "Narty"
    | "Snowboard"
    | "Niemowle"
    | "Zdrowie"
    | "Zabawki"
    | "Dzieci"

// Funkcja do tworzenia lub uzyskiwania dostępu do kategorii
export async function getCategory(name: NameCategory) {
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

type NameType = "training" | "summer" | "winter" | "active" | "other"

type FullNameType =
    | "Trening"
    | "Wakacje letnie"
    | "Wakacje zimowe"
    | "Wakacje aktywne"
    | "Inne"

// Funkcja tworzenia lub wyszukiwania typu
export async function getType(nameType: NameType, fullName: FullNameType) {
    let templateType = await prisma.listType.findFirst({
        where: { name: nameType },
    })

    let idType

    if (nameType == "summer") {
        idType = 1
    } else if (nameType == "winter") {
        idType = 2
    } else if (nameType == "active") {
        idType = 3
    } else if (nameType == "other") {
        idType = 5
    } else if (nameType == "training") {
        idType = 4
    }

    if (!templateType) {
        templateType = await prisma.listType.create({
            data: {
                name: nameType,
                fullName: fullName,
                id: idType
            },
        })
    }

    return templateType.id
}
