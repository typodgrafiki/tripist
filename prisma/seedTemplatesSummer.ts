// npx prisma db seed
// npm run seed:sample
// npm run seed:template

import { createOrGetCategory, createOrGetType } from "./seedHelpers"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    // Tworzenie lub uzyskiwanie dostępu do kategorii
    const odziezCategory = await createOrGetCategory("Odzież")
    const akcesoriaCategory = await createOrGetCategory("Akcesoria")
    const technologiaCategory = await createOrGetCategory("Elektronika")
    const inneCategory = await createOrGetCategory("Inne")
    const jedzenieCategory = await createOrGetCategory("Jedzenie")
    const spanieCategory = await createOrGetCategory("Spanie")
    const kuchniaCategory = await createOrGetCategory("Kuchnia")
    const lazienkaCategory = await createOrGetCategory("Łazienka")
    const campervanCategory = await createOrGetCategory("Campervan")
    const plaza = await createOrGetCategory("Plaża")
    const trekking = await createOrGetCategory("Trekking i sport")
    const dokumenty = await createOrGetCategory("Dokumenty")

    // const businessTripType = await createOrGetType("other", "Inne")
    // const businessTripList = await prisma.template.create({
    //     data: {
    //         name: "Podróż biznesowa",
    //         settingColor: "bg-violet-400",
    //         start: false,
    //         listTypeId: businessTripType.id,
    //         tripLength: 3,
    //         elements: {
    //             create: [
    //                 {
    //                     name: "Elegancki strój",
    //                     categories: { connect: [{ id: odziezCategory.id }] },
    //                 },
    //                 {
    //                     name: "Koszule/koszulki",
    //                     categories: { connect: [{ id: odziezCategory.id }] },
    //                 },
    //                 {
    //                     name: "Spodnie/Spódnice",
    //                     categories: { connect: [{ id: odziezCategory.id }] },
    //                 },
    //                 {
    //                     name: "Bielizna i skarpetki",
    //                     categories: { connect: [{ id: odziezCategory.id }] },
    //                 },
    //                 {
    //                     name: "Buty eleganckie i casualowe",
    //                     categories: { connect: [{ id: odziezCategory.id }] },
    //                 },
    //                 {
    //                     name: "Pasek i akcesoria",
    //                     categories: { connect: [{ id: akcesoriaCategory.id }] },
    //                 },
    //                 {
    //                     name: "Płaszcz lub lekka kurtka",
    //                     categories: { connect: [{ id: odziezCategory.id }] },
    //                 },
    //                 {
    //                     name: "Laptop i ładowarka",
    //                     categories: {
    //                         connect: [{ id: technologiaCategory.id }],
    //                     },
    //                 },
    //                 {
    //                     name: "Telefon komórkowy i ładowarka",
    //                     categories: {
    //                         connect: [{ id: technologiaCategory.id }],
    //                     },
    //                 },
    //                 {
    //                     name: "Adapter do gniazdek",
    //                     categories: {
    //                         connect: [{ id: technologiaCategory.id }],
    //                     },
    //                 },
    //                 {
    //                     name: "Power bank",
    //                     categories: {
    //                         connect: [{ id: technologiaCategory.id }],
    //                     },
    //                 },
    //                 {
    //                     name: "Słuchawki",
    //                     categories: {
    //                         connect: [{ id: technologiaCategory.id }],
    //                     },
    //                 },
    //                 {
    //                     name: "Notatnik i długopisy",
    //                     categories: { connect: [{ id: inneCategory.id }] },
    //                 },
    //                 {
    //                     name: "Wizytówki",
    //                     categories: { connect: [{ id: inneCategory.id }] },
    //                 },
    //                 {
    //                     name: "Mapy lub przewodniki",
    //                     categories: { connect: [{ id: inneCategory.id }] },
    //                 },
    //                 {
    //                     name: "Kopie ważnych dokumentów",
    //                     categories: { connect: [{ id: inneCategory.id }] },
    //                 },
    //                 {
    //                     name: "Szczoteczka i pasta do zębów",
    //                     categories: { connect: [{ id: higienaCategory.id }] },
    //                 },
    //                 {
    //                     name: "Szampon, żel pod prysznic, odżywka",
    //                     categories: { connect: [{ id: higienaCategory.id }] },
    //                 },
    //                 {
    //                     name: "Dezodorant",
    //                     categories: { connect: [{ id: higienaCategory.id }] },
    //                 },
    //                 {
    //                     name: "Kosmetyczka z podstawowymi kosmetykami",
    //                     categories: { connect: [{ id: higienaCategory.id }] },
    //                 },
    //                 {
    //                     name: "Zestaw do golenia lub depilacji",
    //                     categories: { connect: [{ id: higienaCategory.id }] },
    //                 },
    //                 {
    //                     name: "Mała apteczka",
    //                     categories: { connect: [{ id: higienaCategory.id }] },
    //                 },
    //                 {
    //                     name: "Okulary przeciwsłoneczne",
    //                     categories: { connect: [{ id: akcesoriaCategory.id }] },
    //                 },
    //                 {
    //                     name: "Mały parasol lub peleryna przeciwdeszczowa",
    //                     categories: { connect: [{ id: akcesoriaCategory.id }] },
    //                 },
    //                 {
    //                     name: "Mała torba na zakupy lub plecak",
    //                     categories: { connect: [{ id: akcesoriaCategory.id }] },
    //                 },
    //                 {
    //                     name: "Przekąski i butelka na wodę",
    //                     categories: { connect: [{ id: inneCategory.id }] },
    //                 },
    //                 {
    //                     name: "Książka lub e-czytnik",
    //                     categories: { connect: [{ id: inneCategory.id }] },
    //                 },
    //             ],
    //         },
    //     },
    // })

    // const vacationTemplateType = await createOrGetType(
    //     "summer",
    //     "Wakacje letnie"
    // )
    // const vacationList = await prisma.template.create({
    //     data: {
    //         name: "Wakacje nad Morzem",
    //         settingColor: "bg-blue-400",
    //         start: false,
    //         listTypeId: vacationTemplateType.id,
    //         tripLength: 7,
    //         elements: {
    //             create: [
    //                 // Odzież i Akcesoria
    //                 {
    //                     name: "Stroje kąpielowe (kilka sztuk)",
    //                     categories: { connect: [{ id: odziezCategory.id }] },
    //                 },
    //                 {
    //                     name: "Ręcznik plażowy",
    //                     categories: { connect: [{ id: odziezCategory.id }] },
    //                 },
    //                 {
    //                     name: "Sandały/klapki plażowe",
    //                     categories: { connect: [{ id: odziezCategory.id }] },
    //                 },
    //                 {
    //                     name: "Kapelusz przeciwsłoneczny",
    //                     categories: { connect: [{ id: odziezCategory.id }] },
    //                 },
    //                 {
    //                     name: "Okulary przeciwsłoneczne",
    //                     categories: { connect: [{ id: odziezCategory.id }] },
    //                 },
    //                 {
    //                     name: "Lekkie sukienki/spodenki",
    //                     categories: { connect: [{ id: odziezCategory.id }] },
    //                 },
    //                 {
    //                     name: "Koszulki/T-shirty",
    //                     categories: { connect: [{ id: odziezCategory.id }] },
    //                 },
    //                 {
    //                     name: "Lekka kurtka lub sweter na chłodniejsze wieczory",
    //                     categories: { connect: [{ id: odziezCategory.id }] },
    //                 },
    //                 {
    //                     name: "Piżama",
    //                     categories: { connect: [{ id: odziezCategory.id }] },
    //                 },
    //                 {
    //                     name: "Bielizna",
    //                     categories: { connect: [{ id: odziezCategory.id }] },
    //                 },
    //                 {
    //                     name: "Torba plażowa",
    //                     categories: { connect: [{ id: odziezCategory.id }] },
    //                 },

    //                 // Akcesoria Plażowe i Przeciwsłoneczne
    //                 {
    //                     name: "Krem z filtrem UV",
    //                     categories: {
    //                         connect: [{ id: akcesoriaCategory.id }],
    //                     },
    //                 },
    //                 {
    //                     name: "Balsam po opalaniu",
    //                     categories: {
    //                         connect: [{ id: akcesoriaCategory.id }],
    //                     },
    //                 },
    //                 {
    //                     name: "Mata plażowa lub leżak",
    //                     categories: {
    //                         connect: [{ id: akcesoriaCategory.id }],
    //                     },
    //                 },
    //                 {
    //                     name: "Parasol plażowy",
    //                     categories: {
    //                         connect: [{ id: akcesoriaCategory.id }],
    //                     },
    //                 },
    //                 {
    //                     name: "Sprzęt do nurkowania (maska, rurka)",
    //                     categories: {
    //                         connect: [{ id: akcesoriaCategory.id }],
    //                     },
    //                 },
    //                 {
    //                     name: "Pływadła/plażowa piłka",
    //                     categories: {
    //                         connect: [{ id: akcesoriaCategory.id }],
    //                     },
    //                 },
    //                 {
    //                     name: "Butelka na wodę",
    //                     categories: {
    //                         connect: [{ id: akcesoriaCategory.id }],
    //                     },
    //                 },

    //                 // Elektronika
    //                 {
    //                     name: "Aparat fotograficzny/lustrzanka",
    //                     categories: {
    //                         connect: [{ id: technologiaCategory.id }],
    //                     },
    //                 },
    //                 {
    //                     name: "Smartfon i ładowarka",
    //                     categories: {
    //                         connect: [{ id: technologiaCategory.id }],
    //                     },
    //                 },
    //                 {
    //                     name: "Power bank",
    //                     categories: {
    //                         connect: [{ id: technologiaCategory.id }],
    //                     },
    //                 },
    //                 {
    //                     name: "Głośnik przenośny (wodoodporny)",
    //                     categories: {
    //                         connect: [{ id: technologiaCategory.id }],
    //                     },
    //                 },
    //                 {
    //                     name: "E-book lub czytnik Kindle",
    //                     categories: {
    //                         connect: [{ id: technologiaCategory.id }],
    //                     },
    //                 },

    //                 // Zdrowie i Higiena
    //                 {
    //                     name: "Apteczka pierwszej pomocy (plastry, środki przeciwbólowe, środki przeciw alergii)",
    //                     categories: { connect: [{ id: higienaCategory.id }] },
    //                 },
    //                 {
    //                     name: "Produkty higieniczne (szampon, żel pod prysznic, dezodorant)",
    //                     categories: { connect: [{ id: higienaCategory.id }] },
    //                 },
    //                 {
    //                     name: "Kosmetyki (krem nawilżający, balsam do ust)",
    //                     categories: { connect: [{ id: higienaCategory.id }] },
    //                 },
    //                 {
    //                     name: "Repelent na komary",
    //                     categories: { connect: [{ id: higienaCategory.id }] },
    //                 },

    //                 // Inne
    //                 {
    //                     name: "Dokumenty podróżne (paszport, dowód osobisty, bilety, ubezpieczenie)",
    //                     categories: { connect: [{ id: inneCategory.id }] },
    //                 },
    //                 {
    //                     name: "Książki/planszówki/karty do gry",
    //                     categories: { connect: [{ id: inneCategory.id }] },
    //                 },
    //                 {
    //                     name: "Notatnik i długopis",
    //                     categories: { connect: [{ id: inneCategory.id }] },
    //                 },
    //                 {
    //                     name: "Mała apteczka z podstawowymi lekarstwami",
    //                     categories: { connect: [{ id: inneCategory.id }] },
    //                 },
    //                 {
    //                     name: "Składany parasol w razie deszczu",
    //                     categories: { connect: [{ id: inneCategory.id }] },
    //                 },
    //             ],
    //         },
    //     },
    // })

    // const trekkingTemplateType = await createOrGetType(
    //     "summer",
    //     "Wakacje letnie"
    // )
    // const trekkingList = await prisma.template.create({
    //     data: {
    //         name: "Trekking w górach",
    //         settingColor: "bg-blue-400",
    //         start: false,
    //         listTypeId: trekkingTemplateType.id,
    //         tripLength: 5,
    //         elements: {
    //             create: [
    //                 // Odzież i Akcesoria
    //                 {
    //                     name: "Stroje kąpielowe (kilka sztuk)",
    //                     categories: { connect: [{ id: odziezCategory.id }] },
    //                 },
    //                 {
    //                     name: "Ręcznik plażowy",
    //                     categories: { connect: [{ id: odziezCategory.id }] },
    //                 },
    //                 {
    //                     name: "Sandały/klapki plażowe",
    //                     categories: { connect: [{ id: odziezCategory.id }] },
    //                 },
    //                 {
    //                     name: "Kapelusz przeciwsłoneczny",
    //                     categories: { connect: [{ id: odziezCategory.id }] },
    //                 },
    //                 {
    //                     name: "Okulary przeciwsłoneczne",
    //                     categories: { connect: [{ id: odziezCategory.id }] },
    //                 },
    //                 {
    //                     name: "Lekkie sukienki/spodenki",
    //                     categories: { connect: [{ id: odziezCategory.id }] },
    //                 },
    //                 {
    //                     name: "Koszulki/T-shirty",
    //                     categories: { connect: [{ id: odziezCategory.id }] },
    //                 },
    //                 {
    //                     name: "Lekka kurtka lub sweter na chłodniejsze wieczory",
    //                     categories: { connect: [{ id: odziezCategory.id }] },
    //                 },
    //                 {
    //                     name: "Piżama",
    //                     categories: { connect: [{ id: odziezCategory.id }] },
    //                 },
    //                 {
    //                     name: "Bielizna",
    //                     categories: { connect: [{ id: odziezCategory.id }] },
    //                 },
    //                 {
    //                     name: "Torba plażowa",
    //                     categories: { connect: [{ id: odziezCategory.id }] },
    //                 },

    //                 // Akcesoria Plażowe i Przeciwsłoneczne
    //                 {
    //                     name: "Krem z filtrem UV",
    //                     categories: {
    //                         connect: [{ id: akcesoriaCategory.id }],
    //                     },
    //                 },
    //                 {
    //                     name: "Balsam po opalaniu",
    //                     categories: {
    //                         connect: [{ id: akcesoriaCategory.id }],
    //                     },
    //                 },
    //                 {
    //                     name: "Mata plażowa lub leżak",
    //                     categories: {
    //                         connect: [{ id: akcesoriaCategory.id }],
    //                     },
    //                 },
    //                 {
    //                     name: "Parasol plażowy",
    //                     categories: {
    //                         connect: [{ id: akcesoriaCategory.id }],
    //                     },
    //                 },
    //                 {
    //                     name: "Sprzęt do nurkowania (maska, rurka)",
    //                     categories: {
    //                         connect: [{ id: akcesoriaCategory.id }],
    //                     },
    //                 },
    //                 {
    //                     name: "Pływadła/plażowa piłka",
    //                     categories: {
    //                         connect: [{ id: akcesoriaCategory.id }],
    //                     },
    //                 },
    //                 {
    //                     name: "Butelka na wodę",
    //                     categories: {
    //                         connect: [{ id: akcesoriaCategory.id }],
    //                     },
    //                 },

    //                 // Elektronika
    //                 {
    //                     name: "Aparat fotograficzny/lustrzanka",
    //                     categories: {
    //                         connect: [{ id: technologiaCategory.id }],
    //                     },
    //                 },
    //                 {
    //                     name: "Smartfon i ładowarka",
    //                     categories: {
    //                         connect: [{ id: technologiaCategory.id }],
    //                     },
    //                 },
    //                 {
    //                     name: "Power bank",
    //                     categories: {
    //                         connect: [{ id: technologiaCategory.id }],
    //                     },
    //                 },
    //                 {
    //                     name: "Głośnik przenośny (wodoodporny)",
    //                     categories: {
    //                         connect: [{ id: technologiaCategory.id }],
    //                     },
    //                 },
    //                 {
    //                     name: "E-book lub czytnik Kindle",
    //                     categories: {
    //                         connect: [{ id: technologiaCategory.id }],
    //                     },
    //                 },

    //                 // Zdrowie i Higiena
    //                 {
    //                     name: "Apteczka pierwszej pomocy (plastry, środki przeciwbólowe, środki przeciw alergii)",
    //                     categories: { connect: [{ id: higienaCategory.id }] },
    //                 },
    //                 {
    //                     name: "Produkty higieniczne (szampon, żel pod prysznic, dezodorant)",
    //                     categories: { connect: [{ id: higienaCategory.id }] },
    //                 },
    //                 {
    //                     name: "Kosmetyki (krem nawilżający, balsam do ust)",
    //                     categories: { connect: [{ id: higienaCategory.id }] },
    //                 },
    //                 {
    //                     name: "Repelent na komary",
    //                     categories: { connect: [{ id: higienaCategory.id }] },
    //                 },

    //                 // Inne
    //                 {
    //                     name: "Dokumenty podróżne (paszport, dowód osobisty, bilety, ubezpieczenie)",
    //                     categories: { connect: [{ id: inneCategory.id }] },
    //                 },
    //                 {
    //                     name: "Książki/planszówki/karty do gry",
    //                     categories: { connect: [{ id: inneCategory.id }] },
    //                 },
    //                 {
    //                     name: "Notatnik i długopis",
    //                     categories: { connect: [{ id: inneCategory.id }] },
    //                 },
    //                 {
    //                     name: "Mała apteczka z podstawowymi lekarstwami",
    //                     categories: { connect: [{ id: inneCategory.id }] },
    //                 },
    //                 {
    //                     name: "Składany parasol w razie deszczu",
    //                     categories: { connect: [{ id: inneCategory.id }] },
    //                 },
    //             ],
    //         },
    //     },
    // })

    // CAMPING 2, 7, 14
    const summerTemplateType = await createOrGetType("summer", "Wakacje letnie")
    const campingList7 = await prisma.template.create({
        data: {
            name: "Kemping",
            settingColor: "bg-blue-400",
            start: false,
            listTypeId: summerTemplateType.id,
            tripLength: 7,
            elements: {
                create: [
                    // Odzież
                    {
                        name: "Koszulki",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Majtki",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Spodenki krótkie dżinsowe",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Spodenki dresowe",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Długie spodnie dżinsowe",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Zwykła bluza",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Czapka z daszkiem",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Piżama",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Bielizna termoaktywna",
                        categories: {
                            connect: [
                                { id: odziezCategory.id },
                                { id: trekking.id },
                            ],
                        },
                    },
                    {
                        name: "Klapki",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Skarpety niskie białe",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Skarpety wysokie kolorowe",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Kąpielówki",
                        categories: {
                            connect: [
                                { id: odziezCategory.id },
                                { id: plaza.id },
                            ],
                        },
                    },
                    {
                        name: "Spodenki krótkie do biegania",
                        categories: {
                            connect: [
                                { id: odziezCategory.id },
                                { id: trekking.id },
                            ],
                        },
                    },
                    {
                        name: "Spodnie długie trekkingowe",
                        categories: {
                            connect: [
                                { id: odziezCategory.id },
                                { id: trekking.id },
                            ],
                        },
                    },
                    {
                        name: "Bluza trekkingowa",
                        categories: {
                            connect: [
                                { id: odziezCategory.id },
                                { id: trekking.id },
                            ],
                        },
                    },
                    {
                        name: "Kurtka przeciwdeszczowa trekkingowa",
                        categories: {
                            connect: [
                                { id: odziezCategory.id },
                                { id: trekking.id },
                            ],
                        },
                    },
                    {
                        name: "Kapelusz",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Chusta na głowę czarna",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Buty na zmianę",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },

                    // Plaża i trekking
                    {
                        name: "Koce na plażę",
                        categories: { connect: [{ id: plaza.id }] },
                    },
                    {
                        name: "Filtr UV",
                        categories: { connect: [{ id: plaza.id }] },
                    },
                    {
                        name: "Plecak w góry",
                        categories: { connect: [{ id: trekking.id }] },
                    },
                    {
                        name: "Buty w góry",
                        categories: { connect: [{ id: trekking.id }] },
                    },

                    // Akcesoria i inne
                    {
                        name: "SUP (deska do paddleboardingu)",
                        categories: {
                            connect: [
                                { id: akcesoriaCategory.id },
                                { id: plaza.id },
                            ],
                        },
                    },
                    {
                        name: "Rozdzielacz USB-zapalniczka",
                        categories: {
                            connect: [
                                { id: akcesoriaCategory.id },
                                { id: campervanCategory.id },
                            ],
                        },
                    },
                    {
                        name: "Środek na komary",
                        categories: { connect: [{ id: akcesoriaCategory.id }] },
                    },
                    {
                        name: "Leki",
                        categories: {
                            connect: [
                                { id: akcesoriaCategory.id },
                                { id: lazienkaCategory.id },
                            ],
                        },
                    },
                    {
                        name: "Tabletki przeciwbólowe",
                        categories: {
                            connect: [
                                { id: akcesoriaCategory.id },
                                { id: lazienkaCategory.id },
                            ],
                        },
                    },
                    {
                        name: "Tabletki na biegunkę",
                        categories: {
                            connect: [
                                { id: akcesoriaCategory.id },
                                { id: lazienkaCategory.id },
                            ],
                        },
                    },
                    {
                        name: "Zapałki",
                        categories: { connect: [{ id: akcesoriaCategory.id }] },
                    },
                    {
                        name: "Zapalniczka",
                        categories: { connect: [{ id: akcesoriaCategory.id }] },
                    },
                    {
                        name: "Grill",
                        categories: { connect: [{ id: akcesoriaCategory.id }] },
                    },
                    {
                        name: "Worki na pranie",
                        categories: { connect: [{ id: akcesoriaCategory.id }] },
                    },
                    {
                        name: "Gotówka",
                        categories: {
                            connect: [
                                { id: akcesoriaCategory.id },
                                { id: dokumenty.id },
                            ],
                        },
                    },
                    {
                        name: "Dokumenty",
                        categories: {
                            connect: [
                                { id: akcesoriaCategory.id },
                                { id: dokumenty.id },
                            ],
                        },
                    },
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: akcesoriaCategory.id }] },
                    },
                    {
                        name: "Książka",
                        categories: { connect: [{ id: akcesoriaCategory.id }] },
                    },
                    {
                        name: "Karty do gry",
                        categories: { connect: [{ id: akcesoriaCategory.id }] },
                    },
                    {
                        name: "Taśma izolacyjna",
                        categories: {
                            connect: [
                                { id: akcesoriaCategory.id },
                                { id: campervanCategory.id },
                            ],
                        },
                    },
                    {
                        name: "Plastry opatrunkowe",
                        categories: {
                            connect: [
                                { id: akcesoriaCategory.id },
                                { id: lazienkaCategory.id },
                            ],
                        },
                    },
                    {
                        name: "Żel antybakteryjny",
                        categories: {
                            connect: [
                                { id: akcesoriaCategory.id },
                                { id: lazienkaCategory.id },
                            ],
                        },
                    },
                    {
                        name: "Nerka (saszetka biodrowa)",
                        categories: { connect: [{ id: akcesoriaCategory.id }] },
                    },

                    // Elektronika
                    {
                        name: "Aparat fotograficzny",
                        categories: {
                            connect: [{ id: technologiaCategory.id }],
                        },
                    },
                    {
                        name: "Ładowarka do telefonu + kabel",
                        categories: {
                            connect: [{ id: technologiaCategory.id }],
                        },
                    },
                    {
                        name: "Powerbank + kabel",
                        categories: {
                            connect: [{ id: technologiaCategory.id }],
                        },
                    },
                    {
                        name: "Gimball + ładowarka + kabel",
                        categories: {
                            connect: [{ id: technologiaCategory.id }],
                        },
                    },
                    {
                        name: "Słuchawki",
                        categories: {
                            connect: [{ id: technologiaCategory.id }],
                        },
                    },
                    {
                        name: "Głośnik",
                        categories: {
                            connect: [{ id: technologiaCategory.id }],
                        },
                    },
                    {
                        name: "Czołówka",
                        categories: {
                            connect: [
                                { id: technologiaCategory.id },
                                { id: trekking.id },
                            ],
                        },
                    },
                    {
                        name: "Baterie do czołówki",
                        categories: {
                            connect: [{ id: technologiaCategory.id }],
                        },
                    },

                    // Kuchnia
                    {
                        name: "Cebula",
                        categories: { connect: [{ id: kuchniaCategory.id }] },
                    },
                    {
                        name: "Olej",
                        categories: { connect: [{ id: kuchniaCategory.id }] },
                    },
                    {
                        name: "Sól",
                        categories: { connect: [{ id: kuchniaCategory.id }] },
                    },
                    {
                        name: "Korkociąg",
                        categories: { connect: [{ id: kuchniaCategory.id }] },
                    },
                    {
                        name: "Płyn do zmywania",
                        categories: { connect: [{ id: kuchniaCategory.id }] },
                    },
                    {
                        name: "Gąbka do zmywania",
                        categories: { connect: [{ id: kuchniaCategory.id }] },
                    },
                    {
                        name: "Szybkoschnący ręcznik kuchenny",
                        categories: { connect: [{ id: kuchniaCategory.id }] },
                    },
                    {
                        name: "Miska do mycia naczyń",
                        categories: { connect: [{ id: kuchniaCategory.id }] },
                    },
                    {
                        name: "Ręcznik papierowy",
                        categories: { connect: [{ id: kuchniaCategory.id }] },
                    },
                    {
                        name: "Noże",
                        categories: { connect: [{ id: kuchniaCategory.id }] },
                    },
                    {
                        name: "Sztućce",
                        categories: { connect: [{ id: kuchniaCategory.id }] },
                    },
                    {
                        name: "Miski",
                        categories: { connect: [{ id: kuchniaCategory.id }] },
                    },
                    {
                        name: "Talerze",
                        categories: { connect: [{ id: kuchniaCategory.id }] },
                    },
                    {
                        name: "Garnek",
                        categories: { connect: [{ id: kuchniaCategory.id }] },
                    },
                    {
                        name: "Patelnia",
                        categories: { connect: [{ id: kuchniaCategory.id }] },
                    },

                    // Łazienka
                    {
                        name: "Mydło / Żel pod prysznic",
                        categories: { connect: [{ id: lazienkaCategory.id }] },
                    },
                    {
                        name: "Szampon",
                        categories: { connect: [{ id: lazienkaCategory.id }] },
                    },
                    {
                        name: "Szczotka do zębów",
                        categories: { connect: [{ id: lazienkaCategory.id }] },
                    },
                    {
                        name: "Pasta do zębów",
                        categories: { connect: [{ id: lazienkaCategory.id }] },
                    },
                    {
                        name: "Nitka dentystyczna",
                        categories: { connect: [{ id: lazienkaCategory.id }] },
                    },
                    {
                        name: "Antyperspirant",
                        categories: { connect: [{ id: lazienkaCategory.id }] },
                    },
                    {
                        name: "Nożyczki do paznokci",
                        categories: { connect: [{ id: lazienkaCategory.id }] },
                    },
                    {
                        name: "Mokre chusteczki",
                        categories: { connect: [{ id: lazienkaCategory.id }] },
                    },
                    {
                        name: "Papier toaletowy",
                        categories: { connect: [{ id: lazienkaCategory.id }] },
                    },
                    {
                        name: "Ręcznik",
                        categories: { connect: [{ id: lazienkaCategory.id }] },
                    },

                    // Do campervana
                    {
                        name: "Poduszki",
                        categories: { connect: [{ id: campervanCategory.id }] },
                    },
                    {
                        name: "Prysznic",
                        categories: { connect: [{ id: campervanCategory.id }] },
                    },
                    {
                        name: "Butla z gazem",
                        categories: {
                            connect: [
                                { id: campervanCategory.id },
                                { id: trekking.id },
                            ],
                        },
                    },
                    {
                        name: "Palnik do butli",
                        categories: {
                            connect: [
                                { id: campervanCategory.id },
                                { id: trekking.id },
                            ],
                        },
                    },
                    // Spanie
                    {
                        name: "Kołdra lub koc do spania",
                        categories: {
                            connect: [
                                { id: spanieCategory.id },
                                { id: campervanCategory.id },
                            ],
                        },
                    },
                    {
                        name: "Lampka wisząca",
                        categories: {
                            connect: [
                                { id: spanieCategory.id },
                                { id: campervanCategory.id },
                            ],
                        },
                    },
                    {
                        name: "Namiot do prysznica",
                        categories: {
                            connect: [
                                { id: spanieCategory.id },
                                { id: campervanCategory.id },
                            ],
                        },
                    },

                    // Jedzenie
                    {
                        name: "Woda",
                        categories: { connect: [{ id: jedzenieCategory.id }] },
                    },
                    {
                        name: "Makarony",
                        categories: { connect: [{ id: jedzenieCategory.id }] },
                    },
                    {
                        name: "Gotowe sosy w proszku",
                        categories: { connect: [{ id: jedzenieCategory.id }] },
                    },
                    {
                        name: "Fasolka po bretońsku",
                        categories: { connect: [{ id: jedzenieCategory.id }] },
                    },
                    {
                        name: "Pieczywo",
                        categories: { connect: [{ id: jedzenieCategory.id }] },
                    },
                    {
                        name: "Banany",
                        categories: { connect: [{ id: jedzenieCategory.id }] },
                    },
                    {
                        name: "Konserwy",
                        categories: { connect: [{ id: jedzenieCategory.id }] },
                    },
                    {
                        name: "Zupki instant",
                        categories: { connect: [{ id: jedzenieCategory.id }] },
                    },
                    {
                        name: "Jajka",
                        categories: { connect: [{ id: jedzenieCategory.id }] },
                    },
                    {
                        name: "Płatki śniadaniowe",
                        categories: { connect: [{ id: jedzenieCategory.id }] },
                    },
                    {
                        name: "Mleko UHT",
                        categories: { connect: [{ id: jedzenieCategory.id }] },
                    },
                    {
                        name: "Kinderki",
                        categories: { connect: [{ id: jedzenieCategory.id }] },
                    },
                    {
                        name: "Kawa",
                        categories: { connect: [{ id: jedzenieCategory.id }] },
                    },
                    {
                        name: "Masło orzechowe",
                        categories: { connect: [{ id: jedzenieCategory.id }] },
                    },
                    {
                        name: "Ketchup",
                        categories: { connect: [{ id: jedzenieCategory.id }] },
                    },
                    {
                        name: "Przyprawy",
                        categories: { connect: [{ id: jedzenieCategory.id }] },
                    },
                    {
                        name: "Chrupki",
                        categories: { connect: [{ id: jedzenieCategory.id }] },
                    },
                    {
                        name: "Herbata",
                        categories: { connect: [{ id: jedzenieCategory.id }] },
                    },

                    // Jedzenie na trekking
                    {
                        name: "Batony",
                        categories: { connect: [{ id: jedzenieCategory.id }] },
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
            listTypeId: summerTemplateType.id,
            tripLength: 3,
            elements: {
                create: [
                    // Odzież
                    {
                        name: "Koszulki",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Majtki",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Zwykła bluza",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Nakrycie głowy",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Piżama",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Klapki",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Skarpety",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },

                    // Plaża i trekking
                    {
                        name: "Koce na plażę",
                        categories: { connect: [{ id: plaza.id }] },
                    },
                    {
                        name: "Filtr UV",
                        categories: { connect: [{ id: plaza.id }] },
                    },
                    {
                        name: "Plecak w góry",
                        categories: { connect: [{ id: trekking.id }] },
                    },

                    // Akcesoria i inne
                    {
                        name: "Rozdzielacz USB-zapalniczka",
                        categories: {
                            connect: [
                                { id: akcesoriaCategory.id },
                                { id: campervanCategory.id },
                            ],
                        },
                    },
                    {
                        name: "Środek na komary",
                        categories: { connect: [{ id: akcesoriaCategory.id }] },
                    },
                    {
                        name: "Worki na pranie",
                        categories: { connect: [{ id: akcesoriaCategory.id }] },
                    },
                    {
                        name: "Gotówka",
                        categories: {
                            connect: [
                                { id: akcesoriaCategory.id },
                                { id: dokumenty.id },
                            ],
                        },
                    },
                    {
                        name: "Dokumenty",
                        categories: {
                            connect: [
                                { id: akcesoriaCategory.id },
                                { id: dokumenty.id },
                            ],
                        },
                    },
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: akcesoriaCategory.id }] },
                    },
                    {
                        name: "Taśma izolacyjna",
                        categories: {
                            connect: [
                                { id: akcesoriaCategory.id },
                                { id: campervanCategory.id },
                            ],
                        },
                    },
                    {
                        name: "Plastry opatrunkowe",
                        categories: {
                            connect: [
                                { id: akcesoriaCategory.id },
                                { id: lazienkaCategory.id },
                            ],
                        },
                    },
                    {
                        name: "Żel antybakteryjny",
                        categories: {
                            connect: [
                                { id: akcesoriaCategory.id },
                                { id: lazienkaCategory.id },
                            ],
                        },
                    },

                    // Elektronika
                    {
                        name: "Aparat fotograficzny",
                        categories: {
                            connect: [{ id: technologiaCategory.id }],
                        },
                    },
                    {
                        name: "Ładowarka do telefonu + kabel",
                        categories: {
                            connect: [{ id: technologiaCategory.id }],
                        },
                    },
                    {
                        name: "Powerbank + kabel",
                        categories: {
                            connect: [{ id: technologiaCategory.id }],
                        },
                    },
                    {
                        name: "Gimball + ładowarka + kabel",
                        categories: {
                            connect: [{ id: technologiaCategory.id }],
                        },
                    },
                    {
                        name: "Słuchawki",
                        categories: {
                            connect: [{ id: technologiaCategory.id }],
                        },
                    },
                    {
                        name: "Głośnik",
                        categories: {
                            connect: [{ id: technologiaCategory.id }],
                        },
                    },
                    {
                        name: "Czołówka",
                        categories: {
                            connect: [
                                { id: technologiaCategory.id },
                                { id: trekking.id },
                            ],
                        },
                    },

                    // Kuchnia
                    {
                        name: "Cebula",
                        categories: { connect: [{ id: kuchniaCategory.id }] },
                    },
                    {
                        name: "Olej",
                        categories: { connect: [{ id: kuchniaCategory.id }] },
                    },
                    {
                        name: "Sól",
                        categories: { connect: [{ id: kuchniaCategory.id }] },
                    },
                    {
                        name: "Płyn do zmywania",
                        categories: { connect: [{ id: kuchniaCategory.id }] },
                    },
                    {
                        name: "Gąbka do zmywania",
                        categories: { connect: [{ id: kuchniaCategory.id }] },
                    },
                    {
                        name: "Szybkoschnący ręcznik kuchenny",
                        categories: { connect: [{ id: kuchniaCategory.id }] },
                    },
                    {
                        name: "Miska do mycia naczyń",
                        categories: { connect: [{ id: kuchniaCategory.id }] },
                    },
                    {
                        name: "Ręcznik papierowy",
                        categories: { connect: [{ id: kuchniaCategory.id }] },
                    },
                    {
                        name: "Noże",
                        categories: { connect: [{ id: kuchniaCategory.id }] },
                    },
                    {
                        name: "Sztućce",
                        categories: { connect: [{ id: kuchniaCategory.id }] },
                    },
                    {
                        name: "Miski",
                        categories: { connect: [{ id: kuchniaCategory.id }] },
                    },
                    {
                        name: "Talerze",
                        categories: { connect: [{ id: kuchniaCategory.id }] },
                    },
                    {
                        name: "Garnek lub patelnia",
                        categories: { connect: [{ id: kuchniaCategory.id }] },
                    },
                    {
                        name: "Kawiarka",
                        categories: { connect: [{ id: kuchniaCategory.id }] },
                    },

                    // Łazienka
                    {
                        name: "Mydło / Żel pod prysznic",
                        categories: { connect: [{ id: lazienkaCategory.id }] },
                    },
                    {
                        name: "Szampon",
                        categories: { connect: [{ id: lazienkaCategory.id }] },
                    },
                    {
                        name: "Szczotka do zębów",
                        categories: { connect: [{ id: lazienkaCategory.id }] },
                    },
                    {
                        name: "Pasta do zębów",
                        categories: { connect: [{ id: lazienkaCategory.id }] },
                    },
                    {
                        name: "Nitka dentystyczna",
                        categories: { connect: [{ id: lazienkaCategory.id }] },
                    },
                    {
                        name: "Antyperspirant",
                        categories: { connect: [{ id: lazienkaCategory.id }] },
                    },
                    {
                        name: "Papier toaletowy",
                        categories: { connect: [{ id: lazienkaCategory.id }] },
                    },

                    // Do campervana
                    {
                        name: "Poduszki",
                        categories: { connect: [{ id: campervanCategory.id }] },
                    },
                    {
                        name: "Prysznic",
                        categories: { connect: [{ id: campervanCategory.id }] },
                    },
                    {
                        name: "Butla z gazem",
                        categories: {
                            connect: [
                                { id: campervanCategory.id },
                                { id: trekking.id },
                                { id: kuchniaCategory.id },
                            ],
                        },
                    },
                    {
                        name: "Palnik do butli",
                        categories: {
                            connect: [
                                { id: campervanCategory.id },
                                { id: trekking.id },
                                { id: kuchniaCategory.id },
                            ],
                        },
                    },
                    // Spanie
                    {
                        name: "Kołdra lub koc do spania",
                        categories: {
                            connect: [
                                { id: spanieCategory.id },
                                { id: campervanCategory.id },
                            ],
                        },
                    },
                    {
                        name: "Lampka wisząca",
                        categories: {
                            connect: [
                                { id: spanieCategory.id },
                                { id: campervanCategory.id },
                            ],
                        },
                    },
                    {
                        name: "Namiot do prysznica",
                        categories: {
                            connect: [
                                { id: spanieCategory.id },
                                { id: campervanCategory.id },
                            ],
                        },
                    },

                    // Jedzenie
                    {
                        name: "Woda",
                        categories: { connect: [{ id: jedzenieCategory.id }] },
                    },
                    {
                        name: "Makarony",
                        categories: { connect: [{ id: jedzenieCategory.id }] },
                    },
                    {
                        name: "Gotowe sosy w proszku",
                        categories: { connect: [{ id: jedzenieCategory.id }] },
                    },
                    {
                        name: "Pieczywo",
                        categories: { connect: [{ id: jedzenieCategory.id }] },
                    },
                    {
                        name: "Konserwy",
                        categories: { connect: [{ id: jedzenieCategory.id }] },
                    },
                    {
                        name: "Zupki instant",
                        categories: { connect: [{ id: jedzenieCategory.id }] },
                    },
                    {
                        name: "Jajka",
                        categories: { connect: [{ id: jedzenieCategory.id }] },
                    },
                    {
                        name: "Płatki śniadaniowe",
                        categories: { connect: [{ id: jedzenieCategory.id }] },
                    },
                    {
                        name: "Mleko UHT",
                        categories: { connect: [{ id: jedzenieCategory.id }] },
                    },
                    {
                        name: "Kawa",
                        categories: { connect: [{ id: jedzenieCategory.id }] },
                    },
                    {
                        name: "Przyprawy",
                        categories: { connect: [{ id: jedzenieCategory.id }] },
                    },
                    {
                        name: "Herbata",
                        categories: { connect: [{ id: jedzenieCategory.id }] },
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
