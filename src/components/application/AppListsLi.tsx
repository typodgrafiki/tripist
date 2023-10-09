"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux"
import { RootState } from "@/store/InterfaceState"
import { setList } from "@/store/slice"

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default function AppListsLi({
    name,
    url,
    id,
}: {
    name: string
    url: string
    id: string
}) {
    const pathname = usePathname()
    const thisUrl = "/dashboard/" + url

    const nameList = useTypedSelector((state) => state.list.name)
    const dispatch = useDispatch()

    const listActiveObject = {
        id: id,
        name: name,
        url: url,
        elements: ["123", "456", "787"],
    }

    const handleClick = async () => {
        // if (user && typeof user === "object" && "id" in user) {
        //     const res = await fetch("/api/showLists")
        //     const data = await res.json()
        //     console.dir(data)
        // } else {
        //     console.error("Nieprawidłowy użytkownik lub brak 'id'")
        // }
        // console.log(listActiveObject)
        // dispatch(
        //     setList(listActiveObject)
        // )
    }

    // klikniesz w link to zmienia sie store wykorzystujac id

    return (
        <>
            <li className={pathname === thisUrl ? "font-semibold" : ""}>
                <Link
                    href={thisUrl}
                    onClick={handleClick}
                >
                    {name}
                </Link>
            </li>
        </>
    )
}
