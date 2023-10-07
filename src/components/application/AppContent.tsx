"use client"

// import { useRouter, usePathname, useParams } from "next/navigation"
// import { listDetails } from "@/lib/listDetails"
import { useSelector, TypedUseSelectorHook } from "react-redux"
import { RootState } from "@/store/InterfaceState"

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default function AppContent() {
    const name = useTypedSelector((state) => state.todos.name)

    // const router = useRouter()
    // const pathname = usePathname()
    // const params = useParams()
    // const listurl = params.slug

    return (
        <>
            {/* Jesli lista jest pusta:
        else */}
            <div className="text-center">
                <p className="text-slate-700 mb-5">
                    Zauważyliśmy, że Twój panel jest jeszcze pusty. Ale nie
                    martw się, jesteśmy tu, by Ci pomóc zacząć! Stworzenie
                    pierwszej listy rzeczy do zabrania na wakacje jest naprawdę
                    proste i szybkie. Nie czekaj! Zacznij planować swój wyjazd
                    teraz i upewnij się, że masz wszystko, czego potrzebujesz,
                    aby cieszyć się idealnymi wakacjami.
                </p>
                <button className="btn btn-primary transition-colors">
                    Stwórz swoją pierwszą listę
                </button>
            </div>
        </>
    )
}
