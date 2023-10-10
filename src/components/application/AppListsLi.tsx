"use client"

import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { setList } from "@/store/slice"
import "@/assets/styles/app.css"

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
