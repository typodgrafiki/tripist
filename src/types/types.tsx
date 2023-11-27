/**
 * Komponent przechowujący typy typescript, które są wykorzystywane w oprogramowaniu
 */

export interface IListBasic {
    id: string
    name: string
    settingColor: string
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
    assigned?: boolean | undefined
}

export interface IApiContext {
    params: IApiContextId
}

interface IApiContextId {
    id: string
}

export type TListItemCategoriesUpdate = {
    categoriesIdsToConnect: number[]
    categoriesIdsToDisconnect: number[]
}

export type TListItemUpdate = {
    name: string
    categories: TListItemCategoriesUpdate
}

export interface ILoginUser {
    email: string
    password: string
}

export interface ICreateUser extends ILoginUser {
    name: string
    surname?: string
}

export interface IUserData {
    userId?: string | null
    name?: string
    email?: string
    image?: string
    surname?: string
    password?: string
}

export interface ISampleList {
    id: number
    name: string
    settingColor: string
    tripLength?: number
}

export interface ISampleListElement {
    name: string
    categories: ISampleListElement[]
}

export interface ISampleListElement {
    name: string
}
