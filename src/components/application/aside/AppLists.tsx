"use client"

import { useState, useEffect } from "react"
import AppListsLi from "./AppListsLi"
import { useGlobalContext } from "@/context/AppContext"
import { useModal } from "@/context/ModalContext"
import CreateList from "@/components/application/modals/CreateList"
import "@/assets/styles/app-loading.css"
import DebugLog from "@/lib/developConsoleLog"
import DebugLogScript from "@/lib/developConsoleScripts"

export default function AppLists() {
    DebugLogScript("AppLists")
    const { lists, setLists } = useGlobalContext()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getDataLists = async () => {
            const res = await fetch("/api/lists")
            if (res.ok) {
                const data = await res.json()
                await setLists(data.body)
                setLoading(false)
                // Sprawdzic czy w url jest sciezka - jesli tak to aktywowac liste (jesli istnieje, jesli nie to na strone glowna)
            } else {
                console.error("Błąd pobierania danych")
            }
        }
        getDataLists()
    }, [])

    return (
        <>
            <DebugLog name="AppLists" />
            {loading ? (
                <ul className="my-lists-loading pt-[15px]">
                    <li className="max-w-[145px]"></li>
                    <li className="max-w-[138px]"></li>
                    <li className="max-w-[89px]"></li>
                    <li className="max-w-[126px]"></li>
                    <li className="max-w-[133px]"></li>
                    <li className="max-w-[109px]"></li>
                </ul>
            ) : (
                <div className="hidden my-lists text-gray-500 bg-white shadow-md rounded-md py-3 sm:block sm:overflow-y-auto sm:mb-5">
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
            )}
            <Button />
        </>
    )
}

const Button = () => {
    DebugLogScript("AppListsButton")
    const { setModalContent, setIsModalOpen } = useModal()

    const handleOpenModal = () => {
        setModalContent(<CreateList />)
        setIsModalOpen(true)
    }

    return (
        <>
            <DebugLog name="AppListsButton" />
            <button
                className="hidden sm:inline-block btn btn-default self-start sm:mb-4"
                onClick={handleOpenModal}
            >
                Dodaj listę
            </button>
        </>
    )
}
