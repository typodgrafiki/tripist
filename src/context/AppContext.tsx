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
    elements: ListElementsProps[] | null
}

interface ListElementsProps {
    id: string
    name: string
    status: boolean
    category?: string
}

interface ListActiveProps {
    id: string
    name: string
}

interface AppContextType {
    isConnected: boolean
    setIsConnected: Dispatch<SetStateAction<boolean>>
    lists: ListsProps[] | null
    setLists: Dispatch<SetStateAction<ListsProps[] | null>>
    listActive: ListActiveProps | null
    setListActive: Dispatch<SetStateAction<ListActiveProps | null>>
}

const AppContext = createContext<AppContextType>({
    isConnected: true,
    setIsConnected: () => {},
    lists: null,
    setLists: () => {},
    listActive: null,
    setListActive: () => {},
})

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [isConnected, setIsConnected] = useState(true)
    const [lists, setLists] = useState<ListsProps[] | null>(null)
    const [listActive, setListActive] = useState<ListActiveProps | null>(null)

    return (
        <AppContext.Provider
            value={{
                isConnected,
                setIsConnected,
                lists,
                setLists,
                listActive,
                setListActive,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)
