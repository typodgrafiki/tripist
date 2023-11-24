import React from "react"
import Lists from "@/components/application/aside/Lists"
import UserButton from "@/components/application/user"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="dashboard flex flex-col h-screen">
            <div className="w-full bg-[var(--primary)] h-[35px] flex justify-end pr-8 pt-[2px]">
                <UserButton />
            </div>
            <div className="flex grow gap-8 max-h-[calc(100vh-35px)]">
                <aside className="sm:w-3/12 sm:min-w-[200px] sm:max-w-[300px] flex flex-col pr-5 bg-[var(--gray)] sm:overflow-y-auto relative">
                    <Lists />
                </aside>
                <main className="content relative sm:w-9/12 flex flex-col py-5 pr-8 sm:overflow-y-auto sm:bg-transparent sm:flex-initial">
                    {children}
                </main>
            </div>
        </div>
    )
}
