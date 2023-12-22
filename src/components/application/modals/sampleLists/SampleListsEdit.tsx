import React, { useRef, useState, useEffect, useContext } from "react"
import { getSampleList } from "@/actions/axiosActions"
import { SampleContext } from "@/context/SampleListContext"
import { changeSampleCustomDataToComponent, countItems } from "@/utils/utils"
import { TSampleCustomCategoryApi } from "@/types/types"
import ArrowDown from "../../icons/arrowDown"
import IconCheck from "../../icons/check"
import ModalLoading from "@/components/ui/ModalLoading"
import ModalError from "@/components/ui/ModalError"
import Button from "@/components/ui/Button"
import ArrowRight from "../../icons/arrowRight"
import ModalTitle from "@/components/ui/ModalTitle"

interface HandleItemToggle {
    (categoryName: string, itemName: string): void
}

export default function SampleListsEdit() {
    const {
        importedList,
        dataCustomList: data,
        setDataCustomList: setData,
    } = useContext(SampleContext)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = async () => {
        console.log("text")
        try {
            setIsLoading(true)
            const response = await getSampleList(importedList.id)
            const groupedItems = changeSampleCustomDataToComponent(response)
            const categoryCount = Object.keys(groupedItems).length
            setData(groupedItems)
            // setOpenPanels([true, ...Array(categoryCount - 1).fill(false)])
        } catch (err) {
            // TODO obsłuż błędy
            // setError(err)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [importedList.id]) // Efekt uruchomi się, gdy `importedList` ulegnie zmianie

    const handleItemToggle: HandleItemToggle = (categoryName, itemName) => {
        setData((prevData) => {
            const newData = { ...prevData }
            const categoryItems = newData[categoryName].map((item) => {
                if (item.name === itemName) {
                    return { ...item, checked: !item.checked }
                }
                return item
            })

            newData[categoryName] = categoryItems
            return newData
        })
    }

    // const handlePanelToggle = (panelIndex: number) => {
    //     const updatedOpenPanels = openPanels.map((_, index) =>
    //         index === panelIndex ? !openPanels[index] : false
    //     )
    //     setOpenPanels(updatedOpenPanels)
    // }

    if (isLoading) {
        return <ModalLoading>Ładowanie szczegółów listy...</ModalLoading>
    }

    if (error) {
        return (
            <ModalError>
                Nie udało się załadować szczegółów listy.
                <Button
                    className="btn btn-primary mt-4 text-sm"
                    onClick={() => fetchData()}
                    isLoading={isLoading}
                    type="button"
                >
                    Spróbuj ponownie
                    <ArrowRight className="ml-2" />
                </Button>
            </ModalError>
        )
    }

    return (
        <div>
            <ModalTitle>Dostosuj elementy na liście</ModalTitle>
            // TODO ... in progress ...
            {/* {Object.entries(data).map(([category, items], index) => (
                <SampleListsCategoryEdit
                    key={category}
                    categoryName={category}
                    items={items}
                    index={index}
                    handleItemToggle={handleItemToggle}
                    isPending={isPending}
                    isError={isError}
                    isSuccess={isSuccess}
                    isOpenPanel={openPanels[index]}
                    handlePanelToggle={handlePanelToggle}
                />
            ))} */}
        </div>
    )
}

const SampleListsCategoryEdit = ({
    categoryName,
    items,
    index,
    handleItemToggle,
    isPending,
    isError,
    isSuccess,
    isOpenPanel,
    handlePanelToggle,
}: {
    categoryName: string
    items: TSampleCustomCategoryApi[]
    index: number
    handleItemToggle: HandleItemToggle
    isOpenPanel: boolean
    handlePanelToggle: (panelIndex: number) => void
} & TSampleListStatus) => {
    const contentRef = useRef<HTMLDivElement>(null)
    const [maxHeight, setMaxHeight] = useState(0)
    const { checkedCount, totalCount } = countItems(items)

    useEffect(() => {
        if (contentRef.current) {
            setMaxHeight(contentRef.current.scrollHeight)
        }
    }, [])

    return (
        <fieldset
            className={`sample-list border-b border-gray-300 last:border-0 ${
                isOpenPanel ? "open" : ""
            }`}
        >
            <button
                className="animated flex w-full justify-between items-center py-3 cursor-pointer"
                onClick={() => handlePanelToggle(index)}
                disabled={isPending}
                type="button"
            >
                <span className="font-medium">
                    {categoryName}{" "}
                    <span className="text-gray-400 text-xs font-normal ml-1">
                        [{checkedCount}/{totalCount}]
                    </span>
                </span>
                <span className="animated text-gray-500 hover:text-gray-950">
                    {isOpenPanel ? "zwiń" : "rozwin"}
                    <ArrowDown
                        className={`ml-1 ${
                            isOpenPanel ? "origin-center rotate-180" : ""
                        }`}
                    />
                </span>
            </button>
            <div
                className="overflow-hidden animated"
                style={{ maxHeight: isOpenPanel ? `${maxHeight}px` : "0" }}
            >
                <div
                    ref={contentRef}
                    className={`bg-gray-100 rounded-lg p-4 flex flex-wrap gap-2`}
                >
                    {items.map((item, itemIndex) => (
                        <SampleListsElementEdit
                            key={itemIndex}
                            item={item}
                            itemIndex={itemIndex}
                            categoryName={categoryName}
                            handleItemToggle={handleItemToggle}
                            isPending={isPending}
                            isError={isError}
                            isSuccess={isSuccess}
                        />
                    ))}
                </div>
            </div>
        </fieldset>
    )
}

const SampleListsElementEdit = ({
    item,
    itemIndex,
    categoryName,
    handleItemToggle,
    isPending,
    isError,
    isSuccess,
}: {
    item: TSampleCustomCategoryApi
    itemIndex: number
    categoryName: string
    handleItemToggle: HandleItemToggle
} & TSampleListStatus) => {
    return (
        <label
            key={itemIndex}
            className={`block animated bg-white rounded-full px-3 pr-2 py-1 cursor-pointer ${
                item.checked
                    ? "text-[var(--primary)] hover:text-blue-700"
                    : "text-gray-400 hover:text-gray-600"
            }`}
        >
            {item.name}
            <input
                type="checkbox"
                name={`items[${item.name}]`}
                checked={item.checked}
                onChange={() => handleItemToggle(categoryName, item.name)}
                disabled={isPending}
                className="hidden"
            />
            <IconCheck
                className={`animated ml-1 -top-[1px] ${
                    item.checked ? "opacity-100" : "opacity-0"
                }`}
            />
        </label>
    )
}
