import React from "react"

export default function Button({
    children,
    isLoading,
    isSuccess,
    onClick,
    className,
    textSuccess,
}: {
    children: React.ReactNode
    isLoading?: boolean
    isSuccess?: boolean
    onClick?: () => void
    className?: string
    textSuccess?: string
}) {
    return (
        <button
            className={`flex ${className}`}
            onClick={onClick}
            disabled={isLoading || isSuccess}
        >
            {textSuccess && isSuccess ? textSuccess : children}
            {isLoading && (
                <div className="loader small ml-2 relative top-[2px]"></div>
            )}
        </button>
    )
}
