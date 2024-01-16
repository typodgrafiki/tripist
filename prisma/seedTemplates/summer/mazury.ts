import { getCategory, getType } from "../../_helpers/seedHelpers"
import { Gender, PrismaClient } from "@prisma/client"

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
    const higiena = await getCategory("Higiena")
    const jedzenie = await getCategory("Jedzenie")
    const dokumenty = await getCategory("Dokumenty")
    const apteczka = await getCategory("Apteczka")
    const kosmetyczka = await getCategory("Kosmetyczka")
    const jezioro = await getCategory("Jezioro")

    // Nazwy list
    const mazuryList = {
        name: "Mazury",
        type: summerTemplateType,
    }

    const mazury_MALE = await prisma.template.create({
        data: {
            name: mazuryList.name,
            settingColor: "bg-blue-400",
            listTypeId: mazuryList.type,
            gender: Gender.MALE,
            // tripLength: 10,
            elements: {
                create: [
                    {
                        name: "Mapa lub przewodnik",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Dmuchany materac lub koło",
                        categories: { connect: [{ id: jezioro }] },
                    },
                    {
                        name: "Sprzęt do nurkowania (maska, rurka)",
                        categories: { connect: [{ id: jezioro }] },
                    },
                    {
                        name: "Torba plażowa",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Leżak",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Kajak",
                        categories: { connect: [{ id: jezioro }] },
                    },
                    {
                        name: "Kijki do nordic walking",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Rowery",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Sprzęt wędkarski",
                        categories: { connect: [{ id: jezioro }] },
                    },
                    {
                        name: "Sprzęt do pływania",
                        categories: { connect: [{ id: jezioro }] },
                    },
                    {
                        name: "Termos lub bidon",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Plecak na wycieczki",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Pływający pojemnik na klucze i telefon",
                        categories: { connect: [{ id: jezioro }] },
                    },
                    {
                        name: "Butelka z wodą",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Wiosło",
                        categories: { connect: [{ id: jezioro }] },
                    },
                    {
                        name: "SUP",
                        categories: { connect: [{ id: jezioro }] },
                    },
                    {
                        name: "Karty do gry",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Planszówki",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Baterie do czołówki",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Latarka lub czołówka",
                        categories: { connect: [{ id: elektronika }] },
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
                        name: "Głośnik przenośny (bezprzewodowy)",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Słuchawki",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Gimball + ładowarka + kabel",
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
                        name: "Prawo jazdy",
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
                        name: "Papier toaletowy",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Mokre chusteczki",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Balsam po opalaniu",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Krem z filtrem UV",
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
                        name: "Sandały/klapki plażowe",
                        categories: { connect: [{ id: obuwie }] },
                    },
                    {
                        name: "Strój kąpielowy",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Lekkie buty trekkingowe",
                        categories: { connect: [{ id: obuwie }] },
                    },
                    {
                        name: "Buty na zmianę",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Przeciwdeszczowa odzież",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Chusta na głowę",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Czapka z daszkiem lub kapelusz",
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
                        name: "Ciepłe ubrania na wieczór",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Bluza / Sweter",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Spodnie dresowe / długie ",
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

    const mazury_FEMALE = await prisma.template.create({
        data: {
            name: mazuryList.name,
            settingColor: "bg-blue-400",
            listTypeId: mazuryList.type,
            gender: Gender.FEMALE,
            // tripLength: 10,
            elements: {
                create: [
                    {
                        name: "Mapa lub przewodnik",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Dmuchany materac lub koło",
                        categories: { connect: [{ id: jezioro }] },
                    },
                    {
                        name: "Sprzęt do nurkowania (maska, rurka)",
                        categories: { connect: [{ id: jezioro }] },
                    },
                    {
                        name: "Torba plażowa",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Leżak",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Kajak",
                        categories: { connect: [{ id: jezioro }] },
                    },
                    {
                        name: "Kijki do nordic walking",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Rowery",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Sprzęt wędkarski",
                        categories: { connect: [{ id: jezioro }] },
                    },
                    {
                        name: "Sprzęt do pływania",
                        categories: { connect: [{ id: jezioro }] },
                    },
                    {
                        name: "Termos lub bidon",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Plecak na wycieczki",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Pływający pojemnik na klucze i telefon",
                        categories: { connect: [{ id: jezioro }] },
                    },
                    {
                        name: "Butelka z wodą",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Wiosło",
                        categories: { connect: [{ id: jezioro }] },
                    },
                    {
                        name: "SUP",
                        categories: { connect: [{ id: jezioro }] },
                    },
                    {
                        name: "Karty do gry",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Planszówki",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Baterie do czołówki",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Latarka lub czołówka",
                        categories: { connect: [{ id: elektronika }] },
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
                        name: "Głośnik przenośny (bezprzewodowy)",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Słuchawki",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Gimball + ładowarka + kabel",
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
                        name: "Prawo jazdy",
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
                        name: "Balsam po opalaniu",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    {
                        name: "Krem z filtrem UV",
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
                        name: "Sandały/klapki plażowe",
                        categories: { connect: [{ id: obuwie }] },
                    },
                    {
                        name: "Strój kąpielowy",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Lekkie buty trekkingowe",
                        categories: { connect: [{ id: obuwie }] },
                    },
                    {
                        name: "Buty na zmianę",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Przeciwdeszczowa odzież",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Chusta na głowę",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Czapka z daszkiem lub kapelusz",
                        categories: { connect: [{ id: odziez }] },
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
                        name: "Ciepłe ubrania na wieczór",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Bluza / Sweter",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Spodnie dresowe / długie ",
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

    // const mazury3 = await prisma.template.create({
    //     data: {
    //         name: mazuryList.name,
    //         settingColor: "bg-blue-400",
    //         start: mazuryList.start,
    //         listTypeId: mazuryList.type,
    //         tripLength: 3,
    //         elements: {
    //             create: [
    //                 {
    //                     name: "Mapa lub przewodnik",
    //                     categories: { connect: [{ id: inne }] },
    //                 },
    //                 {
    //                     name: "Dmuchany materac lub koło",
    //                     categories: { connect: [{ id: jezioro }] },
    //                 },
    //                 {
    //                     name: "Torba plażowa",
    //                     categories: { connect: [{ id: inne }] },
    //                 },
    //                 {
    //                     name: "Leżak",
    //                     categories: { connect: [{ id: inne }] },
    //                 },
    //                 {
    //                     name: "Termos lub bidon",
    //                     categories: { connect: [{ id: inne }] },
    //                 },
    //                 {
    //                     name: "Plecak na wycieczki",
    //                     categories: { connect: [{ id: inne }] },
    //                 },
    //                 {
    //                     name: "Pływający pojemnik na klucze i telefon",
    //                     categories: { connect: [{ id: jezioro }] },
    //                 },
    //                 {
    //                     name: "Butelka z wodą",
    //                     categories: { connect: [{ id: jedzenie }] },
    //                 },
    //                 {
    //                     name: "Wiosło",
    //                     categories: { connect: [{ id: jezioro }] },
    //                 },
    //                 {
    //                     name: "SUP",
    //                     categories: { connect: [{ id: jezioro }] },
    //                 },
    //                 {
    //                     name: "Karty do gry",
    //                     categories: { connect: [{ id: inne }] },
    //                 },
    //                 {
    //                     name: "Planszówki",
    //                     categories: { connect: [{ id: inne }] },
    //                 },
    //                 {
    //                     name: "Książka / Czytnik typu Kindle",
    //                     categories: { connect: [{ id: inne }] },
    //                 },
    //                 {
    //                     name: "Głośnik przenośny (bezprzewodowy)",
    //                     categories: { connect: [{ id: elektronika }] },
    //                 },
    //                 {
    //                     name: "Słuchawki",
    //                     categories: { connect: [{ id: elektronika }] },
    //                 },
    //                 {
    //                     name: "Gimball + ładowarka + kabel",
    //                     categories: { connect: [{ id: elektronika }] },
    //                 },
    //                 {
    //                     name: "Powerbank + kabel",
    //                     categories: { connect: [{ id: elektronika }] },
    //                 },
    //                 {
    //                     name: "Ładowarka do telefonu + kabel",
    //                     categories: { connect: [{ id: elektronika }] },
    //                 },
    //                 {
    //                     name: "Aparat fotograficzny",
    //                     categories: { connect: [{ id: elektronika }] },
    //                 },
    //                 {
    //                     name: "Prawo jazdy",
    //                     categories: { connect: [{ id: dokumenty }] },
    //                 },
    //                 {
    //                     name: "Dowód osobisty",
    //                     categories: { connect: [{ id: dokumenty }] },
    //                 },
    //                 {
    //                     name: "Dokumenty",
    //                     categories: { connect: [{ id: dokumenty }] },
    //                 },
    //                 {
    //                     name: "Gotówka",
    //                     categories: { connect: [{ id: dokumenty }] },
    //                 },
    //                 {
    //                     name: "Bandaż",
    //                     categories: { connect: [{ id: apteczka }] },
    //                 },
    //                 {
    //                     name: "Środek na komary i kleszcze",
    //                     categories: { connect: [{ id: apteczka }] },
    //                 },
    //                 {
    //                     name: "Tabletki na alergie",
    //                     categories: { connect: [{ id: apteczka }] },
    //                 },
    //                 {
    //                     name: "Żel antybakteryjny",
    //                     categories: { connect: [{ id: apteczka }] },
    //                 },
    //                 {
    //                     name: "Plastry opatrunkowe",
    //                     categories: { connect: [{ id: apteczka }] },
    //                 },
    //                 {
    //                     name: "Tabletki na ból brzucha",
    //                     categories: { connect: [{ id: apteczka }] },
    //                 },
    //                 {
    //                     name: "Tabletki na biegunkę",
    //                     categories: { connect: [{ id: apteczka }] },
    //                 },
    //                 {
    //                     name: "Tabletki przeciwbólowe",
    //                     categories: { connect: [{ id: apteczka }] },
    //                 },
    //                 {
    //                     name: "Leki",
    //                     categories: { connect: [{ id: apteczka }] },
    //                 },
    //                 {
    //                     name: "Klapki pod prysznic",
    //                     categories: { connect: [{ id: higiena }] },
    //                 },
    //                 {
    //                     name: "Papier toaletowy",
    //                     categories: { connect: [{ id: higiena }] },
    //                 },
    //                 {
    //                     name: "Mokre chusteczki",
    //                     categories: { connect: [{ id: higiena }] },
    //                 },
    //                 {
    //                     name: "Balsam po opalaniu",
    //                     categories: { connect: [{ id: kosmetyczka }] },
    //                 },
    //                 {
    //                     name: "Krem z filtrem UV",
    //                     categories: { connect: [{ id: kosmetyczka }] },
    //                 },
    //                 {
    //                     name: "Nożyczki do paznokci",
    //                     categories: { connect: [{ id: kosmetyczka }] },
    //                 },
    //                 {
    //                     name: "Dezodorant / Antyperspirant",
    //                     categories: { connect: [{ id: kosmetyczka }] },
    //                 },
    //                 {
    //                     name: "Nitka dentystyczna",
    //                     categories: { connect: [{ id: kosmetyczka }] },
    //                 },
    //                 {
    //                     name: "Pasta do zębów",
    //                     categories: { connect: [{ id: kosmetyczka }] },
    //                 },
    //                 {
    //                     name: "Szczotka do zębów",
    //                     categories: { connect: [{ id: kosmetyczka }] },
    //                 },
    //                 {
    //                     name: "Szczotka do włosów / Grzebień",
    //                     categories: { connect: [{ id: kosmetyczka }] },
    //                 },
    //                 {
    //                     name: "Pasta / Żel do włosów",
    //                     categories: { connect: [{ id: kosmetyczka }] },
    //                 },
    //                 {
    //                     name: "Odżywka do włosów",
    //                     categories: { connect: [{ id: kosmetyczka }] },
    //                 },
    //                 {
    //                     name: "Szampon",
    //                     categories: { connect: [{ id: kosmetyczka }] },
    //                 },
    //                 {
    //                     name: "Mydło / Żel pod prysznic",
    //                     categories: { connect: [{ id: kosmetyczka }] },
    //                 },
    //                 {
    //                     name: "Okulary przeciwsłoneczne",
    //                     categories: { connect: [{ id: akcesoria }] },
    //                 },
    //                 {
    //                     name: "Sandały/klapki plażowe",
    //                     categories: { connect: [{ id: obuwie }] },
    //                 },
    //                 {
    //                     name: "Strój kąpielowy",
    //                     categories: { connect: [{ id: odziez }] },
    //                 },
    //                 {
    //                     name: "Lekkie buty trekkingowe",
    //                     categories: { connect: [{ id: obuwie }] },
    //                 },
    //                 {
    //                     name: "Przeciwdeszczowa odzież",
    //                     categories: { connect: [{ id: odziez }] },
    //                 },
    //                 {
    //                     name: "Czapka z daszkiem lub kapelusz",
    //                     categories: { connect: [{ id: odziez }] },
    //                 },
    //                 {
    //                     name: "Bielizna (majtki)",
    //                     categories: { connect: [{ id: odziez }] },
    //                 },
    //                 {
    //                     name: "Skarpety",
    //                     categories: { connect: [{ id: odziez }] },
    //                 },
    //                 {
    //                     name: "Piżama",
    //                     categories: { connect: [{ id: odziez }] },
    //                 },
    //                 {
    //                     name: "Ciepłe ubrania na wieczór",
    //                     categories: { connect: [{ id: odziez }] },
    //                 },
    //                 {
    //                     name: "Bluza / Sweter",
    //                     categories: { connect: [{ id: odziez }] },
    //                 },
    //                 {
    //                     name: "Spodnie długie ",
    //                     categories: { connect: [{ id: odziez }] },
    //                 },
    //                 {
    //                     name: "Spodenki krótkie",
    //                     categories: { connect: [{ id: odziez }] },
    //                 },
    //                 {
    //                     name: "Koszulki",
    //                     categories: { connect: [{ id: odziez }] },
    //                 },
    //             ],
    //         },
    //     },
    // })
}
