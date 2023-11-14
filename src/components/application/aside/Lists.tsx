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
import { sortElements } from "@/utils/utils"

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
    if (isError) return <div>Error</div>

    return (
        <>
            {lists && lists.length > 0 && (
                <div className="hidden my-lists text-gray-500 bg-white shadow-md rounded-md py-3 sm:block sm:overflow-y-auto sm:mb-5">
                    <ul>
                        {sortedLists?.map((element) => (
                            <ListsRow
                                key={element.id}
                                id={element.id}
                                name={element.name}
                            />
                        ))}
                    </ul>
                </div>
            )}
            <Button
                className="hidden sm:inline-block btn btn-default self-start sm:mb-4"
                onClick={handleOpenModal}
            >
                Dodaj listę
            </Button>
        </>
    )
}
