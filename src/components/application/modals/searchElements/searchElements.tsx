import Image from "next/image"
import { TSearchItem } from "@/types/types"
import iconSearch from "@/assets/images/dashboard/search.svg"
import IconCheck from "../../icons/check"

export default function SearchElements({
    searchItems,
    addElement,
    deleteElement,
    listId,
    setOpenCategories,
}: {
    searchItems: TSearchItem[]
    addElement: (name: string) => void
    deleteElement: (id: number) => void
    listId: string
    setOpenCategories: (value: boolean) => void
}) {
    if (searchItems.length === 0) {
        return <EmptySearch setOpenCategories={setOpenCategories} />
    }

    return (
        <>
            <div className="mt-4 overflow-y-auto max-h-[25vh]">
                {searchItems.map((item, index) => (
                    <Element
                        key={item.name + index}
                        addElement={addElement}
                        deleteElement={deleteElement}
                        {...item}
                    />
                ))}
            </div>
        </>
    )
}

const Element = ({
    name,
    id,
    addElement,
    deleteElement,
}: {
    name: string
    id: number | null
    addElement: (name: string) => void
    deleteElement: (id: number) => void
}) => {
    return (
        <div className="p-1 text-xs">
            {id ? (
                <button
                    onClick={() => deleteElement(id)}
                    className="text-[var(--primary)]"
                >
                    <IconCheck className="mr-2" />
                    {name}
                </button>
            ) : (
                <button
                    onClick={() => addElement(name)}
                    className="text-muted hover:text-[var(--primary)]"
                >
                    <IconCheck className="mr-2 opacity-0" />
                    {name}
                </button>
            )}
        </div>
    )
}

const EmptySearch = ({
    setOpenCategories,
}: {
    setOpenCategories: (value: boolean) => void
}) => {
    return (
        <div className="mt-8 mb-2 text-center">
            <p>
                <Image
                    src={iconSearch}
                    width={14}
                    height={14}
                    alt="lupa"
                    className="inline-block mr-3 relative bottom-[1px]"
                />
                Zacznij pisać aby zobaczyć podpowiedzi
            </p>
            <p className="mt-3">
                lub{" "}
                <button
                    className="text-[var(--primary)]"
                    onClick={() => setOpenCategories(true)}
                >
                    przeglądaj gotowe kategorie
                </button>
            </p>
        </div>
    )
}
