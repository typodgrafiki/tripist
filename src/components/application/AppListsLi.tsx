"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function AppListsLi({
    name,
    url,
}: {
    name: string
    url: string
}) {
    const pathname = usePathname()
    const thisUrl = "/dashboard/" + url

    return (
        <>
            <li className={pathname === thisUrl ? "font-semibold" : ""}>
                <Link href={thisUrl}>{name}</Link>
            </li>
        </>
    )
}
