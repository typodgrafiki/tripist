"use client"

import IconPen from "../icons/pen"
import IconBin from "../icons/bin"
import { Categories } from "@/context/AppContext"
import { removeElement } from "@/actions/removeElement"

export default function AppContentElement({
    name,
    done,
    index,
    id,
    category,
}: {
    name: string
    done: boolean
    index: number
    id: number
    category: Categories[]
}) {
    return (
        <li className="element-row relative border-t flex gap-3 items-stretch hover:bg-slate-50 sm:px-1">
            <label className="flex px-5 py-2 gap-2 grow text-sm cursor-pointer hover:text-[var(--primary)] sm:px-0">
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

            {category && (
                <>
                    {category.length > 0 && (
                        <>
                            <div className="element-categories hidden sm:flex sm:item-center sm:gap-1">
                                <span className="block text-xs bg-slate-200 rounded-md self-center px-2 py-1 max-w-[7rem] text-ellipsis overflow-hidden whitespace-nowrap">
                                    {category[0].name}
                                </span>
                                {category.length > 1 && (
                                    <>
                                        <span className="block text-xs bg-slate-200 rounded-md self-center px-2 py-1">
                                            ...
                                        </span>
                                    </>
                                )}
                            </div>
                        </>
                    )}
                </>
            )}

            <div className="element-edit flex absolute top-0 bottom-0 right-0">
                <button className="px-1 hover:text-[var(--primary)]">
                    <IconPen />
                </button>
                <ButtonBin
                    key={id}
                    id={id}
                />
            </div>
        </li>
    )
}

const ButtonBin = ({ id }: { id: number }) => {
    const handleRemove = async () => {
        try {
            const response = await removeElement(id)
            console.log(response)
            console.log("Element usunięty pomyślnie")
        } catch (error) {
            console.error("Wystąpił błąd podczas usuwania elementu:", error)
        }
    }

    return (
        <button
            className="px-1 hover:text-[var(--primary)]"
            onClick={handleRemove}
        >
            <IconBin />
        </button>
    )
}
