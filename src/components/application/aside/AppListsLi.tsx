"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useGlobalContext, ListActiveProps } from "@/context/AppContext"
import DebugLog from "@/lib/developConsoleLog"
import DebugLogScript from "@/lib/developConsoleScripts"

export default function AppListsLi({ name, url, id }: ListActiveProps) {
    DebugLogScript("AppListsLi")
    const { setListActive } = useGlobalContext()
    const pathname = usePathname()
    const thisUrl = "/dashboard/" + url

    const changeActive = () => {
        setListActive((prevState) => ({
            id: id,
            name: name,
            url: url,
        }))
    }

    useEffect(() => {
        if (pathname === thisUrl) {
            changeActive()
        }
    }, [])

    return (
        <>
            <DebugLog name="AppListsLi" />
            <li className="relative mb-1">
                <Link
                    href={thisUrl}
                    className={`list-link animated block px-6 py-2 relative rounded-md truncate ${
                        pathname === thisUrl
                            ? "font-medium text-white bg-[var(--primary)] mx-2 pl-4 pr-1"
                            : "hover:text-gray-900 hover:ml-2 focus:font-medium focus:bg-[var(--primary)] focus:text-white focus:mx-2"
                    }`}
                    onClick={changeActive}
                >
                    {name}
                </Link>
            </li>
        </>
    )
}
