"use client"

import { useState } from "react"
import { useContext } from "react"
import { SampleContext } from "@/context/SampleListContext"
import ModalTitle from "@/components/ui/ModalTitle"
import { usePanelControl, usePanel } from "@/lib/usePanels"
import {
    TSampleType,
    TPanelsCollapsedTypeProps,
    TSampleList,
    TSampleListOptions,
} from "@/types/types"
import ArrowDown from "../../icons/arrowDown"

export default function ControlPanels({ data }: { data: TSampleType[] }) {
    const { activePanel, togglePanel } = usePanelControl(null)

    return (
        <div className="mt-4 overflow-y-auto max-h-inner-modal">
            <ModalTitle>Wybierz typ listy</ModalTitle>
            {data.map((element, index) => (
                <Types
                    key={index}
                    index={index}
                    activePanel={activePanel}
                    togglePanel={togglePanel}
                    {...element}
                />
            ))}
        </div>
    )
}

function Types({
    templates,
    fullName: typeName,
    activePanel,
    togglePanel,
    index,
}: TSampleType & TPanelsCollapsedTypeProps & { index: number }) {
    const { isPending } = useContext(SampleContext)
    const { panelContentRef, maxHeight, isOpen } = usePanel(
        activePanel === index
    )

    if (templates.length === 0) return null

    return (
        <div
            className={`sample-list border-b border-gray-300 last:border-0 ${
                isOpen ? "open" : ""
            }`}
        >
            <button
                className="animated flex w-full justify-between items-center py-3 cursor-pointer hover:text-[var(--primary)]"
                onClick={() => togglePanel(index)}
                disabled={isPending}
                type="button"
            >
                <span className="font-medium">{typeName}</span>
                <span className="animated text-gray-500 hover:text-gray-950">
                    {isOpen ? "zwiń" : "rozwin"}
                    <ArrowDown
                        className={`ml-1 ${
                            isOpen ? "origin-center rotate-180" : ""
                        }`}
                    />
                </span>
            </button>

            <div
                className="overflow-hidden animated"
                style={{ maxHeight: isOpen ? `${maxHeight}px` : "0" }}
            >
                <div
                    ref={panelContentRef}
                    className={`bg-gray-100 rounded-lg px-4 py-1`}
                >
                    {templates.map((element, index) => (
                        <SampleList
                            key={element.name + index}
                            {...element}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

const SampleList = ({ name: type, options }: TSampleList) => {
    const { isPending, importedList, setImportedList } =
        useContext(SampleContext)

    const [selectedRadioId, setSelectedRadioId] = useState<number | null>(null)

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const [id, days] = e.target.value.split("_").map(Number)
        setImportedList({ id, days, type })
        setSelectedRadioId(id)
    }

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const [id, days] = e.target.value.split("_").map(Number)
        setImportedList({ id, days, type })
    }

    return (
        <li className="sample-select-type-row element-row flex justify-between items-center gap-2 border-t border-gray-300 first:border-0 sm:hover:text-[var(--primary)]">
            <span className="relative round w-[21px] h-[21px]">
                <input
                    id={`${options[0].id}_${options[0].tripLength}`}
                    type="radio"
                    name="listSampleId"
                    value={`${options[0].id}_${options[0].tripLength}`}
                    onChange={handleRadioChange}
                    className="mr-2"
                    disabled={isPending}
                />
                <span className="label"></span>
            </span>
            <label
                className="py-3 grow cursor-pointer"
                htmlFor={`${options[0].id}_${options[0].tripLength}`}
            >
                {type}
            </label>
            {options[0].tripLength && (
                <select
                    className="dark animated rounded-full bg-[var(--primary)] text-white border-0 text-sm py-1 cursor-pointer"
                    disabled={isPending}
                    value={`${importedList.id}_${importedList.days}`}
                    onChange={handleSelectChange}
                >
                    {options.map((element) => (
                        <Option
                            key={element.id}
                            {...element}
                        />
                    ))}
                </select>
            )}
        </li>
    )
}

const Option = ({ id, tripLength }: TSampleListOptions) => {
    return <option value={`${id}_${tripLength}`}>{tripLength} dni</option>
}
