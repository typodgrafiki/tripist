import { getCategory, getType } from "../../_helpers/seedHelpers"
import { Gender, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function activeRower() {
    // Tworzenie typu
    const activeTemplateType = await getType("active", "Wakacje aktywne")

    // Tworzenie lub uzyskiwanie dostępu do kategorii
    const odziez = await getCategory("Odzież")
    const akcesoria = await getCategory("Akcesoria")
    const elektronika = await getCategory("Elektronika")
    const inne = await getCategory("Inne")
    const jedzenie = await getCategory("Jedzenie")
    const higiena = await getCategory("Higiena")
    const dokumenty = await getCategory("Dokumenty")
    const apteczka = await getCategory("Apteczka")
    const kosmetyczka = await getCategory("Kosmetyczka")
    const rower = await getCategory("Rower")

    // Nazwy list
    const rowerList = {
        name: "Rower",
        type: activeTemplateType,
    }

    const rower_MALE = await prisma.template.create({
        data: {
            name: rowerList.name,
            settingColor: "bg-blue-400",
            listTypeId: rowerList.type,
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
                        name: "Mapy i plany tras",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Plecak rowerowy",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Izotonik w proszku",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Batony energetyczne",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Żele energetyczne",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Zestaw do czyszczenia roweru",
                        categories: { connect: [{ id: rower }] },
                    },
                    {
                        name: "Sakwy rowerowe",
                        categories: { connect: [{ id: rower }] },
                    },
                    {
                        name: "Buty rowerowe",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Zapięcie rowerowe",
                        categories: { connect: [{ id: rower }] },
                    },
                    {
                        name: "Błotniki",
                        categories: { connect: [{ id: rower }] },
                    },
                    {
                        name: "Bidon",
                        categories: { connect: [{ id: rower }] },
                    },
                    {
                        name: "Oświetlenie rowerowe",
                        categories: { connect: [{ id: rower }] },
                    },
                    {
                        name: "Zapasowy łańcuch",
                        categories: { connect: [{ id: rower }] },
                    },
                    {
                        name: "Skuwacz łańcucha",
                        categories: { connect: [{ id: rower }] },
                    },
                    {
                        name: "Łyżki do opon",
                        categories: { connect: [{ id: rower }] },
                    },
                    {
                        name: "Pompka rowerowa",
                        categories: { connect: [{ id: rower }] },
                    },
                    {
                        name: "Klej do łatek",
                        categories: { connect: [{ id: rower }] },
                    },
                    {
                        name: "Łatki do dętek",
                        categories: { connect: [{ id: rower }] },
                    },
                    {
                        name: "Dętka",
                        categories: { connect: [{ id: rower }] },
                    },
                    {
                        name: "Kask rowerowy",
                        categories: { connect: [{ id: rower }] },
                    },
                    {
                        name: "Rower",
                        categories: { connect: [{ id: rower }] },
                    },
                    {
                        name: "Licznik rowerowy",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Statyw do smartfona",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Czujnik pulsu na klatkę piersiową",
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
                        name: "Okulary przeciwsłoneczne rowerowe",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Opaska pod kask",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Czapka pod kask",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Warstwa termiczna",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Kurtka przeciwdeszczowa rowerowa",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Wiatrówka rowerowa",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Rękawiczki rowerowe",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Spodenki rowerowe z wkładką",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Koszulka kolarska",
                        categories: { connect: [{ id: odziez }] },
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
                        name: "Skarpetki rowerowe",
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
                        name: "Bielizna termoaktywna",
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

    const rower_FEMALE = await prisma.template.create({
        data: {
            name: rowerList.name,
            settingColor: "bg-blue-400",
            listTypeId: rowerList.type,
            gender: Gender.FEMALE,
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
                        name: "Mapy i plany tras",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Plecak rowerowy",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Izotonik w proszku",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Batony energetyczne",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Żele energetyczne",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Zestaw do czyszczenia roweru",
                        categories: { connect: [{ id: rower }] },
                    },
                    {
                        name: "Sakwy rowerowe",
                        categories: { connect: [{ id: rower }] },
                    },
                    {
                        name: "Buty rowerowe",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Zapięcie rowerowe",
                        categories: { connect: [{ id: rower }] },
                    },
                    {
                        name: "Błotniki",
                        categories: { connect: [{ id: rower }] },
                    },
                    {
                        name: "Bidon",
                        categories: { connect: [{ id: rower }] },
                    },
                    {
                        name: "Oświetlenie rowerowe",
                        categories: { connect: [{ id: rower }] },
                    },
                    {
                        name: "Zapasowy łańcuch",
                        categories: { connect: [{ id: rower }] },
                    },
                    {
                        name: "Skuwacz łańcucha",
                        categories: { connect: [{ id: rower }] },
                    },
                    {
                        name: "Łyżki do opon",
                        categories: { connect: [{ id: rower }] },
                    },
                    {
                        name: "Pompka rowerowa",
                        categories: { connect: [{ id: rower }] },
                    },
                    {
                        name: "Klej do łatek",
                        categories: { connect: [{ id: rower }] },
                    },
                    {
                        name: "Łatki do dętek",
                        categories: { connect: [{ id: rower }] },
                    },
                    {
                        name: "Dętka",
                        categories: { connect: [{ id: rower }] },
                    },
                    {
                        name: "Kask rowerowy",
                        categories: { connect: [{ id: rower }] },
                    },
                    {
                        name: "Rower",
                        categories: { connect: [{ id: rower }] },
                    },
                    {
                        name: "Licznik rowerowy",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Statyw do smartfona",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Czujnik pulsu na klatkę piersiową",
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
                        name: "Okulary przeciwsłoneczne rowerowe",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Opaska pod kask",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Czapka pod kask",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Warstwa termiczna",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Kurtka przeciwdeszczowa rowerowa",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Wiatrówka rowerowa",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Rękawiczki rowerowe",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Spodenki rowerowe z wkładką",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Koszulka kolarska",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    // {
                    //     name: "Czapka z daszkiem",
                    //     categories: { connect: [{ id: odziez }] },
                    // },
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
                    {
                        name: "Bielizna",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Skarpetki rowerowe",
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
                        name: "Bielizna termoaktywna",
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
