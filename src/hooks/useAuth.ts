"use server"

import { cookies } from "next/headers"
import prisma from "@/lib/prismaClient"
import { IUserData } from "@/types/types"

export const useAuth = async () => {
    const sessionToken = cookies().get("tripist_auth")

    if (!sessionToken) {
        return {
            userId: null,
        }
    }

    const sessionWithUser = await prisma.session.findUnique({
        where: {
            id: sessionToken.value,
        },
        include: {
            user: true,
        },
    })

    if (!sessionWithUser || !sessionWithUser.user) {
        return {
            userId: null,
        }
    }

    const { user } = sessionWithUser

    return {
        userId: user.id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        image: user.image,
        gender: user.gender,
    } as IUserData
}
