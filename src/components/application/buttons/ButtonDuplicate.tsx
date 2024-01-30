"use client"

import { useModal } from "@/context/ModalContext"
import CreateListModal from "@/components/application/modals/CreateList"
import IconCopy from "@/components/application/icons/copy"
import Tooltip from "@/components/ui/Tooltip"

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
        <Tooltip
            text="Duplikuj"
            className="hidden sm:flex mb-2 "
        >
            <button
                className="animated px-3 dark:text-[var(--darkModeText)] hover:text-[var(--primary)] rounded-full"
                onClick={handleClick}
            >
                <IconCopy />
            </button>
        </Tooltip>
    )
}
