// useDropdown.js
import React, { useState, useRef, useEffect } from "react"

const useDropdown = () => {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement | null>(null)

    const toggleDropdown = () => setIsOpen(!isOpen)
    const closeDropdown = () => setIsOpen(false)

    const handleClickOutside = (event: MouseEvent) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
        ) {
            closeDropdown()
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return { isOpen, toggleDropdown, dropdownRef, closeDropdown }
}

export const DropdownTemplate = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-opacity-70 backdrop-blur-sm"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
        >
            <div
                className="py-1"
                role="none"
            >
                {children}
            </div>
        </div>
    )
}

export default useDropdown
