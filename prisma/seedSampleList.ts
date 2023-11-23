// npx prisma db seed

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    // Tworzenie kategorii
    const odziezCategory = await prisma.predefinedCategory.create({
        data: { name: "Odzież" },
    })
    const akcesoriaCategory = await prisma.predefinedCategory.create({
        data: { name: "Akcesoria" },
    })
    const higienaCategory = await prisma.predefinedCategory.create({
        data: { name: "Higiena" },
    })
    const technologiaCategory = await prisma.predefinedCategory.create({
        data: { name: "Technologia" },
    })
    const inneCategory = await prisma.predefinedCategory.create({
        data: { name: "Inne" },
    })

    // Tworzenie listy predefiniowanej dla treningu na siłowni
    const gymList = await prisma.predefinedList.create({
        data: {
            name: "Trening na siłowni",
            elements: {
                create: [
                    {
                        name: "Koszulka do ćwiczeń",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Spodnie dresowe lub legginsy",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Skarpety sportowe",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Bielizna sportowa",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Buty sportowe",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Ręcznik",
                        categories: { connect: [{ id: akcesoriaCategory.id }] },
                    },
                    {
                        name: "Butelka na wodę",
                        categories: { connect: [{ id: akcesoriaCategory.id }] },
                    },
                    {
                        name: "Zegarek sportowy lub monitor aktywności",
                        categories: { connect: [{ id: akcesoriaCategory.id }] },
                    },
                    {
                        name: "Żel pod prysznic",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },
                    {
                        name: "Szampon",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },
                    {
                        name: "Dezodorant",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },
                    {
                        name: "Szczoteczka i pasta do zębów",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },
                    {
                        name: "Zamek do szafki",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Słuchawki",
                        categories: {
                            connect: [{ id: technologiaCategory.id }],
                        },
                    },
                    {
                        name: "Opaska na ramię na telefon",
                        categories: {
                            connect: [{ id: technologiaCategory.id }],
                        },
                    },
                ],
            },
        },
    })

    // Tworzenie listy predefiniowanej na weekend w Madrycie
    const madridList = await prisma.predefinedList.create({
        data: {
            name: "Weekend w Madrycie",
            elements: {
                create: [
                    {
                        name: "Lekkie ubrania na dzień",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Wygodne spodnie lub spódnice",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Ubrania na wieczór",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Bielizna",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Piżama",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Skarpety",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Wygodne buty do chodzenia",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Buty na wieczorne wyjścia",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Kurtka lub sweter",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: akcesoriaCategory.id }] },
                    },
                    {
                        name: "Kapelusz lub czapka",
                        categories: { connect: [{ id: akcesoriaCategory.id }] },
                    },
                    {
                        name: "Plecak lub torba na dzień",
                        categories: { connect: [{ id: akcesoriaCategory.id }] },
                    },
                    {
                        name: "Podstawowe kosmetyki",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },
                    {
                        name: "Szczoteczka i pasta do zębów",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },
                    {
                        name: "Leki osobiste",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },
                    {
                        name: "Krem z filtrem UV",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },
                    {
                        name: "Telefon komórkowy i ładowarka",
                        categories: {
                            connect: [{ id: technologiaCategory.id }],
                        },
                    },
                    {
                        name: "Adapter do gniazdek",
                        categories: {
                            connect: [{ id: technologiaCategory.id }],
                        },
                    },
                    {
                        name: "Powerbank",
                        categories: {
                            connect: [{ id: technologiaCategory.id }],
                        },
                    },
                    {
                        name: "Przewodnik turystyczny lub aplikacja z mapą",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Dokumenty podróży",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Parasol",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                ],
            },
        },
    })

    // ... (kolejne listy i ich elementy)
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
