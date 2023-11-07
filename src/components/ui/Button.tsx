import React from "react"

export default function Button({
    children,
    isLoading,
    onClick,
    className,
}: {
    children: React.ReactNode
    isLoading?: boolean
    onClick?: () => void
    className?: string
}) {
    return (
        <button
            className={className}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
