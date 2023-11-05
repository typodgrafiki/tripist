"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { IListBasic } from "@/types/types"

export default function ListsRow({ name, id }: IListBasic) {
    const pathname = usePathname()
    const thisUrl = "/dashboard/" + id

    return (
        <>
            <li className="relative mb-1">
                <Link
                    href={{
                        pathname: thisUrl,
                        query: { name: name },
                    }}
                    className={`list-link animated block px-6 py-2 relative rounded-md truncate ${
                        pathname === thisUrl
                            ? "font-medium text-white bg-[var(--primary)] mx-2 pl-4 pr-1"
                            : "hover:text-gray-900 hover:ml-2 focus:font-medium focus:bg-[var(--primary)] focus:text-white focus:mx-2"
                    }`}
                >
                    {name}
                </Link>
            </li>
        </>
    )
}
