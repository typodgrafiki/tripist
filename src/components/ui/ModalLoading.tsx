import React from "react"

export default function ModalLoading({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col items-center p-6">
            <div className="loader"></div>
            <div className="mt-4 text-base">{children}</div>
        </div>
    )
}
