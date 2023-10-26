"use client"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { useGlobalContext } from "@/context/AppContext"
import { useModal } from "@/context/ModalContext"
import ProgressBar from "../buttons/progressBar"
import { ListsProps } from "@/context/AppContext"
import createListAction from "@/actions/createList"

type IDuplicatProps = {
    duplicate?: {
        id: string
        name: string
    }
}

export default function CreateList({ duplicate }: IDuplicatProps) {
    const router = useRouter()
    const [title, setTitle] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const formRef = useRef<HTMLFormElement | null>(null)
    const {
        setLists,
        listActive,
        setListActive,
        activeElements,
        setActiveElements,
    } = useGlobalContext()
    const { setIsModalOpen } = useModal()

    const close = () => {
        router.push(`/dashboard/${listActive.url}`)
        setTitle("")
        setSuccess(false)
        setIsModalOpen(false)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            setError(false)
            await setLoading(true)

            const response = await createListAction(
                title,
                duplicate ? activeElements : []
            )

            setTitle("")
            setSuccess(true)
            setListActive({
                id: response.list.id,
                url: response.list.url,
                name: response.list.name,
            })

            setActiveElements(response.items)

            setLists((prevLists: ListsProps[]) => [
                ...prevLists,
                {
                    id: response.id,
                    name: response.name,
                    type: undefined,
                    createAt: new Date(),
                    url: response.url,
                    userId: response.userId,
                    predefined: false,
                },
            ])
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        setTitle(newValue)
    }

    return (
        <>
            <h3 className="title mb-3 font-medium">Nazwa</h3>
            <form
                ref={formRef}
                onSubmit={handleSubmit}
            >
                <div className="flex justify-between gap-3 mb-1">
                    <input
                        type="text"
                        value={title}
                        placeholder="np. Madryt '23, Islandia, Siłownia"
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
                        ) : duplicate ? (
                            "Duplikuj listę"
                        ) : (
                            "Stwórz listę"
                        )}
                    </button>
                </div>
                {error && (
                    <div className="text-red-600 text-sm">
                        Nie zapisano zmian. Spróbuj ponownie.
                    </div>
                )}

                {success && <ProgressBar closeFn={close} />}

                {duplicate ? (
                    <div className="mt-4">
                        Duplikujesz listę
                        <span className="font-medium ml-1">
                            {duplicate.name}
                        </span>
                    </div>
                ) : (
                    <>
                        <div className="mt-4">
                            City / 2 dni / importuj listę...
                        </div>
                    </>
                )}
            </form>
        </>
    )
}
