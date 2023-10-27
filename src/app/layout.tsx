import React from "react"
import "@/assets/styles/globals.css"
import type { Metadata } from "next"
import { ClerkProvider } from "@clerk/nextjs"
import DebugLog from "@/lib/developConsoleLog"
import DebugLogScript from "@/lib/developConsoleScripts"

export const metadata: Metadata = {
    title: "Tripist",
    description: "Manage your trip lists",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    DebugLogScript("RootLayout")
    return (
        <ClerkProvider>
            <html
                lang="en"
                className="scroll-smooth"
            >
                <DebugLog name="RootLayout" />
                <body>{children}</body>
            </html>
        </ClerkProvider>
    )
}
