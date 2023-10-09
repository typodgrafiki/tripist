interface ListState {
    id: string
    name: string
    url: string
    elements: string[]
}

interface ListsState {
    elements: string[]
}

export interface RootState {
    list: ListState
    lists: ListsState
}
