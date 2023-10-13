"use client"

import IconPen from "../icons/pen"
import IconBin from "../icons/bin"

export default function AppContentElement({
    name,
    done,
    index,
    category
}: {
    name: string
    done: boolean
    index: number
    // category: string[]
}) {
    return (
        <li className="element-row px-1 border-t flex gap-3 items-stretch hover:bg-slate-50">
            <label className="flex py-2 gap-2 grow text-sm cursor-pointer hover:text-[var(--primary)]">
                <span className="relative round">
                    <input
                        type="checkbox"
                        defaultChecked={done}
                        className="mr-2"
                        id={`element-${index}`}
                    />
                    <span className="label"></span>
                </span>
                <span className="grow">{name}</span>
            </label>
            <div className="element-edit flex">
                <button className="px-1 hover:text-[var(--primary)]">
                    <IconPen />
                </button>
                <button className="px-1 hover:text-[var(--primary)]">
                    <IconBin />
                </button>
            </div>
        </li>
    )
}
