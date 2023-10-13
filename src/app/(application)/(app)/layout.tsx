import React from "react"
import AppAside from "@/components/application/aside/AppAside"
import { AppProvider } from "@/context/AppContext"
import Modal from "@/components/application/modals/Modal"
import "@/assets/styles/app.css"

export default function BackLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <AppProvider>
            <div className="dashboard relative flex justify-center p-12 h-screen">
                <aside className="w-3/12 flex flex-col justify-between">
                    <AppAside />
                </aside>
                <main className="content w-9/12">{children}</main>
            </div>
            <Modal children="test" />
        </AppProvider>
    )
}
