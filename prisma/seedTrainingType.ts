// npx prisma db seed
// npm run seed:sample
// npm run seed:template

import { createOrGetCategory, createOrGetType } from "./seedHelpers"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    // Tworzenie lub uzyskiwanie dostępu do kategorii
    const odziezCategory = await createOrGetCategory("Odzież")
    const akcesoriaCategory = await createOrGetCategory("Akcesoria")
    const technologiaCategory = await createOrGetCategory("Elektronika")
    const inneCategory = await createOrGetCategory("Inne")
    const jedzenieCategory = await createOrGetCategory("Jedzenie")
    const dokumenty = await createOrGetCategory("Dokumenty")
    const sprzet = await createOrGetCategory("Sprzęt sportowy")

    const trainingTemplateType = await createOrGetType("active", "Trening")
    const training_silownia = await prisma.template.create({
        data: {
            name: "Siłownia",
            settingColor: "bg-blue-400",
            start: false,
            listTypeId: trainingTemplateType,
            elements: {
                create: [
                        // Odzież
                        {
                            name: "Koszulka sportowa",
                            categories: { connect: [{ id: odziezCategory }] },
                        },
                        {
                            name: "Buty sportowe",
                            categories: { connect: [{ id: odziezCategory }] },
                        },
                        // Ręczniki i akcesoria
                        {
                            name: "Ręcznik pod prysznic",
                            categories: { connect: [{ id: inneCategory }] },
                        },
                        {
                            name: "Ręcznik do ćwiczeń",
                            categories: { connect: [{ id: inneCategory }] },
                        },
                        {
                            name: "Woda",
                            categories: { connect: [{ id: akcesoriaCategory }] },
                        },
                        {
                            name: "Słuchawki sportowe",
                            categories: { connect: [{ id: akcesoriaCategory }] },
                        },
                        {
                            name: "Rękawiczki treningowe (opcjonalnie)",
                            categories: { connect: [{ id: sprzet }] },
                        },
                        // Dodatki
                        {
                            name: "Karnet / Karta dostępu do siłowni",
                            categories: { connect: [{ id: dokumenty }] },
                        },
                        {
                            name: "Zegarek sportowy",
                            categories: { connect: [{ id: technologiaCategory }] },
                        },
                        {
                            name: "Klapki pod prysznic",
                            categories: { connect: [{ id: inneCategory }] },
                        },
                        {
                            name: "Spodenki sportowe",
                            categories: { connect: [{ id: odziezCategory }] },
                        },
                        {
                            name: "Bielizna na przebranie",
                            categories: { connect: [{ id: odziezCategory }] },
                        },
                        {
                            name: "Żel pod prysznic",
                            categories: { connect: [{ id: akcesoriaCategory }] },
                        },
                        {
                            name: "Dezodorant",
                            categories: { connect: [{ id: akcesoriaCategory }] },
                        },
                        {
                            name: "Zamek do szafki (jeśli wymagany)",
                            categories: { connect: [{ id: inneCategory }] },
                        },                 
                        
                ],
            },
        },
    })

    const training_morsowanie = await prisma.template.create({
        data: {
            name: "Morsowanie",
            settingColor: "bg-blue-400",
            start: false,
            listTypeId: trainingTemplateType,
            elements: {
                create: [
                        {
                            name: "Buty neoprenowe",
                            categories: { connect: [{ id: odziezCategory }] },
                        },
                        {
                            name: "Ręcznik",
                            categories: { connect: [{ id: inneCategory }] },
                        },
                        {
                            name: "Zegarek sportowy",
                            categories: { connect: [{ id: technologiaCategory }] },
                        },
                        {
                            name: "Bielizna na przebranie",
                            categories: { connect: [{ id: odziezCategory }] },
                        },
                        {
                            name: "Kieszonka wodoodporna na mokre rzeczy",
                            categories: { connect: [{ id: inneCategory }] },
                        },
                        {
                            name: "Szalik",
                            categories: { connect: [{ id: odziezCategory }] },
                        },
                        {
                            name: "Czapka zimowa",
                            categories: { connect: [{ id: odziezCategory }] },
                        },
                        {
                            name: "Rękawiczki zimowe",
                            categories: { connect: [{ id: odziezCategory }] },
                        },
                        {
                            name: "Strój kąpielowy",
                            categories: { connect: [{ id: odziezCategory }] },
                        },
                        {
                            name: "Termos z ciepłą herbatą",
                            categories: { connect: [{ id: inneCategory }] },
                        },
                        {
                            name: "Mata / dywanik plażowy",
                            categories: { connect: [{ id: inneCategory }] },
                        },     
                        {
                            name: "Przekąski po treningu",
                            categories: { connect: [{ id: jedzenieCategory }] },
                        },      
                        
                ],
            },
        },
    })

    const training_basen = await prisma.template.create({
        data: {
            name: "Basen",
            settingColor: "bg-blue-400",
            start: false,
            listTypeId: trainingTemplateType,
            elements: {
                create: [
                        {
                            name: "Ręcznik",
                            categories: { connect: [{ id: inneCategory }] },
                        },
                        {
                            name: "Zegarek sportowy",
                            categories: { connect: [{ id: technologiaCategory }] },
                        },
                        {
                            name: "Kieszonka wodoodporna na mokre rzeczy",
                            categories: { connect: [{ id: inneCategory }] },
                        },
                        {
                            name: "Strój kąpielowy",
                            categories: { connect: [{ id: odziezCategory }] },
                        },
                        {
                            name: "Czepek",
                            categories: { connect: [{ id: inneCategory }] },
                        },
                        {
                            name: "Okulary pływackie",
                            categories: { connect: [{ id: inneCategory }] },
                        },                        
                        {
                            name: "Klapki basenowe",
                            categories: { connect: [{ id: inneCategory }] },
                        },                        
                        {
                            name: "Karnet",
                            categories: { connect: [{ id: dokumenty }] },
                        },                 
                        {
                            name: "Zamek do szafki basenowej (jeśli wymagany)",
                            categories: { connect: [{ id: inneCategory }] },
                        },                 
                ],
            },
        },
    })

    const training_joga = await prisma.template.create({
        data: {
            name: "Joga",
            settingColor: "bg-blue-400",
            start: false,
            listTypeId: trainingTemplateType,
            elements: {
                create: [
                        {
                            name: "Mata do jogi",
                            categories: { connect: [{ id: sprzet }] },
                        },        
                        {
                            name: "Ręcznik na matę",
                            categories: { connect: [{ id: inneCategory }] },
                        },                        
                        {
                            name: "Karnet",
                            categories: { connect: [{ id: dokumenty }] },
                        },                 
                        {
                            name: "Zamek do szafki (jeśli wymagany)",
                            categories: { connect: [{ id: inneCategory }] },
                        },                 
                        {
                            name: "Wygodne ubranie do jogi",
                            categories: { connect: [{ id: odziezCategory }] },
                        }, 
                        {
                            name: "Bloki jogi",
                            categories: { connect: [{ id: sprzet }] },
                        },                 
                        {
                            name: "Woda i bidon",
                            categories: { connect: [{ id: akcesoriaCategory }] },
                        },                 
                        {
                            name: "Słuchawki do muzyki relaksacyjnej (opcjonalnie)",
                            categories: { connect: [{ id: technologiaCategory }] },
                        },                 
                ],
            },
        },
    })

    const training_scianka = await prisma.template.create({
        data: {
            name: "Ścianka wspinaczkowa",
            settingColor: "bg-blue-400",
            start: false,
            listTypeId: trainingTemplateType,
            elements: {
                create: [
                        // Odzież
                        {
                            name: "Koszulka sportowa",
                            categories: { connect: [{ id: odziezCategory }] },
                        },
                        {
                            name: "Buty wspinaczkowe",
                            categories: { connect: [{ id: sprzet }] },
                        },
                        // Ręczniki i akcesoria
                        {
                            name: "Ręcznik pod prysznic",
                            categories: { connect: [{ id: inneCategory }] },
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
                            categories: { connect: [{ id: akcesoriaCategory }] },
                        },
                        // Dodatki
                        {
                            name: "Karnet / Karta dostępu",
                            categories: { connect: [{ id: dokumenty }] },
                        },
                        {
                            name: "Klapki pod prysznic",
                            categories: { connect: [{ id: inneCategory }] },
                        },
                        {
                            name: "Spodenki sportowe",
                            categories: { connect: [{ id: odziezCategory }] },
                        },
                        {
                            name: "Bielizna na przebranie",
                            categories: { connect: [{ id: odziezCategory }] },
                        },
                        {
                            name: "Żel pod prysznic",
                            categories: { connect: [{ id: akcesoriaCategory }] },
                        },
                        {
                            name: "Dezodorant",
                            categories: { connect: [{ id: akcesoriaCategory }] },
                        },
                        {
                            name: "Zamek do szafki (jeśli wymagany)",
                            categories: { connect: [{ id: inneCategory }] },
                        },                  
                ],
            },
        },
    })

    const training_crossfit = await prisma.template.create({
        data: {
            name: "Crossfit",
            settingColor: "bg-blue-400",
            start: false,
            listTypeId: trainingTemplateType,
            elements: {
                create: [
                        // Odzież
                        {
                            name: "Odzież sportowa dostosowana do intensywnego treningu",
                            categories: { connect: [{ id: odziezCategory }] },
                        },
                        {
                            name: "Buty sportowe do CrossFit",
                            categories: { connect: [{ id: odziezCategory }] },
                        },
                        // Ręczniki i akcesoria
                        {
                            name: "Ręcznik pod prysznic",
                            categories: { connect: [{ id: inneCategory }] },
                        },
                        {
                            name: "Ręcznik do ćwiczeń",
                            categories: { connect: [{ id: inneCategory }] },
                        },
                        {
                            name: "Woda",
                            categories: { connect: [{ id: akcesoriaCategory }] },
                        },
                        {
                            name: "Słuchawki sportowe",
                            categories: { connect: [{ id: akcesoriaCategory }] },
                        },
                        {
                            name: "Rękawiczki treningowe (opcjonalnie)",
                            categories: { connect: [{ id: sprzet }] },
                        },
                        // Dodatki
                        {
                            name: "Karnet / Karta dostępu do siłowni",
                            categories: { connect: [{ id: dokumenty }] },
                        },
                        {
                            name: "Zegarek sportowy",
                            categories: { connect: [{ id: technologiaCategory }] },
                        },
                        {
                            name: "Klapki pod prysznic",
                            categories: { connect: [{ id: inneCategory }] },
                        },
                        {
                            name: "Bielizna na przebranie",
                            categories: { connect: [{ id: odziezCategory }] },
                        },
                        {
                            name: "Żel pod prysznic",
                            categories: { connect: [{ id: akcesoriaCategory }] },
                        },
                        {
                            name: "Dezodorant",
                            categories: { connect: [{ id: akcesoriaCategory }] },
                        },
                        {
                            name: "Zamek do szafki (jeśli wymagany)",
                            categories: { connect: [{ id: inneCategory }] },
                        },                 
                        {
                            name: "Pasek na telefon treningowy",
                            categories: { connect: [{ id: akcesoriaCategory }] },
                        },               
                        {
                            name: "Skakanka",
                            categories: { connect: [{ id: sprzet }] },
                        },                 
                        {
                            name: "Krem na otarcia (jeśli jest potrzebny)",
                            categories: { connect: [{ id: inneCategory }] },
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
            start: false,
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
                        categories: { connect: [{ id: akcesoriaCategory }] },
                    },
                    {
                        name: "Pływająca torba lub pojemnik na rzeczy",
                        categories: { connect: [{ id: akcesoriaCategory }] },
                    },
                    {
                        name: "Strój kąpielowy lub odzież do wody",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Ręcznik kąpielowy",
                        categories: { connect: [{ id: akcesoriaCategory }] },
                    },
                    {
                        name: "Okulary przeciwsłoneczne z mocowaniem",
                        categories: { connect: [{ id: akcesoriaCategory }] },
                    },
                    {
                        name: "Krem przeciwsłoneczny",
                        categories: { connect: [{ id: akcesoriaCategory }] },
                    },
                    {
                        name: "Kapelusz lub czapka z daszkiem",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Woda pitna",
                        categories: { connect: [{ id: jedzenieCategory }] },
                    },
                    {
                        name: "Jedzenie na trasę",
                        categories: { connect: [{ id: jedzenieCategory }] },
                    },
                    {
                        name: "Zegarek sportowy",
                        categories: { connect: [{ id: technologiaCategory }] },
                    },
                    {
                        name: "Żeberko lub sprzęt naprawczy do kajaka (opcjonalnie)",
                        categories: { connect: [{ id: akcesoriaCategory }] },
                    },    
                ],
            },
        },
    })

    const training_mma = await prisma.template.create({
        data: {
            name: "Siłownia",
            settingColor: "bg-blue-400",
            start: false,
            listTypeId: trainingTemplateType,
            elements: {
                create: [
                    // Odzież
                    {
                        name: "Koszulka sportowa",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Spodenki sportowe",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Leginsy sportowe",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Buty treningowe (jeśli wymagane)",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    // Ręczniki i akcesoria
                    {
                        name: "Ręcznik pod prysznic",
                        categories: { connect: [{ id: inneCategory }] },
                    },
                    {
                        name: "Ręcznik do ćwiczeń",
                        categories: { connect: [{ id: inneCategory }] },
                    },
                    {
                        name: "Woda",
                        categories: { connect: [{ id: akcesoriaCategory }] },
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
                        categories: { connect: [{ id: technologiaCategory }] },
                    },
                    {
                        name: "Klapki pod prysznic",
                        categories: { connect: [{ id: inneCategory }] },
                    },
                    {
                        name: "Bielizna na przebranie",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Żel pod prysznic",
                        categories: { connect: [{ id: akcesoriaCategory }] },
                    },
                    {
                        name: "Dezodorant",
                        categories: { connect: [{ id: akcesoriaCategory }] },
                    },
                    {
                        name: "Zamek do szafki (jeśli wymagany)",
                        categories: { connect: [{ id: inneCategory }] },
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