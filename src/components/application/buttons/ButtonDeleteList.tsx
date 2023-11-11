"use client"

import IconBin from "@/components/application/icons/bin"
import { useModal } from "@/context/ModalContext"
import DeleteList from "@/components/application/modals/DeleteList"

export default function ButtonDelete({ listId }: { listId: string }) {
    const { setModalContent, setIsModalOpen } = useModal()

    const handleClick = async () => {
        setModalContent(<DeleteList listId={listId} />)
        setIsModalOpen(true)
    }

    return (
        <>
            <button
                className="animated hidden sm:inline-block px-3 mb-2 hover:text-[var(--primary)] hover:bg-white rounded-full"
                onClick={handleClick}
            >
                <IconBin />
            </button>
        </>
    )
}
