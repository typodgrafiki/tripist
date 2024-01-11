// npx prisma db seed
// npm run seed:sample
// npm run seed:template

import { getCategory, getType } from "../../_helpers/seedHelpers"
import { Gender, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function activeBieg() {
    // Tworzenie typu
    const activeTemplateType = await getType("active", "Wakacje aktywne")

    // Tworzenie lub uzyskiwanie dostępu do kategorii
    const odziez = await getCategory("Odzież")
    const obuwie = await getCategory("Obuwie")
    const akcesoria = await getCategory("Akcesoria")
    const elektronika = await getCategory("Elektronika")
    const inne = await getCategory("Inne")
    const jedzenie = await getCategory("Jedzenie")
    const higiena = await getCategory("Łazienka / Higiena")
    const dokumenty = await getCategory("Dokumenty")
    const apteczka = await getCategory("Apteczka")
    const kosmetyczka = await getCategory("Kosmetyczka")

    // Nazwy list
    const biegList = {
        name: "Biegowe",
        type: activeTemplateType,
    }

    const bieg_MALE = await prisma.template.create({
        data: {
            name: biegList.name,
            settingColor: "bg-blue-400",
            listTypeId: biegList.type,
            gender: Gender.MALE,
            elements: {
                create: [
                    {
                        name: "Worki na pranie",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Mapy i plany tras biegowych",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Środki przeciw otarciom",
                        categories: { connect: [{ id: apteczka }] },
                    },
                    {
                        name: "Słuchawki bezprzewodowe",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Żele energetyczne",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Batony energetyczne",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Izotonik w proszku",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Woda",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Opaski kompresyjne",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Plecak biegowy",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Pasek na numer startowy",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Kurtka biegowa",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Rękawiczki biegowe (cienkie)",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Opaska na głowę",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Czapka biegowa",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Skarpety do biegania",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Bielizna sportowa",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Legginsy biegowe",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Spodenki biegowe",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Koszulki biegowe",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Buty do biegania",
                        categories: { connect: [{ id: obuwie }] },
                    },
                    {
                        name: "Statyw do smartfona",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Ładowarka do zegarka / smartwatcha",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Czujnik pulsu na klatkę piersiową",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Zegarek sportowy lub smartwatch",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Książka / Czytnik typu Kindle",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Słuchawki",
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
                        name: "Aparat fotograficzny",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Potwierdzenia rezerwacji",
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
                        name: "Nożyczki",
                        categories: { connect: [{ id: apteczka }] },
                    },
                    {
                        name: "Bandaż",
                        categories: { connect: [{ id: apteczka }] },
                    },
                    {
                        name: "Środek na komary i kleszcze",
                        categories: { connect: [{ id: apteczka }] },
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
                        name: "Czapka z daszkiem",
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
                        name: "Spodnie długie",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Spodenki krótkie",
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

    const bieg_FEMALE = await prisma.template.create({
        data: {
            name: biegList.name,
            settingColor: "bg-blue-400",
            listTypeId: biegList.type,
            gender: Gender.FEMALE,
            elements: {
                create: [
                    {
                        name: "Worki na pranie",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Mapy i plany tras biegowych",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Środki przeciw otarciom",
                        categories: { connect: [{ id: apteczka }] },
                    },
                    {
                        name: "Słuchawki bezprzewodowe",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Żele energetyczne",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Batony energetyczne",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Izotonik w proszku",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Woda",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Opaski kompresyjne",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Plecak biegowy",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Pasek na numer startowy",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Kurtka biegowa",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Rękawiczki biegowe (cienkie)",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Opaska na głowę",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Czapka biegowa",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Skarpety do biegania",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Bielizna sportowa",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Legginsy biegowe",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Spodenki biegowe",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Koszulki biegowe",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Buty do biegania",
                        categories: { connect: [{ id: obuwie }] },
                    },
                    {
                        name: "Statyw do smartfona",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Ładowarka do zegarka / smartwatcha",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Czujnik pulsu na klatkę piersiową",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Zegarek sportowy lub smartwatch",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Książka / Czytnik typu Kindle",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Słuchawki",
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
                        name: "Aparat fotograficzny",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Potwierdzenia rezerwacji",
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
                        name: "Nożyczki",
                        categories: { connect: [{ id: apteczka }] },
                    },
                    {
                        name: "Bandaż",
                        categories: { connect: [{ id: apteczka }] },
                    },
                    {
                        name: "Środek na komary i kleszcze",
                        categories: { connect: [{ id: apteczka }] },
                    },
                    {
                        name: "Tabletki antykoncepcyjne",
                        categories: { connect: [{ id: apteczka }] },
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
                        name: "Prostownica / lokówka",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Suszarka do włosów",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Chusteczki higieniczne do intymnej higieny",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Tampony lub podpaski",
                        categories: { connect: [{ id: higiena }] },
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
                        name: "Biżuteria (kolczyki, bransoletki)",
                        categories: { connect: [{ id: inne }] },
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
                        name: "Perfumy w podróżnym formacie",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Zestaw pędzli do makijażu",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Eyeliner",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Korektor",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Cienie do powiek",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Tusz do rzęs",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Podkład / BB cream",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Płyn do demakijażu",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Waciki i patyczki kosmetyczne",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Gumki do włosów",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Pilnik do paznokci",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    // {
                    //     name: "Pasta / Żel do włosów",
                    //     categories: { connect: [{ id: kosmetyczka }] },
                    // },
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
                        name: "Sukienka",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Opaska na włosy",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Rajstopy / pończochy",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Biustonosze (w tym sportowy)",
                        categories: { connect: [{ id: odziez }] },
                    },
                    // {
                    //     name: "Czapka z daszkiem",
                    //     categories: { connect: [{ id: odziez }] },
                    // },
                    {
                        name: "Bielizna",
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
                        name: "Spodnie długie",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Spodenki krótkie",
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
