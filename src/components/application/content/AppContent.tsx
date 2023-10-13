"use client"

import { useEffect } from "react"
import { useRouter, usePathname, useParams } from "next/navigation"
import AppContentElement from "@/components/application/content/AppContentElement"
import { useGlobalContext } from "@/context/AppContext"

export default function AppContent() {
    const {
        listActive,
        setListActive,
        listActiveLoading,
        setListActiveLoading,
    } = useGlobalContext()

    const params = useParams()
    const listUrl = params.slug

    const { id, elements } = listActive

    const getListActive = async () => {
        try {
            const res = await fetch(`/api/lists/${id}`)
            if (res.ok) {
                const data = await res.json()
                const result = data.body

                setListActiveLoading(false)
                setListActive((prevState) => ({
                    ...prevState,
                    elements: result,
                }))
            } else {
                console.error("Błąd pobierania danych")
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        setListActiveLoading(true)
        getListActive()
    }, [id])

    return (
        <>
            <div>{listActiveLoading && "loading"}</div>
            {elements ? (
                <>
                    <div className="text-gray-600">
                        {elements.length > 0 ? (
                            <ul>
                                {elements.map((element, index) => (
                                    <AppContentElement
                                        key={element.id}
                                        name={element.name}
                                        done={element.status}
                                        index={index}
                                    />
                                ))}
                            </ul>
                        ) : (
                            <div>
                                Nie udało się wczytać elementów / tablica jest
                                pusta
                            </div>
                        )}
                    </div>
                </>
            ) : (
                <>
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
                </>
            )}
        </>
    )
}
