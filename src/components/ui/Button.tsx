"use client"

import React from "react"

export default function Button({
    children,
    isLoading,
    isSuccess,
    isDisabled,
    onClick,
    className,
    textSuccess,
    ...props
}: {
    children: React.ReactNode
    isLoading?: boolean
    isSuccess?: boolean
    isDisabled?: boolean
    onClick?: () => void
    className?: string
    textSuccess?: string
    type?: "button" | "submit" | "reset"
    id?: string
    role?: "menuitem"
    tabIndex?: number
}) {
    return (
        <button
            className={`flex items-center ${className}`}
            onClick={onClick}
            disabled={isLoading || isSuccess || isDisabled}
            {...props}
        >
            {textSuccess && isSuccess ? textSuccess : children}
            {isLoading && <div className="loader small ml-2"></div>}
        </button>
    )
}
