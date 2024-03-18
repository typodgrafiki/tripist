"use client"

import { useState, useEffect } from "react"
import ContentEmpty from "@/components/application/content/ContentEmpty"
import { useMediaQuery } from "react-responsive"
import Lists from "@/components/application/aside/Lists"

export default function Dashboard() {
    const [isMobile, setIsMobile] = useState(false)

    const mobile = useMediaQuery({
        query: "(max-width: 639px)",
    })

    useEffect(() => {
        if (mobile) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }, [mobile])

    return <>{isMobile ? <Lists /> : <ContentEmpty dashboard />}</>
}
