"use client"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { useGlobalContext } from "@/context/AppContext"
import { useModal } from "@/context/ModalContext"
import ProgressBar from "../buttons/progressBar"
import { ListsProps } from "@/context/AppContext"

export default function EditElement({ id }: { id: number }) {
    const [name, setName] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const formRef = useRef<HTMLFormElement | null>(null)
    const { listActive, setListActive } = useGlobalContext()
    const { setIsModalOpen } = useModal()

    // const close = () => {
    // setName("")
    // setSuccess(false)
    // setIsModalOpen(false)
    // }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            // setError(false)
            // await setLoading(true)
            // const res = await fetch(`/api/lists/addElement`, {
            //     method: "POST",
            //     body: JSON.stringify({ name: name, listId: listActive.id }),
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            // })
            // if (res.ok) {
            //     const data = await res.json()
            //     const response = data.body
            //     response.categories = []
            //     formRef.current?.reset()
            //     setSuccess(true)
            //     setListActive((prevList) => ({
            //         ...prevList,
            //         elements: [response, ...prevList.elements],
            //     }))
            // } else {
            //     setError(true)
            //     console.error("Błąd pobierania danych")
            // }
            // setLoading(false)
        } catch (error) {
            // setError(true)
            console.error(error)
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        setName(newValue)
    }

    return (
        <>
            <h3 className="title mb-3 font-medium">{id}</h3>
            <form
                ref={formRef}
                onSubmit={handleSubmit}
            >
                <div className="flex justify-between gap-3 mb-1">
                    <input
                        type="text"
                        value={name}
                        placeholder="np. Suszarka"
                        className="form-control grow"
                        onChange={handleInputChange}
                        disabled={success}
                    />

                    <button
                        type="submit"
                        className={`flex justify-center items-center btn btn-primary ${
                            success && "btn-green"
                        }`}
                        disabled={success || loading}
                    >
                        {loading ? (
                            <div className="loader small"></div>
                        ) : success ? (
                            <>
                                Dodano
                                <svg
                                    width="9"
                                    height="7"
                                    viewBox="0 0 9 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="ml-2"
                                >
                                    <path
                                        d="M1 3.08333L3.57895 6L8 1"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </>
                        ) : (
                            <svg
                                width="13"
                                height="13"
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.5 1V12"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12 6.5L1 6.5"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        )}
                    </button>
                </div>
                {error && (
                    <div className="text-red-600 text-sm">
                        Nie zapisano zmian. Spróbuj ponownie.
                    </div>
                )}
            </form>
        </>
    )
}
