// npx prisma db seed
// npm run seed:sample
// npm run seed:template

import { createOrGetCategory, createOrGetType } from "./seedHelpers"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {

    const inneType = await createOrGetType("other", "Inne")

    // Tworzenie lub uzyskiwanie dostępu do kategorii
    const odziezCategory = await createOrGetCategory("Odzież")
    const akcesoriaCategory = await createOrGetCategory("Akcesoria")
    const technologiaCategory = await createOrGetCategory("Elektronika")
    const inneCategory = await createOrGetCategory("Inne")
    const jedzenieCategory = await createOrGetCategory("Jedzenie")
    const kuchniaCategory = await createOrGetCategory("Kuchnia")
    const higienaCategory = await createOrGetCategory("Łazienka / Higiena")
    const campervanCategory = await createOrGetCategory("Camping")
    const plaza = await createOrGetCategory("Plaża")
    const trekking = await createOrGetCategory("Trekking")
    const dokumenty = await createOrGetCategory("Dokumenty")

    const businessTripList = await prisma.template.create({
        data: {
            name: "Podróż biznesowa",
            settingColor: "bg-violet-400",
            start: false,
            listTypeId: inneType,
            tripLength: 3,
            elements: {
                create: [
                    {
                        name: "Elegancki strój",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Koszule/koszulki",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Spodnie/Spódnice",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Bielizna i skarpetki",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Buty eleganckie i casualowe",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Pasek i akcesoria",
                        categories: { connect: [{ id: akcesoriaCategory }] },
                    },
                    {
                        name: "Płaszcz lub lekka kurtka",
                        categories: { connect: [{ id: odziezCategory }] },
                    },
                    {
                        name: "Laptop i ładowarka",
                        categories: {
                            connect: [{ id: technologiaCategory }],
                        },
                    },
                    {
                        name: "Telefon komórkowy i ładowarka",
                        categories: {
                            connect: [{ id: technologiaCategory }],
                        },
                    },
                    {
                        name: "Adapter do gniazdek",
                        categories: {
                            connect: [{ id: technologiaCategory }],
                        },
                    },
                    {
                        name: "Power bank",
                        categories: {
                            connect: [{ id: technologiaCategory }],
                        },
                    },
                    {
                        name: "Słuchawki",
                        categories: {
                            connect: [{ id: technologiaCategory }],
                        },
                    },
                    {
                        name: "Notatnik i długopisy",
                        categories: { connect: [{ id: inneCategory }] },
                    },
                    {
                        name: "Wizytówki",
                        categories: { connect: [{ id: inneCategory }] },
                    },
                    {
                        name: "Mapy lub przewodniki",
                        categories: { connect: [{ id: inneCategory }] },
                    },
                    {
                        name: "Kopie ważnych dokumentów",
                        categories: { connect: [{ id: inneCategory }] },
                    },
                    {
                        name: "Szczoteczka i pasta do zębów",
                        categories: { connect: [{ id: higienaCategory }] },
                    },
                    {
                        name: "Szampon, żel pod prysznic, odżywka",
                        categories: { connect: [{ id: higienaCategory }] },
                    },
                    {
                        name: "Dezodorant",
                        categories: { connect: [{ id: higienaCategory }] },
                    },
                    {
                        name: "Kosmetyczka z podstawowymi kosmetykami",
                        categories: { connect: [{ id: higienaCategory }] },
                    },
                    {
                        name: "Zestaw do golenia lub depilacji",
                        categories: { connect: [{ id: higienaCategory }] },
                    },
                    {
                        name: "Mała apteczka",
                        categories: { connect: [{ id: higienaCategory }] },
                    },
                    {
                        name: "Okulary przeciwsłoneczne",
                        categories: { connect: [{ id: akcesoriaCategory }] },
                    },
                    {
                        name: "Mały parasol lub peleryna przeciwdeszczowa",
                        categories: { connect: [{ id: akcesoriaCategory }] },
                    },
                    {
                        name: "Mała torba na zakupy lub plecak",
                        categories: { connect: [{ id: akcesoriaCategory }] },
                    },
                    {
                        name: "Przekąski i butelka na wodę",
                        categories: { connect: [{ id: inneCategory }] },
                    },
                    {
                        name: "Książka lub e-czytnik",
                        categories: { connect: [{ id: inneCategory }] },
                    },
                ],
            },
        },
    })
}