"use client"

import { useEffect } from "react"
import { useGlobalContext } from "@/context/AppContext"

export default function Modal({ children }: { children: React.ReactNode }) {
    const { openModal, setOpenModal } = useGlobalContext()

    if (!openModal) return null

    const handleEscKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            setOpenModal(false)
        }
    }

    const handleShadowClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            setOpenModal(false)
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", handleEscKeyDown)
        return () => {
            window.removeEventListener("keydown", handleEscKeyDown)
        }
    }, [])

    if (openModal) {
        return (
            <>
                <div
                    className="modal-overlay flex items-center justify-center"
                    onClick={handleShadowClick}
                >
                    <div className="bg-white rounded-3xl shadow-2xl p-5">
                        {children}
                    </div>
                </div>
            </>
        )
    }
}
