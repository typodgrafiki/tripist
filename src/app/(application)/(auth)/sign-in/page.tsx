"use client"

import { useForm, useFormState } from "react-hook-form"
import Link from "next/link"
import { ICreateUser } from "@/types/types"
import Toastify from "toastify-js"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { loginUserFetch } from "@/actions/axiosActions"

export default function RegisterForm() {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const { register, handleSubmit, formState } = useForm<ICreateUser>({
        defaultValues: {
            email: "",
            password: "",
        },
    })
    const { errors } = formState

    const onSubmit = async (data: ICreateUser) => {
        setLoading(true)

        const result = await loginUserFetch(data)

        if (result) {
            setLoading(false)
            router.push("/dashboard")
        } else {
            Toastify({
                className: "toastify-error",
                text: `Niepoprawny login lub hasło`,
            }).showToast()
            setLoading(false)
        }

        // const result = await createUser(data)

        // if (result.status === 200) {
        //     // console.log(result?.data)
        //     router.push("/sign-in")
        // } else {
        //     Toastify({
        //         className: "toastify-error",
        //         text: `Nie udało się dodać użytkownika`,
        //     }).showToast()
        //     setLoading(false)
        // }
    }

    return (
        <>
            <h3 className="truncate text-xl font-medium mb-4">Zaloguj się</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col justify-between gap-3 mb-1">
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
                        Zaloguj się
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
                Nie masz konta?{" "}
                <Link
                    className="text-blue-500 hover:underline"
                    href="/sign-up"
                >
                    Zarejestruj się
                </Link>
            </p>
        </>
    )
}
