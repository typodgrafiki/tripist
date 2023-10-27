import React from "react"
import AppAside from "@/components/application/aside/AppAside"
import { AppProvider } from "@/context/AppContext"
import { ModalProvider } from "@/context/ModalContext"
import Modal from "@/components/application/modals/Modal"
import "@/assets/styles/app.css"
import DebugLog from "@/lib/developConsoleLog"
import DebugLogScript from "@/lib/developConsoleScripts"

export default function BackLayout({
    children,
}: {
    children: React.ReactNode
}) {
    DebugLogScript("BackLayout")
    return (
        <AppProvider>
            <ModalProvider>
                <DebugLog name="BackLayout" />
                <div className="dashboard relative bg-gray-200 h-screen sm:flex sm:justify-center sm:p-8">
                    <aside className="flex justify-between py-2 px-5 sm:w-3/12 sm:p-0 sm:pr-7 sm:flex-col sm:flex-1 sm:min-w-[200px]">
                        <AppAside />
                    </aside>
                    <main className="content relative sm:w-9/12 flex flex-col bg-white sm:bg-transparent sm:flex-initial">
                        {children}
                    </main>
                </div>
                <Modal />
            </ModalProvider>
        </AppProvider>
    )
}
