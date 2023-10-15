import React from "react"
import AppAside from "@/components/application/aside/AppAside"
import { AppProvider } from "@/context/AppContext"
import { ModalProvider } from "@/context/ModalContext"
import Modal from "@/components/application/modals/Modal"
import "@/assets/styles/app.css"

export default function BackLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <AppProvider>
            <ModalProvider>
                <div className="dashboard relative sm:flex justify-center sm:p-8 md:p-12 h-screen">
                    <aside className="flex justify-between p-5 sm:w-3/12 sm:p-0 sm:flex-col">
                        <AppAside />
                    </aside>
                    <main className="content sm:w-9/12 flex flex-col bg-white sm:bg-transparent">
                        {children}
                    </main>
                </div>
                <Modal />
            </ModalProvider>
        </AppProvider>
    )
}