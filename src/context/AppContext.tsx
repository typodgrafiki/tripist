"use client"

import {
    createContext,
    useContext,
    useState,
    Dispatch,
    SetStateAction,
    ReactNode,
} from "react"

export interface ListsProps {
    id: string
    name: string
    type?: string
    url: string
}

interface ListActiveProps {
    id: string | null
    name: string | null
    url: string
}

interface ListElementsProps {
    id: number
    name: string
    status: boolean
    categories: Categories[]
}

export interface Categories {
    id: number
    name: string
    userId: string
    add?: boolean | undefined
}

interface AppContextType {
    isConnected: boolean
    setIsConnected: Dispatch<SetStateAction<boolean>>
    lists: ListsProps[]
    setLists: Dispatch<SetStateAction<ListsProps[]>>
    listActive: ListActiveProps
    setListActive: Dispatch<SetStateAction<ListActiveProps>>
    activeElements: ListElementsProps[]
    setActiveElements: Dispatch<SetStateAction<ListElementsProps[]>>
}

const AppContext = createContext<AppContextType>({
    isConnected: true,
    setIsConnected: () => {},
    lists: [],
    setLists: () => {},
    listActive: { id: null, name: null, url: "" },
    setListActive: () => {},
    activeElements: [],
    setActiveElements: () => {},
})

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [isConnected, setIsConnected] = useState(true)
    const [lists, setLists] = useState<ListsProps[]>([])
    const [listActive, setListActive] = useState<ListActiveProps>({
        id: null,
        name: null,
        url: "",
    })
    const [activeElements, setActiveElements] = useState<ListElementsProps[]>(
        []
    )

    return (
        <AppContext.Provider
            value={{
                isConnected,
                setIsConnected,
                lists,
                setLists,
                listActive,
                setListActive,
                activeElements,
                setActiveElements,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)
