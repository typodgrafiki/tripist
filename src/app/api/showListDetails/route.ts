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
