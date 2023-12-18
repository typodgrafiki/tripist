"use client"

import { useState } from "react"
import { ISampleList } from "@/types/types"

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
        <div>
            <div className="flex justify-between">
                <div>{fullName}</div>
                <button onClick={() => setIsOpen(!isOpen)}>rozwin</button>
            </div>

            <ul>
                {templates.map((element) => (
                    <SampleList
                        key={element.id}
                        setImportedId={setImportedId}
                        {...element}
                    />
                ))}
            </ul>
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
            <span>- {name}</span>
            <span>{tripLength} dni</span>
        </li>
    )
}
