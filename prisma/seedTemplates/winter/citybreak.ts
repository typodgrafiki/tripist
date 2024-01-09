// npx prisma db seed
// npm run seed:sample
// npm run seed:template

import { getCategory, getType } from "../../_helpers/seedHelpers"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function winterCitybreak() {
    // Tworzenie typu
    const winterTemplateType = await getType("winter", "Wakacje zimowe")

    // Tworzenie lub uzyskiwanie dostępu do kategorii
    const odziez = await getCategory("Odzież")
    const obuwie = await getCategory("Obuwie")
    const akcesoria = await getCategory("Akcesoria")
    const elektronika = await getCategory("Elektronika")
    const higiena = await getCategory("Łazienka / Higiena")
    const dokumenty = await getCategory("Dokumenty")
    const apteczka = await getCategory("Apteczka")
    const kosmetyczka = await getCategory("Kosmetyczka")
    const sport = await getCategory("Sport")
    const trekking = await getCategory("Trekking")
    const zima = await getCategory("Zima")

    // Nazwy list
    const cityBreakList = {
        name: "Citybreak / Wakacje w mieście",
        start: false,
        type: winterTemplateType,
    }

    // Citybreak 3, 7,
    const citybreak7 = await prisma.template.create({
        data: {
            name: cityBreakList.name,
            settingColor: "bg-blue-400",
            start: cityBreakList.start,
            listTypeId: cityBreakList.type,
            tripLength: 7,
            elements: {
                create: [
                    // Odzież
                    {
                        name: "Koszulki",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Spodnie długie",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Bluza lub Sweter",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Piżama",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Ciepłe skarpety",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Bielizna (majtki)",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Kurtka / Płaszcz",
                        categories: { connect: [{ id: odziez }, { id: zima }] },
                    },
                    {
                        name: "Rękawiczki",
                        categories: { connect: [{ id: odziez }, { id: zima }] },
                    },
                    {
                        name: "Czapka zimowa",
                        categories: { connect: [{ id: odziez }, { id: zima }] },
                    },
                    {
                        name: "Rajstopy / kalesony",
                        categories: { connect: [{ id: odziez }, { id: zima }] },
                    },
                    {
                        name: "Szalik",
                        categories: { connect: [{ id: odziez }, { id: zima }] },
                    },

                    // Citybreak

                    {
                        name: "Plecak miejski",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Mapa lokalna lub przewodnik",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Termos z ciepłą herbatą",
                        categories: {
                            connect: [
                                { id: trekking },
                                { id: sport },
                                { id: zima },
                            ],
                        },
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
                        name: "Paszport",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Wiza",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Kopie ważnych dokumentów",
                        categories: {
                            connect: [{ id: dokumenty }],
                        },
                    },
                    {
                        name: "Bilety lotnicze",
                        categories: {
                            connect: [{ id: dokumenty }],
                        },
                    },
                    {
                        name: "Potwierdzenia rezerwacji",
                        categories: {
                            connect: [{ id: dokumenty }],
                        },
                    },

                    // Elektronika
                    {
                        name: "Aparat fotograficzny",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Dodatkowa karta do aparatu (opcjonalnie)",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Dodatkowa bateria do aparatu (opcjonalnie)",
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
                        name: "Gimball + ładowarka + kabel",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Książka / Czytnik typu Kindle",
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
                        name: "Żel antybakteryjny",
                        categories: { connect: [{ id: apteczka }] },
                    },
                    {
                        name: "Tabletki na alergie",
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
                    // Akcesoria
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Nerka (saszetka biodrowa)",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                ],
            },
        },
    })

    const citybreak3 = await prisma.template.create({
        data: {
            name: cityBreakList.name,
            settingColor: "bg-blue-400",
            start: cityBreakList.start,
            listTypeId: cityBreakList.type,
            tripLength: 3,
            elements: {
                create: [
                    // Odzież
                    {
                        name: "Koszulki",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Spodnie długie",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Bluza lub Sweter",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Piżama",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Ciepłe skarpety",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Bielizna (majtki)",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Kurtka / Płaszcz",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Rękawiczki",
                        categories: {
                            connect: [{ id: odziez }],
                        },
                    },
                    {
                        name: "Czapka zimowa",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Rajstopy / kalesony",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Szalik",
                        categories: {
                            connect: [{ id: odziez }],
                        },
                    },

                    // Citybreak

                    {
                        name: "Plecak miejski",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Mapa lokalna lub przewodnik",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Termos z ciepłą herbatą",
                        categories: {
                            connect: [{ id: trekking }, { id: sport }],
                        },
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
                        name: "Dowód osobisty",
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
                        name: "Gimball + ładowarka + kabel",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Książka / Czytnik typu Kindle",
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
                        name: "Ręcznik",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Klapki pod prysznic",
                        categories: {
                            connect: [{ id: higiena }, { id: odziez }],
                        },
                    },
                    // Akcesoria
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Parasol",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                ],
            },
        },
    })
}
