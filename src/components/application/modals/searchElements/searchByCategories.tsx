import { usePanelControl, usePanel } from "@/hooks/usePanels"
import ArrowDown from "../../icons/arrowDown"
import {
    TPanelsCollapsedTypeProps,
    TSearchItemCategoryChanged,
    TSearchItemCategoryChangedItem,
    TActionsAddElementByCategory,
} from "@/types/types"

export default function SearchByCategories({
    elements,
    addElement,
    deleteElement,
}: {
    elements: TSearchItemCategoryChanged[]
} & TActionsAddElementByCategory) {
    const { activePanel, togglePanel } = usePanelControl(0)

    return (
        <div className="mt-4 overflow-y-auto max-h-inner-modal">
            {elements.map((element, index) => (
                <Category
                    key={index}
                    index={index}
                    activePanel={activePanel}
                    togglePanel={togglePanel}
                    addElement={addElement}
                    deleteElement={deleteElement}
                    {...element}
                />
            ))}
        </div>
    )
}

const Category = ({
    activePanel,
    togglePanel,
    index,
    name,
    items,
    addElement,
    deleteElement,
}: TPanelsCollapsedTypeProps &
    TSearchItemCategoryChanged &
    TActionsAddElementByCategory) => {
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
                className="animated flex w-full justify-between items-center py-3 cursor-pointer hover:text-[var(--primary)]"
                onClick={() => togglePanel(index)}
                // disabled={isPending}
                type="button"
            >
                <span className="font-medium">
                    {name}
                    <span className="text-gray-400 text-xs font-normal ml-1">
                        [0/{items.length}]
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
                    {items.map((element, index) => (
                        <Items
                            key={element.name.trim() + index}
                            addElement={addElement}
                            deleteElement={deleteElement}
                            nameCategory={name}
                            {...element}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

const Items = ({
    name,
    id,
    nameCategory,
    addElement,
    deleteElement,
}: TSearchItemCategoryChangedItem & TActionsAddElementByCategory) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { checked, value } = e.target

        if (checked) {
            addElement(value, false, nameCategory)
        } else if (id) {
            deleteElement(id)
        }
    }

    const isChecked = id ? true : false

    return (
        <div className="element-row border-t border-gray-300 first:border-0">
            <label className="flex px-5 py-2 gap-2 grow text-sm cursor-pointer sm:hover:text-[var(--primary)] sm:px-0">
                <span className="relative round w-[21px] h-[21px]">
                    <input
                        type="checkbox"
                        value={name}
                        defaultChecked={isChecked}
                        className="mr-2"
                        onChange={handleChange}
                    />
                    <span className="label"></span>
                </span>
                <span className="grow">{name}</span>
            </label>
        </div>
    )
}
