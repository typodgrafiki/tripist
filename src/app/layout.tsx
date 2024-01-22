import React from "react"
import { Poppins } from "next/font/google"
import type { Metadata, Viewport } from "next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react'
import "@/assets/styles/globals.css"
import "@/assets/styles/app-loading.css"

const poppins = Poppins({
    subsets: ["latin-ext"],
    display: "swap",
    weight: ["400", "500", "600"],
    style: ["normal", "italic"],
})

export const metadata: Metadata = {
    title: "Tripist: Twoja intuicyjna aplikacja do pakowania",
    description:
        "Niezależnie od celu podróży – Tripist zapewnia idealną listę pakowania. Korzystaj z naszych podpowiedzi i zaznaczaj spakowane przedmioty. Pobierz aplikację i zorganizuj się na każdą przygodę!",
    keywords:
        "lista pakowania, aplikacja do pakowania, lista na wycieczkę, porady do pakowania, aplikacja do treningu, organizacja wyjazdu, personalizowane listy pakowania, kreator list pakowania",
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    // userScalable: 'no',
  }

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html
            lang="pl"
            className={`scroll-smooth ${poppins.className}`}
        >
            <body>
                {children}
                <SpeedInsights/>
                <Analytics />
            </body>
        </html>
    )
}
