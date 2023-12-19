"use client"

import { useState } from "react"
import {
    TSampleListStatus,
    TSampleType,
    TSampleProps,
    TSampleList,
} from "@/types/types"
import ArrowDown from "../../icons/arrowDown"

export default function SampleType({
    templates,
    fullName,
    importedId,
    setImportedId,
    isPending,
    isError,
    isSuccess,
}: TSampleType & TSampleProps & TSampleListStatus) {
    const [isOpen, setIsOpen] = useState(false)

    if (templates.length === 0) return null

    return (
        <div
            className={`sample-list border-b border-gray-300 last:border-0 ${
                isOpen ? "open" : ""
            }`}
        >
            <button
                className="animated flex w-full justify-between items-center py-3 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
                disabled={isPending}
                type="button"
            >
                <span className="font-medium">{fullName}</span>
                <span className="animated text-gray-500 hover:text-gray-950">
                    {isOpen ? "zwiń" : "rozwin"}
                    <ArrowDown
                        className={`ml-1 ${
                            isOpen ? "origin-center rotate-180" : ""
                        }`}
                    />
                </span>
            </button>
            {isOpen && (
                <ul className="bg-gray-100 px-4 py-1 rounded-lg">
                    {templates.map((element) => (
                        <SampleList
                            key={element.name}
                            importedId={importedId}
                            setImportedId={setImportedId}
                            isPending={isPending}
                            isError={isError}
                            isSuccess={isSuccess}
                            {...element}
                        />
                    ))}
                </ul>
            )}
        </div>
    )
}

const SampleList = ({
    name,
    options,
    importedId,
    setImportedId,
    isPending,
    isError,
    isSuccess,
}: TSampleListStatus & TSampleList & TSampleProps) => {
    // Stan lokalny do przechowywania wybranego id
    const [selectedId, setSelectedId] = useState(options[0].id)

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newId = parseInt(e.target.value, 10)
        setSelectedId(newId)
        setImportedId(newId)
    }

    const handleRadioChange = () => {
        setImportedId(selectedId)
    }

    return (
        <li className="flex justify-between items-center gap-2 border-t border-gray-300 first:border-0">
            <label className="py-2 grow cursor-pointer">
                <input
                    type="radio"
                    name="listSampleId"
                    value={selectedId}
                    onChange={handleRadioChange}
                    className="mr-2"
                    disabled={isPending}
                />
                {name}
            </label>
            <select
                className={`animated rounded-full bg-[var(--primary)] text-white border-0 text-sm py-1 cursor-pointer ${
                    selectedId == importedId && isPending
                        ? "opacity-50"
                        : selectedId == importedId
                          ? "opacity-100"
                          : "opacity-0"
                }`}
                disabled={isPending}
                value={selectedId}
                onChange={handleSelectChange}
            >
                {options.map((element) => (
                    <option
                        key={element.id}
                        value={element.id}
                    >
                        {element.tripLength} dni
                    </option>
                ))}
            </select>
        </li>
    )
}
