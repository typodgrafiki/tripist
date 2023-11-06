"use client"

import axios from "axios"
// import { ICategories } from "@/types/types"

// type TCreateElementsProps = {
//     name: string
//     categories: ICategories[] | []
// }

// const setListAction = async (
//     name: string,
//     duplicate?: TCreateElementsProps[]
// ) => {
//     const query = { name, duplicate }

//     if (!name) {
//         throw "Nie uzupełniono nazwy"
//     }

//     const response = await fetch(`/api/lists`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(query),
//     })

//     const data = await response.json()
//     const result = data.body

//     return result
// }

export const getListsAction = async () => {
    const response = await axios.get("/api/lists")
    return response
}

export const getElementsAction = async (id: string) => {
    if (!id) return null

    const response = await axios.get(`/api/lists/${id}`)

    return response
}

export const disableAllElementsAction = async (listId: string) => {
    if (!listId) {
        throw "Nie uzupełniono id listy"
    }

    const response = await axios.patch(`/api/lists/${listId}/items/reset`)

    return response
}

export const changeElementStatus = async (
    elementId: number,
    status: boolean
) => {
    if (!elementId) {
        throw "Nie uzupełniono id elementu"
    }

    const response = await axios.patch(`/api/items/${elementId}`, {
        status: status,
    })

    return response
}
