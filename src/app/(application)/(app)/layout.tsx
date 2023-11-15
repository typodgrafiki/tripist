/**
 * //TODO: FETCH to AXIOS
 * //TODO: react query
 * TODO: Add buttons / forms ui
 * //TODO: Dodac toastify (zainstalowane)
 */

import React from "react"
import QueryProvider from "@/context/QueryProvider"
import { ModalProvider } from "@/context/ModalContext"
import Modal from "@/components/application/modals/Modal"
import "@/assets/styles/app.css"
import "@/assets/styles/app-loading.css"
import "toastify-js/src/toastify.css"

export default function BackLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ModalProvider>
            <QueryProvider>
                <div className="bg-gray-200 h-screen">{children}</div>
                <Modal />
            </QueryProvider>
        </ModalProvider>
    )
}
