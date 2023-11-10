"use client"

import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useModal } from "@/context/ModalContext"
import EditElement from "@/components/application/modals/EditElement"
import IconPen from "../icons/pen"
import IconBin from "../icons/bin"
import { IList, IElements } from "@/types/types"
import { changeElementStatus } from "@/actions/axiosActions"
import Toastify from "toastify-js"
import { changeStatusLocaly } from "@/utils/utils"
import Categories from "./ItemCategories"
import ButtonDelete from "../buttons/ButtonDeleteItem"
import Button from "@/components/ui/Button"

export default function ContentElement({
    id,
    name,
    status,
    listId,
    categories,
}: IElements) {
    const queryClient = useQueryClient()
    const { setModalContent, setIsModalOpen } = useModal()

    const { mutate, isPending, isError, isSuccess } = useMutation({
        mutationFn: async (status: boolean) => changeElementStatus(id, status),
        onMutate: async (newStatus: boolean) => {
            // TODO zamiast lokalnie zmieniac trzeba zmienic w onMutate bo jest to wykorzystywane rowniez z disableall

            await queryClient.cancelQueries({ queryKey: ["elements", listId] })

            const previousItems = queryClient.getQueryData<IElements[]>([
                "elements",
                listId,
            ])

            queryClient.setQueryData(
                ["elements", listId],
                (oldData: IElements[]) => {
                    return changeStatusLocaly(oldData, id, newStatus)
                }
            )

            return { previousItems }
        },
        onSuccess: async (response) => {
            Toastify({
                className: "toastify-success",
                text: `Uaktualniono element`,
            }).showToast()
        },
        onError: (error, newStatus, context) => {
            if (context?.previousItems) {
                queryClient.setQueryData(
                    ["elements", listId],
                    context.previousItems
                )
            }
            Toastify({
                className: "toastify-error",
                text: `Nie udało się uaktualnić elementu`,
            }).showToast()
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["elements", listId] })
        },
    })

    const handleEdit = () => {
        setModalContent(
            <EditElement
                id={id}
                name={name}
                categories={categories}
                listId={listId}
            />
        )
        setIsModalOpen(true)
    }

    return (
        <>
            <li className="element-row animated relative border-t flex gap-3 items-stretch sm:px-1 hover:bg-slate-50 hover:shadow-md hover:sm:pl-3 hover:rounded">
                <label className="flex px-5 py-2 gap-2 grow text-sm cursor-pointer hover:text-[var(--primary)] sm:px-0">
                    <span className="relative round w-[21px] h-[21px]">
                        <>
                            <input
                                type="checkbox"
                                checked={status}
                                className="mr-2"
                                id={`element-${id}`}
                                onChange={(e) => mutate(e.target.checked)}
                            />
                            <span className="label"></span>
                        </>
                    </span>
                    <span className="grow">{name}</span>
                </label>
                <Categories categories={categories} />
                <div className="element-edit flex absolute top-0 bottom-0 right-0">
                    <Button
                        className="px-1 items-center hover:text-[var(--primary)]"
                        onClick={handleEdit}
                    >
                        <IconPen />
                    </Button>
                    <ButtonDelete
                        id={id}
                        listId={listId}
                        icon
                    />
                </div>
            </li>
        </>
    )
}
