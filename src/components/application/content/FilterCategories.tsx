import React from "react"

export default function FilterCategories({
    categoriesUnique,
    handleCategoryChange,
    selectedCategory,
    count,
}: {
    categoriesUnique: string[] | undefined
    handleCategoryChange: (category: string) => void
    selectedCategory: string | ""
    count: number
}) {
    const isActive = () => {
        return selectedCategory === ""
    }

    return (
        <div className="flex gap-2 mx-5 sm:mx-0 overflow-x-auto">
            <button
                onClick={() => handleCategoryChange("")}
                className={`text-sm font-semibold uppercase whitespace-nowrap ${
                    isActive()
                        ? "text-[var(--primary)]"
                        : "hover:text-[var(--primary)]"
                }`}
            >
                Wszystko
                <Count isActive={isActive()}>{count}</Count>
            </button>
            {categoriesUnique?.map((el, index) => (
                <button
                    key={el + index}
                    onClick={() => handleCategoryChange(el)}
                    className={`text-sm font-semibold uppercase whitespace-nowrap ${
                        selectedCategory === el
                            ? "text-[var(--primary)]"
                            : "text-sm hover:text-[var(--primary)]"
                    }`}
                >
                    {el}
                    <Count isActive={selectedCategory === el}>{count}</Count>
                </button>
            ))}
        </div>
    )
}

const Count = ({
    children,
    isActive,
}: {
    children: React.ReactNode
    isActive: boolean
}) => {
    return (
        <span
            className={`inline-block px-[6px] text-xs font-normal rounded-full relative -top-[1px] ml-1 animated ${
                isActive
                    ? "bg-[var(--primary)] text-white opacity-1 mr-5"
                    : "opacity-0 mr-0"
            }`}
        >
            {children}
        </span>
    )
}
