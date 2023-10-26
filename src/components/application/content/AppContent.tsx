"use client"

import { useState, useEffect } from "react"
import AppContentElement from "@/components/application/content/AppContentElement"
import { useGlobalContext } from "@/context/AppContext"
import AddElements from "@/components/application/modals/AddElements"
import { useModal } from "@/context/ModalContext"

export default function AppContent() {
    const {
        lists,
        listActive,
        setListActive,
        activeElements,
        setActiveElements,
    } = useGlobalContext()
    const [loading, setLoading] = useState(true)
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null
    )

    const { id: activeId } = listActive

    const getListActive = async () => {
        try {
            await setLoading(true)
            const res = await fetch(`/api/lists/${activeId}`)
            if (res.ok) {
                const data = await res.json()
                const result = await data.body
                await setActiveElements(result)
            } else {
                console.error("Błąd pobierania danych")
            }
            setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    const categoriesUnique = Array.from(
        new Set(
            activeElements?.flatMap((element) =>
                element.categories.map((category) => category.name)
            )
        )
    )

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category)
    }

    useEffect(() => {
        getListActive()
    }, [activeId])

    return (
        <>
            {loading ? (
                <div className="flex justify-center text-gray-600 sm:bg-white sm:shadow-lg sm:rounded-md sm:overflow-y-auto sm:py-9 sm:px-8">
                    <div className="loader"></div>
                </div>
            ) : lists.length > 0 ? (
                <>
                    {activeElements?.length > 0 ? (
                        <>
                            <div className="text-gray-600 pb-5 sm:bg-white sm:shadow-lg sm:rounded-md sm:overflow-y-auto sm:pb-8 sm:pt-7 sm:px-8">
                                <div className="flex gap-6 mb-3 mx-5 sm:mx-0 sm:mb-6 overflow-x-auto">
                                    <button
                                        onClick={() => handleCategoryChange("")}
                                        className={
                                            categoriesUnique.some(
                                                (el) => selectedCategory === el
                                            )
                                                ? "text-sm font-semibold uppercase whitespace-nowrap hover:text-[var(--primary)]"
                                                : "text-sm font-semibold uppercase whitespace-nowrap text-[var(--primary)]"
                                        }
                                    >
                                        Wszystko
                                    </button>
                                    {categoriesUnique.map((el, index) => (
                                        <button
                                            key={el + index}
                                            onClick={() =>
                                                handleCategoryChange(el)
                                            }
                                            className={
                                                selectedCategory === el
                                                    ? "text-sm font-semibold uppercase whitespace-nowrap text-[var(--primary)]"
                                                    : "text-sm font-semibold uppercase whitespace-nowrap hover:text-[var(--primary)]"
                                            }
                                        >
                                            {el}
                                        </button>
                                    ))}
                                </div>

                                <ul>
                                    {activeElements
                                        .filter(
                                            (element) =>
                                                !selectedCategory ||
                                                element.categories.some(
                                                    (category) =>
                                                        category.name ===
                                                        selectedCategory
                                                )
                                        )
                                        .map((element, index) => (
                                            <div key={element.id}>
                                                <AppContentElement
                                                    name={element.name}
                                                    done={element.status}
                                                    index={index}
                                                    id={element.id}
                                                    category={
                                                        element.categories
                                                    }
                                                />
                                            </div>
                                        ))}
                                </ul>
                            </div>
                            <div className="flex justify-between gap-4 sticky bottom-0 left-0 right-0  bg-gray-200 sm:static sm:bg-transparent">
                                <ButtonDisableAll />
                                <ButtonAddElement />
                            </div>
                        </>
                    ) : activeElements?.length === 0 && activeId ? (
                        <>
                            <div className="bg-white p-10 shadow-lg rounded-md">
                                Dodaj pozycje
                            </div>
                            <div className="flex justify-end gap-4">
                                <ButtonAddElement />
                            </div>
                        </>
                    ) : (
                        <div className="bg-white p-10 shadow-lg rounded-md">
                            Zaznacz którąś z list
                        </div>
                    )}
                </>
            ) : (
                <div className="bg-white p-10 shadow-lg rounded-md ">
                    <div className="text-center">
                        <p className="text-slate-700 mb-5">
                            Zauważyliśmy, że Twój panel jest jeszcze pusty. Ale
                            nie martw się, jesteśmy tu, by Ci pomóc zacząć!
                            Stworzenie pierwszej listy rzeczy do zabrania na
                            wakacje jest naprawdę proste i szybkie. Nie czekaj!
                            Zacznij planować swój wyjazd teraz i upewnij się, że
                            masz wszystko, czego potrzebujesz, aby cieszyć się
                            idealnymi wakacjami.
                        </p>
                        <button className="btn btn-primary transition-colors">
                            Stwórz swoją pierwszą listę
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

const ButtonAddElement = () => {
    const { setModalContent, setIsModalOpen } = useModal()

    const handleOpenModal = () => {
        setModalContent(<AddElements />)
        setIsModalOpen(true)
    }

    return (
        <button
            className="btn-add-element btn btn-primary relative text-[0] w-[80px] h-[80px] mr-7 -mt-7 z-1 text-white block rounded-full -top-1 sm:top-0"
            onClick={handleOpenModal}
        >
            Add
        </button>
    )
}

const ButtonDisableAll = () => {
    const [loading, setLoading] = useState(false)
    const { activeElements, setActiveElements } = useGlobalContext()

    const handleClick = async () => {
        const elementsId = activeElements
            .map((item) => item.id.toString())
            .join(",")
        try {
            setLoading(true)
            const res = await fetch(`/api/elements/${elementsId}`, {
                method: "PUT",
            })
            const data = await res.json()

            const dataElementsId = await data.elementsId

            if (res.ok) {
                const updatedElements = activeElements.map((element) => ({
                    ...element, // Rozprzestrzeniaj istniejące pola obiektu
                    status: false, // Zmieniaj status na false
                }))
                setActiveElements(updatedElements)
            } else {
                console.error("Błąd pobierania danych")
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <button
            className="py-3 px-9 self-start font-medium hover:text-[var(--primary)]"
            onClick={handleClick}
        >
            Odznacz wszystko{" "}
            {loading ? (
                <span className="loader small inline-block"></span>
            ) : (
                "-"
            )}
        </button>
    )
}
