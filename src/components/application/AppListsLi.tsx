"use client"

import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { setList } from "@/store/slice"

export default function AppListsLi({
    name,
    url,
    id,
}: {
    name: string
    url: string
    id: string
}) {
    const pathname = usePathname()
    const thisUrl = "/dashboard/" + url
    const dispatch = useDispatch()

    const getData = async () => {
        const headers = new Headers()
        headers.append("ListId", id)

        const res = await fetch("/api/showListDetails", {
            method: "GET",
            headers: headers,
        })

        if (res.ok) {
            const data = await res.json()

            const result = {
                id: id,
                name: name,
                url: url,
                elements: data.body,
            }

            dispatch(setList(result))
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
            <li className={pathname === thisUrl ? "font-semibold" : ""}>
                <Link
                    href={thisUrl}
                    onClick={getData}
                >
                    {name}
                </Link>
            </li>
        </>
    )
}
