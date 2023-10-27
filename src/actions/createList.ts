"use client"

import { Categories } from "@/context/AppContext"
import DebugLogScript from "@/lib/developConsoleScripts"

type TCreateElementsProps = {
    name: string
    categories: Categories[] | []
}

const createListAction = async (
    name: string,
    duplicate?: TCreateElementsProps[]
) => {
    DebugLogScript("createListAction")
    const query = { name, duplicate }

    if (!name) {
        throw "Nie uzupełniono nazwy"
    }

    const response = await fetch(`/api/lists`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(query),
    })

    const data = await response.json()
    const result = data.body

    return result
}

export default createListAction
