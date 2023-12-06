import React from "react"
import Lists from "@/components/application/aside/Lists"
import Top from "@/components/application/user"
import Feedback from "@/components/application/Feedback"
import MobileMenu from "@/components/application/buttons/MobileMenu"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="dashboard flex flex-col sm:h-screen">
                <Top />
                <div className="flex grow gap-8 pb-12 sm:max-h-[calc(100vh-35px)] sm:pb-0">
                    <aside className="hidden sm:w-3/12 sm:min-w-[200px] sm:max-w-[300px] sm:flex flex-col pr-5 bg-[var(--gray)] sm:overflow-y-auto relative">
                        <Lists />
                    </aside>
                    <main className="content relative w-full flex flex-col py-5 sm:w-9/12 sm:pr-8 sm:overflow-y-auto sm:bg-transparent sm:flex-initial">
                        {children}
                    </main>
                </div>
            </div>
            <MobileMenu />
            <Feedback />
        </>
    )
}
