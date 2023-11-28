"use client"

import { useForm, useFormState } from "react-hook-form"
import Link from "next/link"
import { ICodeSignUp, ICreateUser } from "@/types/types"
import { confirmSignUp, createUserFetch } from "@/actions/axiosActions"
import Toastify from "toastify-js"
import { useState } from "react"
import { useRouter } from "next/navigation"

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

        if (result) {
            // router.push("/dashboard")
            setShowCode(true)
            setUserId(result.data)
        } else {
            Toastify({
                className: "toastify-error",
                text: `Nie udało się dodać użytkownika`,
            }).showToast()
            setLoading(false)
        }
    }

    return (
        <>
            <h3 className="truncate text-xl font-medium mb-4">
                Zarejestruj się
            </h3>
            <div className="relative overflow-hidden">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={`w-full relative ${
                        showCode ? "-left-full" : "left-0"
                    }`}
                >
                    <div className="flex flex-col justify-between gap-3 mb-1 p-1">
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

const ShowCode = ({
    showCode,
    userId,
}: {
    showCode: boolean
    userId: string
}) => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [code, setCode] = useState<null | number>(null)

    const { register, handleSubmit, formState } = useForm({
        defaultValues: {
            code: "",
            userId: userId,
        },
    })
    const { errors } = formState

    const onSubmit = async (data: ICodeSignUp) => {
        setLoading(true)
        const result = await confirmSignUp(data)

        if (result?.status == 200) {
            router.push("/dashboard")
        } else {
            const { body: message } = result?.data
            Toastify({
                className: "toastify-error",
                text: message,
            }).showToast()
            setLoading(false)
        }
    }
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={`absolute inset-0 w-full flex flex-col justify-center p-1 ${
                showCode ? "" : "left-full"
            }`}
        >
            <input
                hidden
                {...register("userId")}
                value={userId}
                readOnly
            />

            <label className="mb-2 whitespace-nowrap font-medium mr-3">
                Wpisz kod
            </label>
            <input
                type="text"
                className={`form-control w-full mb-3`}
                placeholder="----"
                disabled={loading}
                {...register("code", {
                    required: {
                        value: true,
                        message: "Kod jest wymagany",
                    },
                })}
            />

            {errors.code && (
                <div className="error-message">{errors.code.message}</div>
            )}
            <button className="btn btn-primary w-full">Wyślij</button>
        </form>
    )
}
