"use client"

import { useEffect, useCallback } from "react"
import { useModal } from "@/context/ModalContext"

export default function Modal() {
    const { isModalOpen, setIsModalOpen, modalContent, setModalContent } =
        useModal()

    const closeModal = useCallback(() => {
        setIsModalOpen(false)
        setModalContent(null)
    }, [setIsModalOpen, setModalContent])

    // const handleEscKeyDown = (event: KeyboardEvent) => {
    //     if (event.key === "Escape") {
    //         closeModal()
    //     }
    // }

    const handleShadowClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            closeModal()
        }
    }

    // useEffect(() => {
    //     window.addEventListener("keydown", handleEscKeyDown)
    //     return () => {
    //         window.removeEventListener("keydown", handleEscKeyDown)
    //     }
    // }, [])

    const handleEscKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeModal()
            }
        },
        [closeModal]
    )

    useEffect(() => {
        window.addEventListener("keydown", handleEscKeyDown)
        return () => {
            window.removeEventListener("keydown", handleEscKeyDown)
        }
    }, [handleEscKeyDown])

    if (!isModalOpen) return null

    return (
        <>
            <div
                className="animated modal-overlay flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm"
                onClick={handleShadowClick}
            >
                <div
                    className="fixed top-0 right-0 text-white p-3 cursor-pointer"
                    onClick={handleShadowClick}
                >
                    ESC
                </div>
                <div className="modal bg-white rounded-3xl shadow-2xl p-5 mx-3 sm:px-9 sm:py-8">
                    {modalContent}
                </div>
            </div>
        </>
    )
}
