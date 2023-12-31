"use client"

import { useState, useMemo } from "react"
import { useQuery } from "@tanstack/react-query"
import { getListData } from "@/actions/axiosActions"
import { IElements, IList, SortBy, SortDirection } from "@/types/types"
import { findUniqueCategories, sortElements } from "@/utils/utils"
import Title from "@/components/application/title/Title"
import ContentElement from "@/components/application/content/ContentElement"
import ButtonDisableAll from "@/components/application/content/ButtonDisableAll"
import ButtonDeleteList from "@/components/application/buttons/ButtonDeleteList"
import ButtonDuplicate from "@/components/application/buttons/ButtonDuplicate"
import { useModal } from "@/context/ModalContext"
import AddElements from "@/components/application/modals/AddElements"
import Button from "@/components/ui/Button"
import IconPen from "../icons/pen"
import CreateList from "../modals/CreateList"
import FilterCategories from "./FilterCategories"
import ContentEmpty from "./ContentEmpty"
import { LoadingContent } from "./LoadingContent"
import Sort from "../buttons/Sort"
import ContentErrorLoading from "./ErrorContent"
import ContentNoData from "./NoDataContent"
import MobileMore from "../buttons/MobileMore"

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

    if (isLoading) return <LoadingContent />
    if (isError) return <ContentErrorLoading />
    if (!elements || !listData) return <ContentNoData />

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
            <div className="flex justify-between gap-2 mb-1">
                <Title title={name} />
                <div className="flex">
                    <MobileMore
                        handleSortChange={handleSortChange}
                        sortCriteria={sortCriteria}
                        listId={listId}
                        name={name}
                    />
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
                    <div className="hidden sm:flex mb-3 justify-between">
                        <FilterCategories
                            categoriesUnique={categoriesUnique}
                            handleCategoryChange={handleCategoryChange}
                            selectedCategory={selectedCategory}
                            count={sortedAndFilteredElements.length}
                        />

                        <Sort
                            handleSortChange={handleSortChange}
                            sortCriteria={sortCriteria}
                        />
                    </div>
                    <div className="text-gray-600 sm:bg-white sm:shadow-lg sm:rounded-md sm:overflow-y-auto sm:pb-5 sm:pt-4 sm:px-6">
                        <ul className="">
                            {sortedAndFilteredElements.map((element) => (
                                <ContentElement
                                    key={element.id}
                                    {...element}
                                />
                            ))}
                        </ul>
                    </div>
                    <div className="flex justify-between ml-2 items-end gap-4 sticky bottom-0 left-0 right-0 sm:static mt-3 sm:ml-0">
                        <ButtonDisableAll listId={listId} />
                        <button
                            onClick={handleOpenModal}
                            className="btn-add-element btn btn-primary fixed text-[0] w-[60px] h-[60px] mr-3 -mt-7 z-1 text-white block rounded-full bottom-[70px] right-0 sm:top-0 sm:mr-7 sm:w-[80px] sm:h-[80px] sm:relative sm:bottom-auto sm:right-auto"
                        >
                            Dodaj element
                        </button>
                    </div>
                </>
            ) : elements?.length === 0 ? (
                <ContentEmpty handleOpenModal={handleOpenModal} />
            ) : null}
        </>
    )
}
