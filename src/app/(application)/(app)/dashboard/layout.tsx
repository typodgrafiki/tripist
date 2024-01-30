import React from "react"
import Lists from "@/components/application/aside/Lists"
import Top from "@/components/application/user"
import Feedback from "@/components/application/Feedback"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="dashboard pt-[35px] flex flex-col min-h-screen sm:h-screen sm:pt-0">
                <Top />
                <div className="flex grow gap-8 sm:max-h-[calc(100vh-35px)]">
                    <aside className="hidden sm:w-3/12 sm:min-w-[200px] sm:max-w-[300px] sm:flex flex-col pr-5 bg-[var(--gray)] dark:bg-[var(--darkModeLight)] sm:overflow-y-auto relative">
                        <Lists />
                    </aside>
                    <main className="content relative w-full flex flex-col sm:py-5 sm:w-9/12  sm:pr-5 sm:bg-transparent sm:flex-initial">
                        {children}
                    </main>
                </div>
            </div>
            <Feedback />
        </>
    )
}
