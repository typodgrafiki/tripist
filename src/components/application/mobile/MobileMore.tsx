"use client"

import Button from "@/components/ui/Button"
import React from "react"
import IconMore from "../icons/more"
import { useModal } from "@/context/ModalContext"
import MobileSort from "./MobileSort"
import { ISortChangeProp } from "../buttons/Sort"

type IListActions = {
    listId: string
    name?: string
}

export type IMobileSortProps = ISortChangeProp & IListActions

export default function MobileMore({
    handleSortChange,
    sortCriteria,
    listId,
    name,
}: IMobileSortProps) {
    const { setIsModalOpen, setModalContent } = useModal()

    const handleClick = () => {
        setModalContent(
            <MobileSort
                handleSortChange={handleSortChange}
                sortCriteria={sortCriteria}
                listId={listId}
                name={name}
            />
        )
        setIsModalOpen(true)
    }

    return (
        <Button
            className="px-3 text-gray-400 sm:hidden"
            onClick={handleClick}
        >
            <IconMore />
        </Button>
    )
}
