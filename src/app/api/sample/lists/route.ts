/**
 *
 * Pobieranie sample lists GET
 *
 */

import { NextResponse } from "next/server"
import { useAuth } from "@/lib/auth"
import prisma from "@/lib/prismaClient"
import { TSampleTypeFull, TSampleType } from "@/types/types"

export async function GET() {
    const { userId, gender } = await useAuth()

    try {
        if (!userId)
            return NextResponse.json(
                { message: "Brak użytkownika" },
                { status: 401 }
            )

        const lists = await prisma.listType.findMany({
            where: {
                templates: {
                    some: {},
                },
            },
            include: {
                templates: {
                    where: {
                        start: false,
                    },
                },
            },
        })

        const filteredGender = lists
            .map((listType) => {
                const filteredTemplates = listType.templates.filter(
                    (template) =>
                        template.gender === gender ||
                        template.gender === "UNDEFINED"
                )

                return {
                    ...listType,
                    templates: filteredTemplates,
                }
            })
            .filter((listType) => listType.templates.length > 0)

        const listFiltered = changeStructure(filteredGender)

        return NextResponse.json({ body: listFiltered }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 200 }
        )
    }
}

interface TemplateOptions {
    id: number
    tripLength: number
}

interface GroupedTemplates {
    [fullName: string]: {
        [templateName: string]: TemplateOptions[]
    }
}

function changeStructure(data: TSampleTypeFull[]) {
    // Struktura do przechowywania zgrupowanych danych
    let groupedByType: GroupedTemplates = {}

    data.forEach((listType) => {
        if (!groupedByType[listType.fullName]) {
            groupedByType[listType.fullName] = {}
        }

        listType.templates.forEach((template) => {
            if (!groupedByType[listType.fullName][template.name]) {
                groupedByType[listType.fullName][template.name] = []
            }
            groupedByType[listType.fullName][template.name].push({
                id: template.id as number,
                tripLength: template.tripLength as number,
            })
        })
    })

    // Przekształcanie zgrupowanych danych do tablicy
    let groupedArray: TSampleType[] = Object.entries(groupedByType).map(
        ([fullName, templates]) => {
            let templatesArray = Object.entries(templates).map(
                ([name, options]) => ({
                    name,
                    options,
                })
            )

            return {
                fullName,
                templates: templatesArray,
            }
        }
    )

    return groupedArray
}
