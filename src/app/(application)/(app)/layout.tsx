import React from "react"
import AppAside from "@/components/application/aside/AppAside"
import { AppProvider } from "@/context/AppContext"
import Modal from "@/components/application/modals/Modal"
import "@/assets/styles/app.css"
import CreateList from "@/components/application/modals/CreateList"

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
                <main className="content w-9/12 flex flex-col">{children}</main>
            </div>
            <Modal>
                <CreateList />
            </Modal>
        </AppProvider>
    )
}
