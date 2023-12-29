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
    const spanieCategory = await createOrGetCategory("Spanie")
    const kuchniaCategory = await createOrGetCategory("Kuchnia")
    const lazienkaCategory = await createOrGetCategory("Łazienka")
    const campervanCategory = await createOrGetCategory("Campervan")
    const plaza = await createOrGetCategory("Plaża")
    const trekking = await createOrGetCategory("Trekking i sport")
    const dokumenty = await createOrGetCategory("Dokumenty")
    const sprzet = await createOrGetCategory("Sprzęt sportowy")

    // CAMPING 2, 7, 14
    const trainingTemplateType = await createOrGetType("active", "Trening")
    const training_silownia = await prisma.template.create({
        data: {
            name: "Siłownia",
            settingColor: "bg-blue-400",
            start: false,
            listTypeId: trainingTemplateType.id,
            elements: {
                create: [
                        // Odzież
                        {
                            name: "Koszulka sportowa",
                            categories: { connect: [{ id: odziezCategory.id }] },
                        },
                        {
                            name: "Buty sportowe",
                            categories: { connect: [{ id: odziezCategory.id }] },
                        },
                        // Ręczniki i akcesoria
                        {
                            name: "Ręcznik pod prysznic",
                            categories: { connect: [{ id: inneCategory.id }] },
                        },
                        {
                            name: "Ręcznik do ćwiczeń",
                            categories: { connect: [{ id: inneCategory.id }] },
                        },
                        {
                            name: "Woda",
                            categories: { connect: [{ id: akcesoriaCategory.id }] },
                        },
                        {
                            name: "Słuchawki sportowe",
                            categories: { connect: [{ id: akcesoriaCategory.id }] },
                        },
                        {
                            name: "Rękawiczki treningowe (opcjonalnie)",
                            categories: { connect: [{ id: sprzet.id }] },
                        },
                        // Dodatki
                        {
                            name: "Karnet / Karta dostępu do siłowni",
                            categories: { connect: [{ id: inneCategory.id }] },
                        },
                        {
                            name: "Zegarek sportowy",
                            categories: { connect: [{ id: technologiaCategory.id }] },
                        },
                        {
                            name: "Klapki pod prysznic",
                            categories: { connect: [{ id: inneCategory.id }] },
                        },
                        {
                            name: "Spodenki sportowe",
                            categories: { connect: [{ id: odziezCategory.id }] },
                        },
                        {
                            name: "Bielizna na przebranie",
                            categories: { connect: [{ id: odziezCategory.id }] },
                        },
                        {
                            name: "Żel pod prysznic",
                            categories: { connect: [{ id: akcesoriaCategory.id }] },
                        },
                        {
                            name: "Dezodorant",
                            categories: { connect: [{ id: akcesoriaCategory.id }] },
                        },
                        {
                            name: "Zamek do szafki (jeśli wymagany)",
                            categories: { connect: [{ id: inneCategory.id }] },
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
            listTypeId: trainingTemplateType.id,
            elements: {
                create: [
                        {
                            name: "Buty neoprenowe",
                            categories: { connect: [{ id: odziezCategory.id }] },
                        },
                        {
                            name: "Ręcznik",
                            categories: { connect: [{ id: inneCategory.id }] },
                        },
                        {
                            name: "Zegarek sportowy",
                            categories: { connect: [{ id: technologiaCategory.id }] },
                        },
                        {
                            name: "Bielizna na przebranie",
                            categories: { connect: [{ id: odziezCategory.id }] },
                        },
                        {
                            name: "Kieszonka wodoodporna na mokre rzeczy",
                            categories: { connect: [{ id: inneCategory.id }] },
                        },
                        {
                            name: "Szalik",
                            categories: { connect: [{ id: odziezCategory.id }] },
                        },
                        {
                            name: "Czapka zimowa",
                            categories: { connect: [{ id: odziezCategory.id }] },
                        },
                        {
                            name: "Rękawiczki zimowe",
                            categories: { connect: [{ id: odziezCategory.id }] },
                        },
                        {
                            name: "Strój kąpielowy",
                            categories: { connect: [{ id: odziezCategory.id }] },
                        },
                        {
                            name: "Termos z ciepłą herbatą",
                            categories: { connect: [{ id: inneCategory.id }] },
                        },
                        {
                            name: "Mata / dywanik plażowy",
                            categories: { connect: [{ id: inneCategory.id }] },
                        },     
                        {
                            name: "Przekąski po treningu",
                            categories: { connect: [{ id: jedzenieCategory.id }] },
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
            listTypeId: trainingTemplateType.id,
            elements: {
                create: [
                        {
                            name: "Ręcznik",
                            categories: { connect: [{ id: inneCategory.id }] },
                        },
                        {
                            name: "Zegarek sportowy",
                            categories: { connect: [{ id: technologiaCategory.id }] },
                        },
                        {
                            name: "Kieszonka wodoodporna na mokre rzeczy",
                            categories: { connect: [{ id: inneCategory.id }] },
                        },
                        {
                            name: "Strój kąpielowy",
                            categories: { connect: [{ id: odziezCategory.id }] },
                        },
                        {
                            name: "Czepek",
                            categories: { connect: [{ id: inneCategory.id }] },
                        },
                        {
                            name: "Okulary pływackie",
                            categories: { connect: [{ id: inneCategory.id }] },
                        },                        
                        {
                            name: "Klapki basenowe",
                            categories: { connect: [{ id: inneCategory.id }] },
                        },                        
                        {
                            name: "Karnet",
                            categories: { connect: [{ id: inneCategory.id }] },
                        },                 
                        {
                            name: "Zamek do szafki basenowej (jeśli wymagany)",
                            categories: { connect: [{ id: inneCategory.id }] },
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
            listTypeId: trainingTemplateType.id,
            elements: {
                create: [
                        {
                            name: "Mata do jogi",
                            categories: { connect: [{ id: sprzet.id }] },
                        },        
                        {
                            name: "Ręcznik na matę",
                            categories: { connect: [{ id: inneCategory.id }] },
                        },                        
                        {
                            name: "Karnet",
                            categories: { connect: [{ id: inneCategory.id }] },
                        },                 
                        {
                            name: "Zamek do szafki (jeśli wymagany)",
                            categories: { connect: [{ id: inneCategory.id }] },
                        },                 
                        {
                            name: "Wygodne ubranie do jogi",
                            categories: { connect: [{ id: odziezCategory.id }] },
                        }, 
                        {
                            name: "Bloki jogi",
                            categories: { connect: [{ id: sprzet.id }] },
                        },                 
                        {
                            name: "Woda i bidon",
                            categories: { connect: [{ id: akcesoriaCategory.id }] },
                        },                 
                        {
                            name: "Słuchawki do muzyki relaksacyjnej (opcjonalnie)",
                            categories: { connect: [{ id: technologiaCategory.id }] },
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
            listTypeId: trainingTemplateType.id,
            elements: {
                create: [
                        // Odzież
                        {
                            name: "Koszulka sportowa",
                            categories: { connect: [{ id: odziezCategory.id }] },
                        },
                        {
                            name: "Buty wspinaczkowe",
                            categories: { connect: [{ id: sprzet.id }] },
                        },
                        // Ręczniki i akcesoria
                        {
                            name: "Ręcznik pod prysznic",
                            categories: { connect: [{ id: inneCategory.id }] },
                        },
                        {
                            name: "Magnezja",
                            categories: { connect: [{ id: sprzet.id }] },
                        },
                        {
                            name: "Uprząż",
                            categories: { connect: [{ id: sprzet.id }] },
                        },
                        {
                            name: "Karabinek",
                            categories: { connect: [{ id: sprzet.id }] },
                        },
                        {
                            name: "Przyrząd asekuracyjny",
                            categories: { connect: [{ id: sprzet.id }] },
                        },
                        {
                            name: "Woda",
                            categories: { connect: [{ id: akcesoriaCategory.id }] },
                        },
                        // Dodatki
                        {
                            name: "Karnet / Karta dostępu",
                            categories: { connect: [{ id: inneCategory.id }] },
                        },
                        {
                            name: "Klapki pod prysznic",
                            categories: { connect: [{ id: inneCategory.id }] },
                        },
                        {
                            name: "Spodenki sportowe",
                            categories: { connect: [{ id: odziezCategory.id }] },
                        },
                        {
                            name: "Bielizna na przebranie",
                            categories: { connect: [{ id: odziezCategory.id }] },
                        },
                        {
                            name: "Żel pod prysznic",
                            categories: { connect: [{ id: akcesoriaCategory.id }] },
                        },
                        {
                            name: "Dezodorant",
                            categories: { connect: [{ id: akcesoriaCategory.id }] },
                        },
                        {
                            name: "Zamek do szafki (jeśli wymagany)",
                            categories: { connect: [{ id: inneCategory.id }] },
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
            listTypeId: trainingTemplateType.id,
            elements: {
                create: [
                        // Odzież
                        {
                            name: "Odzież sportowa dostosowana do intensywnego treningu",
                            categories: { connect: [{ id: odziezCategory.id }] },
                        },
                        {
                            name: "Buty sportowe do CrossFit",
                            categories: { connect: [{ id: odziezCategory.id }] },
                        },
                        // Ręczniki i akcesoria
                        {
                            name: "Ręcznik pod prysznic",
                            categories: { connect: [{ id: inneCategory.id }] },
                        },
                        {
                            name: "Ręcznik do ćwiczeń",
                            categories: { connect: [{ id: inneCategory.id }] },
                        },
                        {
                            name: "Woda",
                            categories: { connect: [{ id: akcesoriaCategory.id }] },
                        },
                        {
                            name: "Słuchawki sportowe",
                            categories: { connect: [{ id: akcesoriaCategory.id }] },
                        },
                        {
                            name: "Rękawiczki treningowe (opcjonalnie)",
                            categories: { connect: [{ id: sprzet.id }] },
                        },
                        // Dodatki
                        {
                            name: "Karnet / Karta dostępu do siłowni",
                            categories: { connect: [{ id: inneCategory.id }] },
                        },
                        {
                            name: "Zegarek sportowy",
                            categories: { connect: [{ id: technologiaCategory.id }] },
                        },
                        {
                            name: "Klapki pod prysznic",
                            categories: { connect: [{ id: inneCategory.id }] },
                        },
                        {
                            name: "Bielizna na przebranie",
                            categories: { connect: [{ id: odziezCategory.id }] },
                        },
                        {
                            name: "Żel pod prysznic",
                            categories: { connect: [{ id: akcesoriaCategory.id }] },
                        },
                        {
                            name: "Dezodorant",
                            categories: { connect: [{ id: akcesoriaCategory.id }] },
                        },
                        {
                            name: "Zamek do szafki (jeśli wymagany)",
                            categories: { connect: [{ id: inneCategory.id }] },
                        },                 
                        {
                            name: "Pasek na telefon treningowy",
                            categories: { connect: [{ id: akcesoriaCategory.id }] },
                        },               
                        {
                            name: "Skakanka",
                            categories: { connect: [{ id: sprzet.id }] },
                        },                 
                        {
                            name: "Krem na otarcia (jeśli jest potrzebny)",
                            categories: { connect: [{ id: inneCategory.id }] },
                        },                 
                        {
                            name: "Odpowiednie elementy osłonowe (jeśli są używane)",
                            categories: { connect: [{ id: sprzet.id }] },
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