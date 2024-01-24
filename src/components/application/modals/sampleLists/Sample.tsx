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
import ModalLoading from "@/components/ui/ModalLoading"
import ModalError from "@/components/ui/ModalError"
import ModalSuccess from "@/components/ui/ModalSuccess"
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
}

const SampleOn = () => {
    const {
        title,
        customList,
        isPending,
        isSuccess,
        importedList,
        setCustomList,
    } = useContext(SampleContext)
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

    if (isPending)
        return (
            <ModalLoading>
                Trwa tworzenie listy{" "}
                <span className="text-[var(--primary)]">{title}</span> ...
            </ModalLoading>
        )

    if (isSuccess)
        return (
            <ModalSuccess>
                Lista <span className="text-[var(--primary)]">{title}</span>{" "}
                została stworzona!
            </ModalSuccess>
        )

    return (
        <>
            {customList ? (
                <SampleListsEdit />
            ) : (
                <>
                    <SampleTypes data={sampleLists} />
                    <div
                        className={`flex flex-wrap gap-3 justify-between pt-3 animated overflow-hidden ${
                            importedList.id !== 0
                                ? "max-h-100 opacity-100"
                                : "max-h-0 opacity-0"
                        }`}
                    >
                        <Button
                            type="button"
                            className="btn btn-big btn-default justify-center flex-1 whitespace-nowrap"
                            isDisabled={importedList.id == 0 || isPending}
                            onClick={() => setCustomList(true)}
                        >
                            Dostosuj wybraną listę
                            <ArrowDown className="ml-2" />
                        </Button>
                        <Button
                            className="btn btn-big btn-primary justify-center flex-1 whitespace-nowrap"
                            type="submit"
                            isLoading={isPending}
                            isDisabled={importedList.id == 0}
                        >
                            {isPending ? (
                                "Tworzenie listy"
                            ) : (
                                <>
                                    Stwórz listę
                                    <ArrowRight className="ml-2" />
                                </>
                            )}
                        </Button>
                    </div>
                </>
            )}
        </>
    )
}
