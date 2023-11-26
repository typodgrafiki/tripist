// npx prisma db seed

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    // Tworzenie typów wyjazdów i zapisywanie ich ID
    const cityBreakType = await prisma.templateType.create({
        data: { name: "City Break" },
    })
    const allInclusiveResortType = await prisma.templateType.create({
        data: { name: "All-Inclusive Resort" },
    })
    const trekkingHikingType = await prisma.templateType.create({
        data: { name: "Trekking / Hiking" },
    })
    const beachVacationType = await prisma.templateType.create({
        data: { name: "Plażowy Wypoczynek" },
    })
    const skiingSnowboardingType = await prisma.templateType.create({
        data: { name: "Narciarstwo / Snowboarding" },
    })
    const campingGlampingType = await prisma.templateType.create({
        data: { name: "Kamping / Glamping" },
    })
    const businessTripType = await prisma.templateType.create({
        data: { name: "Podróże Służbowe" },
    })
    const educationalTripType = await prisma.templateType.create({
        data: { name: "Podróże Edukacyjne" },
    })
    const culturalTripType = await prisma.templateType.create({
        data: { name: "Podróże Kulturowe" },
    })
    const adventureTripType = await prisma.templateType.create({
        data: { name: "Podróże Przygodowe" },
    })
    const seaCruiseType = await prisma.templateType.create({
        data: { name: "Rejsy Morskie" },
    })
    const musicFestivalType = await prisma.templateType.create({
        data: { name: "Festiwale Muzyczne" },
    })
    const wellnessSpaType = await prisma.templateType.create({
        data: { name: "Wellness i Spa" },
    })
    const culinaryTripType = await prisma.templateType.create({
        data: { name: "Podróże Kulinarne" },
    })
    const safariNatureTripType = await prisma.templateType.create({
        data: { name: "Safari / Podróże Przyrodnicze" },
    })
    const waterSportsType = await prisma.templateType.create({
        data: { name: "Sporty Wodne" },
    })
    const yogaRetreatsType = await prisma.templateType.create({
        data: { name: "Joga i Retreats" },
    })
    const photographicTripType = await prisma.templateType.create({
        data: { name: "Podróże Fotograficzne" },
    })
    const familyTripType = await prisma.templateType.create({
        data: { name: "Podróże Rodzinne" },
    })
    const backpackingType = await prisma.templateType.create({
        data: { name: "Backpacking / Mochilero" },
    })
    const trainingType = await prisma.templateType.create({
        data: { name: "Trening" },
    })

    // Tworzenie kategorii
    const odziezCategory = await prisma.templateCategory.create({
        data: { name: "Odzież" },
    })
    const akcesoriaCategory = await prisma.templateCategory.create({
        data: { name: "Akcesoria" },
    })
    const higienaCategory = await prisma.templateCategory.create({
        data: { name: "Higiena" },
    })
    const technologiaCategory = await prisma.templateCategory.create({
        data: { name: "Elektronika" },
    })
    const inneCategory = await prisma.templateCategory.create({
        data: { name: "Inne" },
    })

    // Tworzenie listy predefiniowanej dla treningu na siłowni
    const gymList = await prisma.template.create({
        data: {
            name: "Trening na siłowni",
            settingColor: "bg-red-500",
            start: true,
            templateTypeId: trainingType.id,
            elements: {
                create: [
                    {
                        name: "Słuchawki",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Kłódka do szafki",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Dezodorant",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },
                    {
                        name: "Szampon",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },
                    {
                        name: "Żel pod prysznic",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },
                    {
                        name: "Zegarek sportowy",
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
                    {
                        name: "Ręcznik",
                        categories: {
                            connect: [{ id: akcesoriaCategory.id }],
                        },
                    },
                    {
                        name: "Buty",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Bokserki",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Skarpety",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Spodenki",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Koszulka",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                ],
            },
        },
    })

    // Tworzenie listy predefiniowanej na weekend w Madrycie
    const madridList = await prisma.template.create({
        data: {
            name: "Weekend w Madrycie",
            settingColor: "bg-emerald-500",
            start: true,
            templateTypeId: cityBreakType.id,
            tripLength: 2,
            elements: {
                create: [
                    {
                        name: "Parasol",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Dokumenty podróży",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Przewodnik turystyczny lub aplikacja z mapą",
                        categories: { connect: [{ id: inneCategory.id }] },
                    },
                    {
                        name: "Powerbank",
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
                        name: "Telefon komórkowy i ładowarka",
                        categories: {
                            connect: [{ id: technologiaCategory.id }],
                        },
                    },
                    {
                        name: "Krem z filtrem UV",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },
                    {
                        name: "Leki osobiste",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },
                    {
                        name: "Szczoteczka i pasta do zębów",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },
                    {
                        name: "Podstawowe kosmetyki",
                        categories: { connect: [{ id: higienaCategory.id }] },
                    },
                    {
                        name: "Plecak lub torba na dzień",
                        categories: {
                            connect: [{ id: akcesoriaCategory.id }],
                        },
                    },
                    {
                        name: "Kapelusz lub czapka",
                        categories: {
                            connect: [{ id: akcesoriaCategory.id }],
                        },
                    },
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: {
                            connect: [{ id: akcesoriaCategory.id }],
                        },
                    },
                    {
                        name: "Kurtka lub sweter",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Buty na wieczorne wyjścia",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Wygodne buty do chodzenia",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Skarpety",
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
                        name: "Ubrania na wieczór",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Wygodne spodnie lub spódnice",
                        categories: { connect: [{ id: odziezCategory.id }] },
                    },
                    {
                        name: "Lekkie ubrania na dzień",
                        categories: { connect: [{ id: odziezCategory.id }] },
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
