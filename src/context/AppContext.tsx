"use client"

import {
    createContext,
    useContext,
    useState,
    Dispatch,
    SetStateAction,
    ReactNode,
} from "react"

interface ListsProps {
    id: string
    name: string
    type?: string
    url: string
    elements: ListElementsProps[]
}

interface ListElementsProps {
    id: string
    name: string
    status: boolean
    category?: string
}

interface ListActiveProps {
    id: string | null
    name: string | null
    elements: ListElementsProps[]
}

interface AppContextType {
    isConnected: boolean
    setIsConnected: Dispatch<SetStateAction<boolean>>
    lists: ListsProps[]
    setLists: Dispatch<SetStateAction<ListsProps[]>>
    listActive: ListActiveProps
    setListActive: Dispatch<SetStateAction<ListActiveProps>>
    listActiveLoading: boolean
    setListActiveLoading: Dispatch<SetStateAction<boolean>>
    openModal: boolean
    setOpenModal: Dispatch<SetStateAction<boolean>>
}

const AppContext = createContext<AppContextType>({
    isConnected: true,
    setIsConnected: () => {},
    lists: [],
    setLists: () => {},
    listActive: { id: null, name: null, elements: [] },
    setListActive: () => {},
    listActiveLoading: false,
    setListActiveLoading: () => {},
    openModal: false,
    setOpenModal: () => {},
})

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [isConnected, setIsConnected] = useState(true)
    const [lists, setLists] = useState<ListsProps[]>([])
    const [listActive, setListActive] = useState<ListActiveProps>({
        id: null,
        name: null,
        elements: [],
    })
    const [listActiveLoading, setListActiveLoading] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    return (
        <AppContext.Provider
            value={{
                isConnected,
                setIsConnected,
                lists,
                setLists,
                listActive,
                setListActive,
                listActiveLoading,
                setListActiveLoading,
                openModal,
                setOpenModal,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)
