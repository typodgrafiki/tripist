"use client"

export default function AppContentElement({
    name,
    done,
}: {
    name: string
    done: boolean
}) {
    return (
        <li>
            {name}
            {done ? " / tak" : " / nie"}
        </li>
    )
}
