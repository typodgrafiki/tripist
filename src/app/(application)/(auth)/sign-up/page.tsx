"use client"

// import { SignUp } from "@clerk/nextjs"

// export default function PageSign() {
//     return <SignUp redirectUrl="/dashboard" />
// }
import { useForm } from "react-hook-form"
import Link from "next/link"
import { ICreateUser } from "@/types/types"
import { createUser } from "@/actions/userActions"
import { useQueryClient, useMutation } from "@tanstack/react-query"
import Toastify from "toastify-js"
import { useState } from "react"
import { useFormState } from "react-hook-form"

export default function RegisterForm() {
    const [loading, setLoading] = useState(false)

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
        try {
            const result = await createUser(data)
            console.log("success")
            console.log(result)
        } catch (e) {
            console.log("error")
            console.error(e)
        }
        setLoading(false)
    }

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="modal bg-white rounded-3xl shadow-2xl p-5 mx-3 sm:px-9 sm:py-8">
                <h3 className="truncate">Zarejestruj się</h3>
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

                        <input
                            type="text"
                            className="form-control grow"
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
                        {errors.name?.message}

                        <input
                            type="text"
                            className="form-control grow"
                            {...register("surname")}
                            placeholder="Nazwisko"
                            id="formSurname"
                            disabled={loading}
                        />

                        <input
                            type="email"
                            className="form-control grow"
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
                        {errors.email?.message}

                        <input
                            type="password"
                            className="form-control grow"
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
                        {errors.password?.message}

                        <button
                            type="submit"
                            className={`flex justify-center items-center btn btn-primary`}
                            disabled={loading}
                        >
                            Zarejestruj się
                        </button>
                    </div>
                    {/* {isError && (
                        <div className="text-red-600 text-sm mt-2">
                            Nie zapisano zmian. Spróbuj ponownie.
                        </div>
                    )} */}
                </form>

                <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
                    or
                </div>
                <p className="text-center text-sm text-gray-600 mt-2">
                    If you don&apos;t have an account, please&nbsp;
                    <Link
                        className="text-blue-500 hover:underline"
                        href="/sign-in"
                    >
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    )
}
