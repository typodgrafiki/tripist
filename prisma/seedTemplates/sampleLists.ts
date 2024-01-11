// npx prisma db seed

import { Gender, PrismaClient } from "@prisma/client"
import { getCategory, getType } from "../_helpers/seedHelpers"

const prisma = new PrismaClient()

export async function sampleLists() {
    // Tworzenie typów wyjazdów i zapisywanie ich ID
    const trainingType = await getType("training", "Trening")
    const vacationSummerType = await getType("summer", "Wakacje letnie")

    // Tworzenie kategorii
    const odziez = await getCategory("Odzież")
    const akcesoria = await getCategory("Akcesoria")
    const higiena = await getCategory("Łazienka / Higiena")
    const elektronika = await getCategory("Elektronika")
    const inne = await getCategory("Inne")

    // Tworzenie listy predefiniowanej dla treningu na siłowni
    const gymList = await prisma.template.create({
        data: {
            name: "Trening na siłowni",
            settingColor: "bg-red-500",
            start: true,
            listTypeId: trainingType,
            gender: Gender.MALE,
            elements: {
                create: [
                    {
                        name: "Słuchawki",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Kłódka do szafki",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Dezodorant",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Szampon",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Żel pod prysznic",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Zegarek sportowy",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Butelka na wodę",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Ręcznik",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Buty",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Bokserki",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Skarpety",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Spodenki",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Koszulka",
                        categories: { connect: [{ id: odziez }] },
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
            gender: Gender.MALE,
            tripLength: 2,
            elements: {
                create: [
                    {
                        name: "Parasol",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Dokumenty podróży",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Przewodnik turystyczny lub aplikacja z mapą",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Powerbank",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Adapter do gniazdek",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Telefon komórkowy i ładowarka",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Krem z filtrem UV",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Leki osobiste",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Szczoteczka i pasta do zębów",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Podstawowe kosmetyki",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Plecak lub torba na dzień",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Kapelusz lub czapka",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Kurtka lub sweter",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Buty na wieczorne wyjścia",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Wygodne buty do chodzenia",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Skarpety",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Piżama",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Bielizna",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Ubrania na wieczór",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Wygodne spodnie lub spódnice",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Lekkie ubrania na dzień",
                        categories: { connect: [{ id: odziez }] },
                    },
                ],
            },
        },
    })
}
