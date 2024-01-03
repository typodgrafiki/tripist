// npx prisma db seed
// npm run seed:sample
// npm run seed:template

import { createOrGetCategory, createOrGetType } from "./seedHelpers"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {

    // Tworzenie typu
    const summerTemplateType = await createOrGetType("summer", "Wakacje letnie")

    // Tworzenie lub uzyskiwanie dostępu do kategorii
    const odziezCategory = await createOrGetCategory("Odzież")
    const akcesoriaCategory = await createOrGetCategory("Akcesoria")
    const technologiaCategory = await createOrGetCategory("Elektronika")
    const inneCategory = await createOrGetCategory("Inne")
    const jedzenieCategory = await createOrGetCategory("Jedzenie")
    const kuchniaCategory = await createOrGetCategory("Kuchnia")
    const higienaCategory = await createOrGetCategory("Łazienka / Higiena")
    const campervanCategory = await createOrGetCategory("Camping")
    const plaza = await createOrGetCategory("Plaża")
    const trekking = await createOrGetCategory("Trekking")
    const dokumenty = await createOrGetCategory("Dokumenty")

    // Nazwy list
    const morze = {
        name: "Wakacje nad morzem",
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
                    // Odzież i Akcesoria
                    {
                        name: "Stroje kąpielowe (kilka sztuk)",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Ręcznik plażowy",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Sandały/klapki plażowe",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Czapka lub kapelusz przeciwsłoneczny",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Lekkie sukienki/spodenki",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Koszulki/T-shirty",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Lekka kurtka lub sweter na chłodniejsze wieczory",
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
                        name: "Torba plażowa",
                        categories: { connect: [{ id: odziezCategory }] },
                    },

                    // Akcesoria Plażowe i Przeciwsłoneczne
                    {
                        name: "Krem z filtrem UV",
                        categories: {
                            connect: [{ id: akcesoriaCategory }],
                        },
                    },
                    {
                        name: "Balsam po opalaniu",
                        categories: {
                            connect: [{ id: akcesoriaCategory }],
                        },
                    },
                    {
                        name: "Mata plażowa lub leżak",
                        categories: {
                            connect: [{ id: akcesoriaCategory }],
                        },
                    },
                    {
                        name: "Parasol plażowy",
                        categories: {
                            connect: [{ id: akcesoriaCategory }],
                        },
                    },
                    {
                        name: "Sprzęt do nurkowania (maska, rurka)",
                        categories: {
                            connect: [{ id: akcesoriaCategory }],
                        },
                    },
                    {
                        name: "Pływadła/plażowa piłka",
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
                        name: "Buty do wody",
                        categories: { connect: [{ id: akcesoriaCategory }] },
                    },

                    // Elektronika
                    {
                        name: "Aparat fotograficzny/lustrzanka",
                        categories: {
                            connect: [{ id: technologiaCategory }],
                        },
                    },
                    {
                        name: "Smartfon i ładowarka",
                        categories: {
                            connect: [{ id: technologiaCategory }],
                        },
                    },
                    {
                        name: "Power bank",
                        categories: {
                            connect: [{ id: technologiaCategory }],
                        },
                    },
                    {
                        name: "Głośnik przenośny (wodoodporny)",
                        categories: {
                            connect: [{ id: technologiaCategory }],
                        },
                    },
                    {
                        name: "E-book lub czytnik Kindle",
                        categories: {
                            connect: [{ id: technologiaCategory }],
                        },
                    },
                    {
                        name: "Zapasowa karta pamięci do aparatu",
                        categories: { connect: [{ id: technologiaCategory }] },
                    },
                    {
                        name: "Baterie/akumulator do aparatu",
                        categories: { connect: [{ id: technologiaCategory }] },
                    },

                    // Zdrowie i Higiena
                    {
                        name: "Apteczka pierwszej pomocy (plastry, środki przeciwbólowe, środki przeciw alergii)",
                        categories: { connect: [{ id: higienaCategory }] },
                    },
                    {
                        name: "Produkty higieniczne (szampon, żel pod prysznic, dezodorant)",
                        categories: { connect: [{ id: higienaCategory }] },
                    },
                    {
                        name: "Kosmetyki (krem nawilżający, balsam do ust)",
                        categories: { connect: [{ id: higienaCategory }] },
                    },
                    {
                        name: "Środek na komary",
                        categories: { connect: [{ id: higienaCategory }] },
                    },

                    // Inne
                    {
                        name: "Dokumenty podróżne (paszport, dowód osobisty, bilety, ubezpieczenie)",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Książki/planszówki/karty do gry",
                        categories: { connect: [{ id: inneCategory }] },
                    },
                    {
                        name: "Notatnik i długopis",
                        categories: { connect: [{ id: inneCategory }] },
                    },
                    {
                        name: "Mała apteczka z podstawowymi lekarstwami",
                        categories: { connect: [{ id: inneCategory }] },
                    },
                    {
                        name: "Składany parasol w razie deszczu",
                        categories: { connect: [{ id: inneCategory }] },
                    },
                    {
                        name: "Mapa lokalna lub przewodnik",
                        categories: { connect: [{ id: inneCategory }] },
                    },
                    {
                        name: "Chłodna torba",
                        categories: { connect: [{ id: inneCategory }] },
                    },
                    {
                        name: "Poduszka podróżna",
                        categories: { connect: [{ id: inneCategory }] },
                    },
                    {
                        name: "Mały plecak",
                        categories: { connect: [{ id: trekking }] },
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
                    // Odzież i Akcesoria
                    {
                        name: "Strój kąpielowy",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Ręcznik plażowy",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Sandały/klapki plażowe",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Czapka lub kapelusz przeciwsłoneczny",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Koszulki lub T-shirty",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Lekka kurtka lub sweter na chłodniejsze wieczory",
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
                        name: "Torba plażowa",
                        categories: { connect: [{ id: odziezCategory }] },
                    },

                    // Akcesoria Plażowe i Przeciwsłoneczne
                    {
                        name: "Krem z filtrem UV",
                        categories: {
                            connect: [{ id: akcesoriaCategory }],
                        },
                    },
                    {
                        name: "Balsam po opalaniu",
                        categories: {
                            connect: [{ id: akcesoriaCategory }],
                        },
                    },
                    {
                        name: "Mata plażowa",
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

                    // Elektronika
                    {
                        name: "Aparat fotograficzny/lustrzanka",
                        categories: {
                            connect: [{ id: technologiaCategory }],
                        },
                    },
                    {
                        name: "Telefon",
                        categories: {
                            connect: [{ id: technologiaCategory }],
                        },
                    },
                    {
                        name: "Ładowarka do telefonu",
                        categories: {
                            connect: [{ id: technologiaCategory }],
                        },
                    },
                    {
                        name: "Power bank",
                        categories: {
                            connect: [{ id: technologiaCategory }],
                        },
                    },
                    {
                        name: "Kabel do powerbanka",
                        categories: {
                            connect: [{ id: technologiaCategory }],
                        },
                    },
                    {
                        name: "Głośnik przenośny (wodoodporny)",
                        categories: {
                            connect: [{ id: technologiaCategory }],
                        },
                    },
                    {
                        name: "E-book lub czytnik Kindle",
                        categories: {
                            connect: [{ id: technologiaCategory }],
                        },
                    },
                    {
                        name: "Zapasowa karta pamięci do aparatu",
                        categories: { connect: [{ id: technologiaCategory }] },
                    },
                    {
                        name: "Baterie/akumulator do aparatu",
                        categories: { connect: [{ id: technologiaCategory }] },
                    },

                    // Zdrowie i Higiena
                    {
                        name: "Apteczka pierwszej pomocy (plastry, środki przeciwbólowe, środki przeciw alergii)",
                        categories: { connect: [{ id: higienaCategory }] },
                    },
                    {
                        name: "Produkty higieniczne (szampon, żel pod prysznic, dezodorant)",
                        categories: { connect: [{ id: higienaCategory }] },
                    },
                    {
                        name: "Kosmetyki (krem nawilżający, balsam do ust)",
                        categories: { connect: [{ id: higienaCategory }] },
                    },
                    {
                        name: "Środek na komary",
                        categories: { connect: [{ id: higienaCategory }] },
                    },

                    // Inne
                    {
                        name: "Dokumenty podróżne (paszport, dowód osobisty, bilety, ubezpieczenie)",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Mała apteczka z podstawowymi lekarstwami",
                        categories: { connect: [{ id: inneCategory }] },
                    },
                    {
                        name: "Poduszka podróżna",
                        categories: { connect: [{ id: inneCategory }] },
                    },
                    {
                        name: "Mały plecak",
                        categories: { connect: [{ id: trekking }] },
                    },
                    
                ],
            },
        },
    })

    // const trekkingTemplateType = await createOrGetType(
    //     "summer",
    //     "Wakacje letnie"
    // )
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

    // CAMPING 3, 7
    const campingList7 = await prisma.template.create({
        data: {
            name: "Kemping",
            settingColor: "bg-blue-400",
            start: false,
            listTypeId: summerTemplateType,
            tripLength: 7,
            elements: {
                create: [
                    // Odzież
                    {
                        name: "Koszulki",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Majtki",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Spodenki krótkie dżinsowe",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Spodenki dresowe",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Długie spodnie dżinsowe",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Zwykła bluza",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Czapka z daszkiem",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Piżama",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Bielizna termoaktywna",
                        categories: {
                            connect: [
                                { id: odziezCategory },
                                { id: trekking },
                            ],
                        },
                    },
                    {
                        name: "Klapki",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Skarpety niskie białe",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Skarpety wysokie kolorowe",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Kąpielówki",
                        categories: {
                            connect: [
                                { id: odziezCategory },
                                { id: plaza },
                            ],
                        },
                    },
                    {
                        name: "Spodenki krótkie do biegania",
                        categories: {
                            connect: [
                                { id: odziezCategory },
                                { id: trekking },
                            ],
                        },
                    },
                    {
                        name: "Spodnie długie trekkingowe",
                        categories: {
                            connect: [
                                { id: odziezCategory },
                                { id: trekking },
                            ],
                        },
                    },
                    {
                        name: "Bluza trekkingowa",
                        categories: {
                            connect: [
                                { id: odziezCategory },
                                { id: trekking },
                            ],
                        },
                    },
                    {
                        name: "Kurtka przeciwdeszczowa trekkingowa",
                        categories: {
                            connect: [
                                { id: odziezCategory },
                                { id: trekking },
                            ],
                        },
                    },
                    {
                        name: "Kapelusz",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Chusta na głowę czarna",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Buty na zmianę",
                        categories: { connect: [{ id: odziezCategory }] },
                    },

                    // Plaża i trekking
                    {
                        name: "Koce na plażę",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Filtr UV",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Plecak w góry",
                        categories: { connect: [{ id: trekking }] },
                    },
                    {
                        name: "Buty w góry",
                        categories: { connect: [{ id: trekking }] },
                    },

                    // Akcesoria i inne
                    {
                        name: "SUP (deska do paddleboardingu)",
                        categories: {
                            connect: [
                                { id: akcesoriaCategory },
                                { id: plaza },
                            ],
                        },
                    },
                    {
                        name: "Rozdzielacz USB-zapalniczka",
                        categories: {
                            connect: [
                                { id: akcesoriaCategory },
                                { id: campervanCategory },
                            ],
                        },
                    },
                    {
                        name: "Środek na komary",
                        categories: { connect: [{ id: akcesoriaCategory }] },
                    },
                    {
                        name: "Leki",
                        categories: {
                            connect: [
                                { id: akcesoriaCategory },
                                { id: higienaCategory },
                            ],
                        },
                    },
                    {
                        name: "Tabletki przeciwbólowe",
                        categories: {
                            connect: [
                                { id: akcesoriaCategory },
                                { id: higienaCategory },
                            ],
                        },
                    },
                    {
                        name: "Tabletki na biegunkę",
                        categories: {
                            connect: [
                                { id: akcesoriaCategory },
                                { id: higienaCategory },
                            ],
                        },
                    },
                    {
                        name: "Zapałki",
                        categories: { connect: [{ id: akcesoriaCategory }] },
                    },
                    {
                        name: "Zapalniczka",
                        categories: { connect: [{ id: akcesoriaCategory }] },
                    },
                    {
                        name: "Grill",
                        categories: { connect: [{ id: akcesoriaCategory }] },
                    },
                    {
                        name: "Worki na pranie",
                        categories: { connect: [{ id: akcesoriaCategory }] },
                    },
                    {
                        name: "Gotówka",
                        categories: {
                            connect: [
                                { id: akcesoriaCategory },
                                { id: dokumenty },
                            ],
                        },
                    },
                    {
                        name: "Dokumenty",
                        categories: {
                            connect: [
                                { id: akcesoriaCategory },
                                { id: dokumenty },
                            ],
                        },
                    },
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: akcesoriaCategory }] },
                    },
                    {
                        name: "Książka",
                        categories: { connect: [{ id: akcesoriaCategory }] },
                    },
                    {
                        name: "Karty do gry",
                        categories: { connect: [{ id: akcesoriaCategory }] },
                    },
                    {
                        name: "Taśma izolacyjna",
                        categories: {
                            connect: [
                                { id: akcesoriaCategory },
                                { id: campervanCategory },
                            ],
                        },
                    },
                    {
                        name: "Plastry opatrunkowe",
                        categories: {
                            connect: [
                                { id: akcesoriaCategory },
                                { id: higienaCategory },
                            ],
                        },
                    },
                    {
                        name: "Żel antybakteryjny",
                        categories: {
                            connect: [
                                { id: akcesoriaCategory },
                                { id: higienaCategory },
                            ],
                        },
                    },
                    {
                        name: "Nerka (saszetka biodrowa)",
                        categories: { connect: [{ id: akcesoriaCategory }] },
                    },

                    // Elektronika
                    {
                        name: "Aparat fotograficzny",
                        categories: {
                            connect: [{ id: technologiaCategory }],
                        },
                    },
                    {
                        name: "Ładowarka do telefonu + kabel",
                        categories: {
                            connect: [{ id: technologiaCategory }],
                        },
                    },
                    {
                        name: "Powerbank + kabel",
                        categories: {
                            connect: [{ id: technologiaCategory }],
                        },
                    },
                    {
                        name: "Gimball + ładowarka + kabel",
                        categories: {
                            connect: [{ id: technologiaCategory }],
                        },
                    },
                    {
                        name: "Słuchawki",
                        categories: {
                            connect: [{ id: technologiaCategory }],
                        },
                    },
                    {
                        name: "Głośnik",
                        categories: {
                            connect: [{ id: technologiaCategory }],
                        },
                    },
                    {
                        name: "Czołówka",
                        categories: {
                            connect: [
                                { id: technologiaCategory },
                                { id: trekking },
                            ],
                        },
                    },
                    {
                        name: "Baterie do czołówki",
                        categories: {
                            connect: [{ id: technologiaCategory }],
                        },
                    },

                    // Kuchnia
                    {
                        name: "Cebula",
                        categories: { connect: [{ id: kuchniaCategory }] },
                    },
                    {
                        name: "Olej",
                        categories: { connect: [{ id: kuchniaCategory }] },
                    },
                    {
                        name: "Sól",
                        categories: { connect: [{ id: kuchniaCategory }] },
                    },
                    {
                        name: "Korkociąg",
                        categories: { connect: [{ id: kuchniaCategory }] },
                    },
                    {
                        name: "Płyn do zmywania",
                        categories: { connect: [{ id: kuchniaCategory }] },
                    },
                    {
                        name: "Gąbka do zmywania",
                        categories: { connect: [{ id: kuchniaCategory }] },
                    },
                    {
                        name: "Szybkoschnący ręcznik kuchenny",
                        categories: { connect: [{ id: kuchniaCategory }] },
                    },
                    {
                        name: "Miska do mycia naczyń",
                        categories: { connect: [{ id: kuchniaCategory }] },
                    },
                    {
                        name: "Ręcznik papierowy",
                        categories: { connect: [{ id: kuchniaCategory }] },
                    },
                    {
                        name: "Noże",
                        categories: { connect: [{ id: kuchniaCategory }] },
                    },
                    {
                        name: "Sztućce",
                        categories: { connect: [{ id: kuchniaCategory }] },
                    },
                    {
                        name: "Miski",
                        categories: { connect: [{ id: kuchniaCategory }] },
                    },
                    {
                        name: "Talerze",
                        categories: { connect: [{ id: kuchniaCategory }] },
                    },
                    {
                        name: "Garnek",
                        categories: { connect: [{ id: kuchniaCategory }] },
                    },
                    {
                        name: "Patelnia",
                        categories: { connect: [{ id: kuchniaCategory }] },
                    },

                    // Higiena
                    {
                        name: "Mydło / Żel pod prysznic",
                        categories: { connect: [{ id: higienaCategory }] },
                    },
                    {
                        name: "Szampon",
                        categories: { connect: [{ id: higienaCategory }] },
                    },
                    {
                        name: "Szczotka do zębów",
                        categories: { connect: [{ id: higienaCategory }] },
                    },
                    {
                        name: "Pasta do zębów",
                        categories: { connect: [{ id: higienaCategory }] },
                    },
                    {
                        name: "Nitka dentystyczna",
                        categories: { connect: [{ id: higienaCategory }] },
                    },
                    {
                        name: "Antyperspirant",
                        categories: { connect: [{ id: higienaCategory }] },
                    },
                    {
                        name: "Nożyczki do paznokci",
                        categories: { connect: [{ id: higienaCategory }] },
                    },
                    {
                        name: "Mokre chusteczki",
                        categories: { connect: [{ id: higienaCategory }] },
                    },
                    {
                        name: "Papier toaletowy",
                        categories: { connect: [{ id: higienaCategory }] },
                    },
                    {
                        name: "Ręcznik",
                        categories: { connect: [{ id: higienaCategory }] },
                    },

                    // Do campervana
                    {
                        name: "Poduszki",
                        categories: { connect: [{ id: campervanCategory }] },
                    },
                    {
                        name: "Prysznic",
                        categories: { connect: [{ id: campervanCategory }] },
                    },
                    {
                        name: "Butla z gazem",
                        categories: {
                            connect: [
                                { id: campervanCategory },
                                { id: trekking },
                            ],
                        },
                    },
                    {
                        name: "Palnik do butli",
                        categories: {
                            connect: [
                                { id: campervanCategory },
                                { id: trekking },
                            ],
                        },
                    },
                    // Spanie
                    {
                        name: "Kołdra lub koc do spania",
                        categories: {
                            connect: [
                                { id: campervanCategory },
                            ],
                        },
                    },
                    {
                        name: "Lampka wisząca",
                        categories: {
                            connect: [
                                { id: campervanCategory },
                            ],
                        },
                    },
                    {
                        name: "Namiot do prysznica",
                        categories: {
                            connect: [
                                { id: campervanCategory },
                            ],
                        },
                    },

                    // Jedzenie
                    {
                        name: "Woda",
                        categories: { connect: [{ id: jedzenieCategory }] },
                    },
                    {
                        name: "Makarony",
                        categories: { connect: [{ id: jedzenieCategory }] },
                    },
                    {
                        name: "Gotowe sosy w proszku",
                        categories: { connect: [{ id: jedzenieCategory }] },
                    },
                    {
                        name: "Fasolka po bretońsku",
                        categories: { connect: [{ id: jedzenieCategory }] },
                    },
                    {
                        name: "Pieczywo",
                        categories: { connect: [{ id: jedzenieCategory }] },
                    },
                    {
                        name: "Banany",
                        categories: { connect: [{ id: jedzenieCategory }] },
                    },
                    {
                        name: "Konserwy",
                        categories: { connect: [{ id: jedzenieCategory }] },
                    },
                    {
                        name: "Zupki instant",
                        categories: { connect: [{ id: jedzenieCategory }] },
                    },
                    {
                        name: "Jajka",
                        categories: { connect: [{ id: jedzenieCategory }] },
                    },
                    {
                        name: "Płatki śniadaniowe",
                        categories: { connect: [{ id: jedzenieCategory }] },
                    },
                    {
                        name: "Mleko UHT",
                        categories: { connect: [{ id: jedzenieCategory }] },
                    },
                    {
                        name: "Kinderki",
                        categories: { connect: [{ id: jedzenieCategory }] },
                    },
                    {
                        name: "Kawa",
                        categories: { connect: [{ id: jedzenieCategory }] },
                    },
                    {
                        name: "Masło orzechowe",
                        categories: { connect: [{ id: jedzenieCategory }] },
                    },
                    {
                        name: "Ketchup",
                        categories: { connect: [{ id: jedzenieCategory }] },
                    },
                    {
                        name: "Przyprawy",
                        categories: { connect: [{ id: jedzenieCategory }] },
                    },
                    {
                        name: "Chrupki",
                        categories: { connect: [{ id: jedzenieCategory }] },
                    },
                    {
                        name: "Herbata",
                        categories: { connect: [{ id: jedzenieCategory }] },
                    },

                    // Jedzenie na trekking
                    {
                        name: "Batony",
                        categories: { connect: [{ id: jedzenieCategory }] },
                    },
                ],
            },
        },
    })

    const campingList3 = await prisma.template.create({
        data: {
            name: "Kemping",
            settingColor: "bg-blue-400",
            start: false,
            listTypeId: summerTemplateType,
            tripLength: 3,
            elements: {
                create: [
                    // Odzież
                    {
                        name: "Koszulki",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Majtki",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Zwykła bluza",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Nakrycie głowy",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Piżama",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Klapki",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Skarpety",
                        categories: { connect: [{ id: odziezCategory }] },
                    },

                    // Plaża i trekking
                    {
                        name: "Koce na plażę",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Filtr UV",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Plecak w góry",
                        categories: { connect: [{ id: trekking }] },
                    },

                    // Akcesoria i inne
                    {
                        name: "Rozdzielacz USB-zapalniczka",
                        categories: {
                            connect: [
                                { id: akcesoriaCategory },
                                { id: campervanCategory },
                            ],
                        },
                    },
                    {
                        name: "Środek na komary",
                        categories: { connect: [{ id: akcesoriaCategory }] },
                    },
                    {
                        name: "Worki na pranie",
                        categories: { connect: [{ id: akcesoriaCategory }] },
                    },
                    {
                        name: "Gotówka",
                        categories: {
                            connect: [
                                { id: akcesoriaCategory },
                                { id: dokumenty },
                            ],
                        },
                    },
                    {
                        name: "Dokumenty",
                        categories: {
                            connect: [
                                { id: akcesoriaCategory },
                                { id: dokumenty },
                            ],
                        },
                    },
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: akcesoriaCategory }] },
                    },
                    {
                        name: "Taśma izolacyjna",
                        categories: {
                            connect: [
                                { id: akcesoriaCategory },
                                { id: campervanCategory },
                            ],
                        },
                    },
                    {
                        name: "Plastry opatrunkowe",
                        categories: {
                            connect: [
                                { id: akcesoriaCategory },
                                { id: higienaCategory },
                            ],
                        },
                    },
                    {
                        name: "Żel antybakteryjny",
                        categories: {
                            connect: [
                                { id: akcesoriaCategory },
                                { id: higienaCategory },
                            ],
                        },
                    },

                    // Elektronika
                    {
                        name: "Aparat fotograficzny",
                        categories: {
                            connect: [{ id: technologiaCategory }],
                        },
                    },
                    {
                        name: "Ładowarka do telefonu + kabel",
                        categories: {
                            connect: [{ id: technologiaCategory }],
                        },
                    },
                    {
                        name: "Powerbank + kabel",
                        categories: {
                            connect: [{ id: technologiaCategory }],
                        },
                    },
                    {
                        name: "Gimball + ładowarka + kabel",
                        categories: {
                            connect: [{ id: technologiaCategory }],
                        },
                    },
                    {
                        name: "Słuchawki",
                        categories: {
                            connect: [{ id: technologiaCategory }],
                        },
                    },
                    {
                        name: "Głośnik",
                        categories: {
                            connect: [{ id: technologiaCategory }],
                        },
                    },
                    {
                        name: "Czołówka",
                        categories: {
                            connect: [
                                { id: technologiaCategory },
                                { id: trekking },
                            ],
                        },
                    },

                    // Kuchnia
                    {
                        name: "Cebula",
                        categories: { connect: [{ id: kuchniaCategory }] },
                    },
                    {
                        name: "Olej",
                        categories: { connect: [{ id: kuchniaCategory }] },
                    },
                    {
                        name: "Sól",
                        categories: { connect: [{ id: kuchniaCategory }] },
                    },
                    {
                        name: "Płyn do zmywania",
                        categories: { connect: [{ id: kuchniaCategory }] },
                    },
                    {
                        name: "Gąbka do zmywania",
                        categories: { connect: [{ id: kuchniaCategory }] },
                    },
                    {
                        name: "Szybkoschnący ręcznik kuchenny",
                        categories: { connect: [{ id: kuchniaCategory }] },
                    },
                    {
                        name: "Miska do mycia naczyń",
                        categories: { connect: [{ id: kuchniaCategory }] },
                    },
                    {
                        name: "Ręcznik papierowy",
                        categories: { connect: [{ id: kuchniaCategory }] },
                    },
                    {
                        name: "Noże",
                        categories: { connect: [{ id: kuchniaCategory }] },
                    },
                    {
                        name: "Sztućce",
                        categories: { connect: [{ id: kuchniaCategory }] },
                    },
                    {
                        name: "Miski",
                        categories: { connect: [{ id: kuchniaCategory }] },
                    },
                    {
                        name: "Talerze",
                        categories: { connect: [{ id: kuchniaCategory }] },
                    },
                    {
                        name: "Garnek lub patelnia",
                        categories: { connect: [{ id: kuchniaCategory }] },
                    },
                    {
                        name: "Kawiarka",
                        categories: { connect: [{ id: kuchniaCategory }] },
                    },

                    // Higiena
                    {
                        name: "Mydło / Żel pod prysznic",
                        categories: { connect: [{ id: higienaCategory }] },
                    },
                    {
                        name: "Szampon",
                        categories: { connect: [{ id: higienaCategory }] },
                    },
                    {
                        name: "Szczotka do zębów",
                        categories: { connect: [{ id: higienaCategory }] },
                    },
                    {
                        name: "Pasta do zębów",
                        categories: { connect: [{ id: higienaCategory }] },
                    },
                    {
                        name: "Nitka dentystyczna",
                        categories: { connect: [{ id: higienaCategory }] },
                    },
                    {
                        name: "Antyperspirant",
                        categories: { connect: [{ id: higienaCategory }] },
                    },
                    {
                        name: "Papier toaletowy",
                        categories: { connect: [{ id: higienaCategory }] },
                    },

                    // Do campervana
                    {
                        name: "Poduszki",
                        categories: { connect: [{ id: campervanCategory }] },
                    },
                    {
                        name: "Prysznic",
                        categories: { connect: [{ id: campervanCategory }] },
                    },
                    {
                        name: "Butla z gazem",
                        categories: {
                            connect: [
                                { id: campervanCategory },
                                { id: trekking },
                                { id: kuchniaCategory },
                            ],
                        },
                    },
                    {
                        name: "Palnik do butli",
                        categories: {
                            connect: [
                                { id: campervanCategory },
                                { id: trekking },
                                { id: kuchniaCategory },
                            ],
                        },
                    },
                    // Spanie
                    {
                        name: "Kołdra lub koc do spania",
                        categories: {
                            connect: [
                                { id: campervanCategory },
                            ],
                        },
                    },
                    {
                        name: "Lampka wisząca",
                        categories: {
                            connect: [
                                { id: campervanCategory },
                            ],
                        },
                    },
                    {
                        name: "Namiot do prysznica",
                        categories: {
                            connect: [
                                { id: campervanCategory },
                            ],
                        },
                    },

                    // Jedzenie
                    {
                        name: "Woda",
                        categories: { connect: [{ id: jedzenieCategory }] },
                    },
                    {
                        name: "Makarony",
                        categories: { connect: [{ id: jedzenieCategory }] },
                    },
                    {
                        name: "Gotowe sosy w proszku",
                        categories: { connect: [{ id: jedzenieCategory }] },
                    },
                    {
                        name: "Pieczywo",
                        categories: { connect: [{ id: jedzenieCategory }] },
                    },
                    {
                        name: "Konserwy",
                        categories: { connect: [{ id: jedzenieCategory }] },
                    },
                    {
                        name: "Zupki instant",
                        categories: { connect: [{ id: jedzenieCategory }] },
                    },
                    {
                        name: "Jajka",
                        categories: { connect: [{ id: jedzenieCategory }] },
                    },
                    {
                        name: "Płatki śniadaniowe",
                        categories: { connect: [{ id: jedzenieCategory }] },
                    },
                    {
                        name: "Mleko UHT",
                        categories: { connect: [{ id: jedzenieCategory }] },
                    },
                    {
                        name: "Kawa",
                        categories: { connect: [{ id: jedzenieCategory }] },
                    },
                    {
                        name: "Przyprawy",
                        categories: { connect: [{ id: jedzenieCategory }] },
                    },
                    {
                        name: "Herbata",
                        categories: { connect: [{ id: jedzenieCategory }] },
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
