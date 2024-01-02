import { ICategories } from "@/types/types"

export default function Categories({
    categories,
}: {
    categories: ICategories[]
}) {
    if (!categories || categories.length === 0) {
        return null
    }

    return (
        <div className="element-categories hidden sm:flex sm:item-center sm:gap-1">
            <span className="block text-xs bg-[var(--gray)] rounded-md self-center px-2 py-1 max-w-[7rem] text-ellipsis overflow-hidden whitespace-nowrap">
                {categories[0].name}
            </span>
            {categories.length > 1 && (
                <span className="block text-xs bg-[var(--gray)] rounded-md self-center px-2 py-1">
                    ...
                </span>
            )}
        </div>
    )
}
