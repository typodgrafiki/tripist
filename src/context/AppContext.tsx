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
    id: string | null
    name: string | null
    elements: ListElementsProps[] | null
}

interface AppContextType {
    isConnected: boolean
    setIsConnected: Dispatch<SetStateAction<boolean>>
    lists: ListsProps[] | null
    setLists: Dispatch<SetStateAction<ListsProps[] | null>>
    listActive: ListActiveProps
    setListActive: Dispatch<SetStateAction<ListActiveProps>>
    listActiveLoading: boolean
    setListActiveLoading: Dispatch<SetStateAction<boolean>>
}

const AppContext = createContext<AppContextType>({
    isConnected: true,
    setIsConnected: () => {},
    lists: null,
    setLists: () => {},
    listActive: { id: null, name: null, elements: null },
    setListActive: () => {},
    listActiveLoading: false,
    setListActiveLoading: () => {},
})

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [isConnected, setIsConnected] = useState(true)
    const [lists, setLists] = useState<ListsProps[] | null>(null)
    const [listActive, setListActive] = useState<ListActiveProps>({
        id: null,
        name: null,
        elements: null,
    })
    const [listActiveLoading, setListActiveLoading] = useState(false)

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
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)
