import React, { useRef, useState, useEffect, useContext } from "react"
import { getSampleList } from "@/actions/axiosActions"
import { SampleContext } from "@/context/SampleListContext"
import { changeSampleCustomDataToComponent, countItems } from "@/utils/utils"
import { TSampleCustomCategoryApi, TPanelsCollapsedTypeProps } from "@/types/types"
import ArrowDown from "../../icons/arrowDown"
import IconCheck from "../../icons/check"
import ModalLoading from "@/components/ui/ModalLoading"
import ModalError from "@/components/ui/ModalError"
import Button from "@/components/ui/Button"
import ArrowRight from "../../icons/arrowRight"
import ModalTitle from "@/components/ui/ModalTitle"
import { usePanelControl, usePanel } from "@/lib/usePanels"

interface HandleItemToggle {
    (categoryName: string, itemName: string): void
}

export default function SampleListsEdit() {
    const {
        title,
        importedList,
        dataCustomList: data,
        setDataCustomList: setData,
        isPending
    } = useContext(SampleContext)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const { activePanel, togglePanel } = usePanelControl(0)

    const fetchData = async () => {
        try {
            setIsLoading(true)
            setError(false)
            const response = await getSampleList(importedList.id)
            const groupedItems = changeSampleCustomDataToComponent(response)
            setData(groupedItems)
        } catch (err) {
            // TODO obsłuż błędy
            setError(true)
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
            <div>
                {Object.entries(data).map(([category, items], index) => (
                    <SampleListsCategoryEdit
                        key={category}
                        categoryName={category}
                        items={items}
                        index={index}
                        handleItemToggle={handleItemToggle}
                        activePanel={activePanel}
                        togglePanel={togglePanel}
                    />
                ))}
            </div>
            <Button
                className="btn btn-primary w-full justify-center mt-3"
                type="submit"
            >
                Stwórz listę
                <ArrowRight className="ml-2" />
            </Button>
        </div>
    )
}

const SampleListsCategoryEdit = ({
    categoryName,
    items,
    index,
    handleItemToggle,
    activePanel,
    togglePanel,
}: {
    categoryName: string
    items: TSampleCustomCategoryApi[]
    index: number
    handleItemToggle: HandleItemToggle
} & TPanelsCollapsedTypeProps) => {
    const { checkedCount, totalCount } = countItems(items)

    const { isPending } = useContext(SampleContext)
    const { panelContentRef, maxHeight, isOpen } = usePanel(
        activePanel === index
    )

    return (
        <div
            className={`sample-list border-b border-gray-300 last:border-0 ${
                isOpen ? "open" : ""
            }`}
        >
            <button
                className="animated flex w-full justify-between items-center py-3 cursor-pointer"
                onClick={() => togglePanel(index)}
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
                    {isOpen ? "zwiń" : "rozwin"}
                    <ArrowDown
                        className={`ml-1 ${
                            isOpen ? "origin-center rotate-180" : ""
                        }`}
                    />
                </span>
            </button>

            <div
                className="overflow-hidden animated"
                style={{ maxHeight: isOpen ? `${maxHeight}px` : "0" }}
            >
                <div
                    ref={panelContentRef}
                    className={`bg-gray-100 rounded-lg px-4 py-1`}
                >
                    {items.map((item, itemIndex) => (
                        <SampleListsElementEdit
                            key={itemIndex}
                            item={item}
                            categoryName={categoryName}
                            handleItemToggle={handleItemToggle}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

const SampleListsElementEdit = ({
    item,
    categoryName,
    handleItemToggle,
}: {
    item: TSampleCustomCategoryApi
    categoryName: string
    handleItemToggle: HandleItemToggle
}) => {
    return (
        <li className="sample-select-type-row flex justify-between items-center gap-2 border-t border-gray-300 first:border-0">
            <input
                id={`items[${item.name}]`}
                type="checkbox"
                name={`items[${item.name}]`}
                onChange={() => handleItemToggle(categoryName, item.name)}
                className="mr-2"
                checked={item.checked}
            />
            <label
                className="py-3 grow cursor-pointer"
                htmlFor={`items[${item.name}]`}
            >
                {item.name}
            </label>
        </li>
    )
}
