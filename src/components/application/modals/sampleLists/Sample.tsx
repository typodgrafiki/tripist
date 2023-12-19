"use client"

import { useState } from "react"
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query"
import { getSampleLists } from "@/actions/axiosActions"
import { TSampleType, TSampleProps, TSampleListStatus } from "@/types/types"
import SampleLists from "./SampleLists"
import ArrowDown from "../../icons/arrowDown"
import ArrowRight from "../../icons/arrowRight"
import Button from "@/components/ui/Button"

type TSampleProps2 = {
    isCreateSample: boolean
    setIsCreateSample: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Sample({
    isPending,
    isError,
    isSuccess,
    importedId,
    setImportedId,
    isCreateSample,
    setIsCreateSample,
}: TSampleProps & TSampleProps2 & TSampleListStatus) {
    if (isCreateSample)
        return (
            <SampleOn
                importedId={importedId}
                setImportedId={setImportedId}
                isPending={isPending}
                isError={isError}
                isSuccess={isSuccess}
            />
        )

    return (
        <>
            <button
                type="button"
                className="btn btn-default mt-3"
                onClick={() => setIsCreateSample(true)}
            >
                Stwórz z szablonu
                <ArrowDown className="ml-2" />
            </button>
        </>
    )
}

const SampleOn = ({
    isPending,
    isError,
    isSuccess,
    importedId,
    setImportedId,
}: TSampleProps & TSampleListStatus) => {
    const {
        data: sampleLists,
        isLoading,
        isError: isErrorLoad,
        isPaused,
    } = useQuery({
        queryKey: ["sampleLists"],
        queryFn: async () => {
            const data = await getSampleLists()
            return data as TSampleType[]
        },
    })

    console.log(sampleLists)

    // TODO Pobieranie danych rowniez odbywa sie w edycji elementu - polaczyc jesli sie da aby bralo z cache

    if (isLoading)
        return <div className="mt-4">Ładowanie list przykładowych...</div>
    if (isErrorLoad || !sampleLists)
        return <div className="mt-4">Błąd ładowania list przykładowych</div>

    return (
        <>
            <div className="mt-4 overflow-y-auto max-h-inner-modal">
                {sampleLists.map((element) => (
                    <SampleLists
                        key={element.fullName}
                        importedId={importedId}
                        setImportedId={setImportedId}
                        isPending={isPending}
                        isError={isError}
                        isSuccess={isSuccess}
                        {...element}
                    />
                ))}
            </div>
            <div className="flex justify-between gap-3 mt-4">
                <Button
                    type="button"
                    className="btn btn-default"
                    isDisabled={importedId == 0 || isPending}
                >
                    Przeglądaj elementy
                    <ArrowDown className="ml-2" />
                </Button>
                <Button
                    className="grow btn btn-primary justify-center"
                    type="submit"
                    isLoading={isPending}
                    isDisabled={importedId == 0}
                >
                    {isPending ? (
                        "Tworzenie listy"
                    ) : (
                        <>
                            Zatwierdź szablon
                            <ArrowRight className="ml-2" />
                        </>
                    )}
                </Button>
            </div>
        </>
    )
}
