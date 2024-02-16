import React from "react"
import QueryProvider from "@/context/QueryProvider"
import { ModalProvider } from "@/context/ModalContext"
import Modal from "@/components/application/modals/Modal"
import "@/assets/styles/app.css"
import "toastify-js/src/toastify.css"

export default function BackLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ModalProvider>
            <QueryProvider>
                <div className="bg-white sm:text-sm sm:bg-[#F4F5F9] sm:h-screen dark:bg-[var(--darkMode)] dark:text-[var(--darkModeText)]">
                    {children}
                </div>
                <Modal />
            </QueryProvider>
        </ModalProvider>
    )
}
