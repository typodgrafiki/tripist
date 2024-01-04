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
    const odziezCategory = await getCategory("Odzież")
    const akcesoriaCategory = await getCategory("Akcesoria")
    const technologiaCategory = await getCategory("Elektronika")
    const inneCategory = await getCategory("Inne")
    const jedzenieCategory = await getCategory("Jedzenie")
    const kuchniaCategory = await getCategory("Kuchnia")
    const higienaCategory = await getCategory("Łazienka / Higiena")
    const campervanCategory = await getCategory("Camping")
    const plaza = await getCategory("Plaża")
    const trekking = await getCategory("Trekking")
    const dokumenty = await getCategory("Dokumenty")

    // Nazwy list
    const morze = {
        name: "Wakacje nad morzem",
        start: false,
        type: summerTemplateType,
    }
    const camperVan = {
        name: "Camper Van",
        start: false,
        type: summerTemplateType,
    }

    // Wakacje nad morzem 3 / 10
    const morzeList10 = await prisma.template.create({
        data: {
            name: morze.name,
            settingColor: "bg-blue-400",
            start: morze.start,
            listTypeId: morze.type,
            tripLength: 10,
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
                        name: "Spodenki dresowe",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Długie spodnie dżinsowe",
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
                        name: "Czapka z daszkiem lub kapelusz",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Chusta na głowę",
                        categories: { connect: [{ id: odziez }] },
                    },

                    {
                        name: "Koc/Mata na plażę",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Leżak",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Krem z filtrem UV",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Strój kąpielowy",
                        categories: {
                            connect: [{ id: plaza }],
                        },
                    },
                    {
                        name: "Sandały/klapki plażowe",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Torba plażowa",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Balsam po opalaniu",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Parasol plażowy",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Parawan lub namiot plażowy",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Piłka plażowa",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Buty do wody",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Chłodna torba",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Dmuchany materac lub koło",
                        categories: {
                            connect: [{ id: plaza }],
                        },
                    },

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
                        name: "Prawo jazdy",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Potwierdzenia rezerwacji",
                        categories: {
                            connect: [{ id: dokumenty }],
                        },
                    },

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
                        name: "Głośnik przenośny (bezprzewodowy)",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Książka / Czytnik typu Kindle",
                        categories: {
                            connect: [{ id: inne }, { id: elektronika }],
                        },
                    },

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
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Nerka (saszetka biodrowa)",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Składany parasol",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Karty do gry",
                        categories: { connect: [{ id: inne }] },
                    },
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
                ],
            },
        },
    })

    const morzeList3 = await prisma.template.create({
        data: {
            name: morze.name,
            settingColor: "bg-blue-400",
            start: morze.start,
            listTypeId: morze.type,
            tripLength: 3,
            elements: {
                create: [
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
                        name: "Czapka z daszkiem lub kapelusz",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Koc/Mata na plażę",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Krem z filtrem UV",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Strój kąpielowy",
                        categories: {
                            connect: [{ id: plaza }],
                        },
                    },
                    {
                        name: "Sandały/klapki plażowe",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Torba plażowa",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Balsam po opalaniu",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Parawan plażowy",
                        categories: { connect: [{ id: plaza }] },
                    },
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
                        name: "Prawo jazdy",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Potwierdzenia rezerwacji",
                        categories: {
                            connect: [{ id: dokumenty }],
                        },
                    },
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
                        name: "Głośnik przenośny (bezprzewodowy)",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Książka / Czytnik typu Kindle",
                        categories: {
                            connect: [{ id: inne }, { id: elektronika }],
                        },
                    },

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
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Nerka (saszetka biodrowa)",
                        categories: { connect: [{ id: akcesoria }] },
                    },
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
                        name: "Maść/spray przeciw oparzeniom słonecznm",
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
                ],
            },
        },
    })

    // const trekkingList = await prisma.template.create({
    //     data: {
    //         name: "Trekking w górach",
    //         settingColor: "bg-blue-400",
    //         start: false,
    //         listTypeId: trekkingTemplateType,
    //         tripLength: 5,
    //         elements: {
    //             create: [
    //                 // Odzież i Akcesoria
    //                 {
    //                     name: "Stroje kąpielowe (kilka sztuk)",
    //                     categories: { connect: [{ id: odziezCategory }] },
    //                 },
    //                 {
    //                     name: "Ręcznik plażowy",
    //                     categories: { connect: [{ id: odziezCategory }] },
    //                 },
    //                 {
    //                     name: "Sandały/klapki plażowe",
    //                     categories: { connect: [{ id: odziezCategory }] },
    //                 },
    //                 {
    //                     name: "Kapelusz przeciwsłoneczny",
    //                     categories: { connect: [{ id: odziezCategory }] },
    //                 },
    //                 {
    //                     name: "Okulary przeciwsłoneczne",
    //                     categories: { connect: [{ id: odziezCategory }] },
    //                 },
    //                 {
    //                     name: "Lekkie sukienki/spodenki",
    //                     categories: { connect: [{ id: odziezCategory }] },
    //                 },
    //                 {
    //                     name: "Koszulki/T-shirty",
    //                     categories: { connect: [{ id: odziezCategory }] },
    //                 },
    //                 {
    //                     name: "Lekka kurtka lub sweter na chłodniejsze wieczory",
    //                     categories: { connect: [{ id: odziezCategory }] },
    //                 },
    //                 {
    //                     name: "Piżama",
    //                     categories: { connect: [{ id: odziezCategory }] },
    //                 },
    //                 {
    //                     name: "Bielizna",
    //                     categories: { connect: [{ id: odziezCategory }] },
    //                 },
    //                 {
    //                     name: "Torba plażowa",
    //                     categories: { connect: [{ id: odziezCategory }] },
    //                 },

    //                 // Akcesoria Plażowe i Przeciwsłoneczne
    //                 {
    //                     name: "Krem z filtrem UV",
    //                     categories: {
    //                         connect: [{ id: akcesoriaCategory }],
    //                     },
    //                 },
    //                 {
    //                     name: "Balsam po opalaniu",
    //                     categories: {
    //                         connect: [{ id: akcesoriaCategory }],
    //                     },
    //                 },
    //                 {
    //                     name: "Mata plażowa lub leżak",
    //                     categories: {
    //                         connect: [{ id: akcesoriaCategory }],
    //                     },
    //                 },
    //                 {
    //                     name: "Parasol plażowy",
    //                     categories: {
    //                         connect: [{ id: akcesoriaCategory }],
    //                     },
    //                 },
    //                 {
    //                     name: "Sprzęt do nurkowania (maska, rurka)",
    //                     categories: {
    //                         connect: [{ id: akcesoriaCategory }],
    //                     },
    //                 },
    //                 {
    //                     name: "Pływadła/plażowa piłka",
    //                     categories: {
    //                         connect: [{ id: akcesoriaCategory }],
    //                     },
    //                 },
    //                 {
    //                     name: "Butelka na wodę",
    //                     categories: {
    //                         connect: [{ id: akcesoriaCategory }],
    //                     },
    //                 },

    //                 // Elektronika
    //                 {
    //                     name: "Aparat fotograficzny/lustrzanka",
    //                     categories: {
    //                         connect: [{ id: technologiaCategory }],
    //                     },
    //                 },
    //                 {
    //                     name: "Smartfon i ładowarka",
    //                     categories: {
    //                         connect: [{ id: technologiaCategory }],
    //                     },
    //                 },
    //                 {
    //                     name: "Power bank",
    //                     categories: {
    //                         connect: [{ id: technologiaCategory }],
    //                     },
    //                 },
    //                 {
    //                     name: "Głośnik przenośny (wodoodporny)",
    //                     categories: {
    //                         connect: [{ id: technologiaCategory }],
    //                     },
    //                 },
    //                 {
    //                     name: "E-book lub czytnik Kindle",
    //                     categories: {
    //                         connect: [{ id: technologiaCategory }],
    //                     },
    //                 },

    //                 // Zdrowie i Higiena
    //                 {
    //                     name: "Apteczka pierwszej pomocy (plastry, środki przeciwbólowe, środki przeciw alergii)",
    //                     categories: { connect: [{ id: higienaCategory }] },
    //                 },
    //                 {
    //                     name: "Produkty higieniczne (szampon, żel pod prysznic, dezodorant)",
    //                     categories: { connect: [{ id: higienaCategory }] },
    //                 },
    //                 {
    //                     name: "Kosmetyki (krem nawilżający, balsam do ust)",
    //                     categories: { connect: [{ id: higienaCategory }] },
    //                 },
    //                 {
    //                     name: "Repelent na komary",
    //                     categories: { connect: [{ id: higienaCategory }] },
    //                 },

    //                 // Inne
    //                 {
    //                     name: "Dokumenty podróżne (paszport, dowód osobisty, bilety, ubezpieczenie)",
    //                     categories: { connect: [{ id: inneCategory }] },
    //                 },
    //                 {
    //                     name: "Książki/planszówki/karty do gry",
    //                     categories: { connect: [{ id: inneCategory }] },
    //                 },
    //                 {
    //                     name: "Notatnik i długopis",
    //                     categories: { connect: [{ id: inneCategory }] },
    //                 },
    //                 {
    //                     name: "Mała apteczka z podstawowymi lekarstwami",
    //                     categories: { connect: [{ id: inneCategory }] },
    //                 },
    //                 {
    //                     name: "Składany parasol w razie deszczu",
    //                     categories: { connect: [{ id: inneCategory }] },
    //                 },
    //             ],
    //         },
    //     },
    // })
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
