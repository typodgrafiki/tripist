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
    const safariList = {
        name: "Safari",
        start: false,
        type: summerTemplateType,
    }

    // Trekking 14
    const safari14 = await prisma.template.create({
        data: {
            name: safariList.name,
            settingColor: "bg-blue-400",
            start: safariList.start,
            listTypeId: safariList.type,
            tripLength: 14,
            elements: {
                create: [// Odzież
                {
                    name: "Koszulki",
                    categories: { connect: [{ id: odziez }] },
                },
                {
                    name: "Spodenki krótkie",
                    categories: { connect: [{ id: odziez }] },
                },
                {
                    name: "Bluza",
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
                    name: "Chusta na głowę",
                    categories: { connect: [{ id: odziez }] },
                },
                
                
                
                // Safari
                {
                    name: "Przewiewne ubrania w kolorach neutralnych",
                    categories: { connect: [{ id: safari }] },
                },
                {
                    name: "Obuwie trekkingowe",
                    categories: { connect: [{ id: safari }] },
                },
                {
                    name: "Kapelusz z szerokim rondem",
                    categories: { connect: [{ id: safari }] },
                },
                {
                    name: "Okulary przeciwsłoneczne",
                    categories: { connect: [{ id: safari }, { id: akcesoria }, { id: rower }, { id: zeglarstwo }] },
                },
                {
                    name: "Lornetka",
                    categories: { connect: [{ id: safari }, { id: zeglarstwo }] },
                },
                {
                    name: "Plecak na wycieczki",
                    categories: { connect: [{ id: safari }] },
                },
                {
                    name: "Butelka na wodę",
                    categories: { connect: [{ id: safari }, { id: joga }, { id: survival }] },
                },
                {
                    name: "Przewodnik po dzikiej przyrodzie",
                    categories: { connect: [{ id: safari }] },
                },
                {
                    name: "Aparat fotograficzny z zoomem",
                    categories: { connect: [{ id: safari }] },
                }
                
                
                
                {
                    name: "Lekkie buty trekkingowe",
                    categories: { connect: [{ id: tropikalnaWyspa }] },
                },
                
                {
                    name: "Adapter do gniazdka elektrycznego",
                    categories: { connect: [{ id: tropikalnaWyspa }] },
                },
                {
                    name: "Butelka na wodę",
                    categories: {
                        connect: [
                            { id: safari },
                            { id: joga },
                            { id: survival },
                        ],
                    },
                },
                {
                    name: "Krem z filtrem UV",
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
                    name: "Paszport",
                    categories: { connect: [{ id: dokumenty }] },
                },
                {
                    name: "Wiza",
                    categories: { connect: [{ id: dokumenty }] },
                },
                {
                    name: "Kopie ważnych dokumentów",
                    categories: {
                        connect: [{ id: dokumenty }, { id: biznes }],
                    },
                },
                {
                    name: "Bilety lotnicze",
                    categories: {
                        connect: [{ id: dokumenty }, { id: biznes }],
                    },
                },
                {
                    name: "Potwierdzenia rezerwacji",
                    categories: {
                        connect: [{ id: dokumenty }, { id: biznes }],
                    },
                },
                
                // Elektronika
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
                    name: "Ręcznik",
                    categories: { connect: [{ id: higiena }] },
                },
                {
                    name: "Klapki pod prysznic",
                    categories: {
                        connect: [{ id: higiena }, { id: odziez }],
                    },
                },
                // Akcesoria
                {
                    name: "Nerka (saszetka biodrowa)",
                    categories: { connect: [{ id: akcesoria }] },
                },],
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
