// npx prisma db seed
// npm run seed:sample
// npm run seed:template

import { getCategory, getType } from "../../_helpers/seedHelpers"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function activeZeglarstwo() {
    // Tworzenie typu
    const activeTemplateType = await getType("active", "Wakacje aktywne")

    // Tworzenie lub uzyskiwanie dostępu do kategorii
    const odziez = await getCategory("Odzież")
    const obuwie = await getCategory("Obuwie")
    const akcesoria = await getCategory("Akcesoria")
    const elektronika = await getCategory("Elektronika")
    const inne = await getCategory("Inne")
    const jedzenie = await getCategory("Jedzenie")
    const higiena = await getCategory("Łazienka / Higiena")
    const dokumenty = await getCategory("Dokumenty")
    const apteczka = await getCategory("Apteczka")
    const kosmetyczka = await getCategory("Kosmetyczka")
    const sport = await getCategory("Sport")
    const zeglarstwo = await getCategory("Żeglarstwo")

    // Nazwy list
    const zeglarstwoList = {
        name: "Żeglarstwo",
        start: false,
        type: activeTemplateType,
    }

    // All Inclusive 14
    const zeglarstwoN = await prisma.template.create({
        data: {
            name: zeglarstwoList.name,
            settingColor: "bg-blue-400",
            start: zeglarstwoList.start,
            listTypeId: zeglarstwoList.type,
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
                        categories: {
                            connect: [{ id: elektronika }, { id: inne }],
                        },
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
                        categories: {
                            connect: [{ id: higiena }, { id: obuwie }],
                        },
                    },
                    // Jedzenie
                    {
                        name: "Batony",
                        categories: {
                            connect: [{ id: jedzenie }],
                        },
                    },
                    // Inne
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Worki na pranie",
                        categories: {
                            connect: [{ id: inne }],
                        },
                    },
                    // Elektronika
                    {
                        name: "Zegarek sportowy",
                        categories: {
                            connect: [{ id: sport }, { id: elektronika }],
                        },
                    },
                    {
                        name: "Czujnik pulsu na klatkę piersiową",
                        categories: {
                            connect: [{ id: sport }, { id: elektronika }],
                        },
                    },
                    {
                        name: "Bielizna termoaktywna",
                        categories: {
                            connect: [{ id: sport }],
                        },
                    },

                    // ACTIVE Żeglarstwo
                    {
                        name: "Kurtka żeglarska",
                        categories: {
                            connect: [{ id: zeglarstwo }],
                        },
                    },
                    {
                        name: "Spodnie żeglarskie",
                        categories: {
                            connect: [{ id: zeglarstwo }],
                        },
                    },
                    {
                        name: "Buty żeglarskie",
                        categories: {
                            connect: [{ id: zeglarstwo }],
                        },
                    },
                    {
                        name: "Rękawiczki żeglarskie",
                        categories: {
                            connect: [{ id: zeglarstwo }],
                        },
                    },
                    {
                        name: "Bandana",
                        categories: {
                            connect: [{ id: zeglarstwo }, { id: odziez }],
                        },
                    },
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: {
                            connect: [{ id: zeglarstwo }, { id: sport }],
                        },
                    },
                    {
                        name: "Warstwy termiczne",
                        categories: {
                            connect: [{ id: zeglarstwo }, { id: sport }],
                        },
                    },
                    {
                        name: "Kamizelka ratunkowa",
                        categories: {
                            connect: [{ id: zeglarstwo }],
                        },
                    },
                    {
                        name: "Ręczniki szybkoschnące",
                        categories: {
                            connect: [{ id: zeglarstwo }, { id: sport }],
                        },
                    },
                    {
                        name: "Mapy nawigacyjne",
                        categories: {
                            connect: [{ id: zeglarstwo }],
                        },
                    },
                    {
                        name: "Kompas",
                        categories: {
                            connect: [{ id: zeglarstwo }],
                        },
                    },
                    {
                        name: "Lornetka",
                        categories: {
                            connect: [{ id: zeglarstwo }],
                        },
                    },
                    {
                        name: "Nóż żeglarski",
                        categories: {
                            connect: [{ id: zeglarstwo }],
                        },
                    },
                    {
                        name: "Latarka czołowa",
                        categories: {
                            connect: [{ id: zeglarstwo }, { id: elektronika }],
                        },
                    },
                    {
                        name: "GPS",
                        categories: {
                            connect: [{ id: zeglarstwo }],
                        },
                    },
                    {
                        name: "Ploter nawigacyjny",
                        categories: {
                            connect: [{ id: zeglarstwo }],
                        },
                    },
                    {
                        name: "Woda",
                        categories: {
                            connect: [{ id: jedzenie }],
                        },
                    },
                    {
                        name: "Prowiant",
                        categories: {
                            connect: [{ id: jedzenie }],
                        },
                    },
                    {
                        name: "Worki wodoszczelne",
                        categories: {
                            connect: [{ id: zeglarstwo }],
                        },
                    },
                ],
            },
        },
    })
}
