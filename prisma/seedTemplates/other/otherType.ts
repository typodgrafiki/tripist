// npx prisma db seed
// npm run seed:sample
// npm run seed:template

import { getCategory, getType } from "../../_helpers/seedHelpers"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function otherType() {
    const inneType = await getType("other", "Inne")

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
    const biznes = await getCategory("Biznes")

    const businessTripList = await prisma.template.create({
        data: {
            name: "Podróż biznesowa",
            settingColor: "bg-violet-400",
            listTypeId: inneType,
            tripLength: 3,
            elements: {
                create: [
                    {
                        name: "Koszulki",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Spodnie",
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
                        name: "Paszport",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Kopie ważnych dokumentów",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Bilety lotnicze",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Potwierdzenia rezerwacji",
                        categories: { connect: [{ id: dokumenty }] },
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
                    // Akcesoria
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Składany parasol",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    // Biznes Odzież
                    {
                        name: "Elegancki strój",
                        categories: {
                            connect: [{ id: odziez }, { id: biznes }],
                        },
                    },
                    {
                        name: "Koszule",
                        categories: {
                            connect: [{ id: odziez }, { id: biznes }],
                        },
                    },
                    {
                        name: "Buty eleganckie",
                        categories: {
                            connect: [{ id: odziez }, { id: biznes }],
                        },
                    },
                    {
                        name: "Pasek do spodni",
                        categories: {
                            connect: [{ id: akcesoria }, { id: biznes }],
                        },
                    },
                    {
                        name: "Płaszcz lub lekka kurtka",
                        categories: {
                            connect: [{ id: odziez }, { id: biznes }],
                        },
                    },
                    {
                        name: "Laptop",
                        categories: {
                            connect: [{ id: elektronika }, { id: biznes }],
                        },
                    },
                    {
                        name: "Adapter do gniazdek",
                        categories: {
                            connect: [{ id: elektronika }, { id: biznes }],
                        },
                    },
                    {
                        name: "Wizytówki",
                        categories: { connect: [{ id: biznes }] },
                    },
                    {
                        name: "Telefon komórkowy i ładowarka",
                        categories: {
                            connect: [{ id: elektronika }],
                        },
                    },
                    {
                        name: "Słuchawki",
                        categories: {
                            connect: [{ id: elektronika }],
                        },
                    },
                    {
                        name: "Notatnik i długopisy",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Mała torba na zakupy lub plecak",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Przekąski i butelka na wodę",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Książka lub e-czytnik",
                        categories: { connect: [{ id: inne }] },
                    },
                ],
            },
        },
    })
}
