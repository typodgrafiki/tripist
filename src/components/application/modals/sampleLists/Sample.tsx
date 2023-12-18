"use client"

import { useState } from "react"
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query"
import { getSampleLists } from "@/actions/axiosActions"
import { ISampleType } from "@/types/types"
import SampleLists from "./SampleLists"
import ArrowDown from "../../icons/arrowDown"
export default function Sample({
    setImportedId,
}: {
    setImportedId: React.Dispatch<React.SetStateAction<number>>
}) {
    const [isActive, setIsActive] = useState(false)

    if (isActive) return <SampleOn setImportedId={setImportedId} />

    return (
        <>
            <button
                type="button"
                className="btn btn-default w-full mt-3"
                onClick={() => setIsActive(true)}
            >
                Stwórz z szablonu
                <ArrowDown className="ml-2" />
            </button>
        </>
    )
}

const SampleOn = ({
    setImportedId,
}: {
    setImportedId: React.Dispatch<React.SetStateAction<number>>
}) => {
    const {
        data: sampleLists,
        isLoading,
        isError,
        isPaused,
    } = useQuery({
        queryKey: ["sampleLists"],
        queryFn: async () => {
            const data = await getSampleLists()
            return data as ISampleType[]
        },
    })

    console.log(sampleLists)

    // TODO Pobieranie danych rowniez odbywa sie w edycji elementu - polaczyc jesli sie da aby bralo z cache

    if (isLoading)
        return <div className="mt-4">Ładowanie list przykładowych...</div>
    if (isError || !sampleLists)
        return <div className="mt-4">Błąd ładowania list przykładowych</div>

    return (
        <>
            <div className="mt-4 overflow-y-auto max-h-inner-modal">
                {sampleLists.map((element) => (
                    <SampleLists
                        key={element.name}
                        setImportedId={setImportedId}
                        {...element}
                    />
                ))}
            </div>
        </>
    )
}
