"use client"

export default function AppContentElement({
    name,
    done,
}: {
    name: string
    done: boolean
}) {
    return (
        <li className="relative">
            <button>
                <input
                    type="checkbox"
                    checked={done}
                    className="mr-2"
                />
                {name}
            </button>
        </li>
    )
}
