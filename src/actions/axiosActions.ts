"use client"

import { ICategories, ICreateUser, ILoginUser, IUserData } from "@/types/types"
import axios from "axios"
import { activeCategories } from "@/utils/utils"
import { cookies } from "next/headers"

export const createList = async (
    name: string,
    duplicateId?: string,
    color: string
) => {
    const query = { name, duplicateId, color }
    if (!name) {
        throw "Nie uzupełniono nazwy"
    }
    const response = await axios.post("/api/lists", query)
    return response
}

export const updateList = async (
    name: string,
    listId: string,
    color: string
) => {
    if (!name) {
        throw "Nie uzupełniono nazwy"
    }

    const query = { name, color }

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

export const createUserFetch = async (data: ICreateUser) => {
    if (!data) {
        throw "Nie uzupełniono danych"
    }

    try {
        const response = await axios.post(`/api/auth/sign-up`, data)
        return response
    } catch (error) {
        return null
    }
}

export const loginUserFetch = async (data: ILoginUser) => {
    if (!data) {
        throw "Nie uzupełniono danych"
    }

    try {
        const response = await axios.post(`/api/auth/sign-in`, data)
        return response
    } catch (error) {
        return null
    }
}

export const updateUserFetch = async (data: IUserData) => {
    if (!data) {
        throw "Nie uzupełniono danych"
    }

    try {
        const response = await axios.post(`/api/auth/update`, data)
        return response
    } catch (error) {
        return null
    }
}

export const deleteSession = async () => {
    try {
        const response = await axios.post(`/api/auth/logout`)
        return response
    } catch (error) {
        return null
    }
}
