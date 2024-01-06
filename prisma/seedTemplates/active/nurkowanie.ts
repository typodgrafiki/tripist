// npx prisma db seed
// npm run seed:sample
// npm run seed:template

import { getCategory, getType } from "../../seedHelpers"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    // Tworzenie typu
    const activeTemplateType = await getType("active", "Wakacje aktywne")

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
    const nurkowanieList = {
        name: "Nurkowanie",
        start: false,
        type: activeTemplateType,
    }

    // All Inclusive 14
    const nurkowanieN = await prisma.template.create({
        data: {
            name: nurkowanieList.name,
            settingColor: "bg-blue-400",
            start: nurkowanieList.start,
            listTypeId: nurkowanieList.type,
            tripLength: null,
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
    categories: { connect: [{ id: odziez }, { id: zeglarstwo }] },
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
    name: "Potwierdzenia rezerwacji",
    categories: { connect: [{ id: dokumenty }, {id: biznes}] },
},



// Elektronika
{
    name: "Aparat fotograficzny",
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
{
    name: "Bandaż",
    categories: {connect: [{ id: apteczka }]},
},
{
    name: "Nożyczki",
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
    name: "Okulary przeciwsłoneczne",
    categories: { connect: [{ id: akcesoria }] },
},
{
    name: "Worki na pranie",
    categories: { connect: [{ id: inne }, {id: camping}] },
},


{
    name: "Zegarek sportowy",
    categories: { connect: [{ id: sport }, { id: elektronika}] },
},
{
    name: "Czujnik pulsu na klatkę piersiową",
    categories: { connect: [{ id: sport }, { id: elektronika}] },
},
{
    name: "Bielizna termoaktywna",
    categories: { connect: [{ id: sport }, { id: trekking }] },
},



// ACTIVE Nurkowanie
{
    name: "Maska nurkowa",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Płetwy",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Snorkel",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Skrzela (BCD)",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Regulator nurkowy",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Kombinezon nurkowy",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Komputer nurkowy",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Butla z powietrzem",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Latarka nurkowa",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Nóż nurkowy",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Boja z linią",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Ręcznik szybkoschnący",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Torba na sprzęt nurkowy",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Aparat fotograficzny podwodny",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Woda",
    categories: { connect: [{ id: campingRodzinny }, {id: camping}, {id: jedzenie}, { id: zeglarstwo }, { id: winsurfing }, { id: nurkowanie }, { id: sport }] },
},
{
    name: "Przekąski energetyczne",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Certyfikat nurkowy",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Dziennik nurkowy",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Ubezpieczenie nurkowe",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Plecak lub torba",
    categories: { connect: [{ id: nurkowanie }] },
}




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
