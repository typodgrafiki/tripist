import React from "react"

export default function BackLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="dashboard">
            <aside>Aside</aside>
            <main>{children}</main>
        </div>
    )
}
