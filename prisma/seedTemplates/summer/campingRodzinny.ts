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
    const campingList = {
        name: "Camping rodzinny",
        start: false,
        type: summerTemplateType,
    }

    // Camping 5, 10
    const camping10 = await prisma.template.create({
        data: {
            name: campingList.name,
            settingColor: "bg-blue-400",
            start: campingList.start,
            listTypeId: campingList.type,
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
                        name: "Spodenki dresowe",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Długie spodnie dżinsowe",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Ciepłe ubrania na wieczór",
                        categories: {
                            connect: [{ id: jezioro }, { id: mazury }],
                        },
                    },
                    {
                        name: "Zwykła bluza",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Sweter",
                        categories: {
                            connect: [{ id: odziez }, { id: citybreak_zima }],
                        },
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

                    // Plaża
                    {
                        name: "Koc/Mata na plażę",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Leżak",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Krem z filtrem UV",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Strój kąpielowy",
                        categories: {
                            connect: [
                                { id: plaza },
                                { id: sport },
                                { id: plywanie },
                            ],
                        },
                    },
                    {
                        name: "Sandały/klapki plażowe",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Torba plażowa",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Balsam po opalaniu",
                        categories: { connect: [{ id: plaza }] },
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
                        name: "Klapki",
                        categories: { connect: [{ id: lazienka }] },
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
                        name: "Prawo jazdy",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Paszport",
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
                        name: "Zestaw do golenia lub depilacji",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    // {
                    //     name: "Kosmetyki do makijażu",
                    //     categories: { connect: [{ id: kosmetyczka }] },
                    // },
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
                    // {
                    //     name: "Płyn do demakijażu",
                    //     categories: { connect: [{ id: kosmetyczka }] },
                    // },

                    // Łazienka / Higiena
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
                        name: "Klucz do kół, lewarek",
                        categories: { connect: [{ id: car }] },
                    },
                    {
                        name: "Zestaw naprawczy do opon",
                        categories: { connect: [{ id: car }] },
                    },
                    {
                        name: "Kabel elektryczny dla kampera",
                        categories: { connect: [{ id: car }] },
                    },

                    {
                        name: "Trójkąt ostrzegawczy i kamizelki odblaskowe",
                        categories: { connect: [{ id: car }] },
                    },

                    {
                        name: "Butla z gazem",
                        categories: {
                            connect: [
                                { id: camping },
                                { id: trekking },
                                { id: kuchnia },
                            ],
                        },
                    },

                    {
                        name: "Poduszki",
                        categories: {
                            connect: [{ id: camping }, { id: spanie }],
                        },
                    },
                    {
                        name: "Kołdra lub śpiwory",
                        categories: {
                            connect: [{ id: camping }, { id: spanie }],
                        },
                    },
                    {
                        name: "Namiot rodzinny",
                        categories: { connect: [{ id: campingRodzinny }] },
                    },
                    {
                        name: "Materac nadmuchiwany lub maty izolacyjne",
                        categories: { connect: [{ id: campingRodzinny }] },
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
                        name: "Młotek do śledzi",
                        categories: {
                            connect: [{ id: campingRodzinny }, { id: camping }],
                        },
                    },
                    {
                        name: "Nóż",
                        categories: {
                            connect: [{ id: campingRodzinny }, { id: camping }],
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
                        name: "Worki na śmieci",
                        categories: {
                            connect: [
                                { id: campingRodzinny },
                                { id: camping },
                                { id: car },
                            ],
                        },
                    },
                    {
                        name: "Lampki kempingowe",
                        categories: {
                            connect: [{ id: campingRodzinny }, { id: camping }],
                        },
                    },
                    {
                        name: "Krzesła i stół kempingowy",
                        categories: {
                            connect: [{ id: campingRodzinny }, { id: camping }],
                        },
                    },
                    {
                        name: "Woda",
                        categories: { connect: [{ id: campingRodzinny }] },
                    },
                    {
                        name: "Kajak (opcjonalnie)",
                        categories: { connect: [{ id: campingRodzinny }] },
                    },
                    {
                        name: "Rowery (opcjonalnie)",
                        categories: { connect: [{ id: campingRodzinny }] },
                    },
                    {
                        name: "Parasol plażowy (opcjonalnie)",
                        categories: { connect: [{ id: campingRodzinny }] },
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
                        name: "Słodycze",
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
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Nerka (saszetka biodrowa)",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Składany parasol",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Worki na pranie",
                        categories: {
                            connect: [{ id: inne }, { id: camping }],
                        },
                    },
                    {
                        name: "Planszówki",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Karty do gry",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Notatnik i długopis",
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
                        name: "Mapy papierowe",
                        categories: {
                            connect: [
                                { id: inne },
                                { id: camping },
                                { id: car },
                            ],
                        },
                    },

                    // Dzieci
                    {
                        name: "Apteczka dla dzieci",
                        categories: { connect: [{ id: zdrowie }] },
                    },
                    {
                        name: "Artykuły higieniczne dla dzieci",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Książeczki",
                        categories: { connect: [{ id: ksiazki }] },
                    },
                    {
                        name: "Kolorowanki",
                        categories: { connect: [{ id: ksiazki }] },
                    },
                    {
                        name: "Gry dla dzieci",
                        categories: { connect: [{ id: zabawki }] },
                    },
                    {
                        name: "Składany, lekki namiot",
                        categories: {
                            connect: [{ id: plazowe }, { id: kempingowe }],
                        },
                    },
                    {
                        name: "Okulary przeciwsłoneczne dla dzieci",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Butelki z filtrem na wodę",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Zabawki do zabawy na świeżym powietrzu",
                        categories: {
                            connect: [{ id: zabawki }, { id: outdoor }],
                        },
                    },
                    {
                        name: "Nosidełko",
                        categories: { connect: [{ id: podrozne }] },
                    },
                    {
                        name: "Kojec podróżny",
                        categories: { connect: [{ id: podrozne }] },
                    },
                    {
                        name: "Dziecięce środki przeciwsłoneczne",
                        categories: { connect: [{ id: ochrona_sloneczna }] },
                    },
                ],
            },
        },
    })

    const camping5 = await prisma.template.create({
        data: {
            name: campingList.name,
            settingColor: "bg-blue-400",
            start: campingList.start,
            listTypeId: campingList.type,
            tripLength: 5,
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
                        name: "Ciepłe ubrania na wieczór",
                        categories: {
                            connect: [{ id: jezioro }, { id: mazury }],
                        },
                    },
                    {
                        name: "Bluza lub sweter",
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
                        categories: {
                            connect: [{ id: odziez }, { id: zeglarstwo }],
                        },
                    },
                    {
                        name: "Buty na zmianę",
                        categories: { connect: [{ id: odziez }] },
                    },

                    // Plaża
                    {
                        name: "Krem z filtrem UV",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Strój kąpielowy",
                        categories: {
                            connect: [
                                { id: plaza },
                                { id: sport },
                                { id: plywanie },
                            ],
                        },
                    },
                    {
                        name: "Sandały/klapki plażowe",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Balsam po opalaniu",
                        categories: { connect: [{ id: plaza }] },
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
                        name: "Prawo jazdy",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Paszport",
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
                        name: "Zestaw do golenia lub depilacji",
                        categories: { connect: [{ id: kosmetyczka }] },
                    },
                    // {
                    //     name: "Kosmetyki do makijażu",
                    //     categories: { connect: [{ id: kosmetyczka }] },
                    // },
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
                    // {
                    //     name: "Płyn do demakijażu",
                    //     categories: { connect: [{ id: kosmetyczka }] },
                    // },

                    // Łazienka / Higiena
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
                        name: "Klucz do kół, lewarek",
                        categories: { connect: [{ id: car }] },
                    },
                    {
                        name: "Zestaw naprawczy do opon",
                        categories: { connect: [{ id: car }] },
                    },
                    {
                        name: "Kabel elektryczny dla kampera",
                        categories: { connect: [{ id: car }] },
                    },

                    {
                        name: "Trójkąt ostrzegawczy i kamizelki odblaskowe",
                        categories: { connect: [{ id: car }] },
                    },

                    {
                        name: "Butla z gazem",
                        categories: {
                            connect: [
                                { id: camping },
                                { id: trekking },
                                { id: kuchnia },
                            ],
                        },
                    },

                    {
                        name: "Poduszki",
                        categories: {
                            connect: [{ id: camping }, { id: spanie }],
                        },
                    },
                    {
                        name: "Kołdra lub śpiwory",
                        categories: {
                            connect: [{ id: camping }, { id: spanie }],
                        },
                    },
                    {
                        name: "Namiot rodzinny",
                        categories: { connect: [{ id: campingRodzinny }] },
                    },
                    {
                        name: "Materac nadmuchiwany lub maty izolacyjne",
                        categories: { connect: [{ id: campingRodzinny }] },
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
                        name: "Młotek do śledzi",
                        categories: {
                            connect: [{ id: campingRodzinny }, { id: camping }],
                        },
                    },
                    {
                        name: "Nóż",
                        categories: {
                            connect: [{ id: campingRodzinny }, { id: camping }],
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
                        name: "Worki na śmieci",
                        categories: {
                            connect: [
                                { id: campingRodzinny },
                                { id: camping },
                                { id: car },
                            ],
                        },
                    },
                    {
                        name: "Lampki kempingowe",
                        categories: {
                            connect: [{ id: campingRodzinny }, { id: camping }],
                        },
                    },
                    {
                        name: "Krzesła i stół kempingowy",
                        categories: {
                            connect: [{ id: campingRodzinny }, { id: camping }],
                        },
                    },
                    {
                        name: "Woda",
                        categories: { connect: [{ id: campingRodzinny }] },
                    },
                    {
                        name: "Kajak (opcjonalnie)",
                        categories: { connect: [{ id: campingRodzinny }] },
                    },
                    {
                        name: "Rowery (opcjonalnie)",
                        categories: { connect: [{ id: campingRodzinny }] },
                    },
                    {
                        name: "Parasol plażowy (opcjonalnie)",
                        categories: { connect: [{ id: campingRodzinny }] },
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
                        name: "Słodycze",
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
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Nerka (saszetka biodrowa)",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Składany parasol",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Worki na pranie",
                        categories: {
                            connect: [{ id: inne }, { id: camping }],
                        },
                    },
                    {
                        name: "Planszówki",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Karty do gry",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Notatnik i długopis",
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
                        name: "Mapy papierowe",
                        categories: {
                            connect: [
                                { id: inne },
                                { id: camping },
                                { id: car },
                            ],
                        },
                    },

                    // Dzieci
                    {
                        name: "Apteczka dla dzieci",
                        categories: { connect: [{ id: zdrowie }] },
                    },
                    {
                        name: "Artykuły higieniczne dla dzieci",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Książeczki",
                        categories: { connect: [{ id: ksiazki }] },
                    },
                    {
                        name: "Kolorowanki",
                        categories: { connect: [{ id: ksiazki }] },
                    },
                    {
                        name: "Gry dla dzieci",
                        categories: { connect: [{ id: zabawki }] },
                    },
                    {
                        name: "Składany, lekki namiot",
                        categories: {
                            connect: [{ id: plazowe }, { id: kempingowe }],
                        },
                    },
                    {
                        name: "Okulary przeciwsłoneczne dla dzieci",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Butelki z filtrem na wodę",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Zabawki do zabawy na świeżym powietrzu",
                        categories: {
                            connect: [{ id: zabawki }, { id: outdoor }],
                        },
                    },
                    {
                        name: "Nosidełko",
                        categories: { connect: [{ id: podrozne }] },
                    },
                    {
                        name: "Kojec podróżny",
                        categories: { connect: [{ id: podrozne }] },
                    },
                    {
                        name: "Dziecięce środki przeciwsłoneczne",
                        categories: { connect: [{ id: ochrona_sloneczna }] },
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
