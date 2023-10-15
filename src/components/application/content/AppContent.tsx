"use client"

import { useState, useEffect } from "react"
import AppContentElement from "@/components/application/content/AppContentElement"
import { useGlobalContext } from "@/context/AppContext"

export default function AppContent() {
    const { lists, listActive, setListActive } = useGlobalContext()
    const [loading, setLoading] = useState(true)

    const { id, elements } = listActive

    const getListActive = async () => {
        try {
            const res = await fetch(`/api/lists/${id}`)
            if (res.ok) {
                const data = await res.json()
                const result = await data.body?.elements
                await setListActive((prevState) => ({
                    ...prevState,
                    elements: result,
                }))
                setLoading(false)
            } else {
                console.error("Błąd pobierania danych")
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        setLoading(true)
        getListActive()
    }, [id])

    return (
        <>
            {loading ? (
                <div className="flex justify-center text-gray-600 sm:bg-white sm:shadow-lg sm:rounded-md sm:overflow-y-auto sm:py-9 sm:px-8">
                    <div className="loader"></div>
                    {/* Loading... */}
                </div>
            ) : lists.length > 0 ? (
                // tu powinno byc if lists jest pusta

                <>
                    {elements?.length > 0 ? (
                        <>
                            <div className="text-gray-600 sm:bg-white sm:shadow-lg sm:rounded-md sm:overflow-y-auto sm:py-9 sm:px-8">
                                <ul>
                                    {elements.map((element, index) => (
                                        <>
                                            <AppContentElement
                                                key={element.id}
                                                name={element.name}
                                                done={element.status}
                                                index={index}
                                                category={element.categories}
                                            />
                                        </>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-2">
                                <button className="hover:text-[var(--primary)]">
                                    Odznacz wszystko -
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="bg-white p-10 shadow-lg rounded-md">
                            Zaznacz którąś z list
                        </div>
                    )}
                </>
            ) : (
                <div className="bg-white p-10 shadow-lg rounded-md">
                    <div className="text-center">
                        <p className="text-slate-700 mb-5">
                            Zauważyliśmy, że Twój panel jest jeszcze pusty. Ale
                            nie martw się, jesteśmy tu, by Ci pomóc zacząć!
                            Stworzenie pierwszej listy rzeczy do zabrania na
                            wakacje jest naprawdę proste i szybkie. Nie czekaj!
                            Zacznij planować swój wyjazd teraz i upewnij się, że
                            masz wszystko, czego potrzebujesz, aby cieszyć się
                            idealnymi wakacjami.
                        </p>
                        <button className="btn btn-primary transition-colors">
                            Stwórz swoją pierwszą listę
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}
