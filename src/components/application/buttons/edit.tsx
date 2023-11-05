"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useGlobalContext } from "@/context/AppContext"
import IconPen from "@/components/application/icons/pen"
import DebugLog from "@/utils/developConsoleLog"
import DebugLogScript from "@/utils/developConsoleScripts"

export default function ButtonEdit() {
    DebugLogScript("ButtonEdit")
    return (
        <>
            <DebugLog name="ButtonEdit" />

            <button className="animated hidden sm:inline-block px-3 mb-2 hover:text-[var(--primary)] hover:bg-white rounded-full">
                <IconPen />
            </button>
        </>
    )
}
