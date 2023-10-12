"use client"

import { useEffect } from "react"
import AppListsLi from "./AppListsLi"
import { useGlobalContext } from "@/context/AppContext"

export default function AppLists() {
    const { lists } = useGlobalContext()

    useEffect(() => {
        const getDataLists = async () => {
            const res = await fetch("/api/lists")
            if (res.ok) {
                const data = await res.json()
                // await dispatch(setLists(data.body))
                // Sprawdzic czy w url jest sciezka - jesli tak to aktywowac liste (jesli istnieje, jesli nie to na strone glowna)
                console.log(data.body)
            } else {
                console.error("Błąd pobierania danych")
            }
        }
        getDataLists()
    }, [])

    return (
        <>
            {lists ? (
                <div className="my-lists text-gray-500 pr-7">
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
                <ul className="my-lists-loading pt-[15px]">
                    <li className="max-w-[145px]"></li>
                    <li className="max-w-[138px]"></li>
                    <li className="max-w-[89px]"></li>
                    <li className="max-w-[126px]"></li>
                    <li className="max-w-[133px]"></li>
                    <li className="max-w-[109px]"></li>
                </ul>
            )}

            <button className="btn btn-default mt-8">Dodaj listę</button>
        </>
    )
}
