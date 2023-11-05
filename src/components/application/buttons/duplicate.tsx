"use client"

import { useModal } from "@/context/ModalContext"
import CreateList from "@/components/application/modals/CreateList"
import IconCopy from "@/components/application/icons/copy"
import DebugLog from "@/utils/developConsoleLog"
import DebugLogScript from "@/utils/developConsoleScripts"

export default function ButtonDuplicate() {
    DebugLogScript("ButtonDuplicate")
    const { setModalContent, setIsModalOpen } = useModal()
    // const { listActive } = useGlobalContext()
    // const { id, name } = listActive

    const duplicatData = {
        // id: id || "",
        // name: name || "",
    }

    const handleClick = async () => {
        // setModalContent(<CreateList duplicate={duplicatData} />)
        setIsModalOpen(true)
    }

    return (
        <>
            <DebugLog name="ButtonDelete" />
            <button
                className="animated hidden sm:inline-block px-3 mb-2 hover:text-[var(--primary)] hover:bg-white rounded-full"
                onClick={handleClick}
            >
                <IconCopy />
            </button>
        </>
    )
}
