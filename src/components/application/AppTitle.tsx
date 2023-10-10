"use client"

import { useSelector, TypedUseSelectorHook } from "react-redux"
import { RootState } from "@/store/InterfaceState"

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default function AppTitle() {
    const title = useTypedSelector((state) => state.list.name)
    const id = useTypedSelector((state) => state.list.id)
    const url = useTypedSelector((state) => state.list.url)

    return (
        <h1 className="font-semibold text-2xl mb-4">
            {title} / {id} / {url}
        </h1>
    )
}
