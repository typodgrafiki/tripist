// npx prisma db seed
// npm run seed:sample
// npm run seed:template

import { getCategory, getType } from "../../_helpers/seedHelpers"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function summerAllInclusive() {
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
    const basen = await getCategory("Basen")
    const allinclusive = await getCategory("All Inclusive")

    // Nazwy list
    const allInclusiveList = {
        name: "All inclusive",
        start: false,
        type: summerTemplateType,
    }

    // All Inclusive 14
    const allinclusive14 = await prisma.template.create({
        data: {
            name: allInclusiveList.name,
            settingColor: "bg-blue-400",
            start: allInclusiveList.start,
            listTypeId: allInclusiveList.type,
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
                        name: "Spodnie długie",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Bluza /Sweter",
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
                        name: "Buty na zmianę",
                        categories: { connect: [{ id: obuwie }] },
                    },
                    {
                        name: "Lekkie, przewiewne ubrania",
                        categories: {
                            connect: [{ id: odziez }, { id: allinclusive }],
                        },
                    },
                    // All-inclusive
                    {
                        name: "Strój kąpielowy",
                        categories: {
                            connect: [{ id: basen }, { id: odziez }],
                        },
                    },
                    {
                        name: "Klapki basenowe",
                        categories: {
                            connect: [{ id: basen }, { id: obuwie }],
                        },
                    },
                    {
                        name: "Adapter do gniazdka",
                        categories: {
                            connect: [{ id: elektronika }],
                        },
                    },
                    {
                        name: "Przenośny wentylator",
                        categories: {
                            connect: [{ id: elektronika }],
                        },
                    },
                    {
                        name: "Dmuchany materac lub koło",
                        categories: {
                            connect: [{ id: plaza }],
                        },
                    },
                    {
                        name: "Przewodnik po okolicy",
                        categories: { connect: [{ id: allinclusive }] },
                    },
                    {
                        name: "Zabezpieczenie bagażu",
                        categories: {
                            connect: [{ id: allinclusive }],
                        },
                    },
                    {
                        name: "Krem z filtrem UV",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Balsam po opalaniu",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Pływający pojemnik na klucze i telefon",
                        categories: { connect: [{ id: basen }] },
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
                        name: "Słuchawki",
                        categories: {
                            connect: [{ id: elektronika }],
                        },
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
                        name: "Klapki pod prysznic",
                        categories: {
                            connect: [{ id: higiena }, { id: obuwie }],
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
                ],
            },
        },
    })
}
