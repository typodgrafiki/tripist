// npx prisma db seed
// npm run seed:sample
// npm run seed:template

import { createOrGetCategory, createOrGetType } from "./seedHelpers"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    // Funkcja pomocnicza do tworzenia lub używania istniejących kategorii

    // Tworzenie lub uzyskiwanie dostępu do kategorii
    const odziezCategory = await createOrGetCategory("Odzież")
    const akcesoriaCategory = await createOrGetCategory("Akcesoria")
    const higienaCategory = await createOrGetCategory("Higiena")
    const technologiaCategory = await createOrGetCategory("Elektronika")
    const inneCategory = await createOrGetCategory("Inne")
    const sprzetKempingowyCategory =
        await createOrGetCategory("Sprzęt kempingowy")
    const foodCategory = await createOrGetCategory("Jedzenie")

    // Tworzenie listy predefiniowanej na podróż biznesową
    const businessTripType = await createOrGetType("other", "Inne")
    const businessTripList = await prisma.template.create({
        data: {
            name: "Podróż biznesowa",
            settingColor: "bg-violet-400",
            start: false,
            listTypeId: businessTripType.id,
            tripLength: 3,
            elements: {
                create: [
                    {
                        name: "Elegancki strój",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Koszule/koszulki",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Spodnie/Spódnice",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Bielizna i skarpetki",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Buty eleganckie i casualowe",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Pasek i akcesoria",
                        categories: { connect: [{ id: akcesoriaCategory.id }] },
                    },
                    {
                        name: "Płaszcz lub lekka kurtka",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Laptop i ładowarka",
                        categories: {
                            connect: [{ id: technologiaCategory.id }],
                        },
                    },
                    {
                        name: "Telefon komórkowy i ładowarka",
                        categories: {
                            connect: [{ id: technologiaCategory.id }],
                        },
                    },
                    {
                        name: "Adapter do gniazdek",
                        categories: {
                            connect: [{ id: technologiaCategory.id }],
                        },
                    },
                    {
                        name: "Power bank",
                        categories: {
                            connect: [{ id: technologiaCategory.id }],
                        },
                    },
                    {
                        name: "Słuchawki",
                        categories: {
                            connect: [{ id: technologiaCategory.id }],
                        },
                    },
                    {
                        name: "Notatnik i długopisy",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Wizytówki",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Mapy lub przewodniki",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Kopie ważnych dokumentów",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Szczoteczka i pasta do zębów",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },
                    {
                        name: "Szampon, żel pod prysznic, odżywka",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },
                    {
                        name: "Dezodorant",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },
                    {
                        name: "Kosmetyczka z podstawowymi kosmetykami",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },
                    {
                        name: "Zestaw do golenia lub depilacji",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },
                    {
                        name: "Mała apteczka",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: akcesoriaCategory.id }] },
                    },
                    {
                        name: "Mały parasol lub peleryna przeciwdeszczowa",
                        categories: { connect: [{ id: akcesoriaCategory.id }] },
                    },
                    {
                        name: "Mała torba na zakupy lub plecak",
                        categories: { connect: [{ id: akcesoriaCategory.id }] },
                    },
                    {
                        name: "Przekąski i butelka na wodę",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Książka lub e-czytnik",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                ],
            },
        },
    })

    const vacationTemplateType = await createOrGetType(
        "summer",
        "Wakacje letnie"
    )
    const vacationList = await prisma.template.create({
        data: {
            name: "Wakacje nad Morzem",
            settingColor: "bg-blue-400",
            start: false,
            listTypeId: vacationTemplateType.id,
            tripLength: 7,
            elements: {
                create: [
                    // Odzież i Akcesoria
                    {
                        name: "Stroje kąpielowe (kilka sztuk)",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Ręcznik plażowy",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Sandały/klapki plażowe",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Kapelusz przeciwsłoneczny",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Lekkie sukienki/spodenki",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Koszulki/T-shirty",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Lekka kurtka lub sweter na chłodniejsze wieczory",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Piżama",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Bielizna",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Torba plażowa",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },

                    // Akcesoria Plażowe i Przeciwsłoneczne
                    {
                        name: "Krem z filtrem UV",
                        categories: {
                            connect: [{ id: akcesoriaCategory.id }],
                        },
                    },
                    {
                        name: "Balsam po opalaniu",
                        categories: {
                            connect: [{ id: akcesoriaCategory.id }],
                        },
                    },
                    {
                        name: "Mata plażowa lub leżak",
                        categories: {
                            connect: [{ id: akcesoriaCategory.id }],
                        },
                    },
                    {
                        name: "Parasol plażowy",
                        categories: {
                            connect: [{ id: akcesoriaCategory.id }],
                        },
                    },
                    {
                        name: "Sprzęt do nurkowania (maska, rurka)",
                        categories: {
                            connect: [{ id: akcesoriaCategory.id }],
                        },
                    },
                    {
                        name: "Pływadła/plażowa piłka",
                        categories: {
                            connect: [{ id: akcesoriaCategory.id }],
                        },
                    },
                    {
                        name: "Butelka na wodę",
                        categories: {
                            connect: [{ id: akcesoriaCategory.id }],
                        },
                    },

                    // Elektronika
                    {
                        name: "Aparat fotograficzny/lustrzanka",
                        categories: {
                            connect: [{ id: technologiaCategory.id }],
                        },
                    },
                    {
                        name: "Smartfon i ładowarka",
                        categories: {
                            connect: [{ id: technologiaCategory.id }],
                        },
                    },
                    {
                        name: "Power bank",
                        categories: {
                            connect: [{ id: technologiaCategory.id }],
                        },
                    },
                    {
                        name: "Głośnik przenośny (wodoodporny)",
                        categories: {
                            connect: [{ id: technologiaCategory.id }],
                        },
                    },
                    {
                        name: "E-book lub czytnik Kindle",
                        categories: {
                            connect: [{ id: technologiaCategory.id }],
                        },
                    },

                    // Zdrowie i Higiena
                    {
                        name: "Apteczka pierwszej pomocy (plastry, środki przeciwbólowe, środki przeciw alergii)",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },
                    {
                        name: "Produkty higieniczne (szampon, żel pod prysznic, dezodorant)",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },
                    {
                        name: "Kosmetyki (krem nawilżający, balsam do ust)",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },
                    {
                        name: "Repelent na komary",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },

                    // Inne
                    {
                        name: "Dokumenty podróżne (paszport, dowód osobisty, bilety, ubezpieczenie)",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Książki/planszówki/karty do gry",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Notatnik i długopis",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Mała apteczka z podstawowymi lekarstwami",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Składany parasol w razie deszczu",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                ],
            },
        },
    })

    const trekkingTemplateType = await createOrGetType(
        "summer",
        "Wakacje letnie"
    )
    const trekkingList = await prisma.template.create({
        data: {
            name: "Trekking w górach - lato",
            settingColor: "bg-blue-400",
            start: false,
            listTypeId: trekkingTemplateType.id,
            tripLength: 5,
            elements: {
                create: [
                    // Odzież i Akcesoria
                    {
                        name: "Stroje kąpielowe (kilka sztuk)",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Ręcznik plażowy",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Sandały/klapki plażowe",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Kapelusz przeciwsłoneczny",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Lekkie sukienki/spodenki",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Koszulki/T-shirty",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Lekka kurtka lub sweter na chłodniejsze wieczory",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Piżama",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Bielizna",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Torba plażowa",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },

                    // Akcesoria Plażowe i Przeciwsłoneczne
                    {
                        name: "Krem z filtrem UV",
                        categories: {
                            connect: [{ id: akcesoriaCategory.id }],
                        },
                    },
                    {
                        name: "Balsam po opalaniu",
                        categories: {
                            connect: [{ id: akcesoriaCategory.id }],
                        },
                    },
                    {
                        name: "Mata plażowa lub leżak",
                        categories: {
                            connect: [{ id: akcesoriaCategory.id }],
                        },
                    },
                    {
                        name: "Parasol plażowy",
                        categories: {
                            connect: [{ id: akcesoriaCategory.id }],
                        },
                    },
                    {
                        name: "Sprzęt do nurkowania (maska, rurka)",
                        categories: {
                            connect: [{ id: akcesoriaCategory.id }],
                        },
                    },
                    {
                        name: "Pływadła/plażowa piłka",
                        categories: {
                            connect: [{ id: akcesoriaCategory.id }],
                        },
                    },
                    {
                        name: "Butelka na wodę",
                        categories: {
                            connect: [{ id: akcesoriaCategory.id }],
                        },
                    },

                    // Elektronika
                    {
                        name: "Aparat fotograficzny/lustrzanka",
                        categories: {
                            connect: [{ id: technologiaCategory.id }],
                        },
                    },
                    {
                        name: "Smartfon i ładowarka",
                        categories: {
                            connect: [{ id: technologiaCategory.id }],
                        },
                    },
                    {
                        name: "Power bank",
                        categories: {
                            connect: [{ id: technologiaCategory.id }],
                        },
                    },
                    {
                        name: "Głośnik przenośny (wodoodporny)",
                        categories: {
                            connect: [{ id: technologiaCategory.id }],
                        },
                    },
                    {
                        name: "E-book lub czytnik Kindle",
                        categories: {
                            connect: [{ id: technologiaCategory.id }],
                        },
                    },

                    // Zdrowie i Higiena
                    {
                        name: "Apteczka pierwszej pomocy (plastry, środki przeciwbólowe, środki przeciw alergii)",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },
                    {
                        name: "Produkty higieniczne (szampon, żel pod prysznic, dezodorant)",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },
                    {
                        name: "Kosmetyki (krem nawilżający, balsam do ust)",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },
                    {
                        name: "Repelent na komary",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },

                    // Inne
                    {
                        name: "Dokumenty podróżne (paszport, dowód osobisty, bilety, ubezpieczenie)",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Książki/planszówki/karty do gry",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Notatnik i długopis",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Mała apteczka z podstawowymi lekarstwami",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Składany parasol w razie deszczu",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                ],
            },
        },
    })

    const campingTemplateType = await createOrGetType("camping", "Camping")
    const campingList10 = await prisma.template.create({
        data: {
            name: "Kemping",
            settingColor: "bg-blue-400",
            start: false,
            listTypeId: campingTemplateType.id,
            tripLength: 10,
            elements: {
                create: [
                    // Sprzęt do kempingu
                    {
                        name: "Namiot z osprzętem (kolce, linki)",
                        categories: {
                            connect: [{ id: sprzetKempingowyCategory.id }],
                        },
                    },
                    {
                        name: "Śpiwór",
                        categories: {
                            connect: [{ id: sprzetKempingowyCategory.id }],
                        },
                    },
                    {
                        name: "Karimata/materac dmuchany",
                        categories: {
                            connect: [{ id: sprzetKempingowyCategory.id }],
                        },
                    },
                    {
                        name: "Latarka lub latarka czołowa",
                        categories: {
                            connect: [{ id: sprzetKempingowyCategory.id }],
                        },
                    },
                    {
                        name: "Lekkie krzesełka kempingowe",
                        categories: {
                            connect: [{ id: sprzetKempingowyCategory.id }],
                        },
                    },
                    {
                        name: "Stół kempingowy składany",
                        categories: {
                            connect: [{ id: sprzetKempingowyCategory.id }],
                        },
                    },

                    // Gotowanie i jedzenie
                    {
                        name: "Kuchenka turystyczna",
                        categories: { connect: [{ id: foodCategory.id }] },
                    },
                    {
                        name: "Menażka, naczynia, sztućce",
                        categories: { connect: [{ id: foodCategory.id }] },
                    },
                    {
                        name: "Składany kubek, talerze",
                        categories: { connect: [{ id: foodCategory.id }] },
                    },
                    {
                        name: "Propan/butan do kuchenki",
                        categories: { connect: [{ id: foodCategory.id }] },
                    },
                    {
                        name: "Żywność (kawa, herbata, makarony, sosy, konserwy)",
                        categories: { connect: [{ id: foodCategory.id }] },
                    },
                    {
                        name: "Proszek do uzdatniania wody",
                        categories: { connect: [{ id: foodCategory.id }] },
                    },

                    // Odzież i akcesoria
                    {
                        name: "Buty trekkingowe/wodoodporne",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Odzież termoaktywna",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Kurtka przeciwdeszczowa",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Czapka z daszkiem lub bandana",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Krem z filtrem przeciwsłonecznym",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },

                    // Zdrowie i higiena
                    {
                        name: "Apteczka pierwszej pomocy",
                        categories: {
                            connect: [{ id: higienaCategory.id }],
                        },
                    },
                    {
                        name: "Środki przeciw owadom",
                        categories: {
                            connect: [{ id: higienaCategory.id }],
                        },
                    },
                    {
                        name: "Środki higieniczne (papier toaletowy, wilgotne chusteczki, żel antybakteryjny)",
                        categories: {
                            connect: [{ id: higienaCategory.id }],
                        },
                    },
                    {
                        name: "Ręcznik szybkoschnący",
                        categories: {
                            connect: [{ id: higienaCategory.id }],
                        },
                    },

                    // Inne
                    {
                        name: "Power bank",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Aparat fotograficzny",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Lornetka",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Kompas/GPS",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Notatnik i długopis",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Torba na śmieci",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                ],
            },
        },
    })

    const campingList2 = await prisma.template.create({
        data: {
            name: "Kemping",
            settingColor: "bg-blue-400",
            start: false,
            listTypeId: campingTemplateType.id,
            tripLength: 2,
            elements: {
                create: [
                    // Sprzęt do kempingu
                    {
                        name: "Namiot z osprzętem (kolce, linki)",
                        categories: {
                            connect: [{ id: sprzetKempingowyCategory.id }],
                        },
                    },
                    {
                        name: "Śpiwór",
                        categories: {
                            connect: [{ id: sprzetKempingowyCategory.id }],
                        },
                    },
                    {
                        name: "Karimata/materac dmuchany",
                        categories: {
                            connect: [{ id: sprzetKempingowyCategory.id }],
                        },
                    },
                    {
                        name: "Latarka lub latarka czołowa",
                        categories: {
                            connect: [{ id: sprzetKempingowyCategory.id }],
                        },
                    },
                    {
                        name: "Lekkie krzesełka kempingowe",
                        categories: {
                            connect: [{ id: sprzetKempingowyCategory.id }],
                        },
                    },
                    {
                        name: "Stół kempingowy składany",
                        categories: {
                            connect: [{ id: sprzetKempingowyCategory.id }],
                        },
                    },

                    // Gotowanie i jedzenie
                    {
                        name: "Kuchenka turystyczna",
                        categories: { connect: [{ id: foodCategory.id }] },
                    },
                    {
                        name: "Menażka, naczynia, sztućce",
                        categories: { connect: [{ id: foodCategory.id }] },
                    },
                    {
                        name: "Składany kubek, talerze",
                        categories: { connect: [{ id: foodCategory.id }] },
                    },
                    {
                        name: "Propan/butan do kuchenki",
                        categories: { connect: [{ id: foodCategory.id }] },
                    },
                    {
                        name: "Żywność (kawa, herbata, makarony, sosy, konserwy)",
                        categories: { connect: [{ id: foodCategory.id }] },
                    },
                    {
                        name: "Proszek do uzdatniania wody",
                        categories: { connect: [{ id: foodCategory.id }] },
                    },

                    // Odzież i akcesoria
                    {
                        name: "Buty trekkingowe/wodoodporne",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Odzież termoaktywna",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Kurtka przeciwdeszczowa",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Czapka z daszkiem lub bandana",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Krem z filtrem przeciwsłonecznym",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },

                    // Zdrowie i higiena
                    {
                        name: "Apteczka pierwszej pomocy",
                        categories: {
                            connect: [{ id: higienaCategory.id }],
                        },
                    },
                    {
                        name: "Środki przeciw owadom",
                        categories: {
                            connect: [{ id: higienaCategory.id }],
                        },
                    },
                    {
                        name: "Środki higieniczne (papier toaletowy, wilgotne chusteczki, żel antybakteryjny)",
                        categories: {
                            connect: [{ id: higienaCategory.id }],
                        },
                    },
                    {
                        name: "Ręcznik szybkoschnący",
                        categories: {
                            connect: [{ id: higienaCategory.id }],
                        },
                    },

                    // Inne
                    {
                        name: "Power bank",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Aparat fotograficzny",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Lornetka",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Kompas/GPS",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Notatnik i długopis",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Torba na śmieci",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                ],
            },
        },
    })

    // ... (kolejne listy i ich elementy)
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
