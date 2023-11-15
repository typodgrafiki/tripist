"use server"

import { ICreateUser } from "@/types/types"
import axios from "axios"

export const createUser = async (data: ICreateUser) => {
    const { name, email, password } = data

    if (!name || !email || !password) {
        throw "Nie uzupełniono danych"
    }

    const response = await axios.post("/api/auth/user", data)
    return response
}
