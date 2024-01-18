import data from "@/lib/elementsData3.json"
import { usePanelControl, usePanel } from "@/lib/usePanels"
import ArrowDown from "../../icons/arrowDown"
import { TPanelsCollapsedTypeProps } from "@/types/types"
import { checkElementIsOnList } from "@/utils/utils"

export default function SearchByCategories({ elements }) {
    const { activePanel, togglePanel } = usePanelControl(0)
    const newData = checkElementIsOnList(elements, data)

    return (
        <div className="mt-4 overflow-y-auto max-h-inner-modal">
            {newData.map((element, index) => (
                <Category
                    key={index}
                    index={index}
                    activePanel={activePanel}
                    togglePanel={togglePanel}
                    {...element}
                />
            ))}
        </div>
    )
}

type TCategoryProps = {
    index: number
    name: string
    items: string[]
}
const Category = ({
    activePanel,
    togglePanel,
    index,
    name,
    items,
}: TPanelsCollapsedTypeProps & TCategoryProps) => {
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
                <span className="font-medium">{name}</span>
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
                            key={element + index}
                            {...element}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

const Items = ({ name, checked }) => {
    return (
        <div className="element-row border-t border-gray-300 first:border-0">
            <label className="flex px-5 py-2 gap-2 grow text-sm cursor-pointer sm:hover:text-[var(--primary)] sm:px-0">
                <span className="relative round w-[21px] h-[21px]">
                    <input
                        type="checkbox"
                        // checked={status}
                        defaultChecked={checked}
                        className="mr-2"
                        // onChange={() => mutate(!status)}
                    />
                    <span className="label"></span>
                </span>
                <span className="grow">{name}</span>
            </label>
        </div>
    )
}
