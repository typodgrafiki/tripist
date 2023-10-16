"use client"

import React, { useEffect, useState, useRef } from "react"

export default function ProgressBar({ closeFn }: { closeFn: () => void }) {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (progress < 100) {
                setProgress(progress + 1)
            }
        }, 50)

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
        transition: "width 5s linear",
    }

    return (
        <>
            <div className="progress-bar">
                <div
                    className="progress"
                    style={style}
                ></div>
            </div>
        </>
    )
}
