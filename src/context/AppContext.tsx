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
}

interface ListActiveProps {
    id: string | null
    name: string | null
    elements: ListElementsProps[]
}

interface ListElementsProps {
    id: string
    name: string
    status: boolean
    categories: Categories[]
}

export interface Categories {
    id: number
    name: string
    userId: string
}

interface AppContextType {
    isConnected: boolean
    setIsConnected: Dispatch<SetStateAction<boolean>>
    lists: ListsProps[]
    setLists: Dispatch<SetStateAction<ListsProps[]>>
    listActive: ListActiveProps
    setListActive: Dispatch<SetStateAction<ListActiveProps>>
}

const AppContext = createContext<AppContextType>({
    isConnected: true,
    setIsConnected: () => {},
    lists: [],
    setLists: () => {},
    listActive: { id: null, name: null, elements: [] },
    setListActive: () => {},
})

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [isConnected, setIsConnected] = useState(true)
    const [lists, setLists] = useState<ListsProps[]>([])
    const [listActive, setListActive] = useState<ListActiveProps>({
        id: null,
        name: null,
        elements: [],
    })

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
