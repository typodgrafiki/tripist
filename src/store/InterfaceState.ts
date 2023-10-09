interface ListState {
    id: string
    name: string
    url: string
    elements: string[]
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
