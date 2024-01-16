"use client"

"use client"

import React from "react"
import { useState, useEffect } from "react"

export default function Header({ children }: { children: React.ReactNode }) {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 100
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [scrolled])

    return (
        <header
            className={`animated fixed top-0 left-0 right-0 z-20 px-8 lg:px-14 ${
                scrolled
                    ? "bg-white bg-opacity-70 backdrop-blur-md shadow-top py-3 lg:py-3"
                    : "py-5 lg:py-7"
            }`}
        >
            {children}
        </header>
    )
}
