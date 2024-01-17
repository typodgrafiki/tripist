import Image from "next/image"
import { useState, useEffect } from "react"
import { useQueryClient, useMutation } from "@tanstack/react-query"
import Toastify from "toastify-js"
import iconSearch from "@/assets/images/dashboard/search.svg"
import { IElements, TSearchItem } from "@/types/types"
import IconCheck from "../../icons/check"
import { deleteElementsAction } from "@/actions/axiosActions"

export default function SearchElements({
    searchItems,
    addElement,
    listId,
    setOpenCategories,
}: {
    searchItems: TSearchItem[]
    addElement: (name: string) => void
    listId: string
    setOpenCategories: (value: boolean) => void
}) {
    const queryClient = useQueryClient()
    const { mutate, isPending, isError, isSuccess } = useMutation({
        mutationFn: async (id: number) => deleteElementsAction(id),
        onSuccess: async (response) => {
            queryClient.invalidateQueries({ queryKey: ["elements", listId] })
            Toastify({
                className: "toastify-success",
                text: `Usunięto element`,
                duration: 2000,
            }).showToast()
        },
        onError: (error) => {
            Toastify({
                className: "toastify-error",
                text: `Nie udało się usunąć elementu`,
                duration: 2000,
            }).showToast()
        },
    })

    const deleteElement = async (id: number) => {
        mutate(id)
    }

    if (searchItems.length === 0) {
        return <EmptySearch setOpenCategories={setOpenCategories} />
    }

    return (
        <>
            <div className="mt-4 overflow-y-auto max-h-inner-modal">
                {searchItems.map((item, index) => (
                    <Element
                        key={item.name + index}
                        addElement={addElement}
                        deleteElement={deleteElement}
                        {...item}
                    />
                ))}
            </div>
        </>
    )
}

const Element = ({
    name,
    id,
    addElement,
    deleteElement,
}: {
    name: string
    id: number | null
    addElement: (name: string) => void
    deleteElement: (id: number) => void
}) => {
    return (
        <div className="p-1 text-xs">
            {id ? (
                <button
                    onClick={() => deleteElement(id)}
                    className="text-[var(--primary)]"
                >
                    <IconCheck className="mr-2" />
                    {name}
                </button>
            ) : (
                <button
                    onClick={() => addElement(name)}
                    className="text-muted hover:text-[var(--primary)]"
                >
                    <IconCheck className="mr-2 opacity-0" />
                    {name}
                </button>
            )}
        </div>
    )
}

const EmptySearch = ({
    setOpenCategories,
}: {
    setOpenCategories: (value: boolean) => void
}) => {
    return (
        <div className="mt-8 mb-2 text-center">
            <p>
                <Image
                    src={iconSearch}
                    width={14}
                    height={14}
                    alt="lupa"
                    className="inline-block mr-3 relative bottom-[1px]"
                />
                Zacznij pisać aby zobaczyć podpowiedzi
            </p>
            <p className="mt-3">
                lub{" "}
                <button
                    className="text-[var(--primary)]"
                    onClick={() => setOpenCategories(true)}
                >
                    przeglądaj gotowe kategorie
                </button>
            </p>
        </div>
    )
}
