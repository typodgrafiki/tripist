// "use client"

// import {
//     createContext,
//     useContext,
//     useState,
//     Dispatch,
//     SetStateAction,
//     ReactNode,
// } from "react"

// interface ISampleContextType {
//     isModalOpen: boolean
//     setIsModalOpen: Dispatch<SetStateAction<boolean>>
//     modalContent: ReactNode
//     setModalContent: Dispatch<SetStateAction<ReactNode>>
//     openModal: (content: ReactNode) => void
//     closeModal: () => void
// }

// const SampleContext = createContext<ISampleContextType>({
//     isModalOpen: false,
//     setIsModalOpen: () => {},
//     modalContent: null,
//     setModalContent: () => {},
//     openModal: () => {},
//     closeModal: () => {},
// })

// export const SampleProvider = ({ children }: { children: ReactNode }) => {
//     const [isModalOpen, setIsModalOpen] = useState(false)
//     const [modalContent, setModalContent] = useState<ReactNode>(null)

//     const openModal = (content: ReactNode) => {
//         setModalContent(content)
//         setIsModalOpen(true)
//     }

//     const closeModal = () => {
//         setModalContent(null)
//         setIsModalOpen(false)
//     }

//     return (
//         <SampleContext.Provider
//             value={{
//                 isModalOpen,
//                 setIsModalOpen,
//                 modalContent,
//                 setModalContent,
//                 openModal,
//                 closeModal,
//             }}
//         >
//             {children}
//         </SampleContext.Provider>
//     )
// }

// export const useSampleContext = () => useContext(SampleContext)

import React, { createContext, useContext, ReactNode } from "react"
import { TSampleContextType } from "@/types/types"

// Utworzenie kontekstu poza komponentem
export const SampleContext = createContext<TSampleContextType>({
    title: "",
    titleIsEmpty: true,
    titleColor: "",
    isCreateSample: false,
    setIsCreateSample: () => {},
    dataCustomList: {},
    setDataCustomList: () => {},
    customList: false,
    setCustomList: () => {},
    importedList: {
        id: 0,
        days: 0,
        type: "",
    },
    setImportedList: () => {},
    isPending: false,
    isError: false,
    isSuccess: false,
})

export default function SampleProvider({
    children,
    contextData,
}: {
    children: ReactNode
    contextData: TSampleContextType
}) {
    return (
        <SampleContext.Provider value={contextData}>
            {children}
        </SampleContext.Provider>
    )
}
