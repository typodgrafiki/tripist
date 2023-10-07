import { auth } from "@clerk/nextjs"
import prisma from "@/lib/db"

export async function listDetails(url: string) {
    console.log(url)

    // const { userId } = auth()

    // try {
    //     if (!userId) return

    //     const res = await prisma.list.findMany({
    //         where: {
    //             userId: userId,
    //         },
    //     })
    //     return res
    // } catch (error) {
    //     console.log(error)
    // }

    // return
}
