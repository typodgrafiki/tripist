"use client"

import { useState, useEffect } from "react"
import { useDrag } from "@use-gesture/react"
import { animated, useSpring } from "@react-spring/web"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useModal } from "@/context/ModalContext"
import EditElement from "@/components/application/modals/EditElement"
import IconPen from "../icons/pen"
import { IElements } from "@/types/types"
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
    const [isSwiped, setIsSwiped] = useState(false)
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

    // GESTY
    const [{ x }, api] = useSpring(() => ({ x: 0 }))

    // Set the drag hook and define component movement based on gesture data
    const bind = useDrag(({ down, movement: [mx], swipe }) => {
        api.start({ x: down ? mx : 0, immediate: down })

        if (swipe) {
            if (swipe[0] === -1) {
                // Jeżeli wykonano swipe w lewo, ustaw stan, że element został przesunięty
                setIsSwiped(true)
            } else if (swipe[0] === 1) {
                // Jeżeli wykonano swipe w prawo, zresetuj stan przesunięcia
                setIsSwiped(false)
            }
        }
    })

    return (
        <>
            <li className="relative border-t border-gray-200 first:border-0 overflow-x-hidden sm:hover:shadow-md">
                <animated.div
                    className="element-row animated-fast flex gap-3 items-stretch sm:px-1 hover:bg-slate-50 sm:hover:sm:pl-3 hover:rounded"
                    {...bind()}
                    style={{
                        transform: x.interpolate(
                            (val) =>
                                `translate3d(${
                                    val - (isSwiped ? 55 : 0)
                                }px, 0, 0)`
                        ),
                        touchAction: "pan-y",
                    }}
                >
                    <label className="flex items-center px-5 py-4 gap-2 grow text-sm cursor-pointer sm:hover:text-[var(--primary)] sm:px-0 sm:py-2">
                        <span className="relative round w-[21px] h-[21px]">
                            <input
                                type="checkbox"
                                checked={status}
                                className="mr-2"
                                id={`element-${id}`}
                                onChange={() => mutate(!status)}
                            />
                            <span className="label"></span>
                        </span>
                        <span className="grow">{name}</span>
                    </label>
                    <Categories categories={categories} />
                    <div
                        className={`element-edit ${
                            isSwiped ? "opacity-100" : "opacity-0"
                        } flex absolute -right-[55px] top-0 bottom-0 sm:right-0 sm:left-auto sm:opacity-0 sm:pr-0`}
                    >
                        <Button
                            className="text-white bg-[var(--primary)] px-3 items-center sm:text-[var(--dark)] sm:hover:text-[var(--primary)] sm:px-1 sm:bg-transparent"
                            onClick={handleEdit}
                        >
                            <IconPen className="w-[25px] h-[25px] sm:w-[15px] sm:h-[16px]" />
                        </Button>
                        <ButtonDelete
                            id={id}
                            listId={listId}
                            icon
                        />
                    </div>
                </animated.div>
            </li>
        </>
    )
}
