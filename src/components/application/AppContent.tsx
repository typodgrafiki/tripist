"use client"

import { useEffect } from "react"
import { useRouter, usePathname, useParams } from "next/navigation"
import AppContentElement from "@/components/application/AppContentElement"

export default function AppContent() {
    // const list =

    // const params = useParams()
    // const listUrl = params.slug

    useEffect(() => {
        // console.log("test1")
    }, [])

    return (
        <>
            {/* {list ? (
                <>
                    <div className="text-gray-600">
                        <ul>
                            {list &&
                                list.map((element) => (
                                    <AppContentElement
                                        key={element.id}
                                        name={element.name}
                                        done={element.status}
                                    />
                                ))}
                        </ul>
                    </div>
                </>
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
            )} */}
        </>
    )
}
