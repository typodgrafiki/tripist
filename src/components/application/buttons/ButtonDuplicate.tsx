"use client"

import { useModal } from "@/context/ModalContext"
import CreateListModal from "@/components/application/modals/CreateList"
import IconCopy from "@/components/application/icons/copy"

export default function ButtonDuplicate({
    listId,
    name,
}: {
    listId: string
    name: string
}) {
    const { setModalContent, setIsModalOpen } = useModal()

    const duplicatData = {
        id: listId || "",
        name: name || "",
    }

    const handleClick = async () => {
        setModalContent(<CreateListModal duplicate={duplicatData} />)
        setIsModalOpen(true)
    }

    return (
        <>
            <button
                className="animated hidden sm:inline-block px-3 mb-2 hover:text-[var(--primary)] hover:bg-white rounded-full"
                onClick={handleClick}
            >
                <IconCopy />
            </button>
        </>
    )
}
