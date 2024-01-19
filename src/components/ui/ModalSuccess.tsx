import Confetti from "@/hooks/useConfetti"
import React, { useEffect } from "react"

export default function ModalSuccess({
    children,
}: {
    children: React.ReactNode
}) {
    // useEffect(() => {
    //     confetti()
    // }, [])

    return (
        <div className="flex flex-col items-center p-6">
            <svg
                width="49"
                height="49"
                viewBox="0 0 49 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24.5 49C38.031 49 49 38.031 49 24.5C49 10.969 38.031 0 24.5 0C10.969 0 0 10.969 0 24.5C0 38.031 10.969 49 24.5 49Z"
                    fill="#467BF0"
                />
                <path
                    d="M15 24.8L22.5 32L35 20"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <Confetti />
            <div className="mt-4 text-base">{children}</div>
        </div>
    )
}
