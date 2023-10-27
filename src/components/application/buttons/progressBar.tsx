"use client"

import React, { useEffect, useState, useRef } from "react"
import DebugLog from "@/lib/developConsoleLog"
import DebugLogScript from "@/lib/developConsoleScripts"

export default function ProgressBar({ closeFn }: { closeFn: () => void }) {
    DebugLogScript("ProgressBar")
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (progress < 100) {
                setProgress(progress + 1)
            }
        }, 17)

        return () => {
            clearInterval(interval)
        }
    }, [progress])

    useEffect(() => {
        if (progress === 100) {
            closeFn()
        }
    }, [progress, closeFn])

    const style = {
        width: `${progress}%`,
        transition: "width 2s linear",
    }

    return (
        <>
            <DebugLog name="ProgressBar" />
            <div className="progress-bar">
                <div
                    className="progress"
                    style={style}
                ></div>
            </div>
        </>
    )
}
