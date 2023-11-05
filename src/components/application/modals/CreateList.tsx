"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useModal } from "@/context/ModalContext"
import ProgressBar from "../buttons/progressBar"
import createListAction from "@/actions/createList"
import { focusInput } from "@/utils/utils"
import DebugLog from "@/utils/developConsoleLog"
import DebugLogScript from "@/utils/developConsoleScripts"

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
    const inputRef = useRef<HTMLInputElement | null>(null)
    const { setIsModalOpen } = useModal()

    const close = () => {
        // router.push(`/dashboard/${listActive.url}`)
        setTitle("")
        setSuccess(false)
        setIsModalOpen(false)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            setError(false)
            await setLoading(true)

            // const response = await createListAction(
            //     title,
            //     duplicate ? activeElements : []
            // )

            // setTitle("")
            // setSuccess(true)
            // setListActive({
            //     id: response.list.id,
            //     url: response.list.url,
            //     name: response.list.name,
            // })

            // setActiveElements(response.items)

            // setLists((prevLists: ListsProps[]) => [
            //     ...prevLists,
            //     {
            //         id: response.list.id,
            //         name: response.list.name,
            //         type: undefined,
            //         createAt: new Date(),
            //         url: response.list.url,
            //         userId: response.list.userId,
            //         predefined: response.predefined,
            //     },
            // ])
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

    useEffect(() => {
        focusInput(inputRef)
    }, [])

    return (
        <>
            <DebugLog name="ModalCreateList" />
            <h3 className="mb-3 text-gray-400 truncate">
                <span className="title font-medium text-gray-900 text-base">
                    Nazwa
                </span>
                {duplicate && (
                    <span className="text-xs ml-2">
                        (Duplikujesz listę &quot;{duplicate.name}&quot;)
                    </span>
                )}
            </h3>
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
                        ref={inputRef}
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

                {!duplicate && (
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
