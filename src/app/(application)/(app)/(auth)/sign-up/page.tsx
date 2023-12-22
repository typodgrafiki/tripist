"use client"

import { useForm } from "react-hook-form"
import Link from "next/link"
import Toastify from "toastify-js"
import { useState } from "react"
import ShowCode from "@/components/application/user/UserSignShowCode"
import { ICreateUser } from "@/types/types"
import { createUserFetch } from "@/actions/axiosActions"
import Button from "@/components/ui/Button"
import TitleModal from "@/components/ui/ModalTitle"

export default function RegisterForm() {
    const [loading, setLoading] = useState(false)
    const [showCode, setShowCode] = useState(false)
    const [userId, setUserId] = useState("")

    const { register, handleSubmit, formState } = useForm<ICreateUser>({
        defaultValues: {
            name: "",
            surname: "",
            email: "",
            password: "",
        },
    })
    const { errors } = formState

    const onSubmit = async (data: ICreateUser) => {
        setLoading(true)

        const result = await createUserFetch(data)

        if (result?.status === 200) {
            setShowCode(true)
            setUserId(result.data)
        } else {
            const { message } = result?.data
            Toastify({
                className: "toastify-error",
                text: message,
            }).showToast()
            setLoading(false)
        }
    }

    return (
        <>
            <TitleModal>Zarejestruj się</TitleModal>
            <div className="relative overflow-hidden">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={`w-full relative ${
                        showCode ? "-left-full" : "left-0"
                    }`}
                >
                    <div className="flex flex-col justify-between gap-3 mb-1 p-1">
                        <div>
                            <input
                                type="text"
                                className={`form-control grow w-full ${
                                    errors.name ? "error" : ""
                                }`}
                                placeholder="Imię"
                                id="formName"
                                disabled={loading}
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Imię jest wymagane",
                                    },
                                })}
                            />
                            {errors.name && (
                                <div className="error-message text-sm mt-1">
                                    {errors.name.message}
                                </div>
                            )}
                        </div>
                        <div>
                            <input
                                type="email"
                                className={`form-control grow w-full ${
                                    errors.email ? "error" : ""
                                }`}
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email jest wymagany",
                                    },
                                })}
                                placeholder="john@example.com"
                                id="formEmail"
                                autoComplete="username"
                                disabled={loading}
                            />
                            {errors.email && (
                                <div className="error-message">
                                    {errors.email.message}
                                </div>
                            )}
                        </div>
                        <div>
                            <input
                                type="password"
                                className={`form-control grow w-full ${
                                    errors.password ? "error" : ""
                                }`}
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Hasło jest wymagane",
                                    },
                                })}
                                placeholder="**********"
                                id="formPassword"
                                autoComplete="current-password"
                                disabled={loading}
                            />
                            {errors.password && (
                                <div className="error-message">
                                    {errors.password.message}
                                </div>
                            )}
                        </div>

                        <Button
                            type="submit"
                            className={`flex justify-center items-center btn btn-primary`}
                            isLoading={loading}
                        >
                            Zarejestruj się
                        </Button>
                    </div>
                    {/* {errors && (
                        <div className="text-red-600 text-sm mt-2">
                            Nie zapisano zmian. Spróbuj ponownie.
                        </div>
                    )} */}
                </form>
                {showCode && (
                    <ShowCode
                        showCode={showCode}
                        userId={userId}
                    />
                )}
            </div>

            <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-300 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-300">
                lub
            </div>
            <p className="text-center text-sm text-gray-600 mt-2">
                Masz już konto? &nbsp;
                <Link
                    className="text-blue-500 hover:underline"
                    href="/sign-in"
                >
                    Zaloguj się
                </Link>
            </p>
        </>
    )
}
