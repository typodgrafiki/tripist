"use client"

import { IList, IElements, ILists } from "@/types/types"

export const tostifySuccessColor = "linear-gradient(to right, #00b09b, #96c93d)"

export function focusInput(reference: React.RefObject<HTMLInputElement>) {
    if (reference.current) {
        reference.current.focus()
    }
    return null
}

export function findUniqueCategories(elements: IElements[]) {
    if (Array.isArray(elements)) {
        const result = Array.from(
            new Set(
                elements?.flatMap((element) =>
                    element.categories.map((category) => category.name)
                )
            )
        )
        return result
    }
}

export function changeStatusLocaly(
    oldData: IElements[],
    itemId: number,
    itemStatus: boolean
) {
    return oldData.map((item) => {
        if (item.id === itemId) {
            return {
                ...item,
                status: itemStatus,
            }
        }
        return item
    })
}

type SortBy = "createdAt" | "name"
type SortDirection = "asc" | "desc"

export function sortElements(
    elements: IElements[],
    sortBy: SortBy = "createdAt",
    direction: SortDirection = "desc"
): IElements[] {
    if (sortBy === "createdAt") {
        return elements.sort((a, b) => {
            return direction === "asc" ? a.id - b.id : b.id - a.id
        })
    } else if (sortBy === "name") {
        return elements.sort((a, b) => {
            return direction === "asc"
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name)
        })
    }

    return elements
}
