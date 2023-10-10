interface DataItem {
    id: number
    name: string
    // Dodaj pozostałe właściwości, jeśli są obecne w danych
}

export function normalizeStringForURL(str: string, data: DataItem[]): string {
    const normalizedStr = str
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")

    if (!data.some((element) => element.name === normalizedStr)) {
        return normalizedStr
    }

    let suffix = 2
    while (
        data.some((element) => element.name === `${normalizedStr}-${suffix}`)
    ) {
        suffix++
    }

    return `${normalizedStr}-${suffix}`
}
