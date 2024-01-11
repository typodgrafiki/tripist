// npx prisma db seed
// npm run seed:sample
// npm run seed:template

import { getCategory, getType } from "../../_helpers/seedHelpers"
import { Gender, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function winterSnowboard() {
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
    const snowboard = await getCategory("Snowboard")

    // Nazwy list
    const snowboardList = {
        name: "Snowboard",
        type: winterTemplateType,
    }

    // Snowboard

    const snowboardN = await prisma.template.create({
        data: {
            name: snowboardList.name,
            settingColor: "bg-blue-400",
            listTypeId: snowboardList.type,
            gender: Gender.MALE,
            elements: {
                create: [
                    {
                        name: "Worki na pranie",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Batony",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Mapa tras snowboardowych",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Plecak snowboardowy",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Pokrowiec na snowboard",
                        categories: { connect: [{ id: snowboard }] },
                    },
                    {
                        name: "Gogle snowboardowe",
                        categories: { connect: [{ id: snowboard }] },
                    },
                    {
                        name: "Kask snowboardowy",
                        categories: { connect: [{ id: snowboard }] },
                    },
                    {
                        name: "Wiązania snowboardowe",
                        categories: { connect: [{ id: snowboard }] },
                    },
                    {
                        name: "Buty snowboardowe",
                        categories: { connect: [{ id: snowboard }] },
                    },
                    {
                        name: "Snowboard",
                        categories: { connect: [{ id: snowboard }] },
                    },
                    {
                        name: "Książka / Czytnik typu Kindle",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Kamera sportowa",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Ładowarka do zegarka / smartwatcha",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Zegarek sportowy lub smartwatch",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Głośnik przenośny (bezprzewodowy)",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Powerbank + kabel",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Ładowarka do telefonu + kabel",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Dodatkowa bateria do aparatu (opcjonalnie)",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Dodatkowa karta do aparatu (opcjonalnie)",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Aparat fotograficzny",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Potwierdzenia rezerwacji",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Kopie ważnych dokumentów",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Paszport",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Prawo jazdy",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Dowód osobisty",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Ubezpieczenie podróżne",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Dokumenty",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Gotówka",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Tabletki na alergie",
                        categories: { connect: [{ id: apteczka }] },
                    },
                    {
                        name: "Żel antybakteryjny",
                        categories: { connect: [{ id: apteczka }] },
                    },
                    {
                        name: "Plastry opatrunkowe",
                        categories: { connect: [{ id: apteczka }] },
                    },
                    {
                        name: "Tabletki na ból brzucha",
                        categories: { connect: [{ id: apteczka }] },
                    },
                    {
                        name: "Tabletki na biegunkę",
                        categories: { connect: [{ id: apteczka }] },
                    },
                    {
                        name: "Tabletki przeciwbólowe",
                        categories: { connect: [{ id: apteczka }] },
                    },
                    {
                        name: "Leki",
                        categories: { connect: [{ id: apteczka }] },
                    },
                    {
                        name: "Klapki pod prysznic",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Ręcznik",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Balsam do ust",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Nożyczki do paznokci",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Dezodorant / Antyperspirant",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Nitka dentystyczna",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Pasta do zębów",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Szczotka do zębów",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Szczotka do włosów / Grzebień",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Zestaw do golenia lub depilacji",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Pasta / Żel do włosów",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Odżywka do włosów",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Szampon",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Mydło / Żel pod prysznic",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Maska na twarz snowboardowa",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Czapka",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Skarpety snowboardowe",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Rękawice snowboardowe",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Polar / Bluza snowboardowa",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Bielizna termiczna",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Spodnie termiczne",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Koszulka termiczna",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Spodnie snowboardowe",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Kurtka snowboardowa",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Szalik",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Czapka zimowa",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Rękawiczki",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Kurtka",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Bielizna (majtki)",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Skarpety",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Piżama",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Bluza / Sweter",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Spodnie dresowe",
                        categories: { connect: [{ id: odziez }] },
                    },

                    {
                        name: "Koszulki",
                        categories: { connect: [{ id: odziez }] },
                    },
                ],
            },
        },
    })
}
