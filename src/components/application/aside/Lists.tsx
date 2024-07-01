/**
 *
 * TODO dodać informacje jeśli brak połączenia z internetem (isPaused)
 *
 */

"use client"

import { useState, useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import { ILists } from "@/types/types"
import { getListsAction } from "@/actions/axiosActions"
import { useMediaQuery } from "react-responsive"
import ListsRow from "./ListsRow"
import { useModal } from "@/context/ModalContext"
import CreateList from "@/components/application/modals/CreateList"
import LoadingLists from "./Loading"
import Button from "@/components/ui/Button"
import IconPlus from "../icons/plus"
import ListsErrorLoading from "./Error"
import IconList from "../icons/list"
import ContentEmpty from "../content/ContentEmpty"

export default function Lists() {
    const { setModalContent, setIsModalOpen } = useModal()
    const [isMobile, setIsMobile] = useState(false)

    const mobile = useMediaQuery({
        query: "(max-width: 639px)",
    })

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

    useEffect(() => {
        if (mobile) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }, [mobile])

    if (isLoading) return <LoadingLists />
    if (isError) return <ListsErrorLoading />

    return (
        <div
            className={`${
                lists && lists.length > 0
                    ? ""
                    : "h-full flex justify-center items-center"
            }`}
        >
            {lists && lists.length > 0 ? (
                <div className="my-lists grow pb-20">
                    <TitleAside />
                    <ul className="mx-6 sm:mr-0 sm:ml-3">
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
            ) : isMobile ? (
                <ContentEmpty dashboard />
            ) : (
                <div className="my-lists grow self-start pb-20">
                    <TitleAside />
                </div>
            )}
            <Button
                className="btn btn-primary fixed bottom-6 right-3 rounded-full p-4 sm:inline-block sm:btn-white sm:text-gray-900 sm:left-5 sm:right-auto sm:rounded-[7px] sm:border-white sm:px-[15px] sm:py-[10px] dark:sm:bg-[var(--darkModeBtn)] dark:sm:text-[var(--darkModeTitle)] dark:sm:border-none"
                onClick={handleOpenModal}
            >
                <span className="hidden sm:inline">
                    Utwórz listę
                    <IconPlus className="ml-2 relative -top-[1px]" />
                </span>
                <IconList className="sm:hidden" />
            </Button>
        </div>
    )
}

const TitleAside = () => {
    return (
        <p className="text-2xl font-semibold px-8 pt-7 pb-6 dark:text-[#44464C] sm:uppercase sm:text-sm">
            Twoje listy
            <svg
                width="10"
                height="5"
                viewBox="0 0 13 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden svg-stroke sm:inline-block ml-2 relative -top-[1px]"
            >
                <path
                    d="M1.5 1.5L6.5 6.5L11.5 1.5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </p>
    )
}
