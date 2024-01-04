// npx prisma db seed
// npm run seed:sample
// npm run seed:template

import { getCategory, getType } from "../../seedHelpers"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    // Tworzenie typu
    const summerTemplateType = await getType("summer", "Wakacje letnie")

    // Tworzenie lub uzyskiwanie dostępu do kategorii
    const odziez = await getCategory("Odzież")
    const akcesoria = await getCategory("Akcesoria")
    const elektronika = await getCategory("Elektronika")
    const inne = await getCategory("Inne")
    const jedzenie = await getCategory("Jedzenie")
    const kuchnia = await getCategory("Kuchnia")
    const higiena = await getCategory("Łazienka / Higiena")
    const camping = await getCategory("Camping")
    const plaza = await getCategory("Plaża")
    const trekking = await getCategory("Trekking")
    const dokumenty = await getCategory("Dokumenty")

    // Nazwy list
    const camperVan = {
        name: "Camper Van",
        start: false,
        type: summerTemplateType,
    }

    // Camper Van 3, 7
    const camperVan7 = await prisma.template.create({
        data: {
            name: camperVan.name,
            settingColor: "bg-blue-400",
            start: camperVan.start,
            listTypeId: camperVan.type,
            tripLength: 7,
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
                        name: "Spodenki dresowe",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Długie spodnie dżinsowe",
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
                        categories: {
                            connect: [{ id: odziez }, { id: zeglarstwo }],
                        },
                    },
                    {
                        name: "Kapelusz",
                        categories: { connect: [{ id: odziez }, { id: joga }] },
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
                        name: "Strój kąpielowy",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Krem z filtrem UV",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Sandały/klapki plażowe",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Balsam po opalaniu",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Bielizna termoaktywna",
                        categories: {
                            connect: [{ id: sport }, { id: trekking }],
                        },
                    },
                    {
                        name: "Spodnie długie trekkingowe",
                        categories: { connect: [{ id: trekking }] },
                    },
                    {
                        name: "Bluza trekkingowa",
                        categories: { connect: [{ id: trekking }] },
                    },
                    {
                        name: "Kurtka trekkingowa",
                        categories: { connect: [{ id: trekking }] },
                    },
                    {
                        name: "Buty trekkingowe",
                        categories: {
                            connect: [{ id: trekking }, { id: survival }],
                        },
                    },
                    {
                        name: "Czołówka",
                        categories: { connect: [{ id: trekking }] },
                    },
                    {
                        name: "Baterie do czołówki",
                        categories: { connect: [{ id: trekking }] },
                    },
                    {
                        name: "Plecak trekkingowy",
                        categories: { connect: [{ id: trekking }] },
                    },
                    {
                        name: "SUP",
                        categories: { connect: [{ id: jezioro }] },
                    },
                    {
                        name: "Wiosło",
                        categories: { connect: [{ id: jezioro }] },
                    },
                    {
                        name: "Recznik",
                        categories: { connect: [{ id: lazienka }] },
                    },
                    {
                        name: "Woda",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Termos lub bidon",
                        categories: { connect: [{ id: mazury }] },
                    },

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
                        name: "Prawo jazdy",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Paszport",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Potwierdzenia rezerwacji",
                        categories: { connect: [{ id: dokumenty }] },
                    },
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
                        categories: {
                            connect: [{ id: elektronika }, { id: joga }],
                        },
                    },
                    {
                        name: "Głośnik przenośny (bezprzewodowy)",
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
                        name: "Czytnik typu Kindle",
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
                        name: "Maść/spray przeciw oparzeniom słonecznm",
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

                    // Van Kuchnia
                    {
                        name: "Cebula",
                        categories: { connect: [{ id: kuchniaVan }] },
                    },
                    {
                        name: "Olej",
                        categories: { connect: [{ id: kuchniaVan }] },
                    },
                    {
                        name: "Sól",
                        categories: { connect: [{ id: kuchniaVan }] },
                    },
                    {
                        name: "Korkociąg",
                        categories: { connect: [{ id: kuchniaVan }] },
                    },
                    {
                        name: "Płyn do zmywania",
                        categories: { connect: [{ id: kuchniaVan }] },
                    },
                    {
                        name: "Gąbka do zmywania",
                        categories: { connect: [{ id: kuchniaVan }] },
                    },
                    {
                        name: "Szybkoschnący ręcznik kuchenny",
                        categories: { connect: [{ id: kuchniaVan }] },
                    },
                    {
                        name: "Miska do mycia naczyń",
                        categories: { connect: [{ id: kuchniaVan }] },
                    },
                    {
                        name: "Ręcznik papierowy",
                        categories: { connect: [{ id: kuchniaVan }] },
                    },
                    {
                        name: "Noże",
                        categories: { connect: [{ id: kuchniaVan }] },
                    },
                    {
                        name: "Sztućce",
                        categories: { connect: [{ id: kuchniaVan }] },
                    },
                    {
                        name: "Miski",
                        categories: { connect: [{ id: kuchniaVan }] },
                    },
                    {
                        name: "Talerze",
                        categories: { connect: [{ id: kuchniaVan }] },
                    },
                    {
                        name: "Garnek",
                        categories: { connect: [{ id: kuchniaVan }] },
                    },
                    {
                        name: "Patelnia",
                        categories: { connect: [{ id: kuchniaVan }] },
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
                    {
                        name: "Mokre chusteczki",
                        categories: {
                            connect: [{ id: higiena }, { id: kosmetyczka }],
                        },
                    },
                    {
                        name: "Papier toaletowy",
                        categories: {
                            connect: [{ id: higiena }, { id: survival }],
                        },
                    },
                    {
                        name: "Ręcznik",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Klapki pod prysznic",
                        categories: {
                            connect: [{ id: higiena }, { id: odziez }],
                        },
                    },
                    // Samochód
                    {
                        name: "Dokumenty samochodu",
                        categories: { connect: [{ id: car }] },
                    },
                    {
                        name: "Ładowarka samochodowa + kabel",
                        categories: { connect: [{ id: car }] },
                    },
                    {
                        name: "Transmiter FM",
                        categories: {
                            connect: [{ id: car }, { id: campping }],
                        },
                    },
                    {
                        name: "Zestaw naprawczy do opon",
                        categories: { connect: [{ id: car }] },
                    },
                    {
                        name: "Trójkąt ostrzegawczy i kamizelki odblaskowe",
                        categories: { connect: [{ id: car }] },
                    },
                    {
                        name: "Lodówka turystyczna",
                        categories: {
                            connect: [
                                { id: car },
                                { id: kuchnia },
                                { id: camping },
                            ],
                        },
                    },

                    // Camping
                    {
                        name: "Prysznic ciśnieniowy",
                        categories: { connect: [{ id: camping }] },
                    },
                    {
                        name: "Namiot do prysznica",
                        categories: { connect: [{ id: camping }] },
                    },
                    {
                        name: "Lampka wisząca",
                        categories: { connect: [{ id: camping }] },
                    },
                    {
                        name: "Krzesełka turystyczne (rozkładane)",
                        categories: { connect: [{ id: camping }] },
                    },
                    {
                        name: "Stół turystyczny (rozkładany)",
                        categories: { connect: [{ id: camping }] },
                    },
                    // {
                    //     name: "Butla z gazem",
                    //     categories: { connect: [{ id: camping }, {id: trekking}, {id: kuchnia}] },
                    // },
                    // {
                    //     name: "Palnik do butli",
                    //     categories: { connect: [{ id: camping }, {id: trekking}, {id: kuchnia}] },
                    // },
                    {
                        name: "Poduszki",
                        categories: {
                            connect: [{ id: camping }, { id: spanie }],
                        },
                    },
                    {
                        name: "Kołdra lub koc do spania",
                        categories: {
                            connect: [{ id: camping }, { id: spanie }],
                        },
                    },
                    {
                        name: "Zapałki / zapalniczka",
                        categories: {
                            connect: [{ id: camping }, { id: kuchnia }],
                        },
                    },
                    {
                        name: "Grill",
                        categories: {
                            connect: [{ id: camping }, { id: jedzenie }],
                        },
                    },
                    {
                        name: "Peleryna przeciwdeszczowa",
                        categories: {
                            connect: [{ id: camping }, { id: odziez }],
                        },
                    },
                    {
                        name: "Śrubokręt",
                        categories: {
                            connect: [{ id: campingRodzinny }, { id: camping }],
                        },
                    },
                    {
                        name: "Przenośny grill",
                        categories: {
                            connect: [
                                { id: campingRodzinny },
                                { id: camping },
                                { id: kuchniaVan },
                            ],
                        },
                    },
                    {
                        name: "Kuchenka gazowa",
                        categories: {
                            connect: [
                                { id: campingRodzinny },
                                { id: camping },
                                { id: kuchniaVan },
                            ],
                        },
                    },
                    {
                        name: "Gaz do kuchenki gazowej",
                        categories: {
                            connect: [
                                { id: campingRodzinny },
                                { id: camping },
                                { id: kuchniaVan },
                            ],
                        },
                    },
                    {
                        name: "Worki na śmieci",
                        categories: {
                            connect: [
                                { id: campingRodzinny },
                                { id: camping },
                                { id: car },
                            ],
                        },
                    },

                    // Jedzenie
                    {
                        name: "Makarony",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Konserwy",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Gotowe sosy w proszku",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Fasolka po bretońsku",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Pieczywo",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Banany",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Zupki instant",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Jajka",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Płatki śniadaniowe",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Mleko UHT",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Kinderki",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Kawa",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Masło orzechowe",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Ketchup",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Przyprawy",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Chrupki",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Herbata",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Batony",
                        categories: {
                            connect: [{ id: jedzenie }, { id: trekking }],
                        },
                    },
                    // Akcesoria
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Nerka (saszetka biodrowa)",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Peleryna przeciwdeszczowa",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Worki na pranie",
                        categories: {
                            connect: [{ id: inne }, { id: camping }],
                        },
                    },
                    {
                        name: "Karty do gry",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Taśma izolacyjna",
                        categories: {
                            connect: [
                                { id: inne },
                                { id: camping },
                                { id: car },
                            ],
                        },
                    },
                    {
                        name: "Zegarek",
                        categories: {
                            connect: [{ id: sport }, { id: elektronika }],
                        },
                    },
                ],
            },
        },
    })

    const camperVan3 = await prisma.template.create({
        data: {
            name: camperVan.name,
            settingColor: "bg-blue-400",
            start: camperVan.start,
            listTypeId: camperVan.type,
            tripLength: 3,
            elements: {
                create: [
                    {
                        name: "Koszulki",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Spodenki krótkie",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Długie spodnie",
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
                        categories: {
                            connect: [{ id: odziez }, { id: zeglarstwo }],
                        },
                    },
                    {
                        name: "Chusta na głowę",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Strój kąpielowy",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Krem z filtrem UV",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Sandały/klapki",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Czołówka",
                        categories: { connect: [{ id: trekking }] },
                    },
                    {
                        name: "Plecak trekkingowy",
                        categories: { connect: [{ id: trekking }] },
                    },
                    {
                        name: "SUP",
                        categories: { connect: [{ id: jezioro }] },
                    },
                    {
                        name: "Wiosło",
                        categories: { connect: [{ id: jezioro }] },
                    },
                    {
                        name: "Recznik",
                        categories: { connect: [{ id: lazienka }] },
                    },
                    {
                        name: "Termos lub bidon",
                        categories: { connect: [{ id: mazury }] },
                    },

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
                        name: "Prawo jazdy",
                        categories: { connect: [{ id: dokumenty }] },
                    },
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
                        name: "Gimball + ładowarka + kabel",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Słuchawki",
                        categories: {
                            connect: [{ id: elektronika }, { id: joga }],
                        },
                    },
                    {
                        name: "Głośnik przenośny (bezprzewodowy)",
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

                    // Van Kuchnia
                    {
                        name: "Cebula",
                        categories: { connect: [{ id: kuchniaVan }] },
                    },
                    {
                        name: "Olej",
                        categories: { connect: [{ id: kuchniaVan }] },
                    },
                    {
                        name: "Sól",
                        categories: { connect: [{ id: kuchniaVan }] },
                    },
                    {
                        name: "Korkociąg",
                        categories: { connect: [{ id: kuchniaVan }] },
                    },
                    {
                        name: "Płyn do zmywania",
                        categories: { connect: [{ id: kuchniaVan }] },
                    },
                    {
                        name: "Gąbka do zmywania",
                        categories: { connect: [{ id: kuchniaVan }] },
                    },
                    {
                        name: "Szybkoschnący ręcznik kuchenny",
                        categories: { connect: [{ id: kuchniaVan }] },
                    },
                    {
                        name: "Miska do mycia naczyń",
                        categories: { connect: [{ id: kuchniaVan }] },
                    },
                    {
                        name: "Ręcznik papierowy",
                        categories: { connect: [{ id: kuchniaVan }] },
                    },
                    {
                        name: "Noże",
                        categories: { connect: [{ id: kuchniaVan }] },
                    },
                    {
                        name: "Sztućce",
                        categories: { connect: [{ id: kuchniaVan }] },
                    },
                    {
                        name: "Miski",
                        categories: { connect: [{ id: kuchniaVan }] },
                    },
                    {
                        name: "Talerze",
                        categories: { connect: [{ id: kuchniaVan }] },
                    },
                    {
                        name: "Garnek",
                        categories: { connect: [{ id: kuchniaVan }] },
                    },
                    {
                        name: "Patelnia",
                        categories: { connect: [{ id: kuchniaVan }] },
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
                        name: "Mokre chusteczki",
                        categories: {
                            connect: [{ id: higiena }, { id: kosmetyczka }],
                        },
                    },
                    {
                        name: "Papier toaletowy",
                        categories: {
                            connect: [{ id: higiena }, { id: survival }],
                        },
                    },
                    {
                        name: "Ręcznik",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Klapki pod prysznic",
                        categories: {
                            connect: [{ id: higiena }, { id: odziez }],
                        },
                    },
                    // Samochód
                    {
                        name: "Dokumenty samochodu",
                        categories: { connect: [{ id: car }] },
                    },
                    {
                        name: "Ładowarka samochodowa + kabel",
                        categories: { connect: [{ id: car }] },
                    },
                    {
                        name: "Transmiter FM",
                        categories: {
                            connect: [{ id: car }, { id: campping }],
                        },
                    },
                    {
                        name: "Zestaw naprawczy do opon",
                        categories: { connect: [{ id: car }] },
                    },
                    {
                        name: "Trójkąt ostrzegawczy i kamizelki odblaskowe",
                        categories: { connect: [{ id: car }] },
                    },

                    // Camping
                    {
                        name: "Prysznic ciśnieniowy",
                        categories: { connect: [{ id: camping }] },
                    },
                    {
                        name: "Namiot do prysznica",
                        categories: { connect: [{ id: camping }] },
                    },
                    {
                        name: "Lampka wisząca",
                        categories: { connect: [{ id: camping }] },
                    },
                    {
                        name: "Krzesełka turystyczne (rozkładane)",
                        categories: { connect: [{ id: camping }] },
                    },
                    {
                        name: "Stół turystyczny (rozkładany)",
                        categories: { connect: [{ id: camping }] },
                    },
                    // {
                    //     name: "Butla z gazem",
                    //     categories: { connect: [{ id: camping }, {id: trekking}, {id: kuchnia}] },
                    // },
                    // {
                    //     name: "Palnik do butli",
                    //     categories: { connect: [{ id: camping }, {id: trekking}, {id: kuchnia}] },
                    // },
                    {
                        name: "Poduszki",
                        categories: {
                            connect: [{ id: camping }, { id: spanie }],
                        },
                    },
                    {
                        name: "Kołdra lub koc do spania",
                        categories: {
                            connect: [{ id: camping }, { id: spanie }],
                        },
                    },
                    {
                        name: "Zapałki / zapalniczka",
                        categories: {
                            connect: [{ id: camping }, { id: kuchnia }],
                        },
                    },
                    {
                        name: "Grill",
                        categories: {
                            connect: [{ id: camping }, { id: jedzenie }],
                        },
                    },
                    {
                        name: "Peleryna przeciwdeszczowa",
                        categories: {
                            connect: [{ id: camping }, { id: odziez }],
                        },
                    },
                    {
                        name: "Śrubokręt",
                        categories: {
                            connect: [{ id: campingRodzinny }, { id: camping }],
                        },
                    },
                    {
                        name: "Przenośny grill",
                        categories: {
                            connect: [
                                { id: campingRodzinny },
                                { id: camping },
                                { id: kuchniaVan },
                            ],
                        },
                    },
                    {
                        name: "Kuchenka gazowa",
                        categories: {
                            connect: [
                                { id: campingRodzinny },
                                { id: camping },
                                { id: kuchniaVan },
                            ],
                        },
                    },
                    {
                        name: "Gaz do kuchenki gazowej",
                        categories: {
                            connect: [
                                { id: campingRodzinny },
                                { id: camping },
                                { id: kuchniaVan },
                            ],
                        },
                    },
                    {
                        name: "Worki na śmieci",
                        categories: {
                            connect: [
                                { id: campingRodzinny },
                                { id: camping },
                                { id: car },
                            ],
                        },
                    },

                    // Jedzenie
                    {
                        name: "Woda",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Makarony",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Konserwy",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Gotowe sosy w proszku",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Fasolka po bretońsku",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Pieczywo",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Banany",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Zupki instant",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Jajka",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Płatki śniadaniowe",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Mleko UHT",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Kawa",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Ketchup",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Przyprawy",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Chrupki",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Herbata",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Batony",
                        categories: {
                            connect: [{ id: jedzenie }, { id: trekking }],
                        },
                    },
                    // Akcesoria
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Nerka (saszetka biodrowa)",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Peleryna przeciwdeszczowa",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Worki na pranie",
                        categories: {
                            connect: [{ id: inne }, { id: camping }],
                        },
                    },
                    {
                        name: "Karty do gry",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Taśma izolacyjna",
                        categories: {
                            connect: [
                                { id: inne },
                                { id: camping },
                                { id: car },
                            ],
                        },
                    },
                    {
                        name: "Zegarek",
                        categories: {
                            connect: [{ id: sport }, { id: elektronika }],
                        },
                    },
                ],
            },
        },
    })
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
