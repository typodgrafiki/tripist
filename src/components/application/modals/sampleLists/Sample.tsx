"use client"

import { useState, useContext } from "react"
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query"
import { getSampleLists } from "@/actions/axiosActions"
import { TSampleType } from "@/types/types"
import SampleLists from "./SampleLists"
import ArrowDown from "../../icons/arrowDown"
import ArrowRight from "../../icons/arrowRight"
import Button from "@/components/ui/Button"
import SampleListsEdit from "./SampleListsEdit"
import ModalTitleSample from "@/components/ui/ModalTitleSample"
import ModalTitle from "@/components/ui/ModalTitle"
import ModalLoading from "@/components/ui/ModalLoading"
import ModalError from "@/components/ui/ModalError"
import SampleTypes from "./SampleLists"
import { SampleContext } from "@/context/SampleListContext"

export default function Sample() {
    const {
        title,
        titleColor,
        titleIsEmpty,
        importedList,
        isCreateSample,
        setIsCreateSample,
        customList,
    } = useContext(SampleContext)

    const titleData = {
        title: title,
        titleColor: titleColor,
        length: importedList.days,
        type: importedList.type,
        custom: customList,
    }

    if (isCreateSample)
        return (
            <>
                <ModalTitleSample titleData={titleData} />
                <SampleOn />
            </>
        )

    return (
        <>
            <p className="text-center my-3">lub</p>
            <button
                type="button"
                className="btn btn-default w-full"
                onClick={() => setIsCreateSample(true)}
                disabled={titleIsEmpty}
            >
                Stwórz gotową listę z szablonu
                <ArrowDown className="ml-2" />
            </button>
        </>
    )
}

const SampleOn = () => {
    const { customList, isPending, importedList, setCustomList } =
        useContext(SampleContext)
    const {
        data: sampleLists,
        isLoading,
        isError: isErrorLoad,
        isRefetching,
        refetch,
    } = useQuery({
        queryKey: ["sampleLists"],
        queryFn: async () => {
            const data = await getSampleLists()
            return data as TSampleType[]
        },
    })

    // TODO Pobieranie danych rowniez odbywa sie w edycji elementu - polaczyc jesli sie da aby bralo z cache

    if (isLoading)
        return <ModalLoading>Ładowanie list przykładowych...</ModalLoading>
    if (isErrorLoad || !sampleLists)
        return (
            <ModalError>
                Nie udało się załadować list przykładowych.
                <Button
                    className="btn btn-primary mt-4 text-sm"
                    onClick={() => refetch()}
                    isLoading={isRefetching}
                    type="button"
                >
                    Spróbuj ponownie
                    <ArrowRight className="ml-2" />
                </Button>
            </ModalError>
        )

    return (
        <>
            {customList ? (
                <SampleListsEdit />
            ) : (
                <>
                    <SampleTypes data={sampleLists} />
                    <Button
                        className="btn btn-primary w-full justify-center mt-3"
                        type="submit"
                        isLoading={isPending}
                        isDisabled={importedList.id == 0}
                    >
                        {isPending ? (
                            "Tworzenie listy"
                        ) : customList ? (
                            <>
                                Stwórz listę
                                <ArrowRight className="ml-2" />
                            </>
                        ) : (
                            <>
                                Stwórz listę z szablonu
                                <ArrowRight className="ml-2" />
                            </>
                        )}
                    </Button>
                    <p className="text-center my-3">lub</p>
                    <Button
                        type="button"
                        className="btn btn-default w-full justify-center"
                        isDisabled={importedList.id == 0 || isPending}
                        onClick={() => setCustomList(true)}
                    >
                        Dostosuj wybraną listę
                        <ArrowDown className="ml-2" />
                    </Button>
                </>
            )}
        </>
    )
}
