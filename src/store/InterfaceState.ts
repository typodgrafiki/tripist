interface ListState {
    id: string
    name: string
    url: string
    elements: ListStateEl[]
}

interface ListStateEl {
    category: string | null
    id: number
    listId: string
    name: string
    status: boolean
}

interface ListsState {
    elements: ListsStateEl[]
}

interface ListsStateEl {
    id: string
    name: string
    url: string
}

export interface RootState {
    list: ListState
    lists: ListsState
}
