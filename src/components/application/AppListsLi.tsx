"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useGlobalContext } from "@/context/AppContext"

export default function AppListsLi({
    name,
    url,
    id,
}: {
    name: string
    url: string
    id: string
}) {
    const { setListActive } = useGlobalContext()
    const pathname = usePathname()
    const thisUrl = "/dashboard/" + url

    const getData = async () => {
        const res = await fetch(`/api/lists/${id}`)

        console.log("fetch")

        if (res.ok) {
            const data = await res.json()
            const result = data.body

            setListActive(result)
        } else {
            console.error("Błąd pobierania danych")
        }
    }

    useEffect(() => {
        if (pathname === thisUrl) {
            getData()
        }
    }, [])

    return (
        <>
            <li className="relative">
                <Link
                    href={thisUrl}
                    className={
                        pathname === thisUrl
                            ? "list-link-active block font-semibold text-gray-900 bg-white rounded-lg px-5 py-2"
                            : "block px-5 pl-0 py-2 hover:text-gray-900"
                    }
                    onClick={getData}
                >
                    {name}
                </Link>
            </li>
        </>
    )
}
