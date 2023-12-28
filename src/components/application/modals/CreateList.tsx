"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useModal } from "@/context/ModalContext"
import {
    createList,
    updateList,
    createListCustom,
} from "@/actions/axiosActions"
import {
    focusInput,
    changeSampleCustomDataToApi,
    optionsColor,
} from "@/utils/utils"
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query"
import Toastify from "toastify-js"
import Select from "@/components/ui/Select"
import IconPlus from "../icons/plus"
import IconMinus from "../icons/minus"
import IconCheck from "../icons/check"
import Sample from "./sampleLists/Sample"
import {
    TSampleContextType,
    TSampleCustomItemsToApi,
    TDuplicatProps,
    TImportedList,
} from "@/types/types"
import ModalTitle from "@/components/ui/ModalTitle"
import FormLabel from "@/components/ui/FormLabel"
import ArrowRight from "../icons/arrowRight"
import SampleProvider from "@/context/SampleListContext"

export default function CreateList({ duplicate, editList }: TDuplicatProps) {
    const initialTitle = editList ? editList.name : ""
    const router = useRouter()
    const [title, setTitle] = useState(initialTitle)
    const titleIsEmpty = title === ""
    const [selectedColor, setSelectedColor] = useState(optionsColor[0])

    // TODO to mozna do obiektu wrzucic
    const [isCreateSample, setIsCreateSample] = useState(false)
    const [customList, setCustomList] = useState(false)
    const [dataCustomList, setDataCustomList] =
        useState<TSampleCustomItemsToApi>({})

    // const [importedList, setImportedList] = useState(0)
    const [importedList, setImportedList] = useState<TImportedList>({
        id: 0,
        days: 0,
        type: "",
    })

    const { closeModal } = useModal()
    const formRef = useRef<HTMLFormElement | null>(null)
    const inputRef = useRef<HTMLInputElement | null>(null)
    const queryClient = useQueryClient()

    const idToDuplicate = duplicate ? duplicate.id : importedList.id

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
            // closeModal()
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

    const contextData: TSampleContextType = {
        title: title,
        titleIsEmpty: titleIsEmpty,
        titleColor: selectedColor,
        isCreateSample: isCreateSample,
        setIsCreateSample: setIsCreateSample,
        dataCustomList: dataCustomList,
        setDataCustomList: setDataCustomList,
        customList: customList,
        setCustomList: setCustomList,
        importedList: importedList,
        setImportedList: setImportedList,
        isPending: isPending,
        isError: isError,
        isSuccess: isSuccess,
    }

    return (
        <SampleProvider contextData={contextData}>
            {!isCreateSample && (
                <ModalTitle>
                    {duplicate ? (
                        <>
                            Duplikuj listę
                            <span className="text-sm ml-2 text-muted font-normal">
                                ({duplicate.name})
                            </span>
                        </>
                    ) : editList ? (
                        "Edytuj listę"
                    ) : (
                        "Stwórz listę"
                    )}
                </ModalTitle>
            )}
            <form
                ref={formRef}
                onSubmit={handleSubmit}
            >
                {!isCreateSample && (
                    <>
                        <div className="flex justify-between gap-4 mb-5">
                            <div className="grow">
                                <FormLabel>Nazwa listy:</FormLabel>
                                <input
                                    type="text"
                                    value={title}
                                    placeholder="np. Madryt '23, Siłownia..."
                                    className="form-control w-full"
                                    onChange={(e) => setTitle(e.target.value)}
                                    disabled={isPending || isSuccess}
                                    ref={inputRef}
                                />
                            </div>
                            <div className="flex flex-col">
                                <FormLabel>Kolor:</FormLabel>
                                <Select
                                    options={optionsColor}
                                    select={selectedColor}
                                    setSelect={setSelectedColor}
                                    className="grow"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className={`flex justify-center items-center w-full btn btn-primary ${
                                isSuccess && "btn-green"
                            }`}
                            disabled={titleIsEmpty}
                        >
                            {isPending ? (
                                <div className="loader small"></div>
                            ) : isSuccess ? (
                                "Dodano"
                            ) : duplicate ? (
                                "Duplikuj listę"
                            ) : editList ? (
                                "Zapisz"
                            ) : (
                                <>
                                    Stwórz pustą listę
                                    <ArrowRight className="ml-2" />
                                </>
                            )}
                        </button>
                    </>
                )}
                {!duplicate && !editList && <Sample />}
                {isError && (
                    <div className="text-red-600 text-sm mt-2 text-center">
                        Nie zapisano zmian. Spróbuj ponownie.
                    </div>
                )}
            </form>
        </SampleProvider>
    )
}
