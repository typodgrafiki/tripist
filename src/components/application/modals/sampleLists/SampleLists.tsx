"use client"

import { useState } from "react"
import { ISampleList } from "@/types/types"
import ArrowDown from "../../icons/arrowDown"

export default function SampleType({
    id,
    templates,
    fullName,
    setImportedId,
}: {
    id: number
    templates: ISampleList[]
    fullName: string
    setImportedId: React.Dispatch<React.SetStateAction<number>>
}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-t border-gray-200 first:border-0">
            <div className="flex w-full justify-between items-center py-2">
                <div className="font-medium">{fullName}</div>
                <button onClick={() => setIsOpen(!isOpen)} className="animated text-gray-400 hover:text-gray-950" type="button">
                    rozwin
                    <ArrowDown className="ml-1" />
                </button>
            </div>

            {isOpen && (
                <ul className="bg-gray-100 py-2 px-3 rounded-lg">
                    {templates.map((element) => (
                        <SampleList
                        key={element.id}
                        setImportedId={setImportedId}
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
    id,
    tripLength,
    setImportedId,
    listTypeId,
}: ISampleList) => {
    return (
        <li className="flex justify-between gap-2">
            <span>{name}</span>
            <span>{tripLength} dni</span>
        </li>
    )
}
