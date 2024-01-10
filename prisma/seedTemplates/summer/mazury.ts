// npx prisma db seed
// npm run seed:sample
// npm run seed:template

import { getCategory, getType } from "../../_helpers/seedHelpers"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function summerMazury() {
    // Tworzenie typu
    const summerTemplateType = await getType("summer", "Wakacje letnie")

    // Tworzenie lub uzyskiwanie dostępu do kategorii
    const odziez = await getCategory("Odzież")
    const obuwie = await getCategory("Obuwie")
    const akcesoria = await getCategory("Akcesoria")
    const elektronika = await getCategory("Elektronika")
    const inne = await getCategory("Inne")
    const higiena = await getCategory("Łazienka / Higiena")
    const jedzenie = await getCategory("Jedzenie")
    const dokumenty = await getCategory("Dokumenty")
    const apteczka = await getCategory("Apteczka")
    const kosmetyczka = await getCategory("Kosmetyczka")
    const jezioro = await getCategory("Jezioro")

    // Nazwy list
    const mazuryList = {
        name: "Mazury",
        start: false,
        type: summerTemplateType,
    }

    // Citybreak 3, 10

    const mazury10 = await prisma.template.create({
        data: {
            name: mazuryList.name,
            settingColor: "bg-blue-400",
            start: mazuryList.start,
            listTypeId: mazuryList.type,
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
                        name: "Spodnie dresowe / długie ",
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
                        name: "Buty na zmianę",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Lekkie buty trekkingowe",
                        categories: { connect: [{ id: obuwie }] },
                    },
                    {
                        name: "Leżak",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Krem z filtrem UV",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Strój kąpielowy",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Sandały/klapki plażowe",
                        categories: { connect: [{ id: obuwie }] },
                    },
                    {
                        name: "Torba plażowa",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Balsam po opalaniu",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Sprzęt do nurkowania (maska, rurka)",
                        categories: { connect: [{ id: jezioro }] },
                    },
                    {
                        name: "Dmuchany materac lub koło",
                        categories: { connect: [{ id: jezioro }] },
                    },
                    {
                        name: "Mapa lub przewodnik",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Ciepłe ubrania na wieczór",
                        categories: { connect: [{ id: odziez }] },
                    },
                    // Jezioro
                    {
                        name: "SUP",
                        categories: { connect: [{ id: jezioro }] },
                    },
                    {
                        name: "Wiosło",
                        categories: { connect: [{ id: jezioro }] },
                    },
                    {
                        name: "Butelka z wodą",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Pływający pojemnik na klucze i telefon",
                        categories: { connect: [{ id: jezioro }] },
                    },
                    {
                        name: "Przeciwdeszczowa odzież",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Plecak na wycieczki",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Latarka lub czołówka",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Termos lub bidon",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Sprzęt do pływania",
                        categories: { connect: [{ id: jezioro }] },
                    },
                    {
                        name: "Sprzęt wędkarski",
                        categories: { connect: [{ id: jezioro }] },
                    },
                    {
                        name: "Rowery",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Kijki do nordic walking",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Kajak",
                        categories: { connect: [{ id: jezioro }] },
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
                        name: "Prawo jazdy",
                        categories: { connect: [{ id: dokumenty }] },
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
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Głośnik przenośny (bezprzewodowy)",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Baterie do czołówki",
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
                        name: "Mokre chusteczki",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Papier toaletowy",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Klapki pod prysznic",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Planszówki",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Karty do gry",
                        categories: { connect: [{ id: inne }] },
                    },
                ],
            },
        },
    })

    const mazury3 = await prisma.template.create({
        data: {
            name: mazuryList.name,
            settingColor: "bg-blue-400",
            start: mazuryList.start,
            listTypeId: mazuryList.type,
            tripLength: 3,
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
                        name: "Spodnie dresowe / długie ",
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
                        name: "Lekkie buty trekkingowe",
                        categories: { connect: [{ id: obuwie }] },
                    },
                    {
                        name: "Koc",
                        categories: { connect: [{ id: jezioro }] },
                    },
                    {
                        name: "Krem z filtrem UV",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Strój kąpielowy",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Sandały/klapki plażowe",
                        categories: { connect: [{ id: jezioro }] },
                    },
                    {
                        name: "Torba plażowa",
                        categories: { connect: [{ id: jezioro }] },
                    },
                    {
                        name: "Balsam po opalaniu",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Ciepłe ubrania na wieczór",
                        categories: { connect: [{ id: odziez }] },
                    },
                    // Jezioro
                    {
                        name: "SUP",
                        categories: { connect: [{ id: jezioro }] },
                    },
                    {
                        name: "Wiosło",
                        categories: { connect: [{ id: jezioro }] },
                    },
                    {
                        name: "Butelka z wodą",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Pływający pojemnik na klucze i telefon",
                        categories: { connect: [{ id: jezioro }] },
                    },
                    {
                        name: "Plecak na wycieczki",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Latarka lub czołówka",
                        categories: { connect: [{ id: elektronika }] },
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
                        name: "Prawo jazdy",
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

                    // Łazienka / Higiena
                    {
                        name: "Ręcznik",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Klapki pod prysznic",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Planszówki",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Karty do gry",
                        categories: { connect: [{ id: inne }] },
                    },
                ],
            },
        },
    })
}
