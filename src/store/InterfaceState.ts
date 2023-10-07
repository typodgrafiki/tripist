interface TodosState {
    id: string
    name: string
    url: string
    elements: string[]
}

export interface RootState {
    todos: TodosState
}
