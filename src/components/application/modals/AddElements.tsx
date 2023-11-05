"use client"

import { useState, useRef, useEffect } from "react"
import { useGlobalContext } from "@/context/AppContext"
import { focusInput } from "@/utils/utils"
import DebugLog from "@/utils/developConsoleLog"
import DebugLogScript from "@/utils/developConsoleScripts"

export default function CreateLAddElements() {
    DebugLogScript("ModalAddElement")
    const [name, setName] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const formRef = useRef<HTMLFormElement | null>(null)
    const inputRef = useRef<HTMLInputElement | null>(null)
    const { listActive, setActiveElements } = useGlobalContext()

    // const focusInput = () => {
    //     if (inputRef.current) {
    //         inputRef.current.focus()
    //     }
    // }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            setError(false)
            await setLoading(true)
            const res = await fetch(`/api/lists/addElement`, {
                method: "POST",
                body: JSON.stringify({ name: name, listId: listActive.id }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if (res.ok) {
                const data = await res.json()
                const response = data.body

                response.categories = []
                setSuccess(true)
                setName("")

                setActiveElements((prevActiveElements) => [
                    ...prevActiveElements,
                    response,
                ])

                focusInput(inputRef)

                setTimeout(() => {
                    setSuccess(false)
                }, 1500)
            } else {
                setError(true)
                console.error("Błąd pobierania danych")
            }
            setLoading(false)
        } catch (error) {
            setError(true)
            console.error(error)
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        setName(newValue)
    }

    useEffect(() => {
        focusInput(inputRef)
    }, [])

    return (
        <>
            <DebugLog name="ModalAddElement" />
            <h3 className="title mb-3 font-medium text-base">
                {listActive.name}
            </h3>
            <form
                ref={formRef}
                onSubmit={handleSubmit}
            >
                <div className="flex justify-between gap-3 mb-1">
                    <input
                        type="text"
                        value={name}
                        placeholder="np. Suszarka"
                        className={`animated form-control grow ${
                            success
                                ? "focus:border-green-500 focus:ring-green-500"
                                : ""
                        }`}
                        onChange={handleInputChange}
                        ref={inputRef}
                    />

                    <button
                        type="submit"
                        className={`flex justify-center items-center btn btn-primary ${
                            success && "btn-green"
                        }`}
                        disabled={loading}
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
