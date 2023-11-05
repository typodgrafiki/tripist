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

export const getElementsAction = async (id) => {
    const response = await axios.get(`/api/lists/${id}`)
    return response
}
