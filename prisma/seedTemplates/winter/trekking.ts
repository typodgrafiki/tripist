// npx prisma db seed
// npm run seed:sample
// npm run seed:template

import { getCategory, getType } from "../../_helpers/seedHelpers"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function winterTrekking() {
    // Tworzenie typu
    const winterTemplateType = await getType("winter", "Wakacje zimowe")

    // Tworzenie lub uzyskiwanie dostępu do kategorii
    const odziez = await getCategory("Odzież")
    const akcesoria = await getCategory("Akcesoria")
    const elektronika = await getCategory("Elektronika")
    const inne = await getCategory("Inne")
    const higiena = await getCategory("Łazienka / Higiena")
    const jedzenie = await getCategory("Jedzenie")
    const dokumenty = await getCategory("Dokumenty")
    const apteczka = await getCategory("Apteczka")
    const kosmetyczka = await getCategory("Kosmetyczka")
    const trekking = await getCategory("Trekking")

    // Nazwy list
    const trekkingList = {
        name: "Trekking w górach",
        start: false,
        type: winterTemplateType,
    }

    // Trekking 3, 7

    const trekkingN = await prisma.template.create({
        data: {
            name: trekkingList.name,
            settingColor: "bg-blue-400",
            start: trekkingList.start,
            listTypeId: trekkingList.type,
            tripLength: null,
            elements: {
                create: [
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
                        name: "Bielizna termoaktywna",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Spodnie długie trekkingowe",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Kamizelka trekkingowa",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Bluza trekkingowa",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Kurtka trekkingowa",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Buty trekkingowe",
                        categories: { connect: [{ id: trekking }] },
                    },
                    {
                        name: "Kijki trekkingowe",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Mapa lub przewodnik",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Plecak trekkingowy",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: akcesoria }] },
                    },

                    // Trekking + zima
                    {
                        name: "Raki",
                        categories: { connect: [{ id: trekking }] },
                    },
                    {
                        name: "Raczki",
                        categories: { connect: [{ id: trekking }] },
                    },
                    {
                        name: "Stuptuty",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Rękawice grube 2x",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Rękawice cienkie 2x",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Gogle narciarskie",
                        categories: { connect: [{ id: trekking }] },
                    },
                    {
                        name: "Czapka zimowa gruba",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Czapka zimowa cienka",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Komin polarowy (na szyję)",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Tłusty krem do twarzy",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Kurtka puchowa (opcjonalnie)",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Termos z ciepłą herbatą",
                        categories: { connect: [{ id: inne }] },
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
                        name: "Czołówka (latarka)",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Baterie do czołówki",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Książka / Czytnik typu Kindle",
                        categories: { connect: [{ id: inne }] },
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
                        name: "Mokre chusteczki",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Papier toaletowy",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Ręcznik",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Klapki pod prysznic",
                        categories: { connect: [{ id: higiena }] },
                    },

                    // Jedzenie
                    {
                        name: "Woda",
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
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Worki na pranie",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Karty do gry",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Zegarek sportowy",
                        categories: { connect: [{ id: elektronika }] },
                    },
                ],
            },
        },
    })
}
