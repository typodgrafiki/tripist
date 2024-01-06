// npx prisma db seed
// npm run seed:sample
// npm run seed:template

import { getCategory, getType } from "../../seedHelpers"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    // Tworzenie typu
    const winterTemplateType = await getType("winter", "Wakacje zimowe")

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
    const snowboardList = {
        name: "Snowboard",
        start: false,
        type: winterTemplateType,
    }

    // Snowboard

    const snowboardN= await prisma.template.create({
        data: {
            name: snowboardList.name,
            settingColor: "bg-blue-400",
            start: snowboardList.start,
            listTypeId: snowboardList.type,
            tripLength: null,
            elements: {
                create: [

// Odzież
{
    name: "Koszulki",
    categories: { connect: [{ id: odziez }] },
},
{
    name: "Spodnie dresowe",
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
// Odzież zima
{
    name: "Kurtka",
    categories: { connect: [{ id: odziez }] },
},
{
    name: "Rękawiczki",
    categories: { connect: [{ id: odziez }, { id: survival }, { id: citybreak_zima }] },
},
{
    name: "Czapka zimowa",
    categories: { connect: [{ id: odziez }] },
},
{
    name: "Szalik",
    categories: { connect: [{ id: odziez }, { id: survival }, { id: citybreak_zima }] },
},







// ZIMA Snowboard
{
    name: "Snowboard",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Buty snowboardowe",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Wiązania snowboardowe",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Kask snowboardowy",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Gogle snowboardowe",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Pokrowiec na snowboard",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Kurtka snowboardowa",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Spodnie snowboardowe",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Koszulka termiczna",
    categories: { connect: [{ id: narty }, { id: snowboard }] },
},
{
    name: "Spodnie termiczne",
    categories: { connect: [{ id: narty }, { id: snowboard }] },
},
{
    name: "Bielizna termiczna",
    categories: { connect: [{ id: narty }, { id: snowboard }] },
},
{
    name: "Polar / Bluza snowboardowa",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Rękawice snowboardowe",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Skarpety snowboardowe",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Czapka",
    categories: { connect: [{ id: narty }, { id: snowboard }] },
},
{
    name: "Plecak snowboardowy",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Mapa tras snowboardowych",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Komin narciarski",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Maska na twarz narciarska",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Plecak narciarski",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Balsam na usta",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Mapa tras narciarskich",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Kamera sportowa",
    categories: { connect: [{ id: snowboard }] },
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
    name: "Prawo jazdy",
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
    name: "Głośnik przenośny (bezprzewodowy)",
    categories: { connect: [{ id: elektronika }]},
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
    name: "Batony",
    categories: { connect: [{ id: jedzenie }, {id: trekking}] },
},
{
    name: "Worki na pranie",
    categories: { connect: [{ id: inne }, {id: camping}] },
},
{
    name: "Zegarek sportowy",
    categories: { connect: [{ id: sport }, { id: elektronika}] },
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
