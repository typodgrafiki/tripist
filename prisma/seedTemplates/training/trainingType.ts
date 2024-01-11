// npx prisma db seed
// npm run seed:sample
// npm run seed:template

import { getCategory, getType } from "../../_helpers/seedHelpers"
import { Gender, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function trainingType() {
    // Tworzenie lub uzyskiwanie dostępu do kategorii
    const odziez = await getCategory("Odzież")
    const obuwie = await getCategory("Obuwie")
    const akcesoria = await getCategory("Akcesoria")
    const elektronika = await getCategory("Elektronika")
    const inne = await getCategory("Inne")
    const jedzenie = await getCategory("Jedzenie")
    const dokumenty = await getCategory("Dokumenty")
    const sprzet = await getCategory("Sprzęt sportowy")
    const sport = await getCategory("Sport")
    const higiena = await getCategory("Łazienka / Higiena")

    const trainingTemplateType = await getType("training", "Trening")
    const training_silownia = await prisma.template.create({
        data: {
            name: "Siłownia",
            settingColor: "bg-blue-400",
            listTypeId: trainingTemplateType,
            elements: {
                create: [
                    {
                        name: "Zamek do szafki (jeśli wymagany)",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Bielizna na przebranie",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Karnet / Karta dostępu",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Dezodorant",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Żel pod prysznic",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Klapki pod prysznic",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Czujnik pulsu na klatkę piersiową",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Ręcznik pod prysznic",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Zegarek sportowy",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Słuchawki sportowe",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Rękawiczki treningowe",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Butelka z wodą",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Buty sportowe",
                        categories: { connect: [{ id: obuwie }] },
                    },
                    {
                        name: "Ręcznik do ćwiczeń",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Spodenki sportowe",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Koszulka sportowa",
                        categories: { connect: [{ id: odziez }] },
                    },
                ],
            },
        },
    })

    const training_morsowanie = await prisma.template.create({
        data: {
            name: "Morsowanie",
            settingColor: "bg-blue-400",
            listTypeId: trainingTemplateType,
            elements: {
                create: [
                    {
                        name: "Przekąski po treningu",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Mata / dywanik plażowy",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Termos z ciepłą herbatą",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Strój kąpielowy",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Rękawiczki zimowe",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Czapka zimowa",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Szalik",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Kieszonka wodoodporna na mokre rzeczy",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Bielizna na przebranie",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Zegarek sportowy",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Ręcznik",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Buty neoprenowe",
                        categories: { connect: [{ id: odziez }] },
                    },
                ],
            },
        },
    })

    const training_basen = await prisma.template.create({
        data: {
            name: "Basen",
            settingColor: "bg-blue-400",
            listTypeId: trainingTemplateType,
            elements: {
                create: [
                    {
                        name: "Zamek do szafki basenowej (jeśli wymagany)",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Karnet",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Klapki basenowe",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Okulary pływackie",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    {
                        name: "Czepek",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    {
                        name: "Strój kąpielowy",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Kieszonka wodoodporna na mokre rzeczy",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Zegarek sportowy",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Ręcznik",
                        categories: { connect: [{ id: inne }] },
                    },
                ],
            },
        },
    })

    const training_joga = await prisma.template.create({
        data: {
            name: "Joga",
            settingColor: "bg-blue-400",
            listTypeId: trainingTemplateType,
            elements: {
                create: [
                    {
                        name: "Słuchawki do muzyki relaksacyjnej (opcjonalnie)",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Woda i bidon",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Bloki jogi",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    {
                        name: "Wygodne ubranie do jogi",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Zamek do szafki (jeśli wymagany)",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Karnet",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Ręcznik na matę",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Mata do jogi",
                        categories: { connect: [{ id: sprzet }] },
                    },
                ],
            },
        },
    })

    const training_scianka = await prisma.template.create({
        data: {
            name: "Ścianka wspinaczkowa",
            settingColor: "bg-blue-400",
            listTypeId: trainingTemplateType,
            elements: {
                create: [
                    {
                        name: "Zamek do szafki (jeśli wymagany)",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Dezodorant",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Żel pod prysznic",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Bielizna na przebranie",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Spodenki sportowe",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Klapki pod prysznic",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Butelka z wodą",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Karnet / Karta dostępu",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Przyrząd asekuracyjny",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    {
                        name: "Karabinek",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    {
                        name: "Uprząż",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    {
                        name: "Magnezja",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    {
                        name: "Buty wspinaczkowe",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    {
                        name: "Ręcznik pod prysznic",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Koszulka sportowa",
                        categories: { connect: [{ id: odziez }] },
                    },
                ],
            },
        },
    })

    const training_crossfit = await prisma.template.create({
        data: {
            name: "Crossfit",
            settingColor: "bg-blue-400",
            listTypeId: trainingTemplateType,
            elements: {
                create: [
                    {
                        name: "Odpowiednie elementy osłonowe (jeśli są używane)",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    {
                        name: "Krem na otarcia (jeśli jest potrzebny)",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Skakanka",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    {
                        name: "Pasek na telefon treningowy",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Zamek do szafki (jeśli wymagany)",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Bielizna na przebranie",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Karnet / Karta dostępu",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Dezodorant",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Żel pod prysznic",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Klapki pod prysznic",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Czujnik pulsu na klatkę piersiową",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Ręcznik pod prysznic",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Zegarek sportowy",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Słuchawki sportowe",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Rękawiczki treningowe",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Butelka z wodą",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Buty sportowe do CrossFit",
                        categories: { connect: [{ id: obuwie }] },
                    },
                    {
                        name: "Ręcznik do ćwiczeń",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Spodenki sportowe",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Koszulka sportowa",
                        categories: { connect: [{ id: odziez }] },
                    },
                ],
            },
        },
    })

    const training_kajak = await prisma.template.create({
        data: {
            name: "Kajak",
            settingColor: "bg-blue-400",
            listTypeId: trainingTemplateType,
            elements: {
                create: [
                    {
                        name: "Klapki",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Żeberko lub sprzęt naprawczy do kajaka (opcjonalnie)",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Zegarek sportowy",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Jedzenie na trasę",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Woda pitna",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Kapelusz lub czapka z daszkiem",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Krem przeciwsłoneczny",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Okulary przeciwsłoneczne z mocowaniem",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Ręcznik kąpielowy",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Strój kąpielowy lub odzież do wody",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Pływająca torba lub pojemnik na rzeczy",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Kamizelka ratunkowa",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Wiosło lub wiosła (lub wypożyczone)",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    {
                        name: "Kajak (lub wypożyczony)",
                        categories: { connect: [{ id: sprzet }] },
                    },
                ],
            },
        },
    })

    const training_mma = await prisma.template.create({
        data: {
            name: "Sztuki walki",
            settingColor: "bg-blue-400",
            listTypeId: trainingTemplateType,
            elements: {
                create: [
                    {
                        name: "Zamek do szafki (jeśli wymagany)",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Dezodorant",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Żel pod prysznic",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Bielizna na przebranie",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Klapki pod prysznic",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Zegarek sportowy",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Workout bag, łapaczki itp.",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    {
                        name: "Karnet / Karta dostępu do siłowni",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Workout bag, łapaczki itp.",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    {
                        name: "Kask (opcjonalnie)",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    {
                        name: "Ochraniacze na nogi (opcjonalnie)",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    {
                        name: "Groin cup (ochrona krocza) - dla mężczyzn",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    {
                        name: "Opaska na nadgarstek (jeśli potrzebna)",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    {
                        name: "Rękawice treningowe",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    {
                        name: "Woda",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Ręcznik do ćwiczeń",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Buty treningowe (jeśli wymagane)",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Ręcznik pod prysznic",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Leginsy sportowe",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Spodenki sportowe",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Koszulka sportowa",
                        categories: { connect: [{ id: odziez }] },
                    },
                ],
            },
        },
    })
}
