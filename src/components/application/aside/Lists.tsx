/**
 *
 * TODO dodać informacje jeśli brak połączenia z internetem (isPaused)
 *
 */

"use client"

import { useQuery } from "@tanstack/react-query"
import { ILists } from "@/types/types"
import { getListsAction } from "@/actions/axiosActions"
import ListsRow from "./ListsRow"
import { useModal } from "@/context/ModalContext"
import CreateList from "@/components/application/modals/CreateList"
import LoadingLists from "./Loading"
import Button from "@/components/ui/Button"
import IconPlus from "../icons/plus"
import arrowDown from "@/assets/images/dashboard/arrow-down.svg"
import Image from "next/image"
import ListsErrorLoading from "./Error"
import IconList from "../icons/list"

export default function Lists() {
    const { setModalContent, setIsModalOpen } = useModal()

    const handleOpenModal = () => {
        setModalContent(<CreateList />)
        setIsModalOpen(true)
    }

    const {
        data: lists,
        isLoading,
        isError,
        isPaused,
    } = useQuery({
        queryKey: ["lists"],
        queryFn: async () => {
            const { data } = await getListsAction()
            return data.body as ILists[]
        },
    })

    // sortowanie listy createdAt
    const sortedLists = lists?.sort((a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    })

    if (isLoading) return <LoadingLists />
    if (isError) return <ListsErrorLoading />

    return (
        <div>
            {lists && lists.length > 0 && (
                <div className="my-lists grow pb-20">
                    <p className="text-2xl font-semibold px-6 pt-7 pb-6 sm:uppercase sm:text-sm">
                        Twoje listy
                        <Image
                            src={arrowDown}
                            width={10}
                            height={5}
                            alt="arrow down"
                            className="hidden sm:inline-block ml-2 relative -top-[1px]"
                        />
                    </p>
                    <ul className="mx-6 sm:mx-0">
                        {sortedLists?.map((element) => (
                            <ListsRow
                                key={element.id}
                                id={element.id}
                                settingColor={element.settingColor}
                                name={element.name}
                                elements={element.elements}
                                lastChangeAt={element.lastChangeAt}
                            />
                        ))}
                    </ul>
                </div>
            )}
            <Button
                className="btn btn-primary fixed bottom-6 right-3 rounded-full p-4 sm:inline-block sm:btn-white sm:text-gray-900 sm:left-5 sm:right-auto sm:rounded-[7px] sm:border-white sm:px-[15px] sm:py-[10px]"
                onClick={handleOpenModal}
            >
                <span className="hidden sm:inline">
                    Dodaj listę
                    <IconPlus className="ml-2 relative -top-[1px]" />
                </span>
                <IconList className="sm:hidden" />
            </Button>
        </div>
    )
}
