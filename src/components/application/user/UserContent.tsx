"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import Toastify from "toastify-js"
import { useModal } from "@/context/ModalContext"
import EditAccount from "@/components/application/modals/EditAccount"
import { IUserData } from "@/types/types"
import { deleteSession } from "@/actions/axiosActions"
import Button from "@/components/ui/Button"
import UserImage from "./UserImage"
import IconSettings from "@/assets/images/user/iconSettings.svg"
import Image from "next/image"

const accountActions = [
    {
        name: "Ustawienia",
        icon: IconSettings,
        action: "action",
    },
    {
        name: "Kategorie",
        icon: "icon",
        action: "action",
    },
    {
        name: "Wyloguj się",
        icon: "icon",
        action: "action",
    },
]

export default function UserContent({ user }: { user: IUserData }) {
    const router = useRouter()
    const { setIsModalOpen, setModalContent } = useModal()
    const [isOpen, setIsOpen] = useState(false)
    const firstLetterName = user && user.name ? user.name[0] : "N"

    const { name, email } = user

    const [data, setData] = useState(user)

    const handleEditAccount = () => {
        setModalContent(
            <EditAccount
                data={data}
                handleLogout={handleLogout}
                setData={setData}
            />
        )
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

    return (
        <div className="relative inline-block text-left">
            <UserImage
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                firstLetterName={firstLetterName}
            />

            {isOpen && (
                <div
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex={-1}
                >
                    <div
                        className="py-1"
                        role="none"
                    >
                        <div className="flex gap-2 items-center px-4 py-2">
                            <UserImage firstLetterName={firstLetterName} />
                            <div>
                                <div>{name}</div>
                                <div>{email}</div>
                            </div>
                        </div>
                        {accountActions.map((element, index) => (
                            <Element
                                key={index}
                                {...element}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
        // <div className="flex gap-2 items-center">
        // <div>
        //     <Image
        //         className="image rounded-full cursor-pointer"
        //         width={28}
        //         height={28}
        //         src={image ? image : iconUser}
        //         alt="Zdjęcie użytkownika"
        //         onClick={handleEditAccount}
        //     />
        // </div>
        //     <div className="truncate">
        //         <p
        //             className="text-lg font-semibold leading-5 truncate mt-1 cursor-pointer"
        //             onClick={handleEditAccount}
        //         >
        //             {data.name} {data.surname && data.surname}
        //         </p>
        //         <Button
        //             className="py-1 inline-block hover:text-[var(--primary)]"
        //             onClick={handleLogout}
        //         >
        //             Wyloguj się
        //         </Button>
        //     </div>
        // </div>
    )
}

const Element = ({ name, icon, action }) => {
    return (
        <Button
            className={`block px-4 py-2 text-sm hover:text-[var(--primary)] hover:pl-5 animated w-full`}
            role="menuitem"
            tabIndex={-1}
            // onClick={() => handleSortChange(type, direction)}
        >
            <Image
                src={icon}
                height={17}
                width={17}
                alt="ustawienia"
            />
            {name}
        </Button>
    )
}