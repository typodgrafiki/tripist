/**
 * //TODO: FETCH to AXIOS
 * //TODO: react query
 * TODO: Add buttons / forms ui
 * //TODO: Dodac toastify (zainstalowane)
 */

import React from "react"
import QueryProvider from "@/context/QueryProvider"
import AppAside from "@/components/application/aside/Aside"
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
                <div className="dashboard relative bg-gray-200 h-screen sm:flex sm:justify-center sm:p-8">
                    <aside className="flex justify-between py-2 px-5 sm:w-3/12 sm:p-0 sm:pr-7 sm:flex-col sm:flex-1 sm:min-w-[200px]">
                        <AppAside />
                    </aside>
                    <main className="content relative sm:w-9/12 flex flex-col bg-white sm:bg-transparent sm:flex-initial">
                        {children}
                    </main>
                </div>
                <Modal />
            </QueryProvider>
        </ModalProvider>
    )
}
