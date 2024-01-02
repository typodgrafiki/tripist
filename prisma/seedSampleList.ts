// npx prisma db seed

import { PrismaClient } from "@prisma/client"
import { createOrGetCategory, createOrGetType } from "./seedHelpers"

const prisma = new PrismaClient()

async function main() {
    // Tworzenie typów wyjazdów i zapisywanie ich ID
    const trainingType = await createOrGetType("training", "Trening")
    const vacationSummerType = await createOrGetType("summer", "Wakacje letnie")

    // Tworzenie kategorii
    const odziezCategory = await createOrGetCategory("Odzież")
    const akcesoriaCategory = await createOrGetCategory("Akcesoria")
    const higienaCategory = await createOrGetCategory("Łazienka / Higiena")
    const technologiaCategory = await createOrGetCategory("Elektronika")
    const inneCategory = await createOrGetCategory("Inne")

    // Tworzenie listy predefiniowanej dla treningu na siłowni
    const gymList = await prisma.template.create({
        data: {
            name: "Trening na siłowni",
            settingColor: "bg-red-500",
            start: true,
            listTypeId: trainingType,
            elements: {
                create: [
                    {
                        name: "Słuchawki",
                        categories: { connect: [{ id: inneCategory }] },
                    },
                    {
                        name: "Kłódka do szafki",
                        categories: { connect: [{ id: inneCategory }] },
                    },
                    {
                        name: "Dezodorant",
                        categories: { connect: [{ id: higienaCategory }] },
                    },
                    {
                        name: "Szampon",
                        categories: { connect: [{ id: higienaCategory }] },
                    },
                    {
                        name: "Żel pod prysznic",
                        categories: { connect: [{ id: higienaCategory }] },
                    },
                    {
                        name: "Zegarek sportowy",
                        categories: {
                            connect: [{ id: akcesoriaCategory }],
                        },
                    },
                    {
                        name: "Butelka na wodę",
                        categories: {
                            connect: [{ id: akcesoriaCategory }],
                        },
                    },
                    {
                        name: "Ręcznik",
                        categories: {
                            connect: [{ id: akcesoriaCategory }],
                        },
                    },
                    {
                        name: "Buty",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Bokserki",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Skarpety",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Spodenki",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Koszulka",
                        categories: { connect: [{ id: odziezCategory }] },
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
            listTypeId: vacationSummerType,
            tripLength: 2,
            elements: {
                create: [
                    {
                        name: "Parasol",
                        categories: { connect: [{ id: inneCategory }] },
                    },
                    {
                        name: "Dokumenty podróży",
                        categories: { connect: [{ id: inneCategory }] },
                    },
                    {
                        name: "Przewodnik turystyczny lub aplikacja z mapą",
                        categories: { connect: [{ id: inneCategory }] },
                    },
                    {
                        name: "Powerbank",
                        categories: {
                            connect: [{ id: technologiaCategory }],
                        },
                    },
                    {
                        name: "Adapter do gniazdek",
                        categories: {
                            connect: [{ id: technologiaCategory }],
                        },
                    },
                    {
                        name: "Telefon komórkowy i ładowarka",
                        categories: {
                            connect: [{ id: technologiaCategory }],
                        },
                    },
                    {
                        name: "Krem z filtrem UV",
                        categories: { connect: [{ id: higienaCategory }] },
                    },
                    {
                        name: "Leki osobiste",
                        categories: { connect: [{ id: higienaCategory }] },
                    },
                    {
                        name: "Szczoteczka i pasta do zębów",
                        categories: { connect: [{ id: higienaCategory }] },
                    },
                    {
                        name: "Podstawowe kosmetyki",
                        categories: { connect: [{ id: higienaCategory }] },
                    },
                    {
                        name: "Plecak lub torba na dzień",
                        categories: {
                            connect: [{ id: akcesoriaCategory }],
                        },
                    },
                    {
                        name: "Kapelusz lub czapka",
                        categories: {
                            connect: [{ id: akcesoriaCategory }],
                        },
                    },
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: {
                            connect: [{ id: akcesoriaCategory }],
                        },
                    },
                    {
                        name: "Kurtka lub sweter",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Buty na wieczorne wyjścia",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Wygodne buty do chodzenia",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Skarpety",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Piżama",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Bielizna",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Ubrania na wieczór",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Wygodne spodnie lub spódnice",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Lekkie ubrania na dzień",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                ],
            },
        },
    })

}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
