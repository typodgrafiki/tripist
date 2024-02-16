"use client"

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import Toastify from "toastify-js"
import { useModal } from "@/context/ModalContext"
import EditAccount from "@/components/application/modals/EditAccount"
import { IUserData } from "@/types/types"
import { deleteSession } from "@/actions/axiosActions"
import Button from "@/components/ui/Button"
import UserImage from "./UserImage"
import IconSettings from "@/assets/images/user/iconSettings.svg"
import IconLogout from "@/assets/images/user/iconLogout.svg"
import IconCategories from "@/assets/images/user/iconCategories.svg"
import Image from "next/image"
import EditCategories from "../modals/EditCategories"
import useDropdown, { DropdownTemplate } from "@/hooks/useDropdown"

export default function UserContent({ user }: { user: IUserData }) {
    const router = useRouter()
    const { setIsModalOpen, setModalContent } = useModal()
    const firstLetterName = user && user.name ? user.name[0] : "N"
    const { isOpen, toggleDropdown, dropdownRef, closeDropdown } = useDropdown()

    const { name, email } = user

    const [data, setData] = useState(user)

    const handleEditAccount = () => {
        setModalContent(
            <EditAccount
                data={data}
                setData={setData}
            />
        )
        setIsModalOpen(true)
    }

    const handleEditCategories = () => {
        setModalContent(<EditCategories />)
        setIsModalOpen(true)
    }

    const handleLogout = async () => {
        const response = await deleteSession()
        if (response?.status == 200) {
            Toastify({
                text: response?.data.message,
            }).showToast()
            router.push("/sign-in")
        }
    }

    const accountActions = [
        {
            name: "Ustawienia",
            icon: IconSettings,
            action: handleEditAccount,
        },
        {
            name: "Kategorie",
            icon: IconCategories,
            action: handleEditCategories,
        },
        {
            name: "Wyloguj się",
            icon: IconLogout,
            action: handleLogout,
        },
    ]

    // useEffect(() => {
    //     const localStorageDarkMode = localStorage.getItem("tripist_darkMode")
    //     if (localStorageDarkMode === "on") {
    //         document.documentElement.setAttribute("data-theme", "dark")
    //     } else {
    //         document.documentElement.setAttribute("data-theme", "light")
    //     }
    // }, [user.darkTheme])

    return (
        <div
            className="relative inline-block text-left"
            ref={dropdownRef}
        >
            <UserImage
                setIsOpen={toggleDropdown}
                isOpen={isOpen}
                firstLetterName={firstLetterName}
            />

            {isOpen && (
                <DropdownTemplate>
                    <div className="flex gap-2 items-center px-4 py-2">
                        <UserImage firstLetterName={firstLetterName} />
                        <div>
                            <div className="font-semibold dark:text-[var(--darkModeTitle)]">
                                {name}
                            </div>
                            <div className="text-muted text-xs">{email}</div>
                        </div>
                    </div>
                    {accountActions.map((element, index) => (
                        <Element
                            key={index}
                            action={element.action}
                            closeDropdown={closeDropdown}
                        >
                            <span className="flex justify-center items-center w-[28px] text-center mr-2">
                                <Image
                                    src={element.icon}
                                    alt="lll"
                                    width={17}
                                    height={17}
                                />
                            </span>
                            {element.name}
                        </Element>
                    ))}
                </DropdownTemplate>
            )}
        </div>
    )
}

const Element = ({
    action,
    children,
    closeDropdown,
}: {
    action: (() => void) | (() => Promise<void>)
    children: React.ReactNode
    closeDropdown: () => void
}) => {
    const handleClick = () => {
        action()
        closeDropdown()
    }

    return (
        <Button
            className={`block px-4 py-2 text-sm hover:text-[var(--primary)] hover:pl-5 animated w-full`}
            role="menuitem"
            tabIndex={-1}
            onClick={handleClick}
        >
            {children}
        </Button>
    )
}
