"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { useRouter } from "next/navigation"
import { useModal } from "@/context/ModalContext"
import { fetchAllCategories } from "@/actions/axiosActions"
import { focusInput, mergeCategoriesWithAssignment } from "@/utils/utils"
import { ICategories } from "@/types/types"

export default function EditElement({
    id,
    name: itemName,
    categories: assignedCategories,
}: {
    id: number
    name: string
    categories: ICategories[]
}) {
    const [name, setName] = useState(itemName)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const formRef = useRef<HTMLFormElement | null>(null)
    const inputRef = useRef<HTMLInputElement | null>(null)
    const { closeModal } = useModal()

    const [mergedCategories, setMergedCategories] = useState<ICategories[]>([])

    async function fetchAndMergeCategories() {
        // Pobierz wszystkie kategorie, na przykład za pomocą Axios
        const allCategories = await fetchAllCategories()

        // Przetwarzanie danych i aktualizacja stanu
        const merged = await mergeCategoriesWithAssignment(
            allCategories,
            assignedCategories
        )
        setMergedCategories(merged)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("send")
    }

    const handleSelectCategories = async () => {
        // const { name, type, value, checked } = e.target
    }

    useEffect(() => {
        focusInput(inputRef)
    }, [])

    useEffect(() => {
        fetchAndMergeCategories()
    }, [assignedCategories])

    return (
        <>
            <h3 className="title mb-3 font-medium text-base">
                Edycja elementu
            </h3>
            <form
                ref={formRef}
                onSubmit={handleSubmit}
            >
                <div className="mb-4">
                    <input
                        name="name"
                        type="text"
                        value={name}
                        placeholder="np. Suszarka"
                        className="form-control w-full"
                        onChange={(e) => setName(e.target.value)}
                        ref={inputRef}
                    />
                    {error && (
                        <div className="text-red-600 text-sm mt-1">
                            Nie zapisano zmian. Spróbuj ponownie.
                        </div>
                    )}
                </div>
                <ul className="mb-5">
                    {/* 
                    // TODO dodać loading kategorii 
                    */}
                    {mergedCategories?.map((element) => (
                        <li
                            key={element.id}
                            className={success || loading ? "opacity-40" : ""}
                        >
                            <label className="category-list cursor-pointer">
                                <input
                                    name="categories"
                                    value={JSON.stringify({
                                        id: element.id,
                                        name: element.name,
                                        userId: element.userId,
                                    })}
                                    type="checkbox"
                                    defaultChecked={element.asigned}
                                    className="hidden"
                                    onChange={handleSelectCategories}
                                    disabled={success || loading}
                                />
                                <span>
                                    <svg
                                        width="13"
                                        height="13"
                                        viewBox="0 0 13 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="svg-stroke inline-block mr-1 relative -top-[2px]"
                                    >
                                        <path
                                            d="M6.5 1V12"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="horizontal"
                                        />
                                        <path
                                            d="M12 6.5L1 6.5"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    {element.name} /{element.id} /
                                    {element.userId} /
                                    {element.asigned ? "+" : "-"}
                                </span>
                            </label>
                        </li>
                    ))}
                </ul>

                <div className="flex justify-between flex-row-reverse">
                    <button
                        type="submit"
                        className={`flex justify-center items-center btn btn-primary ${
                            success && "btn-green"
                        }`}
                        disabled={success || loading}
                    >
                        {loading ? (
                            <div className="loader small"></div>
                        ) : success ? (
                            <>
                                Zapisano
                                <svg
                                    width="9"
                                    height="7"
                                    viewBox="0 0 9 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="ml-2"
                                >
                                    <path
                                        d="M1 3.08333L3.57895 6L8 1"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </>
                        ) : (
                            "Zapisz"
                        )}
                    </button>
                    <ButtonDelete
                        id={id}
                        dis={success || loading}
                    />
                </div>
            </form>
        </>
    )
}

const ButtonDelete = ({ id, dis }: { id: number; dis: boolean }) => {
    return (
        <>
            {/* <button
                className={`btn btn-error ${
                    loading ? "bg-red-600 text-white" : ""
                }`}
                onClick={handleDelete}
                disabled={success || loading || dis}
            >
                {success ? (
                    <>
                        Usunięto
                        <svg
                            width="9"
                            height="7"
                            viewBox="0 0 9 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block svg-stroke ml-2"
                        >
                            <path
                                d="M1 3.08333L3.57895 6L8 1"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </>
                ) : loading ? (
                    <>
                        Usuwanie
                        <div className="loader small inline-block ml-2 relative top-[2px]"></div>
                    </>
                ) : (
                    "Usuń pozycję -"
                )}
            </button> */}
        </>
    )
}
