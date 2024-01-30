/**
 * Komponent przechowujący typy typescript, które są wykorzystywane w oprogramowaniu
 */

type TCheckElements = {
    status: boolean
}

export interface IListBasic {
    id: string
    name: string
    settingColor: string
    elements: TCheckElements[]
    lastChangeAt: Date
}

export interface ILists extends IListBasic {
    createdAt: Date
    lastChangeAt: Date
    userId: string
    fromTemplate: string
}

export interface IList extends IListBasic, ILists {
    elements: IElements[]
}

export interface IElements {
    id: number
    name: string
    status: boolean
    createdAt: Date
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

type TSampleCustomCategories = {
    name: string
}

export type TSampleCustomItems = {
    name: string
    categories: TSampleCustomCategories[]
}

export type TSampleCustomCategoryApi = {
    name: string
    categories: TSampleCustomCategories[]
    checked: boolean
}

export type TSampleCustomItemsToApi = {
    [categoryName: string]: TSampleCustomCategoryApi[]
}

export interface ILoginUser {
    email: string
    password: string
}

export interface ICreateUser extends ILoginUser {
    name: string
    surname?: string
    gender?: TGender
}

export type TCreateUserApi = {
    userId: string
    email: string
}

export interface IUserData {
    userId?: string | null
    name?: string
    email?: string
    image?: string
    surname?: string
    password?: string
    gender?: TGender
    darkTheme?: boolean
}

export type TSampleTypeFull = {
    id: number
    name: string
    fullName: string
    templates: TSampleTypeFullTemplates[]
}

export type TSampleTypeFullTemplates = {
    id: number
    name: string
    start: boolean
    settingColor: string
    tripLength: number | null
    listTypeId: number
}

export type TSampleType = {
    fullName: string
    templates: TSampleList[]
}

export type TSampleList = {
    name: string
    options: TSampleListOptions[]
}

export type TSampleListOptions = {
    id: number
    tripLength: number
}

export type TSampleTitle = {
    titleData: {
        title: string
        titleColor: string
        type?: string
        length?: number
        custom?: boolean
    }
}

export type TSampleContextType = {
    title: string
    titleIsEmpty: boolean
    titleColor: string
    isCreateSample: boolean
    setIsCreateSample: React.Dispatch<React.SetStateAction<boolean>>
    dataCustomList: TSampleCustomItemsToApi
    setDataCustomList: React.Dispatch<
        React.SetStateAction<TSampleCustomItemsToApi>
    >
    customList: boolean
    setCustomList: React.Dispatch<React.SetStateAction<boolean>>
    importedList: TImportedList
    setImportedList: React.Dispatch<React.SetStateAction<TImportedList>>
    isPending: boolean
    isError: boolean
    isSuccess: boolean
}

export type TImportedList = {
    id: number
    days: number
    type: string
}

export interface ICodeSignUp {
    code: string
    userId: string
}

export type ICreateRemindPassUser = {
    email: string
    password: string
    token: string
}

export type TFeedback = {
    message: string
}

export interface ISortTypes {
    name: string
    type: SortBy
    direction: SortDirection
}

export type SortBy = "createdAt" | "name"
export type SortDirection = "asc" | "desc"

export type TSampleCustomItemsCount = {
    checkedCount: number
    totalCount: number
}

export type TDuplicatProps = {
    duplicate?: {
        id: string
        name: string
    }
    editList?: {
        id: string
        name: string
    }
}

export type TPanelsCollapsedType = number | null

export type TPanelsCollapsedTypeProps = {
    activePanel: TPanelsCollapsedType
    togglePanel: (panelIndex: number) => void
    index: number
}

export type TGender = "MALE" | "FEMALE" | "OTHER" | "UNDEFINED"

export type TSearchItem = {
    name: string
    id: number | null
}

export type TSearchItemCategory = {
    name: string
    items: string[]
}

export type TSearchItemCategoryChangedItem = {
    name: string
    id: number | null
    nameCategory?: string
}

export type TSearchItemCategoryChanged = {
    name: string
    items: TSearchItemCategoryChangedItem[]
}

export type TActionsAddElementByCategory = {
    addElement: (name: string, clear?: boolean, nameCategory?: string) => void
    deleteElement: (id: number) => void
}

export interface ErrorResponse extends Error {
    response?: {
        data?: {
            message?: string
        }
    }
}
