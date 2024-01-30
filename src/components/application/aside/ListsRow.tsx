"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { IListBasic } from "@/types/types"
import { formatDate } from "@/utils/utils"

export default function ListsRow({
    name,
    id,
    settingColor,
    elements,
    lastChangeAt,
}: IListBasic) {
    const pathname = usePathname()
    const thisUrl = "/dashboard/" + id
    const formattedDate = formatDate(lastChangeAt)
    const elementsWithTrueStatus = elements.filter(
        (element) => element.status === true
    )
    const isComplete = elementsWithTrueStatus.length === elements.length

    return (
        <>
            <li className="relative mb-3 sm:mb-1">
                <Link
                    href={thisUrl}
                    className={`bg-[#ECEEF2] dark:bg-[var(--darkModeLight)] px-5 py-4 list-link animated block hover:bg-[#f4f4f5] sm:px-6 sm:py-2 sm:bg-transparent relative truncate dark:sm:bg-transparent ${
                        pathname === thisUrl
                            ? "font-medium text-white active"
                            : "hover:text-gray-900 focus:font-medium focus:bg-[var(--primary)] focus:text-white"
                    }`}
                >
                    {settingColor && (
                        <span
                            className={`hidden sm:inline-block h-[7px] w-[7px] rounded-full mr-2 relative -top-[1px] ${settingColor}`}
                        ></span>
                    )}
                    <span className="flex justify-between items-center mb-2 gap-1 sm:inline sm:mb-0">
                        <span className="font-semibold text-[1.2rem] truncate dark:text-[var(--darkModeTitle)] sm:font-normal sm:text-sm">
                            {name}
                        </span>
                        <span className="text-gray-400 focus-text text-xs italic dark:text-[var(--darkModeText)] sm:hidden">
                            {formattedDate}
                        </span>
                    </span>
                    <span className="block text-gray-500 focus-text text-xs mb-3 parent-focus:text-white dark:text-[var(--darkModeText)] sm:hidden">
                        {elements.length} przedmiotów
                    </span>
                    <span className="block w-full bg-[#DCDFE5] dark:bg-[#323236] rounded-xl overflow-hidden sm:hidden">
                        <span
                            className={`block h-2 rounded-xl animated ${settingColor}`}
                            style={{
                                width: `${
                                    (elementsWithTrueStatus.length /
                                        elements.length) *
                                    100
                                }%`,
                            }}
                        ></span>
                    </span>
                </Link>
            </li>
        </>
    )
}
