"use client"

import { useRouter, usePathname, useParams } from "next/navigation"
// import { listDetails } from "@/lib/listDetails"
// import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux"
// import { RootState } from "@/store/InterfaceState"
// import { setList } from "@/store/slice"

// const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default function AppContent() {
    // const name = useTypedSelector((state) => state.list.name)
    // const dispatch = useDispatch()

    // // const router = useRouter()
    // // const pathname = usePathname()
    const params = useParams()
    const listUrl = params.slug

    // const listActiveObject = {
    //     id: "123123123",
    //     name: "Tyyyyytle",
    //     url: "aaaaaaaa",
    //     elements: ["123", "456", "787"],
    // }

    return (
        <>
            {listUrl ? (
                "wefew"
            ) : (
                <>
                    <div className="text-center">
                        <p className="text-slate-700 mb-5">
                            Zauważyliśmy, że Twój panel jest jeszcze pusty. Ale
                            nie martw się, jesteśmy tu, by Ci pomóc zacząć!
                            Stworzenie pierwszej listy rzeczy do zabrania na
                            wakacje jest naprawdę proste i szybkie. Nie czekaj!
                            Zacznij planować swój wyjazd teraz i upewnij się, że
                            masz wszystko, czego potrzebujesz, aby cieszyć się
                            idealnymi wakacjami.
                        </p>
                        <button className="btn btn-primary transition-colors">
                            Stwórz swoją pierwszą listę
                        </button>
                    </div>
                </>
            )}
        </>
    )
}
