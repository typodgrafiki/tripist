"use client"

import IconPen from "@/components/application/icons/pen"

export default function ButtonEdit() {
    return (
        <>
            <button className="animated hidden sm:inline-block px-3 mb-2 hover:text-[var(--primary)] hover:bg-white rounded-full">
                <IconPen />
            </button>
        </>
    )
}
