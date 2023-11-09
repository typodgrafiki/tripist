"use client"

import { ICategories } from "@/types/types"
import axios from "axios"
import { activeCategories } from "@/utils/utils"

export const createList = async (name: string, duplicateId?: string) => {
    const query = { name, duplicateId }
    if (!name) {
        throw "Nie uzupełniono nazwy"
    }
    const response = await axios.post("/api/lists", query)
    return response
}

export const updateList = async (name: string, listId: string) => {
    if (!name) {
        throw "Nie uzupełniono nazwy"
    }

    const query = { name }

    const response = await axios.patch(`/api/lists/${listId}`, query)
    return response
}

export const getListsAction = async () => {
    const response = await axios.get("/api/lists")
    return response
}

export const getListData = async (id: string) => {
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

export const changeElement = async (
    elementId: number,
    name: string,
    categories?: ICategories[]
) => {
    if (!elementId) {
        throw "Nie uzupełniono id elementu"
    }

    const cleanedCategories = categories ? activeCategories(categories) : []

    const response = await axios.put(`/api/items/${elementId}`, {
        name: name,
        categories: cleanedCategories || [],
    })
    return response
}

export const deleteElementsAction = async (id: number) => {
    if (!id) return null
    const response = await axios.delete(`/api/items/${id}`)
    return response
}

export const deleteList = async (id: string) => {
    if (!id) return null
    const response = await axios.delete(`/api/lists/${id}`)
    return response
}

export const createItem = async (name: string, listId: string) => {
    if (!name) {
        throw "Nie uzupełniono nazwy"
    }
    const response = await axios.post(`/api/lists/${listId}/items`, {
        name: name,
    })
    return response
}

export const fetchAllCategories = async () => {
    try {
        const response = await axios.get("/api/categories")
        return response.data.body as ICategories[]
    } catch (error) {
        console.error("There was an error fetching the categories:", error)
        return []
    }
}
