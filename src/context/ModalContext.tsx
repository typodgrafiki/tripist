"use client"

import {
    createContext,
    useContext,
    useState,
    Dispatch,
    SetStateAction,
    ReactNode,
} from "react"
// import Modal from "@/components/application/modals/Modal"

interface ModalContextType {
    isModalOpen: boolean
    setIsModalOpen: Dispatch<SetStateAction<boolean>>
    modalContent: ReactNode
    setModalContent: Dispatch<SetStateAction<ReactNode>>
    openModal: (content: ReactNode) => void
    closeModal: () => void
}

const ModalContext = createContext<ModalContextType>({
    isModalOpen: false,
    setIsModalOpen: () => {},
    modalContent: null,
    setModalContent: () => {},
    openModal: () => {},
    closeModal: () => {},
})

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalContent, setModalContent] = useState<ReactNode>(null)

    const openModal = (content: ReactNode) => {
        setModalContent(content)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setModalContent(null)
        setIsModalOpen(false)
    }

    return (
        <ModalContext.Provider
            value={{
                isModalOpen,
                setIsModalOpen,
                modalContent,
                setModalContent,
                openModal,
                closeModal,
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext)
