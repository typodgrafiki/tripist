import React from "react"

export default function ModalError({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col items-center p-6 text-base">
            {children}
        </div>
    )
}
