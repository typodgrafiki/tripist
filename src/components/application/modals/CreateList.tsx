"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useModal } from "@/context/ModalContext"
import {
    createList,
    updateList,
    createListCustom,
} from "@/actions/axiosActions"
import { focusInput, changeSampleCustomDataToApi } from "@/utils/utils"
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query"
import Toastify from "toastify-js"
import Select from "@/components/ui/Select"
import IconPlus from "../icons/plus"
import IconMinus from "../icons/minus"
import IconCheck from "../icons/check"
import Sample from "./sampleLists/Sample"
import { TSampleCustomItemsToApi } from "@/types/types"

type TDuplicatProps = {
    duplicate?: {
        id: string
        name: string
    }
    editList?: {
        id: string
        name: string
    }
}

const optionsColor = [
    "bg-red-500",
    "bg-yellow-500",
    "bg-emerald-500",
    "bg-cyan-500",
    "bg-violet-400",
    "bg-purple-700",
    "bg-pink-600",
]

export default function CreateList({ duplicate, editList }: TDuplicatProps) {
    const initialTitle = editList ? editList.name : ""
    const router = useRouter()
    const [title, setTitle] = useState(initialTitle)
    const [selectedColor, setSelectedColor] = useState(optionsColor[0])

    // TODO to mozna do obiektu wrzucic
    const [isCreateSample, setIsCreateSample] = useState(false)
    const [customList, setCustomList] = useState(false)
    const [dataCustomList, setDataCustomList] =
        useState<TSampleCustomItemsToApi>({})

    // const [listSampleElements, setListSampleElements] = useState<
    //     ISampleListElement[]
    // >([])
    const [importedId, setImportedId] = useState(0)

    const { closeModal } = useModal()
    const formRef = useRef<HTMLFormElement | null>(null)
    const inputRef = useRef<HTMLInputElement | null>(null)
    const queryClient = useQueryClient()

    const idToDuplicate = duplicate ? duplicate.id : importedId

    const { mutate, isPending, isError, isSuccess } = useMutation({
        mutationFn: async () => {
            if (editList) {
                return updateList(title, editList.id, selectedColor)
            }
            if (isCreateSample && customList) {
                return createListCustom(
                    title,
                    changeSampleCustomDataToApi(dataCustomList),
                    selectedColor
                )
            }
            return createList(title, idToDuplicate, selectedColor)
        },
        onSuccess: async (response) => {
            const { id: listId, name: listName } = response.data.body.list
            queryClient.invalidateQueries({ queryKey: ["lists"] })

            if (listId) {
                router.push(`/dashboard/${listId}`)
            } else {
                queryClient.invalidateQueries({
                    queryKey: ["listData", listId],
                })
            }

            Toastify({
                className: "toastify-success",
                text: listId
                    ? `Stworzono listę ${listName}`
                    : `Zaktualizowano listę`,
            }).showToast()

            // TODO Tutaj pojawia sie przycisk zamknij i przy nim jest jakies odliczania po czym setTimeout
            // setTimeout(() => {
            closeModal()
            // }, 2500)
        },
        onError: (error) => {
            Toastify({
                className: "toastify-error",
                text: `Nie udało się stworzyć listy`,
            }).showToast()
        },
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        mutate()
    }

    useEffect(() => {
        focusInput(inputRef)
    }, [])

    return (
        <>
            <h3 className="mb-3 text-gray-400 truncate">
                <span className="title font-medium text-gray-900 text-base">
                    Nazwa
                </span>
                {duplicate && (
                    <span className="text-xs ml-2">
                        (Duplikujesz listę &quot;{duplicate.name}&quot;)
                    </span>
                )}
            </h3>
            <form
                ref={formRef}
                onSubmit={handleSubmit}
            >
                <div className="flex justify-between gap-3 mb-1 flex-col sm:flex-row">
                    <div className="flex justify-between gap-3 grow">
                        <input
                            type="text"
                            value={title}
                            placeholder="np. Madryt '23, Siłownia..."
                            className="form-control grow"
                            onChange={(e) => setTitle(e.target.value)}
                            disabled={isPending || isSuccess}
                            ref={inputRef}
                        />
                        <Select
                            options={optionsColor}
                            select={selectedColor}
                            setSelect={setSelectedColor}
                        />
                    </div>
                    {!isCreateSample && (
                        <button
                            type="submit"
                            className={`flex justify-center items-center btn btn-primary ${
                                isSuccess && "btn-green"
                            }`}
                            disabled={isPending || isSuccess}
                        >
                            {isPending ? (
                                <div className="loader small"></div>
                            ) : isSuccess ? (
                                <>
                                    Dodano
                                    <svg
                                        width="9"
                                        height="7"
                                        viewBox="0 0 9 7"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-2"
                                    >
                                        <path
                                            d="M1 3.08333L3.57895 6L8 1"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </>
                            ) : duplicate ? (
                                "Duplikuj listę"
                            ) : editList ? (
                                "Zapisz"
                            ) : (
                                "Stwórz pustą listę"
                            )}
                        </button>
                    )}
                </div>
                {isError && (
                    <div className="text-red-600 text-sm mt-2">
                        Nie zapisano zmian. Spróbuj ponownie.
                    </div>
                )}

                {!duplicate && !editList && (
                    <Sample
                        customList={customList}
                        setCustomList={setCustomList}
                        setDataCustomList={setDataCustomList}
                        importedId={importedId}
                        setImportedId={setImportedId}
                        isCreateSample={isCreateSample}
                        setIsCreateSample={setIsCreateSample}
                        isPending={isPending}
                        isError={isError}
                        isSuccess={isSuccess}
                        dataCustomList={dataCustomList}
                    />
                )}
            </form>
        </>
    )
}
