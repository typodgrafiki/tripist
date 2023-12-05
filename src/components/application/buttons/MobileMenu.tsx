'use client'

import React from "react"
import CreateList from "../modals/CreateList"
import IconPlus from "../icons/plus"
import { useModal } from "@/context/ModalContext"
import MobileLists from "../modals/mobile/MobileLists"

export default function MobileMenu() {
    const {setIsModalOpen, setModalContent} = useModal()

    const handleUser = () => {
        
    }

    const handleAddList = () => {
        setModalContent(<CreateList />)
        setIsModalOpen(true)
    }

    const handleLists = () => {
        setModalContent(<MobileLists />)
        setIsModalOpen(true)
    }

    return (
        <div className="mobile-menu-bottom flex justify-between fixed bottom-0 left-0 right-0 sm:hidden">
            <Btn onClick={handleLists}>
                <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1H24" stroke="#2C2D32" stroke-width="2" stroke-linecap="round"/>
                    <path d="M1 8H24" stroke="#2C2D32" stroke-width="2" stroke-linecap="round"/>
                    <path d="M1 15H24" stroke="#2C2D32" stroke-width="2" stroke-linecap="round"/>
                </svg>
                Listy
            </Btn>
            <Btn onClick={handleAddList}>
                <IconPlus />
                Dodaj listę
            </Btn>
            <Btn onClick={handleUser}>
                <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 11.625C12.434 11.625 14.8125 9.24651 14.8125 6.3125C14.8125 3.37849 12.434 1 9.5 1C6.56599 1 4.1875 3.37849 4.1875 6.3125C4.1875 9.24651 6.56599 11.625 9.5 11.625Z" stroke="#2C2D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18 20.125C18 15.4306 14.1944 11.625 9.5 11.625C4.80558 11.625 1 15.4306 1 20.125" stroke="#2C2D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Konto
            </Btn>
        </div>
    )
}

const Btn = ({
    children, 
    onClick
}:{
    children: React.ReactNode 
    onClick: () => void
}) => {
    return (
        <button 
            className="p-4 flex gap-2 justify-center items-center" 
            onClick={onClick}
        >
            {children}        
        </button>
    )
}