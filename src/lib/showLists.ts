import prisma from "@/lib/db"

export async function showLists(userId: string) {
    try {
        if (!userId) return

        const lists = await prisma.list.findMany({
            where: {
                userId: userId,
            },
        })

        return lists
    } catch (error) {
        throw error
    }
}

export async function showListDetails(userId: string, listId: string) {
    try {
        if (!userId) return

        const list = await prisma.listItem.findMany({
            where: {
                listId: listId,
            },
        })

        console.log(userId, listId)

        // if (!list) {
        //     throw new Error(`Nie znaleziono listy o url: ${url}`)
        // }

        // return list
    } catch (error) {
        throw error
    }
}
