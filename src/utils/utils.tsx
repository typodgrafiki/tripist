"use client"

import {
    IElements,
    ICategories,
    TListItemCategoriesUpdate,
    ISortTypes,
    SortBy,
    SortDirection,
    TSampleCustomItems,
    TSampleCustomItemsToApi,
    TSampleCustomCategoryApi,
    TSampleCustomItemsCount,
    TSearchItemCategory,
} from "@/types/types"

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
                    element.categories
                        ? element.categories.map((category) => category.name)
                        : []
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

export function mergeCategoriesWithAssignment(
    allCategories: ICategories[],
    assignedCategoryIds: ICategories[]
) {
    if (assignedCategoryIds) {
        const assignedIdsSet = new Set(
            assignedCategoryIds.map((category) => category.id)
        )
        return allCategories.map((category) => {
            if (assignedIdsSet.has(category.id)) {
                return { ...category, assigned: true }
            }
            return category
        })
    } else {
        return []
    }
}

export function activeCategories(mergedCategories: ICategories[]) {
    return mergedCategories.reduce(
        (acc, category) => {
            if (category.assigned) {
                acc.categoriesIdsToConnect.push(category.id)
            } else {
                acc.categoriesIdsToDisconnect.push(category.id)
            }
            return acc
        },
        {
            categoriesIdsToConnect: [],
            categoriesIdsToDisconnect: [],
        } as TListItemCategoriesUpdate
    )
}

export const sortTypes: ISortTypes[] = [
    {
        name: "Najnowsze",
        type: "createdAt",
        direction: "desc",
    },
    {
        name: "Najstarsze",
        type: "createdAt",
        direction: "asc",
    },
    {
        name: "A-Z",
        type: "name",
        direction: "asc",
    },
    {
        name: "Z-A",
        type: "name",
        direction: "desc",
    },
]

export const optionsColor = [
    "bg-red-500",
    "bg-yellow-500",
    "bg-emerald-500",
    "bg-cyan-500",
    "bg-violet-400",
    "bg-purple-700",
    "bg-pink-600",
]

/**
 * Oblicza procentową wartość elementów z aktywnym (true) statusem.
 *
 * @param {IElements[]} items - Tablica elementów, dla których ma być obliczony procent.
 *                              Zakłada się, że każdy element ma pole 'status'.
 * @returns {number} Procentowa wartość elementów z aktywnym statusem w stosunku do całkowitej liczby elementów.
 *                   Wynik jest zaokrąglany do najbliższej liczby całkowitej.
 */
export function calculateStatusPercentage(items: IElements[]) {
    const totalItems = items.length

    if (totalItems === 0) {
        return 0
    }

    const trueStatusItems = items.reduce(
        (count, item) => count + (item.status ? 1 : 0),
        0
    )

    return Math.round((trueStatusItems / totalItems) * 100)
}

export function changeSampleCustomDataToComponent(
    data: TSampleCustomItems[]
): TSampleCustomItemsToApi {
    const groupedItems = data.reduce<TSampleCustomItemsToApi>((acc, item) => {
        const itemWithChecked: TSampleCustomCategoryApi = {
            ...item,
            checked: true,
        }
        item.categories.forEach((category) => {
            if (!acc[category.name]) {
                acc[category.name] = []
            }
            acc[category.name].push(itemWithChecked)
        })
        return acc
    }, {} as TSampleCustomItemsToApi)

    return groupedItems
}

export function changeSampleCustomDataToApi(
    data: TSampleCustomItemsToApi
): TSampleCustomItems[] {
    const flattenedData: TSampleCustomItems[] = []

    Object.values(data).forEach((categoryItems) => {
        categoryItems.forEach((item) => {
            if (item.checked) {
                flattenedData.push(item)
            }
        })
    })

    return flattenedData
}

export function countItems(items: TSampleCustomCategoryApi[]) {
    let totalCount = items.length
    let checkedCount = items.filter((item) => item.checked).length

    return { totalCount, checkedCount } as TSampleCustomItemsCount
}

const normalizeString = (str: string) => {
    const map: { [key: string]: string } = {
        ą: "a",
        ć: "c",
        ę: "e",
        ł: "l",
        ń: "n",
        ó: "o",
        ś: "s",
        ż: "z",
        ź: "z",
        Ą: "A",
        Ć: "C",
        Ę: "E",
        Ł: "L",
        Ń: "N",
        Ó: "O",
        Ś: "S",
        Ż: "Z",
        Ź: "Z",
    }

    return str
        .split("")
        .map((c) => map[c] || c)
        .join("")
        .toLowerCase()
}

export function findStringsInListElements(
    array: string[],
    substring: string,
    elements: IElements[]
) {
    if (substring.trim().length < 2) {
        return []
    }

    const normalizedSubstring = normalizeString(substring)

    return array
        .filter((item) => normalizeString(item).includes(normalizedSubstring))
        .map((itemName) => {
            const matchedElement = elements.find(
                (element) =>
                    normalizeString(element.name) === normalizeString(itemName)
            )

            return {
                name: itemName,
                id: matchedElement?.id ? matchedElement.id : null,
            }
        })
}

export function checkElementIsOnList(
    array1: IElements[],
    array2: TSearchItemCategory[]
) {
    return array2.map((category) => ({
        ...category,
        items: category.items.map((item) => {
            const matchingElement = array1.find(
                (obj) => normalizeString(obj.name) === normalizeString(item)
            )

            return {
                name: item,
                id: matchingElement ? matchingElement.id : null,
            }
        }),
    }))
}

export function formatDate(inputDate: Date) {
    const dateObject = new Date(inputDate)

    // Pobierz elementy daty (dzień, miesiąc, rok)
    const day = dateObject.getUTCDate()
    const month = dateObject.getUTCMonth() + 1
    const year = dateObject.getUTCFullYear()

    // Sformatuj elementy daty na oczekiwany format
    const formattedDate = `${day < 10 ? "0" : ""}${day}-${
        month < 10 ? "0" : ""
    }${month}-${year}`

    return formattedDate
}
