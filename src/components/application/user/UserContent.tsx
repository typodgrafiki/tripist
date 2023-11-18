"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import Image from "next/image"
import Toastify from "toastify-js"
import { useModal } from "@/context/ModalContext"
import EditAccount from "@/components/application/modals/EditAccount"
import iconUser from "@/assets/images/user/boy.png"
import { IUserData } from "@/types/types"
import Button from "@/components/ui/Button"
import { deleteSession } from "@/actions/axiosActions"

export default function UserContent({ user }: { user: IUserData }) {
    const router = useRouter()
    const { setIsModalOpen, setModalContent } = useModal()

    const { name, surname, image } = user // TODO to dac w state i przekazac dalej state a nie sztywne wartosci

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
        <div className="flex w-full gap-2 items-center">
            <div>
                <Image
                    className="image rounded-full min-w-[55px] cursor-pointer"
                    width={55}
                    height={55}
                    src={image ? image : iconUser}
                    alt="Zdjęcie użytkownika"
                    onClick={handleEditAccount}
                />
            </div>
            <div className="truncate">
                <p
                    className="text-lg font-semibold leading-5 truncate mt-1 cursor-pointer"
                    onClick={handleEditAccount}
                >
                    {data.name} {data.surname && data.surname}
                </p>
                <Button
                    className="py-1 inline-block hover:text-[var(--primary)]"
                    onClick={handleLogout}
                >
                    Wyloguj się
                </Button>
            </div>
        </div>
    )
}
