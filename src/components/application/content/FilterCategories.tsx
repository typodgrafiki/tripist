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
        <div className="flex flex-wrap  gap-y-2 gap-x-2 mx-5 sm:mx-0">
            <button
                onClick={() => handleCategoryChange("")}
                className={`text-xs font-semibold uppercase whitespace-nowrap ${
                    isActive()
                        ? "text-[var(--primary)]"
                        : "hover:text-[var(--primary)]"
                }`}
            >
                Wszystko
                {isActive() && <Count>{count}</Count>}
            </button>
            {categoriesUnique?.map((el, index) => (
                <button
                    key={el + index}
                    onClick={() => handleCategoryChange(el)}
                    className={`text-xs font-semibold uppercase whitespace-nowrap ${
                        selectedCategory === el
                            ? "text-[var(--primary)]"
                            : "hover:text-[var(--primary)]"
                    }`}
                >
                    {el}
                    {selectedCategory === el && <Count>{count}</Count>}
                </button>
            ))}
        </div>
    )
}

const Count = ({
    children,
    // isActive,
}: {
    children: React.ReactNode
    // isActive: boolean
}) => {
    return (
        <span
            className={`inline-block px-[5px] text-[0.65rem] font-normal rounded-full relative -top-[1px] ml-1 animated bg-[var(--primary)] text-white`}
        >
            {children}
        </span>
    )
}
