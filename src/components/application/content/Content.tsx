// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import AppContentElement from "@/components/application/content/AppContentElement"
// import { useGlobalContext, ListActiveProps } from "@/context/AppContext"
// import AddElements from "@/components/application/modals/AddElements"
// import { useModal } from "@/context/ModalContext"
// import DebugLog from "@/utils/developConsoleLog"
// import DebugLogScript from "@/utils/developConsoleScripts"

// export default function AppContent() {
//     DebugLogScript("Content")
//     const { lists, listActive, activeElements, setActiveElements } =
//         useGlobalContext()
//     const [loading, setLoading] = useState(true)
//     const [selectedCategory, setSelectedCategory] = useState<string | null>(
//         null
//     )
//     const { setModalContent, setIsModalOpen } = useModal()

//     const { id: activeId } = listActive

//     const getListActive = async () => {
//         try {
//             await setLoading(true)
//             const res = await fetch(`/api/lists/${activeId}`)
//             if (res.ok) {
//                 const data = await res.json()
//                 const result = await data.body

//                 await setActiveElements(result)
//             } else {
//                 console.error("Błąd pobierania danych")
//             }
//             setLoading(false)
//         } catch (error) {
//             console.error(error)
//         }
//     }

//     const categoriesUnique = Array.from(
//         new Set(
//             activeElements?.flatMap((element) =>
//                 element.categories.map((category) => category.name)
//             )
//         )
//     )

//     const handleCategoryChange = (category: string) => {
//         setSelectedCategory(category)
//     }

//     const handleOpenModal = () => {
//         setModalContent(<AddElements />)
//         setIsModalOpen(true)
//     }

//     useEffect(() => {
//         getListActive()
//     }, [activeId])

//     return (
//         <>
//             <DebugLog name="Content" />
//             {loading ? (
//                 <div className="flex justify-center text-gray-600 sm:bg-white sm:shadow-lg sm:rounded-md sm:overflow-y-auto sm:py-9 sm:px-8">
//                     <div className="loader"></div>
//                 </div>
//             ) : lists.length > 0 ? (
//                 <>
//                     {activeElements?.length > 0 ? (
//                         <>
//                             <div className="text-gray-600 pb-5 sm:bg-white sm:shadow-lg sm:rounded-md sm:overflow-y-auto sm:pb-7 sm:pt-6 sm:px-6">
//                                 <div className="flex gap-6 mb-3 mx-5 sm:mx-0 sm:mb-5 overflow-x-auto">
//                                     <button
//                                         onClick={() => handleCategoryChange("")}
//                                         className={
//                                             categoriesUnique.some(
//                                                 (el) => selectedCategory === el
//                                             )
//                                                 ? "text-sm font-semibold uppercase whitespace-nowrap hover:text-[var(--primary)]"
//                                                 : "text-sm font-semibold uppercase whitespace-nowrap text-[var(--primary)]"
//                                         }
//                                     >
//                                         Wszystko
//                                     </button>
//                                     {categoriesUnique.map((el, index) => (
//                                         <button
//                                             key={el + index}
//                                             onClick={() =>
//                                                 handleCategoryChange(el)
//                                             }
//                                             className={
//                                                 selectedCategory === el
//                                                     ? "text-sm font-semibold uppercase whitespace-nowrap text-[var(--primary)]"
//                                                     : "text-sm font-semibold uppercase whitespace-nowrap hover:text-[var(--primary)]"
//                                             }
//                                         >
//                                             {el}
//                                         </button>
//                                     ))}
//                                 </div>

