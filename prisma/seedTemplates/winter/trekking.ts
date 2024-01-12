import { getCategory, getType } from "../../_helpers/seedHelpers"
import { Gender, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function winterTrekking() {
    // Tworzenie typu
    const winterTemplateType = await getType("winter", "Wakacje zimowe")

    // Tworzenie lub uzyskiwanie dostępu do kategorii
    const odziez = await getCategory("Odzież")
    const akcesoria = await getCategory("Akcesoria")
    const elektronika = await getCategory("Elektronika")
    const inne = await getCategory("Inne")
    const higiena = await getCategory("Higiena")
    const jedzenie = await getCategory("Jedzenie")
    const dokumenty = await getCategory("Dokumenty")
    const apteczka = await getCategory("Apteczka")
    const kosmetyczka = await getCategory("Kosmetyczka")
    const trekking = await getCategory("Trekking")

    // Nazwy list
    const trekkingList = {
        name: "Trekking w górach",
        type: winterTemplateType,
    }

    const trekking_MALE = await prisma.template.create({
        data: {
            name: trekkingList.name,
            settingColor: "bg-blue-400",
            listTypeId: trekkingList.type,
            gender: Gender.MALE,
            elements: {
                create: [
                    {
                        name: "Ładowarka do zegarka / smartwatcha",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Zegarek sportowy lub smartwatch",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Karty do gry",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Worki na pranie",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Batony",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Pasztet lub konserwa",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Pieczywo",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Woda",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Plecak trekkingowy",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Mapa lub przewodnik",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Kijki trekkingowe",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Termos z ciepłą herbatą",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Gogle narciarskie",
                        categories: { connect: [{ id: trekking }] },
                    },
                    {
                        name: "Stuptuty",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Raczki",
                        categories: { connect: [{ id: trekking }] },
                    },
                    {
                        name: "Raki",
                        categories: { connect: [{ id: trekking }] },
                    },
                    {
                        name: "Książka / Czytnik typu Kindle",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Statyw do smartfona",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Baterie do czołówki",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Czołówka (latarka)",
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
                        name: "Papier toaletowy",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Mokre chusteczki",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Tłusty krem do twarzy",
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
                        name: "Kurtka puchowa (opcjonalnie)",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Komin polarowy (na szyję)",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Czapka zimowa cienka",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Czapka zimowa gruba",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Rękawice cienkie 2x",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Rękawice grube 2x",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Buty trekkingowe",
                        categories: { connect: [{ id: trekking }] },
                    },
                    {
                        name: "Kurtka trekkingowa",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Bluza trekkingowa",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Kamizelka trekkingowa",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Spodnie długie trekkingowe",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Bielizna termoaktywna",
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
                        name: "Bluza",
                        categories: { connect: [{ id: odziez }] },
                    },
                ],
            },
        },
    })

    const trekking_FEMALE = await prisma.template.create({
        data: {
            name: trekkingList.name,
            settingColor: "bg-blue-400",
            listTypeId: trekkingList.type,
            gender: Gender.FEMALE,
            elements: {
                create: [
                    {
                        name: "Ładowarka do zegarka / smartwatcha",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Zegarek sportowy lub smartwatch",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Karty do gry",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Worki na pranie",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Batony",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Pasztet lub konserwa",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Pieczywo",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Woda",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Plecak trekkingowy",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Mapa lub przewodnik",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Kijki trekkingowe",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Termos z ciepłą herbatą",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Gogle narciarskie",
                        categories: { connect: [{ id: trekking }] },
                    },
                    {
                        name: "Stuptuty",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Raczki",
                        categories: { connect: [{ id: trekking }] },
                    },
                    {
                        name: "Raki",
                        categories: { connect: [{ id: trekking }] },
                    },
                    {
                        name: "Książka / Czytnik typu Kindle",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Statyw do smartfona",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Baterie do czołówki",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Czołówka (latarka)",
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
                        name: "Papier toaletowy",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Mokre chusteczki",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Biżuteria (kolczyki, bransoletki)",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Perfumy w podróżnym formacie",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Kosmetyki do makijażu",
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
                    {
                        name: "Tłusty krem do twarzy",
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
                        name: "Kurtka puchowa (opcjonalnie)",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Komin polarowy (na szyję)",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Czapka zimowa cienka",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Czapka zimowa gruba",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Rękawice cienkie 2x",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Rękawice grube 2x",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Buty trekkingowe",
                        categories: { connect: [{ id: trekking }] },
                    },
                    {
                        name: "Kurtka trekkingowa",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Bluza trekkingowa",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Kamizelka trekkingowa",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Spodnie długie trekkingowe",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Bielizna termoaktywna",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Biustonosze (w tym sportowy)",
                        categories: { connect: [{ id: odziez }] },
                    },
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
                        name: "Bluza",
                        categories: { connect: [{ id: odziez }] },
                    },
                ],
            },
        },
    })
}
