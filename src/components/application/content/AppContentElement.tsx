"use client"

import { useState } from "react"
import { useGlobalContext } from "@/context/AppContext"
import { useModal } from "@/context/ModalContext"
import EditElement from "@/components/application/modals/EditElement"
import IconPen from "../icons/pen"
import IconBin from "../icons/bin"
import { Categories } from "@/context/AppContext"

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
    const [loading, setLoading] = useState(false)
    const { activeElements, setActiveElements } = useGlobalContext()
    let timeout: NodeJS.Timeout

    const handleChange = async () => {
        try {
            await setLoading(true)
            const res = await fetch(`/api/element/edit/${id}`, {
                method: "PUT",
            })
            const data = await res.json()
            const idChange = await data.idChange

            if (res.ok) {
                const updatedElements = await activeElements.map((element) => {
                    if (element.id === idChange) {
                        return { ...element, status: !element.status }
                    }
                    return element
                })
                setActiveElements(updatedElements)
            } else {
                console.error("Błąd pobierania danych")
            }

            setLoading(false)
        } catch (error) {
            console.error(error)
        }

        if (timeout) {
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
            // tu powinien wykonywac sie fetch
            clearTimeout(timeout)
        }, 2000)
    }

    return (
        <li className="element-row relative border-t flex gap-3 items-stretch hover:bg-slate-50 sm:px-1">
            <label className="flex px-5 py-2 gap-2 grow text-sm cursor-pointer hover:text-[var(--primary)] sm:px-0">
                <span className="relative round">
                    <input
                        type="checkbox"
                        checked={done}
                        className="mr-2"
                        id={`element-${index}`}
                        onChange={handleChange}
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
                <ButtonEdit
                    key={id}
                    id={id}
                    name={name}
                    category={category}
                />
                <ButtonDelete
                    key={id}
                    id={id}
                />
            </div>
        </li>
    )
}

const ButtonDelete = ({ id }: { id: number }) => {
    const [loading, setLoading] = useState(false)
    const { listActive, setListActive, activeElements } = useGlobalContext()

    const handleRemove = async () => {
        try {
            await setLoading(true)
            const res = await fetch(`/api/elements/${id}`, {
                method: "DELETE",
            })
            if (res.ok) {
                const updatedElements = activeElements.filter(
                    (element) => element.id !== id
                )

                const updatedListActive = {
                    ...listActive,
                    updatedElements,
                }

                setListActive(updatedListActive)
            } else {
                console.error("Błąd pobierania danych")
            }
            setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <button
            className="px-1 hover:text-[var(--primary)]"
            onClick={handleRemove}
            disabled={loading}
        >
            {loading ? <div className="loader small"></div> : <IconBin />}
        </button>
    )
}

const ButtonEdit = ({
    id,
    name,
    category,
}: {
    id: number
    name: string
    category: Categories[]
}) => {
    // const { listActive, setListActive } = useGlobalContext()

    const { setModalContent, setIsModalOpen } = useModal()

    const handleEdit = async () => {
        setModalContent(
            <EditElement
                id={id}
                name={name}
                category={category}
            />
        )
        setIsModalOpen(true)
    }

    return (
        <button
            className="px-1 hover:text-[var(--primary)]"
            onClick={handleEdit}
        >
            <IconPen />
        </button>
    )
}
