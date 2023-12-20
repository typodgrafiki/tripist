import React, { useState, useEffect } from "react"
import { getSampleList } from "@/actions/axiosActions"
import { changeSampleCustomDataToComponent } from "@/utils/utils"
import {
    TSampleCustomItemsToApi,
    TSampleCustomCategoryApi,
    TSampleListStatus,
    TSampleProps,
} from "@/types/types"
import ArrowDown from "../../icons/arrowDown"
import IconCheck from "../../icons/check"
import IconPlus from "../../icons/plus"

interface HandleItemToggle {
    (categoryName: string, itemName: string): void
}

export default function SampleListsEdit({
    isPending,
    isError,
    isSuccess,
    importedId,
    dataCustomList: data,
    setDataCustomList: setData,
}: TSampleProps & TSampleListStatus) {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const response = await getSampleList(importedId)
                const groupedItems = changeSampleCustomDataToComponent(response)
                setData(groupedItems)
            } catch (err) {
                // TODO obsłuż błędy
                // setError(err)
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, [importedId]) // Efekt uruchomi się, gdy `importedId` ulegnie zmianie

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
        return <div>Ładowanie...</div>
    }

    if (error) {
        // TODO Cos tu trzeba zrobic - obsluz
        return <div>Nie udało się załadować elementów listy.</div>
    }

    return (
        <div>
            {Object.entries(data).map(([category, items], index) => (
                <SampleListsCategoryEdit
                    key={category}
                    categoryName={category}
                    items={items}
                    index={index}
                    handleItemToggle={handleItemToggle}
                    isPending={isPending}
                    isError={isError}
                    isSuccess={isSuccess}
                />
            ))}
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
}: {
    categoryName: string
    items: TSampleCustomCategoryApi[]
    index: number
    handleItemToggle: HandleItemToggle
} & TSampleListStatus) => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (index === 0) {
            setIsOpen(true)
        }
    }, [index])

    return (
        <fieldset
            className={`sample-list border-b border-gray-300 last:border-0 ${
                isOpen ? "open" : ""
            }`}
        >
            <button
                className="animated flex w-full justify-between items-center py-3 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
                disabled={isPending}
                type="button"
            >
                <span className="font-medium">{categoryName}</span>
                <span className="animated text-gray-500 hover:text-gray-950">
                    {isOpen ? "zwiń" : "rozwin"}
                    <ArrowDown
                        className={`ml-1 ${
                            isOpen ? "origin-center rotate-180" : ""
                        }`}
                    />
                </span>
            </button>
            {isOpen && (
                <div className="bg-gray-100 p-4 rounded-lg flex flex-wrap gap-2">
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
            )}
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
