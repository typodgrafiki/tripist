import Sort from "../buttons/Sort"

export default function FilterCategories({
    categoriesUnique,
    handleCategoryChange,
    selectedCategory,
}: {
    categoriesUnique: string[] | undefined
    handleCategoryChange: (category: string) => void
    selectedCategory: string | ""
}) {
    return (
        <div className="flex mb-3 sm:mb-5 justify-between">
            <div className="flex gap-6 mx-5 sm:mx-0 overflow-x-auto">
                <button
                    onClick={() => handleCategoryChange("")}
                    className={`text-sm font-semibold uppercase whitespace-nowrap 
        ${
            categoriesUnique?.some((el) => selectedCategory === el)
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
    )
}
