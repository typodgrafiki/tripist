import { useState, useRef, useEffect } from "react"
import { useQueryClient, useMutation } from "@tanstack/react-query"
import Toastify from "toastify-js"
import {
    focusInput,
    findStringsInListElements,
    checkElementIsOnList,
} from "@/utils/utils"
import {
    createItem,
    getListData,
    deleteElementsAction,
} from "@/actions/axiosActions"
import {
    IElements,
    TSearchItem,
    TSearchItemCategoryChanged,
} from "@/types/types"
import IconCheck from "../icons/check"
import IconPlus from "../icons/plus"
import ModalTitleSample from "@/components/ui/ModalTitleSample"
import ModalTitle from "@/components/ui/ModalTitle"
import Label from "@/components/ui/Label"
import SearchElements from "./searchElements/searchElements"
import jsonElements from "@/lib/elementsData.json"
import jsonCategories from "@/lib/elementsDataCategory.json"
import { useQuery } from "@tanstack/react-query"
import SearchByCategories from "./searchElements/searchByCategories"

export default function CreateLAddElements({
    listId,
    listName,
    listColor,
    // elements,
}: {
    listId: string
    listName: string
    listColor: string
    // elements: IElements[]
}) {
    const [name, setName] = useState("")
    const formRef = useRef<HTMLFormElement | null>(null)
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [searchItems, setSearchItems] = useState<TSearchItem[]>([])
    const [itemsByCategory, setItemsByCategory] = useState<
        TSearchItemCategoryChanged[]
    >([])
    const [isSuccessFallback, setIsSuccessFallback] = useState(false)
    const [openCategories, setOpenCategories] = useState(false)
    const queryClient = useQueryClient()

    const { data: elements, isLoading } = useQuery({
        queryKey: ["elements", listId],
        queryFn: async () => {
            const response = await getListData(listId)
            if (response) {
                return response.data.body.elements as IElements[]
            }
        },
    })

    const { mutate, isPending, isError, isSuccess } = useMutation({
        mutationFn: async ({
            nameToCreate,
            clear,
            nameCategory,
            id,
        }: {
            nameToCreate?: string
            clear: boolean
            id?: number
            nameCategory?: string
        }) => {
            if (id) {
                return deleteElementsAction(id)
            } else if (nameToCreate) {
                return createItem(nameToCreate, listId, nameCategory)
            }
        },
        onSuccess: async (response, variables) => {
            if (response) {
                const { clear, id } = variables
                const newElement = response.data.body

                queryClient.invalidateQueries({
                    queryKey: ["elements", listId],
                })

                if (id) {
                    // Jeśli delete
                    Toastify({
                        className: "toastify-success",
                        text: `Usunięto element`,
                        duration: 2000,
                    }).showToast()
                } else {
                    // Jesli add
                    const newId = response.data.body.id
                    setIsSuccessFallback(true)
                    if (clear) {
                        setName("")
                        focusInput(inputRef)
                    }
                    Toastify({
                        className: "toastify-success",
                        text: `Utworzono element ${response.data.body.name}`,
                        duration: 2000,
                    }).showToast()

                    setTimeout(() => {
                        setIsSuccessFallback(false)
                    }, 1500)
                }
            }
        },
        onError: (error, variables) => {
            const text = variables.id ? "usunąć elementu" : "utworzyć elementu"
            Toastify({
                className: "toastify-error",
                text: `Nie udało się ${text} ${variables.nameToCreate}`,
                duration: 2000,
            }).showToast()
        },
    })

    const addElement = async (
        nameToCreate: string,
        clear: boolean = false,
        nameCategory: string = ""
    ) => {
        mutate({
            nameToCreate: nameToCreate,
            clear: clear,
            nameCategory: nameCategory,
        })
    }

    const deleteElement = async (id: number) => {
        mutate({ id: id, clear: false })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addElement(name, true)
    }

    useEffect(() => {
        focusInput(inputRef)
    }, [])

    useEffect(() => {
        const result = findStringsInListElements(
            jsonElements,
            name,
            elements ?? []
        )
        const dataCategory = checkElementIsOnList(
            elements ?? [],
            jsonCategories
        )
        setSearchItems(result)
        setItemsByCategory(dataCategory)
    }, [name, elements])

    return (
        <>
            <ModalTitleSample
                titleData={{ title: listName, titleColor: listColor }}
            />
            <ModalTitle>Dodaj element do listy</ModalTitle>

            {openCategories ? (
                <SearchByCategories
                    elements={itemsByCategory ?? []}
                    addElement={addElement}
                    deleteElement={deleteElement}
                />
            ) : (
                <>
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                    >
                        <Label
                            htmlFor="name"
                            name="Nazwa elementu:"
                        />
                        <div className="flex justify-between gap-3 mb-1">
                            <input
                                type="text"
                                value={name}
                                placeholder="np. Suszarka, nożyczki, perfum"
                                className={`animated form-control grow`}
                                onChange={(e) => setName(e.target.value)}
                                ref={inputRef}
                            />
                            <button
                                type="submit"
                                className={`flex justify-center items-center btn btn-primary ${
                                    isSuccessFallback && "btn-green"
                                }`}
                                disabled={isPending}
                            >
                                {isPending ? (
                                    <div className="loader small"></div>
                                ) : isSuccessFallback ? (
                                    <IconCheck />
                                ) : (
                                    <IconPlus />
                                )}
                            </button>
                        </div>
                        {isError && (
                            <div className="text-red-600 text-sm">
                                {!name
                                    ? "Uzupełnij nazwę"
                                    : "Nie zapisano zmian. Spróbuj ponownie"}
                                .
                            </div>
                        )}
                    </form>
                    <SearchElements
                        searchItems={searchItems}
                        addElement={addElement}
                        deleteElement={deleteElement}
                        listId={listId}
                        setOpenCategories={setOpenCategories}
                    />
                </>
            )}
        </>
    )
}
