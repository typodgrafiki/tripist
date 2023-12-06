"use client"

import React from "react"
import CreateList from "../modals/CreateList"
import IconPlus from "../icons/plus"
import { useModal } from "@/context/ModalContext"
import MobileLists from "../modals/mobile/MobileLists"

export default function MobileMenu() {
    const { setIsModalOpen, setModalContent } = useModal()

    const handleAddList = () => {
        setModalContent(<CreateList />)
        setIsModalOpen(true)
    }

    const handleLists = () => {
        setModalContent(<MobileLists />)
        setIsModalOpen(true)
    }

    return (
        <div className="mobile-menu-bottom bg-gray-200 flex justify-between fixed bottom-0 left-0 right-0 sm:hidden">
            <Btn onClick={handleLists}>
                <svg
                    width="25"
                    height="16"
                    viewBox="0 0 25 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1 1H24"
                        stroke="#2C2D32"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M1 8H24"
                        stroke="#2C2D32"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M1 15H24"
                        stroke="#2C2D32"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
                Listy
            </Btn>
            <Btn onClick={handleAddList}>
                <IconPlus />
                Dodaj listę
            </Btn>
        </div>
    )
}

const Btn = ({
    children,
    onClick,
}: {
    children: React.ReactNode
    onClick: () => void
}) => {
    return (
        <button
            className="p-4 flex gap-2 justify-center items-center"
            onClick={onClick}
        >
            {children}
        </button>
    )
}
