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
    const obuwie = await getCategory("Obuwie")
    const akcesoria = await getCategory("Akcesoria")
    const elektronika = await getCategory("Elektronika")
    const inne = await getCategory("Inne")
    const higiena = await getCategory("Łazienka / Higiena")
    const dokumenty = await getCategory("Dokumenty")
    const apteczka = await getCategory("Apteczka")
    const kosmetyczka = await getCategory("Kosmetyczka")
    const plaza = await getCategory("Plaża")
    const nurkowanie = await getCategory("Nurkowanie")

    // Nazwy list
    const tropikList = {
        name: "Tropikalna wyspa",
        start: false,
        type: summerTemplateType,
    }

    // Trekking 3, 7

    const tropik10 = await prisma.template.create({
        data: {
            name: tropikList.name,
            settingColor: "bg-blue-400",
            start: tropikList.start,
            listTypeId: tropikList.type,
            tripLength: 14,
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
                        name: "Bluza",
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
                        categories: {
                            connect: [{ id: odziez }, { id: akcesoria }],
                        },
                    },
                    {
                        name: "Kapelusz",
                        categories: {
                            connect: [{ id: odziez }, { id: akcesoria }],
                        },
                    },
                    {
                        name: "Chusta na głowę",
                        categories: {
                            connect: [{ id: odziez }, { id: akcesoria }],
                        },
                    },
                    {
                        name: "Lekkie, przewiewne ubrania z długim rękawem",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Lekkie buty trekkingowe",
                        categories: { connect: [{ id: obuwie }] },
                    },
                    {
                        name: "Sandały, klapki, buty do wody",
                        categories: { connect: [{ id: obuwie }] },
                    },
                    {
                        name: "Sprzęt do snorkelingu - maska, rurka, płetwy",
                        categories: { connect: [{ id: nurkowanie }] },
                    },
                    {
                        name: "Plecak na wycieczki",
                        categories: {
                            connect: [{ id: inne }],
                        },
                    },
                    {
                        name: "Mapa lokalna lub przewodnik",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Adapter do gniazdka elektrycznego",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Butelka na wodę",
                        categories: {
                            connect: [{ id: inne }],
                        },
                    },
                    {
                        name: "Krem z filtrem UV",
                        categories: {
                            connect: [{ id: plaza }, { id: apteczka }],
                        },
                    },
                    {
                        name: "Strój kąpielowy",
                        categories: {
                            connect: [{ id: plaza }, { id: odziez }],
                        },
                    },
                    {
                        name: "Balsam po opalaniu",
                        categories: {
                            connect: [{ id: plaza }, { id: apteczka }],
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
                        name: "Słuchawki",
                        categories: {
                            connect: [{ id: elektronika }],
                        },
                    },
                    {
                        name: "Głośnik przenośny (bezprzewodowy)",
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
                            connect: [{ id: higiena }, { id: odziez }],
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

    const tropik7 = await prisma.template.create({
        data: {
            name: tropikList.name,
            settingColor: "bg-blue-400",
            start: tropikList.start,
            listTypeId: tropikList.type,
            tripLength: 7,
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
                        name: "Bluza",
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
                        categories: {
                            connect: [{ id: odziez }, { id: akcesoria }],
                        },
                    },
                    {
                        name: "Kapelusz",
                        categories: {
                            connect: [{ id: odziez }, { id: akcesoria }],
                        },
                    },
                    {
                        name: "Chusta na głowę",
                        categories: {
                            connect: [{ id: odziez }, { id: akcesoria }],
                        },
                    },
                    {
                        name: "Lekkie, przewiewne ubrania z długim rękawem",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Lekkie buty trekkingowe",
                        categories: { connect: [{ id: obuwie }] },
                    },
                    {
                        name: "Sandały, klapki, buty do wody",
                        categories: { connect: [{ id: nurkowanie }] },
                    },
                    {
                        name: "Plecak na wycieczki",
                        categories: {
                            connect: [{ id: inne }],
                        },
                    },
                    {
                        name: "Mapa lokalna lub przewodnik",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Adapter do gniazdka elektrycznego",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Butelka na wodę",
                        categories: {
                            connect: [{ id: inne }],
                        },
                    },
                    {
                        name: "Krem z filtrem UV",
                        categories: {
                            connect: [{ id: plaza }, { id: apteczka }],
                        },
                    },
                    {
                        name: "Strój kąpielowy",
                        categories: {
                            connect: [{ id: plaza }, { id: odziez }],
                        },
                    },
                    {
                        name: "Balsam po opalaniu",
                        categories: {
                            connect: [{ id: plaza }, { id: apteczka }],
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
                        name: "Słuchawki",
                        categories: {
                            connect: [{ id: elektronika }],
                        },
                    },
                    {
                        name: "Głośnik przenośny (bezprzewodowy)",
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
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
