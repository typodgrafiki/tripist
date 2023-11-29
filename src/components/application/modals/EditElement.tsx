"use client"

import React, { useState, useEffect, useRef, useCallback } from "react"
import { useQueryClient, useMutation } from "@tanstack/react-query"
import { useModal } from "@/context/ModalContext"
import { getAllCategories, changeElement } from "@/actions/axiosActions"
import { focusInput, mergeCategoriesWithAssignment } from "@/utils/utils"
import { ICategories, IElements } from "@/types/types"
import IconPlus from "../icons/plus"
import Toastify from "toastify-js"
import ButtonDelete from "../buttons/ButtonDeleteItem"

export default function EditElement({
    id,
    name: itemName,
    categories: assignedCategories,
    listId,
}: {
    id: number
    name: string
    categories: ICategories[]
    listId: string
}) {
    const [name, setName] = useState(itemName)
    const formRef = useRef<HTMLFormElement | null>(null)
    const inputRef = useRef<HTMLInputElement | null>(null)
    const { closeModal } = useModal()
    const queryClient = useQueryClient()
    const [mergedCategories, setMergedCategories] = useState<ICategories[]>([])

    const fetchAndMergeCategories = useCallback(async () => {
        const allCategories = await getAllCategories()
        const merged = await mergeCategoriesWithAssignment(
            allCategories,
            assignedCategories
        )
        setMergedCategories(merged)
    }, [assignedCategories])

    const { mutate, isPending, isError, isSuccess } = useMutation({
        mutationFn: async () => changeElement(id, name, mergedCategories),

        onSuccess: async (response) => {
            queryClient.setQueryData(
                ["elements", listId],
                (oldData: IElements[]) => {
                    return oldData.map((item) => {
                        if (item.id === id) {
                            return response.data.body
                        }
                        return item
                    })
                }
            )

            Toastify({
                className: "toastify-success",
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

    const handleSelectCategories = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { checked, value } = await event.target
        const category = await JSON.parse(value)

        setMergedCategories((prevCategories) =>
            prevCategories.map((cat) =>
                cat.id === category.id ? { ...cat, assigned: checked } : cat
            )
        )
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        mutate()
    }

    useEffect(() => {
        focusInput(inputRef)
    }, [])

    useEffect(() => {
        fetchAndMergeCategories()
    }, [fetchAndMergeCategories])

    return (
        <>
            <h3 className="title mb-3 font-medium text-base">
                Edycja elementu
            </h3>
            <form
                ref={formRef}
                onSubmit={handleSubmit}
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

                <div className="flex justify-between">
                    <ButtonDelete
                        id={id}
                        listId={listId}
                    />
                    <button
                        type="submit"
                        className={`flex justify-center items-center btn btn-primary ${
                            isSuccess && "btn-green"
                        }`}
                        disabled={isSuccess || isPending}
                    >
                        {isPending ? (
                            <div className="loader small"></div>
                        ) : (
                            "Zapisz"
                        )}
                    </button>
                </div>
            </form>
        </>
    )
}
