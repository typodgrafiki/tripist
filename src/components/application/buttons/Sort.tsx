/**
 *
 * TODO Tu trzeba zrobic porządek z typami bo jesz bałagan
 * TODO przy małej ilosci elementow dropdown sort nie jest widoczny (sortowanie i kategorie maja byc przyklejone u gory)
 *
 */

import Button from "@/components/ui/Button"
import { SortBy, SortDirection } from "@/utils/utils"
import { TSortProps } from "../content/Content"
import useDropdown from "@/utils/useDropdown"

interface ISortTypes {
    name: string
    type: SortBy
    direction: SortDirection
}

interface ISortChangeProp {
    handleSortChange: (
        newSortBy: SortBy,
        newSortDirection: SortDirection
    ) => void
    sortCriteria: TSortProps
    closeDropdown?: () => void
}

type BtnChangeSortProps = ISortChangeProp & ISortTypes

const sortTypes: ISortTypes[] = [
    {
        name: "Najnowsze",
        type: "createdAt",
        direction: "desc",
    },
    {
        name: "Najstarsze",
        type: "createdAt",
        direction: "asc",
    },
    {
        name: "A-Z",
        type: "name",
        direction: "asc",
    },
    {
        name: "Z-A",
        type: "name",
        direction: "desc",
    },
]

export default function Sort({
    handleSortChange,
    sortCriteria,
}: ISortChangeProp) {
    const { isOpen, toggleDropdown, dropdownRef, closeDropdown } = useDropdown()

    return (
        <>
            <div
                className="relative inline-block text-left"
                ref={dropdownRef}
            >
                <div>
                    <Button
                        type="button"
                        className="btn btn-small btn-gray"
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                        onClick={toggleDropdown}
                    >
                        Sortuj
                        <svg
                            className={`-mr-1 h-5 w-5 text-gray-400 ${
                                isOpen ? "transform rotate-180" : ""
                            }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Button>
                </div>
                {isOpen && (
                    <div
                        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabIndex={-1}
                    >
                        <div
                            className="py-1"
                            role="none"
                        >
                            {sortTypes.map((element, index) => (
                                <BtnChangeSort
                                    key={index}
                                    handleSortChange={handleSortChange}
                                    closeDropdown={closeDropdown}
                                    sortCriteria={sortCriteria}
                                    {...element}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

const BtnChangeSort = ({
    handleSortChange,
    sortCriteria,
    closeDropdown,
    ...element
}: BtnChangeSortProps) => {
    const { name, type, direction } = element

    const isActive = () => {
        return (
            type === sortCriteria.sortBy &&
            direction === sortCriteria.sortDirection
        )
    }

    const handleClick = () => {
        if (closeDropdown) {
            closeDropdown()
        }
        handleSortChange(type, direction)
    }

    return (
        <Button
            className={`block px-4 py-2 text-sm hover:text-[var(--primary)] hover:pl-5 animated w-full ${
                isActive() ? "text-[var(--primary)]" : ""
            }`}
            role="menuitem"
            tabIndex={-1}
            onClick={handleClick}
        >
            {name}
        </Button>
    )
}
