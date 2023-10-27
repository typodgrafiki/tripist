"use client"

import { useGlobalContext } from "@/context/AppContext"
import DebugLog from "@/lib/developConsoleLog"
import DebugLogScript from "@/lib/developConsoleScripts"

export default function AppTitle() {
    DebugLogScript("Title")
    const { listActive } = useGlobalContext()
    const title = listActive?.name

    return (
        <>
            <DebugLog name="Title" />
            <h1 className="font-semibold text-2xl truncate py-3 pl-5 sm:mb-3 sm:mt-1 sm:py-0 sm:pl-0">
                {title ? title : "Witaj w Triplist 🎉"}
            </h1>
        </>
    )
}
