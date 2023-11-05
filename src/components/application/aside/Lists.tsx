"use client"

import { useQuery, useQueryClient } from "@tanstack/react-query"
import { ILists } from "@/types/types"
import { getListsAction } from "@/actions/axiosActions"
import ListsRow from "./ListsRow"
import { useModal } from "@/context/ModalContext"
import CreateList from "@/components/application/modals/CreateList"
import LoadingLists from "./Loading"

export default function Lists() {
    const queryClient = useQueryClient()

    const {
        data: lists,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["lists"],
        queryFn: async () => {
            const { data } = await getListsAction()
            return data.body as ILists[]
        },
    })

    if (isLoading) return <LoadingLists />
    if (isError) return <div>Error</div>

    return (
        <>
            {lists && (
                <div className="hidden my-lists text-gray-500 bg-white shadow-md rounded-md py-3 sm:block sm:overflow-y-auto sm:mb-5">
                    <ul>
                        {lists.map((element) => (
                            <ListsRow
                                key={element.id}
                                id={element.id}
                                name={element.name}
                            />
                        ))}
                    </ul>
                </div>
            )}

            <Button />
        </>
    )
}

const Button = () => {
    // const { setModalContent, setIsModalOpen } = useModal()

    const handleOpenModal = () => {
        // setModalContent(<CreateList />)
        // setIsModalOpen(true)
    }

    return (
        <>
            <button
                className="hidden sm:inline-block btn btn-default self-start sm:mb-4"
                // onClick={handleOpenModal}
            >
                Dodaj listę
            </button>
        </>
    )
}
