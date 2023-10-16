"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useGlobalContext } from "@/context/AppContext"
import IconBin from "@/components/application/icons/bin"

export default function ButtonDelete() {
    const router = useRouter()
    const { lists, setLists, listActive, setListActive } = useGlobalContext()
    const [loading, setLoading] = useState(false)
    const { id } = listActive

    const handleClick = async () => {
        try {
            await setLoading(true)
            const res = await fetch(`/api/lists/${id}`, {
                method: "DELETE",
            })
            if (res.ok) {
                await setListActive({
                    id: null,
                    name: null,
                    elements: [],
                })
                setLists((prevLists) =>
                    prevLists.filter((item) => item.id !== id)
                )
                router.push("/dashboard")
            } else {
                console.error("Błąd pobierania danych")
            }
            setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <button
            className="hidden sm:inline-block"
            onClick={handleClick}
        >
            {loading ? (
                <div className="loader"></div>
            ) : (
                <>
                    <IconBin />
                </>
            )}
        </button>
    )
}
