// npx prisma db seed
// npm run seed:sample
// npm run seed:template

import { createOrGetCategory, createOrGetType } from "../seedHelpers"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {

    const inneType = await createOrGetType("other", "Inne")

    // Tworzenie lub uzyskiwanie dostępu do kategorii
    const odziez = await createOrGetCategory("Odzież")
    const akcesoria = await createOrGetCategory("Akcesoria")
    const elektronika = await createOrGetCategory("Elektronika")
    const inne = await createOrGetCategory("Inne")
    const jedzenie = await createOrGetCategory("Jedzenie")
    const kuchniaCategory = await createOrGetCategory("Kuchnia")
    const higiena = await createOrGetCategory("Łazienka / Higiena")
    const campervanCategory = await createOrGetCategory("Camping")
    const plaza = await createOrGetCategory("Plaża")
    const trekking = await createOrGetCategory("Trekking")
    const dokumenty = await createOrGetCategory("Dokumenty")
    const biznes = await createOrGetCategory("Biznes")
    const apteczka = await createOrGetCategory("Apteczka")
    const kosmetyczka = await createOrGetCategory("Kosmetyczka")

    const businessTripList = await prisma.template.create({
        data: {
            name: "Podróż biznesowa",
            settingColor: "bg-violet-400",
            start: false,
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
                        categories: { connect: [{ id: odziez.id }] },
                    },
                    {
                        name: "Skarpety",
                        categories: { connect: [{ id: odziez.id }] },
                    },
                    {
                        name: "Bielizna (majtki)",
                        categories: { connect: [{ id: odziez.id }] },
                    },
                    // Dokumenty
                    {
                        name: "Gotówka",
                        categories: { connect: [{ id: dokumenty.id }]},
                    },
                    {
                        name: "Dokumenty",
                        categories: { connect: [{ id: dokumenty.id }]},
                    },
                    {
                        name: "Dowód osobisty",
                        categories: { connect: [{ id: dokumenty.id }]},
                    },
                    {
                        name: "Paszport",
                        categories: { connect: [{ id: dokumenty.id }]},
                    },
                    {
                        name: "Kopie ważnych dokumentów",
                        categories: { connect: [{ id: dokumenty.id }, {id: biznes.id}] },
                    },
                    {
                        name: "Bilety lotnicze",
                        categories: { connect: [{ id: dokumenty.id }, {id: biznes.id}] },
                    },
                    {
                        name: "Potwierdzenia rezerwacji",
                        categories: { connect: [{ id: dokumenty.id }, {id: biznes.id}] },
                    },
                    // Apteczka
                    {
                        name: "Leki",
                        categories: {connect: [{ id: apteczka.id }]},
                    },
                    {
                        name: "Tabletki przeciwbólowe",
                        categories: {connect: [{ id: apteczka.id }]},
                    },
                    {
                        name: "Tabletki na biegunkę",
                        categories: {connect: [{ id: apteczka.id }]},
                    },
                    {
                        name: "Tabletki na ból brzucha",
                        categories: {connect: [{ id: apteczka.id }]},
                    },
                    {
                        name: "Tabletki na alergie",
                        categories: {connect: [{ id: apteczka.id }]},
                    },
                    // Kosmetyczka
                    {
                        name: "Mydło / Żel pod prysznic",
                        categories: { connect: [{ id: kosmetyczka.id }] },
                    },
                    {
                        name: "Szampon",
                        categories: { connect: [{ id: kosmetyczka.id }] },
                    },
                    {
                        name: "Odżywka do włosów",
                        categories: { connect: [{ id: kosmetyczka.id }] },
                    },
                    {
                        name: "Pasta / Żel do włosów",
                        categories: { connect: [{ id: kosmetyczka.id }] },
                    },
                    {
                        name: "Zestaw do golenia lub depilacji",
                        categories: { connect: [{ id: kosmetyczka.id }] },
                    },
                    {
                        name: "Szczotka do włosów / Grzebień",
                        categories: { connect: [{ id: kosmetyczka.id }] },
                    },
                    {
                        name: "Szczotka do zębów",
                        categories: { connect: [{ id: kosmetyczka.id }] },
                    },
                    {
                        name: "Pasta do zębów",
                        categories: { connect: [{ id: kosmetyczka.id }] },
                    },
                    {
                        name: "Nitka dentystyczna",
                        categories: { connect: [{ id: kosmetyczka.id }] },
                    },
                    {
                        name: "Dezodorant / Antyperspirant",
                        categories: { connect: [{ id: kosmetyczka.id }] },
                    },
                    {
                        name: "Nożyczki do paznokci",
                        categories: { connect: [{ id: kosmetyczka.id }] },
                    },
                    // Łazienka / Higiena
                    {
                        name: "Ręcznik",
                        categories: { connect: [{ id: higiena.id }] },
                    },
                    {
                        name: "Klapki pod prysznic",
                        categories: { connect: [{ id: higiena.id }, { id: odziez.id }] },
                    },
                    // Akcesoria
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: akcesoria.id }] },
                    },
                    {
                        name: "Składany parasol",
                        categories: { connect: [{ id: akcesoria.id }] },
                    },
                    // Biznes Odzież
                    {
                        name: "Elegancki strój",
                        categories: { connect: [{ id: odziez.id }, {id: biznes.id}] },
                    },
                    {
                        name: "Koszule",
                        categories: { connect: [{ id: odziez.id }, {id: biznes.id}] },
                    },
                    {
                        name: "Buty eleganckie",
                        categories: { connect: [{ id: odziez.id }, {id: biznes.id}] },
                    },
                    {
                        name: "Pasek do spodni",
                        categories: { connect: [{ id: akcesoria.id }, {id: biznes.id}] },
                    },
                    {
                        name: "Płaszcz lub lekka kurtka",
                        categories: { connect: [{ id: odziez.id }, {id: biznes.id}] },
                    },
                    {
                        name: "Laptop",
                        categories: { connect: [{ id: elektronika.id }, {id: biznes.id}] },
                    },
                    {
                        name: "Adapter do gniazdek",
                        categories: {connect: [{ id: elektronika.id }, {id: biznes.id}]},
                    },
                    {
                        name: "Wizytówki",
                        categories: { connect: [{ id: biznes.id }] },
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