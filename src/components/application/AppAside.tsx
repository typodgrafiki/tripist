import Link from "next/link"
import Image from "next/image"
import { UserButton } from "@clerk/nextjs"
import AppLists from "./AppLists"
import { auth } from "@clerk/nextjs"
import prisma from "@/lib/db"

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

export default async function AppAside() {
    const data = await getLists()
    return (
        <>
            <div className="top">
                <Link
                    href="/dashboard"
                    className="block mb-5"
                >
                    <Image
                        src="/tripist.svg"
                        width={97}
                        height={39}
                        alt="Tripist"
                        priority
                    />
                </Link>
                <AppLists />
            </div>
            <UserButton afterSignOutUrl="/" />
        </>
    )
}
