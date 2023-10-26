"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useGlobalContext } from "@/context/AppContext"
import { useModal } from "@/context/ModalContext"
import CreateList from "@/components/application/modals/CreateList"
import IconCopy from "@/components/application/icons/copy"

export default function ButtonDuplicate() {
    const router = useRouter()
    const { setModalContent, setIsModalOpen } = useModal()
    const { listActive } = useGlobalContext()
    const { id, name } = listActive

    const duplicatData = {
        id: id || "",
        name: name || "",
    }

    const handleClick = async () => {
        setModalContent(<CreateList duplicate={duplicatData} />)
        setIsModalOpen(true)
    }

    return (
        <button
            className="hidden sm:inline-block px-1 hover:text-[var(--primary)]"
            onClick={handleClick}
        >
            <IconCopy />
        </button>
    )
}
