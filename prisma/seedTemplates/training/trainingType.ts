// npx prisma db seed
// npm run seed:sample
// npm run seed:template

import { getCategory, getType } from "../../_helpers/seedHelpers"
import { PrismaClient } from "@prisma/client"

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
                    // Odzież
                    {
                        name: "Koszulka sportowa",
                        categories: {
                            connect: [{ id: odziez }, { id: sport }],
                        },
                    },
                    {
                        name: "Spodenki sportowe",
                        categories: {
                            connect: [{ id: odziez }, { id: sport }],
                        },
                    },
                    {
                        name: "Buty sportowe",
                        categories: {
                            connect: [{ id: obuwie }, { id: sport }],
                        },
                    },

                    // Akcesoria
                    {
                        name: "Ręcznik do ćwiczeń",
                        categories: {
                            connect: [{ id: akcesoria }, { id: sport }],
                        },
                    },
                    {
                        name: "Butelka z wodą",
                        categories: {
                            connect: [{ id: akcesoria }, { id: sport }],
                        },
                    },
                    {
                        name: "Rękawiczki treningowe",
                        categories: {
                            connect: [{ id: akcesoria }, { id: sport }],
                        },
                    },
                    {
                        name: "Słuchawki sportowe",
                        categories: {
                            connect: [{ id: elektronika }, { id: sport }],
                        },
                    },
                    {
                        name: "Zegarek sportowy",
                        categories: {
                            connect: [{ id: elektronika }, { id: sport }],
                        },
                    },
                    {
                        name: "Czujnik pulsu na klatkę piersiową",
                        categories: {
                            connect: [{ id: elektronika }, { id: sport }],
                        },
                    },
                    // Prysznic
                    {
                        name: "Ręcznik pod prysznic",
                        categories: {
                            connect: [{ id: higiena }, { id: sport }],
                        },
                    },
                    {
                        name: "Klapki pod prysznic",
                        categories: {
                            connect: [{ id: higiena }, { id: sport }],
                        },
                    },
                    {
                        name: "Żel pod prysznic",
                        categories: {
                            connect: [{ id: higiena }, { id: sport }],
                        },
                    },
                    {
                        name: "Dezodorant",
                        categories: {
                            connect: [{ id: higiena }, { id: sport }],
                        },
                    },
                    {
                        name: "Bielizna na przebranie",
                        categories: {
                            connect: [{ id: higiena }, { id: sport }],
                        },
                    },
                    {
                        name: "Zamek do szafki (jeśli wymagany)",
                        categories: {
                            connect: [{ id: higiena }, { id: sport }],
                        },
                    },
                    // Dodatki
                    {
                        name: "Karnet / Karta dostępu",
                        categories: {
                            connect: [{ id: dokumenty }, { id: sport }],
                        },
                    },
                    {
                        name: "Zamek do szafki (jeśli wymagany)",
                        categories: { connect: [{ id: inne }, { id: sport }] },
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
                        name: "Buty neoprenowe",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Ręcznik",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Zegarek sportowy",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Bielizna na przebranie",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Kieszonka wodoodporna na mokre rzeczy",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Szalik",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Czapka zimowa",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Rękawiczki zimowe",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Strój kąpielowy",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Termos z ciepłą herbatą",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Mata / dywanik plażowy",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Przekąski po treningu",
                        categories: { connect: [{ id: jedzenie }] },
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
                        name: "Ręcznik",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Zegarek sportowy",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Kieszonka wodoodporna na mokre rzeczy",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Strój kąpielowy",
                        categories: {
                            connect: [{ id: odziez }, { id: sprzet }],
                        },
                    },
                    {
                        name: "Czepek",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    {
                        name: "Okulary pływackie",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    {
                        name: "Klapki basenowe",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Karnet",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Zamek do szafki basenowej (jeśli wymagany)",
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
                        name: "Mata do jogi",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    {
                        name: "Ręcznik na matę",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Karnet",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Zamek do szafki (jeśli wymagany)",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Wygodne ubranie do jogi",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Bloki jogi",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    {
                        name: "Woda i bidon",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Słuchawki do muzyki relaksacyjnej (opcjonalnie)",
                        categories: { connect: [{ id: elektronika }] },
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
                    // Odzież
                    {
                        name: "Koszulka sportowa",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Buty wspinaczkowe",
                        categories: {
                            connect: [{ id: sprzet }, { id: obuwie }],
                        },
                    },
                    // Ręczniki i akcesoria
                    {
                        name: "Ręcznik pod prysznic",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Magnezja",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    {
                        name: "Uprząż",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    {
                        name: "Karabinek",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    {
                        name: "Przyrząd asekuracyjny",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    {
                        name: "Woda",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    // Dodatki
                    {
                        name: "Karnet / Karta dostępu",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Klapki pod prysznic",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Spodenki sportowe",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Bielizna na przebranie",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Żel pod prysznic",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Dezodorant",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Zamek do szafki (jeśli wymagany)",
                        categories: { connect: [{ id: inne }] },
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
                    // Odzież
                    {
                        name: "Koszulka sportowa",
                        categories: {
                            connect: [{ id: odziez }, { id: sport }],
                        },
                    },
                    {
                        name: "Spodenki sportowe",
                        categories: {
                            connect: [{ id: odziez }, { id: sport }],
                        },
                    },
                    {
                        name: "Buty sportowe do CrossFit",
                        categories: {
                            connect: [{ id: obuwie }, { id: sport }],
                        },
                    },

                    // Akcesoria
                    {
                        name: "Ręcznik do ćwiczeń",
                        categories: {
                            connect: [{ id: akcesoria }, { id: sport }],
                        },
                    },
                    {
                        name: "Butelka z wodą",
                        categories: {
                            connect: [{ id: akcesoria }, { id: sport }],
                        },
                    },
                    {
                        name: "Rękawiczki treningowe",
                        categories: {
                            connect: [{ id: akcesoria }, { id: sport }],
                        },
                    },
                    {
                        name: "Słuchawki sportowe",
                        categories: {
                            connect: [{ id: elektronika }, { id: sport }],
                        },
                    },
                    {
                        name: "Zegarek sportowy",
                        categories: {
                            connect: [{ id: elektronika }, { id: sport }],
                        },
                    },
                    {
                        name: "Czujnik pulsu na klatkę piersiową",
                        categories: {
                            connect: [{ id: elektronika }, { id: sport }],
                        },
                    },
                    // Prysznic
                    {
                        name: "Ręcznik pod prysznic",
                        categories: {
                            connect: [{ id: higiena }, { id: sport }],
                        },
                    },
                    {
                        name: "Klapki pod prysznic",
                        categories: {
                            connect: [{ id: higiena }, { id: sport }],
                        },
                    },
                    {
                        name: "Żel pod prysznic",
                        categories: {
                            connect: [{ id: higiena }, { id: sport }],
                        },
                    },
                    {
                        name: "Dezodorant",
                        categories: {
                            connect: [{ id: higiena }, { id: sport }],
                        },
                    },
                    {
                        name: "Bielizna na przebranie",
                        categories: {
                            connect: [{ id: higiena }, { id: sport }],
                        },
                    },
                    {
                        name: "Zamek do szafki (jeśli wymagany)",
                        categories: {
                            connect: [{ id: higiena }, { id: sport }],
                        },
                    },
                    // Dodatki
                    {
                        name: "Karnet / Karta dostępu",
                        categories: {
                            connect: [{ id: dokumenty }, { id: sport }],
                        },
                    },
                    {
                        name: "Zamek do szafki (jeśli wymagany)",
                        categories: { connect: [{ id: inne }, { id: sport }] },
                    },
                    {
                        name: "Pasek na telefon treningowy",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Skakanka",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    {
                        name: "Krem na otarcia (jeśli jest potrzebny)",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Odpowiednie elementy osłonowe (jeśli są używane)",
                        categories: { connect: [{ id: sprzet }] },
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
                    // Odzież
                    {
                        name: "Kajak (lub wypożyczony)",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    {
                        name: "Wiosło lub wiosła (lub wypożyczone)",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    {
                        name: "Kamizelka ratunkowa",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Pływająca torba lub pojemnik na rzeczy",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Strój kąpielowy lub odzież do wody",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Ręcznik kąpielowy",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Okulary przeciwsłoneczne z mocowaniem",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Krem przeciwsłoneczny",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Kapelusz lub czapka z daszkiem",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Woda pitna",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Jedzenie na trasę",
                        categories: { connect: [{ id: jedzenie }] },
                    },
                    {
                        name: "Zegarek sportowy",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Żeberko lub sprzęt naprawczy do kajaka (opcjonalnie)",
                        categories: { connect: [{ id: akcesoria }] },
                    },
                    {
                        name: "Klapki",
                        categories: { connect: [{ id: obuwie }] },
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
                    // Odzież
                    {
                        name: "Koszulka sportowa",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Spodenki sportowe",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Leginsy sportowe",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Buty treningowe (jeśli wymagane)",
                        categories: { connect: [{ id: obuwie }] },
                    },
                    // Ręczniki i akcesoria
                    {
                        name: "Ręcznik pod prysznic",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Ręcznik do ćwiczeń",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Woda",
                        categories: { connect: [{ id: inne }] },
                    },
                    {
                        name: "Rękawice treningowe",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    {
                        name: "Opaska na nadgarstek (jeśli potrzebna)",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    {
                        name: "Groin cup (ochrona krocza) - dla mężczyzn",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    {
                        name: "Ochraniacze na nogi (opcjonalnie)",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    {
                        name: "Kask (opcjonalnie)",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    {
                        name: "Workout bag, łapaczki itp.",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    {
                        name: "Workout bag, łapaczki itp.",
                        categories: { connect: [{ id: sprzet }] },
                    },
                    // Dodatki
                    {
                        name: "Karnet / Karta dostępu do siłowni",
                        categories: { connect: [{ id: dokumenty }] },
                    },
                    {
                        name: "Zegarek sportowy",
                        categories: { connect: [{ id: elektronika }] },
                    },
                    {
                        name: "Klapki pod prysznic",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Bielizna na przebranie",
                        categories: { connect: [{ id: odziez }] },
                    },
                    {
                        name: "Żel pod prysznic",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Dezodorant",
                        categories: { connect: [{ id: higiena }] },
                    },
                    {
                        name: "Zamek do szafki (jeśli wymagany)",
                        categories: { connect: [{ id: inne }] },
                    },
                ],
            },
        },
    })
}
