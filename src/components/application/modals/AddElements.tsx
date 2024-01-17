import { useState, useRef, useEffect } from "react"
import { useQueryClient, useMutation } from "@tanstack/react-query"
import Toastify from "toastify-js"
import { focusInput, findStringsInListElements } from "@/utils/utils"
import { createItem, getListData } from "@/actions/axiosActions"
import { IElements, TSearchItem } from "@/types/types"
import IconCheck from "../icons/check"
import IconPlus from "../icons/plus"
import ModalTitleSample from "@/components/ui/ModalTitleSample"
import ModalTitle from "@/components/ui/ModalTitle"
import Label from "@/components/ui/Label"
import SearchElements from "./searchElements/searchElements"
import jsonElements from "@/lib/elementsData.json"
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
        }: {
            nameToCreate: string
            clear: boolean
        }) => createItem(nameToCreate, listId),
        onSuccess: async (response, variables) => {
            const { clear } = variables
            setIsSuccessFallback(true)

            // TODO Podczas szybkiego pisania nie nadąża. Nalezy dodac Optimistic

            const newElement = response.data.body

            queryClient.setQueryData(
                ["elements", listId],
                (oldData: IElements[]) => {
                    return [...oldData, newElement]
                }
            )
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
        },
        onError: (error) => {
            Toastify({
                className: "toastify-error",
                text: `Nie udało się utworzyć elementu`,
                duration: 2000,
            }).showToast()
        },
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        mutate({ nameToCreate: name, clear: true })
    }

    const addElement = async (nameRow: string) => {
        mutate({ nameToCreate: nameRow, clear: false })
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
        setSearchItems(result)
    }, [name, elements])

    return (
        <>
            <ModalTitleSample
                titleData={{ title: listName, titleColor: listColor }}
            />
            <ModalTitle>Dodaj element do listy</ModalTitle>

            {openCategories ? (
                <SearchByCategories />
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
                        listId={listId}
                        setOpenCategories={setOpenCategories}
                    />
                </>
            )}
        </>
    )
}
