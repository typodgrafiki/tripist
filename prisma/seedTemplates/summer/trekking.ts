// npx prisma db seed
// npm run seed:sample
// npm run seed:template

import { getCategory, getType } from "../../seedHelpers"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    // Tworzenie typu
    const summerTemplateType = await getType("summer", "Wakacje letnie")

    // Tworzenie lub uzyskiwanie dostępu do kategorii
    const odziez = await getCategory("Odzież")
    const akcesoria = await getCategory("Akcesoria")
    const elektronika = await getCategory("Elektronika")
    const inne = await getCategory("Inne")
    const jedzenie = await getCategory("Jedzenie")
    const kuchnia = await getCategory("Kuchnia")
    const higiena = await getCategory("Łazienka / Higiena")
    const camping = await getCategory("Camping")
    const plaza = await getCategory("Plaża")
    const trekking = await getCategory("Trekking")
    const dokumenty = await getCategory("Dokumenty")

    // Nazwy list
    const trekkingList = {
        name: "Trekking w górach",
        start: false,
        type: summerTemplateType,
    }

    // Trekking 3, 7

    const trekking7 = await prisma.template.create({
        data: {
            name: trekkingList.name,
            settingColor: "bg-blue-400",
            start: trekkingList.start,
            listTypeId: trekkingList.type,
            tripLength: 7,
            elements: {
                create: [
                    {
                        name: "Bluza",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Spodenki krótkie",
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
                        name: "Czapka z daszkiem lub kapelusz",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Chusta na głowę",
                        categories: { connect: [{ id: odziez }] },
                    },

                    {
                        name: "Bielizna termoaktywna",
                        categories: {
                            connect: [{ id: sport }, { id: trekking }],
                        },
                    },
                    {
                        name: "Spodnie długie trekkingowe",
                        categories: { connect: [{ id: trekking }] },
                    },
                    {
                        name: "Kamizelka trekkingowa",
                        categories: { connect: [{ id: trekking }] },
                    },
                    {
                        name: "Bluza trekkingowa",
                        categories: { connect: [{ id: trekking }] },
                    },
                    {
                        name: "Kurtka trekkingowa",
                        categories: { connect: [{ id: trekking }] },
                    },
                    {
                        name: "Buty trekkingowe",
                        categories: {
                            connect: [{ id: trekking }, { id: survival }],
                        },
                    },
                    {
                        name: "Czołówka",
                        categories: { connect: [{ id: trekking }] },
                    },
                    {
                        name: "Baterie do czołówki",
                        categories: { connect: [{ id: trekking }] },
                    },
                    {
                        name: "Kijki trekkingowe",
                        categories: { connect: [{ id: trekking }] },
                    },
                    {
                        name: "Mapa lub przewodnik",
                        categories: {
                            connect: [{ id: trekking }, { id: inne }],
                        },
                    },
                    {
                        name: "Plecak trekkingowy",
                        categories: { connect: [{ id: trekking }] },
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
                    {
                        name: "Potwierdzenia rezerwacji",
                        categories: {
                            connect: [{ id: dokumenty }, { id: biznes }],
                        },
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
                        name: "Czołówka (latarka)",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Baterie do czołówki",
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
                    // {
                    //     name: "Kosmetyki do makijażu",
                    //     categories: { connect: [{ id: kosmetyczka }] },
                    // },
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
                    // {
                    //     name: "Płyn do demakijażu",
                    //     categories: { connect: [{ id: kosmetyczka }] },
                    // },
                    {
                        name: "Mokre chusteczki",
                        categories: {
                            connect: [{ id: higiena }, { id: kosmetyczka }],
                        },
                    },
                    {
                        name: "Papier toaletowy",
                        categories: {
                            connect: [{ id: higiena }, { id: survival }],
                        },
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
                    {
                        name: "Butla z gazem",
                        categories: {
                            connect: [
                                { id: camping },
                                { id: trekking },
                                { id: kuchnia },
                            ],
                        },
                    },
                    {
                        name: "Palnik do butli",
                        categories: {
                            connect: [
                                { id: camping },
                                { id: trekking },
                                { id: kuchnia },
                            ],
                        },
                    },
                    {
                        name: "Zapałki / zapalniczka",
                        categories: {
                            connect: [{ id: camping }, { id: kuchnia }],
                        },
                    },

                    // Jedzenie
                    {
                        name: "Woda",
                        categories: {
                            connect: [
                                { id: campingRodzinny },
                                { id: camping },
                                { id: jedzenie },
                                { id: zeglarstwo },
                                { id: winsurfing },
                                { id: nurkowanie },
                                { id: sport },
                            ],
                        },
                    },
                    {
                        name: "Jedzenie liofizolowane",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Pieczywo",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Pasztet lub konserwa",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Batony",
                        categories: {
                            connect: [{ id: jedzenie }, { id: trekking }],
                        },
                    },

                    {
                        name: "Worki na pranie",
                        categories: {
                            connect: [{ id: inne }, { id: camping }],
                        },
                    },
                    {
                        name: "Karty do gry",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Zegarek sportowy",
                        categories: {
                            connect: [{ id: sport }, { id: elektronika }],
                        },
                    },
                ],
            },
        },
    })

    const trekking3 = await prisma.template.create({
        data: {
            name: trekkingList.name,
            settingColor: "bg-blue-400",
            start: trekkingList.start,
            listTypeId: trekkingList.type,
            tripLength: 3,
            elements: {
                create: [
                    {
                        name: "Bluza",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Spodenki krótkie",
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
                        name: "Czapka z daszkiem lub kapelusz",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Chusta na głowę",
                        categories: { connect: [{ id: odziez }] },
                    },

                    {
                        name: "Bielizna termoaktywna",
                        categories: {
                            connect: [{ id: sport }, { id: trekking }],
                        },
                    },
                    {
                        name: "Spodnie długie trekkingowe",
                        categories: { connect: [{ id: trekking }] },
                    },
                    {
                        name: "Kamizelka trekkingowa",
                        categories: { connect: [{ id: trekking }] },
                    },
                    {
                        name: "Bluza trekkingowa",
                        categories: { connect: [{ id: trekking }] },
                    },
                    {
                        name: "Kurtka trekkingowa",
                        categories: { connect: [{ id: trekking }] },
                    },
                    {
                        name: "Buty trekkingowe",
                        categories: {
                            connect: [{ id: trekking }, { id: survival }],
                        },
                    },
                    {
                        name: "Czołówka",
                        categories: { connect: [{ id: trekking }] },
                    },
                    {
                        name: "Baterie do czołówki",
                        categories: { connect: [{ id: trekking }] },
                    },
                    {
                        name: "Kijki trekkingowe",
                        categories: { connect: [{ id: trekking }] },
                    },
                    {
                        name: "Mapa lub przewodnik",
                        categories: {
                            connect: [{ id: trekking }, { id: inne }],
                        },
                    },
                    {
                        name: "Plecak trekkingowy",
                        categories: { connect: [{ id: trekking }] },
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
                    {
                        name: "Potwierdzenia rezerwacji",
                        categories: {
                            connect: [{ id: dokumenty }, { id: biznes }],
                        },
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
                        name: "Baterie do czołówki",
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
                    // {
                    //     name: "Kosmetyki do makijażu",
                    //     categories: { connect: [{ id: kosmetyczka }] },
                    // },
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
                    // {
                    //     name: "Płyn do demakijażu",
                    //     categories: { connect: [{ id: kosmetyczka }] },
                    // },
                    {
                        name: "Mokre chusteczki",
                        categories: {
                            connect: [{ id: higiena }, { id: kosmetyczka }],
                        },
                    },
                    {
                        name: "Papier toaletowy",
                        categories: {
                            connect: [{ id: higiena }, { id: survival }],
                        },
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
                    {
                        name: "Butla z gazem",
                        categories: {
                            connect: [
                                { id: camping },
                                { id: trekking },
                                { id: kuchnia },
                            ],
                        },
                    },
                    {
                        name: "Palnik do butli",
                        categories: {
                            connect: [
                                { id: camping },
                                { id: trekking },
                                { id: kuchnia },
                            ],
                        },
                    },
                    {
                        name: "Zapałki / zapalniczka",
                        categories: {
                            connect: [{ id: camping }, { id: kuchnia }],
                        },
                    },

                    // Jedzenie
                    {
                        name: "Woda",
                        categories: {
                            connect: [
                                { id: campingRodzinny },
                                { id: camping },
                                { id: jedzenie },
                                { id: zeglarstwo },
                                { id: winsurfing },
                                { id: nurkowanie },
                                { id: sport },
                            ],
                        },
                    },
                    {
                        name: "Jedzenie liofizolowane",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Pieczywo",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Pasztet lub konserwa",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Batony",
                        categories: {
                            connect: [{ id: jedzenie }, { id: trekking }],
                        },
                    },

                    {
                        name: "Worki na pranie",
                        categories: {
                            connect: [{ id: inne }, { id: camping }],
                        },
                    },
                    {
                        name: "Karty do gry",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Zegarek sportowy",
                        categories: {
                            connect: [{ id: sport }, { id: elektronika }],
                        },
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