//                                 <ul>
//                                     {activeElements
//                                         .filter(
//                                             (element) =>
//                                                 !selectedCategory ||
//                                                 element.categories.some(
//                                                     (category) =>
//                                                         category.name ===
//                                                         selectedCategory
//                                                 )
//                                         )
//                                         .map((element, index) => (
//                                             <div key={element.id}>
//                                                 <AppContentElement
//                                                     name={element.name}
//                                                     done={element.status}
//                                                     index={index}
//                                                     id={element.id}
//                                                     category={
//                                                         element.categories
//                                                     }
//                                                 />
//                                             </div>
//                                         ))}
//                                 </ul>
//                             </div>
//                             <div className="flex justify-between gap-4 sticky bottom-0 left-0 right-0  bg-gray-200 sm:static sm:bg-transparent">
//                                 <ButtonDisableAll />
//                                 <ButtonAddElement
//                                     handleOpenModalFn={handleOpenModal}
//                                 />
//                             </div>
//                         </>
//                     ) : activeElements?.length === 0 && activeId ? (
//                         <>
//                             <div className="bg-white p-10 shadow-lg rounded-md text-center">
//                                 <p className="mb-3">
//                                     Wygląda na to, że Twoja lista jest pusta.
//                                     Kliknij poniżej, aby dodać pierwszą pozycję
//                                     i zorganizować swój wyjazd!
//                                 </p>
//                                 <button
//                                     className="btn btn-primary"
//                                     onClick={handleOpenModal}
//                                 >
//                                     Dodaj pozycję
//                                 </button>
//                             </div>
//                         </>
//                     ) : (
//                         <div className="bg-white p-10 shadow-lg rounded-md text-center">
//                             <p className="mb-5">
//                                 Masz już swoje listy gotowe! Kliknij na jedną z
//                                 nich, aby zacząć pakować bez stresu.
//                             </p>
//                             <div className="flex flex-wrap justify-center gap-2">
//                                 {lists.map((el) => (
//                                     <ListButton
//                                         key={el.id}
//                                         name={el.name}
//                                         id={el.id}
//                                         url={el.url}
//                                     />
//                                 ))}
//                             </div>
//                         </div>
//                     )}
//                 </>
//             ) : (
//                 <div className="bg-white p-10 shadow-lg rounded-md ">
//                     <div className="text-center">
//                         <p className="text-slate-700 mb-5">
//                             Zauważyliśmy, że Twój panel jest jeszcze pusty. Ale
//                             nie martw się, jesteśmy tu, by Ci pomóc zacząć!
//                             Stworzenie pierwszej listy rzeczy do zabrania na
//                             wakacje jest naprawdę proste i szybkie. Nie czekaj!
//                             Zacznij planować swój wyjazd teraz i upewnij się, że
//                             masz wszystko, czego potrzebujesz, aby cieszyć się
//                             idealnymi wakacjami.
//                         </p>
//                         <button className="btn btn-primary transition-colors">
//                             Stwórz swoją pierwszą listę
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </>
//     )
// }

// const ButtonAddElement = ({
//     handleOpenModalFn,
// }: {
//     handleOpenModalFn: (
//         event: React.MouseEvent<HTMLButtonElement, MouseEvent>
//     ) => void
// }) => {
//     DebugLogScript("ContentButtonAddElement")
//     return (
//         <>
//             <DebugLog name="ContentButtonAddElement" />
//             <button
//                 className="btn-add-element btn btn-primary relative text-[0] w-[80px] h-[80px] mr-7 -mt-7 z-1 text-white block rounded-full -top-1 sm:top-0"
//                 onClick={handleOpenModalFn}
//             >
//                 Dodaj
//             </button>
//         </>
//     )
// }

// const ListButton = ({ id, name, url }: ListActiveProps) => {
//     DebugLogScript("ContentListsButton")
//     const { setListActive } = useGlobalContext()
//     const thisUrl = `/dashboard/${url}`

//     return (
//         <>
//             <DebugLog name="ContentListsButton" />

//             <Link
//                 href={thisUrl}
//                 className="btn btn-default btn-small"
//                 onClick={() =>
//                     setListActive({
//                         id: id,
//                         name: name,
//                         url: url,
//                     })
//                 }
//             >
//                 {name}
//             </Link>
//         </>
//     )
// }

"use client"

import { useState, useMemo } from "react"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getListData } from "@/actions/axiosActions"
import { IElements, IList } from "@/types/types"
import { findUniqueCategories, sortElements } from "@/utils/utils"
import Title from "@/components/application/title/Title"
import ContentElement from "@/components/application/content/ContentElement"
import ButtonDisableAll from "@/components/application/content/ButtonDisableAll"
import IconMore from "@/components/application/icons/more"
import IconSwitch from "@/components/application/icons/switch"
import ButtonDeleteList from "@/components/application/buttons/ButtonDeleteList"
import ButtonDuplicate from "@/components/application/buttons/ButtonDuplicate"
import ButtonEdit from "@/components/application/buttons/edit"
import { useModal } from "@/context/ModalContext"
import AddElements from "@/components/application/modals/AddElements"
import ButtonAddElement from "../buttons/ButtonAddItem"
import ButtonAddItem from "../buttons/ButtonAddItem"
import Sort from "../modals/Sort"
import Button from "@/components/ui/Button"
import IconPen from "../icons/pen"
import CreateList from "../modals/CreateList"

interface IListResponse {
    data: {
        body: IList
    }
}

