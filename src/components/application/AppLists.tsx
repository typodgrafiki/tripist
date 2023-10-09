"use client"

import React, { useEffect, useState } from "react"
import AppListsLi from "./AppListsLi"

export default function AppLists() {
    const [lists, setLists] = useState([])
    useEffect(() => {
        const getData = async () => {
            const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
            const apiUrl = `${baseUrl}/api/showLists`
            const res = await fetch(apiUrl)

            if (res.ok) {
                const data = await res.json()
                setLists(data.body)
            } else {
                console.error("Błąd pobierania danych")
            }
        }

        getData()
    }, [])

    return (
        <>
            {lists ? (
                <div className="my-lists">
                    <ul>
                        {lists.map((element) => (
                            <>
                                <AppListsLi
                                    name={element.name}
                                    url={element.url}
                                    id={element.id}
                                    key={element.id}
                                />
                            </>
                        ))}
                    </ul>
                </div>
            ) : (
                "Nie ma list :P"
            )}
        </>
    )
}
