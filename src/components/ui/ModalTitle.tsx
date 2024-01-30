import React from "react"

export default function ModalTitle({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <h3 className="truncate text-2xl font-medium mb-4 dark:text-[var(--darkModeTitle)]">
            {children}
        </h3>
    )
}
