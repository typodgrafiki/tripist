interface ListState {
    id: string
    name: string
    url: string
    elements: string[]
}

export interface RootState {
    list: ListState
}
