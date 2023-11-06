"use client"

import { IElements } from "@/types/types"

export function focusInput(reference: React.RefObject<HTMLInputElement>) {
    if (reference.current) {
        reference.current.focus()
    }
    return null
}

export function findUniqueCategories(elements: IElements[]) {
    const result = Array.from(
        new Set(
            elements?.flatMap((element) =>
                element.categories.map((category) => category.name)
            )
        )
    )
    return result
}
