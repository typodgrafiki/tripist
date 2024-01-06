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
    const egiptList = {
        name: "Afryka / Egipt",
        start: false,
        type: summerTemplateType,
    }

    // All Inclusive 14
    const egipt14 = await prisma.template.create({
        data: {
            name: egiptList.name,
            settingColor: "bg-blue-400",
            start: egiptList.start,
            listTypeId: egiptList.type,
            tripLength: 14,
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
    name: "Lekkie, przewiewne ubrania z długim rękawem",
    categories: { connect: [{ id: tropikalnaWyspa }] },
},
{
    name: "Bluza /Sweter",
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
    categories: { connect: [{ id: odziez }, { id: zeglarstwo }] },
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
    name: "Sandały",
    categories: { connect: [{ id: egipt }] },
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
    name: "Sprzęt do snorkelingu - maska, rurka, płetwy",
    categories: { connect: [{ id: tropikalnaWyspa }] },
},
{
    name: "Wodoodporny aparat fotograficzny",
    categories: { connect: [{ id: plaza }, { id: nurkowanie }] },
},
{
    name: "Pływający pojemnik na klucze i telefon",
    categories: { connect: [{ id: jezioro }]},
},
{
    name: "Mapa lokalna lub przewodnik",
    categories: { connect: [{ id: tropikalnaWyspa }] },
},

{
    name: "Krem z filtrem UV",
    categories: { connect: [{ id: plaza }] },
},
{
    name: "Strój kąpielowy",
    categories: { connect: [{ id: plaza }, {id: sport}, {id: plywanie}] },
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





// Dokumenty
{
    name: "Gotówka",
    categories: { connect: [{ id: dokumenty }]},
},
{
    name: "Dokumenty",
    categories: { connect: [{ id: dokumenty }]},
},
{
    name: "Ubezpieczenie podróżne",
    categories: { connect: [{ id: dokumenty }]},
},
{
    name: "Dowód osobisty",
    categories: { connect: [{ id: dokumenty }]},
},
{
    name: "Paszport",
    categories: { connect: [{ id: dokumenty }]},
},
{
    name: "Kopie ważnych dokumentów",
    categories: { connect: [{ id: dokumenty }, {id: biznes}] },
},
{
    name: "Bilety lotnicze",
    categories: { connect: [{ id: dokumenty }, {id: biznes}] },
},
{
    name: "Potwierdzenia rezerwacji",
    categories: { connect: [{ id: dokumenty }, {id: biznes}] },
},


// Elektronika
{
    name: "Aparat fotograficzny",
    categories: { connect: [{ id: elektronika }]},
},
{
    name: "Dodatkowa karta do aparatu (opcjonalnie)",
    categories: { connect: [{ id: elektronika }]},
},
{
    name: "Dodatkowa bateria do aparatu (opcjonalnie)",
    categories: { connect: [{ id: elektronika }]},
},
{
    name: "Ładowarka do telefonu + kabel",
    categories: { connect: [{ id: elektronika }]},
},
{
    name: "Powerbank + kabel",
    categories: { connect: [{ id: elektronika }]},
},
{
    name: "Gimball + ładowarka + kabel",
    categories: { connect: [{ id: elektronika }]},
},
{
    name: "Słuchawki",
    categories: { connect: [{ id: elektronika }, {id: joga}]},
},
{
    name: "Książka / Czytnik typu Kindle",
    categories: { connect: [{ id: elektronika }]},
},

// Apteczka
{
    name: "Leki",
    categories: {connect: [{ id: apteczka }]},
},
{
    name: "Tabletki przeciwbólowe",
    categories: {connect: [{ id: apteczka }]},
},
{
    name: "Tabletki na biegunkę",
    categories: {connect: [{ id: apteczka }]},
},
{
    name: "Tabletki na ból brzucha",
    categories: {connect: [{ id: apteczka }]},
},
{
    name: "Plastry opatrunkowe",
    categories: {connect: [{ id: apteczka }]},
},
{
    name: "Żel antybakteryjny",
    categories: {connect: [{ id: apteczka }]},
},
{
    name: "Tabletki na alergie",
    categories: {connect: [{ id: apteczka }]},
},
{
    name: "Środek na komary i kleszcze",
    categories: {connect: [{ id: apteczka }]},
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

{
    name: "Ręcznik",
    categories: { connect: [{ id: higiena }] },
},
{
    name: "Klapki pod prysznic",
    categories: { connect: [{ id: higiena }, { id: odziez }] },
},




{
    name: "Okulary przeciwsłoneczne",
    categories: { connect: [{ id: akcesoria }] },
},
{
    name: "Nerka (saszetka biodrowa)",
    categories: { connect: [{ id: akcesoria }] },
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
