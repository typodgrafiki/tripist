"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import AppContentElement from "@/components/application/content/AppContentElement"
import { useGlobalContext, ListActiveProps } from "@/context/AppContext"
import AddElements from "@/components/application/modals/AddElements"
import { useModal } from "@/context/ModalContext"
import DebugLog from "@/lib/developConsoleLog"
import DebugLogScript from "@/lib/developConsoleScripts"

export default function AppContent() {
    DebugLogScript("Content")
    const { lists, listActive, activeElements, setActiveElements } =
        useGlobalContext()
    const [loading, setLoading] = useState(true)
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null
    )
    const { setModalContent, setIsModalOpen } = useModal()

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

    const handleOpenModal = () => {
        setModalContent(<AddElements />)
        setIsModalOpen(true)
    }

    useEffect(() => {
        getListActive()
    }, [activeId])

    return (
        <>
            <DebugLog name="Content" />
            {loading ? (
                <div className="flex justify-center text-gray-600 sm:bg-white sm:shadow-lg sm:rounded-md sm:overflow-y-auto sm:py-9 sm:px-8">
                    <div className="loader"></div>
                </div>
            ) : lists.length > 0 ? (
                <>
                    {activeElements?.length > 0 ? (
                        <>
                            <div className="text-gray-600 pb-5 sm:bg-white sm:shadow-lg sm:rounded-md sm:overflow-y-auto sm:pb-7 sm:pt-6 sm:px-6">
                                <div className="flex gap-6 mb-3 mx-5 sm:mx-0 sm:mb-5 overflow-x-auto">
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
                                <ButtonAddElement
                                    handleOpenModalFn={handleOpenModal}
                                />
                            </div>
                        </>
                    ) : activeElements?.length === 0 && activeId ? (
                        <>
                            <div className="bg-white p-10 shadow-lg rounded-md text-center">
                                <p className="mb-3">
                                    Wygląda na to, że Twoja lista jest pusta.
                                    Kliknij poniżej, aby dodać pierwszą pozycję
                                    i zorganizować swój wyjazd!
                                </p>
                                <button
                                    className="btn btn-primary"
                                    onClick={handleOpenModal}
                                >
                                    Dodaj pozycję
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="bg-white p-10 shadow-lg rounded-md text-center">
                            <p className="mb-5">
                                Masz już swoje listy gotowe! Kliknij na jedną z
                                nich, aby zacząć pakować bez stresu.
                            </p>
                            <div className="flex flex-wrap justify-center gap-2">
                                {lists.map((el) => (
                                    <ListButton
                                        key={el.id}
                                        name={el.name}
                                        id={el.id}
                                        url={el.url}
                                    />
                                ))}
                            </div>
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

const ButtonAddElement = ({
    handleOpenModalFn,
}: {
    handleOpenModalFn: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void
}) => {
    DebugLogScript("ContentButtonAddElement")
    return (
        <>
            <DebugLog name="ContentButtonAddElement" />
            <button
                className="btn-add-element btn btn-primary relative text-[0] w-[80px] h-[80px] mr-7 -mt-7 z-1 text-white block rounded-full -top-1 sm:top-0"
                onClick={handleOpenModalFn}
            >
                Dodaj
            </button>
        </>
    )
}

const ButtonDisableAll = () => {
    DebugLogScript("ContentButtonAllDisabled")
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
        <>
            <DebugLog name="ContentButtonAllDisabled" />
            <button
                className="animated py-3 px-9 self-start font-medium hover:text-[var(--primary)]"
                onClick={handleClick}
            >
                Odznacz wszystko{" "}
                {loading ? (
                    <span className="loader small inline-block"></span>
                ) : (
                    "-"
                )}
            </button>
        </>
    )
}

const ListButton = ({ id, name, url }: ListActiveProps) => {
    DebugLogScript("ContentListsButton")
    const { setListActive } = useGlobalContext()
    const thisUrl = `/dashboard/${url}`

    return (
        <>
            <DebugLog name="ContentListsButton" />

            <Link
                href={thisUrl}
                className="btn btn-default btn-small"
                onClick={() =>
                    setListActive({
                        id: id,
                        name: name,
                        url: url,
                    })
                }
            >
                {name}
            </Link>
        </>
    )
}
