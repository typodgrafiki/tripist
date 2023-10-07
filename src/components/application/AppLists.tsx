import { auth } from "@clerk/nextjs"
import prisma from "@/lib/db"
import AppListsLi from "./AppListsLi"

const getLists = async () => {
    const { userId } = auth()

    try {
        if (!userId) return
        const res = await prisma.list.findMany({
            where: {
                userId: userId,
            },
        })

        // tutaj przenosimy ta funkcje do lib i tam zmieniamy redux dla wyswietlanych elementow

        return res
    } catch (error) {
        console.log(error)
    }
}

export default async function AppLists() {
    const data = await getLists()

    return (
        <>
            <div className="my-lists">
                <ul>
                    {data?.map((element) => (
                        <>
                            <AppListsLi
                                name={element.name}
                                url={element.url}
                                key={element.url}
                            />
                        </>
                    ))}
                </ul>
            </div>
        </>
    )
}
