"use client"

import Button from "@/components/ui/Button"
import React from "react"
import IconMore from "../icons/more"
import { useModal } from "@/context/ModalContext"
import MobileSort from "./MobileSort"
import { ISortChangeProp } from "../buttons/Sort"
import useDropdown, { DropdownTemplate } from "@/hooks/useDropdown"
import IconBin from "../icons/bin"
import IconSwitch from "../icons/switch"
import IconCopy from "../icons/copy"
import IconPen from "../icons/pen"
import CreateList from "../modals/CreateList"
import DeleteList from "../modals/DeleteList"

type IListActions = {
    listId: string
    name: string
}

export type IMobileSortProps = ISortChangeProp & IListActions

export default function MobileMore({
    handleSortChange,
    sortCriteria,
    listId,
    name,
}: IMobileSortProps) {
    const { setModalContent, setIsModalOpen } = useModal()
    const { isOpen, toggleDropdown, dropdownRef, closeDropdown } = useDropdown()

    const handleEditList = () => {
        setModalContent(<CreateList editList={{ name: name, id: listId }} />)
        setIsModalOpen(true)
    }

    const handleDuplicateList = () => {
        const duplicatData = {
            id: listId || "",
            name: name || "",
        }

        setModalContent(<CreateList duplicate={duplicatData} />)
        setIsModalOpen(true)
    }

    const handleDeleteList = () => {
        setModalContent(<DeleteList listId={listId} />)
        setIsModalOpen(true)
    }

    // const handleSortList = () => {
    // setModalContent(<CreateList editList={{ name: name, id: listId }} />)
    // setIsModalOpen(true)
    // }

    return (
        <div
            className="relative inline-block text-left"
            ref={dropdownRef}
        >
            <Button
                className="px-3 py-2 text-gray-400 sm:hidden"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={() => toggleDropdown()}
            >
                <IconMore />
            </Button>
            {isOpen && (
                <DropdownTemplate>
                    <Element
                        closeDropdown={closeDropdown}
                        icon={<IconPen />}
                        action={handleEditList}
                    >
                        Zmień nazwę
                    </Element>
                    <Element
                        closeDropdown={closeDropdown}
                        icon={<IconCopy />}
                        action={handleDuplicateList}
                    >
                        Duplikuj
                    </Element>
                    {/* <Element
                        closeDropdown={closeDropdown}
                        icon={<IconSwitch />}
                    >
                        Sortuj
                    </Element> */}
                    <Element
                        closeDropdown={closeDropdown}
                        icon={<IconBin />}
                        action={handleDeleteList}
                        red
                    >
                        Usuń
                    </Element>
                </DropdownTemplate>
            )}
        </div>
    )
}

const Element = ({
    action,
    children,
    closeDropdown,
    icon,
    red,
}: {
    action: (() => void) | (() => Promise<void>)
    children: React.ReactNode
    closeDropdown: () => void
    icon: React.ReactNode
    red?: boolean
}) => {
    const handleClick = () => {
        action()
        closeDropdown()
    }

    return (
        <Button
            className={`flex justify-between px-4 py-2 text-sm hover:text-[var(--primary)] hover:pl-5 animated w-full border-t first:border-0 ${
                red && "text-red-600 hover:text-red-600"
            }`}
            role="menuitem"
            tabIndex={-1}
            onClick={handleClick}
        >
            {children} {icon}
        </Button>
    )
}
