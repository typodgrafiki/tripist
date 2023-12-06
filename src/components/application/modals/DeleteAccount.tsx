"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Button from "@/components/ui/Button"
import { deleteAccount } from "@/actions/axiosActions"
import { useModal } from "@/context/ModalContext"
import Toastify from "toastify-js"

export default function DeleteAccount() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const { setModalContent, setIsModalOpen } = useModal()

    const handleDeleteAccount = async () => {
        setLoading(true)
        const response = await deleteAccount()
        const { message } = response?.data
        if (response?.status === 200) {
            Toastify({
                text: message,
            }).showToast()
            router.push("/")
        } else {
            Toastify({
                className: "toastify-error",
                text: message,
            }).showToast()
            setLoading(false)
        }
    }

    const handleBack = () => {
        setModalContent(null)
        setIsModalOpen(false)
    }

    return (
        <>
            <h3 className="flex mb-5 text-gray-400 truncate justify-between items-center">
                <span className="title font-medium text-gray-900 text-xl">
                    Usuwanie konta
                </span>
            </h3>
            <div className="flex flex-col gap-2">
                <p>
                    <b>Czy na pewno chcesz usunąć swoje konto?</b>
                </p>
                <p>
                    Pamiętaj, że ta decyzja spowoduje trwałe usunięcie
                    wszystkich danych, w tym list, powiązanych z Twoim kontem.
                </p>
                <p>Jeśli jesteś pewien/pewna, potwierdź swoją decyzję.</p>
            </div>
            <div className="flex justify-between mt-5">
                <Button
                    className="btn btn-default"
                    onClick={handleBack}
                    isLoading={loading}
                >
                    Wróć
                </Button>
                <Button
                    className="btn btn-primary"
                    onClick={handleDeleteAccount}
                    isLoading={loading}
                >
                    {loading ? "Usuwanie konta" : "Usuń konto"}
                </Button>
            </div>
        </>
    )
}
