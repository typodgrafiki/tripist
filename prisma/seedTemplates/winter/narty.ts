// npx prisma db seed
// npm run seed:sample
// npm run seed:template

import { getCategory, getType } from "../../_helpers/seedHelpers"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function winterNarty() {
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
    const narty = await getCategory("Narty")

    // Nazwy list
    const nartyList = {
        name: "Narty",
        start: false,
        type: winterTemplateType,
    }

    // Narty

    const nartyN = await prisma.template.create({
        data: {
            name: nartyList.name,
            settingColor: "bg-blue-400",
            start: nartyList.start,
            listTypeId: nartyList.type,
            tripLength: null,
            elements: {
                create: [
                    {
                        name: "Batony energetyczne",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Worki na pranie",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Mapa tras narciarskich",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Plecak narciarski",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Wosk do nart",
                        categories: { connect: [{ id: narty }] },
                    },
                    {
                        name: "Kask narciarski",
                        categories: { connect: [{ id: narty }] },
                    },
                    {
                        name: "Gogle narciarskie",
                        categories: { connect: [{ id: narty }] },
                    },
                    {
                        name: "Kijki narciarskie",
                        categories: { connect: [{ id: narty }] },
                    },
                    {
                        name: "Buty narciarskie",
                        categories: { connect: [{ id: narty }] },
                    },
                    {
                        name: "Narty i wiązania narciarskie",
                        categories: { connect: [{ id: narty }] },
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
                        name: "Zegarek sportowy",
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
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Maska na twarz narciarska",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Komin narciarski",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Szalik narciarski",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Czapka narciarska",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Rękawice narciarskie",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Skarpety narciarskie",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Polar / Bluza narciarska",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Koszulka termiczna",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Spodnie termiczne",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Bielizna termiczna",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Spodnie narciarskie",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Kurtka narciarska",
                        categories: { connect: [{ id: odziez }] },
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
                        name: "Spodnie",
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
