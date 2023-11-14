"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useModal } from "@/context/ModalContext"
import { createList, updateList } from "@/actions/axiosActions"
import { focusInput } from "@/utils/utils"
import DebugLog from "@/utils/developConsoleLog"
import { useQueryClient, useMutation } from "@tanstack/react-query"
import Toastify from "toastify-js"

type IDuplicatProps = {
    duplicate?: {
        id: string
        name: string
    }
    editList?: {
        id: string
        name: string
    }
}

export default function CreateList({ duplicate, editList }: IDuplicatProps) {
    const initialTitle = editList ? editList.name : ""
    const router = useRouter()
    const [title, setTitle] = useState(initialTitle)
    const { closeModal } = useModal()
    const formRef = useRef<HTMLFormElement | null>(null)
    const inputRef = useRef<HTMLInputElement | null>(null)
    const queryClient = useQueryClient()

    const { mutate, isPending, isError, isSuccess } = useMutation({
        mutationFn: async () => {
            if (editList) {
                return updateList(title, editList.id)
            }
            return createList(title, duplicate?.id)
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
            setTimeout(() => {
                closeModal()
            }, 2500)
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
            <DebugLog name="ModalCreateList" />
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
                <div className="flex justify-between gap-3 mb-1">
                    <input
                        type="text"
                        value={title}
                        placeholder="np. Madryt '23, Islandia, Siłownia"
                        className="form-control grow"
                        onChange={(e) => setTitle(e.target.value)}
                        disabled={isPending || isSuccess}
                        ref={inputRef}
                    />

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
                            "Stwórz listę"
                        )}
                    </button>
                </div>
                {isError && (
                    <div className="text-red-600 text-sm mt-2">
                        Nie zapisano zmian. Spróbuj ponownie.
                    </div>
                )}
                {/* 
                {!duplicate && !editList && (
                    <>
                        
                        // TODO Gotowe listy do zaimportowania 
                        
                        <div className="mt-4">
                            City / 2 dni / importuj listę...
                        </div>
                    </>
                )}
                */}
            </form>
        </>
    )
}
