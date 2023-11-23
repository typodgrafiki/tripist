"use client"

import { useState, useMemo } from "react"
import { useQuery } from "@tanstack/react-query"
import { getListData } from "@/actions/axiosActions"
import { IElements, IList } from "@/types/types"
import { findUniqueCategories, sortElements } from "@/utils/utils"
import Title from "@/components/application/title/Title"
import ContentElement from "@/components/application/content/ContentElement"
import ButtonDisableAll from "@/components/application/content/ButtonDisableAll"
import IconMore from "@/components/application/icons/more"
import IconSwitch from "@/components/application/icons/switch"
import ButtonDeleteList from "@/components/application/buttons/ButtonDeleteList"
import ButtonDuplicate from "@/components/application/buttons/ButtonDuplicate"
import { useModal } from "@/context/ModalContext"
import AddElements from "@/components/application/modals/AddElements"
import Button from "@/components/ui/Button"
import IconPen from "../icons/pen"
import CreateList from "../modals/CreateList"
import FilterCategories from "./FilterCategories"
import ContentEmpty from "./ContentEmpty"
import LoadingContent from "./LoadingContent"
import Sort from "../buttons/Sort"
import { SortBy, SortDirection } from "@/utils/utils"

export type TSortProps = {
    sortBy: SortBy
    sortDirection: SortDirection
}

export default function Content({ id }: { id: string }) {
    const [selectedCategory, setSelectedCategory] = useState("")
    const { isModalOpen, setIsModalOpen, modalContent, setModalContent } =
        useModal()
    const [sortCriteria, setSortCriteria] = useState<TSortProps>({
        sortBy: "createdAt",
        sortDirection: "desc",
    })

    const {
        data: listData,
        isLoading: isLoadingTitle,
        isError: isErrorTitle,
    } = useQuery({
        queryKey: ["listData", id],
        queryFn: async () => await getListData(id),
        select: (response) => {
            if (response) {
                const { elements, ...bodyWithoutElements } = response.data.body
                return bodyWithoutElements as IList
            }
        },
    })

    const {
        data: elements,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["elements", id],
        queryFn: async () => {
            const response = await getListData(id)
            if (response) {
                return response.data.body.elements as IElements[]
            }
        },
    })

    // TODO Te 2 zapytania maja sie wykonywac jednoczesnie a niedno po drugim

    const categoriesUnique = useMemo(
        () => findUniqueCategories(elements || []),
        [elements]
    )

    const sortedAndFilteredElements = useMemo(() => {
        if (!elements) return []
        const filteredElements = elements.filter(
            (element) =>
                !selectedCategory ||
                element.categories.some(
                    (category) => category.name === selectedCategory
                )
        )
        return sortElements(
            filteredElements,
            sortCriteria.sortBy,
            sortCriteria.sortDirection
        )
    }, [elements, selectedCategory, sortCriteria])

    // return <Title loading />

    if (isLoading) return <LoadingContent />
    if (isError) return <div>Error</div>
    if (!elements || !listData) return <div>No data</div>

    const { name, id: listId } = listData

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category)
    }

    const handleOpenModal = () => {
        setModalContent(
            <AddElements
                listId={listData.id}
                listName={listData.name}
            />
        )
        setIsModalOpen(true)
    }

    const handleEditList = () => {
        setModalContent(<CreateList editList={{ name: name, id: listId }} />)
        setIsModalOpen(true)
    }

    const handleSortChange = (
        newSortBy: SortBy,
        newSortDirection: SortDirection
    ) => {
        setSortCriteria({ sortBy: newSortBy, sortDirection: newSortDirection })
    }

    return (
        <>
            <div className="flex justify-between gap-2">
                <Title title={name} />
                <div className="flex">
                    {/* <button className="px-3 pl-4 sm:hidden">
                        <IconSwitch />
                    </button>
                    <button className="px-3 pr-5 sm:hidden">
                        <IconMore />
                    </button> */}
                    <Button
                        className="animated hidden sm:inline-block px-3 mb-2 hover:text-[var(--primary)] hover:bg-white rounded-full"
                        onClick={handleEditList}
                    >
                        <IconPen />
                    </Button>
                    <ButtonDuplicate
                        listId={listId}
                        name={name}
                    />
                    <ButtonDeleteList listId={listId} />
                </div>
            </div>

            {elements?.length > 0 ? (
                <>
                    <div className="text-gray-600 pb-5 sm:bg-white sm:shadow-lg sm:rounded-md sm:overflow-y-auto sm:pb-7 sm:pt-6 sm:px-6">
                        <div className="flex mb-3 sm:mb-5 justify-between">
                            <FilterCategories
                                categoriesUnique={categoriesUnique}
                                handleCategoryChange={handleCategoryChange}
                                selectedCategory={selectedCategory}
                            />
                            <Sort
                                handleSortChange={handleSortChange}
                                sortCriteria={sortCriteria}
                            />
                        </div>
                        <ul className="">
                            {sortedAndFilteredElements.map((element) => (
                                <div key={element.id}>
                                    <ContentElement {...element} />
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className="flex justify-between  items-end gap-4 sticky bottom-0 left-0 right-0  bg-gray-200 sm:static sm:bg-transparent mt-3">
                        <ButtonDisableAll listId={listId} />
                        <Button
                            onClick={handleOpenModal}
                            className="btn-add-element btn btn-primary relative text-[0] w-[80px] h-[80px] mr-7 -mt-7 z-1 text-white block rounded-full -top-1 sm:top-0"
                        >
                            Dodaj element
                        </Button>
                    </div>
                </>
            ) : elements?.length === 0 ? (
                <ContentEmpty handleOpenModal={handleOpenModal} />
            ) : null}
        </>
    )
}
