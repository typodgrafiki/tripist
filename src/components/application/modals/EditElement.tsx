"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { useGlobalContext } from "@/context/AppContext"
import { useModal } from "@/context/ModalContext"
import ProgressBar from "../buttons/progressBar"
import { ListsProps } from "@/context/AppContext"
import { Categories } from "@/context/AppContext"

export default function EditElement({
    id,
    name,
    category,
}: {
    id: number
    name: string
    category: Categories[]
}) {
    const [nameInput, setNameInput] = useState(name)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const formRef = useRef<HTMLFormElement | null>(null)
    const { listActive, setListActive } = useGlobalContext()
    const { setIsModalOpen } = useModal()
    const [categories, setCategories] = useState<Categories[]>([])

    // const close = () => {
    // setName("")
    // setSuccess(false)
    // setIsModalOpen(false)
    // }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const dataToSend = {
            name: nameInput,
            categories: categories,
        }

        console.log(dataToSend)

        try {
            setLoading(true)
            // Wyślij żądanie fetch do API, aby zapisać zmiany
            const res = await fetch(`/api/element/edit/${id}`, {
                method: "POST", // Może to być POST, PUT lub inna metoda w zależności od API
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataToSend),
            })

            if (res.ok) {
                setSuccess(true)

                // Tutaj możesz także zaktualizować stany categories i activeElements, jeśli masz dostęp do odpowiednich danych z API

                // Wyczyść pole "name"
                setNameInput("")
            } else {
                setError(true)
            }
        } catch (error) {
            console.error(error)
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        setNameInput(newValue)
    }

    const showCategories = async () => {
        try {
            const res = await fetch(`/api/categories`)
            const data = await res.json()
            const myCategories = data.body

            const combinedArray = myCategories.map((item: Categories) => ({
                ...item,
                add: category.some((secondItem) => secondItem.id === item.id),
            }))

            setCategories(combinedArray)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        showCategories()
    }, [])

    return (
        <>
            <form
                ref={formRef}
                onSubmit={handleSubmit}
            >
                <div className="mb-4">
                    <input
                        type="text"
                        value={nameInput}
                        placeholder="np. Suszarka"
                        className="form-control w-full"
                        onChange={handleInputChange}
                        disabled={success}
                    />
                    {error && (
                        <div className="text-red-600 text-sm mt-1">
                            Nie zapisano zmian. Spróbuj ponownie.
                        </div>
                    )}
                </div>
                <ul className="mb-5">
                    {categories?.map((element) => (
                        <li key={element.id}>
                            <label className="category-list cursor-pointer">
                                <input
                                    type="checkbox"
                                    defaultChecked={element.add}
                                    className="hidden"
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
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="horizontal"
                                        />
                                        <path
                                            d="M12 6.5L1 6.5"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>

                                    {/* {element.id} */}
                                    {element.name}
                                </span>
                            </label>
                        </li>
                    ))}
                </ul>

                <div className="flex justify-between">
                    <ButtonDelete id={id} />
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
                                Dodano
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
                </div>
            </form>
        </>
    )
}

const ButtonDelete = ({ id }: { id: number }) => {
    const [loading, setLoading] = useState(false)
    const [success, setSucceess] = useState(false)
    const { activeElements, setActiveElements } = useGlobalContext()

    const handleDelete = async (e) => {
        e.preventDefault()

        try {
            await setLoading(true)
            const res = await fetch(`/api/elements/${id}`, {
                method: "DELETE",
            })
            if (res.ok) {
                const updatedElements = activeElements.filter(
                    (element) => element.id !== id
                )

                setActiveElements(updatedElements)
                setSucceess(true)
            } else {
                console.error("Błąd pobierania danych")
            }
            setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <button
                className="btn btn-error"
                onClick={handleDelete}
            >
                Usuń pozycję -{loading && "LOADING"}
            </button>
            {success && "Usunieto"}
        </>
    )
}