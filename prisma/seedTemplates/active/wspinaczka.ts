// npx prisma db seed
// npm run seed:sample
// npm run seed:template

import { getCategory, getType } from "../../_helpers/seedHelpers"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function activeWspinaczka() {
    // Tworzenie typu
    const activeTemplateType = await getType("active", "Wakacje aktywne")

    // Tworzenie lub uzyskiwanie dostępu do kategorii
    const odziez = await getCategory("Odzież")
    const akcesoria = await getCategory("Akcesoria")
    const elektronika = await getCategory("Elektronika")
    const inne = await getCategory("Inne")
    const jedzenie = await getCategory("Jedzenie")
    const higiena = await getCategory("Łazienka / Higiena")
    const dokumenty = await getCategory("Dokumenty")
    const apteczka = await getCategory("Apteczka")
    const kosmetyczka = await getCategory("Kosmetyczka")
    const wspinaczka = await getCategory("Ścianka wspinaczkowa")

    // Nazwy list
    const wspinaczkaList = {
        name: "Wspinaczka",
        start: false,
        type: activeTemplateType,
    }

    // All Inclusive 14
    const wspinaczkaN = await prisma.template.create({
        data: {
            name: wspinaczkaList.name,
            settingColor: "bg-blue-400",
            start: wspinaczkaList.start,
            listTypeId: wspinaczkaList.type,
            tripLength: null,
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
                        name: "Czapka z daszkiem",
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
                        name: "Ubezpieczenie podróżne",
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
                        name: "Słuchawki",
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
                        name: "Ręcznik",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Klapki pod prysznic",
                        categories: { connect: [{ id: odziez }] },
                    },
                    // Jedzenie
                    {
                        name: "Batony",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    // Inne
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Worki na pranie",
                        categories: { connect: [{ id: inne }] },
                    },
                    // Elektronika
                    {
                        name: "Zegarek sportowy",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Czujnik pulsu na klatkę piersiową",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Bielizna termoaktywna",
                        categories: { connect: [{ id: odziez }] },
                    },

                    // ACTIVE wspinaczka
                    {
                        name: "Uprząż wspinaczkowa",
                        categories: { connect: [{ id: wspinaczka }] },
                    },
                    {
                        name: "Kask wspinaczkowy",
                        categories: { connect: [{ id: wspinaczka }] },
                    },
                    {
                        name: "Karabinki",
                        categories: { connect: [{ id: wspinaczka }] },
                    },
                    {
                        name: "Ekspresy",
                        categories: { connect: [{ id: wspinaczka }] },
                    },
                    {
                        name: "Lina wspinaczkowa",
                        categories: { connect: [{ id: wspinaczka }] },
                    },
                    {
                        name: "Przyrząd asekuracyjny",
                        categories: { connect: [{ id: wspinaczka }] },
                    },
                    {
                        name: "Buty wspinaczkowe",
                        categories: { connect: [{ id: wspinaczka }] },
                    },
                    {
                        name: "Magnesja",
                        categories: { connect: [{ id: wspinaczka }] },
                    },
                    {
                        name: "Taśmy",
                        categories: { connect: [{ id: wspinaczka }] },
                    },
                    {
                        name: "Pętle",
                        categories: { connect: [{ id: wspinaczka }] },
                    },
                    {
                        name: "Przyrządy do zjazdów",
                        categories: { connect: [{ id: wspinaczka }] },
                    },
                    {
                        name: "Koc ratunkowy",
                        categories: { connect: [{ id: apteczka }] },
                    },
                    {
                        name: "Elastyczne spodnie",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Przewiewne koszulki",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Kurtka przeciwdeszczowa/wiatrówka",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Plecak wspinaczkowy",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Bidon",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Bukłak",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Energetyczne przekąski",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Środki do oczyszczania wody",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Mapy wspinaczkowe",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Przewodniki wspinaczkowe",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Plastry wspinaczkowe",
                        categories: { connect: [{ id: wspinaczka }] },
                    },
                ],
            },
        },
    })
}
