import React from "react"
import AppAside from "@/components/application/AppAside"
import { StoreProvider } from "@/store/StoreProvider"

export default function BackLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <StoreProvider>
            <div className="dashboard flex justify-center p-12 h-screen">
                <aside className="w-3/12 flex flex-col justify-between">
                    <AppAside />
                </aside>
                <main className="content flex justify-center w-9/12">
                    {children}
                </main>
            </div>
        </StoreProvider>
    )
}
