import React from "react"
import "@/assets/styles/globals.css"
import type { Metadata } from "next"
// import { ClerkProvider } from "@clerk/nextjs"

export const metadata: Metadata = {
    title: "Tripist: Twoja intuicyjna aplikacja do pakowania",
    description:
        "Niezależnie od celu podróży – Tripist zapewnia idealną listę pakowania. Korzystaj z naszych podpowiedzi i zaznaczaj spakowane przedmioty. Pobierz aplikację i zorganizuj się na każdą przygodę!",
    keywords:
        "lista pakowania, aplikacja do pakowania, lista na wycieczkę, porady do pakowania, aplikacja do treningu, organizacja wyjazdu, personalizowane listy pakowania, kreator list pakowania",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        // <ClerkProvider>
            <html
                lang="pl"
                className="scroll-smooth"
            >
                <body>{children}</body>
            </html>
        // </ClerkProvider>
    )
}
