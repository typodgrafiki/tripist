// npx prisma db seed
// npm run seed:sample
// npm run seed:template

import { getCategory, getType } from "../../_helpers/seedHelpers"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function activeSurvival() {
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
    const survival = await getCategory("Survival")

    // Nazwy list
    const survivalList = {
        name: "Obóz survivalowy",
        start: false,
        type: activeTemplateType,
    }

    // All Inclusive 14
    const survivalN = await prisma.template.create({
        data: {
            name: survivalList.name,
            settingColor: "bg-blue-400",
            start: survivalList.start,
            listTypeId: survivalList.type,
            tripLength: null,
            elements: {
                create: [
                    // Odzież
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
                        name: "Czapka z daszkiem",
                        categories: { connect: [{ id: odziez }] },
                    },

                    // Dokumenty
                    {
                        name: "Gotówka",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Dowód osobisty",
                        categories: { connect: [{ id: dokumenty }] },
                    },

                    // Elektronika
                    {
                        name: "Powerbank + kabel",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Słuchawki",
                        categories: { connect: [{ id: elektronika }] },
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

                    // Kosmetyczka
                    {
                        name: "Mydło / Żel pod prysznic / Szampon",
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
                        name: "Dezodorant / Antyperspirant",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },

                    {
                        name: "Ręcznik szybkoschnący",
                        categories: { connect: [{ id: higiena }] },
                    },

                    {
                        name: "Batony",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Worki na pranie",
                        categories: { connect: [{ id: inne }] },
                    },

                    {
                        name: "Zegarek sportowy",
                        categories: {
                            connect: [{ id: sport }, { id: elektronika }],
                        },
                    },

                    // ACTIVE Survival
                    {
                        name: "Bielizna termoaktywna",
                        categories: { connect: [{ id: sport }] },
                    },
                    {
                        name: "Plecak turystyczny",
                        categories: { connect: [{ id: sport }] },
                    },
                    {
                        name: "Nóż survivalowy",
                        categories: { connect: [{ id: survival }] },
                    },
                    {
                        name: "Multitool",
                        categories: { connect: [{ id: survival }] },
                    },
                    {
                        name: "Koc ratunkowy",
                        categories: { connect: [{ id: survival }] },
                    },
                    {
                        name: "Kompas",
                        categories: { connect: [{ id: survival }] },
                    },
                    {
                        name: "Mapa terenu",
                        categories: { connect: [{ id: survival }] },
                    },
                    {
                        name: "Latarka czołowa",
                        categories: {
                            connect: [{ id: survival }, { id: elektronika }],
                        },
                    },
                    {
                        name: "Wygodne, trwałe ubrania",
                        categories: { connect: [{ id: survival }] },
                    },
                    {
                        name: "Buty trekkingowe",
                        categories: { connect: [{ id: survival }] },
                    },
                    {
                        name: "Czapka",
                        categories: { connect: [{ id: survival }] },
                    },
                    {
                        name: "Rękawiczki",
                        categories: { connect: [{ id: survival }] },
                    },
                    {
                        name: "Szalik",
                        categories: { connect: [{ id: survival }] },
                    },
                    {
                        name: "Kurtka przeciwdeszczowa",
                        categories: { connect: [{ id: survival }] },
                    },
                    {
                        name: "Namiot",
                        categories: { connect: [{ id: survival }] },
                    },
                    {
                        name: "Śpiwór",
                        categories: { connect: [{ id: survival }] },
                    },
                    {
                        name: "Mata izolacyjna",
                        categories: { connect: [{ id: survival }] },
                    },
                    {
                        name: "Kuchenka turystyczna",
                        categories: { connect: [{ id: survival }] },
                    },
                    {
                        name: "Naczynia turystyczne",
                        categories: { connect: [{ id: survival }] },
                    },
                    {
                        name: "Liofilizowane posiłki",
                        categories: {
                            connect: [{ id: survival }, { id: jedzenie }],
                        },
                    },
                    {
                        name: "Butelka na wodę",
                        categories: { connect: [{ id: survival }] },
                    },
                    {
                        name: "Tabletki do oczyszczania wody",
                        categories: { connect: [{ id: survival }] },
                    },
                    {
                        name: "Apteczka pierwszej pomocy",
                        categories: { connect: [{ id: survival }] },
                    },
                    {
                        name: "Środek przeciw kleszczom i komarom",
                        categories: { connect: [{ id: survival }] },
                    },
                    {
                        name: "Biodegradowalne mydło",
                        categories: {
                            connect: [{ id: survival }, { id: kosmetyczka }],
                        },
                    },
                    {
                        name: "Papier toaletowy",
                        categories: {
                            connect: [{ id: survival }, { id: inne }],
                        },
                    },
                    {
                        name: "Zapalniczka",
                        categories: {
                            connect: [{ id: survival }, { id: inne }],
                        },
                    },
                    {
                        name: "Bidony na wodę",
                        categories: {
                            connect: [{ id: survival }, { id: inne }],
                        },
                    },
                    {
                        name: "Gwizdek ratunkowy",
                        categories: { connect: [{ id: survival }] },
                    },
                    {
                        name: "Siatka na owady",
                        categories: { connect: [{ id: survival }] },
                    },
                    {
                        name: "Książka",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Pakiet energetyczny",
                        categories: {
                            connect: [{ id: survival }, { id: jedzenie }],
                        },
                    },
                ],
            },
        },
    })
}
