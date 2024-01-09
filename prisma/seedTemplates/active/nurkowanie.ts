// npx prisma db seed
// npm run seed:sample
// npm run seed:template

import { getCategory, getType } from "../../_helpers/seedHelpers"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function activeNurkowanie() {
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
    const nurkowanie = await getCategory("Nurkowanie")

    // Nazwy list
    const nurkowanieList = {
        name: "Nurkowanie",
        start: false,
        type: activeTemplateType,
    }

    // All Inclusive 14
    const nurkowanieN = await prisma.template.create({
        data: {
            name: nurkowanieList.name,
            settingColor: "bg-blue-400",
            start: nurkowanieList.start,
            listTypeId: nurkowanieList.type,
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

                    // ACTIVE Nurkowanie
                    {
                        name: "Maska nurkowa",
                        categories: {
                            connect: [{ id: nurkowanie }, { id: sport }],
                        },
                    },
                    {
                        name: "Płetwy",
                        categories: {
                            connect: [{ id: nurkowanie }, { id: sport }],
                        },
                    },
                    {
                        name: "Snorkel",
                        categories: {
                            connect: [{ id: nurkowanie }, { id: sport }],
                        },
                    },
                    {
                        name: "Skrzela (BCD)",
                        categories: {
                            connect: [{ id: nurkowanie }, { id: sport }],
                        },
                    },
                    {
                        name: "Regulator nurkowy",
                        categories: {
                            connect: [{ id: nurkowanie }, { id: sport }],
                        },
                    },
                    {
                        name: "Kombinezon nurkowy",
                        categories: {
                            connect: [{ id: nurkowanie }, { id: sport }],
                        },
                    },
                    {
                        name: "Komputer nurkowy",
                        categories: {
                            connect: [{ id: nurkowanie }, { id: sport }],
                        },
                    },
                    {
                        name: "Butla z powietrzem",
                        categories: {
                            connect: [{ id: nurkowanie }, { id: sport }],
                        },
                    },
                    {
                        name: "Latarka nurkowa",
                        categories: {
                            connect: [{ id: nurkowanie }, { id: sport }],
                        },
                    },
                    {
                        name: "Nóż nurkowy",
                        categories: {
                            connect: [{ id: nurkowanie }, { id: sport }],
                        },
                    },
                    {
                        name: "Boja z linią",
                        categories: {
                            connect: [{ id: nurkowanie }, { id: sport }],
                        },
                    },
                    {
                        name: "Ręcznik szybkoschnący",
                        categories: {
                            connect: [{ id: nurkowanie }, { id: sport }],
                        },
                    },
                    {
                        name: "Torba na sprzęt nurkowy",
                        categories: {
                            connect: [{ id: nurkowanie }, { id: sport }],
                        },
                    },
                    {
                        name: "Aparat fotograficzny podwodny",
                        categories: {
                            connect: [{ id: nurkowanie }, { id: sport }],
                        },
                    },
                    {
                        name: "Woda",
                        categories: {
                            connect: [{ id: jedzenie }],
                        },
                    },
                    {
                        name: "Przekąski energetyczne",
                        categories: {
                            connect: [{ id: nurkowanie }, { id: sport }],
                        },
                    },
                    {
                        name: "Certyfikat nurkowy",
                        categories: {
                            connect: [{ id: nurkowanie }, { id: sport }],
                        },
                    },
                    {
                        name: "Dziennik nurkowy",
                        categories: {
                            connect: [{ id: nurkowanie }, { id: sport }],
                        },
                    },
                    {
                        name: "Ubezpieczenie nurkowe",
                        categories: {
                            connect: [{ id: nurkowanie }, { id: sport }],
                        },
                    },
                    {
                        name: "Plecak lub torba",
                        categories: {
                            connect: [{ id: nurkowanie }, { id: sport }],
                        },
                    },
                ],
            },
        },
    })
}
