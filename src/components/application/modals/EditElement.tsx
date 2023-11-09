"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { useQueryClient, useMutation } from "@tanstack/react-query"
import { useModal } from "@/context/ModalContext"
import { fetchAllCategories, changeElement } from "@/actions/axiosActions"
import { focusInput, mergeCategoriesWithAssignment } from "@/utils/utils"
import { ICategories } from "@/types/types"
import IconPlus from "../icons/plus"
import Toastify from "toastify-js"

export default function EditElement({
    id,
    name: itemName,
    categories: assignedCategories,
}: {
    id: number
    name: string
    categories: ICategories[]
}) {
    const [name, setName] = useState(itemName)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const formRef = useRef<HTMLFormElement | null>(null)
    const inputRef = useRef<HTMLInputElement | null>(null)
    const { closeModal } = useModal()

    const [mergedCategories, setMergedCategories] = useState<ICategories[]>([])

    async function fetchAndMergeCategories() {
        const allCategories = await fetchAllCategories()
        const merged = await mergeCategoriesWithAssignment(
            allCategories,
            assignedCategories
        )
        setMergedCategories(merged)
    }

    const { mutate, isPending, isError, isSuccess } = useMutation({
        mutationFn: async () => changeElement(id, name, mergedCategories),

        onSuccess: async (response) => {
            console.log(response)
            // queryClient.setQueryData(
            //     ["elements", listId],
            //     (oldData: IElements[]) => {
            //         return [...oldData, newElement]
            //     }
            // )

            Toastify({
                text: `Edytowano element ${response.data.body.name}`,
                duration: 2000,
            }).showToast()

            closeModal()
        },
        onError: (error) => {
            Toastify({
                className: "toastify-error",
                text: `Nie udało się edytować elementu`,
                duration: 2000,
            }).showToast()
        },
    })

    const handleSelectCategories = async (event) => {
        const { checked, value } = await event.target
        const category = await JSON.parse(value)

        setMergedCategories((prevCategories) =>
            prevCategories.map((cat) =>
                cat.id === category.id ? { ...cat, assigned: checked } : cat
            )
        )
    }

    useEffect(() => {
        focusInput(inputRef)
    }, [])

    useEffect(() => {
        fetchAndMergeCategories()
    }, [assignedCategories])

    return (
        <>
            <h3 className="title mb-3 font-medium text-base">
                Edycja elementu
            </h3>
            <form
                ref={formRef}
                onSubmit={() => mutate()}
            >
                <div className="mb-4">
                    <input
                        name="name"
                        type="text"
                        value={name}
                        placeholder="np. Suszarka"
                        className="form-control w-full"
                        onChange={(e) => setName(e.target.value)}
                        ref={inputRef}
                    />
                    {isError && (
                        <div className="text-red-600 text-sm mt-1">
                            Nie zapisano zmian. Spróbuj ponownie.
                        </div>
                    )}
                </div>
                <ul className="mb-5">
                    {/* 
                    // TODO dodać loading kategorii 
                    */}
                    {mergedCategories?.map((element) => (
                        <li
                            key={element.id}
                            className={
                                isSuccess || isPending ? "opacity-40" : ""
                            }
                        >
                            <label className="category-list cursor-pointer relative hover:left-[3px]">
                                <input
                                    name="categories"
                                    value={JSON.stringify({
                                        id: element.id,
                                        name: element.name,
                                        userId: element.userId,
                                    })}
                                    type="checkbox"
                                    defaultChecked={element.assigned}
                                    className="hidden"
                                    onChange={handleSelectCategories}
                                    disabled={isSuccess || isPending}
                                />
                                <span>
                                    <IconPlus className="mr-1 relative -top-[1px] w-[10px] h-[10px]" />
                                    {element.name}
                                </span>
                            </label>
                        </li>
                    ))}
                </ul>

                <div className="flex justify-between flex-row-reverse">
                    <button
                        type="submit"
                        className={`flex justify-center items-center btn btn-primary ${
                            isSuccess && "btn-green"
                        }`}
                        disabled={isSuccess || isPending}
                    >
                        {isPending ? (
                            <div className="loader small"></div>
                        ) : isSuccess ? (
                            <>
                                Zapisano
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
                        ) : (
                            "Zapisz"
                        )}
                    </button>
                    <ButtonDelete
                        id={id}
                        dis={success || loading}
                    />
                </div>
            </form>
        </>
    )
}

const ButtonDelete = ({ id, dis }: { id: number; dis: boolean }) => {
    return (
        <>
            {/* <button
                className={`btn btn-error ${
                    loading ? "bg-red-600 text-white" : ""
                }`}
                onClick={handleDelete}
                disabled={success || loading || dis}
            >
                {success ? (
                    <>
                        Usunięto
                        <svg
                            width="9"
                            height="7"
                            viewBox="0 0 9 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block svg-stroke ml-2"
                        >
                            <path
                                d="M1 3.08333L3.57895 6L8 1"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </>
                ) : loading ? (
                    <>
                        Usuwanie
                        <div className="loader small inline-block ml-2 relative top-[2px]"></div>
                    </>
                ) : (
                    "Usuń pozycję -"
                )}
            </button> */}
        </>
    )
}
