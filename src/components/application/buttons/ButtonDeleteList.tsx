"use client"

import IconBin from "@/components/application/icons/bin"
import { useModal } from "@/context/ModalContext"
import DeleteList from "@/components/application/modals/DeleteList"
import Tooltip from "@/components/ui/Tooltip"

export default function ButtonDelete({ listId }: { listId: string }) {
    const { setModalContent, setIsModalOpen } = useModal()

    const handleClick = async () => {
        setModalContent(<DeleteList listId={listId} />)
        setIsModalOpen(true)
    }

    return (
        <Tooltip
            text="Usuń"
            className="hidden sm:flex mb-2"
        >
            <button
                className="animated px-3 dark:text-[var(--darkModeText)] hover:text-[var(--primary)] rounded-full"
                onClick={handleClick}
            >
                <IconBin />
            </button>
        </Tooltip>
    )
}
