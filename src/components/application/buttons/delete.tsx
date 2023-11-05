"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import IconBin from "@/components/application/icons/bin"
import DebugLog from "@/utils/developConsoleLog"
import DebugLogScript from "@/utils/developConsoleScripts"

export default function ButtonDelete() {
    const router = useRouter()

    const [loading, setLoading] = useState(false)
    // const { id } = listActive

    const handleClick = async () => {
        // try {
        //     await setLoading(true)
        //     const res = await fetch(`/api/lists/${id}`, {
        //         method: "DELETE",
        //     })
        //     if (res.ok) {
        //         setListActive({
        //             id: null,
        //             name: null,
        //             url: "",
        //         })
        //         await setActiveElements([])
        //         setLists((prevLists) =>
        //             prevLists.filter((item) => item.id !== id)
        //         )
        //         router.push("/dashboard")
        //     } else {
        //         console.error("Błąd pobierania danych")
        //     }
        //     setLoading(false)
        // } catch (error) {
        //     console.error(error)
        // }
    }

    return (
        <>
            <DebugLog name="ButtonDelete" />
            <button
                className="animated hidden sm:inline-block px-3 mb-2 hover:text-[var(--primary)] hover:bg-white rounded-full"
                onClick={handleClick}
            >
                {loading ? (
                    <div className="loader small"></div>
                ) : (
                    <>
                        <IconBin />
                    </>
                )}
            </button>
        </>
    )
}
