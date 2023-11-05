"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { useGlobalContext, Categories } from "@/context/AppContext"
import { useModal } from "@/context/ModalContext"
import ProgressBar from "../buttons/progressBar"
import { focusInput } from "@/utils/utils"
import DebugLog from "@/utils/developConsoleLog"
import DebugLogScript from "@/utils/developConsoleScripts"

interface IFormData {
    name: string
    categories: ICat[]
}
interface ICat {
    id: number
    name: string // Add this property
    userId: string // Add this property
}

export default function EditElement({
    id,
    name,
    category,
}: {
    id: number
    name: string
    category: Categories[]
}) {
    DebugLogScript("ModalEditElement")
    const [formData, setFormData] = useState<IFormData>({
        name: name,
        categories: [],
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const formRef = useRef<HTMLFormElement | null>(null)
    const inputRef = useRef<HTMLInputElement | null>(null)
    const { activeElements, setActiveElements } = useGlobalContext()
    const { setIsModalOpen } = useModal()
    const [categories, setCategories] = useState<Categories[]>([])

    const close = () => {
        setIsModalOpen(false)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            setLoading(true)
            // Wyślij żądanie fetch do API, aby zapisać zmiany
            const res = await fetch(`/api/element/edit/${id}`, {
                method: "PUT", // Może to być POST, PUT lub inna metoda w zależności od API
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            if (res.ok) {
                await setSuccess(true)

                const updatedValue = {
                    name: formData.name, // Nowa nazwa
                    categories: formData.categories, // Nowe kategorie, możesz dostosować do własnych potrzeb
                }

                const updatedState = activeElements.map((item) => {
                    if (item.id === id) {
                        return { ...item, ...updatedValue } // Aktualizuj obiekt o id 439
                    }
                    return item // Pozostałe obiekty pozostaw niezmienione
                })

                setActiveElements(updatedState)
                // zamkniecie modal
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

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, type, value, checked } = e.target

        if (type === "checkbox" && name === "categories") {
            const categoryObj = JSON.parse(value)
            const categoryId = categoryObj.id
            const categoryName = categoryObj.name
            const categoryUserId = categoryObj.userId

            await setFormData((prevData) => {
                if (checked) {
                    // Jeśli checkbox został zaznaczony, dodaj wartość do tablicy categories
                    return {
                        ...prevData,
                        categories: [
                            ...prevData.categories,
                            {
                                id: categoryId,
                                name: categoryName,
                                userId: categoryUserId,
                            },
                        ],
                    }
                } else {
                    // Jeśli checkbox został odznaczony, usuń wartość z tablicy categories
                    return {
                        ...prevData,
                        categories: prevData.categories.filter(
                            (category) => category.id !== categoryId
                        ),
                    }
                }
            })
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }))
        }
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

            const categoriesActiveId = combinedArray
                .filter((item: Categories) => item.add === true) // Filtruj tylko obiekty z add: true
                .map((item: Categories) => ({
                    id: item.id,
                    name: item.name,
                    userId: item.userId,
                })) // Wyodrębnij numery id

            setFormData((prevData) => ({
                ...prevData,
                categories: categoriesActiveId,
            }))
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        showCategories()
        focusInput(inputRef)
    }, [])

    return (
        <>
            <DebugLog name="ModalEditElement" />
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
                        value={formData.name}
                        placeholder="np. Suszarka"
                        className="form-control w-full"
                        disabled={success}
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    {error && (
                        <div className="text-red-600 text-sm mt-1">
                            Nie zapisano zmian. Spróbuj ponownie.
                        </div>
                    )}
                </div>
                <ul className="mb-5">
                    {categories?.map((element) => (
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
                                    defaultChecked={element.add}
                                    className="hidden"
                                    onChange={handleChange}
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
                                    {element.name}
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
            {success && <ProgressBar closeFn={close} />}
        </>
    )
}

const ButtonDelete = ({ id, dis }: { id: number; dis: boolean }) => {
    const [loading, setLoading] = useState(false)
    const [success, setSucceess] = useState(false)
    const { activeElements, setActiveElements } = useGlobalContext()
    const { setIsModalOpen } = useModal()

    const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        try {
            await setLoading(true)
            const res = await fetch(`/api/elements/${id}`, {
                method: "DELETE",
            })
            if (res.ok) {
                const updatedElements = await activeElements.filter(
                    (element) => element.id !== id
                )

                await setActiveElements(updatedElements)
                await setSucceess(true)

                setTimeout(() => {
                    setIsModalOpen(false)
                }, 2000)
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
            <DebugLog name="ModalAddElementBtnDelete" />
            <button
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
            </button>
        </>
    )
}
