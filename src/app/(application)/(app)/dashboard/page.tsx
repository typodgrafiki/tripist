'use client'

import { useEffect, useState } from "react"
import ContentEmpty from "@/components/application/content/ContentEmpty"
import { useMediaQuery } from 'react-responsive'
import { useModal } from "@/context/ModalContext"
import MobileLists from "@/components/application/modals/mobile/MobileLists"

export default function Dashboard() {
    const [firstRender, setFirstRender] = useState(true)
    const {setIsModalOpen, setModalContent} = useModal()

    const isMobile = useMediaQuery({
        query: '(max-width: 639px)'
    })

    useEffect(() => {
        if (isMobile && firstRender) {
            setModalContent(<MobileLists />)
            setIsModalOpen(true)
            setFirstRender(false)
        }
    })


    return (
        <>
            <ContentEmpty dashboard />
        </>
    )
}
