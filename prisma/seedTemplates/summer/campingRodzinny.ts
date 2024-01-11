// npx prisma db seed
// npm run seed:sample
// npm run seed:template

import { getCategory, getType } from "../../_helpers/seedHelpers"
import { Gender, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function summerCamping() {
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
    const plaza = await getCategory("Plaża")
    const jezioro = await getCategory("Jezioro")
    const kuchnia = await getCategory("Kuchnia")
    const camping = await getCategory("Kemping")
    const samochod = await getCategory("Samochód")
    const dzieci = await getCategory("Dzieci")

    // Nazwy list
    const campingList = {
        name: "Camping rodzinny",
        type: summerTemplateType,
    }

    const camping_MALE = await prisma.template.create({
        data: {
            name: campingList.name,
            settingColor: "bg-blue-400",
            listTypeId: campingList.type,
            gender: Gender.MALE,
            // tripLength: 10,
            elements: {
                create: [
                    {
                        name: "Parasol plażowy (opcjonalnie)",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Rowery (opcjonalnie)",
                        categories: { connect: [{ id: camping }] },
                    },
                    {
                        name: "Kajak (opcjonalnie)",
                        categories: { connect: [{ id: camping }] },
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
                        name: "Torba plażowa",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Leżak",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Koc/Mata na plażę",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Dziecięce środki przeciwsłoneczne",
                        categories: { connect: [{ id: apteczka }] },
                    },
                    {
                        name: "Kojec podróżny",
                        categories: { connect: [{ id: dzieci }] },
                    },
                    {
                        name: "Nosidełko",
                        categories: { connect: [{ id: dzieci }] },
                    },
                    {
                        name: "Zabawki do zabawy na świeżym powietrzu",
                        categories: { connect: [{ id: dzieci }] },
                    },
                    {
                        name: "Butelki z filtrem na wodę",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Okulary przeciwsłoneczne dla dzieci",
                        categories: { connect: [{ id: dzieci }] },
                    },
                    {
                        name: "Składany, lekki namiot",
                        categories: { connect: [{ id: camping }] },
                    },
                    {
                        name: "Gry dla dzieci",
                        categories: { connect: [{ id: dzieci }] },
                    },
                    {
                        name: "Kolorowanki",
                        categories: { connect: [{ id: dzieci }] },
                    },
                    {
                        name: "Książeczki",
                        categories: { connect: [{ id: dzieci }] },
                    },
                    {
                        name: "Artykuły higieniczne dla dzieci",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Apteczka dla dzieci",
                        categories: { connect: [{ id: apteczka }] },
                    },
                    {
                        name: "Mapy papierowe",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Taśma izolacyjna",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Notatnik i długopis",
                        categories: { connect: [{ id: inne }] },
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
                        name: "Worki na pranie",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Woda",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Batony",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Herbata",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Chrupki",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Przyprawy",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Ketchup",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Masło orzechowe",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Kawa",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Słodycze",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Mleko UHT",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Płatki śniadaniowe",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Jajka",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Zupki instant",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Banany",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Pieczywo",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Fasolka po bretońsku",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Gotowe sosy w proszku",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Konserwy",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Makarony",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Sól",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Olej",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Cebula",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Krzesła i stół kempingowy",
                        categories: { connect: [{ id: camping }] },
                    },
                    {
                        name: "Lampki kempingowe",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Worki na śmieci",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Przenośny grill",
                        categories: { connect: [{ id: kuchnia }] },
                    },
                    {
                        name: "Śrubokręt",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Młotek do śledzi",
                        categories: { connect: [{ id: camping }] },
                    },
                    {
                        name: "Zapałki / zapalniczka",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Materac nadmuchiwany lub maty izolacyjne",
                        categories: { connect: [{ id: camping }] },
                    },
                    {
                        name: "Namiot rodzinny",
                        categories: { connect: [{ id: camping }] },
                    },
                    {
                        name: "Kołdra lub śpiwory",
                        categories: { connect: [{ id: camping }] },
                    },
                    {
                        name: "Poduszki",
                        categories: { connect: [{ id: camping }] },
                    },
                    {
                        name: "Butla z gazem",
                        categories: { connect: [{ id: camping }] },
                    },
                    {
                        name: "Trójkąt ostrzegawczy i kamizelki odblaskowe",
                        categories: { connect: [{ id: samochod }] },
                    },
                    {
                        name: "Kabel elektryczny dla kampera",
                        categories: { connect: [{ id: samochod }] },
                    },
                    {
                        name: "Zestaw naprawczy do opon",
                        categories: { connect: [{ id: samochod }] },
                    },
                    {
                        name: "Klucz do kół, lewarek",
                        categories: { connect: [{ id: samochod }] },
                    },
                    {
                        name: "Transmiter FM",
                        categories: { connect: [{ id: samochod }] },
                    },
                    {
                        name: "Ładowarka samochodowa + kabel",
                        categories: { connect: [{ id: samochod }] },
                    },
                    {
                        name: "Dokumenty samochodu",
                        categories: { connect: [{ id: samochod }] },
                    },
                    {
                        name: "Patelnia",
                        categories: { connect: [{ id: kuchnia }] },
                    },
                    {
                        name: "Garnek",
                        categories: { connect: [{ id: kuchnia }] },
                    },
                    {
                        name: "Talerze",
                        categories: { connect: [{ id: kuchnia }] },
                    },
                    {
                        name: "Miski",
                        categories: { connect: [{ id: kuchnia }] },
                    },
                    {
                        name: "Sztućce",
                        categories: { connect: [{ id: kuchnia }] },
                    },
                    {
                        name: "Noże",
                        categories: { connect: [{ id: kuchnia }] },
                    },
                    {
                        name: "Ręcznik papierowy",
                        categories: { connect: [{ id: kuchnia }] },
                    },
                    {
                        name: "Miska do mycia naczyń",
                        categories: { connect: [{ id: kuchnia }] },
                    },
                    {
                        name: "Szybkoschnący ręcznik kuchenny",
                        categories: { connect: [{ id: kuchnia }] },
                    },
                    {
                        name: "Gąbka do zmywania",
                        categories: { connect: [{ id: kuchnia }] },
                    },
                    {
                        name: "Płyn do zmywania",
                        categories: { connect: [{ id: kuchnia }] },
                    },
                    {
                        name: "Korkociąg",
                        categories: { connect: [{ id: kuchnia }] },
                    },
                    {
                        name: "Książka / Czytnik typu Kindle",
                        categories: { connect: [{ id: inne }] },
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
                        name: "Sandały/klapki plażowe",
                        categories: { connect: [{ id: obuwie }] },
                    },
                    {
                        name: "Strój kąpielowy",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Buty na zmianę",
                        categories: { connect: [{ id: obuwie }] },
                    },
                    {
                        name: "Składany parasol",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Nerka (saszetka biodrowa)",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Chusta na głowę",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Kapelusz",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Czapka z daszkiem",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Peleryna przeciwdeszczowa",
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
                        name: "Sweter",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Zwykła bluza",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Ciepłe ubrania na wieczór",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Długie spodnie dżinsowe",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Spodenki dresowe",
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

    const camping_FEMALE = await prisma.template.create({
        data: {
            name: campingList.name,
            settingColor: "bg-blue-400",
            listTypeId: campingList.type,
            gender: Gender.FEMALE,
            // tripLength: 10,
            elements: {
                create: [
                    {
                        name: "Parasol plażowy (opcjonalnie)",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Rowery (opcjonalnie)",
                        categories: { connect: [{ id: camping }] },
                    },
                    {
                        name: "Kajak (opcjonalnie)",
                        categories: { connect: [{ id: camping }] },
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
                        name: "Torba plażowa",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Leżak",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Koc/Mata na plażę",
                        categories: { connect: [{ id: plaza }] },
                    },
                    {
                        name: "Dziecięce środki przeciwsłoneczne",
                        categories: { connect: [{ id: apteczka }] },
                    },
                    {
                        name: "Kojec podróżny",
                        categories: { connect: [{ id: dzieci }] },
                    },
                    {
                        name: "Nosidełko",
                        categories: { connect: [{ id: dzieci }] },
                    },
                    {
                        name: "Zabawki do zabawy na świeżym powietrzu",
                        categories: { connect: [{ id: dzieci }] },
                    },
                    {
                        name: "Butelki z filtrem na wodę",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Okulary przeciwsłoneczne dla dzieci",
                        categories: { connect: [{ id: dzieci }] },
                    },
                    {
                        name: "Składany, lekki namiot",
                        categories: { connect: [{ id: camping }] },
                    },
                    {
                        name: "Gry dla dzieci",
                        categories: { connect: [{ id: dzieci }] },
                    },
                    {
                        name: "Kolorowanki",
                        categories: { connect: [{ id: dzieci }] },
                    },
                    {
                        name: "Książeczki",
                        categories: { connect: [{ id: dzieci }] },
                    },
                    {
                        name: "Artykuły higieniczne dla dzieci",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Apteczka dla dzieci",
                        categories: { connect: [{ id: apteczka }] },
                    },
                    {
                        name: "Mapy papierowe",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Taśma izolacyjna",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Notatnik i długopis",
                        categories: { connect: [{ id: inne }] },
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
                        name: "Worki na pranie",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Woda",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Batony",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Herbata",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Chrupki",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Przyprawy",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Ketchup",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Masło orzechowe",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Kawa",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Słodycze",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Mleko UHT",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Płatki śniadaniowe",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Jajka",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Zupki instant",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Banany",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Pieczywo",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Fasolka po bretońsku",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Gotowe sosy w proszku",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Konserwy",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Makarony",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Sól",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Olej",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Cebula",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Krzesła i stół kempingowy",
                        categories: { connect: [{ id: camping }] },
                    },
                    {
                        name: "Lampki kempingowe",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Worki na śmieci",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Przenośny grill",
                        categories: { connect: [{ id: kuchnia }] },
                    },
                    {
                        name: "Śrubokręt",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Młotek do śledzi",
                        categories: { connect: [{ id: camping }] },
                    },
                    {
                        name: "Zapałki / zapalniczka",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Materac nadmuchiwany lub maty izolacyjne",
                        categories: { connect: [{ id: camping }] },
                    },
                    {
                        name: "Namiot rodzinny",
                        categories: { connect: [{ id: camping }] },
                    },
                    {
                        name: "Kołdra lub śpiwory",
                        categories: { connect: [{ id: camping }] },
                    },
                    {
                        name: "Poduszki",
                        categories: { connect: [{ id: camping }] },
                    },
                    {
                        name: "Butla z gazem",
                        categories: { connect: [{ id: camping }] },
                    },
                    {
                        name: "Trójkąt ostrzegawczy i kamizelki odblaskowe",
                        categories: { connect: [{ id: samochod }] },
                    },
                    {
                        name: "Kabel elektryczny dla kampera",
                        categories: { connect: [{ id: samochod }] },
                    },
                    {
                        name: "Zestaw naprawczy do opon",
                        categories: { connect: [{ id: samochod }] },
                    },
                    {
                        name: "Klucz do kół, lewarek",
                        categories: { connect: [{ id: samochod }] },
                    },
                    {
                        name: "Transmiter FM",
                        categories: { connect: [{ id: samochod }] },
                    },
                    {
                        name: "Ładowarka samochodowa + kabel",
                        categories: { connect: [{ id: samochod }] },
                    },
                    {
                        name: "Dokumenty samochodu",
                        categories: { connect: [{ id: samochod }] },
                    },
                    {
                        name: "Patelnia",
                        categories: { connect: [{ id: kuchnia }] },
                    },
                    {
                        name: "Garnek",
                        categories: { connect: [{ id: kuchnia }] },
                    },
                    {
                        name: "Talerze",
                        categories: { connect: [{ id: kuchnia }] },
                    },
                    {
                        name: "Miski",
                        categories: { connect: [{ id: kuchnia }] },
                    },
                    {
                        name: "Sztućce",
                        categories: { connect: [{ id: kuchnia }] },
                    },
                    {
                        name: "Noże",
                        categories: { connect: [{ id: kuchnia }] },
                    },
                    {
                        name: "Ręcznik papierowy",
                        categories: { connect: [{ id: kuchnia }] },
                    },
                    {
                        name: "Miska do mycia naczyń",
                        categories: { connect: [{ id: kuchnia }] },
                    },
                    {
                        name: "Szybkoschnący ręcznik kuchenny",
                        categories: { connect: [{ id: kuchnia }] },
                    },
                    {
                        name: "Gąbka do zmywania",
                        categories: { connect: [{ id: kuchnia }] },
                    },
                    {
                        name: "Płyn do zmywania",
                        categories: { connect: [{ id: kuchnia }] },
                    },
                    {
                        name: "Korkociąg",
                        categories: { connect: [{ id: kuchnia }] },
                    },
                    {
                        name: "Książka / Czytnik typu Kindle",
                        categories: { connect: [{ id: inne }] },
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
                        name: "Sandały/klapki plażowe",
                        categories: { connect: [{ id: obuwie }] },
                    },
                    {
                        name: "Strój kąpielowy",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Buty na zmianę",
                        categories: { connect: [{ id: obuwie }] },
                    },
                    {
                        name: "Składany parasol",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Nerka (saszetka biodrowa)",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Chusta na głowę",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Kapelusz",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Czapka z daszkiem",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Peleryna przeciwdeszczowa",
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
                        name: "Sweter",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Zwykła bluza",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Ciepłe ubrania na wieczór",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Długie spodnie dżinsowe",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Spodenki dresowe",
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

    // const camping5 = await prisma.template.create({
    //     data: {
    //         name: campingList.name,
    //         settingColor: "bg-blue-400",
    //         start: campingList.start,
    //         listTypeId: campingList.type,
    //         tripLength: 5,
    //         elements: {
    //             create: [
    //                 {
    //                     name: "Parasol plażowy (opcjonalnie)",
    //                     categories: { connect: [{ id: plaza }] },
    //                 },
    //                 {
    //                     name: "Rowery (opcjonalnie)",
    //                     categories: { connect: [{ id: camping }] },
    //                 },
    //                 {
    //                     name: "Kajak (opcjonalnie)",
    //                     categories: { connect: [{ id: camping }] },
    //                 },
    //                 {
    //                     name: "Dziecięce środki przeciwsłoneczne",
    //                     categories: { connect: [{ id: apteczka }] },
    //                 },
    //                 {
    //                     name: "Kojec podróżny",
    //                     categories: { connect: [{ id: dzieci }] },
    //                 },
    //                 {
    //                     name: "Nosidełko",
    //                     categories: { connect: [{ id: dzieci }] },
    //                 },
    //                 {
    //                     name: "Zabawki do zabawy na świeżym powietrzu",
    //                     categories: { connect: [{ id: dzieci }] },
    //                 },
    //                 {
    //                     name: "Butelki z filtrem na wodę",
    //                     categories: { connect: [{ id: inne }] },
    //                 },
    //                 {
    //                     name: "Okulary przeciwsłoneczne dla dzieci",
    //                     categories: { connect: [{ id: dzieci }] },
    //                 },
    //                 {
    //                     name: "Składany, lekki namiot",
    //                     categories: { connect: [{ id: camping }] },
    //                 },
    //                 {
    //                     name: "Gry dla dzieci",
    //                     categories: { connect: [{ id: dzieci }] },
    //                 },
    //                 {
    //                     name: "Kolorowanki",
    //                     categories: { connect: [{ id: dzieci }] },
    //                 },
    //                 {
    //                     name: "Książeczki",
    //                     categories: { connect: [{ id: dzieci }] },
    //                 },
    //                 {
    //                     name: "Artykuły higieniczne dla dzieci",
    //                     categories: { connect: [{ id: higiena }] },
    //                 },
    //                 {
    //                     name: "Apteczka dla dzieci",
    //                     categories: { connect: [{ id: apteczka }] },
    //                 },
    //                 {
    //                     name: "Mapy papierowe",
    //                     categories: { connect: [{ id: inne }] },
    //                 },
    //                 {
    //                     name: "Taśma izolacyjna",
    //                     categories: { connect: [{ id: inne }] },
    //                 },
    //                 {
    //                     name: "Notatnik i długopis",
    //                     categories: { connect: [{ id: inne }] },
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
    //                     name: "Worki na pranie",
    //                     categories: { connect: [{ id: inne }] },
    //                 },
    //                 {
    //                     name: "Batony",
    //                     categories: { connect: [{ id: jedzenie }] },
    //                 },
    //                 {
    //                     name: "Herbata",
    //                     categories: { connect: [{ id: jedzenie }] },
    //                 },
    //                 {
    //                     name: "Chrupki",
    //                     categories: { connect: [{ id: jedzenie }] },
    //                 },
    //                 {
    //                     name: "Przyprawy",
    //                     categories: { connect: [{ id: jedzenie }] },
    //                 },
    //                 {
    //                     name: "Ketchup",
    //                     categories: { connect: [{ id: jedzenie }] },
    //                 },
    //                 {
    //                     name: "Masło orzechowe",
    //                     categories: { connect: [{ id: jedzenie }] },
    //                 },
    //                 {
    //                     name: "Kawa",
    //                     categories: { connect: [{ id: jedzenie }] },
    //                 },
    //                 {
    //                     name: "Słodycze",
    //                     categories: { connect: [{ id: jedzenie }] },
    //                 },
    //                 {
    //                     name: "Mleko UHT",
    //                     categories: { connect: [{ id: jedzenie }] },
    //                 },
    //                 {
    //                     name: "Płatki śniadaniowe",
    //                     categories: { connect: [{ id: jedzenie }] },
    //                 },
    //                 {
    //                     name: "Jajka",
    //                     categories: { connect: [{ id: jedzenie }] },
    //                 },
    //                 {
    //                     name: "Zupki instant",
    //                     categories: { connect: [{ id: jedzenie }] },
    //                 },
    //                 {
    //                     name: "Banany",
    //                     categories: { connect: [{ id: jedzenie }] },
    //                 },
    //                 {
    //                     name: "Pieczywo",
    //                     categories: { connect: [{ id: jedzenie }] },
    //                 },
    //                 {
    //                     name: "Fasolka po bretońsku",
    //                     categories: { connect: [{ id: jedzenie }] },
    //                 },
    //                 {
    //                     name: "Gotowe sosy w proszku",
    //                     categories: { connect: [{ id: jedzenie }] },
    //                 },
    //                 {
    //                     name: "Konserwy",
    //                     categories: { connect: [{ id: jedzenie }] },
    //                 },
    //                 {
    //                     name: "Makarony",
    //                     categories: { connect: [{ id: jedzenie }] },
    //                 },
    //                 {
    //                     name: "Sól",
    //                     categories: { connect: [{ id: jedzenie }] },
    //                 },
    //                 {
    //                     name: "Olej",
    //                     categories: { connect: [{ id: jedzenie }] },
    //                 },
    //                 {
    //                     name: "Cebula",
    //                     categories: { connect: [{ id: jedzenie }] },
    //                 },
    //                 {
    //                     name: "Woda",
    //                     categories: { connect: [{ id: jedzenie }] },
    //                 },
    //                 {
    //                     name: "Krzesła i stół kempingowy",
    //                     categories: { connect: [{ id: camping }] },
    //                 },
    //                 {
    //                     name: "Worki na śmieci",
    //                     categories: { connect: [{ id: inne }] },
    //                 },
    //                 {
    //                     name: "Przenośny grill",
    //                     categories: { connect: [{ id: kuchnia }] },
    //                 },
    //                 {
    //                     name: "Śrubokręt",
    //                     categories: { connect: [{ id: inne }] },
    //                 },
    //                 {
    //                     name: "Młotek do śledzi",
    //                     categories: { connect: [{ id: camping }] },
    //                 },
    //                 {
    //                     name: "Zapałki / zapalniczka",
    //                     categories: { connect: [{ id: inne }] },
    //                 },
    //                 {
    //                     name: "Materac nadmuchiwany lub maty izolacyjne",
    //                     categories: { connect: [{ id: camping }] },
    //                 },
    //                 {
    //                     name: "Namiot rodzinny",
    //                     categories: { connect: [{ id: camping }] },
    //                 },
    //                 {
    //                     name: "Kołdra lub śpiwory",
    //                     categories: { connect: [{ id: camping }] },
    //                 },
    //                 {
    //                     name: "Poduszki",
    //                     categories: { connect: [{ id: camping }] },
    //                 },
    //                 {
    //                     name: "Butla z gazem",
    //                     categories: { connect: [{ id: camping }] },
    //                 },
    //                 {
    //                     name: "Trójkąt ostrzegawczy i kamizelki odblaskowe",
    //                     categories: { connect: [{ id: samochod }] },
    //                 },
    //                 {
    //                     name: "Kabel elektryczny dla kampera",
    //                     categories: { connect: [{ id: samochod }] },
    //                 },
    //                 {
    //                     name: "Zestaw naprawczy do opon",
    //                     categories: { connect: [{ id: samochod }] },
    //                 },
    //                 {
    //                     name: "Klucz do kół, lewarek",
    //                     categories: { connect: [{ id: samochod }] },
    //                 },
    //                 {
    //                     name: "Transmiter FM",
    //                     categories: { connect: [{ id: samochod }] },
    //                 },
    //                 {
    //                     name: "Ładowarka samochodowa + kabel",
    //                     categories: { connect: [{ id: samochod }] },
    //                 },
    //                 {
    //                     name: "Dokumenty samochodu",
    //                     categories: { connect: [{ id: samochod }] },
    //                 },
    //                 {
    //                     name: "Patelnia",
    //                     categories: { connect: [{ id: kuchnia }] },
    //                 },
    //                 {
    //                     name: "Garnek",
    //                     categories: { connect: [{ id: kuchnia }] },
    //                 },
    //                 {
    //                     name: "Talerze",
    //                     categories: { connect: [{ id: kuchnia }] },
    //                 },
    //                 {
    //                     name: "Miski",
    //                     categories: { connect: [{ id: kuchnia }] },
    //                 },
    //                 {
    //                     name: "Sztućce",
    //                     categories: { connect: [{ id: kuchnia }] },
    //                 },
    //                 {
    //                     name: "Noże",
    //                     categories: { connect: [{ id: kuchnia }] },
    //                 },
    //                 {
    //                     name: "Ręcznik papierowy",
    //                     categories: { connect: [{ id: kuchnia }] },
    //                 },
    //                 {
    //                     name: "Miska do mycia naczyń",
    //                     categories: { connect: [{ id: kuchnia }] },
    //                 },
    //                 {
    //                     name: "Szybkoschnący ręcznik kuchenny",
    //                     categories: { connect: [{ id: kuchnia }] },
    //                 },
    //                 {
    //                     name: "Gąbka do zmywania",
    //                     categories: { connect: [{ id: kuchnia }] },
    //                 },
    //                 {
    //                     name: "Płyn do zmywania",
    //                     categories: { connect: [{ id: kuchnia }] },
    //                 },
    //                 {
    //                     name: "Korkociąg",
    //                     categories: { connect: [{ id: kuchnia }] },
    //                 },
    //                 {
    //                     name: "Lampki kempingowe",
    //                     categories: { connect: [{ id: elektronika }] },
    //                 },
    //                 {
    //                     name: "Książka / Czytnik typu Kindle",
    //                     categories: { connect: [{ id: inne }] },
    //                 },
    //                 {
    //                     name: "Baterie do czołówki",
    //                     categories: { connect: [{ id: elektronika }] },
    //                 },
    //                 {
    //                     name: "Czołówka (latarka)",
    //                     categories: { connect: [{ id: elektronika }] },
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
    //                     name: "Paszport",
    //                     categories: { connect: [{ id: dokumenty }] },
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
    //                     name: "Ubezpieczenie podróżne",
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
    //                     name: "Nożyczki",
    //                     categories: { connect: [{ id: apteczka }] },
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
    //                     name: "Ręcznik",
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
    //                     name: "Zestaw do golenia lub depilacji",
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
    //                     name: "Składany parasol",
    //                     categories: { connect: [{ id: akcesoria }] },
    //                 },
    //                 {
    //                     name: "Nerka (saszetka biodrowa)",
    //                     categories: { connect: [{ id: akcesoria }] },
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
    //                     name: "Buty na zmianę",
    //                     categories: { connect: [{ id: obuwie }] },
    //                 },
    //                 {
    //                     name: "Czapka z daszkiem lub kapelusz",
    //                     categories: { connect: [{ id: odziez }] },
    //                 },
    //                 {
    //                     name: "Peleryna przeciwdeszczowa",
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
    //                     name: "Zwykła bluza",
    //                     categories: { connect: [{ id: odziez }] },
    //                 },
    //                 {
    //                     name: "Ciepłe ubrania na wieczór",
    //                     categories: { connect: [{ id: odziez }] },
    //                 },
    //                 {
    //                     name: "Długie spodnie dżinsowe",
    //                     categories: { connect: [{ id: odziez }] },
    //                 },
    //                 {
    //                     name: "Spodenki dresowe",
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
