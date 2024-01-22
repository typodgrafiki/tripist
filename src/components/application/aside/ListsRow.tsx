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

    return (
        <>
            <li className="relative mb-3 sm:mb-1">
                <Link
                    href={thisUrl}
                    className={`bg-[#ECEEF2] px-5 py-4 list-link animated block hover:bg-[#f4f4f5] sm:px-6 sm:py-2 relative truncate ${
                        pathname === thisUrl
                            ? "font-medium text-white bg-[var(--primary)]"
                            : "hover:text-gray-900 focus:font-medium focus:bg-[var(--primary)] focus:text-white"
                    }`}
                >
                    {settingColor && (
                        <span
                            className={`hidden sm:inline-block h-[7px] w-[7px] rounded-full mr-2 relative -top-[1px] ${settingColor}`}
                        ></span>
                    )}
                    <span className="flex justify-between items-center mb-2 sm:inline sm:mb-0">
                        <span className="font-semibold text-[1.06rem] sm:font-normal sm:text-sm">
                            {name}
                        </span>
                        <span className="text-gray-400 focus-text text-xs italic sm:hidden">
                            {formattedDate}
                        </span>
                    </span>
                    <span className="block text-gray-500 focus-text text-xs mb-3 parent-focus:text-white sm:hidden">
                        {elements.length} przedmiotów
                    </span>
                    <span className="block w-full bg-[#DCDFE5] rounded-xl sm:hidden">
                        <span
                            className={`block h-2 rounded-xl ${settingColor}`}
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
