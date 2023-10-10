"use client"

import { useEffect } from "react"
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
            const res = await fetch("/api/showLists")

            if (res.ok) {
                const data = await res.json()
                dispatch(setLists(data.body))

                // Sprawdzic czy w url jest sciezka - jesli tak to aktywowac liste (jesli istnieje, jesli nie to na strone glowna)

                // console.log(data.body)
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
                            <AppListsLi
                                key={element.id}
                                id={element.id}
                                name={element.name}
                                url={element.url}
                            />
                        ))}
                    </ul>
                </div>
            ) : (
                "Brak list"
            )}
        </>
    )
}
