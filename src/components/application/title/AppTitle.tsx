"use client"

import { useGlobalContext } from "@/context/AppContext"

export default function AppTitle() {
    const { listActive } = useGlobalContext()
    const title = listActive?.name

    return (
        <>
            <h1 className="font-semibold text-2xl mb-4">
                {title ? title : "Witaj w Triplist 🎉"}
            </h1>
        </>
    )
}
