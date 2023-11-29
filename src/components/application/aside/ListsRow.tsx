"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { IListBasic } from "@/types/types"

export default function ListsRow({ name, id, settingColor }: IListBasic) {
    const pathname = usePathname()
    const thisUrl = "/dashboard/" + id

    return (
        <>
            <li className="relative mb-1">
                <Link
                    href={thisUrl}
                    className={`list-link animated block px-6 py-2 relative truncate ${
                        pathname === thisUrl
                            ? "font-medium text-white bg-[var(--primary)]"
                            : "hover:text-gray-900 focus:font-medium focus:bg-[var(--primary)] focus:text-white"
                    }`}
                >
                    {settingColor && (
                        <span
                            className={`inline-block h-[7px] w-[7px] rounded-full mr-2 relative -top-[1px] ${settingColor}`}
                        ></span>
                    )}
                    {name}
                </Link>
            </li>
        </>
    )
}
