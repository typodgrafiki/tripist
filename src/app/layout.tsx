import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Trip lists",
    description: "Manage your trip lists",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
