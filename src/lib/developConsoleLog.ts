"use client"

import React, { useEffect } from "react"

const DebugLog = ({ name }: { name: string }) => {
    useEffect(() => {
        console.log(
            `%c${name}`,
            "font-style: italic; font-size: 1em; color: #5D8060;"
        )
        return () => {
            console.log(
                `%c${name}`,
                "font-style: italic; font-size: 1em; color: #981E58;"
            )
        }
    }, [name])

    return null
}

export default DebugLog
