"use client"

import { useForm, useFormState } from "react-hook-form"
import Link from "next/link"
import { ICreateUser } from "@/types/types"
import { createUserFetch } from "@/actions/axiosActions"
import Toastify from "toastify-js"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterForm() {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

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

        if (result) {
            router.push("/dashboard")
        } else {
            Toastify({
                className: "toastify-error",
                text: `Nie udało się dodać użytkownika`,
            }).showToast()
            setLoading(false)
        }
    }

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="modal bg-white rounded-3xl shadow-2xl p-5 mx-3 sm:px-9 sm:py-8">
                <h3 className="truncate text-xl font-medium mb-4">
                    Zarejestruj się
                </h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col justify-between gap-3 mb-1">
                        {/* <input
                            type="text"
                            value={name}
                            placeholder="np. Madryt '23, Islandia, Siłownia"
                            className="form-control grow"
                            onChange={(e) => setTitle(e.target.value)}
                            disabled={isPending || isSuccess}
                            ref={inputRef}
                        /> */}

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
                                type="text"
                                className="form-control grow w-full"
                                {...register("surname")}
                                placeholder="Nazwisko"
                                id="formSurname"
                                disabled={loading}
                            />
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

                        <button
                            type="submit"
                            className={`flex justify-center items-center btn btn-primary`}
                            disabled={loading}
                        >
                            Zarejestruj się
                        </button>
                    </div>
                    {/* {errors && (
                        <div className="text-red-600 text-sm mt-2">
                            Nie zapisano zmian. Spróbuj ponownie.
                        </div>
                    )} */}
                </form>

                <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-300 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-300">
                    lub
                </div>
                <p className="text-center text-sm text-gray-600 mt-2">
                    Jeśli masz już konto &nbsp;
                    <Link
                        className="text-blue-500 hover:underline"
                        href="/sign-in"
                    >
                        Zaloguj się
                    </Link>
                </p>
            </div>
        </div>
    )
}
