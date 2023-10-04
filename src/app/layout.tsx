import React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ClerkProvider } from "@clerk/nextjs"

export const metadata: Metadata = {
    title: "Tripist",
    description: "Manage your trip lists",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider>
            <html
                lang="en"
                className="scroll-smooth"
            >
                <body>{children}</body>
            </html>
        </ClerkProvider>
    )
}
