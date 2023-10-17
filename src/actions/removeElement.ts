import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs"
import prisma from "@/lib/prismaClient"

export const removeElement = async (id: number) => {
    try {
        await prisma.listItem.deleteMany({
            where: {
                id: id,
            },
        })
        return "success " + id
    } catch (error) {
        return "fail"
    }
}
