"use client"

import {
    ICategories,
    ICodeSignUp,
    ICreateRemindPassUser,
    ICreateUser,
    ILoginUser,
    IUserData,
} from "@/types/types"
import axios from "axios"
import { AxiosError } from "axios"
import { activeCategories } from "@/utils/utils"
import { cookies } from "next/headers"

export const createList = async (
    name: string,
    duplicateId?: string | number,
    color?: string
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
    color?: string
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

export const getAllCategories = async () => {
    try {
        const response = await axios.get("/api/categories")
        return response.data.body as ICategories[]
    } catch (error) {
        return []
    }
}

export const addCategory = async (nameCategory: string) => {
    if (!nameCategory) {
        throw "Nie uzupełniono nazwy"
    }

    const data = {
        name: nameCategory,
    }

    try {
        const response = await axios.post(`/api/categories/`, data)
        return response
    } catch (error) {
        return null
    }
}

export const deleteCategory = async (idCategory: number) => {
    if (!idCategory) {
        throw "Nie uzupełniono id"
    }

    try {
        const response = await axios.delete(`/api/categories/${idCategory}`)
        return response
    } catch (error) {
        return null
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
        if (axios.isAxiosError(error)) {
            const axiosError: AxiosError = error
            if (axiosError.response) {
                return axiosError.response
            } else {
                return null
            }
        } else {
            return null
        }
    }
}

export const confirmSignUp = async (data: ICodeSignUp) => {
    if (!data) {
        throw "Nie uzupełniono danych"
    }

    try {
        const response = await axios.patch(`/api/auth/sign-up`, data)
        return response
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            const axiosError: AxiosError = error
            if (axiosError.response) {
                return axiosError.response
            } else {
                return null
            }
        } else {
            return null
        }
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
        if (axios.isAxiosError(error)) {
            const axiosError: AxiosError = error
            if (axiosError.response) {
                return axiosError.response
            } else {
                return null
            }
        } else {
            return null
        }
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

export const getSampleLists = async () => {
    try {
        const response = await axios.get(`/api/sample/lists`)
        return response.data.body
    } catch (error) {
        return null
    }
}

export const getSampleList = async (listId: number) => {
    if (!listId) {
        throw "Nie uzupełniono id"
    }

    try {
        const response = await axios.get(`/api/sample/lists/${listId}`)
        return response.data.body
    } catch (error) {
        return null
    }
}

export const generateEmailSignCode = async (data: { email: string }) => {
    if (!data) {
        throw "Nie uzupełniono danych"
    }

    try {
        const response = await axios.post(`/api/auth/send-email-code`, data)
        return response
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError: AxiosError = error
            if (axiosError.response) {
                return axiosError.response
            } else {
                return null
            }
        } else {
            return null
        }
    }
}

export const remindPasswordSend = async (email: string) => {
    if (!email) {
        throw "Nie uzupełniono danych"
    }

    const data = {
        email: email,
    }

    try {
        const response = await axios.post(`/api/auth/remind-pass`, data)
        return response
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError: AxiosError = error
            if (axiosError.response) {
                return axiosError.response
            } else {
                return null
            }
        } else {
            return null
        }
    }
}

export const resetPasswordSend = async (data: ICreateRemindPassUser) => {
    if (!data) {
        throw "Nie uzupełniono danych"
    }

    try {
        const response = await axios.put(`/api/auth/remind-pass`, data)
        return response
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError: AxiosError = error
            if (axiosError.response) {
                return axiosError.response
            } else {
                return null
            }
        } else {
            return null
        }
    }
}
