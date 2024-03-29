"use client"

import { useForm, useFormState } from "react-hook-form"
import Link from "next/link"
import { ICreateUser } from "@/types/types"
import Toastify from "toastify-js"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { generateEmailSignCode, loginUserFetch } from "@/actions/axiosActions"
import ShowCode from "@/components/application/user/UserSignShowCode"
import Button from "@/components/ui/Button"
import ModalTitle from "@/components/ui/ModalTitle"
import Label from "@/components/ui/Label"
import PasswordInput from "@/components/ui/PasswordInput"

export default function RegisterForm() {
    const [loading, setLoading] = useState(false)
    const [emailConfirmed, setEmailConfirmed] = useState(true)
    const [email, setEmail] = useState("")
    const router = useRouter()

    const { register, handleSubmit, formState, setValue } =
        useForm<ICreateUser>({
            defaultValues: {
                email: "",
                password: "",
            },
        })
    const { errors } = formState

    const changePass = (value: string) => {
        setValue("password", value)
    }

    const onSubmit = async (data: ICreateUser) => {
        setLoading(true)

        const result = await loginUserFetch(data)

        if (result?.status === 200) {
            router.push("/dashboard")
        } else if (result?.status === 403) {
            const { message } = result?.data
            Toastify({
                className: "toastify-error",
                text: message,
            }).showToast()
            setEmailConfirmed(false)
            setLoading(false)
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
            {!emailConfirmed ? (
                <ConfirmEmail
                    loading={loading}
                    setLoading={setLoading}
                    email={email}
                />
            ) : (
                <>
                    <ModalTitle>Zaloguj się</ModalTitle>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col justify-between gap-3 mb-1">
                            <div>
                                <Label
                                    name="Email"
                                    htmlFor="formEmail"
                                />
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
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.email && (
                                    <div className="error-message">
                                        {errors.email.message}
                                    </div>
                                )}
                            </div>
                            <div>
                                <Label
                                    name="Hasło"
                                    htmlFor="formPassword"
                                />
                                <PasswordInput
                                    register={register}
                                    errors={errors}
                                    loading={loading}
                                    changePass={changePass}
                                />
                                {errors.password && (
                                    <div className="error-message">
                                        {errors.password.message}
                                    </div>
                                )}
                            </div>
                            <Button
                                type="submit"
                                className={`flex justify-center items-center btn btn-primary mt-4`}
                                isLoading={loading}
                            >
                                {loading ? "Logowanie..." : "Zaloguj się"}
                            </Button>
                        </div>
                    </form>
                </>
            )}

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
            <div className="flex text-muted justify-center mt-3 text-xs">
                <Link
                    href="/remind-password"
                    className="text-muted hover:text-[var(--primary)]"
                >
                    Zapomniałeś hasła?
                </Link>
            </div>
        </>
    )
}

const ConfirmEmail = ({
    loading,
    setLoading,
    email,
}: {
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    email: string
}) => {
    const [showCode, setShowCode] = useState(false)
    const [userId, setUserId] = useState("")
    const { register, handleSubmit, formState } = useForm<ICreateUser>({
        defaultValues: {
            email: email,
        },
    })
    const { errors, isLoading } = formState

    const onSubmit = async (data: ICreateUser) => {
        setLoading(true)

        const result = await generateEmailSignCode(data)

        if (result?.status === 200) {
            setUserId(result.data.userId)
            setShowCode(true)
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
            {showCode ? (
                <ShowCode
                    userId={userId}
                    email={email}
                />
            ) : (
                <>
                    <ModalTitle>Wyślij kod email</ModalTitle>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col justify-between gap-3 mb-1">
                            <div>
                                <span className="text-red-500 text-sm">
                                    Twój email nie został potwierdzony.
                                </span>
                                <br />
                                Wyślij ponownie kod na adres email:
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
                                className={`flex justify-center items-center btn btn-primary`}
                                isLoading={loading}
                            >
                                {loading
                                    ? "Wysyłanie..."
                                    : "Wyślij kod ponownie"}
                            </Button>
                        </div>
                    </form>
                </>
            )}
        </>
    )
}
