/**
 * Komponent przechowujący typy typescript, które są wykorzystywane w oprogramowaniu
 */

export interface IListBasic {
    id: string
    name: string
}

export interface ILists extends IListBasic {
    createAt: Date
    lastChangeAt: Date
    userId: string
    predefined: boolean
}

export interface IList extends IListBasic, ILists {
    elements: IElements[]
}

export interface IElements {
    id: number
    name: string
    status: boolean
    createAt: Date
    listId: string
    categories: ICategories[]
}

export interface ICategories {
    id: number
    name: string
    userId: string
    asigned?: boolean | undefined
}

export interface IApiContext {
    params: IApiContextId
}

interface IApiContextId {
    id: string
}
