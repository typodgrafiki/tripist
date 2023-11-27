import { useState, useRef, useEffect } from "react"
import { useQueryClient, useMutation } from "@tanstack/react-query"
import Toastify from "toastify-js"
import { focusInput } from "@/utils/utils"
import { createItem } from "@/actions/axiosActions"
import { IElements } from "@/types/types"
import IconCheck from "../icons/check"
import IconPlus from "../icons/plus"

export default function CreateLAddElements({
    listId,
    listName,
}: {
    listId: string
    listName: string
}) {
    const [name, setName] = useState("")
    const formRef = useRef<HTMLFormElement | null>(null)
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [isSuccessFallback, setIsSuccessFallback] = useState(false)
    const queryClient = useQueryClient()

    const { mutate, isPending, isError, isSuccess } = useMutation({
        mutationFn: async () => createItem(name, listId),
        onSuccess: async (response) => {
            setIsSuccessFallback(true)

            // TODO Podczas szybkiego pisania nie nadąża. Nalezy dodac Optimistic

            const newElement = response.data.body

            queryClient.setQueryData(
                ["elements", listId],
                (oldData: IElements[]) => {
                    return [...oldData, newElement]
                }
            )

            setName("")
            Toastify({
                className: "toastify-success",
                text: `Utworzono element ${response.data.body.name}`,
                duration: 2000,
            }).showToast()

            focusInput(inputRef)
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
        mutate()
    }

    useEffect(() => {
        focusInput(inputRef)
    }, [])

    return (
        <>
            <h3 className="title mb-3 font-medium text-base">{listName}</h3>
            <form
                ref={formRef}
                onSubmit={handleSubmit}
            >
                <div className="flex justify-between gap-3 mb-1">
                    <input
                        type="text"
                        value={name}
                        placeholder="np. Suszarka"
                        className={`animated form-control grow ${
                            isSuccessFallback &&
                            "focus:border-green-500 focus:ring-green-500"
                        }`}
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
        </>
    )
}
