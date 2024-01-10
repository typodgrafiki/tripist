// npx prisma db seed
// npm run seed:sample
// npm run seed:template

import { getCategory, getType } from "../../_helpers/seedHelpers"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function activeWindsurfing() {
    // Tworzenie typu
    const activeTemplateType = await getType("active", "Wakacje aktywne")

    // Tworzenie lub uzyskiwanie dostępu do kategorii
    const odziez = await getCategory("Odzież")
    const akcesoria = await getCategory("Akcesoria")
    const elektronika = await getCategory("Elektronika")
    const inne = await getCategory("Inne")
    const jedzenie = await getCategory("Jedzenie")
    const higiena = await getCategory("Łazienka / Higiena")
    const dokumenty = await getCategory("Dokumenty")
    const apteczka = await getCategory("Apteczka")
    const kosmetyczka = await getCategory("Kosmetyczka")
    const windsurfing = await getCategory("Windsurfing")

    // Nazwy list
    const windserfingList = {
        name: "Windserfing",
        start: false,
        type: activeTemplateType,
    }

    // All Inclusive 14
    const windserfingN = await prisma.template.create({
        data: {
            name: windserfingList.name,
            settingColor: "bg-blue-400",
            start: windserfingList.start,
            listTypeId: windserfingList.type,
            tripLength: null,
            elements: {
                create: [
                    // Odzież
                    {
                        name: "Koszulki",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Spodenki krótkie",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Spodnie długie",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Bluza / Sweter",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Piżama",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Skarpety",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Bielizna (majtki)",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Czapka z daszkiem",
                        categories: { connect: [{ id: odziez }] },
                    },
                    // Dokumenty
                    {
                        name: "Gotówka",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Dokumenty",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Ubezpieczenie podróżne",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Dowód osobisty",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Potwierdzenia rezerwacji",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    // Elektronika
                    {
                        name: "Aparat fotograficzny",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Ładowarka do telefonu + kabel",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Powerbank + kabel",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Słuchawki",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Książka / Czytnik typu Kindle",
                        categories: { connect: [{ id: inne }] },
                    },
                    // Apteczka
                    {
                        name: "Leki",
                        categories: { connect: [{ id: apteczka }] },
                    },
                    {
                        name: "Tabletki przeciwbólowe",
                        categories: { connect: [{ id: apteczka }] },
                    },
                    {
                        name: "Tabletki na biegunkę",
                        categories: { connect: [{ id: apteczka }] },
                    },
                    {
                        name: "Tabletki na ból brzucha",
                        categories: { connect: [{ id: apteczka }] },
                    },
                    {
                        name: "Plastry opatrunkowe",
                        categories: { connect: [{ id: apteczka }] },
                    },
                    {
                        name: "Żel antybakteryjny",
                        categories: { connect: [{ id: apteczka }] },
                    },
                    {
                        name: "Tabletki na alergie",
                        categories: { connect: [{ id: apteczka }] },
                    },
                    {
                        name: "Środek na komary i kleszcze",
                        categories: { connect: [{ id: apteczka }] },
                    },
                    {
                        name: "Bandaż",
                        categories: { connect: [{ id: apteczka }] },
                    },
                    {
                        name: "Nożyczki",
                        categories: { connect: [{ id: apteczka }] },
                    },
                    // Kosmetyczka
                    {
                        name: "Mydło / Żel pod prysznic",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Szampon",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Odżywka do włosów",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Pasta / Żel do włosów",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Zestaw do golenia lub depilacji",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Szczotka do włosów / Grzebień",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Szczotka do zębów",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Pasta do zębów",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Nitka dentystyczna",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Dezodorant / Antyperspirant",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Nożyczki do paznokci",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    // Łazienka / Higiena
                    {
                        name: "Ręcznik",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Klapki pod prysznic",
                        categories: { connect: [{ id: odziez }] },
                    },
                    // Jedzenie
                    {
                        name: "Batony",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    // Inne
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Worki na pranie",
                        categories: { connect: [{ id: inne }] },
                    },
                    // Elektronika
                    {
                        name: "Zegarek sportowy",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Czujnik pulsu na klatkę piersiową",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Bielizna termoaktywna",
                        categories: { connect: [{ id: odziez }] },
                    },

                    // ACTIVE Windsurfing
                    {
                        name: "Deska windsurfingowa",
                        categories: { connect: [{ id: windsurfing }] },
                    },
                    {
                        name: "Żagiel do windsurfingu",
                        categories: { connect: [{ id: windsurfing }] },
                    },
                    {
                        name: "Boom do windsurfingu",
                        categories: { connect: [{ id: windsurfing }] },
                    },
                    {
                        name: "Uprząż windsurfingowa",
                        categories: { connect: [{ id: windsurfing }] },
                    },
                    {
                        name: "Pianka neoprenowa",
                        categories: { connect: [{ id: windsurfing }] },
                    },
                    {
                        name: "Buty neoprenowe",
                        categories: { connect: [{ id: windsurfing }] },
                    },
                    {
                        name: "Rękawiczki neoprenowe",
                        categories: { connect: [{ id: windsurfing }] },
                    },
                    {
                        name: "Wiatrówka",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Strój kąpielowy",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Ręcznik szybkoschnący",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Zegarek wodoszczelny",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Woda",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Batony energetyczne",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Energetyk w proszku",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Plecak lub torba",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Kurs windsurfingu",
                        categories: { connect: [{ id: windsurfing }] },
                    },
                    {
                        name: "Instruktor windsurfingu",
                        categories: { connect: [{ id: windsurfing }] },
                    },
                ],
            },
        },
    })
}
