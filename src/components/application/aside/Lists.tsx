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
        return new Date(b.createAt).getTime() - new Date(a.createAt).getTime()
    })

    if (isLoading) return <LoadingLists />
    if (isError) return <ListsErrorLoading />

    return (
        <div>
            {lists && lists.length > 0 && (
                <div className="my-lists grow pb-20">
                    <p className="font-semibold uppercase px-6 pt-7 pb-6 ">
                        Twoje listy
                        <Image
                            src={arrowDown}
                            width={10}
                            height={5}
                            alt="arrow down"
                            className="inline-block ml-2 relative -top-[1px]"
                        />
                    </p>
                    <ul>
                        {sortedLists?.map((element) => (
                            <ListsRow
                                key={element.id}
                                id={element.id}
                                settingColor={element.settingColor}
                                name={element.name}
                            />
                        ))}
                    </ul>
                </div>
            )}
            <Button
                className="hidden fixed bottom-6 left-5 sm:inline-block btn btn-white "
                onClick={handleOpenModal}
            >
                Dodaj listę
                <IconPlus className="ml-2 relative -top-[1px]" />
            </Button>
        </div>
    )
}
