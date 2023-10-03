import React from "react"

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="login flex h-screen w-screen items-center justify-center ">
            <main>{children}</main>
        </div>
    )
}
