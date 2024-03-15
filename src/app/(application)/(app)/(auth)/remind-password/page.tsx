"use client"

import { remindPasswordSend } from "@/actions/axiosActions"
import Button from "@/components/ui/Button"
import { ICreateUser } from "@/types/types"
import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"
import Toastify from "toastify-js"

export default function RemindPassword() {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const { register, handleSubmit, formState } = useForm<ICreateUser>({
        defaultValues: {
            email: "",
        },
    })
    const { errors } = formState

    const onSubmit = async (data: ICreateUser) => {
        setLoading(true)
        const result = await remindPasswordSend(data?.email)

        if (result?.status === 200) {
            setSuccess(true)
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
            {success ? (
                <div className="text-center mt-8 mb-10">
                    <div>Link do resetu hasła został wysłany.</div>
                    <div>Sprawdź pocztę.</div>
                </div>
            ) : (
                <>
                    <h3 className="truncate text-xl font-medium mb-4">
                        Przypomnij hasło
                    </h3>
                    <p className="mb-4">
                        Wpisz swój adres email a my wyślemy link <br />
                        do resetu hasła.
                    </p>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col justify-between gap-3 mb-1"
                    >
                        <div>
                            <label className="font-medium block mb-2">
                                Email
                            </label>
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
                                autoCapitalize="none"
                                disabled={loading}
                            />
                            {errors.email && (
                                <div className="error-message">
                                    {errors.email.message}
                                </div>
                            )}
                        </div>
                        <Button
                            type="submit"
                            className={`flex justify-center items-center btn btn-primary mt-2`}
                            isLoading={loading}
                        >
                            Wyślij link
                        </Button>
                    </form>
                    <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-300 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-300 dark:before:bg-stone-700 dark:after:bg-stone-700">
                        lub
                    </div>
                    <p className="text-center text-sm text-gray-600 mt-2">
                        Nie masz konta?{" "}
                        <Link
                            className="text-blue-500 hover:underline"
                            href="/sign-up"
                        >
                            Zarejestruj się
                        </Link>
                    </p>
                </>
            )}
        </>
    )
}
