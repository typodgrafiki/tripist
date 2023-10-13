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
    const { listActive, setListActive } = useGlobalContext()
    const pathname = usePathname()
    const thisUrl = "/dashboard/" + url
    const { id: activeId } = listActive

    const changeActive = () => {
        setListActive((prevState) => ({
            ...prevState,
            id: id,
            name: name,
        }))
    }

    useEffect(() => {
        if (pathname === thisUrl) {
            changeActive()
        }
    }, [])

    return (
        <>
            <li className="relative">
                <Link
                    href={thisUrl}
                    className={
                        pathname === thisUrl
                            ? "list-link list-link-active block font-semibold text-gray-900 bg-white rounded-lg px-5 py-2"
                            : "list-link block px-5 pl-0 py-2 hover:text-gray-900 focus:font-semibold focus:text-gray-900 focus:bg-white focus:rounded-lg focus:pl-2"
                    }
                    onClick={changeActive}
                >
                    {name}
                </Link>
            </li>
        </>
    )
}
