// npx prisma db seed

import { PrismaClient } from "@prisma/client"
import { createOrGetCategory, createOrGetType } from "./seedHelpers"

const prisma = new PrismaClient()

async function main() {
    // Tworzenie typów wyjazdów i zapisywanie ich ID
    const trainingType = await createOrGetType("training", "Trening")
    const otherType = await createOrGetType("other", "Inne")
    const vacationSummerType = await createOrGetType("summer", "Wakacje letnie")
    const vacationWinterType = await createOrGetType("winter", "Wakacje zimowe")
    const campingType = await createOrGetType("camping", "Camping")
    const activeType = await createOrGetType("active", "Wakacje aktywne")

    // Tworzenie kategorii
    const odziezCategory = await createOrGetCategory("Odzież")
    const akcesoriaCategory = await createOrGetCategory("Akcesoria")
    const higienaCategory = await createOrGetCategory("Higiena")
    const technologiaCategory = await createOrGetCategory("Elektronika")
    const inneCategory = await createOrGetCategory("Inne")
    const sprzetKempingowyCategory =
        await createOrGetCategory("Sprzęt kempingowy")
    const foodCategory = await createOrGetCategory("Jedzenie")

    // Tworzenie listy predefiniowanej dla treningu na siłowni
    const gymList = await prisma.template.create({
        data: {
            name: "Trening na siłowni",
            settingColor: "bg-red-500",
            start: true,
            listTypeId: trainingType.id,
            elements: {
                create: [
                    {
                        name: "Słuchawki",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Kłódka do szafki",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Dezodorant",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },
                    {
                        name: "Szampon",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },
                    {
                        name: "Żel pod prysznic",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },
                    {
                        name: "Zegarek sportowy",
                        categories: {
                            connect: [{ id: akcesoriaCategory.id }],
                        },
                    },
                    {
                        name: "Butelka na wodę",
                        categories: {
                            connect: [{ id: akcesoriaCategory.id }],
                        },
                    },
                    {
                        name: "Ręcznik",
                        categories: {
                            connect: [{ id: akcesoriaCategory.id }],
                        },
                    },
                    {
                        name: "Buty",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Bokserki",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Skarpety",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Spodenki",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Koszulka",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                ],
            },
        },
    })

    // Tworzenie listy predefiniowanej na weekend w Madrycie
    const madridList = await prisma.template.create({
        data: {
            name: "Weekend w Madrycie",
            settingColor: "bg-emerald-500",
            start: true,
            listTypeId: vacationSummerType.id,
            tripLength: 2,
            elements: {
                create: [
                    {
                        name: "Parasol",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Dokumenty podróży",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Przewodnik turystyczny lub aplikacja z mapą",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Powerbank",
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
                        name: "Telefon komórkowy i ładowarka",
                        categories: {
                            connect: [{ id: technologiaCategory.id }],
                        },
                    },
                    {
                        name: "Krem z filtrem UV",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },
                    {
                        name: "Leki osobiste",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },
                    {
                        name: "Szczoteczka i pasta do zębów",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },
                    {
                        name: "Podstawowe kosmetyki",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },
                    {
                        name: "Plecak lub torba na dzień",
                        categories: {
                            connect: [{ id: akcesoriaCategory.id }],
                        },
                    },
                    {
                        name: "Kapelusz lub czapka",
                        categories: {
                            connect: [{ id: akcesoriaCategory.id }],
                        },
                    },
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: {
                            connect: [{ id: akcesoriaCategory.id }],
                        },
                    },
                    {
                        name: "Kurtka lub sweter",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Buty na wieczorne wyjścia",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Wygodne buty do chodzenia",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Skarpety",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Piżama",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Bielizna",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Ubrania na wieczór",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Wygodne spodnie lub spódnice",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Lekkie ubrania na dzień",
                        categories: { connect: [{ id: odziezCategory.id }] },
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
