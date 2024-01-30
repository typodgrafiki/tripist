"use client"

import { useState, useMemo } from "react"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import { getListData } from "@/actions/axiosActions"
import { IElements, IList, SortBy, SortDirection } from "@/types/types"
import {
    calculateStatusPercentage,
    findUniqueCategories,
    sortElements,
} from "@/utils/utils"
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
import MobileMore from "../mobile/MobileMore"
import PercentageBar from "./PercentageBar"
import Tooltip from "@/components/ui/Tooltip"

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
    const [editElementId, setEditElementId] = useState<number | null>(null)

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

    const { name, id: listId, fromTemplate: titleFromTemplate } = listData

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category)
    }

    const handleOpenModal = () => {
        setModalContent(
            <AddElements
                listId={listData.id}
                listName={listData.name}
                listColor={listData.settingColor}
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

    const percentagePackedItems = calculateStatusPercentage(elements)

    return (
        <>
            {/* Header view */}
            <div className="flex justify-between ml-5 mr-1 my-2 sm:hidden">
                <Link
                    href="/dashboard"
                    className="text-[var(--primary)] py-2"
                >
                    {`<`} Wszystkie
                </Link>
                <MobileMore
                    handleSortChange={handleSortChange}
                    sortCriteria={sortCriteria}
                    listId={listId}
                    name={name}
                />
            </div>
            <div className="flex justify-between gap-2 mb-1 ">
                <Title
                    title={name}
                    subTitle={titleFromTemplate}
                />
                <div className="flex">
                    <Tooltip
                        text="Edytuj"
                        className="hidden sm:flex mb-2 "
                    >
                        <Button
                            className="animated px-3 rounded-full dark:text-[var(--darkModeText)] hover:text-[var(--primary)]"
                            onClick={handleEditList}
                        >
                            <IconPen />
                        </Button>
                    </Tooltip>
                    <ButtonDuplicate
                        listId={listId}
                        name={name}
                    />
                    <ButtonDeleteList listId={listId} />
                </div>
            </div>
            {elements?.length > 0 ? (
                <>
                    <div className="hidden sm:flex mb-3 justify-between gap-2">
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
                    <PercentageBar percent={percentagePackedItems} />
                    <div className="text-gray-600 dark:text-[#81838A] pb-24 sm:bg-white sm:shadow-lg sm:rounded-md sm:overflow-y-auto sm:pb-5 sm:pt-4 sm:px-6 dark:sm:bg-[var(--darkModeLight)]">
                        <ul>
                            {sortedAndFilteredElements.map((element) => (
                                <ContentElement
                                    key={element.id}
                                    editElementId={editElementId}
                                    setEditElementId={setEditElementId}
                                    {...element}
                                />
                            ))}
                        </ul>
                    </div>
                    {/* <div className="flex justify-between px-5 pb-4 items-end gap-4 sticky bottom-0 left-0 right-0 sm:static mt-3 sm:p-0">
                        <ButtonDisableAll listId={listId} />
                        <button
                            onClick={handleOpenModal}
                            className="btn-add-element btn btn-primary fixed text-[0] w-[60px] h-[60px] mr-3 bottom-6 z-1 text-white block rounded-full right-0 sm:top-0 sm:mr-7 sm:w-[80px] sm:h-[80px] sm:relative sm:bottom-auto sm:right-auto z-10 sm:-mt-7"
                        >
                            Dodaj element
                        </button>
                    </div> */}
                    <div className="flex items-center justify-between px-5 pb-6 dark:bg-[#151516] dark:pt-4 dark:bg-opacity-80 dark:backdrop-blur-[2px] sm:items-end gap-4 fixed bottom-0 left-0 right-0 sm:static mt-3 sm:p-0 dark:sm:backdrop-blur-none, dark:sm:bg-transparent">
                        <ButtonDisableAll listId={listId} />
                        <button
                            onClick={handleOpenModal}
                            className="btn-add-element btn btn-primary text-[0] w-[60px] h-[60px] z-1 text-white block rounded-full right-0 sm:top-0 sm:mr-7 sm:w-[80px] sm:h-[80px] relative sm:bottom-auto sm:right-auto z-10 sm:-mt-7"
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
