"use client"

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
    editElementId,
    setEditElementId,
}: IElements & {
    editElementId: number | null
    setEditElementId: (id: number | null) => void
}) {
    const isSwiped = editElementId === id
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
        setEditElementId(null)
    }

    // GESTY
    const [{ x }, api] = useSpring(() => ({ x: 0 }))

    const bind = useDrag(({ down, movement: [mx], swipe }) => {
        // Ograniczenie przesunięcia do zakresu od -55 do 0
        const limitedX = Math.min(Math.max(mx, -65), 0)

        api.start({ x: down ? limitedX : 0, immediate: down })

        if (swipe) {
            if (swipe[0] === -1) {
                // Jeżeli wykonano swipe w lewo, ustaw stan, że element został przesunięty
                setEditElementId(id)
            } else if (swipe[0] === 1) {
                // Jeżeli wykonano swipe w prawo, zresetuj stan przesunięcia
                setEditElementId(null)
            }
        }
    })

    return (
        <>
            <li className="relative border-t border-gray-200 dark:border-transparent first:border-0 overflow-x-hidden sm:hover:shadow-md dark:sm:border-[#212123]">
                <div className="element-row flex gap-3 items-stretch sm:px-1 hover:bg-slate-50 dark:hover:bg-transparent dark:hover:text-[var(--darkModeTitle)] sm:hover:sm:pl-3 hover:rounded sm:animated dark:sm:bg-[#25262C] dark:sm:mt-1 dark:sm:mr-2 dark:sm:hover:bg-[#191B1F] dark:sm:px-3">
                    <animated.label
                        className="animated-fast flex items-center px-5 py-4 gap-2 grow cursor-pointer sm:text-sm sm:hover:text-[var(--primary)] dark:sm:hover:text-white sm:px-0 sm:py-2"
                        {...bind()}
                        style={{
                            transform: x.interpolate(
                                (val) =>
                                    `translate3d(${
                                        val - (isSwiped ? 30 : 0)
                                    }px, 0, 0)`
                            ),
                            touchAction: "pan-y",
                        }}
                    >
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
                    </animated.label>
                    <Categories categories={categories} />
                    <div
                        className={`animated element-edit ${
                            isSwiped ? "right-0" : "-right-[100px]"
                        }  flex absolute top-0 bottom-0 sm:right-0 sm:left-auto sm:opacity-0 sm:pr-0 dark:sm:right-4`}
                    >
                        <Button
                            className="text-white bg-[var(--primary)] px-3 items-center sm:text-[var(--dark)] sm:hover:text-[var(--primary)] sm:px-1 sm:bg-transparent dark:sm:text-[var(--darkModeText)] dark:sm:hover:text-[var(--darkModeTitle)]"
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
                </div>
            </li>
        </>
    )
}
