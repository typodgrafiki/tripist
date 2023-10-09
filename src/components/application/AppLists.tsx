"use client"

import React, { useEffect, useState } from "react"
import AppListsLi from "./AppListsLi"
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux"
import { RootState } from "@/store/InterfaceState"
import { setLists } from "@/store/slice"

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default function AppLists() {
    const lists = useTypedSelector((state) => state.lists.elements)
    const dispatch = useDispatch()

    useEffect(() => {
        const getData = async () => {
            const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
            const apiUrl = `${baseUrl}/api/showLists`
            const res = await fetch(apiUrl)

            if (res.ok) {
                const data = await res.json()
                dispatch(setLists(data.body))
                console.log(data.body)
                // setLists(data.body)
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
                                    key={element.id}
                                    name={element.name}
                                    url={element.url}
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
