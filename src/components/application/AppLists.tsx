import Link from "next/link"
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
                    {/* {data?.map((element) => (
                        <>
                            <li key={element.id}>
                                <Link href={`/dashboard/${element.url}`}>
                                    {element.name}
                                </Link>
                            </li>
                        </>
                    ))} */}
                </ul>
            </div>
        </>
    )
}
