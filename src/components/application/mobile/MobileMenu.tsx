"use client"

import React from "react"
import CreateList from "../modals/CreateList"
import IconPlus from "../icons/plus"
import { useModal } from "@/context/ModalContext"

export default function MobileMenu() {
    const { setIsModalOpen, setModalContent } = useModal()

    const handleAddList = () => {
        setModalContent(<CreateList />)
        setIsModalOpen(true)
    }

    return (
        <div className="mobile-menu-bottom bg-gray-200 flex justify-between fixed bottom-0 left-0 right-0 sm:hidden">
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