export default function Content({ id }: { id: string }) {
    const [selectedCategory, setSelectedCategory] = useState("")
    const { isModalOpen, setIsModalOpen, modalContent, setModalContent } =
        useModal()

    const {
        data: listData,
        isLoading: isLoadingTitle,
        isError: isErrorTitle,
    } = useQuery({
        queryKey: ["listData", id],
        queryFn: async () => await getListData(id),
        select: (response) => {
            if (response) {
                const { elements, ...bodyWithoutElements } = response.data.body
                return bodyWithoutElements as IList
            }
        },
    })

    const {
        data: elements,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["elements", id],
        queryFn: async () => {
            const response = await getListData(id)
            if (response) {
                return response.data.body.elements as IElements[]
            }
        },
    })

    // TODO Te 2 zapytania maja sie wykonywac jednoczesnie a niedno po drugim

    const categoriesUnique = useMemo(
        () => findUniqueCategories(elements || []),
        [elements]
    )

    // return <Title loading />

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>
    if (!elements || !listData) return <div>No data</div>

    const { name, id: listId } = listData

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category)
    }

    const handleOpenModal = () => {
        setModalContent(<AddElements />)
        setIsModalOpen(true)
    }

    const handleEditList = () => {
        setModalContent(<CreateList editList={{ name: name, id: listId }} />)
        setIsModalOpen(true)
    }

    // TODO Dac mozliwosc zmiany sortowania przez uzytkownika
    const sortBy = "createdAt"
    const sortDirection = "desc"

    const sortedAndFilteredElements = sortElements(
        elements.filter(
            (element) =>
                !selectedCategory ||
                element.categories.some(
                    (category) => category.name === selectedCategory
                )
        ),
        sortBy,
        sortDirection
    )

    return (
        <>
            <div className="flex justify-between gap-2">
                <Title title={name} />
                <div className="flex">
                    {/* <button className="px-3 pl-4 sm:hidden">
                        <IconSwitch />
                    </button>
                    <button className="px-3 pr-5 sm:hidden">
                        <IconMore />
                    </button> */}
                    <Button
                        className="animated hidden sm:inline-block px-3 mb-2 hover:text-[var(--primary)] hover:bg-white rounded-full"
                        onClick={handleEditList}
                    >
                        <IconPen />
                    </Button>
                    <ButtonDuplicate
                        listId={listId}
                        name={name}
                    />
                    <ButtonDeleteList listId={listId} />
                </div>
            </div>

            {elements?.length > 0 ? (
                <>
                    <div className="text-gray-600 pb-5 sm:bg-white sm:shadow-lg sm:rounded-md sm:overflow-y-auto sm:pb-7 sm:pt-6 sm:px-6">
                        {/* 
                        // TODO zmiana na komponent FilterCategories 
                        */}
                        <div className="flex mb-3 sm:mb-5 justify-between">
                            <div className="flex gap-6 mx-5 sm:mx-0 overflow-x-auto">
                                <button
                                    onClick={() => handleCategoryChange("")}
                                    className={`text-sm font-semibold uppercase whitespace-nowrap 
                                ${
                                    categoriesUnique?.some(
                                        (el) => selectedCategory === el
                                    )
                                        ? "hover:text-[var(--primary)]"
                                        : "text-[var(--primary)]"
                                }`}
                                >
                                    Wszystko
                                </button>
                                {categoriesUnique?.map((el, index) => (
                                    <button
                                        key={el + index}
                                        onClick={() => handleCategoryChange(el)}
                                        className={`text-sm font-semibold uppercase whitespace-nowrap 
                                ${
                                    selectedCategory === el
                                        ? "text-[var(--primary)]"
                                        : "text-sm hover:text-[var(--primary)]"
                                }
                                            `}
                                    >
                                        {el}
                                    </button>
                                ))}
                            </div>
                            <Sort />
                        </div>
                        <ul>
                            {sortedAndFilteredElements.map((element) => (
                                <div key={element.id}>
                                    <ContentElement {...element} />
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className="flex justify-between gap-4 sticky bottom-0 left-0 right-0  bg-gray-200 sm:static sm:bg-transparent">
                        <ButtonDisableAll listId={listId} />
                        <Button
                            onClick={handleOpenModal}
                            className="btn-add-element btn btn-primary relative text-[0] w-[80px] h-[80px] mr-7 -mt-7 z-1 text-white block rounded-full -top-1 sm:top-0"
                        >
                            Dodaj element
                        </Button>
                    </div>
                </>
            ) : elements?.length === 0 ? (
                <>
                    {/* 
                    // TODO zmiana na komponent  
                    */}
                    <div className="bg-white p-10 shadow-lg rounded-md text-center">
                        <p className="mb-3">
                            Wygląda na to, że Twoja lista jest pusta. Kliknij
                            poniżej, aby dodać pierwszą pozycję i zorganizować
                            swój wyjazd!
                        </p>
                        <Button
                            className="btn btn-primary"
                            onClick={handleOpenModal}
                        >
                            Dodaj element
                        </Button>
                    </div>
                </>
            ) : null}
        </>
    )
}
