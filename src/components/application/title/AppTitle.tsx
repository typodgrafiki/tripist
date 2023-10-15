"use client"

import { useGlobalContext } from "@/context/AppContext"

export default function AppTitle() {
    const { listActive } = useGlobalContext()
    const title = listActive?.name

    return (
        <>
            <h1 className="font-semibold text-2xl truncate py-3 pl-5 sm:mb-4 sm:py-0 sm:pl-0">
                {title ? title : "Witaj w Triplist 🎉"}
            </h1>
        </>
    )
}
